import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Shield, Search, Bell, BarChart3, Lock, Zap, Play } from "lucide-react";
import { Link } from "react-router-dom";

const Landing = () => {
  const features = [
    {
      icon: Shield,
      title: "Advanced Fraud Detection",
      description: "Real-time monitoring and analysis of suspicious activities across all channels"
    },
    {
      icon: Search,
      title: "Intelligent Search",
      description: "AI-powered search across cases, transactions, and entities with natural language"
    },
    {
      icon: Bell,
      title: "Smart Alerts",
      description: "Instant notifications for critical fraud patterns and anomalies"
    },
    {
      icon: BarChart3,
      title: "Data Visualization",
      description: "Interactive charts and graphs for fraud trend analysis"
    },
    {
      icon: Lock,
      title: "Bank-Grade Security",
      description: "End-to-end encryption with biometric authentication support"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance for rapid investigation and response"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-primary">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-10"></div>
        
        <div className="container relative mx-auto px-4 py-16 md:py-24">
          <div className="text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
              <Shield className="h-4 w-4 text-white" />
              <span className="text-sm font-medium text-white">Professional Fraud Intelligence</span>
            </div>
            
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Stop Fraud Before<br />It Happens
            </h1>
            
            <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90 md:text-xl">
              The most advanced mobile platform for financial fraud detection, investigation, and prevention. 
              Built for analysts who need speed and precision.
            </p>
            
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link to="/dashboard">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  Launch Platform
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="w-full border-white/20 bg-white/10 text-white hover:bg-white/20 sm:w-auto">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <h2 className="mb-3 text-3xl font-bold text-foreground">See It In Action</h2>
            <p className="text-muted-foreground">Watch how fraud analysts use our platform to detect and prevent financial crimes</p>
          </div>
          
          <Card className="overflow-hidden shadow-elevated">
            <CardContent className="p-0">
              <AspectRatio ratio={16 / 9} className="bg-muted">
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/5 to-primary/10">
                  <div className="text-center">
                    <div className="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 backdrop-blur-sm">
                      <Play className="h-10 w-10 text-primary" fill="currentColor" />
                    </div>
                    <p className="text-lg font-medium text-muted-foreground">Demo Video Coming Soon</p>
                    <p className="text-sm text-muted-foreground">Platform walkthrough and key features</p>
                  </div>
                </div>
              </AspectRatio>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold text-foreground">Powerful Features</h2>
            <p className="text-muted-foreground">Everything you need to combat financial fraud</p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card key={index} className="transition-shadow hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-primary shadow-elevated">
            <CardContent className="p-8 text-center md:p-12">
              <h2 className="mb-4 text-3xl font-bold text-white">Ready to Protect Your Business?</h2>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
                Join leading financial institutions using our platform to detect and prevent fraud in real-time.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Link to="/dashboard">
                  <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                    Get Started Now
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="w-full border-white/20 bg-white/10 text-white hover:bg-white/20 sm:w-auto">
                  Contact Sales
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2024 Fraud Intelligence Platform. Built for financial security professionals.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
