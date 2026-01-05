import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

// TODO: Fetch hero content from WordPress REST API
// Expected API: GET /wp-json/wp/v2/pages?slug=home
// Response shape: { acf: { hero_title, hero_subtitle, hero_cta_text, hero_cta_link, hero_image } }

// TODO: Fetch featured collections from WordPress REST API
// Expected API: GET /wp-json/wp/v2/collections?featured=true&per_page=3
// Response shape: [{ id, title, excerpt, featured_image, slug }]

// TODO: Fetch testimonials from WordPress REST API
// Expected API: GET /wp-json/wp/v2/testimonials?per_page=3
// Response shape: [{ id, title, content, acf: { client_name, client_title, rating } }]

export default function HomePage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-muted">
        <div className="absolute inset-0 z-0">
          <img src="/elegant-african-fashion-model-in-luxury-royal-purp.jpg" alt="Afroluxe Hero" className="w-full h-full object-cover opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-6 text-balance leading-tight">
            Where Heritage Meets Haute Couture
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover bespoke luxury fashion that celebrates African elegance through contemporary design
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/lookbook">
                Explore Collections
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/book-fitting">Book a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-4">Featured Collections</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Each piece tells a story of craftsmanship and cultural pride
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Collection 1 */}
            <Link href="/lookbook/royal-heritage" className="group">
              <div className="relative aspect-[3/4] overflow-hidden mb-4 bg-muted">
                <img
                  src="/luxury-african-fashion-royal-purple-collection-edi.jpg"
                  alt="Royal Heritage Collection"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-serif mb-2 group-hover:text-primary transition-colors">Royal Heritage</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Contemporary interpretations of traditional regal attire
              </p>
            </Link>

            {/* Collection 2 */}
            <Link href="/lookbook/golden-threads" className="group">
              <div className="relative aspect-[3/4] overflow-hidden mb-4 bg-muted">
                <img
                  src="/luxury-african-fashion-gold-embroidered-garments-e.jpg"
                  alt="Golden Threads Collection"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-serif mb-2 group-hover:text-primary transition-colors">Golden Threads</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Intricate embroidery celebrating ancestral artistry
              </p>
            </Link>

            {/* Collection 3 */}
            <Link href="/lookbook/modern-elegance" className="group">
              <div className="relative aspect-[3/4] overflow-hidden mb-4 bg-muted">
                <img
                  src="/modern-african-luxury-fashion-minimalist-elegant-e.jpg"
                  alt="Modern Elegance Collection"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-serif mb-2 group-hover:text-primary transition-colors">Modern Elegance</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Minimalist luxury for the contemporary sophisticate
              </p>
            </Link>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link href="/lookbook">View All Collections</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Brand Philosophy */}
      <section className="py-24 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-balance">Crafting Timeless Elegance</h2>
          <p className="text-lg leading-relaxed opacity-90 mb-8">
            Every garment from Afroluxe is a masterpiece of bespoke craftsmanship. We blend traditional African textile
            techniques with contemporary haute couture, creating pieces that honor heritage while embracing modernity.
          </p>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
          >
            <Link href="/about">Our Story</Link>
          </Button>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-4">Client Experiences</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Hear from those who wear our creations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-muted p-8 border border-border">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-accent">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-foreground/80 mb-6 leading-relaxed italic">
                "Afroluxe transformed my vision into reality. The attention to detail and cultural authenticity is
                unmatched."
              </p>
              <div>
                <p className="font-mono text-sm uppercase tracking-wider">Amara Okafor</p>
                <p className="text-sm text-muted-foreground">Fashion Executive</p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-muted p-8 border border-border">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-accent">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-foreground/80 mb-6 leading-relaxed italic">
                "Every piece is a work of art. I feel empowered and elegant wearing Afroluxe designs."
              </p>
              <div>
                <p className="font-mono text-sm uppercase tracking-wider">Chioma Adebayo</p>
                <p className="text-sm text-muted-foreground">Entrepreneur</p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-muted p-8 border border-border">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-accent">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-foreground/80 mb-6 leading-relaxed italic">
                "The bespoke service is exceptional. They truly understand luxury and cultural expression."
              </p>
              <div>
                <p className="font-mono text-sm uppercase tracking-wider">Folake Adeola</p>
                <p className="text-sm text-muted-foreground">Creative Director</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link href="/testimonials">Read More Stories</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-muted">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-balance">Begin Your Bespoke Journey</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Schedule a private consultation to discuss your vision and measurements
          </p>
          <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/book-fitting">
              Book Your Fitting
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
