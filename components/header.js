"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path) => pathname === path

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="text-2xl font-bold">
              <span style={{ color: "#0ea5a4" }}>Jupi</span>
              <span style={{ color: "#ef4444" }}>Next</span>
            </span>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-lg p-2.5 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Toggle menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-8">
          <Link
            href="/"
            className={`text-sm font-medium leading-6 transition-all duration-200 relative ${
              isActive("/") ? "font-bold" : "text-foreground/70"
            }`}
            style={{
              color: isActive("/") ? "#0ea5a4" : undefined,
            }}
            onMouseEnter={(e) => {
              if (!isActive("/")) e.currentTarget.style.color = "#0ea5a4"
            }}
            onMouseLeave={(e) => {
              if (!isActive("/")) e.currentTarget.style.color = ""
            }}
          >
            Home
            {isActive("/") && (
              <span
                className="absolute -bottom-1 left-0 w-full h-0.5 rounded-full"
                style={{ backgroundColor: "#0ea5a4" }}
              ></span>
            )}
          </Link>
          <Link
            href="/about"
            className={`text-sm font-medium leading-6 transition-all duration-200 relative ${
              isActive("/about") ? "font-bold" : "text-foreground/70"
            }`}
            style={{
              color: isActive("/about") ? "#0ea5a4" : undefined,
            }}
            onMouseEnter={(e) => {
              if (!isActive("/about")) e.currentTarget.style.color = "#0ea5a4"
            }}
            onMouseLeave={(e) => {
              if (!isActive("/about")) e.currentTarget.style.color = ""
            }}
          >
            About
            {isActive("/about") && (
              <span
                className="absolute -bottom-1 left-0 w-full h-0.5 rounded-full"
                style={{ backgroundColor: "#0ea5a4" }}
              ></span>
            )}
          </Link>
          <Link
            href="/services"
            className={`text-sm font-medium leading-6 transition-all duration-200 relative ${
              isActive("/services") ? "font-bold" : "text-foreground/70"
            }`}
            style={{
              color: isActive("/services") ? "#0ea5a4" : undefined,
            }}
            onMouseEnter={(e) => {
              if (!isActive("/services")) e.currentTarget.style.color = "#0ea5a4"
            }}
            onMouseLeave={(e) => {
              if (!isActive("/services")) e.currentTarget.style.color = ""
            }}
          >
            Services
            {isActive("/services") && (
              <span
                className="absolute -bottom-1 left-0 w-full h-0.5 rounded-full"
                style={{ backgroundColor: "#0ea5a4" }}
              ></span>
            )}
          </Link>
          <Link
            href="/solutions"
            className={`text-sm font-medium leading-6 transition-all duration-200 relative ${
              isActive("/solutions") ? "font-bold" : "text-foreground/70"
            }`}
            style={{
              color: isActive("/solutions") ? "#0ea5a4" : undefined,
            }}
            onMouseEnter={(e) => {
              if (!isActive("/solutions")) e.currentTarget.style.color = "#0ea5a4"
            }}
            onMouseLeave={(e) => {
              if (!isActive("/solutions")) e.currentTarget.style.color = ""
            }}
          >
            Solutions
            {isActive("/solutions") && (
              <span
                className="absolute -bottom-1 left-0 w-full h-0.5 rounded-full"
                style={{ backgroundColor: "#0ea5a4" }}
              ></span>
            )}
          </Link>
          <Link
            href="/process"
            className={`text-sm font-medium leading-6 transition-all duration-200 relative ${
              isActive("/process") ? "font-bold" : "text-foreground/70"
            }`}
            style={{
              color: isActive("/process") ? "#0ea5a4" : undefined,
            }}
            onMouseEnter={(e) => {
              if (!isActive("/process")) e.currentTarget.style.color = "#0ea5a4"
            }}
            onMouseLeave={(e) => {
              if (!isActive("/process")) e.currentTarget.style.color = ""
            }}
          >
            Process
            {isActive("/process") && (
              <span
                className="absolute -bottom-1 left-0 w-full h-0.5 rounded-full"
                style={{ backgroundColor: "#0ea5a4" }}
              ></span>
            )}
          </Link>
          <Link
            href="/tech-stack"
            className={`text-sm font-medium leading-6 transition-all duration-200 relative ${
              isActive("/tech-stack") ? "font-bold" : "text-foreground/70"
            }`}
            style={{
              color: isActive("/tech-stack") ? "#0ea5a4" : undefined,
            }}
            onMouseEnter={(e) => {
              if (!isActive("/tech-stack")) e.currentTarget.style.color = "#0ea5a4"
            }}
            onMouseLeave={(e) => {
              if (!isActive("/tech-stack")) e.currentTarget.style.color = ""
            }}
          >
            Tech Stack
            {isActive("/tech-stack") && (
              <span
                className="absolute -bottom-1 left-0 w-full h-0.5 rounded-full"
                style={{ backgroundColor: "#0ea5a4" }}
              ></span>
            )}
          </Link>
          <Link
            href="/reviews"
            className={`text-sm font-medium leading-6 transition-all duration-200 relative ${
              isActive("/reviews") ? "font-bold" : "text-foreground/70"
            }`}
            style={{
              color: isActive("/reviews") ? "#0ea5a4" : undefined,
            }}
            onMouseEnter={(e) => {
              if (!isActive("/reviews")) e.currentTarget.style.color = "#0ea5a4"
            }}
            onMouseLeave={(e) => {
              if (!isActive("/reviews")) e.currentTarget.style.color = ""
            }}
          >
            Reviews
            {isActive("/reviews") && (
              <span
                className="absolute -bottom-1 left-0 w-full h-0.5 rounded-full"
                style={{ backgroundColor: "#0ea5a4" }}
              ></span>
            )}
          </Link>
          <Link
            href="/careers"
            className={`text-sm font-medium leading-6 transition-all duration-200 relative ${
              isActive("/careers") ? "font-bold" : "text-foreground/70"
            }`}
            style={{
              color: isActive("/careers") ? "#0ea5a4" : undefined,
            }}
            onMouseEnter={(e) => {
              if (!isActive("/careers")) e.currentTarget.style.color = "#0ea5a4"
            }}
            onMouseLeave={(e) => {
              if (!isActive("/careers")) e.currentTarget.style.color = ""
            }}
          >
            Careers
            {isActive("/careers") && (
              <span
                className="absolute -bottom-1 left-0 w-full h-0.5 rounded-full"
                style={{ backgroundColor: "#0ea5a4" }}
              ></span>
            )}
          </Link>
          <Link
            href="/contact"
            className={`text-sm font-medium leading-6 transition-all duration-200 relative ${
              isActive("/contact") ? "font-bold" : "text-foreground/70"
            }`}
            style={{
              color: isActive("/contact") ? "#0ea5a4" : undefined,
            }}
            onMouseEnter={(e) => {
              if (!isActive("/contact")) e.currentTarget.style.color = "#0ea5a4"
            }}
            onMouseLeave={(e) => {
              if (!isActive("/contact")) e.currentTarget.style.color = ""
            }}
          >
            Contact
            {isActive("/contact") && (
              <span
                className="absolute -bottom-1 left-0 w-full h-0.5 rounded-full"
                style={{ backgroundColor: "#0ea5a4" }}
              ></span>
            )}
          </Link>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button
            asChild
            style={{ backgroundColor: "#0ea5a4", color: "white" }}
            className="hover:opacity-90 transition-opacity"
          >
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="space-y-1 px-6 pb-4 pt-2">
            <Link
              href="/"
              className={`block rounded-lg px-3 py-2 text-base font-medium transition-all ${
                isActive("/") ? "font-bold" : "text-foreground/70"
              }`}
              style={{
                backgroundColor: isActive("/") ? "rgba(14, 165, 164, 0.1)" : undefined,
                color: isActive("/") ? "#0ea5a4" : undefined,
              }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`block rounded-lg px-3 py-2 text-base font-medium transition-all ${
                isActive("/about") ? "font-bold" : "text-foreground/70"
              }`}
              style={{
                backgroundColor: isActive("/about") ? "rgba(14, 165, 164, 0.1)" : undefined,
                color: isActive("/about") ? "#0ea5a4" : undefined,
              }}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className={`block rounded-lg px-3 py-2 text-base font-medium transition-all ${
                isActive("/services") ? "font-bold" : "text-foreground/70"
              }`}
              style={{
                backgroundColor: isActive("/services") ? "rgba(14, 165, 164, 0.1)" : undefined,
                color: isActive("/services") ? "#0ea5a4" : undefined,
              }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/solutions"
              className={`block rounded-lg px-3 py-2 text-base font-medium transition-all ${
                isActive("/solutions") ? "font-bold" : "text-foreground/70"
              }`}
              style={{
                backgroundColor: isActive("/solutions") ? "rgba(14, 165, 164, 0.1)" : undefined,
                color: isActive("/solutions") ? "#0ea5a4" : undefined,
              }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Solutions
            </Link>
            <Link
              href="/process"
              className={`block rounded-lg px-3 py-2 text-base font-medium transition-all ${
                isActive("/process") ? "font-bold" : "text-foreground/70"
              }`}
              style={{
                backgroundColor: isActive("/process") ? "rgba(14, 165, 164, 0.1)" : undefined,
                color: isActive("/process") ? "#0ea5a4" : undefined,
              }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Process
            </Link>
            <Link
              href="/tech-stack"
              className={`block rounded-lg px-3 py-2 text-base font-medium transition-all ${
                isActive("/tech-stack") ? "font-bold" : "text-foreground/70"
              }`}
              style={{
                backgroundColor: isActive("/tech-stack") ? "rgba(14, 165, 164, 0.1)" : undefined,
                color: isActive("/tech-stack") ? "#0ea5a4" : undefined,
              }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Tech Stack
            </Link>
            <Link
              href="/reviews"
              className={`block rounded-lg px-3 py-2 text-base font-medium transition-all ${
                isActive("/reviews") ? "font-bold" : "text-foreground/70"
              }`}
              style={{
                backgroundColor: isActive("/reviews") ? "rgba(14, 165, 164, 0.1)" : undefined,
                color: isActive("/reviews") ? "#0ea5a4" : undefined,
              }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Reviews
            </Link>
            <Link
              href="/careers"
              className={`block rounded-lg px-3 py-2 text-base font-medium transition-all ${
                isActive("/careers") ? "font-bold" : "text-foreground/70"
              }`}
              style={{
                backgroundColor: isActive("/careers") ? "rgba(14, 165, 164, 0.1)" : undefined,
                color: isActive("/careers") ? "#0ea5a4" : undefined,
              }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Careers
            </Link>
            <Link
              href="/contact"
              className={`block rounded-lg px-3 py-2 text-base font-medium transition-all ${
                isActive("/contact") ? "font-bold" : "text-foreground/70"
              }`}
              style={{
                backgroundColor: isActive("/contact") ? "rgba(14, 165, 164, 0.1)" : undefined,
                color: isActive("/contact") ? "#0ea5a4" : undefined,
              }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-2">
              <Button asChild className="w-full" style={{ backgroundColor: "#0ea5a4", color: "white" }}>
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
