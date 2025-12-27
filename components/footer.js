import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-border bg-accent">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-bold text-accent-foreground">JupiNext</h3>
            <p className="mt-2 text-sm text-accent-foreground/80">Where the Next Begins</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-accent-foreground">Company</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/about" className="text-sm text-accent-foreground/80 hover:text-accent-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-accent-foreground/80 hover:text-accent-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-accent-foreground">Services</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/services" className="text-sm text-accent-foreground/80 hover:text-accent-foreground">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-accent-foreground/80 hover:text-accent-foreground">
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-accent-foreground/80 hover:text-accent-foreground">
                  Cloud Solutions
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-accent-foreground/80 hover:text-accent-foreground">
                  UI/UX Design
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-accent-foreground">Follow Us</h4>
            <div className="mt-4 flex gap-4">
              <a href="#" className="text-accent-foreground/80 hover:text-accent-foreground">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-accent-foreground/80 hover:text-accent-foreground">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="#" className="text-accent-foreground/80 hover:text-accent-foreground">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-accent-foreground/20 pt-8">
          <p className="text-center text-sm text-accent-foreground/80">
            © {new Date().getFullYear()} JupiNext – Where the Next Begins
          </p>
        </div>
      </div>
    </footer>
  )
}
