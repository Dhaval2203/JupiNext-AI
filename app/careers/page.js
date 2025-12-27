import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MapPin, Clock, Briefcase, ArrowRight, Mail, DollarSign } from "lucide-react"
import { primaryColor, accentColor, secondaryColor } from "@/lib/colors"

export default function CareersPage() {
	const jobOpenings = [
		{
			title: "Senior Full Stack Developer",
			department: "Engineering",
			location: "Remote",
			type: "Full-time",
			experience: "5+ years",
			description:
				"We're looking for an experienced full stack developer to join our engineering team and build scalable web applications using modern technologies.",
			requirements: [
				"Strong experience with React, Next.js, and Node.js",
				"Proficiency in TypeScript and JavaScript",
				"Experience with cloud platforms (AWS, Azure, or GCP)",
				"Understanding of database design and SQL",
				"Excellent problem-solving skills",
			],
		},
		{
			title: "Mobile App Developer",
			department: "Engineering",
			location: "Remote",
			type: "Full-time",
			experience: "3+ years",
			description:
				"Join our mobile team to create beautiful, high-performance mobile applications for iOS and Android platforms.",
			requirements: [
				"Experience with React Native or Flutter",
				"Knowledge of native iOS/Android development",
				"Understanding of mobile UI/UX principles",
				"Experience with RESTful APIs",
				"Strong debugging and optimization skills",
			],
		},
		{
			title: "DevOps Engineer",
			department: "Infrastructure",
			location: "Remote",
			type: "Full-time",
			experience: "4+ years",
			description:
				"We need a skilled DevOps engineer to help us build and maintain our cloud infrastructure and CI/CD pipelines.",
			requirements: [
				"Strong experience with AWS, Azure, or GCP",
				"Proficiency in Docker and Kubernetes",
				"Experience with CI/CD tools (Jenkins, GitLab CI, GitHub Actions)",
				"Knowledge of infrastructure as code (Terraform, CloudFormation)",
				"Understanding of monitoring and logging tools",
			],
		},
		{
			title: "UI/UX Designer",
			department: "Design",
			location: "Remote",
			type: "Full-time",
			experience: "3+ years",
			description:
				"Create stunning user interfaces and delightful user experiences for our web and mobile applications.",
			requirements: [
				"Strong portfolio showcasing UI/UX work",
				"Proficiency in Figma, Sketch, or Adobe XD",
				"Understanding of design systems and component libraries",
				"Knowledge of HTML/CSS basics",
				"Excellent communication and collaboration skills",
			],
		},
		{
			title: "AI/ML Engineer",
			department: "Engineering",
			location: "Remote",
			type: "Full-time",
			experience: "4+ years",
			description:
				"Join our AI team to develop cutting-edge machine learning solutions and integrate AI capabilities into our products.",
			requirements: [
				"Strong background in machine learning and deep learning",
				"Experience with Python and ML frameworks (TensorFlow, PyTorch)",
				"Knowledge of NLP and computer vision",
				"Understanding of MLOps practices",
				"Research mindset and problem-solving skills",
			],
		},
		{
			title: "Project Manager",
			department: "Management",
			location: "Remote",
			type: "Full-time",
			experience: "5+ years",
			description:
				"Lead and coordinate software development projects, ensuring timely delivery and client satisfaction.",
			requirements: [
				"Proven experience in IT project management",
				"Strong understanding of Agile/Scrum methodologies",
				"Excellent communication and leadership skills",
				"PMP or similar certification preferred",
				"Experience with project management tools (Jira, Asana)",
			],
		},
	]

	return (
		<div className="min-h-screen">
			<head>
				<title>Careers at JupiNext | Join Our Team</title>
				<meta name="description" content="Explore exciting career opportunities at JupiNext. Join our team of innovators and contribute to building modern web, cloud, and blockchain solutions." />
				<meta name="keywords" content="JupiNext careers, job openings, software developer jobs, UI/UX designer jobs, DevOps engineer, project manager, technology jobs, remote jobs" />
				<meta property="og:title" content="Careers at JupiNext - Join Our Team" />
				<meta property="og:description" content="Discover open positions at JupiNext and build your career with a company that values innovation, growth, and collaboration." />
			</head>
			<Header />

			{/* Hero Section */}
			<section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30 px-6 py-24 lg:px-8">
				<div className="mx-auto max-w-4xl text-center">
					<h1 className="text-balance text-5xl font-bold tracking-tight sm:text-6xl">
						Join <span style={{ color: primaryColor }}>Our</span> <span style={{ color: secondaryColor }}>Team</span>
					</h1>
					<p className="mt-6 text-pretty text-lg leading-8 text-muted-foreground">
						Build the future with us. We're looking for talented individuals who are passionate about technology and
						innovation.
					</p>
				</div>
			</section>

			{/* Why Join Section */}
			<section className="px-6 py-24 lg:px-8">
				<div className="mx-auto max-w-7xl">
					<div className="text-center">
						<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
							Why Work at <span style={{ color: primaryColor }}>Jupi</span>
							<span style={{ color: secondaryColor }}>Next</span>
						</h2>
						<p className="mt-4 text-lg text-muted-foreground">
							We offer more than just a job - we offer a career path and a supportive environment
						</p>
					</div>

					<div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
						<Card className="rounded-xl border border-border bg-card p-6 text-center">
							<div className="mx-auto mb-4 inline-flex rounded-full bg-primary/10 p-4">
								<Briefcase className="h-6 w-6 text-primary" />
							</div>
							<h3 className="text-lg font-semibold text-foreground">Remote Flexibility</h3>
							<p className="mt-2 text-sm text-muted-foreground">
								Work from anywhere with flexible hours that suit your lifestyle
							</p>
						</Card>

						<Card className="rounded-xl border border-border bg-card p-6 text-center">
							<div className="mx-auto mb-4 inline-flex rounded-full bg-primary/10 p-4">
								<DollarSign className="h-6 w-6 text-primary" />
							</div>
							<h3 className="text-lg font-semibold text-foreground">Competitive Salary</h3>
							<p className="mt-2 text-sm text-muted-foreground">
								Industry-leading compensation with performance bonuses
							</p>
						</Card>

						<Card className="rounded-xl border border-border bg-card p-6 text-center">
							<div className="mx-auto mb-4 inline-flex rounded-full bg-primary/10 p-4">
								<svg
									className="h-6 w-6 text-primary"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth={2}
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
									/>
								</svg>
							</div>
							<h3 className="text-lg font-semibold text-foreground">Learning Budget</h3>
							<p className="mt-2 text-sm text-muted-foreground">
								Annual budget for courses, conferences, and certifications
							</p>
						</Card>

						<Card className="rounded-xl border border-border bg-card p-6 text-center">
							<div className="mx-auto mb-4 inline-flex rounded-full bg-primary/10 p-4">
								<svg
									className="h-6 w-6 text-primary"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth={2}
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
									/>
								</svg>
							</div>
							<h3 className="text-lg font-semibold text-foreground">Great Team</h3>
							<p className="mt-2 text-sm text-muted-foreground">
								Work with talented, supportive colleagues who share your passion
							</p>
						</Card>
					</div>
				</div>
			</section>

			{/* Job Openings Section */}
			<section className="bg-muted/30 px-6 py-24 lg:px-8">
				<div className="mx-auto max-w-7xl">
					<div className="text-center">
						<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
							<span style={{ color: primaryColor }}>Open</span> <span style={{ color: secondaryColor }}>Positions</span>
						</h2>
						<p className="mt-4 text-lg text-muted-foreground">Find your next opportunity with us</p>
					</div>

					<div className="mt-16 space-y-6">
						{jobOpenings.map((job, index) => (
							<Card
								key={index}
								className="rounded-xl border border-border bg-card p-8 transition-all hover:shadow-lg"
							>
								<div className="flex flex-col lg:flex-row gap-6">
									{/* Left: Job Details */}
									<div className="flex-1">
										<h3 className="text-2xl font-bold text-foreground text-primary">{job.title}</h3>
										<div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground text-secondary">
											<div className="flex items-center gap-2">
												<Briefcase className="h-4 w-4" />
												{job.department}
											</div>
											<div className="flex items-center gap-2">
												<MapPin className="h-4 w-4" />
												{job.location}
											</div>
											<div className="flex items-center gap-2">
												<Clock className="h-4 w-4" />
												{job.type}
											</div>
											<div className="flex items-center gap-2">
												<svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
													/>
												</svg>
												{job.experience}
											</div>
										</div>
										<p className="mt-4 text-muted-foreground">{job.description}</p>
										<div className="mt-4">
											<h4 className="font-semibold text-foreground" style={{ color: accentColor }}>Requirements:</h4>
											<ul className="mt-2 space-y-1 text-sm text-muted-foreground">
												{job.requirements.map((req, idx) => (
													<li key={idx} className="flex items-start gap-2">
														<span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-secondary" />
														{req}
													</li>
												))}
											</ul>
										</div>
									</div>

									{/* Right: Apply Section */}
									<div className="flex flex-col justify-between lg:w-64 border-l border-border/50 pl-6">
										{/* Top Content */}
										<div>
											<h4 className="text-lg font-semibold text-foreground">Expected Joining</h4>
											<p className="mt-1 text-sm text-muted-foreground">ASAP or as per notice period</p>

											<div className="mt-6 text-sm text-muted-foreground space-y-2">
												<p>
													<span className="font-semibold">Recruiter:</span> hr@jupinext.com
												</p>
												<p>
													<span className="font-semibold">Process:</span> Resume Screening → HR Interview → Technical Interview → Manager Round → Offer → Onboarding
												</p>
												<p>
													<span className="font-semibold">Location:</span> Remote
												</p>
											</div>
										</div>

										{/* Bottom-left Button */}
										<div className="mt-6">
											<a
												href="mailto:hr@jupinext.com"
												className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
											>
												<Mail className="mr-2 h-4 w-4" />
												Apply Now
											</a>
										</div>
									</div>
								</div>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="px-6 py-24 lg:px-8">
				<Card className="mx-auto max-w-4xl rounded-xl border border-border bg-card p-12 text-center">
					<h2 className="text-3xl font-bold sm:text-4xl">
						Don't <span style={{ color: primaryColor }}>See Your</span>{" "}
						<span style={{ color: secondaryColor }}>Role?</span>
					</h2>
					<p className="mt-4 text-lg text-muted-foreground">
						We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future
						opportunities.
					</p>
					<div className="mt-8">
						<Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
							<a href="mailto:hr@jupinext.com">
								Send Your Resume
								<ArrowRight className="ml-2 h-4 w-4" />
							</a>
						</Button>
					</div>
				</Card>
			</section>

			<Footer />
		</div>
	)
}
