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

const softwareDevelopmentProcessSteps = [
  {
    title: "Requirement Analysis",
    description:
      "Gain a clear understanding of your requirements, goals, and the challenges the software is designed to solve.",
    icon: FileSearch,
  },
  {
    title: "Planning & Design",
    description:
      "Develop a comprehensive plan and blueprint & design a detailed strategy that includes a well-structured architecture, intuitive user interface, and seamless user experience.",
    icon: Layout,
  },
  {
    title: "Development",
    description:
      "Develop software by ensuring each module is aligned with the design and integrates seamlessly with the overall functionality.",
    icon: Code,
  },
  {
    title: "Testing",
    description:
      "Conduct thorough evaluations to identify and resolve bugs, optimize performance, and ensure reliability.",
    icon: TestTube,
  },
  {
    title: "Deployment",
    description: "Deploy the software in a live environment, ensuring it is available for end-users.",
    icon: Rocket,
  },
  {
    title: "Maintenance & Support",
    description:
      "Offer continuous support to manage updates, resolve issues, and implement improvements, ensuring the software remains optimized.",
    icon: Wrench,
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <HomeContent />
      <Footer />
    </div>
  )
}
