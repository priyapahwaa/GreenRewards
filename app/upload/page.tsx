"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Upload, Camera, CheckCircle, Coins, Bus, Recycle, TreePine, Zap, Trash2 } from "lucide-react"
import Link from "next/link"

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

const actionTypes = [
  {
    id: "bus-ticket",
    name: "Bus/Metro Ticket",
    icon: Bus,
    tokens: "10-20",
    description: "Upload your public transport tickets",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    id: "recycling",
    name: "Recycling Receipt",
    icon: Recycle,
    tokens: "15-30",
    description: "Submit recycling center receipts",
    color: "bg-green-500/10 text-green-600",
  },
  {
    id: "tree-planting",
    name: "Tree Planting",
    icon: TreePine,
    tokens: "50-100",
    description: "Share photos of tree planting activities",
    color: "bg-emerald-500/10 text-emerald-600",
  },
  {
    id: "energy-saving",
    name: "Energy Bill (Reduced Usage)",
    icon: Zap,
    tokens: "20-50",
    description: "Show reduced electricity consumption",
    color: "bg-yellow-500/10 text-yellow-600",
  },
  {
    id: "waste-segregation",
    name: "Waste Segregation",
    icon: Trash2,
    tokens: "5-15",
    description: "Document proper waste segregation",
    color: "bg-purple-500/10 text-purple-600",
  },
]

