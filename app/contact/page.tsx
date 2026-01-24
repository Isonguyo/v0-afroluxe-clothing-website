"use client"

import type React from "react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import { Mail, Phone, MapPin, MessageCircle } from "lucide-react"

// TODO: Submit contact form to WordPress REST API
// Expected API: POST /wp-json/wp/v2/contact-form
// Payload: { name, email, phone, subject, message }
// Response: { success: boolean, message: string }

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // Simulated API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      setSubmitStatus("success")
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-16 px-4 bg-muted">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-serif mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We would love to hear from you. Reach out for inquiries,
            consultations, or collaborations.
          </p>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-serif mb-8">
                Get in Touch
              </h2>

              <div className="space-y-8 mb-12">
                {/* Email */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-mono text-sm uppercase tracking-wider mb-2">
                      Email
                    </h3>
                    <a
                      href="mailto:hello@afroluxe.com"
                      className="text-foreground/80 hover:text-primary transition-colors"
                    >
                      hello@afroluxe.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                    <Phone size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-mono text-sm uppercase tracking-wider mb-2">
                      Phone
                    </h3>
                    <a
                      href="tel:+2347025024267"
                      className="text-foreground/80 hover:text-primary transition-colors"
                    >
                      +234 702 502 4267
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                    <MessageCircle size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-mono text-sm uppercase tracking-wider mb-2">
                      WhatsApp
                    </h3>
                    <a
                      href="https://wa.me/2347025024267"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors"
                    >
                      Chat with us
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                    <MapPin size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-mono text-sm uppercase tracking-wider mb-2">
                      Atelier
                    </h3>
                    <p className="text-foreground/80">
                      Calabar Municipal
                      <br />
                      Cross River, Nigeria
                    </p>
                  </div>
                </div>
              </div>

              {/* Showroom Hours */}
              <div className="bg-muted p-8 border border-border">
                <h3 className="text-xl font-serif mb-4">
                  Showroom Hours
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Monday - Friday
                    </span>
                    <span className="font-mono">
                      10:00 AM - 6:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Saturday
                    </span>
                    <span className="font-mono">
                      11:00 AM - 4:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Sunday
                    </span>
                    <span className="font-mono">
                      By Appointment
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-serif mb-8">
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-mono mb-2">
                    Name *
                  </label>
                  <Input
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="block text-sm font-mono mb-2">
                    Email *
                  </label>
                  <Input
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="block text-sm font-mono mb-2">
                    Phone
                  </label>
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="block text-sm font-mono mb-2">
                    Subject *
                  </label>
                  <Input
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="block text-sm font-mono mb-2">
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                {submitStatus === "success" && (
                  <div className="p-4 bg-accent/10 border border-accent text-sm">
                    Thank you for your message! We’ll get back to you soon.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="p-4 bg-destructive/10 border border-destructive text-sm">
                    Something went wrong. Please try again.
                  </div>
                )}

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
