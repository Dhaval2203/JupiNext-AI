import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { DollarSign, HeartPulse, ShoppingCart, Layers, GraduationCap, Building2, ArrowRight, CheckCircle } from "lucide-react"
import { primaryColor, secondaryColor, accentColor } from "@/lib/colors"

const solutions = [
	{
		title: "FinTech",
		description: "Build secure, scalable financial technology solutions. Payment gateways, banking apps, and investment platforms with enterprise-grade security.",
		icon: DollarSign,
		colorClass: "text-primary",
		bgClass: "bg-primary/10",
		keySolutions: [
			"Digital Banking Platforms",
			"Payment Processing Systems",
			"Cryptocurrency Exchanges",
			"Fraud Detection & Prevention"
		]
	},
	{
		title: "HealthTech",
		description: "Innovative healthcare solutions that improve patient care. Telemedicine, health records management, and medical IoT applications.",
		icon: HeartPulse,
		colorClass: "text-secondary",
		bgClass: "bg-secondary/10",
		keySolutions: [
			"Telemedicine Platforms",
			"Electronic Health Records",
			"Patient Management Systems",
			"Healthcare Analytics"
		]
	},
	{
		title: "E-Commerce",
		description: "Complete e-commerce solutions from storefront to fulfillment. Multi-channel selling, inventory management, and customer insights.",
		icon: ShoppingCart,
		colorClass: "text-accent",
		bgClass: "bg-accent/10",
		keySolutions: [
			"Custom Online Stores",
			"Marketplace Platforms",
			"Order Management Systems",
			"Personalization Engines"
		]
	},
	{
		title: "SaaS",
		description: "Build and scale your software-as-a-service product. Multi-tenant architecture, subscription billing, and analytics dashboards.",
		icon: Layers,
		colorClass: "text-primary",
		bgClass: "bg-primary/10",
		keySolutions: [
			"Multi-Tenant Platforms",
			"Subscription Management",
			"API Development",
			"Usage Analytics"
		]
	},
	{
		title: "EdTech",
		description: "Transform education with technology. Learning management systems, virtual classrooms, and student engagement platforms.",
		icon: GraduationCap,
		colorClass: "text-secondary",
		bgClass: "bg-secondary/10",
		keySolutions: [
			"Learning Management Systems",
			"Virtual Classroom Software",
			"Student Information Systems",
			"Adaptive Learning Platforms"
		]
	},
	{
		title: "Enterprise",
		description: "Large-scale enterprise solutions for complex business needs. CRM, ERP, and workflow automation at scale.",
		icon: Building2,
		colorClass: "text-accent",
		bgClass: "bg-accent/10",
		keySolutions: [
			"Enterprise Resource Planning",
			"Customer Relationship Management",
			"Supply Chain Management",
			"Business Intelligence"
		]
	}
]

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
						{solutions.map((solution, index) => {
							const Icon = solution.icon
							return (
								<Card key={index} className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:shadow-xl hover:-translate-y-1">
									<div className="p-8">
										<div className={`mb-6 inline-flex rounded-xl p-4 ${solution.bgClass}`}>
											<Icon className={`h-10 w-10 ${solution.colorClass}`} />
										</div>
										<h3 className={`text-2xl font-bold ${solution.colorClass}`}>{solution.title}</h3>
										<p className="mt-4 text-muted-foreground leading-relaxed">
											{solution.description}
										</p>
										<div className="mt-6">
											<h4 className={`text-sm font-semibold ${solution.colorClass}`}>Key Solutions:</h4>
											<ul className="mt-3 space-y-2">
												{solution.keySolutions.map((item, idx) => (
													<li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
														<CheckCircle className={`h-4 w-4 flex-shrink-0 ${solution.colorClass}`} />
														<span>{item}</span>
													</li>
												))}
											</ul>
										</div>
									</div>
								</Card>
							)
						})}
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
