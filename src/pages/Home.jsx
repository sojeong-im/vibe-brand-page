import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import FaceModel from '../components/FaceModel'
import LaunchPopup from '../components/LaunchPopup'

// Counter Animation Hook
const useCounter = (end, duration = 2000, startCounting = false) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (!startCounting) return

        let startTime
        let animationFrame

        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime
            const progress = Math.min((currentTime - startTime) / duration, 1)

            setCount(Math.floor(progress * end))

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate)
            }
        }

        animationFrame = requestAnimationFrame(animate)
        return () => cancelAnimationFrame(animationFrame)
    }, [end, duration, startCounting])

    return count
}

// Stat Counter Component
const StatCounter = ({ value, label, suffix = '', prefix = '' }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })
    const count = useCounter(value, 2000, isInView)

    return (
        <motion.div
            ref={ref}
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
        >
            <div className="text-6xl md:text-7xl font-light tracking-tight mb-2 font-mono">
                <span className="bg-gradient-to-b from-brand-light to-brand-dark bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(0,234,255,0.5)]">
                    {prefix}{count.toLocaleString()}{suffix}
                </span>
            </div>
            <div className="text-sm uppercase tracking-[0.3em] text-gray-400">
                {label}
            </div>
        </motion.div>
    )
}

// Grid Scan Effect Component
const GridScanEffect = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
            <div className="absolute inset-0" style={{
                backgroundImage: `
                    linear-gradient(0deg, transparent 24%, rgba(0, 234, 255, 0.05) 25%, rgba(0, 234, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 234, 255, 0.05) 75%, rgba(0, 234, 255, 0.05) 76%, transparent 77%, transparent),
                    linear-gradient(90deg, transparent 24%, rgba(0, 234, 255, 0.05) 25%, rgba(0, 234, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 234, 255, 0.05) 75%, rgba(0, 234, 255, 0.05) 76%, transparent 77%, transparent)
                `,
                backgroundSize: '50px 50px'
            }} />
            <motion.div
                className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-brand to-transparent shadow-[0_0_15px_#00EAFF]"
                animate={{
                    top: ['0%', '100%']
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear'
                }}
            />
        </div>
    )
}

