import { Card } from "@/components/ui/card"
import { Target, Eye, Lightbulb, Users, Heart, Rocket, TrendingUp, CheckCircle } from "lucide-react"
import { primaryColor, secondaryColor } from "@/lib/colors"

export default function AboutContent() {
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
		</>
	)
}
