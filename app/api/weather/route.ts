import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.OPENWEATHER_API_KEY;
  const lat = process.env.NEXT_PUBLIC_WEATHER_LAT;
  const lon = process.env.NEXT_PUBLIC_WEATHER_LON;

  const defaultResponse = {
    current: null,
    forecast: [],
    alerts: [],
    error: null,
  };

  if (!apiKey || !lat || !lon) {
    return NextResponse.json({
      ...defaultResponse,
      error: "Missing API key or location configuration.",
    });
  }

  const oneCallUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=${apiKey}&units=imperial`;

  try {
    const response = await fetch(oneCallUrl);

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`OpenWeatherMap fetch failed: ${response.status} - ${errorText}`);
      return NextResponse.json({
        ...defaultResponse,
        error: `Failed to fetch weather data (${response.status})`,
      });
    }

    const data = await response.json();

    return NextResponse.json({
      current: data.current || null,
      forecast: data.daily ? data.daily.slice(0, 6) : [],
      alerts: data.alerts || [],
      error: null,
    });
  } catch (error) {
    console.error("Weather API route crashed:", error);
    return NextResponse.json({
      ...defaultResponse,
      error: error.message || "Unknown error",
    });
  }
}