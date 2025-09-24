"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Coins, TrendingUp, Gift, Bus, Recycle, TreePine, Zap, Calendar, MapPin, Upload } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

// Mock data for the wallet
const mockUser = {
  name: "Priya Sharma",
  tokenBalance: 1247,
  totalEarned: 2890,
  totalRedeemed: 1643,
  level: "Eco Champion",
  nextLevelTokens: 1753,
}

const recentActivities = [
  {
    id: 1,
    action: "Bus ticket uploaded",
    tokens: 15,
    date: "2025-01-20",
    time: "2:30 PM",
    status: "verified",
    icon: "bus-ticket",
    location: "Delhi Metro - Rajiv Chowk to CP",
  },
  {
    id: 2,
    action: "Recycling receipt submitted",
    tokens: 25,
    date: "2025-01-19",
    time: "11:15 AM",
    status: "verified",
    icon: "recycling",
    location: "Green Recycling Center, Sector 18",
  },
  {
    id: 3,
    action: "Tree planting photo",
    tokens: 75,
    date: "2025-01-18",
    time: "9:00 AM",
    status: "pending",
    icon: "tree-planting",
    location: "Lodhi Gardens, New Delhi",
  },
  {
    id: 4,
    action: "Energy bill - 20% reduction",
    tokens: 40,
    date: "2025-01-17",
    time: "4:45 PM",
    status: "verified",
    icon: "energy-saving",
    location: "Home - Electricity Consumption",
  },
  {
    id: 5,
    action: "Metro card scan",
    tokens: 12,
    date: "2025-01-16",
    time: "8:20 AM",
    status: "verified",
    icon: "bus-ticket",
    location: "Blue Line - Dwarka to Connaught Place",
  },
]

const rewardOptions = [
  {
    id: 1,
    title: "₹50 Electricity Bill Discount",
    tokens: 50,
    description: "Direct discount on your monthly electricity bill",
    category: "Bills",
    available: true,
  },
  {
    id: 2,
    title: "Free Bus Ticket",
    tokens: 100,
    description: "Complimentary DTC bus ticket for any route",
    category: "Transport",
    available: true,
  },
  {
    id: 3,
    title: "₹150 Local Shop Voucher",
    tokens: 150,
    description: "Discount voucher for partner local businesses",
    category: "Shopping",
    available: true,
  },
  {
    id: 4,
    title: "₹200 Cashback",
    tokens: 200,
    description: "Direct cashback to your digital wallet",
    category: "Cash",
    available: true,
  },
  {
    id: 5,
    title: "Free Metro Day Pass",
    tokens: 250,
    description: "Unlimited metro travel for one day",
    category: "Transport",
    available: true,
  },
  {
    id: 6,
    title: "₹500 Grocery Voucher",
    tokens: 500,
    description: "Discount on groceries at partner stores",
    category: "Shopping",
    available: false,
  },
]

interface UploadedActivity {
  id: number
  action: string
  description: string
  location: string
  tokens: number
  date: string
  time: string
  status: "pending" | "verified"
  icon: string
  fileName?: string
  fileUrl?: string
}

const getIconComponent = (iconName: string) => {
  const iconMap: { [key: string]: any } = {
    "bus-ticket": Bus,
    recycling: Recycle,
    "tree-planting": TreePine,
    "energy-saving": Zap,
    "waste-segregation": Bus, // Using Bus as fallback, you can add Trash2 if needed
  }
  return iconMap[iconName] || Bus
}

