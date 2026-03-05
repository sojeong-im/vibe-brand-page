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
        const particleCount = 50
        const connectionDistance = 150

        // Initialize particles
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 2,
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
            ctx.fillStyle = '#000000'
            ctx.fillRect(0, 0, width, height)

            // Draw grid perspective
            ctx.strokeStyle = 'rgba(0, 234, 255, 0.1)'
            ctx.lineWidth = 1

            // Vertical lines perspective
            const cx = width / 2
            const cy = height / 2

            // Update and draw particles
            particles.forEach((p, i) => {
                p.x += p.vx
                p.y += p.vy

                // Bounce
                if (p.x < 0 || p.x > width) p.vx *= -1
                if (p.y < 0 || p.y > height) p.vy *= -1

                // Draw particle
                ctx.beginPath()
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
                ctx.fillStyle = '#00EAFF'
                ctx.fill()

                // Connect particles
                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j]
                    const dx = p.x - p2.x
                    const dy = p.y - p2.y
                    const dist = Math.sqrt(dx * dx + dy * dy)

                    if (dist < connectionDistance) {
                        ctx.beginPath()
                        ctx.strokeStyle = `rgba(0, 234, 255, ${0.1 * (1 - dist / connectionDistance)})`
                        ctx.moveTo(p.x, p.y)
                        ctx.lineTo(p2.x, p2.y)
                        ctx.stroke()
                    }
                }
            })

            // Draw glowing grid floor (simulated 3D)
            const time = Date.now() * 0.001
            const gridY = height * 0.8

            ctx.save()
            ctx.beginPath()
            // Horizon line
            // ctx.moveTo(0, gridY)
            // ctx.lineTo(width, gridY)

            // Perspective lines
            for (let i = -10; i <= 10; i++) {
                const x = cx + i * 200
                ctx.moveTo(x, height)
                ctx.lineTo(cx, gridY - 200) // Vanishing point
            }
            ctx.strokeStyle = 'rgba(0, 234, 255, 0.05)'
            ctx.stroke()

            // Moving horizontal lines
            const offset = (time * 50) % 100
            for (let i = 0; i < 10; i++) {
                const y = gridY + i * 40 + offset
                if (y < height) {
                    ctx.beginPath()
                    ctx.moveTo(0, y)
                    ctx.lineTo(width, y)
                    ctx.strokeStyle = `rgba(0, 234, 255, ${0.05 + (i / 20) * 0.1})`
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
