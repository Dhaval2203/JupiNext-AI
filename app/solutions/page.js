import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { DollarSign, HeartPulse, ShoppingCart, Layers, GraduationCap, Building2, ArrowRight } from "lucide-react"
import { primaryColor, secondaryColor } from "@/lib/colors"

export const metadata = {
	title: "Industry Solutions | FinTech, HealthTech, E-Commerce & More - JupiNext",
	description:
		"Specialized technology solutions for FinTech, HealthTech, E-Commerce, SaaS, EdTech, and Enterprise. Custom software tailored to your industry's unique needs.",
	keywords:
		"fintech solutions, healthtech software, e-commerce platforms, SaaS development, edtech solutions, enterprise software",
	openGraph: {
		title: "Industry-Specific IT Solutions by JupiNext",
		description: "Tailored technology solutions for your industry",
		type: "website",
	},
}

export default function SolutionsPage() {
	return (
		<div className="min-h-screen">
			<Header />

			{/* Hero Section */}
			<section className="bg-gradient-to-b from-background to-muted/30 px-6 py-24 lg:px-8">
				<div className="mx-auto max-w-4xl text-center">
					<h1 className="text-balance text-5xl font-bold tracking-tight sm:text-6xl">
						<span style={{ color: primaryColor }}>Industry</span>{" "}
						<span style={{ color: secondaryColor }}>Solutions</span>
					</h1>
					<p className="mt-6 text-pretty text-lg leading-8 text-muted-foreground">
						Specialized technology solutions tailored for your industry's unique challenges and opportunities.
					</p>
				</div>
			</section>

			{/* Industries Grid */}
			<section className="px-6 py-24 lg:px-8">
				<div className="mx-auto max-w-7xl">
					<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
						{/* FinTech */}
						<Card className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:shadow-xl hover:-translate-y-1">
							<div className="p-8">
								<div className="mb-6 inline-flex rounded-xl bg-primary/10 p-4">
									<DollarSign className="h-10 w-10 text-primary" />
								</div>
								<h3 className="text-2xl font-bold text-card-foreground">FinTech</h3>
								<p className="mt-4 text-muted-foreground leading-relaxed">
									Build secure, scalable financial technology solutions. Payment gateways, banking apps, and investment
									platforms with enterprise-grade security.
								</p>
								<div className="mt-6">
									<h4 className="text-sm font-semibold text-foreground">Key Solutions:</h4>
									<ul className="mt-3 space-y-2 text-sm text-muted-foreground">
										<li>• Digital Banking Platforms</li>
										<li>• Payment Processing Systems</li>
										<li>• Cryptocurrency Exchanges</li>
										<li>• Fraud Detection & Prevention</li>
									</ul>
								</div>
							</div>
						</Card>

						{/* HealthTech */}
						<Card className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:shadow-xl hover:-translate-y-1">
							<div className="p-8">
								<div className="mb-6 inline-flex rounded-xl bg-secondary/10 p-4">
									<HeartPulse className="h-10 w-10 text-secondary" />
								</div>
								<h3 className="text-2xl font-bold text-card-foreground">HealthTech</h3>
								<p className="mt-4 text-muted-foreground leading-relaxed">
									Innovative healthcare solutions that improve patient care. Telemedicine, health records management,
									and medical IoT applications.
								</p>
								<div className="mt-6">
									<h4 className="text-sm font-semibold text-foreground">Key Solutions:</h4>
									<ul className="mt-3 space-y-2 text-sm text-muted-foreground">
										<li>• Telemedicine Platforms</li>
										<li>• Electronic Health Records</li>
										<li>• Patient Management Systems</li>
										<li>• Healthcare Analytics</li>
									</ul>
								</div>
							</div>
						</Card>

						{/* E-Commerce */}
						<Card className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:shadow-xl hover:-translate-y-1">
							<div className="p-8">
								<div className="mb-6 inline-flex rounded-xl bg-accent/10 p-4">
									<ShoppingCart className="h-10 w-10 text-accent" />
								</div>
								<h3 className="text-2xl font-bold text-card-foreground">E-Commerce</h3>
								<p className="mt-4 text-muted-foreground leading-relaxed">
									Complete e-commerce solutions from storefront to fulfillment. Multi-channel selling, inventory
									management, and customer insights.
								</p>
								<div className="mt-6">
									<h4 className="text-sm font-semibold text-foreground">Key Solutions:</h4>
									<ul className="mt-3 space-y-2 text-sm text-muted-foreground">
										<li>• Custom Online Stores</li>
										<li>• Marketplace Platforms</li>
										<li>• Order Management Systems</li>
										<li>• Personalization Engines</li>
									</ul>
								</div>
							</div>
						</Card>

						{/* SaaS */}
						<Card className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:shadow-xl hover:-translate-y-1">
							<div className="p-8">
								<div className="mb-6 inline-flex rounded-xl bg-primary/10 p-4">
									<Layers className="h-10 w-10 text-primary" />
								</div>
								<h3 className="text-2xl font-bold text-card-foreground">SaaS</h3>
								<p className="mt-4 text-muted-foreground leading-relaxed">
									Build and scale your software-as-a-service product. Multi-tenant architecture, subscription billing,
									and analytics dashboards.
								</p>
								<div className="mt-6">
									<h4 className="text-sm font-semibold text-foreground">Key Solutions:</h4>
									<ul className="mt-3 space-y-2 text-sm text-muted-foreground">
										<li>• Multi-Tenant Platforms</li>
										<li>• Subscription Management</li>
										<li>• API Development</li>
										<li>• Usage Analytics</li>
									</ul>
								</div>
							</div>
						</Card>

						{/* EdTech */}
						<Card className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:shadow-xl hover:-translate-y-1">
							<div className="p-8">
								<div className="mb-6 inline-flex rounded-xl bg-accent/10 p-4">
									<GraduationCap className="h-10 w-10 text-accent" />
								</div>
								<h3 className="text-2xl font-bold text-card-foreground">EdTech</h3>
								<p className="mt-4 text-muted-foreground leading-relaxed">
									Transform education with technology. Learning management systems, virtual classrooms, and student
									engagement platforms.
								</p>
								<div className="mt-6">
									<h4 className="text-sm font-semibold text-foreground">Key Solutions:</h4>
									<ul className="mt-3 space-y-2 text-sm text-muted-foreground">
										<li>• Learning Management Systems</li>
										<li>• Virtual Classroom Software</li>
										<li>• Student Information Systems</li>
										<li>• Adaptive Learning Platforms</li>
									</ul>
								</div>
							</div>
						</Card>

						{/* Enterprise */}
						<Card className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:shadow-xl hover:-translate-y-1">
							<div className="p-8">
								<div className="mb-6 inline-flex rounded-xl bg-secondary/10 p-4">
									<Building2 className="h-10 w-10 text-secondary" />
								</div>
								<h3 className="text-2xl font-bold text-card-foreground">Enterprise</h3>
								<p className="mt-4 text-muted-foreground leading-relaxed">
									Large-scale enterprise solutions for complex business needs. CRM, ERP, and workflow automation at
									scale.
								</p>
								<div className="mt-6">
									<h4 className="text-sm font-semibold text-foreground">Key Solutions:</h4>
									<ul className="mt-3 space-y-2 text-sm text-muted-foreground">
										<li>• Enterprise Resource Planning</li>
										<li>• Customer Relationship Management</li>
										<li>• Supply Chain Management</li>
										<li>• Business Intelligence</li>
									</ul>
								</div>
							</div>
						</Card>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="bg-muted/30 px-6 py-24 lg:px-8">
				<div className="mx-auto max-w-4xl text-center">
					<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
						Let's Build Your <span style={{ color: primaryColor }}>Industry</span>{" "}
						<span style={{ color: secondaryColor }}>Solution</span>
					</h2>
					<p className="mt-4 text-lg text-muted-foreground">
						Tell us about your unique challenges and we'll craft a solution that fits your industry perfectly.
					</p>
					<div className="mt-8">
						<Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
							<Link href="/contact">
								Discuss Your Project
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