export default function UploadPage() {
  const [uploadForm, setUploadForm] = useState({
    action: "",
    description: "",
    location: "",
  })
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [filePreview, setFilePreview] = useState<string | null>(null)
  const [isDragOver, setIsDragOver] = useState(false)

  const handleUploadSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    console.log("[v0] Form submitted with:", { uploadForm, selectedFile })

    const selectedActionType = actionTypes.find((type) => type.id === uploadForm.action)
    if (selectedActionType && selectedFile) {
      // Create file URL for preview
      const fileUrl = URL.createObjectURL(selectedFile)

      const newActivity: UploadedActivity = {
        id: Date.now(),
        action: selectedActionType.name,
        description: uploadForm.description,
        location: uploadForm.location,
        tokens: Number.parseInt(selectedActionType.tokens.split("-")[1]), // Use max tokens
        date: new Date().toISOString().split("T")[0],
        time: new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }),
        status: "verified", // Auto-approve all uploads
        icon: selectedActionType.id,
        fileName: selectedFile.name,
        fileUrl: fileUrl,
      }

      console.log("[v0] New activity created:", newActivity)

      // Get existing activities from localStorage
      const existingActivities = JSON.parse(localStorage.getItem("uploadedActivities") || "[]")
      console.log("[v0] Existing activities:", existingActivities)

      // Add new activity to the beginning of the array
      const updatedActivities = [newActivity, ...existingActivities]

      // Save back to localStorage
      localStorage.setItem("uploadedActivities", JSON.stringify(updatedActivities))
      console.log("[v0] Saved to localStorage:", updatedActivities)

      // Trigger a custom event to notify other components
      window.dispatchEvent(new CustomEvent("activitiesUpdated"))
    }

    setIsSubmitted(true)
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setUploadForm({ action: "", description: "", location: "" })
      setSelectedFile(null)
      setFilePreview(null)
    }, 3000)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("[v0] File input changed:", e.target.files)
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      console.log("[v0] Selected file:", file.name, file.type, file.size)
      processFile(file)
    }
  }

  const processFile = (file: File) => {
    setSelectedFile(file)

    if (file.type.startsWith("image/")) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setFilePreview(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    } else {
      setFilePreview(null)
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)

    const files = e.dataTransfer.files
    if (files && files[0]) {
      console.log("[v0] File dropped:", files[0].name)
      processFile(files[0])
    }
  }

  const triggerFileInput = () => {
    console.log("[v0] Triggering file input click")
    const fileInput = document.getElementById("file-upload") as HTMLInputElement
    if (fileInput) {
      fileInput.click()
    }
  }

  const selectedActionType = actionTypes.find((type) => type.id === uploadForm.action)

  if (isSubmitted) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
          <div className="mb-6">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-foreground mb-2">Submission Successful!</h1>
            <p className="text-lg text-muted-foreground">
              Your eco-friendly action has been submitted for verification.
            </p>
          </div>
          <Card className="w-full max-w-md">
            <CardContent className="p-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Coins className="h-6 w-6 text-primary" />
                <span className="text-2xl font-bold text-primary">
                  {selectedActionType ? selectedActionType.tokens.split("-")[1] : "25"} tokens
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">Expected reward (pending verification)</p>
              <div className="space-y-2">
                <Link href="/wallet">
                  <Button className="w-full">View Wallet</Button>
                </Link>
                <Button variant="outline" className="w-full bg-transparent" onClick={() => setIsSubmitted(false)}>
                  Upload Another
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-foreground mb-4">Upload Your Eco-Action</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Submit proof of your sustainable actions and earn tokens instantly. Every small action counts towards a
          greener future!
        </p>
      </div>

      {/* Action Types Grid */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">Choose Your Action Type</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {actionTypes.map((actionType) => (
            <Card
              key={actionType.id}
              className={`cursor-pointer transition-all hover:shadow-lg ${
                uploadForm.action === actionType.id ? "ring-2 ring-primary" : ""
              }`}
              onClick={() => setUploadForm({ ...uploadForm, action: actionType.id })}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className={`p-2 rounded-lg ${actionType.color}`}>
                    <actionType.icon className="h-6 w-6" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {actionType.tokens} tokens
                  </Badge>
                </div>
                <CardTitle className="text-lg">{actionType.name}</CardTitle>
                <CardDescription className="text-sm">{actionType.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      {/* Upload Form */}
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Upload className="h-6 w-6" />
            Submit Your Proof
          </CardTitle>
          <CardDescription>Fill in the details and upload proof of your eco-friendly action</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleUploadSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="action">Action Type *</Label>
              <select
                id="action"
                className="w-full p-3 border border-input rounded-md bg-background"
                value={uploadForm.action}
                onChange={(e) => setUploadForm({ ...uploadForm, action: e.target.value })}
                required
              >
                <option value="">Select an action type</option>
                {actionTypes.map((type) => (
                  <option key={type.id} value={type.id}>
                    {type.name} ({type.tokens} tokens)
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description *</Label>
              <Textarea
                id="description"
                placeholder="Describe your eco-friendly action in detail..."
                value={uploadForm.description}
                onChange={(e) => setUploadForm({ ...uploadForm, description: e.target.value })}
                className="min-h-[100px]"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Location *</Label>
              <Input
                id="location"
                placeholder="Where did this action take place?"
                value={uploadForm.location}
                onChange={(e) => setUploadForm({ ...uploadForm, location: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label>Upload Proof *</Label>
              <div
                className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
                  isDragOver ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
                }`}
                onClick={triggerFileInput}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="flex gap-4">
                    <Upload className={`h-8 w-8 ${isDragOver ? "text-primary" : "text-muted-foreground"}`} />
                    <Camera className={`h-8 w-8 ${isDragOver ? "text-primary" : "text-muted-foreground"}`} />
                  </div>
                  <div>
                    <p className="text-sm font-medium">
                      {isDragOver ? "Drop your file here" : "Upload photo or document"}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Drag and drop or click to browse (JPG, PNG, PDF up to 10MB)
                    </p>
                  </div>
                  <input
                    type="file"
                    accept="image/*,.pdf"
                    onChange={handleFileChange}
                    className="hidden"
                    id="file-upload"
                    required
                  />
                  <Button
                    type="button"
                    variant="outline"
                    className="cursor-pointer bg-transparent"
                    onClick={(e) => {
                      e.stopPropagation()
                      triggerFileInput()
                    }}
                  >
                    Choose File
                  </Button>
                  {selectedFile && (
                    <div className="space-y-2">
                      <p className="text-sm text-primary font-medium">✓ Selected: {selectedFile.name}</p>
                      <p className="text-xs text-muted-foreground">
                        Size: {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                      {filePreview && (
                        <div className="mt-4">
                          <img
                            src={filePreview || "/placeholder.svg"}
                            alt="File preview"
                            className="max-w-xs max-h-32 object-cover rounded-lg border"
                          />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Button
                type="submit"
                className="flex-1"
                disabled={!uploadForm.action || !uploadForm.description || !uploadForm.location || !selectedFile}
              >
                Submit for Verification
              </Button>
              <Link href="/wallet">
                <Button type="button" variant="outline">
                  View Wallet
                </Button>
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Tips Section */}
      <div className="mt-12 max-w-4xl mx-auto">
        <h3 className="text-xl font-bold text-foreground mb-4">Tips for Better Submissions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-4">
              <h4 className="font-semibold mb-2">Clear Photos</h4>
              <p className="text-sm text-muted-foreground">
                Ensure your photos are clear and show relevant details like dates, amounts, or locations.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h4 className="font-semibold mb-2">Detailed Descriptions</h4>
              <p className="text-sm text-muted-foreground">
                Provide specific details about your action to help with faster verification.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h4 className="font-semibold mb-2">Accurate Locations</h4>
              <p className="text-sm text-muted-foreground">
                Include specific locations to help verify the authenticity of your actions.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h4 className="font-semibold mb-2">Regular Uploads</h4>
              <p className="text-sm text-muted-foreground">
                Upload actions regularly to maintain your eco-champion status and earn bonus tokens.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
