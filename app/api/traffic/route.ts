import { NextResponse } from "next/server";

// Define the structure for our routes, including a display name and coordinates
const routes = [
  { name: "Route 412 (Main St)", destination: "40.6075,-75.3653" },
  { name: "I-78 East/West", destination: "40.6125,-75.2955" },
  { name: "Route 378 (Bethlehem Pike)", destination: "40.6033,-75.3789" },
  { name: "Route 309 (Center Valley)", destination: "40.5487,-75.4022" },
  { name: "Polk Valley Rd", destination: "40.5663,-75.3361" },
];

// Define the origin point for all routes (e.g., center of Hellertown, PA)
const origin = "40.5848,-75.3377";

export async function GET() {
  const apiKey = process.env.NEXT_PUBLIC_Maps_API;
  if (!apiKey) {
    return NextResponse.json({ error: "API key is missing" }, { status: 500 });
  }

  // Create a pipe-separated string of destinations for the API call
  const destinations = routes.map(route => route.destination).join("|");

  const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origin}&destinations=${destinations}&departure_time=now&key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.status !== "OK") {
      console.error("Google Maps API Error:", data.error_message || data.status);
      return NextResponse.json({ error: data.error_message || data.status }, { status: 500 });
    }

    // Transform the Google Maps API response into the format your widget expects
    const trafficData = data.rows[0].elements.map((element: any, index: number) => {
      if (element.status !== "OK") {
        return {
          road: routes[index].name,
          condition: "unknown",
          travelTime: "N/A",
          normalTime: "N/A",
          delay: "Data unavailable",
          incidents: "Could not fetch route data",
        };
      }
      
      const durationWithTraffic = Math.round(element.duration_in_traffic.value / 60);
      const durationNormal = Math.round(element.duration.value / 60);
      const delayMinutes = durationWithTraffic - durationNormal;

      let condition: "light" | "moderate" | "heavy" = "light";
      if (delayMinutes > 5) {
        condition = "heavy";
      } else if (delayMinutes > 2) {
        condition = "moderate";
      }

      return {
        road: routes[index].name,
        condition: condition,
        travelTime: `${durationWithTraffic} min`,
        normalTime: `${durationNormal} min`,
        delay: delayMinutes > 0 ? `+${delayMinutes} min` : "On time",
        // The API doesn't provide incident details, so this is left out for now.
        // You could integrate another API or service for this if needed.
        incidents: undefined, 
      };
    });

    return NextResponse.json(trafficData);
  } catch (error) {
    console.error("Fetch error:", error);
    return NextResponse.json({ error: "Failed to fetch traffic data" }, { status: 500 });
  }
}