import Link from "next/link"
import { Github, Linkedin, Twitter, Mail, MapPin, Phone, ArrowRight, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

export default function Footer() {
	return (
		<footer className="relative bg-background pt-20 pb-10 overflow-hidden font-sans border-t border-border/50">
			<div className="container relative mx-auto px-4 md:px-6 z-10">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 xl:gap-8">

					{/* Brand Column */}
					<div className="space-y-6">
						<div className="inline-flex items-center gap-2 group">
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

						</div>
						<p className="text-primary text-muted-foreground leading-relaxed">
							Where the Next Begins. delivering innovative IT solutions in web, mobile, cloud, and AI technology to propel your business forward.
						</p>
					</div>

					{/* Solutions Column */}
					<div className="bg-gradient-to-br from-primary/5 to-transparent border border-primary/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group h-fit">
						<h3 className="text-lg text-primary font-bold mb-6 group-hover:translate-x-1 transition-transform">Solutions</h3>
						<ul className="space-y-3">
							{[
								{ label: "Web Development" },
								{ label: "Mobile Applications" },
								{ label: "Cloud Infrastructure" },
								{ label: "AI & Machine Learning" },
								{ label: "Blockchain Solutions" },
								{ label: "UI/UX Design" },
							].map((item) => (
								<li key={item.label}>
									<span
										className="text-muted-foreground hover:text-secondary transition-all duration-200 flex items-center gap-2 group/link"
									>
										<ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300 text-secondary" />
										<span className="group-hover/link:translate-x-1 transition-transform duration-300">{item.label}</span>
									</span>
								</li>
							))}
						</ul>
					</div>

					{/* Company Column */}
					<div className="bg-gradient-to-br from-secondary/5 to-transparent border border-secondary/10 rounded-2xl p-6 hover:border-secondary/30 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/5 group h-fit">
						<h3 className="text-lg text-secondary font-bold mb-6 group-hover:translate-x-1 transition-transform">Company</h3>
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
										className="text-muted-foreground hover:text-primary transition-all duration-200 flex items-center gap-2 group/link"
									>
										<ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300 text-primary" />
										<span className="group-hover/link:translate-x-1 transition-transform duration-300">{item.label}</span>
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Contact & Follow Us Column */}
					<div className="space-y-6">
						{/* Contact Card */}
						<div className="bg-gradient-to-br from-primary/5 to-transparent border border-primary/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
							<h3 className="text-lg text-primary font-bold mb-6">Get in Touch</h3>
							<ul className="space-y-5">
								<li className="flex items-start gap-3 text-muted-foreground">
									<div className="p-2 rounded-lg bg-background shadow-sm text-primary mt-0.5 border border-primary/10">
										<MapPin className="h-4 w-4" />
									</div>
									<span className="leading-snug pt-1.5">
										We work remotely only
									</span>
								</li>
								<li>
									<a href="mailto:hello@jupinext.com" className="flex items-center gap-3 text-muted-foreground group cursor-pointer hover:text-foreground transition-colors">
										<div className="p-2 rounded-lg bg-background shadow-sm text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors border border-primary/10">
											<Mail className="h-4 w-4" />
										</div>
										<span className="pt-0.5">hello@jupinext.com</span>
									</a>
								</li>
							</ul>
						</div>

						{/* Follow Us Card */}
						<div className="bg-gradient-to-br from-secondary/5 to-transparent border border-secondary/10 rounded-2xl p-6 hover:border-secondary/30 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/5">
							<h3 className="text-lg text-secondary font-bold mb-6">Follow Us</h3>
							<div className="flex flex-wrap gap-3">
								{[
									{ icon: Linkedin, label: "LinkedIn" },
									// { icon: Twitter, label: "Twitter" },
									// { icon: Github, label: "GitHub" },
									// { icon: Instagram, label: "Instagram" },
								].map((social) => (
									<a
										key={social.label}
										href="#"
										className="h-12 w-12 rounded-xl bg-background border border-secondary/20 flex items-center justify-center text-muted-foreground hover:text-secondary hover:border-secondary hover:shadow-md transition-all duration-300 hover:-translate-y-1"
									>
										<social.icon className="h-5 w-5" />
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
