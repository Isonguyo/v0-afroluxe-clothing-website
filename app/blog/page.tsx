import Link from "next/link"
import { ArrowRight } from "lucide-react"

// TODO: Fetch blog posts from WordPress REST API
// Expected API: GET /wp-json/wp/v2/posts?per_page=12&page=${page}
// Response shape: [{ id, title, excerpt, slug, date, featured_media, author, categories }]

const blogPosts = [
  {
    id: 1,
    title: "The Art of African Textile Design",
    slug: "art-of-african-textile-design",
    excerpt:
      "Exploring the rich history and cultural significance of traditional African textile patterns in contemporary fashion.",
    date: "2024-03-15",
    category: "Craftsmanship",
    image: "/african-textile-patterns-traditional-weaving-close.jpg",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Sustainable Luxury: Our Commitment",
    slug: "sustainable-luxury-commitment",
    excerpt: "How Afroluxe is pioneering eco-conscious practices in high fashion while preserving artisan traditions.",
    date: "2024-03-10",
    category: "Sustainability",
    image: "/sustainable-fashion-eco-conscious-african-textiles.jpg",
    readTime: "4 min read",
  },
  {
    id: 3,
    title: "From Runway to Reality: Fashion Week Highlights",
    slug: "fashion-week-highlights",
    excerpt: "A behind-the-scenes look at our latest collection showcase at Lagos Fashion Week 2024.",
    date: "2024-03-05",
    category: "Events",
    image: "/lagos-fashion-week-runway-african-luxury-fashion.jpg",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "The Power of Bespoke Tailoring",
    slug: "power-of-bespoke-tailoring",
    excerpt: "Why custom-fitted garments are worth the investment and how they transform your wardrobe and confidence.",
    date: "2024-02-28",
    category: "Style Guide",
    image: "/bespoke-tailoring-measurements-luxury-atelier.jpg",
    readTime: "5 min read",
  },
  {
    id: 5,
    title: "Bridal Elegance: Choosing Your Perfect Gown",
    slug: "bridal-elegance-choosing-gown",
    excerpt: "Expert advice on selecting a wedding dress that honors tradition while expressing your unique style.",
    date: "2024-02-20",
    category: "Bridal",
    image: "/african-bridal-fashion-wedding-dress-selection.jpg",
    readTime: "7 min read",
  },
  {
    id: 6,
    title: "Color Theory in African Fashion",
    slug: "color-theory-african-fashion",
    excerpt: "Understanding the cultural meanings and psychological impact of color in traditional African attire.",
    date: "2024-02-15",
    category: "Design",
    image: "/vibrant-african-colors-fashion-color-theory.jpg",
    readTime: "5 min read",
  },
]

export default function BlogPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-16 px-4 bg-muted">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-serif mb-4">Style Journal</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Insights on fashion, culture, and the art of luxury African design
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Link href={`/blog/${blogPosts[0].slug}`} className="group">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={blogPosts[0].image || "/placeholder.svg"}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div>
                <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-mono uppercase tracking-wider mb-4">
                  Featured
                </span>
                <h2 className="text-4xl md:text-5xl font-serif mb-4 group-hover:text-primary transition-colors">
                  {blogPosts[0].title}
                </h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">{blogPosts[0].excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <time>
                    {new Date(blogPosts[0].date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </time>
                  <span>•</span>
                  <span>{blogPosts[0].readTime}</span>
                </div>
                <div className="mt-6">
                  <span className="inline-flex items-center text-primary group-hover:gap-2 transition-all">
                    Read Article
                    <ArrowRight className="ml-2" size={16} />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                <article>
                  <div className="relative aspect-[4/3] overflow-hidden mb-4 bg-muted">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-wider text-accent">{post.category}</span>
                  <h3 className="text-xl font-serif mt-2 mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <time>{new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}</time>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
