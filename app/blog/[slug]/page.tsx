import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"

// TODO: Fetch blog post by slug from WordPress REST API
// Expected API: GET /wp-json/wp/v2/posts?slug=${slug}
// Response shape: { id, title, content, date, author, featured_media, categories, tags }

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

const blogPostsData: Record<
  string,
  {
    title: string
    date: string
    category: string
    readTime: string
    author: string
    image: string
    content: string[]
  }
> = {
  "art-of-african-textile-design": {
    title: "The Art of African Textile Design",
    date: "2024-03-15",
    category: "Craftsmanship",
    readTime: "5 min read",
    author: "Adaeze Nwankwo",
    image: "/african-textile-patterns-traditional-weaving-close.jpg",
    content: [
      "African textile design is a rich tapestry of cultural heritage, storytelling, and artistic expression. Each pattern, color, and weaving technique carries profound meaning, passed down through generations of skilled artisans.",
      "The intricate patterns found in traditional African textiles are not merely decorative—they are a visual language. From the bold geometric designs of Kente cloth to the symbolic Adinkra symbols, every element communicates cultural values, proverbs, and historical narratives.",
      "At Afroluxe, we honor these traditions while reimagining them for contemporary fashion. Our designers work closely with master weavers to understand the cultural significance of each pattern before incorporating it into our collections.",
      "This approach ensures that our garments are not just beautiful, but also authentic and respectful of their origins. We believe that luxury fashion has a responsibility to preserve and celebrate cultural heritage, not exploit it.",
    ],
  },
}

export default async function BlogPostPage(props: BlogPostPageProps) {
  const params = await props.params
  const post = blogPostsData[params.slug]

  if (!post) {
    notFound()
  }

  return (
    <main className="pt-20">
      {/* Back Button */}
      <div className="px-4 py-6">
        <div className="max-w-4xl mx-auto">
          <Button variant="ghost" asChild>
            <Link href="/blog">
              <ArrowLeft className="mr-2" size={16} />
              Back to Journal
            </Link>
          </Button>
        </div>
      </div>

      {/* Hero Image */}
      <section className="px-4 mb-12">
        <div className="max-w-6xl mx-auto">
          <div className="relative aspect-[21/9] overflow-hidden bg-muted">
            <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="px-4 mb-16">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-mono uppercase tracking-wider mb-6">
            {post.category}
          </span>

          <h1 className="text-5xl md:text-6xl font-serif mb-6 text-balance">{post.title}</h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-12 pb-12 border-b border-border">
            <span className="font-mono">{post.author}</span>
            <span>•</span>
            <time>
              {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </time>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>

          <div className="prose prose-lg max-w-none">
            {post.content.map((paragraph, index) => (
              <p key={index} className="text-foreground/80 leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="py-16 px-4 bg-muted">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Experience Afroluxe Luxury</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Ready to create your custom piece? Book a consultation today
          </p>
          <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/book-fitting">Schedule Consultation</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
