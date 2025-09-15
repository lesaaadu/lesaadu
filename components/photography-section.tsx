"use client"

import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Eye } from "lucide-react"

interface Photo {
  id: string
  url: string
  title: string
  description: string
}

interface Album {
  id: string
  title: string
  description: string
  coverPhoto: string
  photos: Photo[]
}

const albums: Album[] = [
  {
    id: "1",
    title: "Nature & Landscapes",
    description: "Capturing the beauty of natural landscapes and scenic views",
    coverPhoto: "/images/condro.JPG",
    photos: [
      {
        id: "1",
        url: "/images/naturecover.JPG",
        title: "Kumari Jhorna",
        description: "—where the wild waters leave their trace.",
      },
      // Add more photos here manually
    ],
  },
  {
    id: "2",
    title: "Urban Photography",
    description: "Street photography",
    coverPhoto: "/images/chilli.JPG",
    photos: [
      {
        id: "1",
        url: "/images/booth.JPG",
        title: "City Streets",
        description: "Capturing the essence of urban life and architecture",
      },
      // Add more photos here manually
    ],
  },
  // Add more albums here manually
]

export function PhotographySection() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-foreground mb-4">Photography Portfolio</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore my photography collections organized in albums. Each album showcases different themes and moments
          captured through my lens.
        </p>
      </div>

      {/* Albums Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {albums.map((album) => (
          <Card key={album.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-video relative overflow-hidden">
              <Image src={album.coverPhoto || "/placeholder.svg"} alt={album.title} fill className="object-cover" />
            </div>
            <CardHeader>
              <CardTitle className="text-lg">{album.title}</CardTitle>
              <CardDescription>{album.description}</CardDescription>
              <p className="text-sm text-muted-foreground">{album.photos.length} photos</p>
            </CardHeader>
            <CardContent className="space-y-2">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="w-full bg-transparent">
                    <Eye className="w-4 h-4 mr-2" />
                    View Album
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>{album.title}</DialogTitle>
                    <DialogDescription>{album.description}</DialogDescription>
                  </DialogHeader>

                  {/* Photos Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {album.photos.map((photo) => (
                      <div key={photo.id} className="space-y-2">
                        <div className="aspect-square relative overflow-hidden rounded-lg">
                          <Image
                            src={photo.url || "/placeholder.svg"}
                            alt={photo.title}
                            fill
                            className="object-cover hover:scale-105 transition-transform"
                          />
                        </div>
                        <div>
                          <h5 className="font-medium text-sm">{photo.title}</h5>
                          <p className="text-xs text-muted-foreground">{photo.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
