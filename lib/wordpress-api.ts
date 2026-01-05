/**
 * WordPress API Configuration and Helper Functions
 *
 * This file provides a centralized API layer for connecting to WordPress REST API.
 * Replace WORDPRESS_API_URL with your actual WordPress site URL.
 */

// Environment variable for WordPress API URL
const WORDPRESS_API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || "https://your-wordpress-site.com/wp-json/wp/v2"

/**
 * Generic fetch wrapper for WordPress REST API
 */
async function fetchAPI(endpoint: string, options: RequestInit = {}) {
  const url = `${WORDPRESS_API_URL}${endpoint}`

  const response = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  })

  if (!response.ok) {
    throw new Error(`WordPress API error: ${response.statusText}`)
  }

  return response.json()
}

/**
 * Collections API
 */
export async function getCollections(params?: { featured?: boolean; per_page?: number; category?: string }) {
  const queryParams = new URLSearchParams()
  if (params?.featured) queryParams.append("featured", "true")
  if (params?.per_page) queryParams.append("per_page", params.per_page.toString())
  if (params?.category) queryParams.append("category", params.category)

  return fetchAPI(`/collections?${queryParams.toString()}`)
}

export async function getCollectionBySlug(slug: string) {
  const collections = await fetchAPI(`/collections?slug=${slug}`)
  return collections[0] || null
}

/**
 * Blog Posts API
 */
export async function getBlogPosts(params?: { per_page?: number; page?: number; category?: string }) {
  const queryParams = new URLSearchParams()
  if (params?.per_page) queryParams.append("per_page", params.per_page.toString())
  if (params?.page) queryParams.append("page", params.page.toString())
  if (params?.category) queryParams.append("category", params.category)

  return fetchAPI(`/posts?${queryParams.toString()}`)
}

export async function getBlogPostBySlug(slug: string) {
  const posts = await fetchAPI(`/posts?slug=${slug}`)
  return posts[0] || null
}

/**
 * Testimonials API
 */
export async function getTestimonials(params?: { per_page?: number }) {
  const queryParams = new URLSearchParams()
  if (params?.per_page) queryParams.append("per_page", params.per_page.toString())

  return fetchAPI(`/testimonials?${queryParams.toString()}`)
}

/**
 * Services API
 */
export async function getServices(params?: { per_page?: number }) {
  const queryParams = new URLSearchParams()
  if (params?.per_page) queryParams.append("per_page", params.per_page.toString())

  return fetchAPI(`/services?${queryParams.toString()}`)
}

/**
 * Pages API (for About, Home, etc.)
 */
export async function getPageBySlug(slug: string) {
  const pages = await fetchAPI(`/pages?slug=${slug}`)
  return pages[0] || null
}

/**
 * Form Submissions
 */
export async function submitContactForm(data: {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}) {
  return fetchAPI("/contact-form", {
    method: "POST",
    body: JSON.stringify(data),
  })
}

export async function submitBookingForm(data: {
  name: string
  email: string
  phone: string
  service: string
  preferred_date: string
  preferred_time: string
  budget?: string
  notes?: string
}) {
  return fetchAPI("/bookings", {
    method: "POST",
    body: JSON.stringify(data),
  })
}

/**
 * Menu Items API (for navigation)
 */
export async function getMenuItems(menuId = "primary") {
  return fetchAPI(`/menus/${menuId}`)
}

/**
 * Footer Settings
 */
export async function getFooterSettings() {
  return fetchAPI("/footer-settings")
}
