import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function LaunchPopup() {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        // Check if popup has already been shown in this session
        const hasShown = sessionStorage.getItem('vibe_launch_popup_shown')
        if (!hasShown) {
            // Small delay for better UX
            const timer = setTimeout(() => setIsOpen(true), 500)
            return () => clearTimeout(timer)
        }
    }, [])

    const handleClose = (dontShowAgain = false) => {
        setIsOpen(false)
        sessionStorage.setItem('vibe_launch_popup_shown', 'true')
        if (dontShowAgain) {
            localStorage.setItem('vibe_launch_popup_hidden_permanent', 'true') // Optional
        }
    }

    // Double check permanent hide
    if (localStorage.getItem('vibe_launch_popup_hidden_permanent')) return null

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => handleClose()}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative bg-[#111] border border-white/10 rounded-2xl overflow-hidden max-w-[900px] w-full shadow-2xl flex flex-col md:flex-row max-h-[85vh]"
                    >
                        {/* Poster Image */}
                        <div className="w-full md:w-1/2 bg-black h-64 md:h-auto relative overflow-hidden">
                            <img
                                src="/assets/vibe_launching_poster_new.jpg"
                                alt="LAUNCHING EVENT Poster"
                                className="w-full h-full object-cover object-center transition-transform hover:scale-105 duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden" />
                        </div>

                        {/* Content & Actions */}
                        <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-center text-left relative">
                            {/* Close Button Top Right */}
                            <button
                                onClick={() => handleClose()}
                                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                            >
                                <X size={20} />
                            </button>

                            <span className="text-brand font-bold tracking-widest text-xs uppercase mb-3">Brand Launch Event</span>
                            <h2 className="text-3xl md:text-4xl font-serif text-white mb-4 leading-tight keep-all">
                                LAUNCHING EVENT :<br />
                                느낌을 모아 데이터로 가이드하다
                            </h2>
                            <p className="text-gray-400 mb-8 leading-relaxed text-sm md:text-base keep-all">
                                더욱 업그레이드된 VIBE 브랜드 런칭 행사.<br />
                                주관적인 '인상'을 '지표'로 변환하는<br className="hidden md:block" /> 한층 정교해진 비주얼 로직 체험에 초대합니다.
                            </p>

                            <div className="space-y-3 mt-auto">
                                <Link
                                    to="/insight"
                                    onClick={() => handleClose()}
                                    className="w-full flex items-center justify-center gap-2 bg-brand text-black font-bold py-4 rounded-full hover:bg-white transition-all duration-300 group"
                                >
                                    <span>참가 신청하러 가기</span>
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <a
                                    href="https://pf.kakao.com/_FZxohX/posts"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full flex items-center justify-center gap-2 bg-[#FEE500] text-black font-bold py-4 rounded-full hover:bg-[#fff04d] transition-all duration-300"
                                >
                                    <span>카카오톡 쿠폰 받기</span>
                                    <ArrowRight size={18} />
                                </a>
                                <button
                                    onClick={() => handleClose()}
                                    className="w-full py-3 text-sm text-gray-500 hover:text-white transition-colors"
                                >
                                    닫기
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}
