import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import {
  Code2,
  Smartphone,
  Cloud,
  Palette,
  Shield,
  Zap,
  CheckCircle,
  ArrowRight,
  Users,
  Award,
  Clock,
} from "lucide-react"
import { primaryColor, secondaryColor } from "@/lib/colors"

export default function HomeContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30 px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-balance text-5xl font-bold tracking-tight text-foreground sm:text-7xl">
            Where the <span style={{ color: "#0ea5a4" }}>Next</span> <span style={{ color: "#ef4444" }}>Begins</span>
          </h1>
          <p className="mt-6 text-pretty text-lg leading-8 text-muted-foreground">
            Your future-ready IT partner delivering innovative solutions in web development, mobile applications, cloud
            infrastructure, and cutting-edge AI technology.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/contact">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Cards Section */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              <span style={{ color: primaryColor }}>Our</span> <span style={{ color: secondaryColor }}>Services</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Comprehensive IT solutions tailored to your business needs
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="group overflow-hidden rounded-xl border border-border bg-card p-8 transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                <Code2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground">Web Development</h3>
              <p className="mt-2 text-muted-foreground">
                Modern, responsive web applications built with the latest technologies for optimal performance.
              </p>
            </Card>

            <Card className="group overflow-hidden rounded-xl border border-border bg-card p-8 transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                <Smartphone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground">Mobile Apps</h3>
              <p className="mt-2 text-muted-foreground">
                Native and cross-platform mobile solutions that deliver seamless user experiences.
              </p>
            </Card>

            <Card className="group overflow-hidden rounded-xl border border-border bg-card p-8 transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                <Cloud className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground">Cloud Solutions</h3>
              <p className="mt-2 text-muted-foreground">
                Scalable cloud infrastructure and DevOps practices for reliable, efficient operations.
              </p>
            </Card>

            <Card className="group overflow-hidden rounded-xl border border-border bg-card p-8 transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                <Palette className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground">UI/UX Design</h3>
              <p className="mt-2 text-muted-foreground">
                Intuitive, beautiful interfaces designed with user experience at the forefront.
              </p>
            </Card>

            <Card className="group overflow-hidden rounded-xl border border-border bg-card p-8 transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground">Blockchain</h3>
              <p className="mt-2 text-muted-foreground">
                Secure, decentralized solutions leveraging blockchain technology for transparency.
              </p>
            </Card>

            <Card className="group overflow-hidden rounded-xl border border-border bg-card p-8 transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground">AI Automation</h3>
              <p className="mt-2 text-muted-foreground">
                Intelligent automation solutions powered by cutting-edge artificial intelligence.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Why JupiNext Section */}
      <section className="bg-muted/30 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              <span style={{ color: primaryColor }}>Why Choose</span>{" "}
              <span style={{ color: secondaryColor }}>JupiNext</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Built on principles of innovation, security, and excellence
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center text-center">
              <div className="rounded-full bg-primary/10 p-4">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">Innovation-First</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Embracing cutting-edge technologies to deliver future-ready solutions
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="rounded-full bg-primary/10 p-4">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">Scalable Solutions</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Architecture designed to grow with your business needs
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="rounded-full bg-primary/10 p-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">Secure Architecture</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Enterprise-grade security built into every solution we deliver
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="rounded-full bg-primary/10 p-4">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">Clear Communication</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Transparent processes with consistent updates and feedback
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <Card className="rounded-xl border border-border bg-card p-8 text-center">
              <div className="mb-4 inline-flex rounded-full bg-primary/10 p-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <div className="text-4xl font-bold text-foreground">150+</div>
              <div className="mt-2 text-sm text-muted-foreground">Projects Delivered</div>
            </Card>

            <Card className="rounded-xl border border-border bg-card p-8 text-center">
              <div className="mb-4 inline-flex rounded-full bg-primary/10 p-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <div className="text-4xl font-bold text-foreground">95%</div>
              <div className="mt-2 text-sm text-muted-foreground">Happy Clients</div>
            </Card>

            <Card className="rounded-xl border border-border bg-card p-8 text-center">
              <div className="mb-4 inline-flex rounded-full bg-primary/10 p-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <div className="text-4xl font-bold text-foreground">8+</div>
              <div className="mt-2 text-sm text-muted-foreground">Years of Experience</div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden px-6 py-24 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-accent" />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />

        <div className="relative mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            We're Available for New Projects
          </div>

          <h2 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Ready to Start Your
            <br />
            <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">Next Project?</span>
          </h2>

          <p className="mt-6 text-lg text-white/90 sm:text-xl max-w-2xl mx-auto">
            Let's transform your vision into reality. Partner with us to build innovative, scalable solutions that drive
            your business forward.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all hover:scale-105 w-full sm:w-auto"
            >
              <Link href="/contact" className="flex items-center gap-2">
                Start Your Project
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-primary transition-all w-full sm:w-auto bg-transparent"
            >
              <Link href="/process">View Our Process</Link>
            </Button>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 text-white/80">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">150+</div>
              <div className="text-sm">Projects</div>
            </div>
            <div className="h-12 w-px bg-white/20" />
            <div className="text-center">
              <div className="text-2xl font-bold text-white">95%</div>
              <div className="text-sm">Happy Clients</div>
            </div>
            <div className="h-12 w-px bg-white/20" />
            <div className="text-center">
              <div className="text-2xl font-bold text-white">8+</div>
              <div className="text-sm">Years</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
