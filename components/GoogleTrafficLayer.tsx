"use client";

import { useMap } from "@vis.gl/react-google-maps";
import { useEffect } from "react";

// This is a new, custom component to reliably add the traffic layer
export function GoogleTrafficLayer() {
  const map = useMap(); // This hook gets the current map instance

  useEffect(() => {
    if (!map) return; // Wait until the map is ready

    // Create a traffic layer instance
    const trafficLayer = new google.maps.TrafficLayer();
    
    // Add the layer to the map
    trafficLayer.setMap(map);

    // This is a cleanup function that removes the layer when the component is no longer on screen
    return () => {
      trafficLayer.setMap(null);
    };
  }, [map]); // Re-run this effect if the map instance changes

  return null; // This component doesn't render any visible HTML itself
}