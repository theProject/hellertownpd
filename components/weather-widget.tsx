"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cloud, CloudRain, Sun, CloudSnow, Wind, Droplets, Eye, Gauge } from "lucide-react"

interface WeatherData {
  temperature: number
  condition: string
  humidity: number
  windSpeed: number
  visibility: number
  pressure: number
  feelsLike: number
  description: string
}

const getWeatherIcon = (condition: string) => {
  const lowerCondition = condition.toLowerCase()
  if (lowerCondition.includes("rain") || lowerCondition.includes("drizzle")) {
    return <CloudRain className="h-8 w-8 text-blue-500" />
  } else if (lowerCondition.includes("snow")) {
    return <CloudSnow className="h-8 w-8 text-blue-200" />
  } else if (lowerCondition.includes("cloud")) {
    return <Cloud className="h-8 w-8 text-gray-500" />
  } else {
    return <Sun className="h-8 w-8 text-yellow-500" />
  }
}

export function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        // Using OpenWeatherMap API (you'll need to replace with actual API key)
        // For demo purposes, we'll simulate weather data
        await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate API call

        // Simulated weather data for Hellertown, PA
        const mockWeatherData: WeatherData = {
          temperature: Math.round(Math.random() * 30 + 40), // 40-70°F
          condition: ["Clear", "Partly Cloudy", "Cloudy", "Light Rain"][Math.floor(Math.random() * 4)],
          humidity: Math.round(Math.random() * 40 + 40), // 40-80%
          windSpeed: Math.round(Math.random() * 15 + 5), // 5-20 mph
          visibility: Math.round(Math.random() * 5 + 5), // 5-10 miles
          pressure: Math.round(Math.random() * 2 + 29), // 29-31 inHg
          feelsLike: Math.round(Math.random() * 30 + 40), // Similar to temp
          description: "Perfect weather for community policing",
        }

        setWeather(mockWeatherData)
        setLoading(false)
      } catch (err) {
        setError("Unable to fetch weather data")
        setLoading(false)
      }
    }

    fetchWeather()

    // Update weather every 10 minutes
    const interval = setInterval(fetchWeather, 10 * 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return (
      <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200 dark:border-blue-700">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <Cloud className="h-5 w-5 text-blue-500 animate-pulse" />
            Hellertown Weather
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="animate-pulse">
            <div className="h-8 bg-muted rounded mb-2"></div>
            <div className="h-4 bg-muted rounded w-3/4"></div>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (error || !weather) {
    return (
      <Card className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900/20 dark:to-gray-800/20 border-gray-200 dark:border-gray-700">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <Cloud className="h-5 w-5 text-gray-500" />
            Hellertown Weather
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">Weather data unavailable</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200 dark:border-blue-700 shadow-sm hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center gap-2">
            {getWeatherIcon(weather.condition)}
            Hellertown Weather
          </CardTitle>
          <Badge variant="secondary" className="text-xs">
            Live
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Main Temperature Display */}
        <div className="flex items-center justify-between">
          <div>
            <div className="text-3xl font-bold text-foreground">{weather.temperature}°F</div>
            <div className="text-sm text-muted-foreground">Feels like {weather.feelsLike}°F</div>
          </div>
          <div className="text-right">
            <div className="font-medium text-foreground">{weather.condition}</div>
            <div className="text-xs text-muted-foreground">{weather.description}</div>
          </div>
        </div>

        {/* Weather Details Grid */}
        <div className="grid grid-cols-2 gap-3 text-xs">
          <div className="flex items-center gap-2">
            <Droplets className="h-3 w-3 text-blue-500" />
            <span className="text-muted-foreground">Humidity</span>
            <span className="font-medium ml-auto">{weather.humidity}%</span>
          </div>
          <div className="flex items-center gap-2">
            <Wind className="h-3 w-3 text-gray-500" />
            <span className="text-muted-foreground">Wind</span>
            <span className="font-medium ml-auto">{weather.windSpeed} mph</span>
          </div>
          <div className="flex items-center gap-2">
            <Eye className="h-3 w-3 text-green-500" />
            <span className="text-muted-foreground">Visibility</span>
            <span className="font-medium ml-auto">{weather.visibility} mi</span>
          </div>
          <div className="flex items-center gap-2">
            <Gauge className="h-3 w-3 text-purple-500" />
            <span className="text-muted-foreground">Pressure</span>
            <span className="font-medium ml-auto">{weather.pressure}"</span>
          </div>
        </div>

        {/* Location */}
        <div className="text-xs text-muted-foreground text-center pt-2 border-t border-border">
          📍 Hellertown, PA 18055 • Updated {new Date().toLocaleTimeString()}
        </div>
      </CardContent>
    </Card>
  )
}
