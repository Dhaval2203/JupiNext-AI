import Link from "next/link"
import { Github, Linkedin, Twitter, Mail, MapPin, Phone, ArrowRight, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

export default function Footer() {
	return (
		<footer className="relative bg-background pt-20 pb-10 overflow-hidden font-sans border-t border-border/50">
			{/* Unique Animated Background */}
			<div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
			<div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-pulse" />
			<div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] opacity-20 pointer-events-none" />
			<div className="absolute top-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl opacity-30 pointer-events-none -translate-x-1/2 -translate-y-1/2" />
			<div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-30 pointer-events-none translate-x-1/3 translate-y-1/3" />

			<div className="container relative mx-auto px-4 md:px-6 z-10">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 xl:gap-16">

					{/* Brand Column */}
					<div className="space-y-6">
						<Link href="/" className="inline-flex items-center gap-2 group">
							<div className="flex items-center">
								<Link href="/" className="flex items-center">
									<span style={{ marginLeft: '-5%' }}>
										<Image
											src="/JupiNextName.png"
											alt="JupiNext Name"
											width={250}
											height={100}
											priority
										/>
									</span>
								</Link>
							</div>

						</Link>
						<p className="text-primary text-muted-foreground leading-relaxed">
							Where the Next Begins. delivering innovative IT solutions in web, mobile, cloud, and AI technology to propel your business forward.
						</p>

						{/* <div className="pt-2">
							<h4 className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-4">Subscribe to our newsletter</h4>
							<div className="flex w-full max-w-sm items-center gap-2 p-1 rounded-full border border-border/40 bg-background/50 backdrop-blur-sm focus-within:border-primary/50 focus-within:ring-2 focus-within:ring-primary/10 transition-all shadow-sm">
								<Input
									type="email"
									placeholder="Email address"
									className="border-none shadow-none focus-visible:ring-0 bg-transparent h-10 px-4 placeholder:text-muted-foreground/50"
								/>
								<Button size="icon" className="rounded-full h-9 w-9 bg-primary hover:bg-primary/90 shadow-md transition-transform hover:scale-105">
									<ArrowRight className="h-4 w-4" />
									<span className="sr-only">Subscribe</span>
								</Button>
							</div>
						</div> */}
					</div>

					{/* Solutions Column */}
					<div>
						<h3 className="text-lg text-primary font-bold text-foreground mb-6">Solutions</h3>
						<ul className="space-y-3">
							{[
								{ label: "Web Development", href: "/services/web-development" },
								{ label: "Mobile Applications", href: "/services/mobile-apps" },
								{ label: "Cloud Infrastructure", href: "/services/cloud" },
								{ label: "AI & Machine Learning", href: "/services/ai-ml" },
								{ label: "Blockchain Solutions", href: "/services/blockchain" },
								{ label: "UI/UX Design", href: "/services/design" },
							].map((item) => (
								<li key={item.label}>
									<span
										className="text-muted-foreground hover:text-primary transition-all duration-200 flex items-center gap-2 group"
									>
										<span className="h-px w-0 bg-primary group-hover:w-3 transition-all duration-300" />
										{item.label}
									</span>
								</li>
							))}
						</ul>
					</div>

					{/* Company Column */}
					<div>
						<h3 className="text-lg text-primary font-bold text-foreground mb-6">Company</h3>
						<ul className="space-y-3">
							{[
								{ label: "About", href: "/about" },
								{ label: "Services", href: "/services" },
								{ label: "Solutions", href: "/solutions" },
								{ label: "Process", href: "/process" },
								{ label: "Tech Stack", href: "/tech-stack" },
								{ label: "Reviews", href: "/reviews" },
								{ label: "Careers", href: "/careers" },
								{ label: "Contact", href: "/contact" },
							].map((item) => (
								<li key={item.label}>
									<Link
										href={item.href}
										className="text-muted-foreground hover:text-primary transition-all duration-200 flex items-center gap-2 group"
									>
										<span className="h-px w-0 bg-primary group-hover:w-3 transition-all duration-300" />
										{item.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Contact Column */}
					<div>
						<h3 className="text-lg text-primary font-bold text-foreground mb-6">Get in Touch</h3>
						<ul className="space-y-5">
							<li className="flex items-start gap-3 text-muted-foreground">
								<div className="p-2 rounded-lg bg-secondary/5 text-secondary mt-0.5">
									<MapPin className="h-4 w-4" />
								</div>
								<span className="leading-snug pt-1.5">
									We work remotely only
								</span>
							</li>
							<li>
								<a href="mailto:hello@jupinext.com" className="flex items-center gap-3 text-muted-foreground group cursor-pointer hover:text-foreground transition-colors">
									<div className="p-2 rounded-lg bg-secondary/5 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
										<Mail className="h-4 w-4" />
									</div>
									<span className="pt-0.5">hello@jupinext.com</span>
								</a>
							</li>
							{/* <li>
								<a href="tel:+1234567890" className="flex items-center gap-3 text-muted-foreground group cursor-pointer hover:text-foreground transition-colors">
									<div className="p-2 rounded-lg bg-primary/5 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
										<Phone className="h-4 w-4" />
									</div>
									<span className="pt-0.5">+1 (555) 123-4567</span>
								</a>
							</li> */}
						</ul>

						<div className="mt-8">
							<h4 className="text-xs font-bold tracking-widest uppercase text-primary text-muted-foreground mb-4">Follow Us</h4>
							<div className="flex gap-3">
								{[
									{ icon: Linkedin, label: "LinkedIn" },
									// { icon: Twitter, label: "Twitter" },
									// { icon: Github, label: "GitHub" },
									// { icon: Instagram, label: "Instagram" },
								].map((social) => (
									<a
										key={social.label}
										href="#"
										className="h-10 w-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-secondary hover:border-secondary hover:bg-secondary/5 transition-all duration-300 hover:-translate-y-1 shadow-sm"
									>
										<social.icon className="h-4 w-4" />
										<span className="sr-only">{social.label}</span>
									</a>
								))}
							</div>
						</div>
					</div>
				</div>

				<div className="mt-6 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
					© 2026 <span className="text-primary font-semibold">JupiNext</span> – <span className="text-secondary">Where the Next Begins</span>
				</div>
			</div>
		</footer>
	)
}