export default function WalletPage() {
  const [uploadedActivities, setUploadedActivities] = useState<UploadedActivity[]>([])
  const [allActivities, setAllActivities] = useState(recentActivities)

  const loadActivities = () => {
    console.log("[v0] Loading activities from localStorage")
    const stored = localStorage.getItem("uploadedActivities")
    console.log("[v0] Raw localStorage data:", stored)

    if (stored) {
      try {
        const parsed = JSON.parse(stored)
        console.log("[v0] Parsed activities:", parsed)
        setUploadedActivities(parsed)

        // Combine uploaded activities with mock activities
        const combinedActivities = [
          ...parsed.map((activity: UploadedActivity) => ({
            ...activity,
            // Keep icon as string for uploaded activities, we'll handle it in render
          })),
          ...recentActivities.map((activity) => ({
            ...activity,
            icon: getIconComponent(activity.icon), // Convert mock activities to components
          })),
        ]
        console.log("[v0] Combined activities:", combinedActivities)
        setAllActivities(combinedActivities)
      } catch (error) {
        console.error("[v0] Error parsing localStorage:", error)
      }
    }
  }

  useEffect(() => {
    loadActivities()

    const handleActivitiesUpdate = () => {
      console.log("[v0] Activities updated event received")
      loadActivities()
    }

    window.addEventListener("activitiesUpdated", handleActivitiesUpdate)

    return () => {
      window.removeEventListener("activitiesUpdated", handleActivitiesUpdate)
    }
  }, [])

  const progressToNextLevel = (mockUser.tokenBalance / mockUser.nextLevelTokens) * 100

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Welcome back, {mockUser.name}!</h1>
          <p className="text-muted-foreground">Track your eco-friendly actions and redeem amazing rewards</p>
        </div>
        <Link href="/upload">
          <Button size="lg" className="gap-2">
            <Upload className="h-5 w-5" />
            Upload Action
          </Button>
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Token Balance</CardTitle>
            <Coins className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{mockUser.tokenBalance}</div>
            <p className="text-xs text-muted-foreground">Available to redeem</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Earned</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockUser.totalEarned}</div>
            <p className="text-xs text-muted-foreground">Lifetime tokens earned</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Redeemed</CardTitle>
            <Gift className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Progress value={progressToNextLevel} className="h-2" />
              <p className="text-xs text-muted-foreground">
                {mockUser.nextLevelTokens - mockUser.tokenBalance} tokens to next level
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Level</CardTitle>
            <Badge variant="secondary">{mockUser.level}</Badge>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Progress value={progressToNextLevel} className="h-2" />
              <p className="text-xs text-muted-foreground">
                {mockUser.nextLevelTokens - mockUser.tokenBalance} tokens to next level
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="activities" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="activities">Recent Activities</TabsTrigger>
          <TabsTrigger value="rewards">Redeem Rewards</TabsTrigger>
        </TabsList>

        {/* Recent Activities Tab */}
        <TabsContent value="activities" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Recent Activities</h2>
            <Link href="/upload">
              <Button variant="outline" className="gap-2 bg-transparent">
                <Upload className="h-4 w-4" />
                Add New Action
              </Button>
            </Link>
          </div>

          <div className="space-y-4">
            {allActivities.map((activity) => {
              const IconComponent = typeof activity.icon === "string" ? getIconComponent(activity.icon) : activity.icon
              const isUploadedActivity = uploadedActivities.find((ua) => ua.id === activity.id)

              return (
                <Card key={activity.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <div className="space-y-1">
                          <h3 className="font-semibold">{activity.action}</h3>
                          {isUploadedActivity && (
                            <p className="text-sm text-muted-foreground">{isUploadedActivity.description}</p>
                          )}
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="h-3 w-3" />
                            <span>
                              {activity.date} at {activity.time}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="h-3 w-3" />
                            <span>{activity.location}</span>
                          </div>
                          {isUploadedActivity?.fileName && (
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Upload className="h-3 w-3" />
                              <span>File: {isUploadedActivity.fileName}</span>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant={activity.status === "verified" ? "default" : "secondary"}>
                            {activity.status}
                          </Badge>
                        </div>
                        <div className="text-lg font-bold text-primary">+{activity.tokens} tokens</div>
                        {isUploadedActivity?.fileUrl && (
                          <div className="mt-2">
                            <img
                              src={isUploadedActivity.fileUrl || "/placeholder.svg"}
                              alt="Uploaded proof"
                              className="w-16 h-16 object-cover rounded border cursor-pointer hover:opacity-80"
                              onClick={() => {
                                if (isUploadedActivity.fileUrl) window.open(isUploadedActivity.fileUrl, "_blank")
                              }}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </TabsContent>

        {/* Rewards Tab */}
        <TabsContent value="rewards" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Redeem Rewards</h2>
            <div className="text-sm text-muted-foreground">
              You have <span className="font-semibold text-primary">{mockUser.tokenBalance} tokens</span> available
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rewardOptions.map((reward) => (
              <Card key={reward.id} className={!reward.available ? "opacity-60" : ""}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">{reward.category}</Badge>
                    <div className="text-right">
                      <div className="text-lg font-bold text-primary">{reward.tokens} tokens</div>
                    </div>
                  </div>
                  <CardTitle className="text-lg">{reward.title}</CardTitle>
                  <CardDescription>{reward.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" disabled={!reward.available || mockUser.tokenBalance < reward.tokens}>
                    {!reward.available
                      ? "Coming Soon"
                      : mockUser.tokenBalance < reward.tokens
                        ? "Insufficient Tokens"
                        : "Redeem Now"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
