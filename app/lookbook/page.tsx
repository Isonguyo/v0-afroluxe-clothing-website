"use client"

import { useState } from "react"
import Link from "next/link"

import { Button } from "@/components/ui/button"

// TODO: Fetch collections from WordPress REST API
// Expected API: GET /wp-json/wp/v2/collections?per_page=100
// Response shape:
// [
//   {
//     id,
//     title,
//     excerpt,
//     featured_image,
//     slug,
//     acf: { season, category }
//   }
// ]

// TODO: Fetch categories from WordPress REST API
// Expected API: GET /wp-json/wp/v2/categories?taxonomy=collection_category
// Response shape: [{ id, name, slug }]

const categories = [
  "All",
  "Spring/Summer",
  "Fall/Winter",
  "Bridal",
  "Evening Wear",
  "Ready-to-Wear",
]

const collections = [
  {
    id: 1,
    title: "Royal Heritage",
    slug: "royal-heritage",
    excerpt: "Contemporary interpretations of traditional regal attire",
    category: "Fall/Winter",
    season: "2024",
    image: "/luxury-african-fashion-royal-purple-collection-edi.jpg",
  },
  {
    id: 2,
    title: "Golden Threads",
    slug: "golden-threads",
    excerpt: "Intricate embroidery celebrating ancestral artistry",
    category: "Spring/Summer",
    season: "2024",
    image: "/luxury-african-fashion-gold-embroidered-garments-e.jpg",
  },
  {
    id: 3,
    title: "Modern Elegance",
    slug: "modern-elegance",
    excerpt: "Minimalist luxury for the contemporary sophisticate",
    category: "Ready-to-Wear",
    season: "2024",
    image: "/modern-african-luxury-fashion-minimalist-elegant-e.jpg",
  },
  {
    id: 4,
    title: "Sahara Nights",
    slug: "sahara-nights",
    excerpt: "Flowing silhouettes inspired by desert landscapes",
    category: "Evening Wear",
    season: "2024",
    image: "/elegant-flowing-african-evening-wear-luxury-desert-i.jpg",
  },
  {
    id: 5,
    title: "Bridal Majesty",
    slug: "bridal-majesty",
    excerpt: "Exquisite wedding attire blending tradition and glamour",
    category: "Bridal",
    season: "2024",
    image: "/luxury-african-bridal-fashion-white-and-gold-tradit.jpg",
  },
  {
    id: 6,
    title: "Urban Luxe",
    slug: "urban-luxe",
    excerpt: "Street-inspired haute couture for the modern city",
    category: "Ready-to-Wear",
    season: "2024",
    image: "/contemporary-african-streetwear-luxury-urban-fashio.jpg",
  },
]

export default function LookbookPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredCollections =
    selectedCategory === "All"
      ? collections
      : collections.filter(
          (collection) => collection.category === selectedCategory
        )

  return (
    <main className="pt-20">
      {/* Header */}
      <section className="py-16 px-4 bg-muted">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-serif mb-4">
            Lookbook
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Explore our curated collections of contemporary African
            luxury fashion
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 px-4 border-b border-border sticky top-20 bg-background/95 backdrop-blur-sm z-40">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <Button
                key={category}
                size="sm"
                variant={
                  selectedCategory === category
                    ? "default"
                    : "outline"
                }
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-background text-foreground hover:bg-muted"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCollections.map((collection) => (
              <Link
                key={collection.id}
                href={`/lookbook/${collection.slug}`}
                className="group"
              >
                <div className="relative aspect-[3/4] overflow-hidden mb-4 bg-muted">
                  <img
                    src={collection.image || "/placeholder.svg"}
                    alt={collection.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 text-xs font-mono uppercase tracking-wider">
                    {collection.season}
                  </div>
                </div>

                <h3 className="text-2xl font-serif mb-2 group-hover:text-primary transition-colors">
                  {collection.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-2">
                  {collection.excerpt}
                </p>

                <p className="text-xs font-mono uppercase tracking-wider text-accent">
                  {collection.category}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-muted">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            Ready to Create Your Custom Piece?
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Schedule a consultation to discuss your vision
          </p>

          <Button
            size="lg"
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Link href="/book-fitting">
              Book a Fitting
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}

