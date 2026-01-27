import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

export default function About() {
    const sectionsRef = useRef([])

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible')
                    }
                })
            },
            { threshold: 0.1 }
        )

        sectionsRef.current.forEach((section) => {
            if (section) observer.observe(section)
        })

        return () => observer.disconnect()
    }, [])

    const addToRefs = (el) => {
        if (el && !sectionsRef.current.includes(el)) {
            sectionsRef.current.push(el)
        }
    }

    return (
        <div className="bg-white">
            {/* Hero Section */}
            {/* Hero Section */}
            <section className="min-h-[80vh] flex flex-col justify-center bg-black relative overflow-hidden">
                {/* Visual Analysis Background Layer */}
                <div className="absolute inset-0 pointer-events-none">
                    {/* Base Image with Analysis Filters */}
                    <div className="absolute inset-0 opacity-100">
                        <img
                            src="/assets/about_hero.jpg"
                            alt="VIBE Visual Analysis"
                            className="w-full h-full object-cover object-center grayscale-[0.3] contrast-125 brightness-75 scale-105"
                        />
                        {/* Digital Texture Overlay */}
                        <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay" />
                    </div>

                    {/* Gradient Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

                    {/* Tech Grid Overlay - Enhanced */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:10px_10px]" />

                    {/* Facial Analysis Target Box (Center) */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[400px] border border-white/20 hidden md:block">
                        {/* Corner Brackets */}
                        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-accent/80"></div>
                        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-accent/80"></div>
                        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-accent/80"></div>
                        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-accent/80"></div>

                        {/* Center Crosshair */}
                        <div className="absolute top-1/2 left-1/2 w-4 h-4 -translate-x-1/2 -translate-y-1/2 border border-white/30"></div>

                        {/* Tracking Label */}
                        <div className="absolute -top-6 left-0 text-[10px] text-accent font-mono tracking-widest bg-black/50 px-2 py-1">
                            TARGET_DETECTED [ID:8821]
                        </div>
                    </div>

                    {/* Scanning Line - Stronger */}
                    <div className="absolute inset-x-0 h-[2px] bg-accent shadow-[0_0_20px_rgba(37,99,235,0.5)] animate-scan-line opacity-80" />

                    {/* Dynamic Glitch / Noise Overlay */}
                    <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

                    {/* Data Scroll Column (Left) */}
                    <div className="absolute top-20 left-10 w-48 hidden lg:block overflow-hidden h-full mask-gradient-b">
                        <div className="font-mono text-[9px] text-white/20 leading-tight space-y-1">
                            {Array.from({ length: 20 }).map((_, i) => (
                                <div key={i} className="flex justify-between">
                                    <span>0x{Math.floor(Math.random() * 1000)}F</span>
                                    <span>COORD:{Math.floor(Math.random() * 99)}.{Math.floor(Math.random() * 99)}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Targeting Corners (HUD) */}
                    <div className="absolute inset-0 m-6 border border-white/5" />
                    <div className="absolute top-8 left-8 w-12 h-12 border-t border-l border-white/30" />
                    <div className="absolute bottom-8 right-8 w-12 h-12 border-b border-r border-white/30" />

                    {/* Floating Analysis Data (Right) */}
                    <div className="absolute top-1/4 right-10 flex flex-col items-end text-[10px] text-white/50 font-mono tracking-widest gap-2 hidden md:flex">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                            <span>SYSTEM_READY</span>
                        </div>
                        <div className="text-right">
                            <div className="text-accent">SCANNING... 82%</div>
                            <div className="w-24 h-1 bg-white/10 mt-1">
                                <div className="w-[82%] h-full bg-accent"></div>
                            </div>
                        </div>
                        <div className="space-y-1 text-right mt-4 text-white/30">
                            <div>FACIAL_NODES: 482</div>
                            <div>SKIN_TONE: #E2C4B5</div>
                            <div>FACE_SHAPE: OVAL_02</div>
                        </div>
                    </div>
                </div>

                <div className="absolute inset-0 bg-black/50" />

                <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
                    <div className="max-w-4xl">
                        <p className="text-white/70 text-sm tracking-[0.3em] uppercase mb-8 ml-1 animate-fade-in-up font-mono">About VIBE_System</p>
                        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-light leading-tight mb-12 animate-fade-in-up delay-100">
                            느낌이<br />데이터가 되는 순간
                        </h1>
                        <div className="w-20 h-px bg-accent mb-12 animate-fade-in-up delay-200" />
                        <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed max-w-2xl keep-all animate-fade-in-up delay-300">
                            VIBE는 주관적인 '인상'을 객관적인 '지표'로 변환하여, 개인의 고유한 매력을 찾아주는 비주얼 로직(Visual Logic) 분석 브랜드입니다.
                        </p>
                    </div>
                </div>
            </section>

            {/* Brand Philosophy */}
            <section ref={addToRefs} className="reveal py-32 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-accent font-bold text-xs tracking-[0.3em] uppercase mb-8">Philosophy</p>
                    <h2 className="font-serif text-3xl md:text-5xl font-light leading-loose mb-16 keep-all">
                        "우리가 '느낌'이라 부르는 모든 것은<br />
                        결국 정교한 <span className="text-accent italic">데이터</span>의 합이다."
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-left">
                        <div className="space-y-6">
                            <h3 className="font-serif text-2xl mb-4">Visual Logic</h3>
                            <p className="text-gray-600 leading-relaxed keep-all">
                                스타일은 감각의 영역이지만, 좋은 느낌에는 반드시 논리적인 이유가 있습니다.
                                VIBE는 찰나의 인상 뒤에 숨겨진 선의 각도, 비율, 조화를 추적합니다.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <h3 className="font-serif text-2xl mb-4">Objectivity</h3>
                            <p className="text-gray-600 leading-relaxed keep-all">
                                주관적인 잔상을 실질적인 지표로 전환하여, 누구나 자신의 분위기를 논리적으로 이해하고 운용할 수 있도록 돕는 것이 VIBE의 본질입니다.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CEO Message / Narrative */}
            <section ref={addToRefs} className="reveal bg-gray-50 py-32 px-6 border-y border-gray-200">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="aspect-[4/5] bg-gray-200 overflow-hidden relative">
                        <img src="/assets/project2.png" alt="Director" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
                        <div className="absolute bottom-8 left-8 text-white z-10">
                            <p className="text-xs tracking-widest uppercase mb-2">Director</p>
                            <p className="font-serif text-2xl">Kim Sehee</p>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>

                    <div>
                        <p className="text-accent font-bold text-xs tracking-[0.3em] uppercase mb-6">Our Narrative</p>
                        <h2 className="font-serif text-4xl md:text-5xl font-light leading-loose mb-8 keep-all">
                            "느낌으로만 설명되던 스타일의 영역을<br />데이터로 바꿨습니다."
                        </h2>
                        <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                            <p className="keep-all">
                                IT 마케터로 일하며 모든 성과를 수치로 증명해왔지만, 정작 '나에게 어울리는 스타일'은 누구도 논리적으로 설명해주지 못했습니다.
                            </p>
                            <p className="keep-all">
                                그래서 직접 얼굴의 선과 비율을 엑셀에 데이터로 쌓으며 분석 시스템을 만들었습니다. VIBE는 주관적인 감에 의존하지 않고, 객관적인 수치로 당신만의 스타일 가이드를 증명하는 브랜드입니다.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision */}
            <section ref={addToRefs} className="reveal py-32 px-6 bg-black text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-white/50 text-xs tracking-[0.3em] uppercase mb-12">Vision</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="border border-white/20 p-10 hover:border-accent transition-colors duration-500 group text-left">
                            <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center mb-8 group-hover:bg-accent group-hover:border-accent transition-all">
                                <span className="font-serif text-xl">1</span>
                            </div>
                            <h3 className="font-serif text-2xl mb-4 group-hover:text-accent transition-colors">VIBE Tech Platform</h3>
                            <p className="text-white/60 leading-relaxed keep-all text-sm">
                                오프라인 진단의 정밀함을 온라인으로 구현하여, 사진 한 장만으로 개인이 고유 수치를 확인하고 관리할 수 있는 'AI 분위기 분석 엔진'을 고도화합니다.
                            </p>
                        </div>

                        <div className="border border-white/20 p-10 hover:border-accent transition-colors duration-500 group text-left">
                            <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center mb-8 group-hover:bg-accent group-hover:border-accent transition-all">
                                <span className="font-serif text-xl">2</span>
                            </div>
                            <h3 className="font-serif text-2xl mb-4 group-hover:text-accent transition-colors">V-Commerce</h3>
                            <p className="text-white/60 leading-relaxed keep-all text-sm">
                                단순한 추천을 넘어, 사용자의 분석 수치와 제품의 사양을 매칭하는 '수치 맞춤형 큐레이션 커머스'를 구축하여 쇼핑의 새로운 표준을 제시합니다.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Closing Statement */}
            <section ref={addToRefs} className="reveal py-40 px-6 bg-white text-black text-center border-t border-gray-100">
                <div className="max-w-4xl mx-auto">
                    <h2 className="font-serif text-4xl md:text-6xl font-light mb-16 leading-relaxed keep-all">
                        당신이 막연하게 느껴왔던 분위기,<br />
                        <span className="block mt-4">이제 데이터로 확인하세요.</span>
                    </h2>
                    <Link
                        to="/services"
                        className="inline-block px-14 py-5 bg-black text-white text-sm tracking-[0.2em] uppercase hover:bg-accent transition-all duration-300"
                    >
                        시작하기
                    </Link>
                </div>
            </section>
        </div>
    )
}
