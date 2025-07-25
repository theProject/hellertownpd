import { NextResponse } from "next/server";

// Helper function to get the date string for this day one year ago (e.g., "2024-07-24")
const getDateForOneYearAgo = () => {
  const now = new Date(); // Current date is July 24, 2025
  now.setFullYear(now.getFullYear() - 1); // Sets the date to July 24, 2024
  // Formats the date to YYYY-MM-DD, which is required by the day_summary endpoint
  return now.toISOString().split("T")[0];
};

export async function GET() {
  const apiKey = process.env.OPENWEATHER_API_KEY;
  const lat = process.env.NEXT_PUBLIC_WEATHER_LAT;
  const lon = process.env.NEXT_PUBLIC_WEATHER_LON;

  if (!apiKey || !lat || !lon) {
    return NextResponse.json(
      { error: "Missing API key or location configuration." },
      { status: 500 }
    );
  }

  // 1. URL for current weather, 6-day forecast, and alerts
  const oneCallUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=${apiKey}&units=imperial`;

  // 2. URL for the historical daily aggregation from last year
  const lastYearDate = getDateForOneYearAgo();
  const aggUrl = `https://api.openweathermap.org/data/3.0/onecall/day_summary?lat=${lat}&lon=${lon}&date=${lastYearDate}&appid=${apiKey}&units=imperial`;

  try {
    // We fetch both sets of data in parallel to be efficient
    const [oneCallResponse, aggResponse] = await Promise.all([
      fetch(oneCallUrl),
      fetch(aggUrl),
    ]);

    // The main weather data is essential. If it fails, we can't continue.
    if (!oneCallResponse.ok) {
      console.error(
        "Main Weather API Error:",
        oneCallResponse.status,
        await oneCallResponse.text()
      );
      throw new Error("Failed to fetch essential weather data.");
    }
    const oneCallData = await oneCallResponse.json();

    // The historical data is an enhancement. We check if it was successful.
    // If not, we set it to null instead of crashing the whole app.
    let lastYearData = null;
    if (aggResponse.ok) {
      lastYearData = await aggResponse.json();
    } else {
      // This will log an informative message on your server if the call fails,
      // which can happen with certain API subscription plans.
      console.warn(
        `Could not fetch historical aggregation data (Status: ${aggResponse.status}). The feature may not be available on your current plan.`
      );
    }

    // This is the final data object sent to your frontend
    const responseData = {
      current: oneCallData.current,
      forecast: oneCallData.daily.slice(0, 6), // Provides a 6-day forecast
      alerts: oneCallData.alerts || [],        // Provides alerts, or an empty array
      lastYear: lastYearData,                   // Provides last year's data, or null
    };

    return NextResponse.json(responseData);
  } catch (error) {
    console.error("Weather API Route has crashed:", error);
    return NextResponse.json(
      { error: "Unable to fetch weather data." },
      { status: 500 }
    );
  }
}