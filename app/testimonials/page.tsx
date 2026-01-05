import Link from "next/link"
import { Button } from "@/components/ui/button"

// TODO: Fetch testimonials from WordPress REST API
// Expected API: GET /wp-json/wp/v2/testimonials?per_page=100
// Response shape: [{ id, title, content, acf: { client_name, client_title, client_image, rating, service } }]

const testimonials = [
  {
    id: 1,
    name: "Amara Okafor",
    title: "Fashion Executive",
    rating: 5,
    service: "Bespoke Couture",
    image: "/elegant-african-woman-testimonial-portrait.jpg",
    quote:
      "Afroluxe transformed my vision into reality. The attention to detail and cultural authenticity is unmatched. Every piece I've commissioned has become a treasured part of my wardrobe.",
    fullTestimonial:
      "Working with Afroluxe has been an absolute pleasure. From the initial consultation to the final fitting, every step was handled with professionalism and care. The team truly listened to my vision and brought it to life in ways that exceeded my expectations. The craftsmanship is exceptional—you can see the love and skill that goes into every stitch.",
  },
  {
    id: 2,
    name: "Chioma Adebayo",
    title: "Entrepreneur",
    rating: 5,
    service: "Wardrobe Consulting",
    image: "/professional-african-woman-business-portrait.jpg",
    quote:
      "Every piece is a work of art. I feel empowered and elegant wearing Afroluxe designs. The bespoke service is worth every penny.",
    fullTestimonial:
      "As a busy entrepreneur, I needed a wardrobe that could transition seamlessly from boardroom to events. Afroluxe's wardrobe consulting service was transformative. They helped me curate a collection of pieces that are both professional and uniquely expressive of my heritage. I receive compliments everywhere I go.",
  },
  {
    id: 3,
    name: "Folake Adeola",
    title: "Creative Director",
    rating: 5,
    service: "Special Occasion",
    image: "/creative-african-woman-artistic-portrait.jpg",
    quote:
      "The bespoke service is exceptional. They truly understand luxury and cultural expression. My wedding dress was beyond my wildest dreams.",
    fullTestimonial:
      "My wedding dress from Afroluxe was the most stunning garment I've ever worn. Adaeze and her team incorporated traditional Yoruba elements with contemporary haute couture in a way that felt both authentic and fresh. The dress told my story—honoring my roots while celebrating my modern sensibility.",
  },
  {
    id: 4,
    name: "Ngozi Okonkwo",
    title: "CEO, Tech Startup",
    rating: 5,
    service: "Corporate Collection",
    image: "/business-executive-african-woman-portrait.jpg",
    quote:
      "Afroluxe understands the power of dressing for success. Their corporate collection strikes the perfect balance between professionalism and cultural pride.",
    fullTestimonial:
      "In the tech world, I wanted to stand out while maintaining a professional image. Afroluxe's corporate collection gave me exactly that—sophisticated pieces that command respect while celebrating my African heritage. The quality is outstanding, and the fit is always perfect.",
  },
  {
    id: 5,
    name: "Zainab Mohammed",
    title: "Lawyer",
    rating: 5,
    service: "Bespoke Couture",
    image: "/professional-lawyer-african-woman-portrait.jpg",
    quote:
      "The craftsmanship is extraordinary. Each piece feels like it was made just for me—because it was. Afroluxe has redefined what luxury means to me.",
    fullTestimonial:
      "As a lawyer, I need to present myself with authority and elegance. Afroluxe created a collection of suits and formal wear that does exactly that. The fabrics are luxurious, the tailoring is impeccable, and I always feel confident and powerful in their designs.",
  },
  {
    id: 6,
    name: "Adaora Nnamdi",
    title: "Diplomat",
    rating: 5,
    service: "Bridal Collection",
    image: "/diplomat-african-woman-elegant-portrait.jpg",
    quote:
      "Afroluxe created my entire bridal ensemble, and it was perfection. The team's expertise in blending tradition with modern elegance is unparalleled.",
    fullTestimonial:
      "For my wedding, I wanted to honor my Igbo heritage while creating something unique and modern. Afroluxe delivered beyond my expectations. From the engagement attire to the wedding gown and reception outfit, every piece was a masterpiece. My guests are still talking about it.",
  },
]

export default function TestimonialsPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-16 px-4 bg-muted">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-serif mb-4">Client Testimonials</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Hear from those who have experienced the Afroluxe difference
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-card border border-border p-8">
                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-accent text-xl">
                      ★
                    </span>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-lg font-serif text-foreground mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </blockquote>

                {/* Full Testimonial */}
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{testimonial.fullTestimonial}</p>

                {/* Client Info */}
                <div className="flex items-center gap-4 pt-6 border-t border-border">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-muted flex-shrink-0">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-mono text-sm uppercase tracking-wider">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.title}</p>
                    <p className="text-xs text-accent mt-1">{testimonial.service}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 px-4 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-serif text-primary mb-2">500+</div>
              <p className="text-sm text-muted-foreground">Happy Clients</p>
            </div>
            <div>
              <div className="text-5xl font-serif text-primary mb-2">1000+</div>
              <p className="text-sm text-muted-foreground">Bespoke Pieces</p>
            </div>
            <div>
              <div className="text-5xl font-serif text-primary mb-2">98%</div>
              <p className="text-sm text-muted-foreground">Satisfaction Rate</p>
            </div>
            <div>
              <div className="text-5xl font-serif text-primary mb-2">10+</div>
              <p className="text-sm text-muted-foreground">Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Join Our Family of Satisfied Clients</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Experience the luxury and craftsmanship that our clients rave about
          </p>
          <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/book-fitting">Book Your Consultation</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
