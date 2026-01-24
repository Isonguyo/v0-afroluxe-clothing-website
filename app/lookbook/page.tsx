"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

type Collection = {
  id: number
  slug: string
  title: { rendered: string }
  acf: {
    season: string
    category: string
    short_description: string
    hero_image: string
  }
}

const CATEGORIES = [
  "All",
  "Fall/Winter",
  "Spring/Summer",
  "Bridal",
  "Evening Wear",
  "Ready-to-Wear",
]

export default function LookbookPage() {
  const [collections, setCollections] = useState<Collection[]>([])
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch("http://afroluxe.infinityfree.me/wp-json/wp/v2/collections?per_page=100")
      .then((res) => {
        if (!res.ok) throw new Error("Fetch failed")
        return res.json()
      })
      .then((data) => {
        setCollections(data)
        setLoading(false)
      })
      .catch(() => {
        setError(true)
        setLoading(false)
      })
  }, [])

  const filtered =
    selectedCategory === "All"
      ? collections
      : collections.filter(
          (item) => item.acf?.category === selectedCategory
        )

  return (
    <main className="pt-20">
      {/* HERO */}
      <section className="py-16 px-4 bg-muted">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-serif mb-4">
            Lookbook
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our curated collections of contemporary African luxury fashion
          </p>
        </div>
      </section>

      {/* FILTER */}
      <section className="py-8 px-4 border-b sticky top-20 bg-background z-40">
        <div className="max-w-7xl mx-auto flex gap-2 overflow-x-auto">
          {CATEGORIES.map((cat) => (
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

      {/* CONTENT */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {loading && <p>Loading collections…</p>}
          {error && <p className="text-red-500">Failed to fetch</p>}

          {!loading && !error && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((item) => (
                <Link
                  key={item.id}
                  href={`/lookbook/${item.slug}`}
                  className="group"
                >
                  <div className="aspect-[3/4] bg-muted overflow-hidden mb-4">
                    <img
                      src={item.acf.hero_image || "/placeholder.svg"}
                      alt={item.title.rendered}
                      className="w-full h-full object-cover group-hover:scale-105 transition"
                    />
                  </div>

                  <h3 className="text-2xl font-serif mb-2">
                    {item.title.rendered}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-2">
                    {item.acf.short_description}
                  </p>

                  <p className="text-xs font-mono uppercase tracking-wider text-accent">
                    {item.acf.category}
                  </p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