// Data Visualization Component
const DataVisualization = () => {
    return (
        <div className="relative w-full h-64 bg-black/40 border border-brand/20 rounded-2xl overflow-hidden backdrop-blur-sm shadow-[0_0_30px_rgba(0,234,255,0.1)]">
            <GridScanEffect />
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-8 gap-2 w-full h-full p-8">
                    {Array.from({ length: 32 }).map((_, i) => (
                        <motion.div
                            key={i}
                            className="bg-brand/30 rounded shadow-[0_0_10px_rgba(0,234,255,0.2)]"
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: Math.random() }}
                            transition={{
                                duration: 0.5,
                                delay: i * 0.05,
                                repeat: Infinity,
                                repeatType: 'reverse',
                                repeatDelay: Math.random() * 2
                            }}
                            style={{ originY: 1 }}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}


// Counter Animation Hook
// ... existing code ...

function Home() {
    const { scrollYProgress } = useScroll()
    const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
    const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95])

    return (
        <div className="bg-transparent text-gray-900">
            <LaunchPopup />
            {/* Hero Section */}
            <motion.section
                className="relative min-h-screen flex items-center justify-center overflow-hidden"
                style={{ opacity: heroOpacity, scale: heroScale }}
            >
                {/* Visual Backdrop is handled by global Background3D, but we add local gradient for focus */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-white/70 pointer-events-none" />

                {/* Animated Particles - Cyan */}
                <div className="absolute inset-0">
                    {Array.from({ length: 20 }).map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-brand rounded-full shadow-[0_0_10px_#00EAFF]"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                opacity: [0, 1, 0],
                                scale: [0, 1.5, 0],
                            }}
                            transition={{
                                duration: 2 + Math.random() * 2,
                                repeat: Infinity,
                                delay: Math.random() * 2,
                            }}
                        />
                    ))}
                </div>

                <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="mb-6"
                    >
                        <span className="text-sm uppercase tracking-[0.3em] text-brand-light font-mono border border-brand/30 px-4 py-2 rounded-full backdrop-blur-md">
                            Visual Logic System
                        </span>
                    </motion.div>

                    <motion.h1
                        className="text-display font-serif font-bold mb-8 drop-shadow-2xl"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                    >
                        <span className="block text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
                            VIBE
                        </span>
                    </motion.h1>

                    <motion.p
                        className="text-2xl md:text-3xl text-gray-600 mb-4 font-light tracking-wide"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                    >
                        Own Your Vibe.
                    </motion.p>

                    <motion.p
                        className="text-lg md:text-xl text-gray-500 mb-12 max-w-3xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                    >
                        느낌을 모아 데이터로 가이드하다
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="flex gap-4 justify-center flex-wrap"
                    >
                        <Link
                            to="/services"
                            className="px-8 py-4 bg-brand text-black rounded-full font-bold hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,234,255,0.5)]"
                        >
                            서비스 시작하기
                        </Link>
                        <Link
                            to="/about"
                            className="px-8 py-4 border border-brand/50 text-brand-light rounded-full font-medium hover:bg-brand/10 hover:border-brand transition-all duration-300 backdrop-blur-sm"
                        >
                            VIBE 알아보기
                        </Link>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-10 left-1/2 -translate-x-1/2"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
                        <motion.div
                            className="w-1 h-2 bg-white rounded-full"
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                    </div>
                </motion.div>
            </motion.section>

            {/* VIBE AI Preview Section */}
            <section className="py-24 md:py-32 px-6 relative overflow-hidden bg-white">
                <div className="absolute inset-0 bg-brand/3" />
                <GridScanEffect />

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="inline-block px-3 py-1 bg-brand/10 border border-brand/20 text-brand text-xs font-mono mb-6 rounded-full">
                                AI ANALYSIS Beta
                            </span>
                            <h2 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                                VIBE AI :<br />
                                <span className="text-brand">THE LOGIC OF BEAUTY</span>
                            </h2>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed font-light">
                                Undefined VIBE, Defined by Data.<br />
                                거울 속 모호했던 나의 분위기를<br />
                                <strong className="text-gray-900">0.1mm의 정확한 수치</strong>로 정의합니다.
                            </p>

                            <div className="space-y-6 mb-10">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gray-100 border border-brand/30 flex items-center justify-center flex-shrink-0">
                                        <span className="text-xl">👁️</span>
                                    </div>
                                    <div>
                                        <h4 className="text-gray-900 font-bold mb-1">Visual Logic</h4>
                                        <p className="text-gray-500 text-sm">"내가 알고 있던 나의 느낌들"을 단순한 감상이 아닌 객관적 지표로 정리해 줍니다.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gray-100 border border-brand/30 flex items-center justify-center flex-shrink-0">
                                        <span className="text-xl">📐</span>
                                    </div>
                                    <div>
                                        <h4 className="text-gray-900 font-bold mb-1">Precise Algorithm</h4>
                                        <p className="text-gray-500 text-sm">오직 당신만을 위해 설계된 VIBE 알고리즘을 경험해 보세요.</p>
                                    </div>
                                </div>
                            </div>

                            <a
                                href="https://vibe-face.netlify.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-brand transition-all duration-300"
                            >
                                <span>AI 분석 시작하기</span>
                                <span className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                                    →
                                </span>
                                <div className="absolute inset-0 rounded-full ring-2 ring-white/50 group-hover:ring-brand/50 animate-ping opacity-20" />
                            </a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            {/* Decorative Elements */}
                            <div className="absolute -inset-4 bg-gradient-to-tr from-brand/20 to-transparent rounded-3xl blur-2xl" />

                            <div className="relative bg-black border border-white/10 rounded-2xl overflow-hidden aspect-[4/3] group">
                                {/* 3D Model View */}
                                <div className="absolute inset-0 opacity-80 group-hover:opacity-100 transition-opacity duration-700">
                                    <FaceModel />
                                </div>
                                <div className="absolute inset-0 bg-grid-white/[0.05]" />

                                {/* Scanning Hud */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-[80%] h-[80%] border border-brand/30 relative">
                                        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-brand" />
                                        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-brand" />
                                        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-brand" />
                                        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-brand" />

                                        {/* Center Crosshair */}
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                            <div className="w-12 h-12 border border-brand/50 rounded-full flex items-center justify-center">
                                                <div className="w-1 h-1 bg-brand rounded-full" />
                                            </div>
                                        </div>

                                        {/* Data Points */}
                                        <div className="absolute top-1/4 left-1/4 flex gap-2 items-center">
                                            <div className="w-2 h-2 bg-brand rounded-full animate-pulse" />
                                            <span className="text-[10px] font-mono text-brand">P_042</span>
                                        </div>
                                        <div className="absolute bottom-1/3 right-1/4 flex gap-2 items-center flex-row-reverse">
                                            <div className="w-2 h-2 bg-brand rounded-full animate-pulse delay-100" />
                                            <span className="text-[10px] font-mono text-brand">P_089</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-black to-transparent" />
                                <div className="absolute bottom-6 left-6 font-mono text-xs text-brand-light">
                                    Scanning... 98%
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Brand Philosophy Section */}
            <section className="py-32 px-6 bg-[#f5f7fa] relative">
                <div className="max-w-6xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-headline font-serif font-bold text-gray-900 mb-6">
                            느낌이 데이터가 되는 순간
                        </h2>
                        <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
                            우리가 '느낌'이라 부르는 모든 것은 결국 정교한 '데이터'의 합이다.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: '정밀한 분석',
                                description: '얼굴의 수만 가지 좌표를 읽어내어 고유한 수치를 수집합니다.',
                                icon: '📊'
                            },
                            {
                                title: '데이터 증명',
                                description: '왜 이 스타일이 어울리는지를 수치와 비율로 설명합니다.',
                                icon: '🔬'
                            },
                            {
                                title: '스타일 설계',
                                description: '분석된 데이터를 기반으로 최적의 스타일 가이드를 제공합니다.',
                                icon: '✨'
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="group relative p-8 bg-white border border-gray-100 rounded-2xl hover:border-brand/40 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(0,194,255,0.12)] shadow-sm"
                            >
                                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-brand transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-gray-500 leading-relaxed">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Data Stats Section */}
            <section className="py-32 px-6 bg-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand/3 to-transparent opacity-60" />

                <div className="max-w-6xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-headline font-serif font-bold text-gray-900 mb-6">
                            데이터로 증명하는 스타일
                        </h2>
                        <p className="text-xl text-gray-500 max-w-3xl mx-auto">
                            VIBE는 막연한 '느낌'을 말하지 않습니다
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-16 mb-20">
                        <StatCounter value={10000} label="분석 데이터 포인트" suffix="+" />
                        <StatCounter value={98} label="고객 만족도" suffix="%" />
                        <StatCounter value={500} label="스타일 프로파일" suffix="+" />
                    </div>

                    <DataVisualization />
                </div>
            </section>

            {/* Services Preview */}
            <section className="py-32 px-6 relative bg-[#f5f7fa]">
                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-headline font-serif font-bold text-gray-900 mb-6">
                            VIBE SYSTEM
                        </h2>
                        <p className="text-xl text-gray-500 max-w-3xl mx-auto">
                            데이터 분석부터 스타일 구현까지
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'VIBE SCAN',
                                subtitle: '데이터 추출',
                                description: '정밀 분석 시스템을 통해 얼굴의 수만 가지 좌표를 읽어냅니다.',
                                color: 'from-brand to-brand-dark'
                            },
                            {
                                title: 'VIBE ANALYSIS',
                                subtitle: '분위기 증명',
                                description: '수집된 데이터로 개인의 분위기 원형을 분석합니다.',
                                color: 'from-brand-light to-brand'
                            },
                            {
                                title: 'VIBE GUIDE',
                                subtitle: '스타일 설계',
                                description: '최적 공식을 담은 퍼스널 데이터 시트를 제공합니다.',
                                color: 'from-brand-dark to-brand'
                            },
                            {
                                title: 'VIBE TOUCH',
                                subtitle: '퀵 메이크업',
                                description: '데이터 기반 현장 이미지 보정 서비스입니다.',
                                color: 'from-brand-dark to-accent'
                            },
                            {
                                title: 'VIBE DIRECTING',
                                subtitle: '패션·헤어 컨설팅',
                                description: '전문가가 직접 스타일을 가이드합니다.',
                                color: 'from-accent to-brand-dark'
                            },
                            {
                                title: 'VIBE CLASS',
                                subtitle: '셀프 브랜딩 교육',
                                description: '스스로 스타일을 관리하는 실전 노하우를 전수합니다.',
                                color: 'from-brand to-accent'
                            }
                        ].map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group relative overflow-hidden rounded-2xl p-8 bg-white border border-gray-100 hover:border-brand/40 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(0,194,255,0.1)] shadow-sm"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                                <div className="relative z-10">
                                    <div className="text-caption text-brand mb-2 font-mono">
                                        {service.subtitle}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-brand transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-500 leading-relaxed mb-6">
                                        {service.description}
                                    </p>
                                    <div className="flex items-center text-brand font-medium group-hover:translate-x-2 transition-transform duration-300">
                                        자세히 보기 →
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mt-16"
                    >
                        <Link
                            to="/services"
                            className="inline-block px-10 py-5 bg-white text-black rounded-full font-medium hover:bg-brand hover:text-black transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                        >
                            전체 서비스 보기
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-white via-brand/5 to-white" />
                <GridScanEffect />

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-headline font-serif font-bold text-gray-900 mb-6">
                            당신의 느낌을 데이터로
                        </h2>
                        <p className="text-xl text-gray-500 mb-12 leading-relaxed">
                            막연하게 느껴왔던 분위기, 이제 데이터로 확인하세요.<br />
                            나를 표현하는 일은 더 이상 막막한 과제가 아닌 즐거운 확신이 됩니다.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-block px-12 py-5 bg-brand text-black rounded-full font-bold hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,234,255,0.6)]"
                        >
                            무료 상담 신청하기
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default Home
