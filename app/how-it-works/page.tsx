import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Recycle, Bus, TreePine, Camera, Upload, Coins, Gift, ArrowRight, Smartphone } from "lucide-react"

const ecoActions = [
  {
    icon: Recycle,
    title: "Waste Segregation & Recycling",
    description: "Separate your waste properly and recycle materials",
    reward: "10-25 tokens",
    proof: "Photo of segregated waste or recycling receipt",
  },
  {
    icon: Bus,
    title: "Public Transport Usage",
    description: "Use buses, trains, or metro instead of private vehicles",
    reward: "15-30 tokens",
    proof: "Bus/train ticket or metro card scan",
  },
  {
    icon: TreePine,
    title: "Tree Planting",
    description: "Plant trees or participate in afforestation drives",
    reward: "50-100 tokens",
    proof: "Photo with planted tree and location",
  },
  {
    icon: Smartphone,
    title: "Energy Conservation",
    description: "Reduce electricity consumption in your home",
    reward: "20-40 tokens",
    proof: "Electricity bill showing reduced usage",
  },
]

const rewardOptions = [
  {
    tokens: 50,
    reward: "₹50 off electricity bill",
    description: "Direct discount on your monthly electricity bill",
  },
  {
    tokens: 100,
    reward: "Free bus ticket",
    description: "Complimentary public transport ticket",
  },
  {
    tokens: 150,
    reward: "Local shop voucher",
    description: "Discount voucher for partner local businesses",
  },
  {
    tokens: 200,
    reward: "₹200 cashback",
    description: "Direct cashback to your digital wallet",
  },
]

export default function HowItWorksPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-accent/20 to-primary/10 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4">
              Step-by-Step Guide
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              How GreenRewards Works
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
              Learn how to earn tokens for your eco-friendly actions and redeem them for real-world rewards
            </p>
          </div>
        </div>
      </section>

      {/* Main Process Flow */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Simple 4-Step Process</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Start earning rewards for your environmental contributions today
            </p>
          </div>

          <div className="relative">
            {/* Process Steps */}
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
              {/* Step 1 */}
              <div className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground mb-6">
                    <Recycle className="h-10 w-10" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">1. Take Eco-Friendly Action</h3>
                  <p className="text-muted-foreground text-center">
                    Perform any environmentally beneficial activity like recycling, using public transport, or
                    conserving energy.
                  </p>
                </div>
                {/* Arrow */}
                <div className="hidden lg:block absolute top-10 -right-4 text-muted-foreground">
                  <ArrowRight className="h-6 w-6" />
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground mb-6">
                    <Camera className="h-10 w-10" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">2. Capture Proof</h3>
                  <p className="text-muted-foreground text-center">
                    Take photos, scan receipts, or upload tickets as verification of your eco-friendly action.
                  </p>
                </div>
                <div className="hidden lg:block absolute top-10 -right-4 text-muted-foreground">
                  <ArrowRight className="h-6 w-6" />
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground mb-6">
                    <Coins className="h-10 w-10" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">3. Earn Tokens</h3>
                  <p className="text-muted-foreground text-center">
                    Receive digital tokens in your wallet based on the environmental impact of your action.
                  </p>
                </div>
                <div className="hidden lg:block absolute top-10 -right-4 text-muted-foreground">
                  <ArrowRight className="h-6 w-6" />
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground mb-6">
                    <Gift className="h-10 w-10" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">4. Redeem Rewards</h3>
                  <p className="text-muted-foreground text-center">
                    Use your tokens to get discounts on bills, free transport tickets, or shop vouchers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eco Actions Section */}
      <section className="bg-muted/50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Eco-Friendly Actions You Can Take
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Various ways to contribute to the environment and earn tokens
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {ecoActions.map((action, index) => (
              <Card key={index} className="relative overflow-hidden">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <action.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{action.title}</CardTitle>
                      <Badge variant="secondary" className="mt-1">
                        {action.reward}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">{action.description}</CardDescription>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Upload className="h-4 w-4" />
                    <span>Proof required: {action.proof}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Rewards Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Redeem Your Tokens</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Turn your earned tokens into real-world benefits and savings
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {rewardOptions.map((option, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                    <Coins className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{option.tokens} Tokens</CardTitle>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-foreground mb-2">{option.reward}</h4>
                  <CardDescription>{option.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/5 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Ready to Get Started?</h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
              Join thousands of users who are already making a difference and earning rewards.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/wallet">
                <Button size="lg" className="gap-2">
                  Open Your Wallet
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/impact">
                <Button variant="outline" size="lg">
                  See Community Impact
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
