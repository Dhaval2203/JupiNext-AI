import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'JupiNext - Future-Ready IT Solutions'
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: 'linear-gradient(to bottom right, #000000, #111111)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'sans-serif',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: 40,
                    }}
                >
                    {/* Logo representation */}
                    <div
                        style={{
                            width: 80,
                            height: 80,
                            background: 'linear-gradient(135deg, #0ea5a4 0%, #ef4444 100%)',
                            borderRadius: 20,
                            marginRight: 20,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: 48,
                        }}
                    >
                        J
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            fontSize: 80,
                            fontWeight: 900,
                            letterSpacing: '-0.05em',
                            color: 'white',
                        }}
                    >
                        <span>Jupi</span>
                        <span style={{ color: '#ef4444' }}>Next</span>
                    </div>
                </div>
                <div
                    style={{
                        fontSize: 32,
                        background: 'linear-gradient(90deg, #0ea5a4 0%, #ef4444 100%)',
                        backgroundClip: 'text',
                        color: 'transparent',
                        fontWeight: 700,
                        textAlign: 'center',
                        maxWidth: 900,
                    }}
                >
                    Web • Mobile • Cloud • AI • Blockchain
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}
