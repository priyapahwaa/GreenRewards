import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, Clock } from "lucide-react"

const events = [
  {
    id: 1,
    title: "Community Tree Planting Drive",
    description:
      "Join us for a massive tree planting initiative in Lodhi Gardens. Help us plant 500+ saplings and earn bonus tokens!",
    date: "2025-02-15",
    time: "9:00 AM - 1:00 PM",
    location: "Lodhi Gardens, New Delhi",
    participants: 156,
    maxParticipants: 200,
    tokens: 100,
    category: "Environment",
  },
  {
    id: 2,
    title: "E-Waste Collection Camp",
    description:
      "Bring your old electronics and gadgets for proper recycling. Learn about e-waste management and sustainable disposal.",
    date: "2025-02-20",
    time: "10:00 AM - 4:00 PM",
    location: "DLF Mall, Gurgaon",
    participants: 89,
    maxParticipants: 150,
    tokens: 75,
    category: "Recycling",
  },
  {
    id: 3,
    title: "Sustainable Transport Challenge",
    description: "Week-long challenge to use only public transport or cycling. Track your carbon footprint reduction!",
    date: "2025-02-25",
    time: "All Week",
    location: "Delhi NCR",
    participants: 234,
    maxParticipants: 500,
    tokens: 150,
    category: "Transport",
  },
  {
    id: 4,
    title: "Plastic-Free Market Visit",
    description: "Shop at local markets using only reusable bags and containers. Promote plastic-free shopping habits.",
    date: "2025-03-01",
    time: "8:00 AM - 12:00 PM",
    location: "Sarojini Nagar Market",
    participants: 67,
    maxParticipants: 100,
    tokens: 50,
    category: "Lifestyle",
  },
  {
    id: 5,
    title: "Solar Energy Workshop",
    description:
      "Learn about solar panel installation and renewable energy solutions for homes. Hands-on workshop with experts.",
    date: "2025-03-05",
    time: "2:00 PM - 6:00 PM",
    location: "India Habitat Centre",
    participants: 45,
    maxParticipants: 80,
    tokens: 125,
    category: "Energy",
  },
  {
    id: 6,
    title: "River Cleanup Drive",
    description:
      "Help clean the Yamuna riverbank and raise awareness about water pollution. Gloves and tools provided.",
    date: "2025-03-10",
    time: "6:00 AM - 10:00 AM",
    location: "Yamuna Bank, ITO",
    participants: 123,
    maxParticipants: 250,
    tokens: 200,
    category: "Water",
  },
]

export default function EventsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Eco-Friendly Events</h1>
        <p className="text-muted-foreground">
          Join community events and earn bonus tokens while making a positive environmental impact
        </p>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <Card key={event.id} className="flex flex-col">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <Badge variant="outline">{event.category}</Badge>
                <div className="text-sm font-semibold text-primary">+{event.tokens} tokens</div>
              </div>
              <CardTitle className="text-lg">{event.title}</CardTitle>
              <CardDescription className="text-sm">{event.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-between">
              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="h-4 w-4" />
                  <span>
                    {event.participants}/{event.maxParticipants} participants
                  </span>
                </div>
              </div>
              <Button className="w-full" disabled={event.participants >= event.maxParticipants}>
                {event.participants >= event.maxParticipants ? "Event Full" : "Join Event"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
