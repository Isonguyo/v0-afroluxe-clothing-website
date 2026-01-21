"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface Collection {
  id: number
  slug: string
  title: { rendered: string }
  acf: {
    season: string
    category: string
    short_description: string
  }
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string
      alt_text: string
    }>
  }
}

export default function LookbookPage() {
  const [collections, setCollections] = useState<Collection[]>([])
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch(
      "https://afroluxe.infinityfree.me/wp-json/wp/v2/collections?per_page=100&_embed"
    )
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch collections")
        return res.json()
      })
      .then((data) => setCollections(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  const categories = [
    "All",
    ...Array.from(
      new Set(collections.map((c) => c.acf?.category).filter(Boolean))
    ),
  ]

  const filtered =
    selectedCategory === "All"
      ? collections
      : collections.filter((c) => c.acf.category === selectedCategory)

  return (
    <main className="pt-20">
      {/* Header */}
      <section className="py-16 px-4 bg-muted">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-serif mb-4">Lookbook</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our curated collections of contemporary African luxury
            fashion
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-4 border-b border-border sticky top-20 bg-background/95 backdrop-blur z-40">
        <div className="max-w-7xl mx-auto flex gap-2 overflow-x-auto">
          {categories.map((cat) => (
            <Button
              key={cat}
              size="sm"
              variant={selectedCategory === cat ? "default" : "outline"}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </Button>
          ))}
        </div>
      </section>

      {/* Loading / Error */}
      {loading && (
        <p className="text-center py-16 text-lg font-medium">
          Loading collections...
        </p>
      )}
      {error && (
        <p className="text-center py-16 text-lg font-medium text-red-500">
          {error}
        </p>
      )}

      {/* Grid */}
      {!loading && !error && (
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((collection) => {
              const image =
                collection._embedded?.["wp:featuredmedia"]?.[0]?.source_url

              return (
                <Link
                  key={collection.id}
                  href={`/lookbook/${collection.slug}`}
                  className="group"
                >
                  <div className="aspect-[3/4] bg-muted overflow-hidden mb-4">
                    <img
                      src={image || "/placeholder.svg"}
                      alt={collection.title.rendered}
                      className="w-full h-full object-cover group-hover:scale-105 transition"
                    />
                  </div>

                  <h3 className="text-2xl font-serif mb-2">
                    {collection.title.rendered}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-2">
                    {collection.acf?.short_description}
                  </p>

                  <p className="text-xs font-mono uppercase text-accent">
                    {collection.acf?.category}
                  </p>
                </Link>
              )
            })}
          </div>
        </section>
      )}
    </main>
  )
}

