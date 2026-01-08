import Header from "@/components/header"
import Footer from "@/components/footer"
import HomeContent from "@/components/pages/home-content"
import { FileSearch, Layout, Code, TestTube, Rocket, Wrench } from "lucide-react"

export const metadata = {
  title: "JupiNext - Where the Next Begins | IT Solutions & Services",
  description:
    "Your future-ready IT partner delivering innovative solutions in web development, mobile applications, cloud infrastructure, and cutting-edge AI technology.",
  keywords: "IT solutions, web development, mobile apps, cloud solutions, AI automation, blockchain, JupiNext",
  openGraph: {
    title: "JupiNext - Where the Next Begins",
    description: "Innovative IT solutions for your business growth",
    type: "website",
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <HomeContent />
      <Footer />
    </div>
  )
}
