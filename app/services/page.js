import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Code2, Smartphone, Cloud, Palette, Shield, Zap, Settings, ArrowRight, CheckCircle } from "lucide-react"
import { primaryColor, secondaryColor } from "@/lib/colors"

export const metadata = {
  title: "Our Services | Web, Mobile, Cloud, AI & Blockchain Solutions - JupiNext",
  description:
    "Comprehensive technology services including web development, mobile apps, cloud solutions, UI/UX design, blockchain, AI automation, and enterprise software development.",
  keywords:
    "web development, mobile apps, cloud solutions, UI/UX design, blockchain development, AI automation, enterprise software, IT services",
  openGraph: {
    title: "JupiNext Services - Complete IT Solutions",
    description: "Transform your business with our comprehensive technology services",
    type: "website",
  },
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background to-muted/30 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-balance text-5xl font-bold tracking-tight sm:text-6xl">
            <span style={{ color: primaryColor }}>Our</span> <span style={{ color: secondaryColor }}>Services</span>
          </h1>
          <p className="mt-6 text-pretty text-lg leading-8 text-muted-foreground">
            Comprehensive technology solutions designed to transform your business and drive sustainable growth.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Web Applications */}
            <Card className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="p-8">
                <div className="mb-6 inline-flex rounded-xl bg-primary/10 p-4">
                  <Code2 className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-card-foreground">Web Applications</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Custom web applications built with modern frameworks like React, Next.js, and Vue. Responsive,
                  performant, and user-friendly.
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">Progressive Web Apps (PWA)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">Single Page Applications (SPA)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">E-commerce Platforms</span>
                  </li>
                </ul>
              </div>
            </Card>

            {/* Mobile Development */}
            <Card className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="p-8">
                <div className="mb-6 inline-flex rounded-xl bg-accent/10 p-4">
                  <Smartphone className="h-10 w-10 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-card-foreground">Mobile Development</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Native and cross-platform mobile apps for iOS and Android. Seamless performance with intuitive user
                  experiences.
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                    <span className="text-sm text-muted-foreground">React Native Apps</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                    <span className="text-sm text-muted-foreground">Flutter Development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                    <span className="text-sm text-muted-foreground">Native iOS & Android</span>
                  </li>
                </ul>
              </div>
            </Card>

            {/* Cloud & DevOps */}
            <Card className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="p-8">
                <div className="mb-6 inline-flex rounded-xl bg-primary/10 p-4">
                  <Cloud className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-card-foreground">Cloud & DevOps</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Scalable cloud infrastructure and DevOps practices. AWS, Azure, and Google Cloud deployment and
                  management.
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">Cloud Migration Services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">CI/CD Pipeline Setup</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">Container Orchestration</span>
                  </li>
                </ul>
              </div>
            </Card>

            {/* UI/UX Design */}
            <Card className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="p-8">
                <div className="mb-6 inline-flex rounded-xl bg-secondary/10 p-4">
                  <Palette className="h-10 w-10 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-card-foreground">UI/UX Design</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Beautiful, intuitive interfaces that prioritize user experience. From wireframes to high-fidelity
                  prototypes.
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" />
                    <span className="text-sm text-muted-foreground">User Research & Testing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" />
                    <span className="text-sm text-muted-foreground">Responsive Design Systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" />
                    <span className="text-sm text-muted-foreground">Brand Identity Design</span>
                  </li>
                </ul>
              </div>
            </Card>

            {/* Blockchain */}
            <Card className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="p-8">
                <div className="mb-6 inline-flex rounded-xl bg-accent/10 p-4">
                  <Shield className="h-10 w-10 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-card-foreground">Blockchain</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Decentralized solutions leveraging blockchain technology. Smart contracts, DApps, and Web3
                  integration.
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                    <span className="text-sm text-muted-foreground">Smart Contract Development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                    <span className="text-sm text-muted-foreground">DApp Development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                    <span className="text-sm text-muted-foreground">NFT Platforms</span>
                  </li>
                </ul>
              </div>
            </Card>

            {/* AI Automation */}
            <Card className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="p-8">
                <div className="mb-6 inline-flex rounded-xl bg-primary/10 p-4">
                  <Zap className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-card-foreground">AI Automation</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Intelligent automation powered by AI and machine learning. Streamline operations and enhance
                  decision-making.
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">Machine Learning Models</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">Natural Language Processing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">Predictive Analytics</span>
                  </li>
                </ul>
              </div>
            </Card>

            {/* Enterprise Software */}
            <Card className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="p-8">
                <div className="mb-6 inline-flex rounded-xl bg-secondary/10 p-4">
                  <Settings className="h-10 w-10 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-card-foreground">Enterprise Software</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Custom enterprise solutions tailored to your business needs. CRM, ERP, and workflow automation
                  systems.
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" />
                    <span className="text-sm text-muted-foreground">Custom CRM Systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" />
                    <span className="text-sm text-muted-foreground">Business Process Automation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" />
                    <span className="text-sm text-muted-foreground">Data Management Solutions</span>
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted/30 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            <span style={{ color: primaryColor }}>Ready to Get</span>{" "}
            <span style={{ color: secondaryColor }}>Started?</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Let's discuss how our services can help transform your business.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
