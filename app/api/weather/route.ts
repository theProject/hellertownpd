
import { NextResponse } from "next/server"

export async function GET() {
  const apiKey = process.env.OPENWEATHER_API_KEY
  const lat = process.env.NEXT_PUBLIC_WEATHER_LAT
  const lon = process.env.NEXT_PUBLIC_WEATHER_LON

  const defaultData = {
    current: null,
    forecast: [],
    alerts: [],
    historical: null,
    error: null,
  }

  if (!apiKey || !lat || !lon) {
    return NextResponse.json({
      ...defaultData,
      error: "Missing API key or location configuration.",
    })
  }

  // Prefer One Call 3.0 (paid) but fallback to free-tier endpoints
  const oneCallUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=${apiKey}&units=imperial`

  try {
    const oneCallRes = await fetch(oneCallUrl)
    if (oneCallRes.ok) {
      const oneCallData = await oneCallRes.json()
      return NextResponse.json({
        current: oneCallData.current || null,
        forecast: oneCallData.daily ? oneCallData.daily.slice(0, 6) : [],
        alerts: oneCallData.alerts || [],
        historical: null, // Premium-only, omit for now
        error: null,
      })
    }

    // If One Call fails, fall back to free-tier endpoints
    console.warn(`One Call 3.0 failed (${oneCallRes.status}), falling back to free-tier.`)

    const currentRes = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`
    )
    const forecastRes = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`
    )

    const currentData = currentRes.ok ? await currentRes.json() : null
    const forecastData = forecastRes.ok ? await forecastRes.json() : null

    // Transform 3-hour forecast into daily summaries
    const dailyMap: Record<string, { temps: number[]; pops: number[]; condition: string }> = {}
    if (forecastData?.list) {
      for (const entry of forecastData.list) {
        const date = new Date(entry.dt * 1000)
        const dayName = date.toLocaleDateString("en-US", { weekday: "long" })
        if (!dailyMap[dayName]) {
          dailyMap[dayName] = { temps: [], pops: [], condition: entry.weather?.[0]?.main || "Clear" }
        }
        dailyMap[dayName].temps.push(entry.main.temp)
        dailyMap[dayName].pops.push(entry.pop || 0)
      }
    }

    const forecast = Object.entries(dailyMap)
      .slice(0, 6)
      .map(([day, vals]) => ({
        dt: Date.now(),
        temp: {
          max: Math.max(...vals.temps),
          min: Math.min(...vals.temps),
        },
        weather: [{ main: vals.condition }],
        pop: vals.pops.length ? vals.pops.reduce((a, b) => a + b) / vals.pops.length : 0,
        day,
      }))

    return NextResponse.json({
      current: currentData ? {
        temp: currentData.main.temp,
        feels_like: currentData.main.feels_like,
        weather: currentData.weather,
        humidity: currentData.main.humidity,
        wind_speed: currentData.wind.speed,
        visibility: currentData.visibility,
        pressure: currentData.main.pressure,
      } : null,
      forecast,
      alerts: [],
      historical: null,
      error: null,
    })
  } catch (err: any) {
    console.error("Weather API crashed:", err)
    return NextResponse.json({
      ...defaultData,
      error: "Unable to fetch weather data.",
    })
  }
}