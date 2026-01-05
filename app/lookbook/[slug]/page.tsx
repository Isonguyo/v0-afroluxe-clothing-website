import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"

// TODO: Fetch collection by slug from WordPress REST API
// Expected API: GET /wp-json/wp/v2/collections?slug=${slug}
// Response shape: { id, title, content, acf: { season, category, images: [{ url, alt }], description } }

interface CollectionPageProps {
  params: Promise<{
    slug: string
  }>
}

// Mock data for collection details
const collectionsData: Record<
  string,
  {
    title: string
    season: string
    category: string
    description: string
    fullDescription: string
    images: string[]
  }
> = {
  "royal-heritage": {
    title: "Royal Heritage",
    season: "Fall/Winter 2024",
    category: "Ceremonial Wear",
    description: "Contemporary interpretations of traditional regal attire",
    fullDescription:
      "The Royal Heritage collection pays homage to the majestic traditions of African royalty, reimagined through a contemporary lens. Each piece features rich purple fabrics adorned with intricate gold embellishments, capturing the essence of regal elegance while embracing modern silhouettes and tailoring techniques.",
    images: [
      "/luxury-african-fashion-royal-purple-collection-edi.jpg",
      "/royal-purple-african-gown-editorial-close-up-luxury.jpg",
      "/african-royal-fashion-purple-gold-ceremonial-wear.jpg",
    ],
  },
  "golden-threads": {
    title: "Golden Threads",
    season: "Spring/Summer 2024",
    category: "Evening Wear",
    description: "Intricate embroidery celebrating ancestral artistry",
    fullDescription:
      "Golden Threads showcases the timeless art of hand embroidery, where each stitch tells a story of cultural heritage. Metallic gold threadwork adorns flowing fabrics, creating pieces that shimmer with history and craftsmanship. This collection celebrates the skilled artisans who keep traditional techniques alive.",
    images: [
      "/luxury-african-fashion-gold-embroidered-garments-e.jpg",
      "/close-up-gold-embroidery-african-luxury-fashion.jpg",
      "/gold-thread-work-african-textile-artisan-detail.jpg",
    ],
  },
  "modern-elegance": {
    title: "Modern Elegance",
    season: "Ready-to-Wear 2024",
    category: "Contemporary Luxury",
    description: "Minimalist luxury for the contemporary sophisticate",
    fullDescription:
      "Modern Elegance strips luxury down to its essential elements. Clean lines, impeccable tailoring, and subtle nods to African aesthetics create pieces that transcend trends. This collection is designed for the modern woman who values timeless sophistication and understated power dressing.",
    images: [
      "/modern-african-luxury-fashion-minimalist-elegant-e.jpg",
      "/minimalist-african-fashion-clean-lines-tailored.jpg",
      "/contemporary-luxury-african-ready-to-wear.jpg",
    ],
  },
}

export default async function CollectionDetailPage(props: CollectionPageProps) {
  const params = await props.params
  const collection = collectionsData[params.slug]

  if (!collection) {
    notFound()
  }

  return (
    <main className="pt-20">
      {/* Back Button */}
      <div className="px-4 py-6">
        <div className="max-w-7xl mx-auto">
          <Button variant="ghost" asChild>
            <Link href="/lookbook">
              <ArrowLeft className="mr-2" size={16} />
              Back to Lookbook
            </Link>
          </Button>
        </div>
      </div>

      {/* Hero Image */}
      <section className="px-4 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="relative aspect-[16/9] overflow-hidden bg-muted">
            <img
              src={collection.images[0] || "/placeholder.svg"}
              alt={collection.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Collection Info */}
      <section className="px-4 mb-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-4 py-2 bg-accent text-accent-foreground text-xs font-mono uppercase tracking-wider">
              {collection.season}
            </span>
            <span className="px-4 py-2 bg-muted text-foreground text-xs font-mono uppercase tracking-wider">
              {collection.category}
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-serif mb-6">{collection.title}</h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">{collection.description}</p>
          <p className="text-foreground/80 leading-relaxed">{collection.fullDescription}</p>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="px-4 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {collection.images.slice(1).map((image, index) => (
              <div key={index} className="relative aspect-[3/4] overflow-hidden bg-muted">
                <img
                  src={image || "/placeholder.svg"}
                  alt={`${collection.title} detail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Interested in This Collection?</h2>
          <p className="text-lg opacity-90 mb-8 leading-relaxed">
            Book a private consultation to explore bespoke options and custom designs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <Link href="/book-fitting">Schedule Consultation</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
