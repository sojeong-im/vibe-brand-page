import { useState } from 'react'
import { Link } from 'react-router-dom'
import { X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function TopAnnouncementBar() {
    const [isVisible, setIsVisible] = useState(true)

    if (!isVisible) return null

    return (
        <AnimatePresence>
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="bg-brand text-black relative z-[60] overflow-hidden"
            >
                <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between text-xs md:text-sm font-bold tracking-wide">
                    <Link to="/insight" className="flex-1 text-center hover:opacity-75 transition-opacity flex items-center justify-center gap-2">
                        <span className="bg-black text-brand px-2 py-0.5 rounded text-[10px]">EVENT</span>
                        <span>VIBE 런칭 행사 '느낌을 모아 데이터로 가이드하다' 5/7(목) 참가 신청 중!</span>
                        <span className="hidden md:inline">➔</span>
                    </Link>
                    <button
                        onClick={() => setIsVisible(false)}
                        className="p-1 hover:bg-black/10 rounded-full transition-colors"
                        aria-label="Close announcement"
                    >
                        <X size={14} />
                    </button>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}
