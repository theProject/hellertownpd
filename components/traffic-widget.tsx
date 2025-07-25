"use client"

import { useState, useEffect, useCallback } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Car,
  Navigation,
  Clock,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Map,
} from "lucide-react"
import { TrafficMapModal } from "./TrafficMapModal"

// --- INTERFACES AND HELPERS ---
interface TrafficData {
  road: string
  condition: "light" | "moderate" | "heavy" | "unknown"
  travelTime: string
  normalTime: string
  delay: string
  incidents?: string
}

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

const getLabelColor = (condition: string) => {
  switch (condition) {
    case "light":
      return "text-green-600 dark:text-green-400"
    case "moderate":
      return "text-yellow-600 dark:text-yellow-400"
    case "heavy":
      return "text-red-600 dark:text-red-400"
    default:
      return "text-muted-foreground"
  }
}

// --- MAIN COMPONENT ---
export function TrafficWidget() {
  const [traffic, setTraffic] = useState<TrafficData[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchTrafficData = useCallback(async () => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await fetch("/api/traffic")
      if (!response.ok) {
        throw new Error("Failed to fetch traffic data from server")
      }
      const data = await response.json()
      setTraffic(data)
    } catch (err: any) {
      setError(err.message || "An unknown error occurred")
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchTrafficData()
    const interval = setInterval(fetchTrafficData, 300000)
    return () => clearInterval(interval)
  }, [fetchTrafficData])

  const overallCondition = () => {
    if (!traffic || traffic.length === 0) return "unknown";
    const heavyCount = traffic.filter((r) => r.condition === "heavy").length;
    const moderateCount = traffic.filter((r) => r.condition === "moderate").length;
    if (heavyCount > 0) return "heavy";
    if (moderateCount > 1) return "moderate";
    return "light";
  };

  const i78Condition = traffic.find(r => r.road.includes("I-78"))?.condition ?? "unknown";
  const rt412Condition = traffic.find(r => r.road.includes("Route 412"))?.condition ?? "unknown";
  const rt378Condition = traffic.find(r => r.road.includes("Route 378"))?.condition ?? "unknown";

  return (
    <Dialog>
      <Card className="w-full overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50 border-blue-200 dark:border-blue-800">
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
            Hellertown Area • Updated {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </p>
        </CardHeader>

        <CardContent className="p-4 pt-0 space-y-4">
          <div className="space-y-2">
            {isLoading && traffic.length === 0 ? (
              <div className="flex items-center justify-center py-4 h-[180px]">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
                <span className="ml-2 text-sm text-muted-foreground">Updating...</span>
              </div>
            ) : error ? (
              <div className="flex items-center justify-center p-2 rounded-lg bg-red-100/50 dark:bg-red-900/20 text-red-600 dark:text-red-400">
                <AlertTriangle className="h-4 w-4 mr-2" />
                <p className="text-sm font-medium">{error}</p>
              </div>
            ) : (
              traffic.map((road, index) => (
                <div key={index} className="flex items-center justify-between p-2 rounded-lg bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm">
                  <div className="flex items-center gap-2 flex-1">
                    {getConditionIcon(road.condition)}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">{road.road}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-foreground">{road.travelTime}</p>
                    <p className={`text-xs ${road.delay === "On time" ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}>
                      {road.delay}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="space-y-4">
            <DialogTrigger asChild>
              <div className="cursor-pointer">
                <div className="h-[150px] w-full rounded-lg overflow-hidden border border-blue-200 dark:border-blue-800">
                  <TrafficMapModal isInteractive={false} height="100%" zoom={14} center={{ lat: 40.601, lng: -75.345 }} />
                </div>
                <p className={`text-xs text-center font-bold mt-1 ${getLabelColor(i78Condition)}`}>
                  I-78 & Main St Interchange
                </p>
              </div>
            </DialogTrigger>
            <DialogTrigger asChild>
              <div className="cursor-pointer">
                <div className="h-[150px] w-full rounded-lg overflow-hidden border border-blue-200 dark:border-blue-800">
                  <TrafficMapModal isInteractive={false} height="100%" zoom={15} center={{ lat: 40.566, lng: -75.336 }} />
                </div>
                <p className={`text-xs text-center font-bold mt-1 ${getLabelColor(rt412Condition)}`}>
                  Rt 412 & Polk Valley Rd
                </p>
              </div>
            </DialogTrigger>
            <DialogTrigger asChild>
              <div className="cursor-pointer">
                <div className="h-[150px] w-full rounded-lg overflow-hidden border border-blue-200 dark:border-blue-800">
                  <TrafficMapModal isInteractive={false} height="100%" zoom={16} center={{ lat: 40.584, lng: -75.338 }} />
                </div>
                <p className={`text-xs text-center font-bold mt-1 ${getLabelColor(rt412Condition)}`}>
                  Main St & Water St
                </p>
              </div>
            </DialogTrigger>
            <DialogTrigger asChild>
              <div className="cursor-pointer">
                <div className="h-[150px] w-full rounded-lg overflow-hidden border border-blue-200 dark:border-blue-800">
                  <TrafficMapModal isInteractive={false} height="100%" zoom={15} center={{ lat: 40.581, lng: -75.385 }} />
                </div>
                <p className={`text-xs text-center font-bold mt-1 ${getLabelColor(rt378Condition)}`}>
                  Rt 378 & Seidersville Rd
                </p>
              </div>
            </DialogTrigger>
          </div>

          <DialogTrigger asChild>
            <Button variant="outline" className="w-full bg-white/60 dark:bg-gray-800/60">
              <Map className="h-4 w-4 mr-2" />
              View Full Live Traffic Map
            </Button>
          </DialogTrigger>
        </CardContent>
      </Card>
      
      {/* This DialogContent now has a Header and Title to fix the accessibility error */}
      <DialogContent className="sm:max-w-[800px] h-[80vh] p-0 flex flex-col">
        <DialogHeader className="p-4 pb-2 border-b">
          <DialogTitle>Live Traffic Map - Hellertown Area</DialogTitle>
        </DialogHeader>
        <div className="flex-grow">
           <TrafficMapModal />
        </div>
      </DialogContent>
    </Dialog>
  );
}