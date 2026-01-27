import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

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

    return (
        <>
            <motion.header
                className={`fixed top-0 left-0 w-full z-50 flex justify-center transition-all duration-500 ${isScrolled ? 'py-4' : 'py-6'}`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
                <div
                    className={`
                        flex items-center justify-between px-8 transition-all duration-500
                        ${isScrolled
                            ? 'w-[90%] md:w-[600px] h-14 bg-white/80 backdrop-blur-md rounded-full shadow-lg border border-white/20'
                            : 'w-full max-w-7xl h-20 bg-transparent'
                        }
                    `}
                >
                    {/* Logo */}
                    <Link to="/" className={`font-serif text-2xl tracking-tight z-50 transition-colors ${isScrolled ? 'text-black' : (isHome ? 'text-black mix-blend-difference' : 'text-black')
                        }`}>
                        VIBE
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                className={`text-[11px] font-medium uppercase tracking-widest hover:text-burgundy transition-colors ${isScrolled ? 'text-gray-600' : (isHome ? 'text-gray-900' : 'text-gray-600')
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={`md:hidden flex flex-col gap-1.5 p-2 z-50 ${isScrolled ? 'text-black' : (isHome ? 'text-black' : 'text-black')
                            }`}
                    >
                        <motion.span
                            animate={{ rotate: isMobileMenuOpen ? 45 : 0, y: isMobileMenuOpen ? 6 : 0 }}
                            className="w-5 h-px bg-current block"
                        />
                        <motion.span
                            animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                            className="w-5 h-px bg-current block"
                        />
                        <motion.span
                            animate={{ rotate: isMobileMenuOpen ? -45 : 0, y: isMobileMenuOpen ? -6 : 0 }}
                            className="w-5 h-px bg-current block"
                        />
                    </button>
                </div>
            </motion.header>

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
