"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "lucide-react"

// TODO: Submit booking form to WordPress REST API
// Expected API: POST /wp-json/wp/v2/bookings
// Payload: { name, email, phone, service, preferred_date, preferred_time, budget, notes }
// Response: { success: boolean, booking_id: number, message: string }

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
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // TODO: Replace with actual WordPress API endpoint
      // const response = await fetch('/wp-json/wp/v2/bookings', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // })

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      setSubmitStatus("success")
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        preferredDate: "",
        preferredTime: "",
        budget: "",
        notes: "",
      })
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
          <Calendar className="w-16 h-16 mx-auto mb-6 text-primary" />
          <h1 className="text-5xl md:text-7xl font-serif mb-4">Book a Fitting</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Schedule your personalized consultation at our Lagos atelier
          </p>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-muted p-6 text-center border border-border">
              <div className="text-3xl font-serif text-primary mb-2">1-2h</div>
              <p className="text-sm text-muted-foreground">Consultation Duration</p>
            </div>
            <div className="bg-muted p-6 text-center border border-border">
              <div className="text-3xl font-serif text-primary mb-2">Free</div>
              <p className="text-sm text-muted-foreground">Initial Consultation</p>
            </div>
            <div className="bg-muted p-6 text-center border border-border">
              <div className="text-3xl font-serif text-primary mb-2">24h</div>
              <p className="text-sm text-muted-foreground">Confirmation Time</p>
            </div>
          </div>

          {/* Booking Form */}
          <div className="bg-card border border-border p-8">
            <h2 className="text-3xl font-serif mb-8">Schedule Your Consultation</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-mono uppercase tracking-wider mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-background"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-mono uppercase tracking-wider mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-background"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-mono uppercase tracking-wider mb-2">
                  Phone Number *
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-background"
                  placeholder="+234"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-mono uppercase tracking-wider mb-2">
                  Service Interest *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Select a service</option>
                  <option value="bespoke-couture">Bespoke Couture</option>
                  <option value="bridal-collections">Bridal Collections</option>
                  <option value="ready-to-wear">Ready-to-Wear Alterations</option>
                  <option value="wardrobe-consulting">Wardrobe Consulting</option>
                  <option value="special-occasion">Special Occasion Styling</option>
                  <option value="corporate-collection">Corporate Collection</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="preferredDate" className="block text-sm font-mono uppercase tracking-wider mb-2">
                    Preferred Date *
                  </label>
                  <Input
                    id="preferredDate"
                    name="preferredDate"
                    type="date"
                    required
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="bg-background"
                  />
                </div>

                <div>
                  <label htmlFor="preferredTime" className="block text-sm font-mono uppercase tracking-wider mb-2">
                    Preferred Time *
                  </label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    required
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Select a time</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="13:00">1:00 PM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="15:00">3:00 PM</option>
                    <option value="16:00">4:00 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-mono uppercase tracking-wider mb-2">
                  Estimated Budget
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Select a range</option>
                  <option value="under-1000">Under $1,000</option>
                  <option value="1000-2500">$1,000 - $2,500</option>
                  <option value="2500-5000">$2,500 - $5,000</option>
                  <option value="5000-10000">$5,000 - $10,000</option>
                  <option value="over-10000">Over $10,000</option>
                </select>
              </div>

              <div>
                <label htmlFor="notes" className="block text-sm font-mono uppercase tracking-wider mb-2">
                  Additional Notes
                </label>
                <Textarea
                  id="notes"
                  name="notes"
                  rows={4}
                  value={formData.notes}
                  onChange={handleChange}
                  className="bg-background resize-none"
                  placeholder="Tell us about your vision, occasion, or any specific requirements..."
                />
              </div>

              {submitStatus === "success" && (
                <div className="p-4 bg-accent/10 border border-accent text-accent-foreground text-sm">
                  Your consultation has been booked! We'll contact you within 24 hours to confirm.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-4 bg-destructive/10 border border-destructive text-destructive text-sm">
                  Booking failed. Please try again or contact us directly at hello@afroluxe.com
                </div>
              )}

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                {isSubmitting ? "Submitting..." : "Request Consultation"}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                By submitting this form, you agree to our terms of service and privacy policy
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
