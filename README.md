# Afroluxe Clothing - Luxury African Fashion Website

A production-ready Next.js website for Afroluxe Clothing, designed to integrate seamlessly with a headless WordPress backend.

## Tech Stack

- **Frontend**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **Backend**: WordPress (Headless CMS)
- **Data Layer**: WordPress REST API

## Project Structure

```
afroluxe-clothing/
├── app/                      # Next.js App Router pages
│   ├── page.tsx             # Home page
│   ├── about/               # About page
│   ├── lookbook/            # Collections listing & detail
│   ├── services/            # Services page
│   ├── book-fitting/        # Booking form
│   ├── blog/                # Blog listing & posts
│   ├── testimonials/        # Client testimonials
│   ├── contact/             # Contact page
│   ├── layout.tsx           # Root layout with navbar & footer
│   └── globals.css          # Global styles & design tokens
├── components/
│   ├── navbar.tsx           # Site navigation
│   ├── footer.tsx           # Site footer
│   └── ui/                  # shadcn/ui components
├── lib/
│   ├── wordpress-api.ts     # WordPress API helper functions
│   ├── mock-data.ts         # Development mock data
│   └── utils.ts             # Utility functions
└── public/                  # Static assets & images
```

## Features

### Pages

1. **Home Page** - Hero, featured collections, testimonials, CTAs
2. **Lookbook** - Collections grid with category filtering
3. **Collection Detail** - Individual collection pages with galleries
4. **About** - Brand story, designer bio, values
5. **Services** - Service offerings with features and pricing
6. **Book a Fitting** - Consultation booking form
7. **Blog (Style Journal)** - Blog listing and individual posts
8. **Testimonials** - Client reviews and testimonials
9. **Contact** - Contact form and information

### Design System

**Color Palette:**

- Primary: Deep Royal Purple (`oklch(0.35 0.15 290)`)
- Accent: Gold (`oklch(0.75 0.12 80)`)
- Neutrals: White, off-white, dark gray

**Typography:**

- Headings: Playfair Display (serif)
- Body: Inter (sans-serif)

**Design Style:** Elegant, premium, editorial, minimal

## WordPress Integration

### Required Custom Post Types

Create these custom post types in WordPress:

1. **Collections**
   - Fields: title, excerpt, featured_image, season, category, images (gallery)
   - Slug: `collections`

2. **Services**
   - Fields: title, description, features (repeater), price_range, icon
   - Slug: `services`

3. **Testimonials**
   - Fields: client_name, client_title, client_image, rating, service, quote
   - Slug: `testimonials`

4. **Blog Posts**
   - Use default WordPress posts
   - Additional fields: read_time, category

### Required ACF Fields

Install Advanced Custom Fields (ACF) plugin and create field groups for:

- **Collections**: season, category, images (gallery), description
- **Services**: description, features (repeater), price_range, icon
- **Testimonials**: client_name, client_title, client_image, rating, service
- **Pages (Home)**: hero_title, hero_subtitle, hero_cta_text, hero_cta_link, hero_image
- **Pages (About)**: mission, vision, designer_bio, designer_image, values (repeater)

### WordPress REST API Endpoints

The frontend expects these endpoints:

```
GET /wp-json/wp/v2/collections
GET /wp-json/wp/v2/collections?slug={slug}
GET /wp-json/wp/v2/posts
GET /wp-json/wp/v2/posts?slug={slug}
GET /wp-json/wp/v2/testimonials
GET /wp-json/wp/v2/services
GET /wp-json/wp/v2/pages?slug={slug}
GET /wp-json/wp/v2/menus/{menu-id}
POST /wp-json/wp/v2/contact-form
POST /wp-json/wp/v2/bookings
```

### Environment Variables

Create a `.env.local` file:

```
NEXT_PUBLIC_WORDPRESS_API_URL=https://your-wordpress-site.com/wp-json/wp/v2
```

## Getting Started

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Connecting to WordPress

1. Set up your WordPress site with required plugins:
   - Advanced Custom Fields (ACF)
   - Custom Post Type UI
   - WPGraphQL (optional, for GraphQL instead of REST API)

2. Create the custom post types and fields as documented above

3. Update `.env.local` with your WordPress URL

4. Replace mock data in `lib/mock-data.ts` with actual API calls in `lib/wordpress-api.ts`

5. Update components to fetch from WordPress API instead of using hardcoded data

### API Integration Checklist

- [ ] Set up WordPress custom post types
- [ ] Install and configure ACF fields
- [ ] Configure WordPress REST API
- [ ] Update environment variables
- [ ] Replace mock data with API calls
- [ ] Test all endpoints
- [ ] Implement error handling
- [ ] Add loading states
- [ ] Configure caching strategy

## Customization

### Updating the Theme

Edit `app/globals.css` to update color tokens:

```css
:root {
  --primary: oklch(0.35 0.15 290);    /* Deep purple */
  --accent: oklch(0.75 0.12 80);      /* Gold */
  /* ... other tokens */
}
```

### Adding New Pages

1. Create new page in `app/[page-name]/page.tsx`
2. Add to navigation in `components/navbar.tsx`
3. Create corresponding WordPress content structure

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Add environment variables in Vercel dashboard.

### Other Platforms

Build for production:

```bash
npm run build
npm start
```

## WordPress Plugins Recommended

- **Advanced Custom Fields Pro** - Custom fields
- **Custom Post Type UI** - Custom post types
- **Yoast SEO** - SEO optimization
- **Contact Form 7** - Contact forms
- **WP REST API Controller** - Enhanced REST API control
- **JWT Authentication** - Secure API authentication

## Support

For questions or issues:

- Email: hello@afroluxe.com
- Documentation: See inline code comments

## License

All rights reserved © 2026 Afroluxe Clothing
