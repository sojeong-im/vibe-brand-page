import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion'
import { ArrowRight, Scan, GitGraph, Layers, ArrowUpRight } from 'lucide-react'

// --- Components ---

const Marquee = ({ text }) => {
    return (
        <div className="relative flex overflow-hidden py-6 bg-burgundy text-white">
            <motion.div
                className="flex whitespace-nowrap gap-12 font-serif text-2xl uppercase tracking-widest"
                animate={{ x: [0, -1000] }}
                transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
            >
                {Array(10).fill(text).map((item, i) => (
                    <span key={i} className="flex items-center gap-12">
                        {item} <span className="w-2 h-2 bg-white rounded-full opacity-50" />
                    </span>
                ))}
            </motion.div>
        </div>
    )
}

const ServiceCard = ({ title, sub, desc, img, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="group relative h-[400px] md:h-[500px] border border-gray-200 bg-white overflow-hidden"
        >
            <div className="absolute inset-0 bg-gray-100 overflow-hidden">
                <img src={img} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
            </div>

            <div className="absolute bottom-0 left-0 w-full p-8 text-white z-10">
                <div className="overflow-hidden mb-2">
                    <p className="text-xs font-mono mb-2 text-white/70 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                        SERVICE_0{index + 1}
                    </p>
                </div>
                <h3 className="font-serif text-3xl font-light mb-4">{title}</h3>
                <p className="text-sm text-white/80 max-w-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {desc}
                </p>
            </div>

            <Link to="/services" className="absolute top-6 right-6 w-10 h-10 border border-white/30 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:text-black">
                <ArrowUpRight size={18} />
            </Link>
        </motion.div>
    )
}

// --- Background Components ---

