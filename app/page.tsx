import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import {
  Leaf,
  Recycle,
  Bus,
  TreePine,
  Coins,
  Shield,
  Users,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Zap,
  Gift,
  Upload,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5"></div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-balance gradient-text font-[family-name:var(--font-poppins)] animate-pulse-glow">
              GreenRewards
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty font-[family-name:var(--font-inter)]">
              Turn eco-friendly actions into real-life savings. Our digital wallet rewards you for recycling, waste
              segregation, using public transport, and other sustainable choices.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/upload">
                <Button
                  size="lg"
                  className="gap-2 glass-card neon-glow hover:neon-glow-accent hover-lift bg-gradient-to-r from-primary to-accent text-white font-bold"
                >
                  <Upload className="h-5 w-5" />
                  Upload & Earn Now
                </Button>
              </Link>
              <Link href="/wallet">
                <Button
                  variant="outline"
                  size="lg"
                  className="gap-2 glass hover:neon-glow-accent hover-lift bg-transparent"
                >
                  View Wallet
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Icons */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[10%] top-[20%] animate-bounce">
            <Leaf className="h-8 w-8 text-primary/40 neon-glow" />
          </div>
          <div className="absolute right-[15%] top-[30%] animate-bounce delay-300">
            <Recycle className="h-6 w-6 text-accent/50 neon-glow-accent" />
          </div>
          <div className="absolute left-[20%] bottom-[30%] animate-bounce delay-700">
            <Bus className="h-7 w-7 text-secondary/40 neon-glow" />
          </div>
          <div className="absolute right-[10%] bottom-[20%] animate-bounce delay-500">
            <TreePine className="h-9 w-9 text-primary/30 neon-glow" />
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl gradient-text font-[family-name:var(--font-poppins)]">
              How It Works
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground font-[family-name:var(--font-inter)]">
              Simple steps to start earning rewards for your eco-friendly actions
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
              <div className="flex flex-col items-center text-center hover-lift">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg glass-card neon-glow">
                  <Recycle className="h-8 w-8 text-primary" />
                </div>
                <dt className="text-base font-semibold leading-7 text-foreground font-[family-name:var(--font-poppins)]">
                  1. Take Action
                </dt>
                <dd className="mt-1 text-base leading-7 text-muted-foreground font-[family-name:var(--font-inter)]">
                  Segregate waste, recycle, use public transport, or plant trees
                </dd>
              </div>
              <div className="flex flex-col items-center text-center hover-lift">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg glass-card neon-glow">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <dt className="text-base font-semibold leading-7 text-foreground font-[family-name:var(--font-poppins)]">
                  2. Upload Proof
                </dt>
                <dd className="mt-1 text-base leading-7 text-muted-foreground font-[family-name:var(--font-inter)]">
                  Submit tickets, receipts, or photos as verification
                </dd>
              </div>
              <div className="flex flex-col items-center text-center hover-lift">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg glass-card neon-glow">
                  <Coins className="h-8 w-8 text-primary" />
                </div>
                <dt className="text-base font-semibold leading-7 text-foreground font-[family-name:var(--font-poppins)]">
                  3. Earn Tokens
                </dt>
                <dd className="mt-1 text-base leading-7 text-muted-foreground font-[family-name:var(--font-inter)]">
                  Receive digital tokens based on your environmental impact
                </dd>
              </div>
              <div className="flex flex-col items-center text-center hover-lift">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg glass-card neon-glow">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <dt className="text-base font-semibold leading-7 text-foreground font-[family-name:var(--font-poppins)]">
                  4. Redeem Rewards
                </dt>
                <dd className="mt-1 text-base leading-7 text-muted-foreground font-[family-name:var(--font-inter)]">
                  Use tokens for discounts on bills, transport, and local shops
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5"></div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl gradient-text font-[family-name:var(--font-poppins)]">
              Available Rewards
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground font-[family-name:var(--font-inter)]">
              Redeem your tokens for real-world benefits and savings
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="glass-card neon-glow hover-lift">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="glass">
                      Bills
                    </Badge>
                    <div className="text-lg font-bold text-primary gradient-text">50 tokens</div>
                  </div>
                  <CardTitle className="text-lg font-[family-name:var(--font-poppins)]">
                    ₹50 Electricity Bill Discount
                  </CardTitle>
                  <CardDescription className="font-[family-name:var(--font-inter)]">
                    Direct discount on your monthly electricity bill
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Zap className="h-4 w-4 text-accent" />
                    <span>Save on energy costs</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card neon-glow hover-lift">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="glass">
                      Transport
                    </Badge>
                    <div className="text-lg font-bold text-primary gradient-text">100 tokens</div>
                  </div>
                  <CardTitle className="text-lg font-[family-name:var(--font-poppins)]">Free Bus Ticket</CardTitle>
                  <CardDescription className="font-[family-name:var(--font-inter)]">
                    Complimentary DTC bus ticket for any route
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Bus className="h-4 w-4 text-accent" />
                    <span>Sustainable transport</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card neon-glow hover-lift">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="glass">
                      Shopping
                    </Badge>
                    <div className="text-lg font-bold text-primary gradient-text">150 tokens</div>
                  </div>
                  <CardTitle className="text-lg font-[family-name:var(--font-poppins)]">
                    ₹150 Local Shop Voucher
                  </CardTitle>
                  <CardDescription className="font-[family-name:var(--font-inter)]">
                    Discount voucher for partner local businesses
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Gift className="h-4 w-4 text-accent" />
                    <span>Support local economy</span>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="mt-12 text-center">
              <Link href="/wallet">
                <Button
                  size="lg"
                  className="gap-2 glass-card neon-glow hover:neon-glow-accent hover-lift bg-gradient-to-r from-primary to-accent text-white"
                >
                  View All Rewards
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl gradient-text font-[family-name:var(--font-poppins)]">
              Why Choose GreenRewards?
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground font-[family-name:var(--font-inter)]">
              Join thousands of users making a positive environmental impact while saving money
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              <div className="relative pl-16 hover-lift">
                <dt className="text-base font-semibold leading-7 text-foreground font-[family-name:var(--font-poppins)]">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg glass-card neon-glow bg-gradient-to-r from-primary to-accent">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  Real Financial Benefits
                </dt>
                <dd className="mt-2 text-base leading-7 text-muted-foreground font-[family-name:var(--font-inter)]">
                  Save money on electricity bills, transport costs, and shopping with our reward system.
                </dd>
              </div>
              <div className="relative pl-16 hover-lift">
                <dt className="text-base font-semibold leading-7 text-foreground font-[family-name:var(--font-poppins)]">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg glass-card neon-glow bg-gradient-to-r from-primary to-accent">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  Community Impact
                </dt>
                <dd className="mt-2 text-base leading-7 text-muted-foreground font-[family-name:var(--font-inter)]">
                  Join a community of environmentally conscious individuals making a collective difference.
                </dd>
              </div>
              <div className="relative pl-16 hover-lift">
                <dt className="text-base font-semibold leading-7 text-foreground font-[family-name:var(--font-poppins)]">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg glass-card neon-glow bg-gradient-to-r from-primary to-accent">
                    <Leaf className="h-6 w-6 text-white" />
                  </div>
                  Environmental Impact
                </dt>
                <dd className="mt-2 text-base leading-7 text-muted-foreground font-[family-name:var(--font-inter)]">
                  Track your positive environmental contributions and see your impact grow over time.
                </dd>
              </div>
              <div className="relative pl-16 hover-lift">
                <dt className="text-base font-semibold leading-7 text-foreground font-[family-name:var(--font-poppins)]">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg glass-card neon-glow bg-gradient-to-r from-primary to-accent">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  Secure & Transparent
                </dt>
                <dd className="mt-2 text-base leading-7 text-muted-foreground font-[family-name:var(--font-inter)]">
                  Your data is secure and all transactions are transparent and verifiable.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 sm:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-l from-secondary/5 to-primary/5"></div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl gradient-text font-[family-name:var(--font-poppins)]">
              About GreenRewards
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground font-[family-name:var(--font-inter)]">
              GreenRewards is a revolutionary digital platform that incentivizes sustainable living by rewarding
              eco-friendly actions with real-world benefits. Our mission is to make environmental consciousness
              rewarding and accessible to everyone. Together, we're building a greener future, one action at a time.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl gradient-text font-[family-name:var(--font-poppins)]">
              Ready to Start Earning?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted-foreground font-[family-name:var(--font-inter)]">
              Join GreenRewards today and turn your eco-friendly actions into real savings.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/upload">
                <Button
                  size="lg"
                  className="gap-2 glass-card neon-glow hover:neon-glow-accent hover-lift bg-gradient-to-r from-primary to-accent text-white font-bold"
                >
                  <Upload className="h-5 w-5" />
                  Start Uploading
                </Button>
              </Link>
              <Link href="/impact">
                <Button variant="outline" size="lg" className="glass hover:neon-glow-accent hover-lift bg-transparent">
                  See Our Impact
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
