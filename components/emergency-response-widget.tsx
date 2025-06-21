"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Siren, Shield, Flame, Heart, Car, AlertTriangle, Clock, MapPin, Radio, Eye, Info } from "lucide-react"

interface EmergencyResponse {
  id: string
  type: "police" | "fire" | "ems" | "traffic" | "multi-agency"
  priority: "high" | "medium" | "low"
  location: string
  status: "responding" | "on-scene" | "clearing"
  timeStarted: Date
  estimatedDuration?: string
  units: number
  description: string
}

const emergencyResponses: EmergencyResponse[] = [
  {
    id: "1",
    type: "police",
    priority: "medium",
    location: "Main St & Walnut St area",
    status: "on-scene",
    timeStarted: new Date(Date.now() - 15 * 60 * 1000), // 15 minutes ago
    estimatedDuration: "30 min",
    units: 2,
    description: "Traffic incident investigation",
  },
  {
    id: "2",
    type: "ems",
    priority: "high",
    location: "Residential area - Polk Valley Rd",
    status: "responding",
    timeStarted: new Date(Date.now() - 5 * 60 * 1000), // 5 minutes ago
    units: 1,
    description: "Medical emergency response",
  },
]

const getTypeIcon = (type: string) => {
  switch (type) {
    case "police":
      return <Shield className="h-4 w-4 text-blue-600" />
    case "fire":
      return <Flame className="h-4 w-4 text-red-600" />
    case "ems":
      return <Heart className="h-4 w-4 text-green-600" />
    case "traffic":
      return <Car className="h-4 w-4 text-orange-600" />
    case "multi-agency":
      return <Radio className="h-4 w-4 text-purple-600" />
    default:
      return <AlertTriangle className="h-4 w-4 text-gray-600" />
  }
}

const getTypeColor = (type: string) => {
  switch (type) {
    case "police":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400"
    case "fire":
      return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400"
    case "ems":
      return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
    case "traffic":
      return "bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400"
    case "multi-agency":
      return "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400"
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400"
  }
}

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "high":
      return "bg-red-500"
    case "medium":
      return "bg-yellow-500"
    case "low":
      return "bg-green-500"
    default:
      return "bg-gray-500"
  }
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "responding":
      return "text-yellow-600 dark:text-yellow-400"
    case "on-scene":
      return "text-red-600 dark:text-red-400"
    case "clearing":
      return "text-green-600 dark:text-green-400"
    default:
      return "text-gray-600 dark:text-gray-400"
  }
}

const formatElapsedTime = (startTime: Date) => {
  const now = new Date()
  const elapsed = Math.floor((now.getTime() - startTime.getTime()) / 1000 / 60)

  if (elapsed < 1) return "Just now"
  if (elapsed === 1) return "1 min ago"
  return `${elapsed} min ago`
}

