import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const Background3D = () => {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        let animationFrameId
        let width = window.innerWidth
        let height = window.innerHeight

        canvas.width = width
        canvas.height = height

        const particles = []
        const particleCount = 60
        const connectionDistance = 130

        // Initialize particles
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.4,
                vy: (Math.random() - 0.5) * 0.4,
                size: Math.random() * 1.5 + 0.5,
            })
        }

        const resize = () => {
            width = window.innerWidth
            height = window.innerHeight
            canvas.width = width
            canvas.height = height
        }

        window.addEventListener('resize', resize)

        const draw = () => {
            // 밝은 배경 — 순수 화이트
            ctx.fillStyle = '#ffffff'
            ctx.fillRect(0, 0, width, height)

            // 미세한 쿨 블루 그라데이션 오버레이
            const grad = ctx.createRadialGradient(width * 0.5, height * 0.3, 0, width * 0.5, height * 0.3, width * 0.8)
            grad.addColorStop(0, 'rgba(0, 194, 255, 0.05)')
            grad.addColorStop(1, 'rgba(255, 255, 255, 0)')
            ctx.fillStyle = grad
            ctx.fillRect(0, 0, width, height)

            const cx = width / 2

            // Update and draw particles
            particles.forEach((p, i) => {
                p.x += p.vx
                p.y += p.vy

                // Bounce
                if (p.x < 0 || p.x > width) p.vx *= -1
                if (p.y < 0 || p.y > height) p.vy *= -1

                // Draw particle — 하늘색 점
                ctx.beginPath()
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
                ctx.fillStyle = 'rgba(0, 194, 255, 0.5)'
                ctx.fill()

                // Connect particles — 연한 하늘색 선
                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j]
                    const dx = p.x - p2.x
                    const dy = p.y - p2.y
                    const dist = Math.sqrt(dx * dx + dy * dy)

                    if (dist < connectionDistance) {
                        ctx.beginPath()
                        ctx.strokeStyle = `rgba(0, 194, 255, ${0.07 * (1 - dist / connectionDistance)})`
                        ctx.lineWidth = 0.8
                        ctx.moveTo(p.x, p.y)
                        ctx.lineTo(p2.x, p2.y)
                        ctx.stroke()
                    }
                }
            })

            // Moving perspective grid (very subtle, light)
            const time = Date.now() * 0.001
            const gridY = height * 0.8

            ctx.save()

            // Perspective lines
            for (let i = -10; i <= 10; i++) {
                const x = cx + i * 200
                ctx.beginPath()
                ctx.moveTo(x, height)
                ctx.lineTo(cx, gridY - 200)
                ctx.strokeStyle = 'rgba(0, 194, 255, 0.04)'
                ctx.lineWidth = 1
                ctx.stroke()
            }

            // Moving horizontal lines
            const offset = (time * 40) % 100
            for (let i = 0; i < 10; i++) {
                const y = gridY + i * 40 + offset
                if (y < height) {
                    ctx.beginPath()
                    ctx.moveTo(0, y)
                    ctx.lineTo(width, y)
                    ctx.strokeStyle = `rgba(0, 194, 255, ${0.03 + (i / 20) * 0.04})`
                    ctx.stroke()
                }
            }

            ctx.restore()

            animationFrameId = requestAnimationFrame(draw)
        }

        draw()

        return () => {
            window.removeEventListener('resize', resize)
            cancelAnimationFrame(animationFrameId)
        }
    }, [])

    return (
        <motion.canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full -z-10 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
        />
    )
}

export default Background3D
