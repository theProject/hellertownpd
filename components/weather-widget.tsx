"use client"

import { useState, useEffect } from "react"
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

const getWeatherIcon = (condition: string, size = "h-8 w-8") => {
  const lowerCondition = condition.toLowerCase()
  if (lowerCondition.includes("rain") || lowerCondition.includes("drizzle")) {
    return <CloudRain className={`${size} text-blue-500`} />
  } else if (lowerCondition.includes("snow")) {
    return <CloudSnow className={`${size} text-blue-200`} />
  } else if (lowerCondition.includes("cloud")) {
    return <Cloud className={`${size} text-gray-500`} />
  } else {
    return <Sun className={`${size} text-yellow-500`} />
  }
}

const getSmallWeatherIcon = (condition: string) => {
  const lowerCondition = condition.toLowerCase()
  if (lowerCondition.includes("rain")) return <CloudRain className="h-4 w-4 text-blue-500" />
  if (lowerCondition.includes("snow")) return <Snowflake className="h-4 w-4 text-blue-200" />
  if (lowerCondition.includes("cloud")) return <Cloud className="h-4 w-4 text-gray-500" />
  return <Sun className="h-4 w-4 text-yellow-500" />
}

const getCurrentSeason = () => {
  const month = new Date().getMonth() + 1 // 1-12
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
      if (Math.random() > 0.7) {
        alerts.push({
          type: "Summer Safety Tip",
          message: "Peak vacation season: Secure your home before traveling and use timer lights.",
          severity: "low",
        })
      }
      if (weather.humidity > 70) {
        alerts.push({
          type: "Air Quality Notice",
          message: "High humidity may affect air quality. Limit outdoor activities if sensitive.",
          severity: "low",
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
      if (Math.random() > 0.8) {
        alerts.push({
          type: "Winter Safety Tip",
          message: "Ice possible on roads and walkways. Drive carefully and salt walkways.",
          severity: "medium",
        })
      }
      break

    case "spring":
      if (Math.random() > 0.7) {
        alerts.push({
          type: "Spring Safety Tip",
          message: "Severe weather season begins. Review your emergency plans and weather radio.",
          severity: "low",
        })
      }
      if (weather.windSpeed > 15) {
        alerts.push({
          type: "Wind Advisory",
          message: "Strong spring winds. Secure outdoor furniture and check tree branches.",
          severity: "medium",
        })
      }
      break

    case "fall":
      if (Math.random() > 0.7) {
        alerts.push({
          type: "Fall Safety Tip",
          message: "Daylight saving time ends soon. Check smoke detector batteries.",
          severity: "low",
        })
      }
      if (weather.temperature < 45) {
        alerts.push({
          type: "First Frost Warning",
          message: "Temperatures dropping. Protect plants and prepare heating systems.",
          severity: "low",
        })
      }
      break
  }

  // General safety tips that apply year-round
  if (Math.random() > 0.8) {
    alerts.push({
      type: "Community Safety Tip",
      message: "Remember to lock vehicles and remove valuables. Report suspicious activity to HPD.",
      severity: "low",
    })
  }

  return alerts
}

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
        await new Promise((resolve) => setTimeout(resolve, 1000))

        const season = getCurrentSeason()
        const currentDate = new Date()

        // Season-appropriate conditions
        let conditions: string[]
        let tempRange: { min: number; max: number }

        switch (season) {
          case "summer":
            conditions = ["Sunny", "Partly Cloudy", "Thunderstorms", "Hot", "Humid"]
            tempRange = { min: 70, max: 95 }
            break
          case "winter":
            conditions = ["Clear", "Cloudy", "Snow", "Overcast", "Partly Cloudy"]
            tempRange = { min: 20, max: 50 }
            break
          case "spring":
            conditions = ["Partly Cloudy", "Light Rain", "Sunny", "Breezy", "Mild"]
            tempRange = { min: 45, max: 75 }
            break
          case "fall":
            conditions = ["Clear", "Partly Cloudy", "Overcast", "Cool", "Crisp"]
            tempRange = { min: 40, max: 70 }
            break
          default:
            conditions = ["Clear", "Partly Cloudy", "Cloudy"]
            tempRange = { min: 40, max: 80 }
        }

        const currentCondition = conditions[Math.floor(Math.random() * conditions.length)]
        const currentTemp = Math.round(Math.random() * (tempRange.max - tempRange.min) + tempRange.min)

        const mockWeatherData: WeatherData = {
          temperature: currentTemp,
          condition: currentCondition,
          humidity: Math.round(Math.random() * 40 + 40),
          windSpeed: Math.round(Math.random() * 15 + 5),
          visibility: Math.round(Math.random() * 5 + 5),
          pressure: Math.round((Math.random() * 2 + 29) * 100) / 100,
          feelsLike: currentTemp + Math.round(Math.random() * 10 - 5),
          description: `Perfect ${season} weather for community policing`,
        }

        // 3-day forecast simulation
        const days = ["Today", "Tomorrow", "Wednesday"]
        const mockForecast: ForecastDay[] = days.map((day, index) => ({
          day,
          high: Math.round(Math.random() * (tempRange.max - tempRange.min) + tempRange.min),
          low: Math.round(Math.random() * (tempRange.max - tempRange.min - 20) + tempRange.min - 10),
          condition: conditions[Math.floor(Math.random() * conditions.length)],
          precipitation: season === "summer" ? Math.round(Math.random() * 40) : Math.round(Math.random() * 60),
        }))

        // Historical weather for this day last year
        const lastYear = currentDate.getFullYear() - 1
        const historicalConditions =
          season === "summer"
            ? ["Sunny", "Hot", "Partly Cloudy", "Thunderstorms"]
            : season === "winter"
              ? ["Cold", "Snow", "Overcast", "Clear"]
              : ["Mild", "Partly Cloudy", "Clear", "Breezy"]

        const mockHistorical: HistoricalWeather = {
          temperature: Math.round(Math.random() * (tempRange.max - tempRange.min) + tempRange.min),
          condition: historicalConditions[Math.floor(Math.random() * historicalConditions.length)],
          high: Math.round(Math.random() * (tempRange.max - tempRange.min) + tempRange.min),
          low: Math.round(Math.random() * (tempRange.max - tempRange.min - 20) + tempRange.min - 10),
          year: lastYear,
        }

        // Season-appropriate alerts
        const seasonalAlerts = getSeasonalAlerts(mockWeatherData, season)

        setWeather(mockWeatherData)
        setForecast(mockForecast)
        setAlerts(seasonalAlerts)
        setHistorical(mockHistorical)
        setLoading(false)
      } catch (err) {
        setError("Unable to fetch weather data")
        setLoading(false)
      }
    }

    fetchWeather()
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
          <div className="animate-pulse space-y-3">
            <div className="h-8 bg-muted rounded mb-2"></div>
            <div className="h-4 bg-muted rounded w-3/4"></div>
            <div className="h-20 bg-muted rounded"></div>
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

  const tempDifference = historical ? weather.temperature - historical.temperature : 0

  return (
    <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200 dark:border-blue-700 shadow-sm hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center gap-2">
            {getWeatherIcon(weather.condition, "h-5 w-5")}
            Hellertown Weather
          </CardTitle>
          <Badge variant="secondary" className="text-xs">
            Live
          </Badge>
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
            <div className="font-medium text-foreground">{weather.condition}</div>
            <div className="text-xs text-muted-foreground">{weather.description}</div>
          </div>
        </div>

        {/* Current Conditions Grid */}
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

        <Separator className="my-4" />

        {/* 3-Day Forecast */}
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
            <Thermometer className="h-4 w-4 text-orange-500" />
            3-Day Forecast
          </h4>
          <div className="space-y-2">
            {forecast.map((day, index) => (
              <div key={index} className="flex items-center justify-between text-xs">
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

        <Separator className="my-4" />

        {/* Historical Comparison */}
        {historical && (
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
              <Calendar className="h-4 w-4 text-indigo-500" />
              This Day Last Year ({historical.year})
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
                  {tempDifference > 0 ? (
                    <TrendingUp className="h-3 w-3 text-red-500" />
                  ) : tempDifference < 0 ? (
                    <TrendingDown className="h-3 w-3 text-blue-500" />
                  ) : null}
                  <span
                    className={`font-medium ${
                      tempDifference > 0
                        ? "text-red-600"
                        : tempDifference < 0
                          ? "text-blue-600"
                          : "text-muted-foreground"
                    }`}
                  >
                    {tempDifference > 0 ? "+" : ""}
                    {tempDifference}° vs last year
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Weather Alerts */}
        {alerts.length > 0 && (
          <>
            <Separator className="my-4" />
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-amber-500" />
                Weather Alerts
              </h4>
              <div className="space-y-2">
                {alerts.map((alert, index) => (
                  <div
                    key={index}
                    className={`p-2 rounded-md text-xs ${
                      alert.severity === "high"
                        ? "bg-red-100 dark:bg-red-900/20 border border-red-200 dark:border-red-800"
                        : alert.severity === "medium"
                          ? "bg-amber-100 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800"
                          : "bg-blue-100 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800"
                    }`}
                  >
                    <div className="font-medium text-foreground mb-1">{alert.type}</div>
                    <div className="text-muted-foreground">{alert.message}</div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Location & Update Info */}
        <div className="text-xs text-muted-foreground text-center pt-2 border-t border-border">
          📍 Hellertown, PA 18055 • Updated {new Date().toLocaleTimeString()}
        </div>
      </CardContent>
    </Card>
  )
}
