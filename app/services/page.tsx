import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

// TODO: Fetch services from WordPress REST API
// Expected API: GET /wp-json/wp/v2/services?per_page=100
// Response shape: [{ id, title, content, acf: { description, features: [], icon, price_range } }]

const services = [
  {
    id: 1,
    title: "Bespoke Couture",
    description: "Fully custom garments tailored to your exact measurements and specifications",
    features: [
      "Personal design consultation",
      "Premium fabric selection",
      "Multiple fittings included",
      "Hand-finished details",
      "Lifetime alterations",
    ],
    priceRange: "Starting at $2,500",
  },
  {
    id: 2,
    title: "Bridal Collections",
    description: "Exquisite wedding attire blending cultural traditions with contemporary elegance",
    features: [
      "Bridal gown and accessories",
      "Groom's attire coordination",
      "Bridal party styling",
      "Multiple design concepts",
      "Cultural element integration",
    ],
    priceRange: "Starting at $5,000",
  },
  {
    id: 3,
    title: "Ready-to-Wear Alterations",
    description: "Professional alterations and customization of our ready-to-wear pieces",
    features: [
      "Perfect fit guarantee",
      "Same-day rush available",
      "Hemming and sizing",
      "Embellishment additions",
      "Style modifications",
    ],
    priceRange: "Starting at $150",
  },
  {
    id: 4,
    title: "Wardrobe Consulting",
    description: "Personal styling services to curate a cohesive luxury wardrobe",
    features: [
      "Closet audit and organization",
      "Personal style assessment",
      "Shopping accompaniment",
      "Seasonal wardrobe planning",
      "Occasion styling",
    ],
    priceRange: "Starting at $500",
  },
  {
    id: 5,
    title: "Special Occasion Styling",
    description: "Complete styling for galas, red carpets, and important events",
    features: [
      "Event-specific design",
      "Accessory coordination",
      "Makeup artist referrals",
      "Hair stylist coordination",
      "On-site dressing assistance",
    ],
    priceRange: "Starting at $1,500",
  },
  {
    id: 6,
    title: "Corporate Collection",
    description: "Elevated professional attire for the modern executive",
    features: [
      "Power dressing consultation",
      "Seasonal capsule collections",
      "Mix-and-match coordination",
      "Quality fabric selection",
      "Business travel wardrobe",
    ],
    priceRange: "Starting at $3,000",
  },
]

export default function ServicesPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-16 px-4 bg-muted">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-serif mb-4">Our Services</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Personalized luxury fashion services tailored to your unique needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service) => (
              <div key={service.id} className="border border-border p-8 bg-card">
                <h2 className="text-3xl font-serif mb-4">{service.title}</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

                <div className="space-y-3 mb-6">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="text-accent mt-1 flex-shrink-0" size={18} />
                      <span className="text-sm text-foreground/80">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-border">
                  <p className="text-sm font-mono uppercase tracking-wider text-accent mb-4">{service.priceRange}</p>
                  <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    <Link href="/book-fitting">Book Consultation</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-4 bg-muted">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif mb-16 text-center">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-serif mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-serif mb-2">Consultation</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We discuss your vision, style preferences, and requirements
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-serif mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-serif mb-2">Design</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Our team creates custom sketches and selects premium fabrics
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-serif mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-serif mb-2">Creation</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Master artisans handcraft your garment with precision
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-serif mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-serif mb-2">Fitting</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Final adjustments ensure a perfect fit and finish
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Ready to Begin?</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Schedule your consultation and take the first step towards your bespoke luxury wardrobe
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/book-fitting">Book Now</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
