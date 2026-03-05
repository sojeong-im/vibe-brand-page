/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                black: '#000000',
                white: '#FFFFFF',
                gray: {
                    50: '#F5F5F5',
                    100: '#E0E0E0',
                    200: '#CCCCCC',
                    300: '#B3B3B3',
                    400: '#999999',
                    500: '#808080',
                    600: '#666666',
                    700: '#4D4D4D',
                    800: '#333333',
                    900: '#1A1A1A',
                },
                brand: {
                    DEFAULT: '#00EAFF', // Electric Blue (Neon)
                    dark: '#00B8D4',    // Darker Electric Blue
                    light: '#E0FFFF',   // Light Cyan
                    glow: '#00EAFF',    // For shadows/glows
                },
                accent: {
                    DEFAULT: '#2D5AF5', // Deep Blue
                    dark: '#001F80',
                }
            },
            fontFamily: {
                // Technical/Modern Serif for English headings
                serif: ['Space Grotesk', 'sans-serif'],
                // Sans for body text
                sans: ['Pretendard', 'sans-serif'],
                // Mono for data
                mono: ['JetBrains Mono', 'monospace'],
            },
            fontSize: {
                'display': ['clamp(3.5rem, 15vw, 12rem)', { lineHeight: '0.85', letterSpacing: '-0.02em' }],
                'headline': ['clamp(2rem, 6vw, 5rem)', { lineHeight: '1.0', letterSpacing: '-0.01em' }],
                'title': ['clamp(1.5rem, 3vw, 2.5rem)', { lineHeight: '1.2' }],
                'caption': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.15em' }],
            },
            animation: {
                'fade-in': 'fadeIn 0.8s ease-out forwards',
                'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
                'scan-line': 'scan 3s linear infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                scan: {
                    '0%': { top: '0%', opacity: '0' },
                    '10%': { opacity: '1' },
                    '90%': { opacity: '1' },
                    '100%': { top: '100%', opacity: '0' },
                },
                pulse: {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0.5' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                }
            },
            boxShadow: {
                'neon': '0 0 5px theme("colors.brand.DEFAULT"), 0 0 20px theme("colors.brand.DEFAULT")',
                'neon-strong': '0 0 10px theme("colors.brand.DEFAULT"), 0 0 40px theme("colors.brand.DEFAULT"), 0 0 80px theme("colors.brand.DEFAULT")',
            },
        },
    },
    plugins: [],
}
