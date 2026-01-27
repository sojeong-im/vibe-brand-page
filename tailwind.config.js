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
                    50: '#FAFAFA',
                    100: '#F5F5F5',
                    200: '#EEEEEE',
                    300: '#E0E0E0',
                    400: '#BDBDBD',
                    500: '#9E9E9E',
                    600: '#757575',
                    700: '#616161',
                    800: '#424242',
                    900: '#212121',
                },
                accent: {
                    DEFAULT: '#2563EB', // Royal Blue - Neutral & Tech
                    dark: '#1d4ed8',
                    light: '#60a5fa',
                },
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
            },
        },
    },
    plugins: [],
}
