"use client"

import Footer from "@/components/footer"
import Header from "@/components/header"
import { Card } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import { useState } from "react"
import { useCounter } from "../../lib/useCounter.js"

export default function ReviewsClient() {
    const [flippedCards, setFlippedCards] = useState({})

    const reviews = [
        {
            name: "Michael Johnson",
            role: "Chief Technology Officer",
            rating: 5,
            review:
                "JupiNext transformed our legacy system into a modern, scalable platform. Their expertise in cloud solutions and attention to detail exceeded our expectations.",
            highlights: ["transformed", "expertise", "exceeded"],
            initials: "MJ",
        },
        {
            name: "Sarah Parker",
            role: "Product Manager",
            rating: 5,
            review:
                "Working with JupiNext on our mobile app was a game-changer. They understood our vision perfectly and delivered a beautiful, intuitive app.",
            highlights: ["game-changer", "perfectly", "beautiful"],
            initials: "SP",
        },
        {
            name: "David Chen",
            role: "Operations Director",
            rating: 4,
            review:
                "The blockchain solution JupiNext built for our supply chain has revolutionized our operations with transparency and innovation.",
            highlights: ["revolutionized", "innovation"],
            initials: "DC",
        },
        {
            name: "Emily Rodriguez",
            role: "Marketing Director",
            rating: 5,
            review:
                "JupiNext created an amazing website that perfectly captures our brand identity. The design is modern and performance is excellent.",
            highlights: ["amazing", "excellent"],
            initials: "ER",
        },
        {
            name: "James Wilson",
            role: "Startup Founder",
            rating: 5,
            review:
                "As a startup, we needed a reliable partner to build our MVP quickly. JupiNext delivered beyond expectations.",
            highlights: ["reliable", "beyond expectations"],
            initials: "JW",
        },
        {
            name: "Lisa Anderson",
            role: "Head of Engineering",
            rating: 5,
            review:
                "The DevOps and cloud infrastructure setup implemented by JupiNext has been rock solid and extremely reliable.",
            highlights: ["rock solid", "reliable"],
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
        let highlighted = text
        highlights.forEach((h) => {
            highlighted = highlighted.replace(
                new RegExp(`(${h})`, "gi"),
                `<span class="text-primary font-semibold">$1</span>`
            )
        })
        return <span dangerouslySetInnerHTML={{ __html: highlighted }} />
    }

    // ---------- STATS ----------
    const totalReviews = reviews.length
    const avgRating =
        reviews.reduce((sum, r) => sum + r.rating, 0) / totalReviews
    const fiveStar = reviews.filter((r) => r.rating === 5).length
    const satisfaction = Math.round((fiveStar / totalReviews) * 100)

    return (
        <div className="min-h-screen">
            <Header />

            {/* Hero */}
            <section className="relative overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background px-6 py-24">
                <div className="mx-auto max-w-4xl text-center">
                    <h1 className="text-5xl font-bold mb-6">
                        <span className="text-primary">Client</span>{" "}
                        <span className="text-secondary">Reviews</span>
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        Real feedback from real people who trusted JupiNext
                    </p>
                </div>
            </section>

            {/* Reviews */}
            <section className="px-6 py-16 bg-muted/10">
                <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="relative h-[360px] perspective-1000 cursor-pointer"
                            onClick={() => toggleFlip(index)}
                        >
                            <div
                                className={`relative h-full w-full preserve-3d transition-transform duration-700 ${flippedCards[index] ? "rotate-y-180" : ""
                                    }`}
                            >
                                {/* FRONT */}
                                <div className="absolute inset-0 backface-hidden">
                                    <div className="group relative h-full rounded-2xl border border-border/50 bg-card/70 backdrop-blur-xl p-8 flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                                        <div
                                            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                            style={{
                                                background:
                                                    "radial-gradient(circle at top, #E6FFFA 0%, transparent 60%)",
                                            }}
                                        />

                                        <Quote className="absolute top-6 right-6 text-primary/10" size={80} />

                                        <div className="relative z-10 text-center">
                                            {/* ✅ FIXED INITIALS (OPTICAL CENTER) */}
                                            <div className="w-16 h-16 rounded-full bg-accent/10 mb-6 ml-8 grid place-items-center">
                                                <span className="font-mono text-[20px] font-bold leading-none text-accent">
                                                    {review.initials}
                                                </span>
                                            </div>

                                            <h3 className="text-xl font-bold text-primary">
                                                {review.name}
                                            </h3>
                                            <p className="text-xs mt-1 uppercase text-secondary mb-4">
                                                {review.role}
                                            </p>

                                            <div className="flex justify-center gap-1 mb-4">
                                                {[...Array(review.rating)].map((_, i) => (
                                                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                                                ))}
                                            </div>

                                            <div className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-accent/80 group-hover:text-accent transition">
                                                <span>Read full review</span>
                                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* BACK */}
                                <div className="absolute inset-0 backface-hidden rotate-y-180">
                                    <div className="group relative h-full rounded-2xl border border-border/50 bg-card/90 backdrop-blur-xl p-8 flex flex-col justify-between shadow-inner transition-all duration-300 hover:shadow-lg">
                                        <div
                                            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                            style={{
                                                background:
                                                    "radial-gradient(circle at top, #FFF1F2 0%, transparent 60%)",
                                            }}
                                        />

                                        <div className="relative z-10 overflow-y-auto">
                                            <div className="flex gap-1 mb-4">
                                                {[...Array(review.rating)].map((_, i) => (
                                                    <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                                                ))}
                                            </div>

                                            <p className="text-sm leading-relaxed text-muted-foreground pl-4 border-l-2 border-secondary/30">
                                                {highlightText(review.review, review.highlights)}
                                            </p>
                                        </div>

                                        <div className="relative z-10 mt-4 pt-4 border-t border-border/50 flex items-center gap-3">
                                            {/* ✅ FIXED INITIALS (SMALL) */}
                                            <div className="h-8 w-8 rounded-full bg-accent/10 grid place-items-center">
                                                <span className="font-mono text-[11px] font-bold leading-none text-accent">
                                                    {review.initials}
                                                </span>
                                            </div>
                                            <div>
                                                <div className="text-sm font-semibold text-primary">
                                                    {review.name}
                                                </div>
                                                <div className="text-xs text-secondary">
                                                    {review.role}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Stats */}
            <section className="relative overflow-hidden px-6 py-24">
                <div className="absolute inset-0 bg-muted/20 -z-10" />
                <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

                <div className="mx-auto max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold sm:text-4xl">
                            Trusted <span className="text-primary">by Clients</span>{" "}
                            <span className="text-secondary">Worldwide</span>
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Our commitment to excellence shows in the numbers
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            { label: "Client Satisfaction Rate", value: satisfaction, suffix: "%" },
                            { label: "Total Reviews", value: totalReviews, suffix: "+" },
                            {
                                label: "Average Rating",
                                value: Math.round(avgRating * 10),
                                render: (v) => `${(v / 10).toFixed(1)}/5`,
                            },
                            { label: "5-Star Reviews", value: fiveStar, suffix: "+" },
                        ].map((item, i) => {
                            const { count, ref } = useCounter(item.value)
                            return (
                                <div key={i} className="p-[1px] rounded-2xl bg-gradient-to-br from-primary/30 to-transparent">
                                    <Card
                                        ref={ref}
                                        className="rounded-2xl border-none bg-card/50 p-8 text-center backdrop-blur-sm"
                                    >
                                        <div className="text-4xl font-bold mb-2">
                                            {item.render
                                                ? item.render(count)
                                                : `${count}${item.suffix ?? ""}`}
                                        </div>
                                        <div className="text-sm text-muted-foreground">
                                            {item.label}
                                        </div>
                                    </Card>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
