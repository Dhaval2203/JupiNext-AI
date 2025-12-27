"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"
import { primaryColor, secondaryColor } from "@/lib/colors"

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
      rating: 5,
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
    {
      name: "Robert Martinez",
      role: "Business Owner",
      rating: 5,
      review:
        "JupiNext helped us automate several business processes using AI, which has saved us countless hours and improved accuracy. The solutions they built are intuitive and easy to use. Their team took the time to understand our workflow and created custom tools that fit perfectly into our operations.",
      highlights: ["automate", "saved", "improved accuracy", "intuitive", "perfectly"],
      initials: "RM",
    },
    {
      name: "Amanda Foster",
      role: "Project Lead",
      rating: 5,
      review:
        "I've worked with many development agencies, but JupiNext stands out for their professionalism and technical skills. They consistently delivered high-quality code, met all deadlines, and were proactive in suggesting improvements. The collaboration was seamless from start to finish.",
      highlights: ["stands out", "professionalism", "consistently", "high-quality", "proactive", "seamless"],
      initials: "AF",
    },
    {
      name: "Kevin Thompson",
      role: "Digital Transformation Lead",
      rating: 5,
      review:
        "JupiNext was instrumental in our digital transformation journey. They migrated our entire infrastructure to the cloud with zero downtime and built new web applications that have significantly improved our customer experience. Their strategic thinking and execution were outstanding.",
      highlights: ["instrumental", "zero downtime", "significantly improved", "strategic thinking", "outstanding"],
      initials: "KT",
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
        `<span style="color: ${primaryColor}; font-weight: 600;">$1</span>`,
      )
    })

    return <span dangerouslySetInnerHTML={{ __html: highlightedText }} />
  }

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-balance text-5xl font-bold tracking-tight sm:text-6xl">
            <span style={{ color: primaryColor }}>Client</span> <span style={{ color: secondaryColor }}>Reviews</span>
          </h1>
          <p className="mt-6 text-pretty text-lg leading-8 text-muted-foreground">
            Hear what our clients have to say about working with JupiNext. Real feedback from real projects.
          </p>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="group relative h-[320px] cursor-pointer perspective-1000"
                onClick={() => toggleFlip(index)}
              >
                {/* Front of Card - Name and Designation */}
                <Card
                  className={`absolute inset-0 flex flex-col items-center justify-center rounded-xl border border-border bg-card p-8 backface-hidden ${
                    flippedCards[index] ? "pointer-events-none" : ""
                  }`}
                >
                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-secondary/20">
                    <span className="text-3xl font-bold text-primary">{review.initials}</span>
                  </div>
                  <h3 className="mt-6 text-2xl font-bold text-foreground">{review.name}</h3>
                  <p className="mt-2 text-lg text-muted-foreground">{review.role}</p>
                  <div className="mt-4 flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">Tap to read review</p>
                </Card>

                {/* Back of Card - Review Text */}
                <Card
                  className={`absolute inset-0 flex flex-col justify-between rounded-xl border border-border bg-card p-8 backface-hidden rotate-y-180 ${
                    !flippedCards[index] ? "pointer-events-none" : ""
                  }`}
                >
                  <div>
                    <div className="mb-3 flex items-center gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-sm italic leading-relaxed text-muted-foreground">
                      {highlightText(review.review, review.highlights)}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center gap-3 border-t border-border pt-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <span className="text-sm font-semibold text-primary">{review.initials}</span>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground">{review.name}</div>
                      <div className="text-xs text-muted-foreground">{review.role}</div>
                    </div>
                  </div>
                  <p className="mt-2 text-center text-xs text-muted-foreground">Tap to go back</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-muted/30 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Trusted <span style={{ color: primaryColor }}>by Clients</span>{" "}
              <span style={{ color: secondaryColor }}>Worldwide</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">Our commitment to excellence shows in the numbers</p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <Card className="rounded-xl border border-border bg-card p-8 text-center">
              <div className="text-4xl font-bold text-foreground">98%</div>
              <div className="mt-2 text-sm text-muted-foreground">Client Satisfaction Rate</div>
            </Card>

            <Card className="rounded-xl border border-border bg-card p-8 text-center">
              <div className="text-4xl font-bold text-foreground">150+</div>
              <div className="mt-2 text-sm text-muted-foreground">Successful Projects</div>
            </Card>

            <Card className="rounded-xl border border-border bg-card p-8 text-center">
              <div className="text-4xl font-bold text-foreground">4.9/5</div>
              <div className="mt-2 text-sm text-muted-foreground">Average Rating</div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
