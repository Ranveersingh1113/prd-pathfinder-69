import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Shield, Search, Bell, BarChart3, Lock, Zap, Play, TrendingUp, Users, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Landing = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const stats = [
    { icon: Shield, value: "99.9%", label: "Detection Rate" },
    { icon: TrendingUp, value: "$2.4B", label: "Fraud Prevented" },
    { icon: Users, value: "50K+", label: "Active Analysts" },
    { icon: Eye, value: "<100ms", label: "Response Time" },
  ];

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
        {/* Animated Background */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-10"></div>
        
        {/* Floating Orbs */}
        <motion.div
          className="absolute left-1/4 top-20 h-64 w-64 rounded-full bg-white/5 blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-1/4 top-40 h-96 w-96 rounded-full bg-white/5 blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Mouse follower effect */}
        <motion.div
          className="pointer-events-none absolute h-96 w-96 rounded-full bg-white/5 blur-3xl"
          animate={{
            x: mousePosition.x - 192,
            y: mousePosition.y - 192,
          }}
          transition={{ type: "spring", damping: 30, stiffness: 50 }}
        />
        
        <div className="container relative mx-auto px-4 py-16 md:py-24">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Shield className="h-4 w-4 text-white" />
              <span className="text-sm font-medium text-white">Professional Fraud Intelligence</span>
            </motion.div>
            
            <motion.h1
              className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Stop Fraud Before<br />It Happens
            </motion.h1>
            
            <motion.p
              className="mx-auto mb-8 max-w-2xl text-lg text-white/90 md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              The most advanced mobile platform for financial fraud detection, investigation, and prevention. 
              Built for analysts who need speed and precision.
            </motion.p>
            
            <motion.div
              className="flex flex-col gap-4 sm:flex-row sm:justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Link to="/dashboard">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  Launch Platform
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="w-full border-white/20 bg-white/10 text-white hover:bg-white/20 sm:w-auto">
                Schedule Demo
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <div className="border-t border-white/10 bg-white/5 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <stat.icon className="mx-auto mb-2 h-6 w-6 text-white/80" />
                  <div className="mb-1 text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <motion.div
            className="mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-3 text-3xl font-bold text-foreground">See It In Action</h2>
            <p className="text-muted-foreground">Watch how fraud analysts use our platform to detect and prevent financial crimes</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="group overflow-hidden shadow-elevated transition-shadow hover:shadow-lg">
              <CardContent className="p-0">
                <AspectRatio ratio={16 / 9} className="bg-muted">
                  <motion.div
                    className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/5 to-primary/10"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-center">
                      <motion.div
                        className="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 backdrop-blur-sm"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Play className="h-10 w-10 text-primary transition-transform group-hover:scale-110" fill="currentColor" />
                      </motion.div>
                      <p className="text-lg font-medium text-muted-foreground">Demo Video Coming Soon</p>
                      <p className="text-sm text-muted-foreground">Platform walkthrough and key features</p>
                    </div>
                  </motion.div>
                </AspectRatio>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-3 text-3xl font-bold text-foreground">Powerful Features</h2>
            <p className="text-muted-foreground">Everything you need to combat financial fraud</p>
          </motion.div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="group h-full transition-all hover:scale-105 hover:shadow-lg">
                  <CardContent className="p-6">
                    <motion.div
                      className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <feature.icon className="h-6 w-6 text-primary transition-transform group-hover:scale-110" />
                    </motion.div>
                    <h3 className="mb-2 text-lg font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="relative overflow-hidden bg-gradient-primary shadow-elevated">
              {/* Animated background elements */}
              <motion.div
                className="absolute right-0 top-0 h-64 w-64 rounded-full bg-white/5 blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-white/5 blur-3xl"
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.5, 0.3, 0.5],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              <CardContent className="relative p-8 text-center md:p-12">
                <motion.h2
                  className="mb-4 text-3xl font-bold text-white"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  Ready to Protect Your Business?
                </motion.h2>
                <motion.p
                  className="mx-auto mb-8 max-w-2xl text-lg text-white/90"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  Join leading financial institutions using our platform to detect and prevent fraud in real-time.
                </motion.p>
                <motion.div
                  className="flex flex-col gap-4 sm:flex-row sm:justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <Link to="/dashboard">
                    <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                      Get Started Now
                    </Button>
                  </Link>
                  <Button size="lg" variant="outline" className="w-full border-white/20 bg-white/10 text-white hover:bg-white/20 sm:w-auto">
                    Contact Sales
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
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
