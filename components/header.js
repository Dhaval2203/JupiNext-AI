"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { primaryColor, secondaryColor } from "@/lib/colors"
import Image from "next/image"

export default function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
	const pathname = usePathname()

	const isActive = (path) => pathname === path

	const NavLink = ({ href, label }) => {
		const active = isActive(href)

		return (
			<Link
				href={href}
				className={`relative text-sm font-medium transition-all duration-200 ${active ? "font-bold" : "text-foreground/70"
					}`}
				style={{ color: active ? primaryColor : undefined }}
				onMouseEnter={(e) => {
					if (!active) e.currentTarget.style.color = secondaryColor
				}}
				onMouseLeave={(e) => {
					if (!active) e.currentTarget.style.color = ""
				}}
			>
				{label}
				{active && (
					<span
						className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full"
						style={{ backgroundColor: primaryColor }}
					/>
				)}
			</Link>
		)
	}

	return (
		<header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">

				{/* LEFT — LOGO */}
				<div className="flex items-center">
					<Link href="/" className="flex items-center">
						<Image
							src="/logo.png"
							alt="JupiNext Logo"
							width={70}
							height={70}
							priority
						/>
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

				{/* CENTER — DESKTOP MENU */}
				<div className="hidden lg:flex items-center gap-x-6 whitespace-nowrap">
					<NavLink href="/" label="Home" />
					<NavLink href="/about" label="About" />
					<NavLink href="/services" label="Services" />
					<NavLink href="/solutions" label="Solutions" />
					<NavLink href="/process" label="Process" />
					<NavLink href="/tech-stack" label="Tech Stack" />
					<NavLink href="/reviews" label="Reviews" />
					<NavLink href="/careers" label="Careers" />
					<NavLink href="/contact" label="Contact" />
				</div>

				{/* RIGHT — CTA */}
				<div className="hidden lg:flex">
					<Button
						asChild
						style={{ backgroundColor: primaryColor, color: "white" }}
						className="hover:opacity-90 transition-opacity"
					>
						<Link href="/contact">Get Started</Link>
					</Button>
				</div>

				{/* MOBILE MENU BUTTON */}
				<div className="lg:hidden">
					<button
						className="rounded-lg p-2 text-foreground"
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
					>
						{mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>
			</nav>

			{/* MOBILE MENU */}
			{mobileMenuOpen && (
				<div className="lg:hidden border-t border-border">
					<div className="space-y-1 px-6 py-4">
						{[
							["Home", "/"],
							["About", "/about"],
							["Services", "/services"],
							["Solutions", "/solutions"],
							["Process", "/process"],
							["Tech Stack", "/tech-stack"],
							["Reviews", "/reviews"],
							["Careers", "/careers"],
							["Contact", "/contact"],
						].map(([label, href]) => {
							const active = isActive(href)
							return (
								<Link
									key={href}
									href={href}
									onClick={() => setMobileMenuOpen(false)}
									className="block rounded-lg px-3 py-2 text-base font-medium transition"
									style={{
										backgroundColor: active
											? "rgba(14,165,164,0.1)"
											: undefined,
										color: active ? primaryColor : undefined,
									}}
								>
									{label}
								</Link>
							)
						})}

						<div className="pt-3">
							<Button
								asChild
								className="w-full"
								style={{ backgroundColor: primaryColor, color: "white" }}
							>
								<Link href="/contact">Get Started</Link>
							</Button>
						</div>
					</div>
				</div>
			)}
		</header>
	)
}
