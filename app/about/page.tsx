import Link from "next/link"
import { Button } from "@/components/ui/button"

// TODO: Fetch about content from WordPress REST API
// Expected API: GET /wp-json/wp/v2/pages?slug=about
// Response shape: { id, title, content, acf: { mission, vision, designer_bio, designer_image, values: [] } }

export default function AboutPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-16 px-4 bg-muted">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-serif mb-4">Our Story</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Where tradition meets innovation in luxury African fashion
          </p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif mb-8 text-balance">
            Celebrating Heritage Through Contemporary Design
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-foreground/80">
            <p>
              Afroluxe Clothing was born from a vision to elevate African fashion to the global luxury stage while
              honoring the rich textile traditions and craftsmanship that have been passed down through generations.
            </p>
            <p>
              Each piece we create is a dialogue between past and present, where ancient techniques meet modern
              silhouettes, and cultural narratives are woven into contemporary haute couture. We believe that luxury is
              not just about exclusivity, but about authenticity, craftsmanship, and the stories embedded in every
              stitch.
            </p>
            <p>
              Our atelier works with master artisans across the continent, ensuring that every garment upholds the
              highest standards of quality while supporting traditional craft communities. From hand-dyed fabrics to
              intricate beadwork, each element is carefully selected and executed with precision.
            </p>
          </div>
        </div>
      </section>

      {/* Designer Bio */}
      <section className="py-24 px-4 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/5] overflow-hidden bg-background">
              <img
                src="/african-fashion-designer-portrait-elegant-studio.jpg"
                alt="Designer Portrait"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-mono uppercase tracking-wider text-accent mb-4">Creative Director</p>
              <h2 className="text-4xl md:text-5xl font-serif mb-6">Adaeze Nwankwo</h2>
              <div className="space-y-4 text-foreground/80 leading-relaxed">
                <p>
                  Adaeze Nwankwo is a visionary designer whose work has been celebrated on international runways from
                  Paris to New York. With a degree in Fashion Design from Central Saint Martins and roots deep in
                  Nigerian textile traditions, she bridges two worlds with effortless grace.
                </p>
                <p>
                  Her design philosophy centers on empowerment through dress—creating garments that make the wearer feel
                  not just beautiful, but powerful, confident, and connected to a larger cultural narrative.
                </p>
                <p>
                  "Fashion is more than fabric and form," Adaeze says. "It's a vehicle for storytelling, for preserving
                  heritage, and for challenging the world's perception of African luxury."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif mb-16 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-primary rounded-full flex items-center justify-center">
                <span className="text-3xl text-primary-foreground">✦</span>
              </div>
              <h3 className="text-xl font-serif mb-4">Craftsmanship</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every piece is meticulously handcrafted by master artisans using time-honored techniques passed down
                through generations.
              </p>
            </div>

            {/* Value 2 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-primary rounded-full flex items-center justify-center">
                <span className="text-3xl text-primary-foreground">✦</span>
              </div>
              <h3 className="text-xl font-serif mb-4">Cultural Authenticity</h3>
              <p className="text-muted-foreground leading-relaxed">
                We honor African heritage authentically, working directly with communities to ensure respectful and
                accurate cultural representation.
              </p>
            </div>

            {/* Value 3 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-primary rounded-full flex items-center justify-center">
                <span className="text-3xl text-primary-foreground">✦</span>
              </div>
              <h3 className="text-xl font-serif mb-4">Sustainability</h3>
              <p className="text-muted-foreground leading-relaxed">
                We prioritize ethical production, sustainable materials, and fair compensation for all artisans in our
                supply chain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Experience Afroluxe</h2>
          <p className="text-lg opacity-90 mb-8 leading-relaxed">
            Visit our atelier for a personalized consultation and discover how we can bring your vision to life
          </p>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
          >
            <Link href="/book-fitting">Book a Consultation</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