export function EmergencyResponseWidget() {
  const [responses, setResponses] = useState<EmergencyResponse[]>(emergencyResponses)
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date())
  const [isLoading, setIsLoading] = useState(false)

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setIsLoading(true)

      setTimeout(() => {
        // Simulate status changes and new incidents
        const updatedResponses = responses
          .map((response) => {
            const random = Math.random()

            // 20% chance to update status
            if (random < 0.2) {
              if (response.status === "responding") {
                return { ...response, status: "on-scene" as const }
              } else if (response.status === "on-scene" && random < 0.1) {
                return { ...response, status: "clearing" as const }
              }
            }

            return response
          })
          .filter((response) => response.status !== "clearing") // Remove cleared incidents

        // Occasionally add new incidents (5% chance)
        if (Math.random() < 0.05 && updatedResponses.length < 4) {
          const newIncidentTypes = ["police", "fire", "ems", "traffic"] as const
          const locations = [
            "Route 412 corridor",
            "Downtown area",
            "Residential district",
            "Industrial area",
            "School zone area",
          ]
          const descriptions = [
            "Routine patrol response",
            "Community assistance",
            "Traffic safety check",
            "Medical assistance",
            "Fire safety inspection",
          ]

          const newResponse: EmergencyResponse = {
            id: Date.now().toString(),
            type: newIncidentTypes[Math.floor(Math.random() * newIncidentTypes.length)],
            priority: Math.random() > 0.7 ? "high" : Math.random() > 0.4 ? "medium" : "low",
            location: locations[Math.floor(Math.random() * locations.length)],
            status: "responding",
            timeStarted: new Date(),
            units: Math.floor(Math.random() * 3) + 1,
            description: descriptions[Math.floor(Math.random() * descriptions.length)],
          }

          updatedResponses.push(newResponse)
        }

        setResponses(updatedResponses)
        setLastUpdated(new Date())
        setIsLoading(false)
      }, 1500)
    }, 120000) // Update every 2 minutes

    return () => clearInterval(interval)
  }, [responses])

  const activeResponses = responses.filter((r) => r.status !== "clearing")
  const highPriorityCount = activeResponses.filter((r) => r.priority === "high").length

  return (
    <Card className="w-full bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/50 dark:to-orange-950/50 border-red-200 dark:border-red-800">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Siren className="h-5 w-5 text-red-600 dark:text-red-400" />
            <CardTitle className="text-lg font-semibold text-foreground">Emergency Response</CardTitle>
          </div>
          <div className="flex items-center gap-2">
            {highPriorityCount > 0 && (
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-medium text-red-600 dark:text-red-400">
                  {highPriorityCount} High Priority
                </span>
              </div>
            )}
            <Badge variant="outline" className="text-xs">
              {activeResponses.length} Active
            </Badge>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">
          Live updates • Last refresh {lastUpdated.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </p>
      </CardHeader>
      <CardContent className="space-y-3">
        {isLoading ? (
          <div className="flex items-center justify-center py-4">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-red-600"></div>
            <span className="ml-2 text-sm text-muted-foreground">Updating status...</span>
          </div>
        ) : activeResponses.length > 0 ? (
          <>
            {activeResponses.map((response) => (
              <div
                key={response.id}
                className="flex items-start justify-between p-3 rounded-lg bg-white/70 dark:bg-gray-800/70 border border-white/50 dark:border-gray-700/50"
              >
                <div className="flex items-start gap-3 flex-1">
                  <div className="flex items-center gap-2">
                    {getTypeIcon(response.type)}
                    <div className={`w-2 h-2 rounded-full ${getPriorityColor(response.priority)}`}></div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge className={`${getTypeColor(response.type)} border-0 text-xs font-medium`}>
                        {response.type.toUpperCase()}
                      </Badge>
                      <span className={`text-xs font-medium ${getStatusColor(response.status)}`}>
                        {response.status.replace("-", " ").toUpperCase()}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-foreground mb-1">{response.description}</p>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        <span>{response.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{formatElapsedTime(response.timeStarted)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Radio className="h-3 w-3" />
                        <span>
                          {response.units} unit{response.units > 1 ? "s" : ""}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <Alert className="bg-blue-50 dark:bg-blue-950/50 border-blue-200 dark:border-blue-800">
              <Info className="h-4 w-4 text-blue-600" />
              <AlertDescription className="text-xs text-blue-800 dark:text-blue-200">
                <strong>Community Notice:</strong> Emergency response information is provided for community awareness.
                Locations are generalized for operational security. For emergencies, always call 911.
              </AlertDescription>
            </Alert>

            <div className="pt-2 border-t border-red-200 dark:border-red-800">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Eye className="h-3 w-3" />
                  <span>Real-time monitoring</span>
                </div>
                <span>Hellertown PD Dispatch</span>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center py-6">
            <Shield className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <p className="text-sm font-medium text-green-700 dark:text-green-400">All Clear</p>
            <p className="text-xs text-muted-foreground">No active emergency responses</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
