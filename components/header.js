"use client"

import { Button } from "@/components/ui/button"
import { primaryColor, secondaryBackgroundColor, secondaryColor } from "@/lib/colors"
import { ChevronDown, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { whiteColor } from "../lib/colors"

export default function Header() {
	const pathname = usePathname()
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
	const [companyOpen, setCompanyOpen] = useState(false)

	const companyRoutes = [
		"/about",
		"/process",
		"/tech-stack",
		"/reviews",
		"/careers",
	]

	const isCompanyActive = companyRoutes.includes(pathname)
	const isActive = (path) => pathname === path

	// Auto open Company on mobile if child is active
	useEffect(() => {
		if (isCompanyActive) setCompanyOpen(true)
	}, [isCompanyActive])

	/* ========= MAIN NAV LINK (UNCHANGED) ========= */
	const NavLink = ({ href, label }) => {
		const active = isActive(href)

		return (
			<Link
				href={href}
				className={`relative text-sm font-medium transition-all ${active ? "font-bold" : "text-foreground/70"
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
		<header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur">
			<nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">

				{/* LOGO */}
				<Link href="/" className="flex items-center">
					<Image src="/logo.png" alt="JupiNext Logo" width={70} height={70} priority />
					<span style={{ marginLeft: "-5%" }}>
						<Image
							src="/JupiNextName.png"
							alt="JupiNext Name"
							width={250}
							height={100}
							priority
						/>
					</span>
				</Link>

				{/* DESKTOP MAIN MENU (OLD STYLE) */}
				<div className="hidden lg:flex items-center gap-x-6">
					<NavLink href="/" label="Home" />
					<NavLink href="/services" label="Services" />
					<NavLink href="/solutions" label="Solutions" />

					{/* COMPANY */}
					<div className="relative group">
						<button
							className={`flex items-center gap-1 text-sm font-medium ${isCompanyActive ? "font-bold" : "text-foreground/70"
								}`}
							style={{ color: isCompanyActive ? primaryColor : undefined }}
						>
							Company
							<ChevronDown size={16} />
						</button>

						{/* MODERN SUB MENU */}
						<div className="absolute left-0 top-full mt-3 w-60 rounded-2xl border border-border bg-background shadow-xl opacity-0 invisible group-hover:visible group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-200">
							<div className="p-2">
								<DropdownItem href="/about" label="About Us" />
								<DropdownItem href="/process" label="Our Process" />
								<DropdownItem href="/tech-stack" label="Tech Stack" />
								<DropdownItem href="/reviews" label="Reviews" />
								<DropdownItem href="/careers" label="Careers" />
							</div>
						</div>
					</div>

					<NavLink href="/contact" label="Contact" />
				</div>

				{/* CTA */}
				<div className="hidden lg:flex">
					<Button asChild style={{ backgroundColor: primaryColor, color: whiteColor }}>
						<Link href="/contact">Get Started</Link>
					</Button>
				</div>

				{/* MOBILE TOGGLE */}
				<div className="lg:hidden text-secondary">
					<button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
						{mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>
			</nav>

			{/* MOBILE MENU */}
			{mobileMenuOpen && (
				<div className="lg:hidden border-t border-border">
					<div className="px-6 py-4 space-y-2">

						{/* MAIN MENU – OLD STYLE */}
						<MobileMainLink label="Home" href="/" />
						<MobileMainLink label="Services" href="/services" />
						<MobileMainLink label="Solutions" href="/solutions" />

						{/* COMPANY */}
						<button
							onClick={() => setCompanyOpen(!companyOpen)}
							className="flex w-full items-center justify-between px-3 py-2 font-medium"
							style={{ color: isCompanyActive ? primaryColor : undefined }}
						>
							Company <ChevronDown size={18} />
						</button>

						{/* MODERN SUB MENU */}
						{companyOpen && (
							<div className="ml-2">
								<MobileSubLink href="/about" label="About Us" />
								<MobileSubLink href="/process" label="Our Process" />
								<MobileSubLink href="/tech-stack" label="Tech Stack" />
								<MobileSubLink href="/reviews" label="Reviews" />
								<MobileSubLink href="/careers" label="Careers" />
							</div>
						)}

						<MobileMainLink label="Contact" href="/contact" />

						<Button
							asChild
							className="w-full mt-3"
							style={{ backgroundColor: primaryColor, color: whiteColor }}
						>
							<Link href="/contact">Get Started</Link>
						</Button>
					</div>
				</div>
			)}
		</header>
	)
}

/* ========= DESKTOP SUB MENU ========= */
function DropdownItem({ href, label }) {
	const pathname = usePathname()
	const active = pathname === href

	return (
		<Link
			href={href}
			className="flex items-center gap-3 px-4 py-3 text-sm transition-all hover:translate-x-1"
			style={{
				backgroundColor: active ? secondaryBackgroundColor : undefined,
				color: active ? secondaryColor : undefined,
			}}
		>
			{/* <span
				className="h-2 w-2"
				style={{ backgroundColor: active ? secondaryColor : primaryColor }}
			/> */}
			{label}
		</Link>
	)
}

/* ========= MOBILE MAIN MENU ========= */
function MobileMainLink({ label, href }) {
	const pathname = usePathname()
	const active = pathname === href

	return (
		<Link
			href={href}
			className="block px-3 py-2 font-medium"
			style={{ color: active ? primaryColor : undefined }}
		>
			{label}
		</Link>
	)
}

/* ========= MOBILE SUB MENU ========= */
function MobileSubLink({ href, label }) {
	const pathname = usePathname()
	const active = pathname === href

	return (
		<Link
			href={href}
			className="flex items-center gap-3 px-4 py-3 text-sm transition-all"
			style={{
				backgroundColor: active ? secondaryBackgroundColor : undefined,
				color: active ? secondaryColor : undefined,
			}}
		>
			{/* <span
				className="h-2 w-2"
				style={{ backgroundColor: active ? secondaryColor : primaryColor }}
			/> */}
			{label}
		</Link>
	)
}

