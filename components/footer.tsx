import Link from "next/link"
import { Instagram, Facebook, Twitter } from "lucide-react"

// TODO: Fetch footer content from WordPress REST API
// Expected API: GET /wp-json/wp/v2/footer-settings
// Response shape: { copyright, socialLinks, contactInfo, newsletter }

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif mb-4">AFROLUXE</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Celebrating African heritage through contemporary luxury fashion.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm uppercase tracking-wider mb-4 font-mono">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/lookbook"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Collections
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Style Journal
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm uppercase tracking-wider mb-4 font-mono">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Cross River, Nigeria</li>
              <li>
                <a href="mailto:hello@afroluxe.com" className="hover:text-foreground transition-colors">
                 favourezekiel@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+234 702 502 4267" className="hover:text-foreground transition-colors">
                  +234 702 502 4267
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm uppercase tracking-wider mb-4 font-mono">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            &copy; {currentYear} Afroluxe Clothing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
