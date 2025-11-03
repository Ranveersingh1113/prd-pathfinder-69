import { Header } from "@/components/Layout/Header";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { ChevronRight, Bell, Lock, Moon, Download, HelpCircle, LogOut } from "lucide-react";

export default function Profile() {
  return (
    <div className="min-h-screen bg-background pb-20">
      <Header title="Profile" />
      
      <main className="px-4 py-6 max-w-screen-xl mx-auto space-y-6">
        {/* User Profile */}
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src="" />
              <AvatarFallback className="bg-primary text-primary-foreground text-xl">
                SJ
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-foreground">Sarah Johnson</h2>
              <p className="text-sm text-muted-foreground">Senior Fraud Analyst</p>
              <p className="text-xs text-muted-foreground mt-1">sarah.johnson@company.com</p>
            </div>
          </div>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3">
          <Card className="p-4 text-center">
            <p className="text-2xl font-bold text-primary">47</p>
            <p className="text-xs text-muted-foreground">Cases</p>
          </Card>
          <Card className="p-4 text-center">
            <p className="text-2xl font-bold text-success">892</p>
            <p className="text-xs text-muted-foreground">Queries</p>
          </Card>
          <Card className="p-4 text-center">
            <p className="text-2xl font-bold text-warning">12</p>
            <p className="text-xs text-muted-foreground">SARs</p>
          </Card>
        </div>

        {/* Settings */}
        <section>
          <h3 className="text-sm font-semibold text-muted-foreground mb-3">SETTINGS</h3>
          <Card className="divide-y divide-border">
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bell className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm font-medium">Push Notifications</span>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Lock className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm font-medium">Biometric Login</span>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Moon className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm font-medium">Dark Mode</span>
              </div>
              <Switch />
            </div>
          </Card>
        </section>

        {/* Actions */}
        <section>
          <h3 className="text-sm font-semibold text-muted-foreground mb-3">ACTIONS</h3>
          <Card className="divide-y divide-border">
            <button className="w-full p-4 flex items-center justify-between hover:bg-muted/50 transition-colors">
              <div className="flex items-center gap-3">
                <Download className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm font-medium">Install App</span>
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </button>
            <button className="w-full p-4 flex items-center justify-between hover:bg-muted/50 transition-colors">
              <div className="flex items-center gap-3">
                <HelpCircle className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm font-medium">Help & Support</span>
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </button>
          </Card>
        </section>

        {/* Logout */}
        <Button variant="destructive" className="w-full" size="lg">
          <LogOut className="h-5 w-5 mr-2" />
          Logout
        </Button>

        <p className="text-xs text-center text-muted-foreground">
          Version 1.0.0 • © 2025 Fraud Intelligence Platform
        </p>
      </main>
    </div>
  );
}
