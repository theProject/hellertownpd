"use client"

import { useState, type FormEvent } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export function RsvpForm() {
  const [attendees, setAttendees] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const numAttendees = Number.parseInt(attendees, 10)
    if (isNaN(numAttendees) || numAttendees <= 0) {
      setError("Please enter a valid number of attendees (e.g., 1 or more).")
      setSubmitted(false)
      return
    }
    setError("")
    // Here you would typically send data to a server
    // For this example, we'll just simulate success
    console.log(`RSVP submitted for ${numAttendees} attendees.`)
    setSubmitted(true)
    setAttendees("") // Reset input after submission
  }

  if (submitted) {
    return (
      <Card className="max-w-md mx-auto bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-700">
        <CardContent className="pt-6">
          <div className="flex flex-col items-center text-center">
            <CheckCircle className="h-12 w-12 text-green-500 mb-4" />
            <p className="text-lg font-semibold text-green-700 dark:text-green-300">Thank You!</p>
            <p className="text-sm text-green-600 dark:text-green-400">
              We've received your anonymous RSVP. We look forward to seeing you there!
            </p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="max-w-md mx-auto bg-card">
      <CardHeader>
        <CardTitle className="text-xl text-center text-foreground">Anonymous RSVP</CardTitle>
        <CardDescription className="text-center text-muted-foreground">
          How many people are you bringing?
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="attendees" className="sr-only">
              Number of Attendees
            </Label>
            <Input
              id="attendees"
              name="attendees"
              type="number"
              min="1"
              placeholder="e.g., 4"
              value={attendees}
              onChange={(e) => {
                setAttendees(e.target.value)
                setError("") // Clear error when user types
              }}
              className="text-center text-lg"
              aria-describedby="attendees-error"
            />
            {error && (
              <p id="attendees-error" className="text-sm text-red-500 dark:text-red-400 mt-1 text-center">
                {error}
              </p>
            )}
          </div>
          <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
            Submit Count
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
