import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.OPENWEATHER_API_KEY;
  const lat = process.env.NEXT_PUBLIC_WEATHER_LAT;
  const lon = process.env.NEXT_PUBLIC_WEATHER_LON;

  if (!apiKey || !lat || !lon) {
    return NextResponse.json(
      { error: "Missing API key or location configuration." },
      { status: 200 } // Avoid 500 so frontend can still load
    );
  }

  const oneCallUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=${apiKey}&units=imperial`;

  try {
    const response = await fetch(oneCallUrl);

    if (!response.ok) {
      const errorText = await response.text();
      console.error(
        `OpenWeatherMap fetch failed: ${response.status} - ${errorText}`
      );
      return NextResponse.json(
        {
          error: "Failed to fetch weather data.",
          status: response.status,
        },
        { status: 200 }
      );
    }

    const data = await response.json();

    const responseData = {
      current: data.current || null,
      forecast: data.daily ? data.daily.slice(0, 6) : [],
      alerts: data.alerts || [],
    };

    return NextResponse.json(responseData);
  } catch (error) {
    console.error("Weather API route crashed:", error);
    return NextResponse.json(
      {
        error: "Unable to fetch weather data.",
        details: error.message || "Unknown error",
      },
      { status: 200 }
    );
  }
}