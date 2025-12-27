import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card } from "@/components/ui/card"
import { FileSearch, Layout, Code, TestTube, Rocket, Wrench } from "lucide-react"
import { primaryColor, secondaryColor } from "@/lib/colors"

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

export default function ProcessPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-balance text-5xl font-bold tracking-tight sm:text-6xl">
            <span style={{ color: "black" }}>Our</span> <span style={{ color: primaryColor }}>Development</span>{" "}
            <span style={{ color: secondaryColor }}>Process</span>
          </h1>
          <p className="mt-6 text-pretty text-lg leading-8 text-muted-foreground">
            A structured, transparent approach to delivering quality software solutions that exceed expectations at
            every stage.
          </p>
        </div>
      </section>

      {/* Software Development Process Section */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {softwareDevelopmentProcessSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <Card
                  key={index}
                  className="group relative overflow-hidden rounded-xl border border-border bg-card p-8 transition-all hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="absolute right-4 top-4 text-6xl font-bold text-primary/5">{index + 1}</div>
                  <div className="relative">
                    <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-card-foreground">{step.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                  </div>
                </Card>
              )
            })}
          </div>

          {/* Additional Process Details */}
          <div className="mt-16 space-y-12">
            <Card className="rounded-xl border border-border bg-card p-8">
              <h2 className="text-2xl font-bold">
                <span style={{ color: "black" }}>Why</span> <span style={{ color: primaryColor }}>Our Process</span>{" "}
                <span style={{ color: secondaryColor }}>Works</span>
              </h2>
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="font-semibold text-card-foreground">Transparency</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    We keep you informed at every stage with regular updates, milestone reviews, and open communication
                    channels.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground">Flexibility</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Our agile approach allows us to adapt to changing requirements while maintaining project timelines
                    and quality.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground">Quality Assurance</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Rigorous testing and code reviews ensure every deliverable meets the highest standards of
                    excellence.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground">Continuous Improvement</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Post-deployment support and iterative enhancements keep your software optimized and up-to-date.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
