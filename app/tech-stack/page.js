import Footer from "@/components/footer"
import Header from "@/components/header"
import { Card } from "@/components/ui/card"
import { accentColor, primaryColor, secondaryColor } from "@/lib/colors"

// React Icons
import { FaAws, FaJava, FaVuejs } from "react-icons/fa"
import { LuHardHat } from "react-icons/lu"
import {
	SiAmazondynamodb,
	SiAmazons3,
	SiAngular,
	SiAnsible,
	SiDocker,
	SiDotnet,
	SiEthereum,
	SiExpress,
	SiGit,
	SiGithubactions,
	SiGitlab,
	SiGo,
	SiGooglecloud,
	SiIpfs,
	SiJenkins,
	SiKubernetes,
	SiMongodb,
	SiMysql,
	SiNextdotjs,
	SiPostgresql,
	SiPython,
	SiReact,
	SiRedis,
	SiRust,
	SiSolana,
	SiSolidity,
	SiTailwindcss,
	SiTerraform,
	SiVercel,
	SiWeb3Dotjs
} from "react-icons/si"
import { TbBrandTypescript } from "react-icons/tb"
import { VscAzure, VscAzureDevops } from "react-icons/vsc"

export const metadata = {
	title: "Technology Stack | Modern Web, Cloud & Blockchain Technologies - JupiNext",
	description:
		"Explore our technology stack: React, Next.js, Node.js, Python, AWS, Azure, PostgreSQL, MongoDB, Docker, Kubernetes, Ethereum, and more cutting-edge technologies.",
	keywords:
		"technology stack, React, Next.js, Node.js, AWS, Azure, blockchain, Ethereum, Docker, Kubernetes, web technologies",
	openGraph: {
		title: "JupiNext Technology Stack - Industry-Leading Tools",
		description: "Building with the best technologies for robust solutions",
		type: "website",
	},
}

const techSections = [
	{
		title: "Frontend",
		subtitle: "Modern UI frameworks and libraries",
		color: primaryColor,
		bg: "px-6 py-16 lg:px-8",
		items: [
			{ label: "React", icon: SiReact, color: "text-primary" },
			{ label: "Next.js", icon: SiNextdotjs, color: "text-foreground" },
			{ label: "Vue.js", icon: FaVuejs, color: "text-accent" },
			{ label: "TypeScript", icon: TbBrandTypescript, color: "text-primary" },
			{ label: "Tailwind CSS", icon: SiTailwindcss, color: "text-accent" },
			{ label: "Angular", icon: SiAngular, color: "text-secondary" },
		],
	},
	{
		title: "Backend",
		subtitle: "Powerful server-side technologies",
		color: secondaryColor,
		bg: "bg-muted/30 px-6 py-16 lg:px-8",
		items: [
			{ label: ".NET", icon: SiDotnet, color: "text-primary" },
			{ label: "Node.js", icon: VscAzure, color: "text-primary" },
			{ label: "Express.js", icon: SiExpress, color: "text-foreground" },
			{ label: "Java", icon: FaJava, color: "text-secondary" },
			{ label: "Python", icon: SiPython, color: "text-accent" },
			{ label: "Rust", icon: SiRust, color: "text-primary" },
			{ label: "Golang", icon: SiGo, color: "text-accent" },
		],
	},
	{
		title: "Cloud Infrastructure",
		subtitle: "Scalable cloud services and deployment",
		color: accentColor,
		bg: "px-6 py-16 lg:px-8",
		items: [
			{ label: "AWS", icon: FaAws, color: "text-secondary" },
			{ label: "Azure", icon: VscAzureDevops, color: "text-accent" },
			{ label: "Google Cloud", icon: SiGooglecloud, color: "text-primary" },
			{ label: "Vercel", icon: SiVercel, color: "text-foreground" },
			{ label: "Docker", icon: SiDocker, color: "text-accent" },
			{ label: "Kubernetes", icon: SiKubernetes, color: "text-primary" },
		],
	},
	{
		title: "Database Storage",
		subtitle: "Reliable data management solutions",
		color: primaryColor,
		bg: "bg-muted/30 px-6 py-16 lg:px-8",
		items: [
			{ label: "PostgreSQL", icon: SiPostgresql, color: "text-accent" },
			{ label: "MongoDB", icon: SiMongodb, color: "text-primary" },
			{ label: "Redis", icon: SiRedis, color: "text-secondary" },
			{ label: "MySQL", icon: SiMysql, color: "text-accent" },
			{ label: "DynamoDB", icon: SiAmazondynamodb, color: "text-primary" },
			{ label: "Amazon S3", icon: SiAmazons3, color: "text-foreground" },
		],
	},
	{
		title: "DevOps CI/CD",
		subtitle: "Automation and continuous delivery",
		color: secondaryColor,
		bg: "px-6 py-16 lg:px-8",
		items: [
			{ label: "Git", icon: SiGit, color: "text-secondary" },
			{ label: "GitHub Actions", icon: SiGithubactions, color: "text-foreground" },
			{ label: "GitLab CI", icon: SiGitlab, color: "text-primary" },
			{ label: "Jenkins", icon: SiJenkins, color: "text-accent" },
			{ label: "Terraform", icon: SiTerraform, color: "text-primary" },
			{ label: "Ansible", icon: SiAnsible, color: "text-secondary" },
		],
	},
	{
		title: "Blockchain Web3",
		subtitle: "Decentralized technologies",
		color: accentColor,
		bg: "bg-muted/30 px-6 py-16 lg:px-8",
		items: [
			{ label: "Ethereum", icon: SiEthereum, color: "text-accent" },
			{ label: "Solana", icon: SiSolana, color: "text-primary" },
			{ label: "Web3.js", icon: SiWeb3Dotjs, color: "text-secondary" },
			{ label: "Solidity", icon: SiSolidity, color: "text-accent" },
			{ label: "Hardhat", icon: LuHardHat, color: "text-primary" },
			{ label: "IPFS", icon: SiIpfs, color: "text-foreground" },
		],
	},
]

export default function TechStackPage() {
	return (
		<div className="min-h-screen">
			<Header />

			{/* Hero Section */}
			<section className="bg-gradient-to-b from-background to-muted/30 px-6 py-24 lg:px-8">
				<div className="mx-auto max-w-4xl text-center">
					<h1 className="text-balance text-5xl font-bold tracking-tight sm:text-6xl">
						<span style={{ color: primaryColor }}>Technology</span>{" "}
						<span style={{ color: secondaryColor }}>Stack</span>
					</h1>
					<p className="mt-6 text-pretty text-lg leading-8 text-muted-foreground">
						We leverage industry-leading technologies to build robust, scalable, and future-proof solutions.
					</p>
				</div>
			</section>

			{/* Tech Sections */}
			{techSections.map((section, idx) => (
				<section key={idx} className={section.bg}>
					<div className="mx-auto max-w-7xl">
						<div className="mb-12">
							<h2 className="text-3xl font-bold" style={{ color: section.color }}>
								{section.title}
							</h2>
							<p className="mt-2 text-muted-foreground">{section.subtitle}</p>
						</div>

						<div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
							{section.items.map((tech, i) => {
								const Icon = tech.icon
								return (
									<Card
										key={i}
										className="flex flex-col items-center justify-center rounded-xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:-translate-y-1"
									>
										<Icon className={`text-4xl ${tech.color}`} />
										<p className="mt-3 text-center text-sm font-medium text-foreground">{tech.label}</p>
									</Card>
								)
							})}
						</div>
					</div>
				</section>
			))}

			<Footer />
		</div>
	)
}
