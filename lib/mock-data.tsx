/**
 * Mock Data for Development
 *
 * This file contains mock data matching the expected WordPress API response shapes.
 * Use this during development and testing before WordPress backend is connected.
 */

export const mockCollections = [
  {
    id: 1,
    title: { rendered: "Royal Heritage" },
    slug: "royal-heritage",
    excerpt: { rendered: "Contemporary interpretations of traditional regal attire" },
    featured_media: "/luxury-african-fashion-royal-purple-collection-edi.jpg",
    acf: {
      season: "Fall/Winter 2024",
      category: "Ceremonial Wear",
      description: "Contemporary interpretations of traditional regal attire",
      images: [
        { url: "/luxury-african-fashion-royal-purple-collection-edi.jpg", alt: "Royal Heritage Collection" },
        { url: "/royal-purple-african-gown-editorial-close-up-luxury.jpg", alt: "Detail Shot" },
        { url: "/african-royal-fashion-purple-gold-ceremonial-wear.jpg", alt: "Full Look" },
      ],
    },
  },
  {
    id: 2,
    title: { rendered: "Golden Threads" },
    slug: "golden-threads",
    excerpt: { rendered: "Intricate embroidery celebrating ancestral artistry" },
    featured_media: "/luxury-african-fashion-gold-embroidered-garments-e.jpg",
    acf: {
      season: "Spring/Summer 2024",
      category: "Evening Wear",
      description: "Intricate embroidery celebrating ancestral artistry",
      images: [
        { url: "/luxury-african-fashion-gold-embroidered-garments-e.jpg", alt: "Golden Threads Collection" },
        { url: "/close-up-gold-embroidery-african-luxury-fashion.jpg", alt: "Embroidery Detail" },
        { url: "/gold-thread-work-african-textile-artisan-detail.jpg", alt: "Artisan Work" },
      ],
    },
  },
]

export const mockBlogPosts = [
  {
    id: 1,
    title: { rendered: "The Art of African Textile Design" },
    slug: "art-of-african-textile-design",
    excerpt: {
      rendered:
        "Exploring the rich history and cultural significance of traditional African textile patterns in contemporary fashion.",
    },
    date: "2024-03-15T10:00:00",
    featured_media: "/african-textile-patterns-traditional-weaving-close.jpg",
    categories: [1],
    author: 1,
    content: {
      rendered:
        "<p>African textile design is a rich tapestry of cultural heritage, storytelling, and artistic expression...</p>",
    },
    acf: {
      read_time: "5 min read",
      category_name: "Craftsmanship",
    },
  },
]

export const mockTestimonials = [
  {
    id: 1,
    title: { rendered: "Exceptional Service" },
    content: {
      rendered:
        "Afroluxe transformed my vision into reality. The attention to detail and cultural authenticity is unmatched.",
    },
    acf: {
      client_name: "Amara Okafor",
      client_title: "Fashion Executive",
      client_image: "/elegant-african-woman-testimonial-portrait.jpg",
      rating: 5,
      service: "Bespoke Couture",
    },
  },
]

export const mockServices = [
  {
    id: 1,
    title: { rendered: "Bespoke Couture" },
    content: {
      rendered: "Fully custom garments tailored to your exact measurements and specifications",
    },
    acf: {
      description: "Fully custom garments tailored to your exact measurements and specifications",
      features: [
        "Personal design consultation",
        "Premium fabric selection",
        "Multiple fittings included",
        "Hand-finished details",
        "Lifetime alterations",
      ],
      price_range: "Starting at $2,500",
      icon: "sparkles",
    },
  },
]

export const mockPageContent = {
  about: {
    id: 1,
    title: { rendered: "About Afroluxe" },
    content: { rendered: "<p>Our brand story content...</p>" },
    acf: {
      mission:
        "To elevate African fashion to the global luxury stage while honoring traditional craftsmanship and cultural heritage.",
      vision:
        "A world where African luxury fashion is recognized as a cornerstone of haute couture, celebrated for its authenticity, craftsmanship, and cultural significance.",
      designer_bio: "Adaeze Nwankwo is a visionary designer...",
      designer_image: "/african-fashion-designer-portrait-elegant-studio.jpg",
      values: [
        { title: "Craftsmanship", description: "Every piece is meticulously handcrafted..." },
        { title: "Cultural Authenticity", description: "We honor African heritage authentically..." },
        { title: "Sustainability", description: "We prioritize ethical production..." },
      ],
    },
  },
  home: {
    id: 2,
    title: { rendered: "Afroluxe Clothing" },
    acf: {
      hero_title: "Where Heritage Meets Haute Couture",
      hero_subtitle: "Discover bespoke luxury fashion that celebrates African elegance through contemporary design",
      hero_cta_text: "Explore Collections",
      hero_cta_link: "/lookbook",
      hero_image: "/elegant-african-fashion-model-in-luxury-royal-purp.jpg",
    },
  },
}

export const mockMenuItems = {
  items: [
    { id: 1, title: "Home", url: "/", children: [] },
    { id: 2, title: "Lookbook", url: "/lookbook", children: [] },
    { id: 3, title: "About", url: "/about", children: [] },
    { id: 4, title: "Services", url: "/services", children: [] },
    { id: 5, title: "Style Journal", url: "/blog", children: [] },
    { id: 6, title: "Testimonials", url: "/testimonials", children: [] },
    { id: 7, title: "Contact", url: "/contact", children: [] },
  ],
}

export const mockFooterSettings = {
  copyright: "© 2026 Afroluxe Clothing. All rights reserved.",
  socialLinks: {
    instagram: "https://instagram.com/afroluxe",
    facebook: "https://facebook.com/afroluxe",
    twitter: "https://twitter.com/afroluxe",
  },
  contactInfo: {
    email: "hello@afroluxe.com",
    phone: "+234 123 456 7890",
    address: "Victoria Island, Lagos, Nigeria",
  },
  newsletter: true,
}
