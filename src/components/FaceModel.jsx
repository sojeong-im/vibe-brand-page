import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const FaceModel = () => {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        let animationFrameId
        let width = canvas.offsetWidth
        let height = canvas.offsetHeight

        const resize = () => {
            const dpr = window.devicePixelRatio || 1
            width = canvas.parentElement.offsetWidth
            height = canvas.parentElement.offsetHeight

            canvas.width = width * dpr
            canvas.height = height * dpr

            // Scale context to match DPR
            ctx.scale(dpr, dpr)

            // CSS size remains logic pixels
            canvas.style.width = `${width}px`
            canvas.style.height = `${height}px`
        }

        resize()
        window.addEventListener('resize', resize)

        // 3D Point Class
        class Point {
            constructor(x, y, z) {
                this.x = x
                this.y = y
                this.z = z
                this.baseX = x
                this.baseY = y
                this.baseZ = z
            }

            rotate(angleY, angleX) {
                // Rotate Y
                const cosY = Math.cos(angleY)
                const sinY = Math.sin(angleY)
                let x = this.baseX * cosY - this.baseZ * sinY
                let z = this.baseX * sinY + this.baseZ * cosY

                // Rotate X
                const cosX = Math.cos(angleX)
                const sinX = Math.sin(angleX)
                let y = this.baseY * cosX - z * sinX
                z = this.baseY * sinX + z * cosX

                this.x = x
                this.y = y
                this.z = z
            }

            project(width, height, fov) {
                const scale = fov / (fov + this.z)
                return {
                    x: this.x * scale + width / 2,
                    y: this.y * scale + height / 2,
                    scale: scale,
                    visible: this.z > -fov // Basic clipping
                }
            }
        }

        // Generate Points (Ellipsoid/ Face-shape approximation)
        const points = []
        const numPoints = 250 // Increased density
        const radius = Math.min(width, height) * 0.25

        for (let i = 0; i < numPoints; i++) {
            // Fibonacci Sphere distribution for even spread
            const phi = Math.acos(1 - 2 * (i + 0.5) / numPoints)
            const theta = Math.PI * (1 + Math.sqrt(5)) * i

            // Morph slightly to look more like a head (taller)
            const x = radius * Math.sin(phi) * Math.cos(theta) * 0.85
            const y = radius * Math.cos(phi) * 1.2
            const z = radius * Math.sin(phi) * Math.sin(theta)

            points.push(new Point(x, y, z))
        }

        let angleY = 0
        let angleX = 0
        const fov = 400

        const draw = () => {
            ctx.clearRect(0, 0, width, height)

            // Auto Rotation
            angleY += 0.005
            angleX = Math.sin(Date.now() * 0.001) * 0.2 // Gentle nodding

            const projectedPoints = []

            // Update & Project
            points.forEach(p => {
                p.rotate(angleY, angleX)
                const proj = p.project(width, height, fov)
                if (proj.visible) projectedPoints.push(proj)
            })

            // Draw Connections
            ctx.strokeStyle = 'rgba(0, 234, 255, 0.15)'
            ctx.lineWidth = 0.5

            projectedPoints.forEach((p1, i) => {
                // Connect to nearest neighbors (simple distance check optimization could be done, 
                // but for 250 points, O(N^2) is fine for modern browsers)
                // To save perf, only check adjacent in array indices (approximate neighbor) 
                // or just random subsets.
                // Better: Connect to next few points in list (Fibonacci spiral guarantees some proximity)
                for (let j = 1; j < 6; j++) {
                    const p2 = projectedPoints[(i + j) % projectedPoints.length]
                    // Distance check to avoid cross-sphere lines
                    const dx = p1.x - p2.x
                    const dy = p1.y - p2.y
                    const dist = dx * dx + dy * dy
                    if (dist < 2000) { // arbitrary localized threshold
                        ctx.beginPath()
                        ctx.moveTo(p1.x, p1.y)
                        ctx.lineTo(p2.x, p2.y)
                        ctx.stroke()
                    }
                }
            })

            // Draw Points
            projectedPoints.forEach(p => {
                const alpha = (p.scale - 0.5) * 2 // Fade out back points
                ctx.fillStyle = `rgba(0, 234, 255, ${Math.max(0.1, alpha)})`
                ctx.beginPath()
                ctx.arc(p.x, p.y, 1.5 * p.scale, 0, Math.PI * 2)
                ctx.fill()

                // Add glow to some points
                if (Math.random() > 0.98) {
                    ctx.fillStyle = `rgba(255, 255, 255, 0.8)`
                    ctx.beginPath()
                    ctx.arc(p.x, p.y, 3 * p.scale, 0, Math.PI * 2)
                    ctx.fill()
                }
            })

            animationFrameId = requestAnimationFrame(draw)
        }

        draw()

        return () => {
            window.removeEventListener('resize', resize)
            cancelAnimationFrame(animationFrameId)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="w-full h-full bg-black"
            style={{ filter: 'contrast(1.2)' }}
        />
    )
}

export default FaceModel
