import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card } from "@/components/ui/card"
import { primaryColor, secondaryColor } from "@/lib/colors"

export const metadata = {
  title: "Technology Stack | Modern Web, Cloud & Blockchain Technologies - JupiNext",
  description:
    "Explore our technology stack: React, Next.js, Node.js, Python, AWS, Azure, PostgreSQL, MongoDB, Docker, Kubernetes, Ethereum, and more cutting-edge technologies.",
  keywords:
    "technology stack, React, Next.js, Node.js, AWS, Azure, blockchain, Ethereum, Docker, Kubernetes, web technologies",
  openGraph: {
    title: "JupiNext Technology Stack - Industry-Leading Tools",
    description: "Building with the best technologies for robust solutions",
    type: "website",
  },
}

export default function TechStackPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background to-muted/30 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-balance text-5xl font-bold tracking-tight sm:text-6xl">
            <span style={{ color: primaryColor }}>Technology</span> <span style={{ color: secondaryColor }}>Stack</span>
          </h1>
          <p className="mt-6 text-pretty text-lg leading-8 text-muted-foreground">
            We leverage industry-leading technologies to build robust, scalable, and future-proof solutions.
          </p>
        </div>
      </section>

      {/* Frontend Technologies */}
      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <h2 className="text-3xl font-bold" style={{ color: primaryColor }}>
              Frontend
            </h2>
            <p className="mt-2 text-muted-foreground">Modern UI frameworks and libraries</p>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            <Card className="flex flex-col items-center justify-center rounded-xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="text-4xl font-bold text-primary">⚛️</div>
              <p className="mt-3 text-center text-sm font-medium text-foreground">React</p>
            </Card>

            <Card className="flex flex-col items-center justify-center rounded-xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="text-4xl font-bold text-foreground">▲</div>
              <p className="mt-3 text-center text-sm font-medium text-foreground">Next.js</p>
            </Card>

            <Card className="flex flex-col items-center justify-center rounded-xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="text-4xl font-bold text-accent">V</div>
              <p className="mt-3 text-center text-sm font-medium text-foreground">Vue.js</p>
            </Card>

            <Card className="flex flex-col items-center justify-center rounded-xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="text-4xl font-bold text-primary">TS</div>
              <p className="mt-3 text-center text-sm font-medium text-foreground">TypeScript</p>
            </Card>

            <Card className="flex flex-col items-center justify-center rounded-xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="text-4xl font-bold text-accent">TW</div>
              <p className="mt-3 text-center text-sm font-medium text-foreground">Tailwind CSS</p>
            </Card>

            <Card className="flex flex-col items-center justify-center rounded-xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="text-4xl font-bold text-secondary">A</div>
              <p className="mt-3 text-center text-sm font-medium text-foreground">Angular</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Backend Technologies */}
      <section className="bg-muted/30 px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <h2 className="text-3xl font-bold" style={{ color: primaryColor }}>
              Backend
            </h2>
            <p className="mt-2 text-muted-foreground">Powerful server-side technologies</p>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            <Card className="flex flex-col items-center justify-center rounded-xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="text-4xl font-bold text-primary">📦</div>
              <p className="mt-3 text-center text-sm font-medium text-foreground">Node.js</p>
            </Card>

            <Card className="flex flex-col items-center justify-center rounded-xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="text-4xl font-bold text-foreground">E</div>
              <p className="mt-3 text-center text-sm font-medium text-foreground">Express.js</p>
            </Card>

            <Card className="flex flex-col items-center justify-center rounded-xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="text-4xl font-bold text-secondary">☕</div>
              <p className="mt-3 text-center text-sm font-medium text-foreground">Java</p>
            </Card>

            <Card className="flex flex-col items-center justify-center rounded-xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="text-4xl font-bold text-accent">🐍</div>
              <p className="mt-3 text-center text-sm font-medium text-foreground">Python</p>
            </Card>

            <Card className="flex flex-col items-center justify-center rounded-xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="text-4xl font-bold text-primary">🦀</div>
              <p className="mt-3 text-center text-sm font-medium text-foreground">Rust</p>
            </Card>

            <Card className="flex flex-col items-center justify-center rounded-xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="text-4xl font-bold text-accent">Go</div>
              <p className="mt-3 text-center text-sm font-medium text-foreground">Golang</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Cloud Platforms */}
      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <h2 className="text-3xl font-bold">
              <span style={{ color: primaryColor }}>Cloud</span>{" "}
              <span style={{ color: secondaryColor }}>Infrastructure</span>
            </h2>
            <p className="mt-2 text-muted-foreground">Scalable cloud services and deployment</p>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            <Card className="flex flex-col items-center justify-center rounded-xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="text-4xl font-bold text-secondary">☁️</div>
              <p className="mt-3 text-center text-sm font-medium text-foreground">AWS</p>
            </Card>

            <Card className="flex flex-col items-center justify-center rounded-xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="text-4xl font-bold text-accent">Az</div>
              <p className="mt-3 text-center text-sm font-medium text-foreground">Azure</p>
            </Card>

            <Card className="flex flex-col items-center justify-center rounded-xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="text-4xl font-bold text-primary">GCP</div>
              <p className="mt-3 text-center text-sm font-medium text-foreground">Google Cloud</p>
            </Card>

            <Card className="flex flex-col items-center justify-center rounded-xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="text-4xl font-bold text-foreground">▲</div>
              <p className="mt-3 text-center text-sm font-medium text-foreground">Vercel</p>
            </Card>

            <Card className="flex flex-col items-center justify-center rounded-xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="text-4xl font-bold text-accent">🐳</div>
              <p className="mt-3 text-center text-sm font-medium text-foreground">Docker</p>
            </Card>

            <Card className="flex flex-col items-center justify-center rounded-xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="text-4xl font-bold text-primary">K8s</div>
              <p className="mt-3 text-center text-sm font-medium text-foreground">Kubernetes</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Database */}
      <section className="bg-muted/30 px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <h2 className="text-3xl font-bold">
              <span style={{ color: primaryColor }}>Database</span>{" "}
              <span style={{ color: secondaryColor }}>Storage</span>
            </h2>
            <p className="mt-2 text-muted-foreground">Reliable data management solutions</p>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            <Card className="flex flex-col items-center justify-center rounded-xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="text-4xl font-bold text-accent">🐘</div>
              <p className="mt-3 text-center text-sm font-medium text-foreground">PostgreSQL</p>
            </Card>

            <Card className="flex flex-col items-center justify-center rounded-xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="text-4xl font-bold text-primary">🍃</div>
              <p className="mt-3 text-center text-sm font-medium text-foreground">MongoDB</p>
            </Card>

            <Card className="flex flex-col items-center justify-center rounded-xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="text-4xl font-bold text-secondary">🔥</div>
              <p className="mt-3 text-center text-sm font-medium text-foreground">Redis</p>
            </Card>

            <Card className="flex flex-col items-center justify-center rounded-xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="text-4xl font-bold text-accent">MySQL</div>
              <p className="mt-3 text-center text-sm font-medium text-foreground">MySQL</p>
            </Card>

            <Card className="flex flex-col items-center justify-center rounded-xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="text-4xl font-bold text-primary">📊</div>
              <p className="mt-3 text-center text-sm font-medium text-foreground">DynamoDB</p>
            </Card>

            <Card className="flex flex-col items-center justify-center rounded-xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="text-4xl font-bold text-foreground">S3</div>
              <p className="mt-3 text-center text-sm font-medium text-foreground">Amazon S3</p>
            </Card>
          </div>
        </div>
      </section>

      {/* DevOps & Tools */}
      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <h2 className="text-3xl font-bold">
              <span style={{ color: primaryColor }}>DevOps</span> <span style={{ color: secondaryColor }}>CI/CD</span>
            </h2>
            <p className="mt-2 text-muted-foreground">Automation and continuous delivery</p>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            <Card className="flex flex-col items-center justify-center rounded-xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="text-4xl font-bold text-secondary">Git</div>
              <p className="mt-3 text-center text-sm font-medium text-foreground">Git</p>
            </Card>

            <Card className="flex flex-col items-center justify-center rounded-xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="text-4xl font-bold text-foreground">GH</div>
              <p className="mt-3 text-center text-sm font-medium text-foreground">GitHub Actions</p>
            </Card>

            <Card className="flex flex-col items-center justify-center rounded-xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="text-4xl font-bold text-primary">🦊</div>
              <p className="mt-3 text-center text-sm font-medium text-foreground">GitLab CI</p>
            </Card>

            <Card className="flex flex-col items-center justify-center rounded-xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="text-4xl font-bold text-accent">J</div>
              <p className="mt-3 text-center text-sm font-medium text-foreground">Jenkins</p>
            </Card>

            <Card className="flex flex-col items-center justify-center rounded-xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="text-4xl font-bold text-primary">TF</div>
              <p className="mt-3 text-center text-sm font-medium text-foreground">Terraform</p>
            </Card>

            <Card className="flex flex-col items-center justify-center rounded-xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="text-4xl font-bold text-secondary">🎯</div>
              <p className="mt-3 text-center text-sm font-medium text-foreground">Ansible</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Blockchain */}
      <section className="bg-muted/30 px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <h2 className="text-3xl font-bold">
              <span style={{ color: primaryColor }}>Blockchain</span>{" "}
              <span style={{ color: secondaryColor }}>Web3</span>
            </h2>
            <p className="mt-2 text-muted-foreground">Decentralized technologies</p>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            <Card className="flex flex-col items-center justify-center rounded-xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="text-4xl font-bold text-accent">⟠</div>
              <p className="mt-3 text-center text-sm font-medium text-foreground">Ethereum</p>
            </Card>

            <Card className="flex flex-col items-center justify-center rounded-xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="text-4xl font-bold text-primary">◎</div>
              <p className="mt-3 text-center text-sm font-medium text-foreground">Solana</p>
            </Card>

            <Card className="flex flex-col items-center justify-center rounded-xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="text-4xl font-bold text-secondary">W3</div>
              <p className="mt-3 text-center text-sm font-medium text-foreground">Web3.js</p>
            </Card>

            <Card className="flex flex-col items-center justify-center rounded-xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="text-4xl font-bold text-accent">Sol</div>
              <p className="mt-3 text-center text-sm font-medium text-foreground">Solidity</p>
            </Card>

            <Card className="flex flex-col items-center justify-center rounded-xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="text-4xl font-bold text-primary">HH</div>
              <p className="mt-3 text-center text-sm font-medium text-foreground">Hardhat</p>
            </Card>

            <Card className="flex flex-col items-center justify-center rounded-xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="text-4xl font-bold text-foreground">IPFS</div>
              <p className="mt-3 text-center text-sm font-medium text-foreground">IPFS</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
