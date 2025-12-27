"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission logic here
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background to-muted/30 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-balance text-5xl font-bold tracking-tight text-foreground sm:text-6xl">Get in Touch</h1>
          <p className="mt-6 text-pretty text-lg leading-8 text-muted-foreground">
            Ready to start your next project? Let's discuss how we can help transform your vision into reality.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-foreground">Contact Information</h2>
              <p className="mt-4 text-muted-foreground">
                Reach out to us through any of these channels. We're here to help.
              </p>

              <div className="mt-8 space-y-6">
                <Card className="rounded-xl border border-border bg-card p-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-primary/10 p-3">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Email</h3>
                      <a
                        href="mailto:hello@jupinext.com"
                        className="mt-1 text-sm text-muted-foreground hover:text-primary"
                      >
                        hello@jupinext.com
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="rounded-xl border border-border bg-card p-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-accent/10 p-3">
                      <Phone className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Phone</h3>
                      <a href="tel:+1234567890" className="mt-1 text-sm text-muted-foreground hover:text-accent">
                        +1 (234) 567-8900
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="rounded-xl border border-border bg-card p-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-secondary/10 p-3">
                      <MapPin className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Office</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        123 Tech Boulevard
                        <br />
                        San Francisco, CA 94105
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              <Card className="mt-8 rounded-xl border border-accent/20 bg-accent/5 p-6">
                <h3 className="font-semibold text-foreground">Privacy & Security</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Your information is secure with us. We respect your privacy and will never share your details with
                  third parties.
                </p>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="rounded-xl border border-border bg-card p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-foreground">Send Us a Message</h2>
                <p className="mt-2 text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        className="rounded-lg border-input bg-background"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="rounded-lg border-input bg-background"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-foreground">
                        Company
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        placeholder="Your Company"
                        value={formData.company}
                        onChange={handleChange}
                        className="rounded-lg border-input bg-background"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-foreground">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+1 (234) 567-8900"
                        value={formData.phone}
                        onChange={handleChange}
                        className="rounded-lg border-input bg-background"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      placeholder="Tell us about your project..."
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="rounded-lg border-input bg-background resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 sm:w-auto"
                  >
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
