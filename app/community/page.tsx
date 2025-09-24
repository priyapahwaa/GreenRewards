"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Heart, MessageCircle, Share2, Camera, Send, Leaf } from "lucide-react"

const initialPosts = [
  {
    id: 1,
    user: {
      name: "Priya Sharma",
      avatar: "/user-avatar-1.png",
      level: "Eco Champion",
    },
    content:
      "Just completed my morning jog using public transport to reach the park! 🌳 Every small step counts towards a greener future. #EcoFriendly #PublicTransport",
    image: "/park-jogging-green-trees.jpg",
    timestamp: "2 hours ago",
    likes: 24,
    comments: 8,
    tokens: 15,
    action: "Public Transport",
  },
  {
    id: 2,
    user: {
      name: "Rahul Kumar",
      avatar: "/diverse-user-avatar-set-2.png",
      level: "Green Warrior",
    },
    content:
      "Organized a recycling drive in my neighborhood today! Collected over 50kg of plastic bottles and paper. The community response was amazing! 💚",
    image: "/recycling-bottles-community-drive.jpg",
    timestamp: "4 hours ago",
    likes: 45,
    comments: 12,
    tokens: 75,
    action: "Recycling",
  },
  {
    id: 3,
    user: {
      name: "Anita Singh",
      avatar: "/diverse-user-avatars-3.png",
      level: "Eco Enthusiast",
    },
    content:
      "Planted 5 saplings in my society garden this weekend. Can't wait to see them grow! 🌱 Who else is joining the tree planting movement?",
    image: "/tree-planting-saplings-garden.jpg",
    timestamp: "1 day ago",
    likes: 67,
    comments: 15,
    tokens: 100,
    action: "Tree Planting",
  },
]

export default function CommunityPage() {
  const [posts, setPosts] = useState(initialPosts)
  const [newPost, setNewPost] = useState("")

  const handleSubmitPost = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newPost.trim()) return

    const post = {
      id: posts.length + 1,
      user: {
        name: "You",
        avatar: "/diverse-user-avatars.png",
        level: "Eco Champion",
      },
      content: newPost,
      image: null,
      timestamp: "Just now",
      likes: 0,
      comments: 0,
      tokens: 0,
      action: "Community Post",
    }

    setPosts([post, ...posts])
    setNewPost("")
  }

  const handleLike = (postId: number) => {
    setPosts(posts.map((post) => (post.id === postId ? { ...post, likes: post.likes + 1 } : post)))
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Community Feed</h1>
        <p className="text-muted-foreground">Share your eco-friendly actions and inspire others in the community</p>
      </div>

      {/* Create Post */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-lg">Share Your Eco-Action</CardTitle>
          <CardDescription>Tell the community about your latest sustainable activity</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmitPost} className="space-y-4">
            <Textarea
              placeholder="What eco-friendly action did you take today?"
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              className="min-h-[100px]"
            />
            <div className="flex items-center justify-between">
              <Button type="button" variant="outline" size="sm" className="gap-2 bg-transparent">
                <Camera className="h-4 w-4" />
                Add Photo
              </Button>
              <Button type="submit" className="gap-2">
                <Send className="h-4 w-4" />
                Share Post
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Posts Feed */}
      <div className="space-y-6">
        {posts.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={post.user.avatar || "/placeholder.svg"} alt={post.user.name} />
                    <AvatarFallback>{post.user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{post.user.name}</h3>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="text-xs">
                        {post.user.level}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{post.timestamp}</span>
                    </div>
                  </div>
                </div>
                {post.tokens > 0 && (
                  <div className="flex items-center gap-1 text-sm font-semibold text-primary">
                    <Leaf className="h-4 w-4" />+{post.tokens} tokens
                  </div>
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground">{post.content}</p>
              {post.image && (
                <div className="rounded-lg overflow-hidden">
                  <img src={post.image || "/placeholder.svg"} alt="Post content" className="w-full h-64 object-cover" />
                </div>
              )}
              <div className="flex items-center justify-between pt-4 border-t">
                <div className="flex items-center gap-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="gap-2 text-muted-foreground hover:text-red-500"
                    onClick={() => handleLike(post.id)}
                  >
                    <Heart className="h-4 w-4" />
                    {post.likes}
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground">
                    <MessageCircle className="h-4 w-4" />
                    {post.comments}
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground">
                    <Share2 className="h-4 w-4" />
                    Share
                  </Button>
                </div>
                <Badge variant="outline" className="text-xs">
                  {post.action}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
