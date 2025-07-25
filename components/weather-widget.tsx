"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Cloud,
  CloudRain,
  Sun,
  CloudSnow,
  Wind,
  Droplets,
  Eye,
  Gauge,
  AlertTriangle,
  Thermometer,
  Umbrella,
  Snowflake,
  Calendar,
  TrendingUp,
  TrendingDown,
} from "lucide-react"

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

interface ForecastDay {
  day: string
  high: number
  low: number
  condition: string
  precipitation: number
}

interface WeatherAlert {
  type: string
  message: string
  severity: "low" | "medium" | "high"
}

interface HistoricalWeather {
  temperature: number
  condition: string
  high: number
  low: number
  year: number
}

// --- Helpers ---
const getWeatherIcon = (condition: string, size = "h-8 w-8") => {
  const c = condition.toLowerCase()
  if (c.includes("rain") || c.includes("drizzle")) return <CloudRain className={`${size} text-blue-500`} />
  if (c.includes("snow")) return <CloudSnow className={`${size} text-blue-200`} />
  if (c.includes("clouds")) return <Cloud className={`${size} text-gray-500`} />
  return <Sun className={`${size} text-yellow-500`} />
}

const getSmallWeatherIcon = (condition: string) => {
  const c = condition.toLowerCase()
  if (c.includes("rain")) return <CloudRain className="h-4 w-4 text-blue-500" />
  if (c.includes("snow")) return <Snowflake className="h-4 w-4 text-blue-200" />
  if (c.includes("clouds")) return <Cloud className="h-4 w-4 text-gray-500" />
  return <Sun className="h-4 w-4 text-yellow-500" />
}

const getCurrentSeason = () => {
  const month = new Date().getMonth() + 1
  if (month >= 3 && month <= 5) return "spring"
  if (month >= 6 && month <= 8) return "summer"
  if (month >= 9 && month <= 11) return "fall"
  return "winter"
}

const getSeasonalAlerts = (weather: WeatherData, season: string): WeatherAlert[] => {
  const alerts: WeatherAlert[] = []
  switch (season) {
    case "summer":
      if (weather.temperature > 85) {
        alerts.push({
          type: "Heat Advisory",
          message: "High temperatures expected. Stay hydrated and check on elderly neighbors.",
          severity: "medium",
        })
      }
      break
    case "winter":
      if (weather.temperature < 32) {
        alerts.push({
          type: "Winter Weather Advisory",
          message: "Freezing temperatures. Protect pipes and ensure pets have shelter.",
          severity: "medium",
        })
      }
      break
    case "spring":
      if (weather.windSpeed > 15) {
        alerts.push({
          type: "Wind Advisory",
          message: "Strong spring winds. Secure outdoor furniture and check tree branches.",
          severity: "medium",
        })
      }
      break
    case "fall":
      if (weather.temperature < 45) {
        alerts.push({
          type: "First Frost Warning",
          message: "Temperatures dropping. Protect plants and prepare heating systems.",
          severity: "low",
        })
      }
      break
  }
  return alerts
}

