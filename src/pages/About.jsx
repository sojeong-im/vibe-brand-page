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
        <div className="bg-transparent text-white">
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
                        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-brand/80"></div>
                        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-brand/80"></div>
                        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-brand/80"></div>
                        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-brand/80"></div>

                        {/* Center Crosshair */}
                        <div className="absolute top-1/2 left-1/2 w-4 h-4 -translate-x-1/2 -translate-y-1/2 border border-white/30"></div>

                        {/* Tracking Label */}
                        <div className="absolute -top-6 left-0 text-[10px] text-brand font-mono tracking-widest bg-black/50 px-2 py-1">
                            TARGET_DETECTED [ID:8821]
                        </div>
                    </div>

                    {/* Scanning Line - Stronger */}
                    <div className="absolute inset-x-0 h-[2px] bg-brand shadow-[0_0_20px_#00EAFF] animate-scan-line opacity-80" />

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
                            <div className="text-brand">SCANNING... 82%</div>
                            <div className="w-24 h-1 bg-white/10 mt-1">
                                <div className="w-[82%] h-full bg-brand"></div>
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
                        <div className="w-20 h-px bg-brand mb-12 animate-fade-in-up delay-200" />
                        <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed max-w-2xl keep-all animate-fade-in-up delay-300">
                            VIBE는 주관적인 '인상'을 객관적인 '지표'로 변환하여, 개인의 고유한 매력을 찾아주는 비주얼 로직(Visual Logic) 분석 브랜드입니다.
                        </p>
                    </div>
                </div>
            </section>

            {/* What We Do */}
            <section ref={addToRefs} className="reveal py-32 px-6 bg-brand/5 border-y border-brand/10">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-brand font-bold text-xs tracking-[0.3em] uppercase mb-8">What We Do</p>
                    <h2 className="font-serif text-3xl md:text-5xl font-light leading-loose mb-12 keep-all text-white">
                        가장 나다운 모습을 찾는<br />
                        <strong className="font-bold">데이터 기반 스타일 솔루션</strong>
                    </h2>
                    <p className="text-gray-300 leading-relaxed text-lg keep-all max-w-3xl mx-auto mb-16">
                        VIBE는 막연하게 느껴지던 '분위기'와 '매력'을 AI 기술을 통해 객관적인 데이터로 수치화합니다. 
                        얼굴형, 이목구비, 체형 등을 분석하여 <strong>나에게 가장 최적화된 헤어, 메이크업, 패션 프로파일 리포트를 제공</strong>하는 스타일 큐레이션 전문 기업입니다.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-black/40 border border-white/10 p-8 hover:border-brand transition-colors text-left">
                            <h3 className="font-serif text-xl mb-4 text-brand">01. AI Analysis</h3>
                            <p className="text-gray-400 text-sm leading-relaxed keep-all">
                                주관적인 느낌에 의존하지 않고, 신체와 얼굴의 특징을 정밀하게 추출하여 논리적인 지표로 변환합니다.
                            </p>
                        </div>
                        <div className="bg-black/40 border border-white/10 p-8 hover:border-brand transition-colors text-left">
                            <h3 className="font-serif text-xl mb-4 text-brand">02. Profile Report</h3>
                            <p className="text-gray-400 text-sm leading-relaxed keep-all">
                                도출된 데이터를 바탕으로 헤어스타일, 메이크업 톤, 패션 실루엣에 대한 명확한 가이드라인을 제시합니다.
                            </p>
                        </div>
                        <div className="bg-black/40 border border-white/10 p-8 hover:border-brand transition-colors text-left">
                            <h3 className="font-serif text-xl mb-4 text-brand">03. Custom Curation</h3>
                            <p className="text-gray-400 text-sm leading-relaxed keep-all">
                                나의 매력을 극대화할 수 있는 구체적인 뷰티/패션 아이템과 스타일링 팁을 1:1 맞춤형으로 큐레이션합니다.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Profile Card Section */}
            <section ref={addToRefs} className="reveal py-32 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <p className="text-brand font-bold text-xs tracking-[0.3em] uppercase mb-8">Exclusive Product</p>
                            <h2 className="font-serif text-4xl md:text-5xl font-light mb-8 text-white leading-tight keep-all">
                                VIBE <span className="italic text-brand">Profile Card</span>
                            </h2>
                            <p className="text-gray-300 text-lg leading-relaxed mb-8 keep-all">
                                주관적인 분위기를 물리적인 데이터로 소장하는 가장 완벽한 방법. 
                                VIBE Profile Card는 AI 분석을 통해 도출된 당신의 비주얼 지표를 정교하게 시각화한 결과지입니다.
                            </p>
                            <div className="bg-white/5 border-l-2 border-brand p-6 mb-8">
                                <p className="text-white/80 text-sm leading-relaxed keep-all">
                                    "현재 런칭 행사 참가자 분들께 한정판으로 신청을 통해 제작해 드리고 있으며, 
                                    VIBE가 준비 중인 가장 중요한 핵심 프로파일 제품입니다."
                                </p>
                            </div>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-gray-400">
                                    <div className="w-1.5 h-1.5 rounded-full bg-brand"></div>
                                    <span>AI 이목구비 골격 및 비율 데이터 시각화</span>
                                </li>
                                <li className="flex items-center gap-3 text-gray-400">
                                    <div className="w-1.5 h-1.5 rounded-full bg-brand"></div>
                                    <span>개인화된 무드 큐레이션 및 컬러 팔레트</span>
                                </li>
                                <li className="flex items-center gap-3 text-gray-400">
                                    <div className="w-1.5 h-1.5 rounded-full bg-brand"></div>
                                    <span>물리적 소장이 가능한 고품질 카드 형태</span>
                                </li>
                            </ul>
                        </div>
                        <div className="order-1 lg:order-2 relative">
                            <div className="absolute -inset-4 border border-brand/20 -z-10 animate-pulse"></div>
                            <div className="bg-black p-4 border border-white/10 shadow-2xl">
                                <img 
                                    src="/assets/vibe_profile_sample.png" 
                                    alt="VIBE Profile Card Limited Edition" 
                                    className="w-full h-auto grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                                />
                            </div>
                            {/* HUD Element */}
                            <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-brand bg-black/80 border-b border-l border-brand/30">
                                PRODUCT_TYPE: PROFILE_CARD_V1
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Brand Philosophy */}
            <section ref={addToRefs} className="reveal py-32 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-brand font-bold text-xs tracking-[0.3em] uppercase mb-8">Philosophy</p>
                    <h2 className="font-serif text-3xl md:text-5xl font-light leading-loose mb-16 keep-all text-white">
                        "우리가 '느낌'이라 부르는 모든 것은<br />
                        결국 정교한 <span className="text-brand italic">데이터</span>의 합이다."
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-left">
                        <div className="space-y-6">
                            <h3 className="font-serif text-2xl mb-4 text-white">Visual Logic</h3>
                            <p className="text-gray-400 leading-relaxed keep-all">
                                스타일은 감각의 영역이지만, 좋은 느낌에는 반드시 논리적인 이유가 있습니다.
                                VIBE는 찰나의 인상 뒤에 숨겨진 선의 각도, 비율, 조화를 추적합니다.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <h3 className="font-serif text-2xl mb-4 text-white">Objectivity</h3>
                            <p className="text-gray-400 leading-relaxed keep-all">
                                주관적인 잔상을 실질적인 지표로 전환하여, 누구나 자신의 분위기를 논리적으로 이해하고 운용할 수 있도록 돕는 것이 VIBE의 본질입니다.
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
                        <div className="border border-white/20 p-10 hover:border-brand transition-colors duration-500 group text-left">
                            <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center mb-8 group-hover:bg-brand group-hover:border-brand transition-all">
                                <span className="font-serif text-xl">1</span>
                            </div>
                            <h3 className="font-serif text-2xl mb-4 group-hover:text-brand transition-colors">VIBE Tech Platform</h3>
                            <p className="text-white/60 leading-relaxed keep-all text-sm">
                                오프라인 진단의 정밀함을 온라인으로 구현하여, 사진 한 장만으로 개인이 고유 수치를 확인하고 관리할 수 있는 'AI 분위기 분석 엔진'을 고도화합니다.
                            </p>
                        </div>

                        <div className="border border-white/20 p-10 hover:border-brand transition-colors duration-500 group text-left">
                            <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center mb-8 group-hover:bg-brand group-hover:border-brand transition-all">
                                <span className="font-serif text-xl">2</span>
                            </div>
                            <h3 className="font-serif text-2xl mb-4 group-hover:text-brand transition-colors">V-Commerce</h3>
                            <p className="text-white/60 leading-relaxed keep-all text-sm">
                                단순한 추천을 넘어, 사용자의 분석 수치와 제품의 사양을 매칭하는 '수치 맞춤형 큐레이션 커머스'를 구축하여 쇼핑의 새로운 표준을 제시합니다.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Closing Statement */}
            <section ref={addToRefs} className="reveal py-40 px-6 bg-transparent text-white text-center border-t border-white/10">
                <div className="max-w-4xl mx-auto">
                    <h2 className="font-serif text-4xl md:text-6xl font-light mb-16 leading-relaxed keep-all">
                        당신이 막연하게 느껴왔던 분위기,<br />
                        <span className="block mt-4">이제 데이터로 확인하세요.</span>
                    </h2>
                    <Link
                        to="/services"
                        className="inline-block px-14 py-5 bg-white text-black text-sm tracking-[0.2em] uppercase hover:bg-brand hover:text-black transition-all duration-300"
                    >
                        시작하기
                    </Link>
                </div>
            </section>
        </div>
    )
}
