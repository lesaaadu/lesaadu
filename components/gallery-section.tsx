"use client"

import { useState } from "react"
import Image from "next/image"

interface GalleryItem {
  id: string
  title: string
  description: string
  image: string
  detailedDescription?: string
  highlights?: string[]
  link?: string
  technologies?: string[]
}

interface GallerySectionProps {
  title: string
  items: GalleryItem[]
}

export function GallerySection({ title, items }: GallerySectionProps) {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)

  return (
    <div className="space-y-4 sm:space-y-6">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-foreground">{title}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="group cursor-pointer bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-all duration-300"
          >
            <div className="aspect-square relative overflow-hidden">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-3 sm:p-4">
              <h3 className="font-semibold text-foreground mb-2 text-sm sm:text-base">{item.title}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-3 line-clamp-2">{item.description}</p>
              <button
                onClick={() => setSelectedItem(item)}
                className="text-xs sm:text-sm bg-primary text-primary-foreground px-3 py-1 rounded-full hover:bg-primary/90 transition-colors"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedItem && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-2 sm:p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-card rounded-lg max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto p-4 sm:p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 text-muted-foreground hover:text-foreground bg-background rounded-full w-8 h-8 flex items-center justify-center hover:bg-muted transition-colors z-10 text-lg"
            >
              ×
            </button>

            <div className="mb-4 w-full">
              <Image
                src={selectedItem.image || "/placeholder.svg"}
                alt={selectedItem.title}
                width={800}
                height={600}
                className="w-full h-auto max-h-[40vh] sm:max-h-[50vh] object-contain rounded-lg"
              />
            </div>

            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-3">{selectedItem.title}</h3>

            {selectedItem.detailedDescription && (
              <div className="mb-4">
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed text-pretty">
                  {selectedItem.detailedDescription}
                </p>
              </div>
            )}

            {selectedItem.technologies && selectedItem.technologies.length > 0 && (
              <div className="mb-4">
                <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedItem.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-secondary text-secondary-foreground px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {selectedItem.highlights && selectedItem.highlights.length > 0 && (
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2">Key Highlights:</h4>
                <ul className="space-y-2">
                  {selectedItem.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-muted-foreground text-xs sm:text-sm">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
