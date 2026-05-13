import { Link } from 'react-router-dom'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-[#111] border-t border-white/5 relative z-10">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <Link to="/" className="font-serif text-3xl text-white">VIBE</Link>
                        <p className="text-gray-400 text-sm leading-relaxed mt-4 max-w-sm keep-all">
                            느낌이 아닌 근거로, 당신만의 스타일 가이드를 데이터로 증명합니다.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <p className="text-xs tracking-[0.2em] uppercase text-brand mb-6">Menu</p>
                        <nav className="flex flex-col gap-3">
                            <Link to="/about" className="text-sm text-gray-400 hover:text-brand transition-colors">About</Link>
                            <Link to="/services" className="text-sm text-gray-400 hover:text-brand transition-colors">Services</Link>
                            <Link to="/#process" className="text-sm text-gray-400 hover:text-brand transition-colors">Process</Link>
                            <Link to="/insight" className="text-sm text-gray-400 hover:text-brand transition-colors">Insight</Link>
                            <Link to="/contact" className="text-sm text-gray-400 hover:text-brand transition-colors">Contact</Link>
                        </nav>
                    </div>

                    {/* Contact */}
                    <div>
                        <p className="text-xs tracking-[0.2em] uppercase text-brand mb-6">Contact</p>
                        <div className="flex flex-col gap-3 text-sm text-gray-400">
                            <a href="mailto:contact@vibe-profile.co.kr" className="hover:text-brand transition-colors">
                                contact@vibe-profile.co.kr
                            </a>
                            <a href="#kakao" className="hover:text-brand transition-colors">카카오톡 문의</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-gray-500">© {currentYear} VIBE. All Rights Reserved.</p>
                    <div className="flex items-center gap-6 text-xs text-gray-500">
                        <a href="#privacy" className="hover:text-white transition-colors">Privacy</a>
                        <a href="#terms" className="hover:text-white transition-colors">Terms</a>
                        <a
                            href="/dashboard.html"
                            className="text-gray-600 hover:text-brand transition-colors flex items-center gap-1"
                            title="Admin Dashboard"
                        >
                            <span>⬡</span>
                            <span>Dashboard</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
