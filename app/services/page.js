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
    const services = [
        {
            title: "Web Applications",
            description: "Custom web applications built with modern frameworks like React, Next.js, and Vue. Responsive, performant, and user-friendly.",
            icon: Code2,
            colorClass: "text-primary",
            bgClass: "bg-primary/10",
            features: [
                "Progressive Web Apps (PWA)",
                "Single Page Applications (SPA)",
                "E-commerce Platforms"
            ]
        },
        {
            title: "Mobile Development",
            description: "Native and cross-platform mobile apps for iOS and Android. Seamless performance with intuitive user experiences.",
            icon: Smartphone,
            colorClass: "text-secondary",
            bgClass: "bg-secondary/10",
            features: [
                "React Native Apps",
                "Flutter Development",
                "Native iOS & Android"
            ]
        },
        {
            title: "Cloud & DevOps",
            description: "Scalable cloud infrastructure and DevOps practices. AWS, Azure, and Google Cloud deployment and management.",
            icon: Cloud,
            colorClass: "text-accent",
            bgClass: "bg-accent/10",
            features: [
                "Cloud Migration Services",
                "CI/CD Pipeline Setup",
                "Container Orchestration"
            ]
        },
        {
            title: "UI/UX Design",
            description: "Beautiful, intuitive interfaces that prioritize user experience. From wireframes to high-fidelity prototypes.",
            icon: Palette,
            colorClass: "text-primary",
            bgClass: "bg-primary/10",
            features: [
                "User Research & Testing",
                "Responsive Design Systems",
                "Brand Identity Design"
            ]
        },
        {
            title: "Blockchain",
            description: "Decentralized solutions leveraging blockchain technology. Smart contracts, DApps, and Web3 integration.",
            icon: Shield,
            colorClass: "text-secondary",
            bgClass: "bg-secondary/10",
            features: [
                "Smart Contract Development",
                "DApp Development",
                "NFT Platforms"
            ]
        },
        {
            title: "AI Automation",
            description: "Intelligent automation powered by AI and machine learning. Streamline operations and enhance decision-making.",
            icon: Zap,
            colorClass: "text-accent",
            bgClass: "bg-accent/10",
            features: [
                "Machine Learning Models",
                "Natural Language Processing",
                "Predictive Analytics"
            ]
        },
        {
            title: "Enterprise Software",
            description: "Custom enterprise solutions tailored to your business needs. CRM, ERP, and workflow automation systems.",
            icon: Settings,
            colorClass: "text-primary",
            bgClass: "bg-primary/10",
            features: [
                "Custom CRM Systems",
                "Business Process Automation",
                "Data Management Solutions"
            ]
        }
    ];

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        itemListElement: services.map((service, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            item: {
                '@type': 'Service',
                name: service.title,
                description: service.description,
                provider: {
                    '@type': 'Organization',
                    name: 'JupiNext'
                },
                areaServed: 'Worldwide',
                hasOfferCatalog: {
                    '@type': 'OfferCatalog',
                    name: service.title,
                    itemListElement: service.features.map(feature => ({
                        '@type': 'Offer',
                        itemOffered: {
                            '@type': 'Service',
                            name: feature
                        }
                    }))
                }
            }
        }))
    }

    return (
        <div className="min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
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
                        {services.map((service, index) => (
                            <Card key={index} className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:shadow-xl hover:-translate-y-1">
                                <div className="p-8">
                                    <div className={`mb-6 inline-flex rounded-xl p-4 ${service.bgClass}`}>
                                        <service.icon className={`h-10 w-10 ${service.colorClass}`} />
                                    </div>
                                    <h3 className={`text-2xl font-bold ${service.colorClass}`}>{service.title}</h3>
                                    <p className="mt-4 text-muted-foreground leading-relaxed">
                                        {service.description}
                                    </p>
                                    <ul className="mt-6 space-y-3">
                                        {service.features.map((feature, fIndex) => (
                                            <li key={fIndex} className="flex items-start gap-2">
                                                <CheckCircle className={`mt-0.5 h-5 w-5 flex-shrink-0 ${service.colorClass}`} />
                                                <span className="text-sm text-muted-foreground">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-muted/30 px-6 py-24 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        Ready <span style={{ color: primaryColor }}>to Get</span>{" "}
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
