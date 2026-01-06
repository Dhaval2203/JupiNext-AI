'use client';

import Link from 'next/link';
import {
    primaryBackgroundColor,
    primaryColor,
    secondaryColor,
    whiteColor,
    accentColor,
} from '../lib/colors';

export default function NotFound() {
    return (
        <main
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: primaryBackgroundColor,
                padding: 24,
            }}
        >
            <div
                style={{
                    textAlign: 'center',
                    maxWidth: 520,
                    padding: '40px 32px',
                    borderRadius: 16,
                    background: whiteColor,
                    color: primaryColor,
                    boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
                }}
            >
                {/* Error Code */}
                <h1
                    style={{
                        fontSize: 88,
                        margin: 0,
                        fontWeight: 700,
                        color: primaryColor,
                        lineHeight: 1,
                    }}
                >
                    404
                </h1>

                {/* Friendly Title */}
                <h2
                    style={{
                        fontSize: 26,
                        margin: '16px 0 8px',
                        fontWeight: 600,
                        color: secondaryColor
                    }}
                >
                    Oops! Page not found
                </h2>

                {/* Human-friendly copy */}
                <p
                    style={{
                        fontSize: 15,
                        opacity: 0.8,
                        marginBottom: 28,
                        lineHeight: 1.6,
                        color: accentColor,
                    }}
                >
                    The page you’re looking for might have been moved, renamed,
                    or doesn’t exist anymore. Don’t worry — let’s get you back on track.
                </p>

                {/* Primary Action */}
                <Link
                    href="/"
                    style={{
                        display: 'inline-block',
                        padding: '12px 28px',
                        background: primaryColor,
                        color: whiteColor,
                        borderRadius: 8,
                        textDecoration: 'none',
                        fontWeight: 600,
                        marginBottom: 12,
                    }}
                >
                    Go to JupiNext Home
                </Link>

                {/* Footer hint */}
                <p
                    style={{
                        marginTop: 28,
                        fontSize: 12,
                        opacity: 0.5,
                        color: accentColor,
                    }}
                >
                    Error Code: JN-404
                </p>
            </div>
        </main>
    );
}
