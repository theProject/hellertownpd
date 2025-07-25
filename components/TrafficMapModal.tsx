"use client";

import { APIProvider, Map } from "@vis.gl/react-google-maps";
import { GoogleTrafficLayer } from "./GoogleTrafficLayer";

interface TrafficMapProps {
  center?: { lat: number; lng: number };
  isInteractive?: boolean;
  height?: string;
  zoom?: number;
}

export function TrafficMapModal({
  center = { lat: 40.5848, lng: -75.3377 }, // Default to Hellertown center
  isInteractive = true,
  height = "450px",
  zoom = 13 // Default zoom is now closer
}: TrafficMapProps) {
  const apiKey = process.env.NEXT_PUBLIC_Maps_API;

  if (!apiKey) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-red-500">Google Maps API key is not configured.</p>
      </div>
    );
  }

  return (
    <div style={{ height }} className="w-full">
      <APIProvider apiKey={apiKey}>
        <Map
          defaultCenter={center} // Use defaultCenter to allow panning for sure
          defaultZoom={zoom}
          gestureHandling={isInteractive ? "greedy" : "none"}
          disableDefaultUI={true}
          mapId="b69429"
        >
          <GoogleTrafficLayer />
        </Map>
      </APIProvider>
    </div>
  );
}