import ReviewsClient from "./reviews-client";

export const metadata = {
	title: "Client Review | JupiNext Workflow & Best Practices",
	description:
		"Discover JupiNext's structured software development process from requirement analysis to deployment and maintenance. Ensuring quality, transparency, and efficiency at every stage.",
	keywords:
		"software development process, agile workflow, requirement analysis, planning, design, development, testing, deployment, maintenance, JupiNext",
	openGraph: {
		title: "JupiNext Software Development Process",
		description: "A transparent, structured, and efficient workflow for delivering high-quality software solutions",
		type: "website",
	},
}

export default function ReviewsPage() {
	return <ReviewsClient />
}
