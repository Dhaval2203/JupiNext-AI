import ContactClient from "./contact-client";

export const metadata = {
	title: "Contact JupiNext | Get in Touch with Our Team",
	description:
		"Have questions or want to collaborate? Contact JupiNext for inquiries about our software solutions, services, or partnership opportunities.",
	keywords:
		"JupiNext contact, get in touch, software inquiries, partnership, support, customer service",
	openGraph: {
		title: "Contact JupiNext - Get in Touch",
		description:
			"Reach out to JupiNext for support, collaboration, or inquiries about our technology solutions and services.",
		type: "website",
	},
}

export default function ContactPage() {
	return <ContactClient />
}
