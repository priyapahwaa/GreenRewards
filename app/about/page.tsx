import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Leaf, Users, Lightbulb, Heart, ArrowRight, CheckCircle, Zap, Recycle, TreePine } from "lucide-react"

const values = [
  {
    icon: Leaf,
    title: "Environmental Impact",
    description:
      "Every feature we build is designed to maximize positive environmental outcomes and encourage sustainable behavior.",
  },
  {
    icon: Users,
    title: "Community First",
    description:
      "We believe in the power of collective action. Our platform brings together individuals to create meaningful change.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We leverage cutting-edge technology to make environmental action accessible, rewarding, and engaging for everyone.",
  },
  {
    icon: Heart,
    title: "Transparency",
    description:
      "We maintain complete transparency in our impact tracking, reward systems, and community progress metrics.",
  },
]

const achievements = [
  { metric: "2,847 kg", label: "CO₂ Reduced", description: "Through community actions" },
  { metric: "12,847", label: "Active Users", description: "Making a difference daily" },
  { metric: "1,456", label: "Bottles Recycled", description: "Diverted from landfills" },
  { metric: "234", label: "Trees Planted", description: "Growing our green future" },
]

const features = [
  {
    icon: CheckCircle,
    title: "Verified Actions",
    description: "All eco-friendly actions are verified through our secure proof submission system.",
  },
  {
    icon: Zap,
    title: "Instant Rewards",
    description: "Earn tokens immediately upon verification and redeem them for real-world benefits.",
  },
  {
    icon: Recycle,
    title: "Multiple Action Types",
    description: "Support for recycling, public transport, energy saving, and tree planting activities.",
  },
  {
    icon: TreePine,
    title: "Environmental Tracking",
    description: "Track your personal and community environmental impact with detailed analytics.",
  },
]

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-accent/20 to-primary/10 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              About GreenRewards
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
              We're committed to creating technology that drives positive environmental change through community action
              and meaningful rewards that make sustainability accessible to everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our Mission</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              To make environmental action accessible, rewarding, and impactful for everyone
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <Card className="p-8 text-center bg-primary/5">
              <CardContent className="space-y-6">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Leaf className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  Turning Everyday Actions into Environmental Impact
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  GreenRewards bridges the gap between individual environmental actions and collective impact. By
                  gamifying sustainability through our digital reward system, we make it easy and rewarding for people
                  to contribute to a greener future while saving money on everyday expenses.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-primary">{achievement.metric}</div>
                      <div className="text-sm font-semibold text-foreground">{achievement.label}</div>
                      <div className="text-xs text-muted-foreground">{achievement.description}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-muted/50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our Values</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              The principles that guide everything we build and every decision we make
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Platform Features</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Comprehensive tools designed to make environmental action simple and rewarding
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-primary/5 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">Making Real Impact</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              GreenRewards addresses the critical need for scalable solutions that encourage environmental
              responsibility while providing tangible benefits to users. Our platform demonstrates how technology can be
              leveraged to create positive behavioral change at scale.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-6">
                <div className="text-2xl font-bold text-primary mb-2">Challenge</div>
                <p className="text-sm text-muted-foreground">Creating incentive systems for environmental action</p>
              </div>
              <div className="p-6">
                <div className="text-2xl font-bold text-primary mb-2">Solution</div>
                <p className="text-sm text-muted-foreground">Digital reward wallet for eco-friendly actions</p>
              </div>
              <div className="p-6">
                <div className="text-2xl font-bold text-primary mb-2">Result</div>
                <p className="text-sm text-muted-foreground">Measurable environmental benefits with user rewards</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Join Our Mission</h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
              Ready to be part of the solution? Start your journey with GreenRewards and help us build a more
              sustainable future.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/upload">
                <Button size="lg" className="gap-2">
                  Start Uploading Actions
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/impact">
                <Button variant="outline" size="lg">
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
