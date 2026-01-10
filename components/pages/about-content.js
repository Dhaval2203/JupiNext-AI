"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Target, Eye, Lightbulb, Users, Heart, Rocket, TrendingUp, CheckCircle, ChevronDown, Plus, Minus } from "lucide-react"
import { primaryColor, secondaryColor } from "@/lib/colors"
import { cn } from "@/lib/utils"

const faqs = [
	{
		question: "What services does JupiNext provide?",
		answer: "JupiNext offers a comprehensive suite of IT solutions including Web Development, Mobile App Development, Cloud Services, UI/UX Design, Blockchain Development, and AI-Powered Solutions. We build scalable and innovative technologies tailored to your business needs."
	},
	{
		question: "How does JupiNext ensure project quality?",
		answer: "We follow strict Agile methodologies and rigorous testing protocols. Our commitment to 'Excellence' means we don't just deliver code; we deliver performant, secure, and user-friendly solutions that drive real value."
	},
	{
		question: "Can you handle enterprise-level projects?",
		answer: "Absolutely. As recognized 'Enterprise Leaders', we have successfully delivered over 150+ projects globally, ranging from startups to large-scale enterprise systems. Our team is equipped to handle complex architectural challenges."
	},
	{
		question: "Do you offer post-launch support and maintenance?",
		answer: "Yes, we believe in long-term partnerships. We offer dedicated support and maintenance packages to ensure your application remains up-to-date, secure, and performs optimally as your business grows."
	},
	{
		question: "How do we get started with a project?",
		answer: "Simply reach out to us through our contact page or email. We'll schedule an initial consultation to understand your vision and requirements, then provide a tailored proposal to bring your idea to life."
	},
	{
		question: "What technologies do you specialize in?",
		answer: "We specialize in modern tech stacks including React, Next.js, Node.js, Python, Flutter, React Native, AWS, Azure, Solidity, and cutting-edge AI/ML frameworks. Our team stays current with the latest technologies to deliver future-proof solutions."
	},
	{
		question: "What is your typical project timeline?",
		answer: "Project timelines vary based on scope and complexity. A simple web application might take 4-8 weeks, while enterprise solutions can span 3-6 months or more. We provide detailed timelines during the proposal phase and maintain transparent communication throughout."
	},
	{
		question: "Do you work with startups or only established businesses?",
		answer: "We work with businesses of all sizes! From ambitious startups needing MVP development to established enterprises requiring digital transformation, we tailor our approach to meet your specific needs and budget."
	},
	{
		question: "How do you handle project communication and updates?",
		answer: "We believe in transparent, regular communication. You'll have access to project management tools, scheduled sprint reviews, and a dedicated project manager. We provide weekly progress reports and are always available for quick syncs when needed."
	},
	{
		question: "What makes JupiNext different from other IT companies?",
		answer: "Our unique blend of innovation, client-centric approach, and proven expertise sets us apart. We don't just build software—we become your technology partner, invested in your long-term success. Our track record of 150+ successful projects speaks to our commitment to excellence."
	}
]

