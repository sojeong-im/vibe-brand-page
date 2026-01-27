import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Process() {
    const [openStep, setOpenStep] = useState(0)

    const steps = [
        {
            number: '01',
            title: '프로파일 선택',
            description: 'Services 페이지에서 Hair, Makeup, Fashion 중 원하는 분석을 선택합니다.',
            image: '/assets/profile_selection.jpg',
            details: [
                'Hair Profile - 헤어스타일 30종 분석',
                'Makeup Profile - 메이크업 25종 분석',
                'Fashion Profile - 패션 아이템 35종 분석',
            ],
        },
        {
            number: '02',
            title: '체크리스트 작성',
            description: '간단한 체크리스트를 작성합니다. 응답 데이터를 기반으로 분석이 진행됩니다.',
            image: '/assets/checklist_step.jpg',
            details: [
                '신청 후 자정까지 응답 완료',
                '응답 데이터는 분석 목적으로만 사용',
                '개인정보는 서비스 완료 후 6개월 보관',
            ],
        },
        {
            number: '03',
            title: '분석 및 리포트 수령',
            description: 'VIBE 시스템이 데이터를 분석하고, 다음날 결과지가 이메일로 전달됩니다.',
            image: '/assets/profile.JPEG',
            details: [
                '시스템 기반 객관적 분석',
                '개인 맞춤형 스타일 가이드',
                'PDF 형식으로 영구 보관 가능',
            ],
        },
    ]

    return (
        <div className="bg-white min-h-screen">
            {/* Hero */}
            <section className="pt-32 pb-20 px-6 bg-gray-50">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-4">How it works</p>
                    <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light mb-6">Process</h1>
                    <p className="text-gray-500 text-lg">선택하고, 응답하고, 받아보세요.</p>
                </div>
            </section>

            {/* Visual Steps */}
            <section className="py-24">
                {steps.map((step, index) => (
                    <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 min-h-[60vh] ${index % 2 === 1 ? '' : ''}`}>
                        {/* Image */}
                        <div className={`relative overflow-hidden ${index === 2 ? 'bg-black' : 'bg-gray-100'} ${index % 2 === 1 ? 'lg:order-2' : ''} group`}>
                            <img
                                src={step.image}
                                alt={step.title}
                                className={`w-full h-full absolute inset-0 transition-transform duration-[10s] ease-linear ${index === 2 ? 'object-contain object-[center_40%] scale-[1.1] group-hover:scale-[1.2]' : 'object-cover'}`}
                            />

                            {/* Special Effects for Profile Selection Step */}
                            {index === 0 && (
                                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                                    <style>{`
                                        @keyframes selectMove {
                                            0%, 100% { transform: translate(-120%, -50%); }
                                            50% { transform: translate(120%, -50%); }
                                        }
                                        @keyframes cursorFade {
                                            0%, 100% { opacity: 0.8; scale: 1; }
                                            50% { opacity: 0.4; scale: 0.95; }
                                        }
                                    `}</style>

                                    {/* Ambient Layer */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent mix-blend-overlay" />

                                    {/* Moving Selection Group */}
                                    <div className="absolute top-[45%] left-1/2 w-[180px] h-[180px]" style={{ animation: 'selectMove 4s ease-in-out infinite' }}>
                                        {/* Focus Frame */}
                                        <div className="absolute inset-0 border border-black/10 rounded-2xl bg-white/5 backdrop-blur-[2px] shadow-lg animate-pulse" />

                                        {/* Cursor Icon */}
                                        <div className="absolute -bottom-6 -right-6 drop-shadow-lg">
                                            <svg className="w-8 h-8 text-black/70 fill-white" viewBox="0 0 24 24" style={{ transform: 'rotate(-15deg)' }}>
                                                <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Option Hints (Static) */}
                                    <div className="absolute top-[45%] left-[20%] w-[160px] h-[160px] border border-transparent hover:border-black/5 rounded-2xl -translate-y-1/2 transition-colors" />
                                    <div className="absolute top-[45%] right-[20%] w-[160px] h-[160px] border border-transparent hover:border-black/5 rounded-2xl -translate-y-1/2 transition-colors" />

                                    {/* Label */}
                                    <div className="absolute bottom-10 left-10 flex flex-col items-start gap-2">
                                        <span className="text-[10px] font-serif text-gray-500 tracking-[0.3em] uppercase flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-gray-400 animate-ping" />
                                            Select Your Profile
                                        </span>
                                    </div>
                                </div>
                            )}

                            {/* Special Effects for Analysis Step */}
                            {index === 2 && (
                                <div className="absolute inset-0 pointer-events-none">
                                    <div className="absolute inset-0 bg-black/10" />
                                    {/* Tech Grid - Pulsing */}
                                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:30px_30px] animate-pulse" />

                                    {/* Scanning Line */}
                                    <div className="absolute inset-x-0 h-px bg-white/40 shadow-[0_0_15px_rgba(255,255,255,0.4)] animate-scan-line" />

                                    {/* Center HUD Ring - Rotating */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full animate-[spin_20s_linear_infinite]" />
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-white/10 rounded-full border-dashed animate-[spin_30s_linear_infinite_reverse]" />

                                    {/* Live Indicator */}
                                    <div className="absolute top-6 right-6 flex flex-col items-end space-y-1">
                                        <div className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-accent/80 animate-pulse" />
                                            <span className="text-[10px] font-mono text-white/70 tracking-widest">LIVE DATA</span>
                                        </div>
                                    </div>

                                    {/* Scrolling Data Stream - Left Side */}
                                    <div className="absolute top-1/4 left-4 flex flex-col gap-1 pointer-events-none opacity-50">
                                        {[...Array(5)].map((_, i) => (
                                            <div key={i} className="text-[8px] font-mono text-white/40 whitespace-nowrap overflow-hidden animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}>
                                                {`> SCANNING_SECTOR_${10 + i}... [OK]`}
                                            </div>
                                        ))}
                                    </div>

                                    {/* Data Corners */}
                                    <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-white/20" />
                                    <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-white/20" />
                                </div>
                            )}

                            {/* Special Effects for Checklist Step */}
                            {index === 1 && (
                                <div className="absolute inset-0 pointer-events-none">
                                    {/* Soft Cyan Ambient Glow */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/20 via-transparent to-transparent opacity-60" />

                                    {/* Elegant Border Frame */}
                                    <div className="absolute inset-6 border border-white/20 rounded-sm" />

                                    {/* Corner Accents - Cyan */}
                                    <div className="absolute top-6 left-6 w-4 h-4 border-t border-l border-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
                                    <div className="absolute top-6 right-6 w-4 h-4 border-t border-r border-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
                                    <div className="absolute bottom-6 left-6 w-4 h-4 border-b border-l border-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
                                    <div className="absolute bottom-6 right-6 w-4 h-4 border-b border-r border-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.5)]" />

                                    {/* Status Badge - Floating Glass */}
                                    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 backdrop-blur-md bg-white/10 px-4 py-3 rounded-full border border-white/20 flex items-center shadow-xl">
                                        <div className="flex items-end gap-1 h-3">
                                            <div className="w-1 h-full bg-cyan-400 animate-[pulse_1s_ease-in-out_infinite]" />
                                            <div className="w-1 h-2/3 bg-cyan-400/70 animate-[pulse_1s_ease-in-out_infinite] delay-75" />
                                            <div className="w-1 h-1/3 bg-cyan-400/40 animate-[pulse_1s_ease-in-out_infinite] delay-150" />
                                        </div>
                                    </div>

                                    {/* Floating Light Specks */}
                                    <div className="absolute inset-0 opacity-40">
                                        {[...Array(3)].map((_, i) => (
                                            <div key={i} className="absolute w-[2px] h-[2px] bg-white rounded-full animate-ping"
                                                style={{
                                                    top: `${30 + i * 20}%`,
                                                    left: `${20 + i * 30}%`,
                                                    animationDuration: '3s',
                                                    animationDelay: `${i * 1}s`
                                                }}
                                            />
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Content */}
                        <div className={`flex items-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                            <div className="p-10 lg:p-16">
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="font-serif text-5xl text-gray-200">{step.number}</span>
                                </div>
                                <h3 className="font-serif text-3xl md:text-4xl font-light mb-4">{step.title}</h3>
                                <p className="text-gray-600 mb-8" style={{ wordBreak: 'keep-all' }}>{step.description}</p>
                                <ul className="space-y-3">
                                    {step.details.map((detail, i) => (
                                        <li key={i} className="text-sm text-gray-500 flex items-start gap-3">
                                            <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </section>

            {/* Note */}
            <section className="py-20 bg-black text-white">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <p className="font-serif text-2xl md:text-3xl font-light leading-relaxed" style={{ wordBreak: 'keep-all' }}>
                        VIBE는 데이터 기반의 일관된 분석 결과를 제공합니다.
                    </p>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="font-serif text-4xl font-light mb-6">시작하기</h2>
                    <p className="text-gray-500 mb-10" style={{ wordBreak: 'keep-all' }}>나만의 스타일 기준을 만들어보세요.</p>
                    <Link
                        to="/services"
                        className="inline-block px-12 py-5 bg-black text-white text-sm tracking-[0.15em] uppercase hover:bg-gray-800 transition-all"
                    >
                        서비스 보기
                    </Link>
                </div>
            </section>
        </div>
    )
}
