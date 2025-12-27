'use client'
import { useState, useRef, useEffect } from "react"

export const useCounter = (end, duration = 1500) => {
    const [count, setCount] = useState(0)
    const ref = useRef(null)
    const started = useRef(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started.current) {
                    started.current = true
                    let start = 0
                    const startTime = performance.now()

                    const update = (currentTime) => {
                        const elapsed = currentTime - startTime
                        const progress = Math.min(elapsed / duration, 1)
                        const value = Math.floor(progress * end)
                        setCount(value)

                        if (progress < 1) {
                            requestAnimationFrame(update)
                        }
                    }

                    requestAnimationFrame(update)
                }
            },
            { threshold: 0.5 }
        )

        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [end, duration])

    return { count, ref }
}