// --- Component ---
export function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [forecast, setForecast] = useState<ForecastDay[]>([])
  const [alerts, setAlerts] = useState<WeatherAlert[]>([])
  const [historical, setHistorical] = useState<HistoricalWeather | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch("/api/weather")
        const data = await res.json()

        if (!res.ok || !data.current) {
          throw new Error(data.error || "Weather API unavailable")
        }

        // Safely extract current weather
        const temp = data.current?.temp ?? 0
        const feels = data.current?.feels_like ?? 0
        const condition = data.current?.weather?.[0]?.main ?? "Clear"
        const desc = data.current?.weather?.[0]?.description ?? "No description"

        const currentWeather: WeatherData = {
          temperature: Math.round(temp),
          feelsLike: Math.round(feels),
          condition,
          description: desc,
          humidity: data.current?.humidity ?? 0,
          windSpeed: Math.round(data.current?.wind_speed ?? 0),
          visibility: data.current?.visibility ? Math.round(data.current.visibility / 1609) : 0,
          pressure: data.current?.pressure ? data.current.pressure * 0.02953 : 0,
        }
        setWeather(currentWeather)

        // Forecast
        const forecastList: ForecastDay[] = Array.isArray(data.forecast)
          ? data.forecast.map((day: any, idx: number) => ({
              day: day.day || (idx === 0 ? "Today" : new Date(day.dt * 1000).toLocaleDateString("en-US", { weekday: "long" })),
              high: Math.round(day.temp?.max ?? 0),
              low: Math.round(day.temp?.min ?? 0),
              condition: day.weather?.[0]?.main ?? "Clear",
              precipitation: Math.round((day.pop ?? 0) * 100),
            }))
          : []
        setForecast(forecastList)

        // Historical placeholder (if present)
        if (data.historical) {
          setHistorical({
            temperature: Math.round(data.historical?.temp ?? 0),
            condition: data.historical?.weather?.[0]?.main ?? "Clear",
            high: Math.round((data.historical?.temp ?? 0) + 5),
            low: Math.round((data.historical?.temp ?? 0) - 5),
            year: data.historical?.dt
              ? new Date(data.historical.dt * 1000).getFullYear()
              : new Date().getFullYear(),
          })
        }

        // Alerts
        const apiAlerts: WeatherAlert[] = Array.isArray(data.alerts)
          ? data.alerts.map((a: any) => ({
              type: a.event ?? "Alert",
              message: a.description ?? "Stay safe.",
              severity: "high",
            }))
          : []

        const season = getCurrentSeason()
        setAlerts([...apiAlerts, ...getSeasonalAlerts(currentWeather, season)])
      } catch (err: any) {
        setError(err.message || "Unable to fetch weather data")
      } finally {
        setLoading(false)
      }
    }

    fetchWeather()
    const interval = setInterval(fetchWeather, 30 * 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  // Loading card
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
          <div className="animate-pulse space-y-3">
            <div className="h-8 bg-muted rounded mb-2"></div>
            <div className="h-4 bg-muted rounded w-3/4"></div>
            <div className="h-20 bg-muted rounded"></div>
          </div>
        </CardContent>
      </Card>
    )
  }

  // Error card
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
          <p className="text-sm text-muted-foreground">{error || "Weather data unavailable"}</p>
        </CardContent>
      </Card>
    )
  }

  const tempDiff = historical ? weather.temperature - historical.temperature : 0

  // Main card
  return (
    <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200 dark:border-blue-700 shadow-sm hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center gap-2">
            {getWeatherIcon(weather.condition, "h-5 w-5")}
            Hellertown Weather
          </CardTitle>
          <Badge className="text-xs bg-green-600 text-white">Live</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Current Weather */}
        <div className="flex items-center justify-between">
          <div>
            <div className="text-3xl font-bold text-foreground">{weather.temperature}°F</div>
            <div className="text-sm text-muted-foreground">Feels like {weather.feelsLike}°F</div>
          </div>
          <div className="text-right">
            <div className="font-medium text-foreground capitalize">{weather.condition}</div>
            <div className="text-xs text-muted-foreground capitalize">{weather.description}</div>
          </div>
        </div>

        {/* Conditions grid */}
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
            <span className="font-medium ml-auto">{weather.pressure.toFixed(2)}"</span>
          </div>
        </div>

        <Separator className="my-4" />

        {/* Forecast */}
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
            <Thermometer className="h-4 w-4 text-orange-500" />
            Your 6-Day Hellertown Forecast
          </h4>
          <div className="space-y-2">
            {forecast.map((day, idx) => (
              <div key={idx} className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 flex-1">
                  {getSmallWeatherIcon(day.condition)}
                  <span className="font-medium text-foreground min-w-[60px]">{day.day}</span>
                  <span className="text-muted-foreground text-xs">{day.condition}</span>
                </div>
                <div className="flex items-center gap-2">
                  {day.precipitation > 0 && (
                    <div className="flex items-center gap-1">
                      <Umbrella className="h-3 w-3 text-blue-400" />
                      <span className="text-blue-600">{day.precipitation}%</span>
                    </div>
                  )}
                  <span className="font-medium text-foreground">{day.high}°</span>
                  <span className="text-muted-foreground">/{day.low}°</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Historical */}
        {historical && (
          <>
            <Separator className="my-4" />
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                <Calendar className="h-4 w-4 text-indigo-500" />
                This Day Five Years Ago ({historical.year})
              </h4>
              <div className="bg-muted/50 rounded-md p-3 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    {getSmallWeatherIcon(historical.condition)}
                    <span className="text-muted-foreground">{historical.condition}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-foreground">
                      {historical.high}°/{historical.low}°
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Temperature comparison:</span>
                  <div className="flex items-center gap-1">
                    {tempDiff > 0 ? (
                      <TrendingUp className="h-3 w-3 text-red-500" />
                    ) : tempDiff < 0 ? (
                      <TrendingDown className="h-3 w-3 text-blue-500" />
                    ) : null}
                    <span
                      className={`font-medium ${
                        tempDiff > 0
                          ? "text-red-600"
                          : tempDiff < 0
                            ? "text-blue-600"
                            : "text-muted-foreground"
                      }`}
                    >
                      {tempDiff > 0 ? "+" : ""}
                      {tempDiff}° vs five years ago
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Alerts */}
        {alerts.length > 0 && (
          <>
            <Separator className="my-4" />
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-amber-500" />
                Alerts & Advisories
              </h4>
              <div className="space-y-2">
                {alerts.map((a, i) => (
                  <div
                    key={i}
                    className={`p-2 rounded-md text-xs ${
                      a.severity === "high"
                        ? "bg-red-100 dark:bg-red-900/20 border border-red-200 dark:border-red-800"
                        : a.severity === "medium"
                          ? "bg-amber-100 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800"
                          : "bg-blue-100 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800"
                    }`}
                  >
                    <div className="font-medium text-foreground mb-1">{a.type}</div>
                    <p className="text-muted-foreground leading-relaxed">{a.message}</p>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Footer & Sponsorship */}
        <div className="text-xs text-muted-foreground text-center pt-2 border-t border-border">
          📍 Hellertown, PA 18055 • Updated {new Date().toLocaleTimeString()}
        </div>
        <Separator className="my-2" />
        <div className="text-center space-y-2">
          <div className="flex justify-center">
            <Image
              src="/panther.png"
              alt="Saucon Valley Panther Mascot"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
          <Separator className="my-2" />
          <p className="font-bold text-foreground">School Starts August 25th!</p>
          <p className="font-bold text-foreground">Start planning now, check your schedules</p>
          <Separator className="my-2" />
          <p className="text-xl text-pink-700 font-bold">
            Local weather sponsored by the Saucon Valley Cheerleaders
          </p>
          <Separator className="my-8" />
          <p className="font-bold text-foreground">Site publicly maintained by theProject</p>
          <div className="flex justify-center">
            <Image
              src="/project.png"
              alt="theProject Logo"
              width={300}
              height={100}
              className="object-contain"
            />
          </div>
          <Separator className="my-4" />
          <div className="text-sm">
            <a
              href="https://bytheproject.com"
              target="_blank"
             rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Visit theProject
            </a>
            <p className="mt-2">
              Contact the{" "}
              <a
                href="mailto:tjsmith@bytheproject.com"
                className="text-blue-500 hover:underline"
              >
                Admin - Tristan Smith
              </a>
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}