import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
    metadataBase: new URL('https://www.jupinext.com'),
    verification: {
        google: 'google-site-verification=gSXHLIPQJ19w6fTc073YVKinbBe1hhwFpa9cDbmh0fY',
    },
    title: {
        default: 'JupiNext – IT Solutions & Software Development Company',
        template: '%s | JupiNext',
    },

    description:
        'JupiNext is a future-ready IT solutions company offering web development, mobile applications, cloud services, UI/UX design, blockchain development, and AI-powered solutions.',

    applicationName: 'JupiNext',
    generator: 'Next.js',

    keywords: [
        'JupiNext',
        'IT solutions company',
        'software development company',
        'web development services',
        'mobile app development',
        'cloud services',
        'UI UX design',
        'blockchain development',
        'AI solutions',
    ],

    alternates: {
        canonical: 'https://www.jupinext.com',
    },

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-snippet': -1,
            'max-image-preview': 'large',
            'max-video-preview': -1,
        },
    },

    openGraph: {
        title: 'JupiNext – IT Solutions & Software Development Company',
        description:
            'Future-ready IT solutions including web, mobile, cloud, UI/UX, blockchain, and AI services.',
        url: 'https://www.jupinext.com',
        siteName: 'JupiNext',
        locale: 'en_US',
        type: 'website',
        images: [
            {
                url: '/Logo.png', // 1200x630
                width: 1200,
                height: 630,
                alt: 'JupiNext – Where the Next Begins',
            },
        ],
    },

    twitter: {
        card: 'summary_large_image',
        title: 'JupiNext – IT Solutions & Software Development Company',
        description:
            'Innovative IT solutions in web, mobile, cloud, UI/UX, blockchain, and AI.',
        images: ['/Logo.png'],
    },

    icons: {
        icon: [
            { url: '/Logo.png', media: '(prefers-color-scheme: light)' },
            { url: '/Logo.png', media: '(prefers-color-scheme: dark)' },
            { url: '/icon.svg', type: 'image/svg+xml' },
        ],
        apple: '/apple-icon.png',
    },
};

export const viewport = {
    themeColor: "#0ea5a4",
    width: "device-width",
    initialScale: 1,
}

export default function RootLayout({ children }) {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'JupiNext',
        url: 'https://jupinext.com',
        logo: 'https://jupinext.com/Logo.png',
        sameAs: [
            'https://twitter.com/jupinext',
            'https://linkedin.com/company/jupinext',
            'https://github.com/jupinext'
        ],
        contactPoint: {
            '@type': 'ContactPoint',
            email: 'hr@jupinext.com',
            contactType: 'customer support'
        }
    }

    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <meta name="google-site-verification" content="gSXHLIPQJ19w6fTc073YVKinbBe1hhwFpa9cDbmh0fY" />
            </head>
            <body className={`${inter.className} font-sans antialiased`}>
                {children}
            </body>
        </html>
    )
}
