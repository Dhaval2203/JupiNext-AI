import Header from "@/components/header"
import Footer from "@/components/footer"
import AboutContent from "@/components/pages/about-content"

export const metadata = {
  title: "About JupiNext | Our Mission, Vision & Values",
  description:
    "Empowering businesses with innovative technology solutions since 2016. Learn about JupiNext's mission, vision, core values, and journey in transforming the IT industry.",
  keywords: "about JupiNext, IT company mission, technology vision, company values, IT solutions provider",
  openGraph: {
    title: "About JupiNext - Innovative IT Solutions Provider",
    description: "Discover our mission to deliver cutting-edge IT solutions",
    type: "website",
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <AboutContent />
      <Footer />
    </div>
  )
}
