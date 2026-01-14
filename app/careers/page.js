import CareersClientPage from "./CareersClient"

export const metadata = {
	title: "Careers at JupiNext | Join Our Team",
	description:
		"Explore exciting career opportunities at JupiNext. Join our team of innovators and contribute to building modern web, cloud, and blockchain solutions.",
	keywords:
		"JupiNext careers, job openings, software developer jobs, UI/UX designer jobs, DevOps engineer, project manager, technology jobs, remote jobs",
	openGraph: {
		title: "Careers at JupiNext - Join Our Team",
		description:
			"Discover open positions at JupiNext and build your career with a company that values innovation, growth, and collaboration.",
		type: "website",
	},
}

export default function CareersPage() {
	return (
		<CareersClientPage />
	)
}