const HeroBackground = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none perspective-[1000px]">

            {/* 3D Gyroscopic Identity Core */}
            <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] z-0 flex items-center justify-center scale-110 md:scale-125">
                <style>{`
                    .gyro-container {
                        width: 300px;
                        height: 300px;
                        position: relative;
                        transform-style: preserve-3d;
                        animation: float 6s ease-in-out infinite;
                    }

                    .ring {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        border: 1px solid rgba(74, 9, 9, 0.5);
                        border-radius: 50%;
                        transform-style: preserve-3d;
                    }

                    .ring-inner {
                        border: 1px dashed rgba(74, 9, 9, 0.8);
                        width: 80%;
                        height: 80%;
                        top: 10%;
                        left: 10%;
                    }

                    .ring-core {
                        width: 60%;
                        height: 60%;
                        top: 20%;
                        left: 20%;
                        border: 2px solid rgba(74, 9, 9, 0.1);
                        background: radial-gradient(circle at 30% 30%, rgba(74,9,9,0.1), transparent);
                    }

                    .ring-1 { animation: rotate1 12s linear infinite; }
                    .ring-2 { animation: rotate2 15s linear infinite; width: 110%; height: 110%; top: -5%; left: -5%; border-color: rgba(74,9,9,0.2); }
                    .ring-3 { animation: rotate3 20s linear infinite; width: 130%; height: 130%; top: -15%; left: -15%; border-style: dotted; border-width: 2px; }

                    .core-orb {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        width: 100px;
                        height: 100px;
                        background: radial-gradient(circle, rgba(74,9,9,0.8) 0%, rgba(74,9,9,0.2) 60%, transparent 100%);
                        border-radius: 50%;
                        box-shadow: 0 0 50px rgba(74,9,9,0.4);
                        animation: pulse-core 3s ease-in-out infinite;
                    }

                    .data-point {
                        position: absolute;
                        background: #4a0909;
                        border-radius: 50%;
                        opacity: 0.6;
                    }

                    @keyframes rotate1 { 0% { transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg); } 100% { transform: rotateX(360deg) rotateY(180deg) rotateZ(360deg); } }
                    @keyframes rotate2 { 0% { transform: rotateX(60deg) rotateY(0deg); } 100% { transform: rotateX(60deg) rotateY(360deg); } }
                    @keyframes rotate3 { 0% { transform: rotateX(-60deg) rotateY(0deg); } 100% { transform: rotateX(-60deg) rotateY(-360deg); } }
                    
                    @keyframes float { 0%, 100% { transform: translateY(0) scale(1); } 50% { transform: translateY(-20px) scale(0.95); } }
                    @keyframes pulse-core { 0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.8; } 50% { transform: translate(-50%, -50%) scale(1.1); opacity: 0.5; } }
                `}</style>

                <div className="gyro-container">
                    {/* Rotating Rings */}
                    <div className="ring ring-1">
                        <div className="absolute top-0 left-1/2 w-2 h-2 bg-burgundy rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                    </div>
                    <div className="ring ring-2"></div>
                    <div className="ring ring-3"></div>

                    {/* Inner Structure */}
                    <div className="ring ring-inner" style={{ animation: 'rotate3 10s linear infinite reverse' }}></div>

                    {/* Central Core */}
                    <div className="core-orb">
                        {/* Core Scan Line */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent w-full h-[20%] animate-scan-fast opacity-50"></div>
                    </div>
                </div>

                {/* Floating PROFILING DATA Particles */}
                <motion.div
                    className="absolute top-10 right-[-50px] bg-white/10 backdrop-blur-md px-4 py-2 border-l-2 border-burgundy shadow-lg"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1, duration: 1 }}
                >
                    <p className="font-mono text-[10px] text-burgundy font-bold tracking-widest">MATCH: 98.4%</p>
                    <p className="font-mono text-[8px] text-gray-500">ID: A-482-X</p>
                </motion.div>

                <motion.div
                    className="absolute bottom-[-20px] left-[-40px] bg-white/10 backdrop-blur-md px-4 py-2 border-r-2 border-burgundy shadow-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.5, duration: 1 }}
                >
                    <p className="font-mono text-[10px] text-burgundy font-bold tracking-widest">ANALYZING...</p>
                    <div className="w-16 h-1 bg-gray-200 mt-1 overflow-hidden">
                        <motion.div
                            className="h-full bg-burgundy"
                            animate={{ width: ["0%", "100%"] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                    </div>
                </motion.div>
            </div>

            {/* Background Grid & Noise */}
            <div className="absolute inset-0 opacity-[0.04]">
                <svg width="100%" height="100%">
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>
            <motion.div
                className="absolute top-0 bottom-0 w-px bg-burgundy/20"
                style={{ left: '50%' }}
                animate={{ height: ['0%', '100%'], opacity: [0, 1, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
        </div>
    )
}

export default function Home() {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    // Parallax logic for Hero
    const yHero = useTransform(scrollYProgress, [0, 0.2], ["0%", "50%"])
    const opacityHero = useTransform(scrollYProgress, [0, 0.2], [1, 0])

    return (
        <div ref={containerRef} className="bg-white">

            {/* HERO SECTION */}
            <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden border-b border-gray-100">
                <HeroBackground />
                <motion.div
                    style={{ y: yHero, opacity: opacityHero }}
                    className="absolute inset-0 z-0"
                >
                    {/* Abstract Video Placeholder or Gradient Mesh */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#fff_0%,_#fffafa_50%,_#fff_100%)]" />
                    <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                </motion.div>

                <div className="relative z-10 text-center px-6 mix-blend-darken text-black">
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-burgundy/5 border border-burgundy/10 mb-8 backdrop-blur-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-burgundy animate-pulse" />
                            <p className="font-mono text-[10px] tracking-[0.2em] text-burgundy font-medium">VISUAL LOGIC SYSTEM 2.0</p>
                        </div>

                        <h1 className="font-serif text-[15vw] leading-[0.8] tracking-tighter text-black mb-6">
                            VIBE
                        </h1>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8">
                            <span className="hidden md:block h-px w-12 bg-black/10" />
                            <p className="font-sans font-light text-lg tracking-wide text-gray-500 max-w-sm leading-relaxed keep-all">
                                482개의 얼굴 데이터 포인트 분석을 통해<br className="hidden md:block" /> 당신만의 고유한 스타일 원형을 찾습니다.
                            </p>
                            <span className="hidden md:block h-px w-12 bg-black/10" />
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                >
                    <span className="text-[10px] font-mono text-gray-400">SCROLL TO ANALYZE</span>
                    <div className="w-px h-12 bg-gray-200 relative overflow-hidden">
                        <motion.div
                            className="absolute top-0 left-0 w-full h-1/2 bg-burgundy"
                            animate={{ y: ["-100%", "200%"] }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                        />
                    </div>
                </motion.div>
            </section>

            {/* MARQUEE */}
            <Marquee text="DATA DRIVEN STYLE • PERSONALIZED VIBE • VISUAL LOGIC •" />

            {/* INTRO / PHILOSOPHY - BENTO GRID */}
            <section className="py-32 px-6 lg:px-12 max-w-[1600px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">

                    {/* Main Statement */}
                    <div className="md:col-span-8 bg-gray-50 p-12 flex flex-col justify-between border border-gray-100 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity">
                            <Scan size={48} strokeWidth={1} />
                        </div>
                        <div>
                            <h2 className="font-serif text-4xl lg:text-6xl leading-tight mb-8">
                                "Feeling is just<br />
                                <span className="text-burgundy">unprocessed data.</span>"
                            </h2>
                        </div>
                        <div className="flex items-end justify-between">
                            <p className="max-w-md text-gray-500 leading-relaxed text-sm lg:text-base keep-all">
                                스타일은 감각의 영역이지만, 좋은 느낌에는 반드시 논리적인 이유가 있습니다.
                                VIBE는 찰나의 인상 뒤에 숨겨진 선의 각도, 비율, 조화를 추적하여 데이터로 증명합니다.
                            </p>
                            <Link to="/about" className="hidden md:flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-burgundy transition-colors">
                                Our Logic <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>

                    {/* Stats / Tech */}
                    <div className="md:col-span-4 grid grid-rows-2 gap-6">
                        <div className="bg-black text-white p-8 flex flex-col justify-between group hover:bg-burgundy transition-colors duration-500">
                            <GitGraph size={32} className="text-white/50 group-hover:text-white transition-colors" />
                            <div>
                                <h3 className="text-4xl font-light mb-1">99.8%</h3>
                                <p className="text-xs font-mono text-white/50">Analysis Accuracy</p>
                            </div>
                        </div>
                        <div className="bg-gray-100 p-8 flex flex-col justify-between relative overflow-hidden">
                            <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-10">
                                {Array(36).fill(0).map((_, i) => (
                                    <div key={i} className="border-[0.5px] border-black" />
                                ))}
                            </div>
                            <Layers size={32} className="relative z-10 text-black/50" />
                            <div className="relative z-10">
                                <h3 className="text-xl font-serif mb-1">Detailed Report</h3>
                                <p className="text-xs text-gray-500">PDF 형식의 영구 소장 가이드</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SERVICES PREVIEW */}
            <section className="py-20 px-6 lg:px-12 bg-white">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-gray-100 pb-8">
                    <div>
                        <p className="font-mono text-xs text-burgundy mb-2">VIBE SOLUTIONS</p>
                        <h2 className="font-serif text-4xl font-light">Service Line-up</h2>
                    </div>
                    <Link to="/services" className="text-sm border-b border-black pb-1 hover:text-burgundy hover:border-burgundy transition-colors mt-4 md:mt-0">
                        View All Services
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <ServiceCard
                        index={0}
                        title="VIBE HAIR"
                        sub="헤어 컨설팅"
                        desc="얼굴형과 이목구비 비율을 분석하여 가장 이상적인 가르마, 기장, 펌 스타일을 제안합니다."
                        img="/assets/hair.jpg"
                    />
                    <ServiceCard
                        index={1}
                        title="VIBE MAKEUP"
                        sub="메이크업 컨설팅"
                        desc="피부톤 정밀 진단과 이목구비 분석을 통해 나에게 꼭 맞는 컬러와 쉐입을 찾아드립니다."
                        img="/assets/makeup.jpg"
                    />
                    <ServiceCard
                        index={2}
                        title="VIBE FASHION"
                        sub="패션 컨설팅"
                        desc="체형 분석 데이터를 기반으로 체형을 보완하고 장점을 극대화하는 핏과 스타일링을 코칭합니다."
                        img="/assets/fashion_1.png"
                    />
                </div>
            </section>

            {/* INTERACTIVE CTA - SCANNER */}
            <section className="py-32 bg-black text-white relative overflow-hidden group">
                <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-1000">
                    <img src="/assets/project2.png" alt="Background" className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[2s]" />
                </div>

                {/* Scan Overlay Lines */}
                <div className="absolute inset-x-0 top-0 h-px bg-burgundy/50 shadow-[0_0_20px_#4a0909] animate-scan-line" />

                <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
                    <h2 className="font-serif text-5xl md:text-7xl mb-8 leading-tight">
                        Ready to Find<br />Your <span className="text-burgundy italic">Own Vibe?</span>
                    </h2>
                    <p className="text-white/60 text-lg mb-12 max-w-xl mx-auto">
                        더 이상 감에 의존하지 마세요. 당신의 고유한 분위기를 데이터로 증명해드립니다.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center justify-center h-14 px-10 border border-white/20 bg-white/5 backdrop-blur-sm text-sm tracking-widest uppercase hover:bg-burgundy hover:border-burgundy transition-all duration-300"
                    >
                        Start Analysis
                    </Link>
                </div>
            </section>
        </div>
    )
}
