import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"
import { primaryColor, secondaryColor } from "@/lib/colors"

export default function ReviewsPage() {
  const reviews = [
    {
      name: "Michael Johnson",
      role: "Chief Technology Officer",
      rating: 5,
      review:
        "JupiNext transformed our legacy system into a modern, scalable platform. Their expertise in cloud solutions and attention to detail exceeded our expectations. The team was professional and delivered on time. I highly recommend their services to anyone looking for top-notch software development.",
      initials: "MJ",
    },
    {
      name: "Sarah Parker",
      role: "Product Manager",
      rating: 5,
      review:
        "Working with JupiNext on our mobile app was a game-changer. They understood our vision perfectly and delivered a beautiful, intuitive app that our users love. The communication throughout the project was excellent, and they were always responsive to our feedback. Highly recommend their mobile development services!",
      initials: "SP",
    },
    {
      name: "David Chen",
      role: "Operations Director",
      rating: 5,
      review:
        "The blockchain solution JupiNext built for our supply chain has revolutionized our operations. Their deep technical knowledge and innovative approach helped us achieve transparency we never thought possible. The implementation was smooth, and their ongoing support has been fantastic.",
      initials: "DC",
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director",
      rating: 5,
      review:
        "JupiNext created an amazing website for our business that perfectly captures our brand identity. The design is modern and clean, and the performance is excellent. They were patient with our requests and made sure everything was exactly as we wanted. Couldn't be happier with the results!",
      initials: "ER",
    },
    {
      name: "James Wilson",
      role: "Startup Founder",
      rating: 5,
      review:
        "As a startup, we needed a reliable partner to build our MVP quickly without compromising on quality. JupiNext delivered beyond our expectations. Their agile approach and technical expertise helped us launch on time and within budget. The team truly understood our vision and brought it to life.",
      initials: "JW",
    },
    {
      name: "Lisa Anderson",
      role: "Head of Engineering",
      rating: 5,
      review:
        "The DevOps and cloud infrastructure setup that JupiNext implemented for us has been rock solid. Our deployment times have improved significantly, and system reliability has never been better. Their team's knowledge of modern cloud technologies is impressive, and they provided excellent training to our internal team.",
      initials: "LA",
    },
    {
      name: "Robert Martinez",
      role: "Business Owner",
      rating: 5,
      review:
        "JupiNext helped us automate several business processes using AI, which has saved us countless hours and improved accuracy. The solutions they built are intuitive and easy to use. Their team took the time to understand our workflow and created custom tools that fit perfectly into our operations.",
      initials: "RM",
    },
    {
      name: "Amanda Foster",
      role: "Project Lead",
      rating: 5,
      review:
        "I've worked with many development agencies, but JupiNext stands out for their professionalism and technical skills. They consistently delivered high-quality code, met all deadlines, and were proactive in suggesting improvements. The collaboration was seamless from start to finish.",
      initials: "AF",
    },
    {
      name: "Kevin Thompson",
      role: "Digital Transformation Lead",
      rating: 5,
      review:
        "JupiNext was instrumental in our digital transformation journey. They migrated our entire infrastructure to the cloud with zero downtime and built new web applications that have significantly improved our customer experience. Their strategic thinking and execution were outstanding.",
      initials: "KT",
    },
  ]

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
              <Card key={index} className="rounded-xl border border-border bg-card p-8 transition-all hover:shadow-lg">
                {/* Star Rating */}
                <div className="mb-4 flex items-center gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-muted-foreground italic">{review.review}</p>

                {/* Reviewer Info */}
                <div className="mt-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <span className="text-lg font-semibold text-primary">{review.initials}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{review.name}</div>
                    <div className="text-sm text-muted-foreground">{review.role}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-muted/30 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              <span style={{ color: primaryColor }}>Trusted by Clients</span>{" "}
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
