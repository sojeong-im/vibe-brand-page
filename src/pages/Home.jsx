import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'

// Hook for scroll animations
function useScrollReveal() {
    const ref = useRef(null)

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

        const elements = document.querySelectorAll('.reveal')
        elements.forEach((el) => observer.observe(el))

        return () => elements.forEach((el) => observer.unobserve(el))
    }, [])

    return ref
}

// Hero Section
function HeroSection() {
    return (
        <section className="min-h-screen relative overflow-hidden bg-black flex flex-col justify-center">
            {/* Background Image - Data Vibe with Analysis Overlay */}
            <div className="absolute inset-0">
                <img
                    src="/assets/process-step1.png"
                    alt="VIBE Data Analysis"
                    className="w-full h-full object-cover opacity-20 scale-105"
                />

                {/* Tech Grid Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
                <div className="absolute inset-0 border border-white/5 m-4 md:m-8 pointer-events-none" />

                {/* Micro UI Elements - Corners */}
                <div className="absolute top-8 left-8 w-4 h-4 border-t border-l border-white/30 hidden md:block" />
                <div className="absolute top-8 right-8 w-4 h-4 border-t border-r border-white/30 hidden md:block" />
                <div className="absolute bottom-8 left-8 w-4 h-4 border-b border-l border-white/30 hidden md:block" />
                <div className="absolute bottom-8 right-8 w-4 h-4 border-b border-r border-white/30 hidden md:block" />

                {/* Floating Data Tags */}
                <div className="absolute top-1/4 left-10 text-[10px] text-white/30 font-mono hidden lg:block">
                    <div>COORD: 34.201, 12.112</div>
                    <div>SCAN_RATE: 99.8%</div>
                </div>

                <div className="absolute bottom-1/4 right-10 text-[10px] text-white/30 font-mono text-right hidden lg:block">
                    <div>TARGET_ID: V-001</div>
                    <div>STATUS: ANALYZING</div>
                </div>

                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent opacity-80" />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20">
                <div className="flex flex-col items-center text-center">
                    <p className="text-white/60 text-sm md:text-base tracking-[0.2em] uppercase mb-8 animate-fade-in-up">
                        Own Your Vibe
                    </p>
                    <h1 className="font-serif text-6xl md:text-8xl lg:text-[10rem] xl:text-[12rem] text-white font-light leading-[0.85] tracking-tight mb-8 animate-fade-in-up delay-100">
                        VIBE
                    </h1>
                    <p className="text-white/90 text-lg md:text-xl font-light max-w-2xl mx-auto mb-12 animate-fade-in-up delay-200" style={{ wordBreak: 'keep-all' }}>
                        느낌이 데이터가 되는 순간, VIBE<br />
                        <span className="text-accent-light/90 text-base mt-3 block font-medium tracking-wider">마케터가 설계한 '스타일 원형' 분석 시스템</span>
                    </p>
                    <Link
                        to="/services"
                        className="inline-block px-12 py-5 border border-white/50 text-white text-sm tracking-[0.2em] uppercase hover:bg-accent hover:border-accent hover:text-white transition-all duration-500 animate-fade-in-up delay-300"
                    >
                        시작하기
                    </Link>
                </div>
            </div>

            {/* Bottom Copy */}
            <div className="absolute bottom-10 left-0 w-full px-6">
                <div className="max-w-7xl mx-auto border-t border-white/10 pt-6 flex justify-between items-end text-white/30 text-xs tracking-widest uppercase">
                    <div className="hidden md:block">Visual Logic Analysis</div>
                    <div>Based on Data</div>
                </div>
            </div>
        </section>
    )
}

// Brand Philosophy
function PhilosophySection() {
    return (
        <section className="py-32 bg-white">
            <div className="max-w-4xl mx-auto px-6 text-center reveal">
                <p className="text-xs tracking-[0.3em] uppercase text-accent mb-8 font-bold">Brand Philosophy</p>
                <h2 className="font-serif text-3xl md:text-5xl font-light leading-tight mb-12" style={{ wordBreak: 'keep-all' }}>
                    "우리가 '느낌'이라 부르는 모든 것은<br />
                    결국 정교한 <span className="text-accent font-medium">'데이터'</span>의 합입니다."
                </h2>
                <div className="w-px h-20 bg-accent mx-auto mb-12" />
                <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto mb-8" style={{ wordBreak: 'keep-all' }}>
                    스타일은 감각의 영역이지만, 좋은 느낌에는 반드시 논리적인 이유가 있습니다.
                    VIBE는 찰나의 인상 뒤에 숨겨진 선의 각도, 비율, 조화를 추적합니다.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto" style={{ wordBreak: 'keep-all' }}>
                    흩어져 있던 감각적인 '느낌'들을 수집해 하나의 객관적인 '데이터'로 정렬할 때,
                    비로소 나만의 고유한 스타일 가이드가 완성됩니다.
                </p>
            </div>
        </section>
    )
}

