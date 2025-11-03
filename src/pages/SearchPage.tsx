import { Header } from "@/components/Layout/Header";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Clock, TrendingUp, Sparkles } from "lucide-react";
import { useState } from "react";

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const recentSearches = [
    "SEBI insider trading regulations",
    "Fan-out pattern detection",
    "Transaction network ABC-123",
  ];

  const mockResults = [
    {
      title: "SEBI Insider Trading Prohibition",
      snippet: "Regulation 3 prohibits insider trading and states that no person shall trade when in possession of unpublished price sensitive information...",
      source: "SEBI Master Circular",
      confidence: 95,
    },
    {
      title: "Fan-Out Pattern Analysis",
      snippet: "Detected unusual transaction pattern: Single account 966 distributed $371M across 650+ accounts within 48 hours...",
      source: "AMLSim Transaction Graph",
      confidence: 88,
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <Header title="Intelligent Search" />
      
      <main className="px-4 py-6 max-w-screen-xl mx-auto space-y-6">
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Ask about fraud patterns, regulations, or cases..."
            className="pl-10 pr-4 h-12 text-base"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Quick Filters */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
            All Sources
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
            SEBI Regulations
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
            Transactions
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
            Patterns
          </Badge>
        </div>

        {/* Recent Searches */}
        <section>
          <div className="flex items-center gap-2 mb-3">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <h3 className="text-sm font-semibold text-foreground">Recent Searches</h3>
          </div>
          <div className="space-y-2">
            {recentSearches.map((query, i) => (
              <Card
                key={i}
                className="p-3 cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => setSearchQuery(query)}
              >
                <p className="text-sm text-foreground">{query}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Mock Results (shown when there's a query) */}
        {searchQuery && (
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="h-5 w-5 text-primary" />
              <h3 className="text-base font-semibold text-foreground">AI-Powered Results</h3>
            </div>
            <div className="space-y-4">
              {mockResults.map((result, i) => (
                <Card key={i} className="p-4 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-foreground">{result.title}</h4>
                    <div className="flex items-center gap-1">
                      <TrendingUp className="h-4 w-4 text-success" />
                      <span className="text-xs font-semibold text-success">{result.confidence}%</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{result.snippet}</p>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="text-xs">
                      {result.source}
                    </Badge>
                    <Button variant="ghost" size="sm">
                      View Details
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
