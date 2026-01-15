"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react"
import { useState } from "react"
import { primaryColor, secondaryColor } from "@/lib/colors"
import { toast, Toaster } from "sonner"

export default function ContactClient() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
    })

    const [loading, setLoading] = useState(false)
    const generateCaptcha = () => Math.floor(100000 + Math.random() * 900000).toString()

    const [captcha, setCaptcha] = useState(generateCaptcha())
    const [captchaInput, setCaptchaInput] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (loading) return

        if (captcha.toString() === captchaInput.toString()) {
            setLoading(true)
            try {
                const res = await fetch("/api/contact", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formData),
                })

                if (!res.ok) throw new Error()

                toast.success("Message sent successfully! We'll get back to you soon.")

                setFormData({
                    name: "",
                    email: "",
                    company: "",
                    phone: "",
                    message: "",
                })
            } catch (error) {
                toast.error("Something went wrong. Please try again.")
            } finally {
                setLoading(false)
                setCaptcha(generateCaptcha())
                setCaptchaInput("")
            }
        } else {
            toast.error("Capcha does not match!")
        }
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <div className="min-h-screen">
            {/* Sonner Toaster */}
            <Toaster position="top-right" richColors />

            <Header />

            {/* Hero Section */}
            <section className="bg-gradient-to-b from-background to-muted/30 px-6 py-24 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <h1 className="text-balance text-5xl font-bold tracking-tight sm:text-6xl">
                        <span style={{ color: primaryColor }}>Get in</span>{" "}
                        <span style={{ color: secondaryColor }}>Touch</span>
                    </h1>
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
                            <h2 className="text-2xl font-bold text-foreground text-primary">
                                Contact Information
                            </h2>
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
                                            <h3 className="font-semibold text-foreground text-primary">
                                                Email
                                            </h3>
                                            <a
                                                href="mailto:hr@jupinext.com"
                                                className="mt-1 text-sm text-muted-foreground hover:text-primary"
                                            >
                                                hr@jupinext.com
                                            </a>
                                        </div>
                                    </div>
                                </Card>

                                {/* <Card className="rounded-xl border border-border bg-card p-6">
									<div className="flex items-start gap-4">
										<div className="rounded-lg bg-secondary/10 p-3">
											<Phone className="h-6 w-6 text-secondary" />
										</div>
										<div>
											<h3 className="font-semibold text-foreground text-secondary">
												Phone
											</h3>
											<a
												href="tel:+1234567890"
												className="mt-1 text-sm text-muted-foreground hover:text-secondary"
											>
												+91 98765 43210
											</a>
										</div>
									</div>
								</Card> */}

                                <Card className="rounded-xl border border-border bg-card p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="rounded-lg bg-accent/10 p-3">
                                            <MapPin className="h-6 w-6 text-accent" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-foreground text-accent">
                                                Office
                                            </h3>
                                            <p className="mt-1 text-sm text-muted-foreground hover:text-accent">
                                                We work remotely only
                                            </p>
                                        </div>
                                    </div>
                                </Card>
                            </div>

                            <Card className="mt-8 rounded-xl border border-accent/20 bg-accent/5 p-6">
                                <h3 className="font-semibold text-foreground">
                                    Privacy & Security
                                </h3>
                                <p className="mt-2 text-sm text-muted-foreground">
                                    Your information is secure with us. We respect your privacy and will never share your details with
                                    third parties.
                                </p>
                            </Card>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <Card className="rounded-xl border border-border bg-card p-8 shadow-lg">
                                <h2 className="text-2xl font-bold text-foreground text-secondary">
                                    Send Us a Message
                                </h2>
                                <p className="mt-2 text-muted-foreground">
                                    Fill out the form below and we'll get back to you within 24 hours.
                                </p>

                                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                        <div className="space-y-2">
                                            <Label htmlFor="name">Full Name *</Label>
                                            <Input
                                                id="name"
                                                name="name"
                                                required
                                                placeholder="John Doe"
                                                value={formData.name}
                                                onChange={handleChange}
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="email">Email Address *</Label>
                                            <Input
                                                id="email"
                                                name="email"
                                                type="email"
                                                required
                                                placeholder="john@company.com"
                                                value={formData.email}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                        <div className="space-y-2">
                                            <Label htmlFor="company">Company</Label>
                                            <Input
                                                id="company"
                                                name="company"
                                                placeholder="Your Company"
                                                value={formData.company}
                                                onChange={handleChange}
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="phone">Phone Number</Label>
                                            <Input
                                                id="phone"
                                                name="phone"
                                                placeholder="+91 98765 43210"
                                                value={formData.phone}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="message">Message *</Label>
                                        <Textarea
                                            id="message"
                                            name="message"
                                            required
                                            placeholder="Tell us about your project..."
                                            rows={6}
                                            value={formData.message}
                                            onChange={handleChange}
                                        />
                                    </div>


                                    {/* ================= CAPTCHA (ONLY ADDITION) ================= */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-end">
                                        <div>
                                            <Label>Captcha</Label>
                                            <div className="mt-1 flex items-center gap-3">
                                                <div
                                                    className="px-4 py-2 rounded-md text-lg font-bold tracking-widest"
                                                    style={{
                                                        background: `${primaryColor}10`,
                                                        color: primaryColor,
                                                    }}
                                                >
                                                    {captcha}
                                                </div>
                                                <Button
                                                    type="button"
                                                    variant="outline"
                                                    className="hover:bg-transparent hover:text-inherit"
                                                    style={{ borderColor: primaryColor, color: primaryColor }}
                                                    onClick={() => setCaptcha(generateCaptcha())}
                                                >
                                                    Refresh
                                                </Button>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="captcha">Captcha *</Label>
                                            <Input
                                                id="captcha"
                                                name="captcha"
                                                required
                                                inputMode="numeric"
                                                pattern="[0-9]*"
                                                maxLength={6}
                                                placeholder="Enter 6-digit number"
                                                value={captchaInput}
                                                onChange={(e) =>
                                                    setCaptchaInput(e.target.value.replace(/\D/g, ""))
                                                }
                                            />
                                        </div>
                                    </div>

                                    <Button
                                        type="submit"
                                        size="lg"
                                        disabled={loading}
                                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 sm:w-auto flex items-center gap-2"
                                    >
                                        {loading ? (
                                            <>
                                                <Loader2 className="h-4 w-4 animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <Send className="h-4 w-4" />
                                                Send Message
                                            </>
                                        )}
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
