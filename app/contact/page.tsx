"use client"

import type React from "react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch(
        "http://afroluxe.infinityfree.me/wp-json/afroluxe/v1/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      )

      const result = await response.json()

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Submission failed")
      }

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

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-16 px-4 bg-muted">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-serif mb-4">Contact Us</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We would love to hear from you. Reach out for inquiries, consultations, or collaborations.
          </p>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-serif mb-8">Get in Touch</h2>

              <div className="space-y-8 mb-12">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-mono text-sm uppercase mb-2">Email</h3>
                    <a href="mailto:hello@afroluxe.com" className="text-foreground/80 hover:text-primary">
                      hello@afroluxe.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                    <Phone size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-mono text-sm uppercase mb-2">Phone</h3>
                    <a href="tel:+2347025024267" className="text-foreground/80 hover:text-primary">
                      +234 702 502 4267
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                    <MessageCircle size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-mono text-sm uppercase mb-2">WhatsApp</h3>
                    <a
                      href="https://wa.me/2347025024267"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary"
                    >
                      Chat with us
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                    <MapPin size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-mono text-sm uppercase mb-2">Atelier</h3>
                    <p className="text-foreground/80">
                      Calabar Municipal
                      <br />
                      Cross River, Nigeria
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-serif mb-8">Send us a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <Input name="name" placeholder="Name *" required value={formData.name} onChange={handleChange} />
                <Input name="email" type="email" placeholder="Email *" required value={formData.email} onChange={handleChange} />
                <Input name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
                <Input name="subject" placeholder="Subject *" required value={formData.subject} onChange={handleChange} />
                <Textarea name="message" rows={6} placeholder="Message *" required value={formData.message} onChange={handleChange} />

                {submitStatus === "success" && (
                  <div className="p-4 border bg-accent/10">Message sent successfully.</div>
                )}

                {submitStatus === "error" && (
                  <div className="p-4 border bg-destructive/10">Something went wrong. Please try again.</div>
                )}

                <Button type="submit" disabled={isSubmitting} className="w-full">
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
