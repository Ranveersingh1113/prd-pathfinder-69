import { Header } from "@/components/Layout/Header";
import { CaseCard } from "@/components/Dashboard/CaseCard";
import { Button } from "@/components/ui/button";
import { Plus, Filter } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Cases() {
  const cases = {
    active: [
      { id: "CASE-20251103-001", title: "Insider Trading - ABC Corp", priority: "critical" as const, lastUpdate: "5m ago", queryCount: 12 },
      { id: "CASE-20251102-045", title: "Market Manipulation Pattern", priority: "high" as const, lastUpdate: "1h ago", queryCount: 8 },
      { id: "CASE-20251102-032", title: "Suspicious Transaction Network", priority: "medium" as const, lastUpdate: "3h ago", queryCount: 15 },
      { id: "CASE-20251101-019", title: "Layering Scheme Investigation", priority: "high" as const, lastUpdate: "5h ago", queryCount: 22 },
    ],
    review: [
      { id: "CASE-20251031-088", title: "Pump and Dump Analysis", priority: "medium" as const, lastUpdate: "1d ago", queryCount: 31 },
      { id: "CASE-20251031-072", title: "Front Running Evidence", priority: "low" as const, lastUpdate: "2d ago", queryCount: 18 },
    ],
    closed: [
      { id: "CASE-20251030-055", title: "Wash Trading Confirmed", priority: "high" as const, lastUpdate: "3d ago", queryCount: 45 },
      { id: "CASE-20251029-041", title: "False SAR - Cleared", priority: "low" as const, lastUpdate: "4d ago", queryCount: 9 },
    ],
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <Header title="Cases" />
      
      <main className="px-4 py-6 max-w-screen-xl mx-auto">
        {/* Action Bar */}
        <div className="flex gap-2 mb-6">
          <Button className="flex-1 bg-gradient-primary" size="lg">
            <Plus className="h-5 w-5 mr-2" />
            New Case
          </Button>
          <Button variant="outline" size="lg">
            <Filter className="h-5 w-5" />
          </Button>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="active" className="space-y-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="active">Active ({cases.active.length})</TabsTrigger>
            <TabsTrigger value="review">Review ({cases.review.length})</TabsTrigger>
            <TabsTrigger value="closed">Closed ({cases.closed.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="active" className="space-y-3">
            {cases.active.map((caseItem) => (
              <CaseCard key={caseItem.id} {...caseItem} />
            ))}
          </TabsContent>

          <TabsContent value="review" className="space-y-3">
            {cases.review.map((caseItem) => (
              <CaseCard key={caseItem.id} {...caseItem} />
            ))}
          </TabsContent>

          <TabsContent value="closed" className="space-y-3">
            {cases.closed.map((caseItem) => (
              <CaseCard key={caseItem.id} {...caseItem} />
            ))}
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
