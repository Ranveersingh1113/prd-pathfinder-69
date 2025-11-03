import { Header } from "@/components/Layout/Header";
import { StatCard } from "@/components/Dashboard/StatCard";
import { CaseCard } from "@/components/Dashboard/CaseCard";
import { AlertCard } from "@/components/Dashboard/AlertCard";
import { QuickAction } from "@/components/Dashboard/QuickAction";
import { Folder, Bell, Search as SearchIcon, TrendingUp, FileText, Network } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-20">
      <Header title="Fraud Intelligence" badge={3} />
      
      <main className="px-4 py-6 max-w-screen-xl mx-auto space-y-6">
        {/* Greeting */}
        <div>
          <h2 className="text-2xl font-bold text-foreground">Good morning, Sarah 👋</h2>
          <p className="text-sm text-muted-foreground">Monday, November 3, 2025</p>
        </div>

        {/* KPI Stats */}
        <section>
          <h3 className="text-lg font-bold text-foreground mb-4">📊 Today's KPIs</h3>
          <div className="grid grid-cols-2 gap-3">
            <StatCard title="Cases" value="12" change="+2 today" icon={Folder} trend="up" />
            <StatCard title="Alerts" value="3" change="NEW!" icon={Bell} trend="up" />
            <StatCard title="Queries" value="47" change="+12 today" icon={SearchIcon} trend="up" />
            <StatCard title="Closed" value="5" change="On target" icon={TrendingUp} trend="neutral" />
          </div>
        </section>

        {/* Quick Actions */}
        <section>
          <h3 className="text-lg font-bold text-foreground mb-4">⚡ Quick Actions</h3>
          <div className="grid grid-cols-3 gap-3">
            <QuickAction
              icon={FileText}
              label="New Case"
              onClick={() => navigate("/cases")}
            />
            <QuickAction
              icon={SearchIcon}
              label="Quick Search"
              onClick={() => navigate("/search")}
            />
            <QuickAction
              icon={Network}
              label="Graph View"
              onClick={() => navigate("/cases")}
            />
          </div>
        </section>

        {/* Priority Cases */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-foreground">🔥 Priority Cases</h3>
            <Button variant="ghost" size="sm" onClick={() => navigate("/cases")}>
              View All
            </Button>
          </div>
          <div className="space-y-3">
            <CaseCard
              id="CASE-20251103-001"
              title="Insider Trading - ABC Corp"
              priority="critical"
              lastUpdate="5m ago"
              queryCount={12}
              onClick={() => navigate("/cases")}
            />
            <CaseCard
              id="CASE-20251102-045"
              title="Market Manipulation Pattern"
              priority="high"
              lastUpdate="1h ago"
              queryCount={8}
              onClick={() => navigate("/cases")}
            />
            <CaseCard
              id="CASE-20251102-032"
              title="Suspicious Transaction Network"
              priority="medium"
              lastUpdate="3h ago"
              queryCount={15}
              onClick={() => navigate("/cases")}
            />
          </div>
        </section>

        {/* Recent Alerts */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-foreground">🚨 Recent Alerts</h3>
            <Button variant="ghost" size="sm" onClick={() => navigate("/alerts")}>
              View All
            </Button>
          </div>
          <div className="space-y-3">
            <AlertCard
              type="Fan-Out Pattern Detected"
              description="Account 966 → 650+ accounts"
              amount="$371M"
              timestamp="2m ago"
              severity="critical"
            />
            <AlertCard
              type="Circular Trading Identified"
              description="Loop detected across 12 entities"
              amount="$89M"
              timestamp="15m ago"
              severity="high"
            />
            <AlertCard
              type="Unusual Volume Spike"
              description="Transaction volume 3x above baseline"
              timestamp="45m ago"
              severity="medium"
            />
          </div>
        </section>

        {/* Performance Metrics */}
        <section className="pb-4">
          <h3 className="text-lg font-bold text-foreground mb-4">📈 This Week</h3>
          <div className="bg-card rounded-lg border border-border p-6 shadow-md">
            <div className="flex items-end justify-between h-32 gap-2">
              {[40, 65, 55, 80, 70, 90, 75].map((height, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-2">
                  <div
                    className="w-full bg-gradient-primary rounded-t"
                    style={{ height: `${height}%` }}
                  />
                  <span className="text-xs text-muted-foreground">
                    {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
