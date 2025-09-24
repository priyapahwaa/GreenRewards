"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { Leaf, Recycle, Bus, Users, TrendingUp, Award, Globe, Zap } from "lucide-react"

// Mock data for impact statistics
const overallStats = {
  co2Reduced: 250, // kg - matching the original request
  plasticRecycled: 320, // bottles - matching the original request
  wasteSegregated: 1.2, // tonnes - matching the original request
  publicTransportTrips: 8934,
  treesPlanted: 234,
  activeUsers: 12847,
  totalTokensEarned: 1847293,
}

const monthlyData = [
  { month: "Jan", co2: 15, plastic: 20, waste: 0.08 },
  { month: "Feb", co2: 28, plastic: 35, waste: 0.12 },
  { month: "Mar", co2: 45, plastic: 55, waste: 0.18 },
  { month: "Apr", co2: 68, plastic: 78, waste: 0.25 },
  { month: "May", co2: 95, plastic: 105, waste: 0.35 },
  { month: "Jun", co2: 125, plastic: 140, waste: 0.48 },
  { month: "Jul", co2: 158, plastic: 180, waste: 0.62 },
  { month: "Aug", co2: 185, plastic: 215, waste: 0.78 },
  { month: "Sep", co2: 210, plastic: 245, waste: 0.92 },
  { month: "Oct", co2: 230, plastic: 275, waste: 1.05 },
  { month: "Nov", co2: 240, plastic: 295, waste: 1.15 },
  { month: "Dec", co2: 250, plastic: 320, waste: 1.2 },
]

const categoryData = [
  { name: "Public Transport", value: 35, color: "#22c55e" },
  { name: "Recycling", value: 28, color: "#3b82f6" },
  { name: "Waste Segregation", value: 22, color: "#f59e0b" },
  { name: "Tree Planting", value: 15, color: "#10b981" },
]

const topContributors = [
  { name: "Priya Sharma", tokens: 2847, actions: 156, level: "Eco Champion" },
  { name: "Rahul Gupta", tokens: 2634, actions: 142, level: "Green Warrior" },
  { name: "Anita Singh", tokens: 2456, actions: 138, level: "Green Warrior" },
  { name: "Vikram Patel", tokens: 2289, actions: 129, level: "Eco Enthusiast" },
  { name: "Sneha Reddy", tokens: 2156, actions: 124, level: "Eco Enthusiast" },
]

export default function ImpactPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Header */}
      <div className="text-center mb-12">
        <Badge variant="secondary" className="mb-4">
          Community Impact
        </Badge>
        <h1 className="text-4xl font-bold text-foreground mb-4">Our Environmental Impact</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          See the collective positive impact our community is making on the environment through everyday actions
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <Card className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200 dark:border-green-800">
          <CardContent className="p-0">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-500 mb-6">
              <Leaf className="h-10 w-10 text-white" />
            </div>
            <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
              {overallStats.co2Reduced}kg
            </div>
            <div className="text-lg font-semibold text-green-700 dark:text-green-300 mb-1">CO₂ Reduced</div>
            <p className="text-sm text-green-600 dark:text-green-400">Equivalent to planting 11 trees</p>
          </CardContent>
        </Card>

        <Card className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200 dark:border-blue-800">
          <CardContent className="p-0">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-500 mb-6">
              <Recycle className="h-10 w-10 text-white" />
            </div>
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              {overallStats.plasticRecycled}
            </div>
            <div className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-1">Plastic Bottles Recycled</div>
            <p className="text-sm text-blue-600 dark:text-blue-400">Saved from polluting waterways</p>
          </CardContent>
        </Card>

        <Card className="text-center p-8 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border-orange-200 dark:border-orange-800">
          <CardContent className="p-0">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-500 mb-6">
              <Globe className="h-10 w-10 text-white" />
            </div>
            <div className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">
              {overallStats.wasteSegregated}
            </div>
            <div className="text-lg font-semibold text-orange-700 dark:text-orange-300 mb-1">Tonnes Waste Diverted</div>
            <p className="text-sm text-orange-600 dark:text-orange-400">Properly segregated and recycled</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Monthly Progress Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Monthly CO₂ Reduction Progress
            </CardTitle>
            <CardDescription>Cumulative environmental impact over time</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip
                  formatter={(value, name) => [
                    `${value}${name === "co2" ? "kg" : name === "waste" ? "t" : ""}`,
                    name === "co2" ? "CO₂ Reduced" : name === "plastic" ? "Bottles Recycled" : "Waste Diverted",
                  ]}
                />
                <Area type="monotone" dataKey="co2" stroke="#22c55e" fill="#22c55e" fillOpacity={0.3} />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Activity Distribution */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              Activity Distribution
            </CardTitle>
            <CardDescription>How our community contributes to sustainability</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value}%`, "Contribution"]} />
              </PieChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-2 gap-3 mt-6">
              {categoryData.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-sm text-muted-foreground">{item.name}</span>
                  <span className="text-sm font-semibold ml-auto">{item.value}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Top Contributors */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Top Contributors
            </CardTitle>
            <CardDescription>Community members making the biggest impact</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topContributors.map((contributor, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-muted/50 to-muted/30 border"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full text-white font-bold ${
                        index === 0
                          ? "bg-yellow-500"
                          : index === 1
                            ? "bg-gray-400"
                            : index === 2
                              ? "bg-orange-500"
                              : "bg-primary"
                      }`}
                    >
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-semibold">{contributor.name}</p>
                      <p className="text-sm text-muted-foreground">{contributor.actions} eco-actions</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-primary">{contributor.tokens.toLocaleString()}</p>
                    <Badge variant="outline" className="text-xs">
                      {contributor.level}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Community Stats */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-primary" />
              Community Overview
            </CardTitle>
            <CardDescription>Platform-wide impact statistics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 rounded-lg bg-primary/5">
                <div className="flex items-center gap-3">
                  <Users className="h-8 w-8 text-primary" />
                  <span className="font-medium">Active Users</span>
                </div>
                <span className="text-2xl font-bold">{overallStats.activeUsers.toLocaleString()}</span>
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg bg-green-50 dark:bg-green-900/20">
                <div className="flex items-center gap-3">
                  <Zap className="h-8 w-8 text-green-600" />
                  <span className="font-medium">Total Tokens Earned</span>
                </div>
                <span className="text-2xl font-bold text-green-600">
                  {overallStats.totalTokensEarned.toLocaleString()}
                </span>
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20">
                <div className="flex items-center gap-3">
                  <Bus className="h-8 w-8 text-blue-600" />
                  <span className="font-medium">Public Transport Trips</span>
                </div>
                <span className="text-2xl font-bold text-blue-600">
                  {overallStats.publicTransportTrips.toLocaleString()}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="text-center bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-primary/20">
        <CardContent className="p-12">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary mb-6">
            <Leaf className="h-8 w-8 text-primary-foreground" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Join Our Growing Community</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
            Be part of the change. Every eco-friendly action counts towards building a more sustainable future.
          </p>
          <Badge variant="secondary" className="text-base px-6 py-3">
            {overallStats.activeUsers.toLocaleString()}+ users making a difference
          </Badge>
        </CardContent>
      </Card>
    </div>
  )
}
