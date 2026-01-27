import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Process from './pages/Process'
import Contact from './pages/Contact'

// Scroll to top on route change
function ScrollToTop() {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return null
}

import { ReactLenis } from '@studio-freight/react-lenis'

function App() {
    return (
        <ReactLenis root>
            <div className="min-h-screen flex flex-col bg-white">
                <ScrollToTop />
                <Header />
                <main className="flex-1 selection:bg-burgundy selection:text-white">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/process" element={<Process />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </ReactLenis>
    )
}

export default App
