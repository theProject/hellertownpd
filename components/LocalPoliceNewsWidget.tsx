"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Newspaper, ExternalLink, Calendar, Building } from "lucide-react"

// Interface for a news article
interface NewsArticle {
  id: string
  title: string
  source: string
  url: string
  date: string
  snippet: string
}

// Curated list of news articles related to Hellertown Police from multiple sources
const policeNewsArticles: NewsArticle[] = [
    {
        id: "2",
        title: "Hellertown Council to vote on convicted former police chief getting his $32K pension pay-in",
        source: "LehighValleyNews.com",
        url: "https://www.lehighvalleynews.com/hellertown-area/hellertown-council-to-vote-on-convicted-former-police-chief-getting-his-32k-pension-pay-in",
        date: "May 28, 2025",
        snippet: "Former Police Chief Robert Shupp, recently sentenced to prison for theft, is lined up to get about $32,000 in pension contributions with an approval from Borough Council.",
    },
    {
        id: "1",
        title: "Ex-Hellertown police chief sentenced to prison for stealing from borough",
        source: "WFMZ-TV 69News",
        url: "https://www.wfmz.com/news/regional/lehigh-valley/ex-hellertown-police-chief-sentenced-to-prison-time-for-stealing-borough-money/article_0e8cde2a-01e1-11ef-a84f-5f4b81577168.html",
        date: "April 23, 2025",
        snippet: "Robert Shupp was sentenced Wednesday to 9-23 months in prison, according to the Northampton County District Attorney's Office, for stealing cash and forging signatures.",
    },
    {
        id: "4",
        title: "Police to Participate in 'Coffee with a Cop' at Local Cafe",
        source: "Saucon Source",
        url: "https://sauconsource.com/2025/03/15/hellertown-police-coffee-with-a-cop/",
        date: "March 15, 2025",
        snippet: "The Hellertown Police Department will host a 'Coffee with a Cop' event to connect with residents and discuss community issues in an informal setting.",
    },
    {
        id: "5",
        title: "'An urgent necessity': Hellertown holds steady on taxes, will hire 2 new police officers",
        source: "LehighValleyNews.com",
        url: "https://www.lehighvalleynews.com/hellertown-area/an-urgent-necessity-hellertown-holds-steady-on-taxes-will-hire-2-new-police-officers",
        date: "December 10, 2024",
        snippet: "Borough Council has voted to approve a new-year spending plan that would allow the police department two new full-time officers and a pay raise for part-timers.",
    },
    {
        id: "3",
        title: "Hellertown welcomes new police chief who says he's 'aware of the challenges'",
        source: "LehighValleyNews.com",
        url: "https://www.lehighvalleynews.com/hellertown-area/hellertown-welcomes-new-police-chief-who-says-hes-aware-of-the-challenges",
        date: "August 21, 2024",
        snippet: "After a months-long search, Hellertown appointed a new police chief, James Baitinger, with more than 26 years of experience in law enforcement.",
    },
];

export function LocalPoliceNewsWidget() {
  const [articles] = useState<NewsArticle[]>(policeNewsArticles);

  return (
    <Card className="w-full bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50 border-blue-200 dark:border-blue-800">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Newspaper className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            <CardTitle className="text-lg font-semibold text-foreground">Hellertown Police News</CardTitle>
          </div>
          <Badge variant="outline" className="text-xs font-normal bg-white/60 dark:bg-black/20 border-blue-200 dark:border-blue-700">
            {articles.length} Recent Articles
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground pt-1">
          A curated feed of news mentioning the Hellertown Police Department.
        </p>
      </CardHeader>
      <CardContent className="space-y-3">
        {articles.length > 0 ? (
          <>
            {articles.map((article) => (
              <div
                key={article.id}
                className="p-3 rounded-lg bg-white/70 dark:bg-gray-800/70 border border-white/50 dark:border-gray-700/50"
              >
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground mb-2">
                  <div className="flex items-center gap-1.5">
                    <Building className="h-3 w-3" />
                    <span>{article.source}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-3 w-3" />
                    <span>{article.date}</span>
                  </div>
                </div>
                <h4 className="text-sm font-semibold text-foreground mb-1.5">{article.title}</h4>
                <p className="text-xs text-muted-foreground mb-3">{article.snippet}</p>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  Read Full Story <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            ))}
          </>
        ) : (
          <div className="text-center py-6">
            <Newspaper className="h-8 w-8 text-gray-400 mx-auto mb-2" />
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">No Articles Found</p>
            <p className="text-xs text-muted-foreground">There are currently no news articles to display.</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
