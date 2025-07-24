import { NextResponse } from "next/server"

// Helper function to get the Unix timestamp for this day five years ago
const getTimestampForFiveYearsAgo = () => {
  const now = new Date()
  // Set the year to 5 years before the current year
  now.setFullYear(now.getFullYear() - 5)
  return Math.floor(now.getTime() / 1000)
}

export async function GET() {
  const apiKey = process.env.OPENWEATHER_API_KEY
  const lat = process.env.NEXT_PUBLIC_WEATHER_LAT
  const lon = process.env.NEXT_PUBLIC_WEATHER_LON

  if (!apiKey || !lat || !lon) {
    return NextResponse.json(
      { error: "Missing API key or location configuration." },
      { status: 500 },
    )
  }

  const oneCallUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=${apiKey}&units=imperial`
  
  // Get the timestamp for 5 years ago
  const historicalTimestamp = getTimestampForFiveYearsAgo()
  const historicalUrl = `https://api.openweathermap.org/data/3.0/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${historicalTimestamp}&appid=${apiKey}&units=imperial`

  try {
    // Fetch both current and historical data in parallel again
    const [oneCallResponse, historicalResponse] = await Promise.all([
      fetch(oneCallUrl),
      fetch(historicalUrl),
    ])

    if (!oneCallResponse.ok || !historicalResponse.ok) {
      if (!oneCallResponse.ok) {
        console.error("One Call API Error:", oneCallResponse.status, await oneCallResponse.text());
      }
      if (!historicalResponse.ok) {
        console.error("Historical API Error:", historicalResponse.status, await historicalResponse.text());
      }
      throw new Error("Failed to fetch data from OpenWeather API");
    }

    const oneCallData = await oneCallResponse.json()
    const historicalData = await historicalResponse.json()

    const responseData = {
      current: oneCallData.current,
      forecast: oneCallData.daily.slice(0, 3),
      alerts: oneCallData.alerts || [],
      // Safely access the historical data
      historical: historicalData?.data?.[0] || null,
    }

    return NextResponse.json(responseData)
  } catch (error) {
    console.error("Weather API Route CRASHED:", error)
    return NextResponse.json(
      { error: "Unable to fetch weather data." },
      { status: 500 },
    )
  }
}