// VIBE SYSTEM
function SystemSection() {
    const steps = [
        {
            num: '01',
            title: 'VIBE SCAN',
            sub: '데이터 추출',
            desc: '정밀 분석 시스템을 통해 얼굴의 수만 가지 좌표를 읽어내어 고유한 수치를 수집합니다.'
        },
        {
            num: '02',
            title: 'VIBE ANALYSIS',
            sub: '분위기 증명',
            desc: '수집된 데이터를 바탕으로 개인이 가진 분위기의 원형을 분석하고 수치와 비율로 설명합니다.'
        },
        {
            num: '03',
            title: 'VIBE GUIDE',
            sub: '스타일 설계',
            desc: '헤어, 메이크업, 패션의 최적 공식을 담은 퍼스널 데이터 시트를 제공합니다.'
        }
    ]

    return (
        <section id="process" className="py-32 bg-gray-50 border-y border-gray-200">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-24 reveal">
                    <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4 font-bold">Process</p>
                    <h2 className="font-serif text-4xl md:text-5xl font-light mb-6">VIBE SYSTEM</h2>
                    <p className="text-gray-500 font-light text-lg">데이터 분석 체계</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
                    {/* Connecting Line for Desktop */}
                    <div className="absolute top-[20px] left-0 w-full h-px bg-gray-200 hidden md:block" />

                    {steps.map((step, idx) => (
                        <div key={idx} className="relative pt-12 reveal delay-100 group">
                            {/* Dot */}
                            <div className="absolute top-0 left-0 md:left-1/2 md:-translate-x-1/2 w-8 h-8 md:w-4 md:h-4 rounded-full bg-white border-2 border-gray-200 group-hover:border-accent group-hover:bg-accent transition-all duration-500 flex items-center justify-center md:block z-10 shadow-sm">
                                <span className="md:hidden text-[10px]">{idx + 1}</span>
                            </div>

                            <div className="text-center">
                                <div className="aspect-[4/5] mb-8 overflow-hidden bg-gray-100 relative group-hover:shadow-2xl transition-all duration-700 border border-gray-200 group-hover:border-accent">
                                    {/* Data Sheet Header */}
                                    <div className="absolute top-0 left-0 right-0 h-6 bg-white/90 border-b border-gray-200 flex items-center px-2 z-30">
                                        <div className="w-2 h-2 rounded-full bg-gray-300 mr-1" />
                                        <div className="w-2 h-2 rounded-full bg-gray-300 mr-1" />
                                        <span className="ml-auto text-[8px] font-mono text-gray-400">DATA_file_0{idx + 1}</span>
                                    </div>

                                    <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 z-20 transition-colors duration-500" />

                                    {/* Scanning Line Effect */}
                                    <div className="absolute top-0 left-0 right-0 h-px bg-accent/50 shadow-[0_0_10px_rgba(37,99,235,0.5)] translate-y-[-100%] group-hover:translate-y-[500%] transition-transform duration-[2s] z-30 opacity-0 group-hover:opacity-100 ease-linear" />

                                    {idx === 0 && <img src="/assets/process-step2.jpg" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" alt="Scanning" />}
                                    {idx === 1 && <img src="/assets/process-step3.jpg" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" alt="Analysis" />}
                                    {idx === 2 && <img src="/assets/process-step1.png" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" alt="Guide" />}
                                </div>
                                <h3 className="font-serif text-3xl font-light mb-3 group-hover:text-accent transition-colors duration-300">{step.title}</h3>
                                <p className="text-xs font-bold text-accent mb-4 tracking-[0.2em] uppercase">{step.sub}</p>
                                <p className="text-gray-500 leading-relaxed keep-all text-sm px-4">
                                    {step.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

// VIBE SOLUTION (Profiles)
function SolutionSection() {
    const solutions = [
        {
            number: '01',
            title: 'VIBE TOUCH',
            titleKr: '퀵 수정 메이크업',
            description: '데이터 분석 결과에 맞춰 현장에서 즉시 이미지를 보정하는 퀵 메이크업 가이드. 나에게 최적화된 포인트를 제안합니다.',
            image: '/assets/makeup3.png',
            link: '/services',
            reverse: false,
        },
        {
            number: '02',
            title: 'VIBE DIRECTING',
            titleKr: '패션·헤어 컨설팅',
            description: '분석된 체형과 이목구비 데이터에 따라 실무 전문가가 의상 매치와 헤어 라인을 직접 잡아주는 가이드 서비스입니다.',
            image: '/assets/fashion_1.png',
            link: '/services',
            reverse: true,
        },
        {
            number: '03',
            title: 'VIBE CLASS',
            titleKr: '셀프 브랜딩 교육',
            description: '데이터 시트를 보고 스스로 메이크업과 헤어를 관리할 수 있도록 실전 노하우를 전수하는 교육 프로그램입니다.',
            image: '/assets/fashion_2.png',
            link: '/services',
            reverse: false,
        },
    ]

    return (
        <section className="bg-white pb-20">
            <div className="text-center py-24 reveal">
                <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4 font-bold">Solution</p>
                <h2 className="font-serif text-4xl md:text-5xl font-light">VIBE SOLUTION</h2>
                <p className="text-gray-500 mt-4">실무 구현 서비스</p>
            </div>
            {solutions.map((sol, index) => (
                <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 min-h-[60vh] reveal`}>
                    <div className={`relative overflow-hidden bg-gray-100 ${sol.reverse ? 'lg:order-2' : ''}`}>
                        <img
                            src={sol.image}
                            alt={sol.title}
                            className="w-full h-full object-cover absolute inset-0 hover:scale-105 transition-transform duration-700"
                        />
                    </div>

                    <div className={`flex items-center bg-white ${sol.reverse ? 'lg:order-1' : ''}`}>
                        <div className="p-10 lg:p-16 xl:p-20">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="text-xs tracking-[0.3em] uppercase text-gray-400">{sol.number}</span>
                                <div className="w-12 h-px bg-gray-300" />
                            </div>
                            <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light mb-3">{sol.title}</h3>
                            <p className="text-gray-400 text-lg mb-8">{sol.titleKr}</p>
                            <p className="text-gray-600 leading-relaxed mb-10 max-w-md" style={{ wordBreak: 'keep-all' }}>{sol.description}</p>
                            <Link
                                to={sol.link}
                                className="inline-flex items-center gap-3 text-sm tracking-wide group hover:text-accent transition-colors"
                            >
                                <span className="border-b border-black pb-1 group-hover:border-accent">자세히 보기</span>
                                <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
}

// Brand Narrative / Why VIBE
function NarrativeSection() {
    return (
        <section className="py-32 bg-black text-white">
            <div className="max-w-4xl mx-auto px-6 text-center reveal">
                <p className="font-serif text-2xl md:text-3xl font-light leading-relaxed italic text-white/90 mb-12" style={{ wordBreak: 'keep-all' }}>
                    "느낌으로만 설명되던 스타일의 영역을<br />데이터로 바꿨습니다."
                </p>
                <div className="text-white/60 text-sm leading-relaxed max-w-2xl mx-auto space-y-6">
                    <p className="keep-all">
                        IT 마케터로 일하며 모든 성과를 수치로 증명해왔지만, 정작 '나에게 어울리는 스타일'은 누구도 논리적으로 설명해주지 못했습니다.
                        그래서 직접 얼굴의 선과 비율을 엑셀에 데이터로 쌓으며 분석 시스템을 만들었습니다.
                    </p>
                    <p className="keep-all">
                        VIBE는 주관적인 감에 의존하지 않고, 객관적인 수치로 당신만의 스타일 가이드를 증명하는 브랜드입니다.
                    </p>
                </div>
                <div className="mt-12 text-xs tracking-widest uppercase text-white/40">From. Director Kim Sehee</div>
            </div>
        </section>
    )
}

// CTA Section
function CTASection() {
    return (
        <section className="py-32 bg-white text-black border-t border-gray-100">
            <div className="max-w-4xl mx-auto px-6 text-center reveal">
                <p className="text-xs tracking-[0.3em] uppercase text-accent mb-6 font-bold">Start Now</p>
                <h2 className="font-serif text-4xl md:text-6xl font-light mb-8 leading-tight">
                    당신이 막연하게 느껴왔던 분위기,<br />이제 데이터로 확인하세요.
                </h2>
                <p className="text-gray-500 mb-12 max-w-lg mx-auto leading-relaxed" style={{ wordBreak: 'keep-all' }}>
                    이유 없는 어울림은 없습니다. 나를 표현하는 일은 더 이상 막막한 과제가 아닌 즐거운 확신이 됩니다.
                </p>
                <Link
                    to="/services"
                    className="inline-block px-14 py-5 bg-accent text-white text-sm tracking-[0.2em] uppercase hover:bg-black transition-all duration-300"
                >
                    서비스 보러가기
                </Link>
            </div>
        </section>
    )
}

export default function Home() {
    useScrollReveal()
    return (
        <>
            <HeroSection />
            <PhilosophySection />
            <SystemSection />
            <SolutionSection />
            <NarrativeSection />
            <CTASection />
        </>
    )
}
