import Header from "@/components/header"
import Footer from "@/components/footer"
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
  FileSearch,
  Layout,
  Code,
  TestTube,
  Rocket,
  Wrench,
} from "lucide-react"

const softwareDevelopmentProcessSteps = [
  {
    title: "Requirement Analysis",
    description:
      "Gain a clear understanding of your requirements, goals, and the challenges the software is designed to solve.",
    icon: FileSearch,
  },
  {
    title: "Planning & Design",
    description:
      "Develop a comprehensive plan and blueprint & design a detailed strategy that includes a well-structured architecture, intuitive user interface, and seamless user experience.",
    icon: Layout,
  },
  {
    title: "Development",
    description:
      "Develop software by ensuring each module is aligned with the design and integrates seamlessly with the overall functionality.",
    icon: Code,
  },
  {
    title: "Testing",
    description:
      "Conduct thorough evaluations to identify and resolve bugs, optimize performance, and ensure reliability.",
    icon: TestTube,
  },
  {
    title: "Deployment",
    description: "Deploy the software in a live environment, ensuring it is available for end-users.",
    icon: Rocket,
  },
  {
    title: "Maintenance & Support",
    description:
      "Offer continuous support to manage updates, resolve issues, and implement improvements, ensuring the software remains optimized.",
    icon: Wrench,
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />

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
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our Services</h2>
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
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Why Choose JupiNext</h2>
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

      {/* Client Reviews/Testimonials Section */}
      <section className="bg-muted/30 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">What Our Clients Say</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Trusted by businesses worldwide for exceptional results
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="rounded-xl border border-border bg-card p-8">
              <div className="mb-4 flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-muted-foreground italic">
                "JupiNext transformed our legacy system into a modern, scalable platform. Their expertise in cloud
                solutions and attention to detail exceeded our expectations. The team was professional and delivered on
                time."
              </p>
              <div className="mt-6 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-lg font-semibold text-primary">MJ</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">Michael Johnson</div>
                  <div className="text-sm text-muted-foreground">CTO, TechCorp Solutions</div>
                </div>
              </div>
            </Card>

            <Card className="rounded-xl border border-border bg-card p-8">
              <div className="mb-4 flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-muted-foreground italic">
                "Working with JupiNext on our mobile app was a game-changer. They understood our vision perfectly and
                delivered a beautiful, intuitive app that our users love. Highly recommend their mobile development
                services!"
              </p>
              <div className="mt-6 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-lg font-semibold text-primary">SP</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">Sarah Parker</div>
                  <div className="text-sm text-muted-foreground">Founder, FitLife App</div>
                </div>
              </div>
            </Card>

            <Card className="rounded-xl border border-border bg-card p-8">
              <div className="mb-4 flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-muted-foreground italic">
                "The blockchain solution JupiNext built for our supply chain has revolutionized our operations. Their
                deep technical knowledge and innovative approach helped us achieve transparency we never thought
                possible."
              </p>
              <div className="mt-6 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-lg font-semibold text-primary">DC</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">David Chen</div>
                  <div className="text-sm text-muted-foreground">VP Operations, GlobalTrade Inc</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary px-6 py-24 lg:px-8">
        <Card className="mx-auto max-w-4xl rounded-xl border-0 bg-primary p-12 text-center shadow-2xl">
          <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl">Ready to Start Your Next Project?</h2>
          <p className="mt-4 text-lg text-primary-foreground/90">
            Let's build something amazing together. Contact us today to discuss your vision.
          </p>
          <div className="mt-8">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-background text-foreground hover:bg-background/90"
            >
              <Link href="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Card>
      </section>

      <Footer />
    </div>
  )
}
