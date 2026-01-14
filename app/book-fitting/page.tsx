"use client"

import type React from "react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "lucide-react"

export default function BookFittingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    preferredDate: "",
    preferredTime: "",
    budget: "",
    notes: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const whatsappNumber = "2347025024267" // no +

    const message = `
New Fitting Request

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Service: ${formData.service}
Preferred Date: ${formData.preferredDate}
Preferred Time: ${formData.preferredTime}
Budget: ${formData.budget}

Notes:
${formData.notes}
    `

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message.trim()
    )}`

    window.open(whatsappURL, "_blank")
  }

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-16 px-4 bg-muted">
        <div className="max-w-7xl mx-auto text-center">
          <Calendar className="w-16 h-16 mx-auto mb-6 text-primary" />
          <h1 className="text-5xl md:text-7xl font-serif mb-4">Book a Fitting</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Schedule your personalized consultation with Afroluxe
          </p>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-card border border-border p-8">
            <h2 className="text-3xl font-serif mb-8">Schedule Your Consultation</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-mono uppercase mb-2">
                    Full Name *
                  </label>
                  <Input
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="block text-sm font-mono uppercase mb-2">
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
              </div>

              <div>
                <label className="block text-sm font-mono uppercase mb-2">
                  Phone Number *
                </label>
                <Input
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+234"
                />
              </div>

              <div>
                <label className="block text-sm font-mono uppercase mb-2">
                  Service Interest *
                </label>
                <select
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full h-10 px-3 rounded-md border border-input bg-background"
                >
                  <option value="">Select a service</option>
                  <option value="Bespoke Couture">Bespoke Couture</option>
                  <option value="Bridal Collections">Bridal Collections</option>
                  <option value="Ready-to-Wear Alterations">Ready-to-Wear Alterations</option>
                  <option value="Wardrobe Consulting">Wardrobe Consulting</option>
                  <option value="Special Occasion Styling">Special Occasion Styling</option>
                  <option value="Corporate Collection">Corporate Collection</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-mono uppercase mb-2">
                    Preferred Date *
                  </label>
                  <Input
                    type="date"
                    name="preferredDate"
                    required
                    value={formData.preferredDate}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="block text-sm font-mono uppercase mb-2">
                    Preferred Time *
                  </label>
                  <select
                    name="preferredTime"
                    required
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="w-full h-10 px-3 rounded-md border border-input bg-background"
                  >
                    <option value="">Select a time</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="12:00 PM">12:00 PM</option>
                    <option value="1:00 PM">1:00 PM</option>
                    <option value="2:00 PM">2:00 PM</option>
                    <option value="3:00 PM">3:00 PM</option>
                    <option value="4:00 PM">4:00 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-mono uppercase mb-2">
                  Estimated Budget
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full h-10 px-3 rounded-md border border-input bg-background"
                >
                  <option value="">Select a range</option>
                  <option value="Under ₦1,000,000">Under ₦1,000,000</option>
                  <option value="₦1,000,000 – ₦2,500,000">₦1,000,000 – ₦2,500,000</option>
                  <option value="₦2,500,000 – ₦5,000,000">₦2,500,000 – ₦5,000,000</option>
                  <option value="Above ₦5,000,000">Above ₦5,000,000</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-mono uppercase mb-2">
                  Additional Notes
                </label>
                <Textarea
                  name="notes"
                  rows={4}
                  value={formData.notes}
                  onChange={handleChange}
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Request via WhatsApp
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                You will be redirected to WhatsApp to complete your booking request
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
