import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  MessageSquare,
  Facebook,
  Twitter,
  Instagram,
  Construction,
  Newspaper,
  Megaphone,
  Heart,
  Share2,
  Eye,
  ChevronRight,
} from "lucide-react"

// Placeholder blog posts data
const blogPosts = [
  {
    id: 1,
    title: "Community Safety Initiative Launch",
    excerpt:
      "We're excited to announce our new community safety initiative focusing on neighborhood watch programs and enhanced patrol coverage.",
    author: "Chief James Baitinger",
    authorRole: "Chief of Police",
    date: "2025-01-15",
    readTime: "3 min read",
    category: "Community Safety",
    image: "/placeholder.svg?height=200&width=400",
    views: 245,
    likes: 18,
  },
  {
    id: 2,
    title: "Officer Training Updates",
    excerpt:
      "Our officers recently completed advanced de-escalation training, reinforcing our commitment to professional and compassionate policing.",
    author: "C. Smith",
    authorRole: "Executive Secretary",
    date: "2025-01-12",
    readTime: "2 min read",
    category: "Training",
    image: "/placeholder.svg?height=200&width=400",
    views: 189,
    likes: 12,
  },
  {
    id: 3,
    title: "Holiday Safety Reminders",
    excerpt:
      "As we enter the holiday season, here are important safety tips to keep your family and property secure during celebrations.",
    author: "Chief James Baitinger",
    authorRole: "Chief of Police",
    date: "2025-01-10",
    readTime: "4 min read",
    category: "Safety Tips",
    image: "/placeholder.svg?height=200&width=400",
    views: 312,
    likes: 24,
  },
]

// Placeholder social media posts
const socialPosts = [
  {
    platform: "facebook",
    content:
      "Great turnout at today's Coffee with a Cop event! Thank you to everyone who stopped by to chat and connect with our officers. 👮‍♂️☕",
    timestamp: "2 hours ago",
    likes: 45,
    comments: 8,
    shares: 3,
  },
  {
    platform: "twitter",
    content:
      "Reminder: School zone speed limits are in effect. Please drive safely and watch for our young pedestrians! 🚸 #SchoolSafety",
    timestamp: "5 hours ago",
    likes: 23,
    comments: 2,
    shares: 12,
  },
  {
    platform: "instagram",
    content:
      "Officer Martinez visited the local elementary school today for our community outreach program. The kids loved learning about police work! 📚👮‍♀️",
    timestamp: "1 day ago",
    likes: 67,
    comments: 15,
    shares: 5,
  },
]

export default function LatestPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <section className="text-center my-8 sm:my-12">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full bg-primary/10 border-2 border-primary/20">
              <Newspaper className="h-16 w-16 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 tracking-tight">
            Latest News & Updates
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Stay informed with the latest news, updates, and community messages from the Hellertown Police Department
          </p>

          {/* Under Construction Notice */}
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-8">
            <Construction className="h-4 w-4" />
            <span>This page is under development - check back soon for live updates</span>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Featured Announcement */}
        <section className="my-12">
          <Card className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200 dark:border-blue-700">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Badge className="bg-blue-600 text-white">FEATURED</Badge>
                <Megaphone className="h-5 w-5 text-blue-600" />
              </div>
              <CardTitle className="text-2xl sm:text-3xl text-foreground">
                Chief's Message: Strengthening Community Partnerships
              </CardTitle>
              <CardDescription className="text-lg text-muted-foreground">
                A message from Chief Baitinger about our ongoing commitment to community policing
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                "As we continue to serve the Hellertown community, our focus remains on building strong partnerships
                with residents, businesses, and community organizations. Together, we can create a safer, more connected
                neighborhood for everyone."
              </p>
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src="/placeholder-user.jpg" alt="Chief Baitinger" />
                  <AvatarFallback>JB</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-foreground">Chief James Baitinger</p>
                  <p className="text-sm text-muted-foreground">Hellertown Police Department</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Blog Posts Section */}
        <section className="my-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-foreground flex items-center gap-3">
              <MessageSquare className="h-8 w-8 text-primary" />
              Recent Posts
            </h2>
            <Button variant="outline" className="hidden sm:flex">
              View All Posts
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Card
                key={post.id}
                className="bg-card shadow-sm hover:shadow-md transition-all duration-200 group cursor-pointer"
              >
                <div className="aspect-video relative overflow-hidden rounded-t-lg">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="secondary" className="bg-white/90 text-foreground">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarFallback className="text-xs">
                          {post.author
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <span>{post.author}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        {post.views}
                      </span>
                      <span className="flex items-center gap-1">
                        <Heart className="h-3 w-3" />
                        {post.likes}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Social Media Feed */}
        <section className="my-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-foreground flex items-center gap-3">
              <Share2 className="h-8 w-8 text-primary" />
              Social Media Updates
            </h2>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" asChild>
                <a href="https://www.facebook.com/hellertownpd" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-4 w-4 mr-2" />
                  Follow
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="https://twitter.com/hellertownpd" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-4 w-4 mr-2" />
                  Follow
                </a>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {socialPosts.map((post, index) => (
              <Card key={index} className="bg-card shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {post.platform === "facebook" && <Facebook className="h-5 w-5 text-blue-600" />}
                      {post.platform === "twitter" && <Twitter className="h-5 w-5 text-blue-400" />}
                      {post.platform === "instagram" && <Instagram className="h-5 w-5 text-pink-600" />}
                      <span className="font-semibold text-sm capitalize">{post.platform}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{post.timestamp}</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{post.content}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Heart className="h-3 w-3" />
                      {post.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageSquare className="h-3 w-3" />
                      {post.comments}
                    </span>
                    <span className="flex items-center gap-1">
                      <Share2 className="h-3 w-3" />
                      {post.shares}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Coming Soon Features */}
        <section className="my-12">
          <Card className="bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-purple-200 dark:border-purple-700">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-foreground flex items-center justify-center gap-3">
                <Construction className="h-6 w-6 text-purple-600" />
                Coming Soon
              </CardTitle>
              <CardDescription className="text-lg text-muted-foreground">
                Exciting new features in development
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">📝 Blog Platform</h4>
                  <p className="text-sm text-muted-foreground">
                    Regular updates and insights from Chief Baitinger and department staff
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">📱 Live Social Feeds</h4>
                  <p className="text-sm text-muted-foreground">
                    Real-time updates from our Facebook, Twitter, and Instagram accounts
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">📰 Press Releases</h4>
                  <p className="text-sm text-muted-foreground">
                    Official department announcements and press statements
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">🎥 Video Updates</h4>
                  <p className="text-sm text-muted-foreground">
                    Video messages and community updates from department leadership
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  )
}
