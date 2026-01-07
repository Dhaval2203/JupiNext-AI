"use client"

import Footer from "@/components/footer"
import Header from "@/components/header"
import { Card } from "@/components/ui/card"
import { primaryColor, secondaryColor } from "@/lib/colors"
import { Star, Quote } from "lucide-react"
import { useState } from "react"
import { useCounter } from '../../lib/useCounter.js'

export default function ReviewsPage() {
	const [flippedCards, setFlippedCards] = useState({})

	const reviews = [
		{
			name: "Michael Johnson",
			role: "Chief Technology Officer",
			rating: 5,
			review:
				"JupiNext transformed our legacy system into a modern, scalable platform. Their expertise in cloud solutions and attention to detail exceeded our expectations. The team was professional and delivered on time. I highly recommend their services to anyone looking for top-notch software development.",
			highlights: ["transformed", "expertise", "exceeded", "professional", "highly recommend"],
			initials: "MJ",
		},
		{
			name: "Sarah Parker",
			role: "Product Manager",
			rating: 5,
			review:
				"Working with JupiNext on our mobile app was a game-changer. They understood our vision perfectly and delivered a beautiful, intuitive app that our users love. The communication throughout the project was excellent, and they were always responsive to our feedback. Highly recommend their mobile development services!",
			highlights: [
				"game-changer",
				"understood",
				"perfectly",
				"beautiful",
				"excellent",
				"responsive",
				"Highly recommend",
			],
			initials: "SP",
		},
		{
			name: "David Chen",
			role: "Operations Director",
			rating: 4,
			review:
				"The blockchain solution JupiNext built for our supply chain has revolutionized our operations. Their deep technical knowledge and innovative approach helped us achieve transparency we never thought possible. The implementation was smooth, and their ongoing support has been fantastic.",
			highlights: ["revolutionized", "deep technical knowledge", "innovative", "smooth", "fantastic"],
			initials: "DC",
		},
		{
			name: "Emily Rodriguez",
			role: "Marketing Director",
			rating: 5,
			review:
				"JupiNext created an amazing website for our business that perfectly captures our brand identity. The design is modern and clean, and the performance is excellent. They were patient with our requests and made sure everything was exactly as we wanted. Couldn't be happier with the results!",
			highlights: ["amazing", "perfectly", "modern", "excellent", "patient", "happier"],
			initials: "ER",
		},
		{
			name: "James Wilson",
			role: "Startup Founder",
			rating: 5,
			review:
				"As a startup, we needed a reliable partner to build our MVP quickly without compromising on quality. JupiNext delivered beyond our expectations. Their agile approach and technical expertise helped us launch on time and within budget. The team truly understood our vision and brought it to life.",
			highlights: ["reliable", "beyond our expectations", "expertise", "on time", "within budget", "truly understood"],
			initials: "JW",
		},
		{
			name: "Lisa Anderson",
			role: "Head of Engineering",
			rating: 5,
			review:
				"The DevOps and cloud infrastructure setup that JupiNext implemented for us has been rock solid. Our deployment times have improved significantly, and system reliability has never been better. Their team's knowledge of modern cloud technologies is impressive, and they provided excellent training to our internal team.",
			highlights: ["rock solid", "improved significantly", "never been better", "impressive", "excellent training"],
			initials: "LA",
		},
	]

	const toggleFlip = (index) => {
		setFlippedCards((prev) => ({
			...prev,
			[index]: !prev[index],
		}))
	}

	const highlightText = (text, highlights) => {
		if (!highlights || highlights.length === 0) return text

		let highlightedText = text
		highlights.forEach((phrase) => {
			const regex = new RegExp(`(${phrase})`, "gi")
			highlightedText = highlightedText.replace(
				regex,
				`<span class="text-primary font-semibold">$1</span>`,
			)
		})

		return <span dangerouslySetInnerHTML={{ __html: highlightedText }} />
	}

	return (
		<div className="min-h-screen">
			<head>
				<title>Client Review | JupiNext Workflow & Best Practices</title>
				<meta name="description" content="Discover JupiNext's structured software development process from requirement analysis to deployment and maintenance. Ensuring quality, transparency, and efficiency at every stage." />
				<meta name="keywords" content="software development process, agile workflow, requirement analysis, planning, design, development, testing, deployment, maintenance, JupiNext" />
				<meta property="og:title" content="JupiNext Software Development Process" />
				<meta property="og:description" content="A transparent, structured, and efficient workflow for delivering high-quality software solutions" />
			</head>

			<Header />

			{/* Hero Section */}
			<section className="relative overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background px-6 py-24 lg:px-8">
				<div className="mx-auto max-w-4xl text-center">
					<h1 className="text-balance text-5xl font-bold tracking-tight sm:text-6xl mb-6">
						<span className="text-primary">Client</span> <span className="text-secondary">Reviews</span>
					</h1>
					<p className="mt-6 text-pretty text-lg leading-8 text-muted-foreground">
						Hear what our clients have to say about working with JupiNext. Real feedback from real projects.
					</p>
				</div>
			</section>

			{/* Reviews Grid */}
			<section className="px-6 py-12 lg:px-8">
				<div className="mx-auto max-w-7xl">
					<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
						{reviews.map((review, index) => (
							<div
								key={index}
								className="relative h-[350px] cursor-pointer perspective-1000 group"
								onClick={() => toggleFlip(index)}
							>
								{/* ROTATING WRAPPER */}
								<div
									className={`relative h-full w-full preserve-3d transition-transform duration-700 ${flippedCards[index] ? "rotate-y-180" : ""
										}`}
								>
									{/* FRONT */}
									<div className="absolute inset-0 backface-hidden">
										<div className="h-full w-full p-[1px] rounded-2xl bg-gradient-to-br from-primary/50 via-transparent to-secondary/50 shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
											<div className="h-full w-full rounded-2xl bg-card/80 backdrop-blur-md p-8 flex flex-col items-center justify-center relative overflow-hidden">
												{/* Decorative Background Elements */}
												<div className="absolute top-0 right-0 p-6 opacity-5">
													<Quote size={120} className="text-primary" />
												</div>

												<div className="relative z-10 flex flex-col items-center">
													<div className="w-16 h-16 rounded-full bg-secondary p-0.5 mb-6">
														<div className="w-full h-full rounded-full bg-card flex items-center justify-center text-xl font-bold">
															<span className="text-secondary">
																{review.initials}
															</span>
														</div>
													</div>

													<h3 className="text-2xl font-bold text-center mb-1 text-primary">{review.name}</h3>
													<p className="text-sm text-secondary font-medium tracking-wide uppercase mb-4">{review.role}</p>

													<div className="flex gap-1 mb-8">
														{[...Array(review.rating)].map((_, i) => (
															<Star key={i} className="h-4 w-4 fill-primary text-primary" />
														))}
													</div>

													<p className="text-xs text-muted-foreground flex items-center gap-2 animate-pulse">
														Tap to read review
													</p>
												</div>
											</div>
										</div>
									</div>

									{/* BACK */}
									<div className="absolute inset-0 backface-hidden rotate-y-180">
										<div className="h-full w-full p-[1px] rounded-2xl bg-gradient-to-bl from-secondary/50 via-transparent to-primary/50 shadow-lg">
											<div className="h-full w-full rounded-2xl bg-card/90 backdrop-blur-md p-6 sm:p-8 flex flex-col justify-between">
												{/* Review Content */}
												<div className="flex-1 overflow-y-auto custom-scrollbar">
													<div className="flex gap-1 mb-4">
														{[...Array(review.rating)].map((_, i) => (
															<Star
																key={i}
																className="h-5 w-5 fill-secondary text-secondary"
															/>
														))}
													</div>

													<div className="relative">
														<Quote className="absolute -top-2 -left-2 h-6 w-6 text-primary/20 transform -scale-x-100" />
														<p className="text-sm leading-relaxed text-muted-foreground pl-4 border-l-2 border-primary/20">
															{highlightText(review.review, review.highlights)}
														</p>
													</div>
												</div>

												{/* Footer */}
												<div className="mt-6 flex items-center gap-3 border-t border-border/50 pt-4">
													<div className="h-8 w-8 rounded-full bg-secondary/10 flex items-center justify-center">
														<span className="text-xs font-bold text-secondary">{review.initials}</span>
													</div>
													<div className="min-w-0">
														<div className="text-sm font-semibold truncate text-primary">{review.name}</div>
														<div className="text-xs text-secondary truncate">{review.role}</div>
													</div>
												</div>
											</div>
										</div>
									</div>

								</div>
							</div>

						))}
					</div>
				</div>
			</section>

			{/* Stats Section */}
			<section className="relative overflow-hidden px-6 py-24 lg:px-8">
				{/* Background decoration */}
				<div className="absolute inset-0 bg-muted/20 -z-10" />
				<div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

				<div className="relative mx-auto max-w-7xl">
					<div className="text-center mb-16">
						<h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
							Trusted <span className="text-primary">by Clients</span>{" "}
							<span className="text-secondary">Worldwide</span>
						</h2>
						<p className="mt-4 text-lg text-muted-foreground">
							Our commitment to excellence shows in the numbers
						</p>
					</div>

					{/* UPDATED GRID */}
					<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
						{/* Card 1 */}
						{(() => {
							const { count, ref } = useCounter(95)
							return (
								<div className="p-[1px] rounded-2xl bg-gradient-to-br from-primary/30 to-transparent hover:from-primary/50 transition-colors duration-500">
									<Card
										ref={ref}
										className="h-full rounded-2xl border-none bg-card/50 p-8 text-center backdrop-blur-sm"
									>
										<div className="text-4xl font-bold text-foreground mb-2">{count}%</div>
										<div className="text-sm font-medium text-muted-foreground">
											Client Satisfaction Rate
										</div>
									</Card>
								</div>
							)
						})()}

						{/* Card 2 */}
						{(() => {
							const { count, ref } = useCounter(150)
							return (
								<div className="p-[1px] rounded-2xl bg-gradient-to-br from-secondary/30 to-transparent hover:from-secondary/50 transition-colors duration-500">
									<Card
										ref={ref}
										className="h-full rounded-2xl border-none bg-card/50 p-8 text-center backdrop-blur-sm"
									>
										<div className="text-4xl font-bold text-foreground mb-2">{count}+</div>
										<div className="text-sm font-medium text-muted-foreground">
											Successful Projects
										</div>
									</Card>
								</div>
							)
						})()}

						{/* Card 3 */}
						{(() => {
							const { count, ref } = useCounter(49)
							return (
								<div className="p-[1px] rounded-2xl bg-gradient-to-br from-primary/30 to-transparent hover:from-primary/50 transition-colors duration-500">
									<Card
										ref={ref}
										className="h-full rounded-2xl border-none bg-card/50 p-8 text-center backdrop-blur-sm"
									>
										<div className="text-4xl font-bold text-foreground mb-2">
											{(count / 10).toFixed(1)}/5
										</div>
										<div className="text-sm font-medium text-muted-foreground">
											Average Rating
										</div>
									</Card>
								</div>
							)
						})()}

						{/* Card 4 */}
						{(() => {
							const { count, ref } = useCounter(12135)
							return (
								<div className="p-[1px] rounded-2xl bg-gradient-to-br from-secondary/30 to-transparent hover:from-secondary/50 transition-colors duration-500">
									<Card
										ref={ref}
										className="h-full rounded-2xl border-none bg-card/50 p-8 text-center backdrop-blur-sm"
									>
										<div className="text-4xl font-bold text-foreground mb-2">
											{count.toLocaleString()}+
										</div>
										<div className="text-sm font-medium text-muted-foreground">
											Lines of Code Written
										</div>
									</Card>
								</div>
							)
						})()}
					</div>
				</div>
			</section>
			<Footer />
		</div>
	)
}