export default function AboutContent() {
	const [openIndex, setOpenIndex] = useState(null)

	const toggleFaq = (index) => {
		setOpenIndex(openIndex === index ? null : index)
	}

	return (
		<>
			{/* Hero Section */}
			<section className="bg-gradient-to-b from-background to-muted/30 px-6 py-24 lg:px-8">
				<div className="mx-auto max-w-4xl text-center">
					<h1 className="text-balance text-5xl font-bold tracking-tight sm:text-6xl">
						About <span style={{ color: primaryColor }}>Jupi</span>
						<span style={{ color: secondaryColor }}>Next</span>
					</h1>
					<p className="mt-6 text-pretty text-lg leading-8 text-muted-foreground">
						Empowering businesses with innovative technology solutions since 2016. We're passionate about transforming
						ideas into reality.
					</p>
				</div>
			</section>

			{/* Mission & Vision Cards */}
			<section className="px-6 py-24 lg:px-8">
				<div className="mx-auto max-w-7xl">
					<div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
						<Card className="overflow-hidden rounded-xl border border-border bg-card p-10">
							<div className="mb-6 inline-flex rounded-lg bg-primary/10 p-4">
								<Target className="h-8 w-8 text-primary" />
								<h2 className="text-2xl font-bold text-card-foreground text-primary ml-3">Our Mission</h2>
							</div>
							<p className="mt-4 text-muted-foreground leading-relaxed">
								To deliver cutting-edge IT solutions that empower businesses to thrive in the digital age. We strive to
								be the trusted technology partner that drives innovation, efficiency, and growth for our clients.
							</p>
						</Card>

						<Card className="overflow-hidden rounded-xl border border-border bg-card p-10">
							<div className="mb-6 inline-flex rounded-lg bg-secondary/10 p-4">
								<Eye className="h-8 w-8 text-secondary" />
								<h2 className="text-2xl font-bold text-card-foreground ml-3 text-secondary">Our Vision</h2>
							</div>
							<p className="mt-4 text-muted-foreground leading-relaxed">
								To be the leading force in shaping the future of technology. We envision a world where businesses of all
								sizes can harness the power of innovative solutions to achieve extraordinary success.
							</p>
						</Card>
					</div>
				</div>
			</section>

			{/* Company Values */}
			<section className="bg-muted/30 px-6 py-24 lg:px-8">
				<div className="mx-auto max-w-7xl">
					<div className="text-center">
						<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
							Our <span style={{ color: primaryColor }}>Core</span>{" "}
							<span style={{ color: secondaryColor }}>Values</span>
						</h2>
						<p className="mt-4 text-lg text-muted-foreground">The principles that guide everything we do</p>
					</div>

					<div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
						<Card className="rounded-xl border border-border bg-card p-8 text-center transition-all hover:shadow-lg">
							<div className="mx-auto mb-4 inline-flex rounded-full bg-primary/10 p-4">
								<Lightbulb className="h-8 w-8 text-primary" />
							</div>
							<h3 className="text-xl font-semibold text-card-foreground">Innovation</h3>
							<p className="mt-3 text-sm text-muted-foreground">
								Constantly pushing boundaries and embracing new technologies to deliver groundbreaking solutions.
							</p>
						</Card>

						<Card className="rounded-xl border border-border bg-card p-8 text-center transition-all hover:shadow-lg">
							<div className="mx-auto mb-4 inline-flex rounded-full bg-secondary/10 p-4">
								<Heart className="h-8 w-8 text-secondary" />
							</div>
							<h3 className="text-xl font-semibold text-card-foreground">Client-Centric</h3>
							<p className="mt-3 text-sm text-muted-foreground">
								Your success is our success. We prioritize understanding and exceeding client expectations.
							</p>
						</Card>

						<Card className="rounded-xl border border-border bg-card p-8 text-center transition-all hover:shadow-lg">
							<div className="mx-auto mb-4 inline-flex rounded-full bg-accent/10 p-4">
								<CheckCircle className="h-8 w-8 text-accent" />
							</div>
							<h3 className="text-xl font-semibold text-card-foreground">Excellence</h3>
							<p className="mt-3 text-sm text-muted-foreground">
								Committed to delivering the highest quality in every project, no matter the size or complexity.
							</p>
						</Card>

						<Card className="rounded-xl border border-border bg-card p-8 text-center transition-all hover:shadow-lg">
							<div className="mx-auto mb-4 inline-flex rounded-full bg-primary/10 p-4">
								<Users className="h-8 w-8 text-primary" />
							</div>
							<h3 className="text-xl font-semibold text-card-foreground">Collaboration</h3>
							<p className="mt-3 text-sm text-muted-foreground">
								Working together as a team and with our clients to achieve shared goals and mutual success.
							</p>
						</Card>

						<Card className="rounded-xl border border-border bg-card p-8 text-center transition-all hover:shadow-lg">
							<div className="mx-auto mb-4 inline-flex rounded-full bg-secondary/10 p-4">
								<TrendingUp className="h-8 w-8 text-secondary" />
							</div>
							<h3 className="text-xl font-semibold text-card-foreground">Growth</h3>
							<p className="mt-3 text-sm text-muted-foreground">
								Continuously learning and evolving to stay ahead of industry trends and client needs.
							</p>
						</Card>

						<Card className="rounded-xl border border-border bg-card p-8 text-center transition-all hover:shadow-lg">
							<div className="mx-auto mb-4 inline-flex rounded-full bg-accent/10 p-4">
								<Rocket className="h-8 w-8 text-accent" />
							</div>
							<h3 className="text-xl font-semibold text-card-foreground">Agility</h3>
							<p className="mt-3 text-sm text-muted-foreground">
								Adapting quickly to changes and challenges while maintaining focus on delivering results.
							</p>
						</Card>
					</div>
				</div>
			</section>

			{/* Timeline Journey */}
			<section className="px-6 py-24 lg:px-8">
				<div className="mx-auto max-w-4xl">
					<div className="text-center">
						<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
							<span style={{ color: primaryColor }}>Our</span> <span style={{ color: secondaryColor }}>Journey</span>
						</h2>
						<p className="mt-4 text-lg text-muted-foreground">Key milestones in our growth story</p>
					</div>

					<div className="mt-16 space-y-8">
						<div className="relative pl-8 before:absolute before:left-0 before:top-2 before:h-full before:w-0.5 before:bg-border">
							<div className="absolute left-0 top-2 h-4 w-4 -translate-x-[7px] rounded-full bg-primary ring-4 ring-background" />
							<Card className="rounded-xl border border-border bg-card p-6">
								<div className="flex items-center gap-3">
									{/* <span className="text-2xl font-bold text-primary">2016</span> */}
									<h3 className="text-xl font-semibold text-card-foreground">Foundation</h3>
								</div>
								<p className="mt-2 text-muted-foreground">
									JupiNext was founded with a vision to revolutionize IT solutions for businesses of all sizes.
								</p>
							</Card>
						</div>

						<div className="relative pl-8 before:absolute before:left-0 before:top-2 before:h-full before:w-0.5 before:bg-border">
							<div className="absolute left-0 top-2 h-4 w-4 -translate-x-[7px] rounded-full bg-accent ring-4 ring-background" />
							<Card className="rounded-xl border border-border bg-card p-6">
								<div className="flex items-center gap-3">
									{/* <span className="text-2xl font-bold text-accent">2018</span> */}
									<h3 className="text-xl font-semibold text-card-foreground">Expansion</h3>
								</div>
								<p className="mt-2 text-muted-foreground">
									Expanded our services to include cloud solutions and mobile development, serving 50+ clients.
								</p>
							</Card>
						</div>

						<div className="relative pl-8 before:absolute before:left-0 before:top-2 before:h-full before:w-0.5 before:bg-border">
							<div className="absolute left-0 top-2 h-4 w-4 -translate-x-[7px] rounded-full bg-secondary ring-4 ring-background" />
							<Card className="rounded-xl border border-border bg-card p-6">
								<div className="flex items-center gap-3">
									{/* <span className="text-2xl font-bold text-secondary">2021</span> */}
									<h3 className="text-xl font-semibold text-card-foreground">Innovation Hub</h3>
								</div>
								<p className="mt-2 text-muted-foreground">
									Launched our AI and blockchain divisions, positioning ourselves at the forefront of emerging tech.
								</p>
							</Card>
						</div>

						<div className="relative pl-8">
							<div className="absolute left-0 top-2 h-4 w-4 -translate-x-[7px] rounded-full bg-primary ring-4 ring-background" />
							<Card className="rounded-xl border border-border bg-card p-6">
								<div className="flex items-center gap-3">
									{/* <span className="text-2xl font-bold text-primary">2024</span> */}
									<h3 className="text-xl font-semibold text-card-foreground">Enterprise Leader</h3>
								</div>
								<p className="mt-2 text-muted-foreground">
									Recognized as a leading enterprise solution provider with 150+ successful projects delivered globally.
								</p>
							</Card>
						</div>
					</div>
				</div>
			</section>

			{/* FAQ Section */}
			<section className="bg-muted/20 px-6 py-24 lg:px-8">
				<div className="mx-auto max-w-6xl">
					<div className="text-center mb-16">
						<div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-card border border-border">
							<div className="h-2 w-2 rounded-full" style={{ backgroundColor: primaryColor }}></div>
							<span className="text-sm font-semibold tracking-wider uppercase text-muted-foreground">
								Got Questions?
							</span>
							<div className="h-2 w-2 rounded-full" style={{ backgroundColor: secondaryColor }}></div>
						</div>
						<h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
							Frequently Asked <span style={{ color: primaryColor }}>Questions</span> (FAQs)
						</h2>
						<p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
							Everything you need to know about our services, process, and approach
						</p>
					</div>

					<div className="grid grid-cols-1 gap-6">
						{faqs.map((faq, index) => {
							const isEven = index % 2 === 0
							const accentColor = isEven ? primaryColor : secondaryColor

							return (
								<Card
									key={index}
									className={cn(
										"group relative overflow-hidden border-2 transition-all duration-300 cursor-pointer",
										openIndex === index
											? "shadow-2xl border-transparent"
											: "border-border hover:shadow-lg hover:border-border/50"
									)}
									onClick={() => toggleFaq(index)}
								>
									{/* Solid color accent bar */}
									<div
										className={cn(
											"absolute left-0 top-0 bottom-0 w-1.5 transition-all duration-300",
											openIndex === index ? "w-2" : "w-1"
										)}
										style={{ backgroundColor: accentColor }}
									/>

									{/* Corner decoration */}
									<div
										className={cn(
											"absolute top-0 right-0 w-20 h-20 -mr-10 -mt-10 rounded-full opacity-10 transition-opacity duration-300",
											openIndex === index ? "opacity-20" : "opacity-5"
										)}
										style={{ backgroundColor: accentColor }}
									/>

									<div className="relative pl-6 pr-4 py-4">
										<div className="flex items-start justify-between gap-4">
											<div className="flex items-start gap-3 flex-1">
												{/* Large subtle number on the left */}
												<div
													className="text-3xl sm:text-4xl font-bold pointer-events-none transition-colors duration-300"
													style={{ color: openIndex === index ? accentColor : `${accentColor}40` }}
												>
													{index + 1}
												</div>
												<h3
													className="text-base font-bold transition-colors duration-300 leading-snug pr-8 sm:pr-12"
													style={{ color: accentColor }}
												>
													{faq.question}
												</h3>
											</div>

											{/* Toggle button */}
											<div
												className={cn(
													"flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-all duration-300 shadow-sm",
													openIndex === index
														? "shadow-md"
														: "group-hover:shadow-md"
												)}
												style={{
													backgroundColor: openIndex === index ? accentColor : `${accentColor}20`,
													color: openIndex === index ? 'white' : accentColor
												}}
											>
												{openIndex === index ? (
													<Minus className="h-4 w-4" />
												) : (
													<Plus className="h-4 w-4" />
												)}
											</div>
										</div>

										{/* Answer section */}
										<div
											className={cn(
												"grid transition-all duration-500 ease-in-out",
												openIndex === index ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
											)}
										>
											<div className="overflow-hidden">
												<div className="pl-8 sm:pl-11 pr-2 pb-2">
													<div
														className="p-4 rounded-lg bg-muted/50 border-l-4"
														style={{ borderColor: accentColor }}
													>
														<p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
															{faq.answer}
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</Card>
							)
						})}
					</div>
				</div>
			</section>
		</>
	)
}
