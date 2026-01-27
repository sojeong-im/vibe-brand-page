import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const location = useLocation()
    const isHome = location.pathname === '/'

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        setIsMobileMenuOpen(false)
    }, [location])

    const navLinks = [
        { to: '/about', label: 'About' },
        { to: '/services', label: 'Services' },
        { to: '/process', label: 'Process' },
        { to: '/contact', label: 'Contact' },
    ]

    const headerBg = isScrolled || !isHome
        ? 'bg-white border-b border-gray-100'
        : 'bg-black/60 backdrop-blur-sm'

    const textColor = isScrolled || !isHome ? 'text-black' : 'text-white'

    return (
        <>
            <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${headerBg}`}>
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="flex items-center justify-between h-20">
                        <Link to="/" className={`font-serif text-2xl tracking-tight ${isScrolled || !isHome ? 'text-accent font-bold' : 'text-white'}`}>
                            VIBE
                        </Link>

                        <nav className="hidden lg:flex items-center gap-12">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.to}
                                    to={link.to}
                                    className={`text-xs tracking-[0.15em] uppercase transition-colors hover:text-accent duration-300 ${textColor}`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>

                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className={`lg:hidden flex flex-col gap-1.5 p-2 ${textColor}`}
                        >
                            <span className={`w-5 h-px bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                            <span className={`w-5 h-px bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                            <span className={`w-5 h-px bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
                        </button>
                    </div>
                </div>
            </header>

            <div className={`fixed inset-0 bg-white z-40 lg:hidden transition-all duration-500 flex flex-col items-center justify-center ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}>
                {navLinks.map((link) => (
                    <Link
                        key={link.to}
                        to={link.to}
                        className="text-3xl font-serif py-4 text-black hover:italic transition-all"
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
        </>
    )
}
