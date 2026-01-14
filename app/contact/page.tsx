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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const whatsappNumber = "2347012268966" // NO + sign

    const text = `
New Contact Message

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject}

Message:
${formData.message}
    `

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      text.trim()
    )}`

    window.open(whatsappURL, "_blank")
  }

  return (
    <main className="pt-20">
      <section className="py-16 px-4 bg-muted">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-serif mb-4">Contact Us</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We would love to hear from you. Reach out for inquiries or collaborations.
          </p>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-serif mb-8">Get in Touch</h2>

            <div className="space-y-8">
              <div className="flex gap-4">
                <Mail className="text-primary" />
                <a href="mailto:hello@afroluxe.com">hello@afroluxe.com</a>
              </div>

              <div className="flex gap-4">
                <Phone className="text-primary" />
                <a href="tel:+2347025024267">+234 702 502 4267</a>
              </div>

              <div className="flex gap-4">
                <MessageCircle className="text-primary" />
                <a href="https://wa.me/2347025024267" target="_blank">
                  Chat with us
                </a>
              </div>

              <div className="flex gap-4">
                <MapPin className="text-primary" />
                <span>Calabar Municipal, Cross River, Nigeria</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-serif mb-8">Send us a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <Input name="name" placeholder="Name *" required onChange={handleChange} />
              <Input name="email" type="email" placeholder="Email *" required onChange={handleChange} />
              <Input name="phone" placeholder="Phone" onChange={handleChange} />
              <Input name="subject" placeholder="Subject *" required onChange={handleChange} />
              <Textarea name="message" rows={6} placeholder="Message *" required onChange={handleChange} />

              <Button type="submit" className="w-full">
                Send via WhatsApp
              </Button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
