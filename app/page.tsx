import { redirect } from "next/navigation"
// --- TEMPORARY REDIRECT TO /jobs ---
export default function HomePage() {
  redirect("/jobs")
}

/*

// ORIGINAL HOMEPAGE BELOW (commented out safely)

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        // ... full homepage content ...
      </main>

      <footer className="border-t border-border bg-card mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          // ... footer content ...
        </div>
      </footer>
    </div>
  )
}

*/
