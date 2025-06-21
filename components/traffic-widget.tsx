"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Car, Navigation, Clock, AlertTriangle, CheckCircle, XCircle } from "lucide-react"

interface TrafficData {
  road: string
  condition: "light" | "moderate" | "heavy"
  travelTime: string
  normalTime: string
  delay: string
  incidents?: string
}

const trafficData: TrafficData[] = [
  {
    road: "Route 412 (Main St)",
    condition: "light",
    travelTime: "8 min",
    normalTime: "7 min",
    delay: "+1 min",
  },
  {
    road: "I-78 East/West",
    condition: "moderate",
    travelTime: "12 min",
    normalTime: "9 min",
    delay: "+3 min",
  },
  {
    road: "Route 378 (Bethlehem Pike)",
    condition: "light",
    travelTime: "6 min",
    normalTime: "6 min",
    delay: "On time",
  },
  {
    road: "Route 309 North",
    condition: "heavy",
    travelTime: "18 min",
    normalTime: "12 min",
    delay: "+6 min",
    incidents: "Construction",
  },
  {
    road: "Polk Valley Rd",
    condition: "light",
    travelTime: "4 min",
    normalTime: "4 min",
    delay: "On time",
  },
]

const getConditionColor = (condition: string) => {
  switch (condition) {
    case "light":
      return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
    case "moderate":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400"
    case "heavy":
      return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400"
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400"
  }
}

const getConditionIcon = (condition: string) => {
  switch (condition) {
    case "light":
      return <CheckCircle className="h-4 w-4 text-green-500" />
    case "moderate":
      return <Clock className="h-4 w-4 text-yellow-500" />
    case "heavy":
      return <XCircle className="h-4 w-4 text-red-500" />
    default:
      return <Navigation className="h-4 w-4 text-gray-500" />
  }
}

export function TrafficWidget() {
  const [traffic, setTraffic] = useState<TrafficData[]>(trafficData)
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date())
  const [isLoading, setIsLoading] = useState(false)

  // Simulate traffic updates every 5 minutes
  useEffect(() => {
    const interval = setInterval(() => {
      setIsLoading(true)

      // Simulate API call delay
      setTimeout(() => {
        // Randomly update traffic conditions to simulate real changes
        const updatedTraffic = traffic.map((road) => {
          const conditions: ("light" | "moderate" | "heavy")[] = ["light", "moderate", "heavy"]
          const randomCondition = Math.random()

          let newCondition = road.condition
          if (randomCondition < 0.1) {
            // 10% chance to change
            newCondition = conditions[Math.floor(Math.random() * conditions.length)]
          }

          // Update travel times based on condition
          let newTravelTime = road.travelTime
          let newDelay = road.delay

          if (newCondition !== road.condition) {
            const baseTime = Number.parseInt(road.normalTime)
            switch (newCondition) {
              case "light":
                newTravelTime = `${baseTime} min`
                newDelay = "On time"
                break
              case "moderate":
                newTravelTime = `${baseTime + 2} min`
                newDelay = `+2 min`
                break
              case "heavy":
                newTravelTime = `${baseTime + 5} min`
                newDelay = `+5 min`
                break
            }
          }

          return {
            ...road,
            condition: newCondition,
            travelTime: newTravelTime,
            delay: newDelay,
          }
        })

        setTraffic(updatedTraffic)
        setLastUpdated(new Date())
        setIsLoading(false)
      }, 1000)
    }, 300000) // Update every 5 minutes

    return () => clearInterval(interval)
  }, [traffic])

  const overallCondition = () => {
    const heavyCount = traffic.filter((r) => r.condition === "heavy").length
    const moderateCount = traffic.filter((r) => r.condition === "moderate").length

    if (heavyCount > 0) return "heavy"
    if (moderateCount > 1) return "moderate"
    return "light"
  }

  return (
    <Card className="w-full bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50 border-blue-200 dark:border-blue-800">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Car className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <CardTitle className="text-lg font-semibold text-foreground">Local Traffic</CardTitle>
          </div>
          <Badge className={`${getConditionColor(overallCondition())} border-0 font-medium`}>
            {overallCondition().charAt(0).toUpperCase() + overallCondition().slice(1)}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground">
          Hellertown Area • Updated {lastUpdated.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </p>
      </CardHeader>
      <CardContent className="space-y-3">
        {isLoading ? (
          <div className="flex items-center justify-center py-4">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
            <span className="ml-2 text-sm text-muted-foreground">Updating traffic...</span>
          </div>
        ) : (
          <>
            {traffic.map((road, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-2 rounded-lg bg-white/50 dark:bg-gray-800/50"
              >
                <div className="flex items-center gap-2 flex-1">
                  {getConditionIcon(road.condition)}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">{road.road}</p>
                    {road.incidents && (
                      <div className="flex items-center gap-1 mt-1">
                        <AlertTriangle className="h-3 w-3 text-orange-500" />
                        <p className="text-xs text-orange-600 dark:text-orange-400">{road.incidents}</p>
                      </div>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-foreground">{road.travelTime}</p>
                  <p
                    className={`text-xs ${
                      road.delay === "On time" ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
                    }`}
                  >
                    {road.delay}
                  </p>
                </div>
              </div>
            ))}

            <div className="pt-2 border-t border-blue-200 dark:border-blue-800">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>Travel times to nearby areas</span>
                <div className="flex items-center gap-1">
                  <Navigation className="h-3 w-3" />
                  <span>Live updates</span>
                </div>
              </div>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  )
}
