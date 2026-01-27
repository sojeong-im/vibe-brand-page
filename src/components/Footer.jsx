import { Link } from 'react-router-dom'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-white border-t border-gray-200">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <Link to="/" className="font-serif text-3xl">VIBE</Link>
                        <p className="text-gray-500 text-sm leading-relaxed mt-4 max-w-sm keep-all">
                            느낌이 아닌 근거로, 당신만의 스타일 가이드를 데이터로 증명합니다.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <p className="text-xs tracking-[0.2em] uppercase text-gray-400 mb-6">Menu</p>
                        <nav className="flex flex-col gap-3">
                            <Link to="/about" className="text-sm text-gray-600 hover:text-black transition-colors">About</Link>
                            <Link to="/services" className="text-sm text-gray-600 hover:text-black transition-colors">Services</Link>
                            <Link to="/#process" className="text-sm text-gray-600 hover:text-black transition-colors">Process</Link>
                            <Link to="/contact" className="text-sm text-gray-600 hover:text-black transition-colors">Contact</Link>
                        </nav>
                    </div>

                    {/* Contact */}
                    <div>
                        <p className="text-xs tracking-[0.2em] uppercase text-gray-400 mb-6">Contact</p>
                        <div className="flex flex-col gap-3 text-sm text-gray-600">
                            <a href="mailto:contact@vibe-profile.co.kr" className="hover:text-black transition-colors">
                                contact@vibe-profile.co.kr
                            </a>
                            <a href="#kakao" className="hover:text-black transition-colors">카카오톡 문의</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-gray-400">© {currentYear} VIBE. All Rights Reserved.</p>
                    <div className="flex items-center gap-6 text-xs text-gray-400">
                        <a href="#privacy" className="hover:text-black transition-colors">Privacy</a>
                        <a href="#terms" className="hover:text-black transition-colors">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
