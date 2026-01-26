import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function ServiceCard({ number, title, titleKr, price, description, features, image, images }) {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        if (!images || images.length <= 1) return

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length)
        }, 3000)

        return () => clearInterval(interval)
    }, [images])

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-gray-200">
            {/* Image */}
            <div className="img-zoom aspect-[3/4] bg-gray-50 order-2 lg:order-1 overflow-hidden p-12 flex items-center justify-center relative">
                {images ? (
                    images.map((img, idx) => (
                        <img
                            key={idx}
                            src={img}
                            alt={`${title} - ${idx + 1}`}
                            className={`w-full h-full object-contain transition-opacity duration-1000 absolute inset-0 p-12 ${idx === currentIndex ? 'opacity-100' : 'opacity-0'
                                }`}
                        />
                    ))
                ) : (
                    <img src={image} alt={title} className="w-full h-full object-cover object-top" />
                )}
            </div>

            {/* Content */}
            <div className="p-8 lg:p-12 flex flex-col order-1 lg:order-2">
                <p className="text-caption uppercase text-gray-400 mb-2">{number}</p>
                <h3 className="font-serif text-3xl md:text-4xl font-light mb-1">{title}</h3>
                <p className="text-gray-500 mb-6">{titleKr}</p>

                <p className="text-gray-600 leading-relaxed keep-all mb-8 flex-1">
                    {description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-8">
                    {features.map((feature, index) => (
                        <li key={index} className="text-sm text-gray-500 flex items-start gap-2">
                            <span className="mt-1.5 w-1 h-1 bg-black rounded-full flex-shrink-0" />
                            {feature}
                        </li>
                    ))}
                </ul>

                {/* Price & CTA */}
                <div className="border-t border-gray-200 pt-6">
                    <p className="font-serif text-3xl font-light mb-6">₩{price}</p>
                    <Link
                        to="/contact"
                        className="block w-full py-4 bg-black text-white text-center text-sm tracking-[0.1em] uppercase hover:bg-gray-800 transition-all"
                    >
                        신청하기
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default function Services() {
    const services = [
        {
            number: '01',
            title: 'Hair',
            titleKr: '헤어 프로파일',
            price: '128,000',
            description: '얼굴형 분석을 통해 당신의 분위기를 극대화할 최적의 헤어 스타일을 제안합니다.',
            features: ['얼굴형 헤어스타일 30종 분석', '앞머리 고민 해결', '기장부터 텍스처까지 맞춤 가이드'],
            images: ['/assets/hair_slide_1.png', '/assets/hair_slide_2.png'],
        },
        {
            number: '02',
            title: 'Makeup',
            titleKr: '메이크업 프로파일',
            price: '108,000',
            description: '당신만의 퍼스널 컬러와 피부 톤, 눈매에 맞춘 정교한 메이크업 가이드를 제공합니다.',
            features: ['이목구비 장점 살린 25종 분석', '가장 조화로운 눈썹 형태 제안', '컬러 조합 가이드'],
            images: [
                '/assets/makeup1.png',
                '/assets/makeup2.png',
                '/assets/makeup3.png',
                '/assets/makeup4.png'
            ],
        },
        {
            number: '03',
            title: 'Fashion',
            titleKr: '패션 프로파일',
            price: '138,000',
            description: '체형 분석을 넘어 당신의 전체적인 실루엣과 바이브를 완성하는 패션 큐레이션입니다.',
            features: ['체형별 상하의 코디 조합 35종', '나만의 분위기를 완성하는 패션', '시즌별 스타일링 가이드'],
            images: [
                '/assets/fashion_1.png',
                '/assets/fashion_2.png',
                '/assets/fashion_3.png',
                '/assets/fashion_4.png'
            ],
        },
    ]

    return (
        <div className="bg-white min-h-screen">
            {/* Header */}
            <section className="pt-32 pb-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-caption uppercase text-gray-400 mb-4">Services</p>
                    <h1 className="font-serif text-headline font-light mb-6">Our Profiles</h1>
                    <p className="text-gray-500 max-w-xl mx-auto keep-all">
                        VIBE의 분석 시스템은 느낌이 아닌 데이터를 기반으로 당신만의 고유한 분위기를 정리한 결과지를 제공합니다.
                    </p>
                </div>
            </section>

            {/* Service Cards */}
            <section className="max-w-6xl mx-auto px-6 pb-24">
                <div className="space-y-16">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </section>

            {/* Package */}
            <section className="py-24 bg-black text-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <p className="text-caption uppercase text-gray-500 mb-4">Special</p>
                    <h2 className="font-serif text-4xl md:text-5xl font-light mb-4">All-in-One</h2>
                    <p className="text-gray-400 mb-8 keep-all">
                        Hair + Makeup + Fashion 세 가지 프로필을 한 번에.
                    </p>
                    <div className="flex items-baseline justify-center gap-4 mb-10">
                        <span className="text-gray-500 line-through">₩374,000</span>
                        <span className="font-serif text-5xl font-light">₩298,000</span>
                    </div>
                    <Link
                        to="/contact"
                        className="inline-block px-10 py-4 border border-white text-sm tracking-[0.1em] uppercase hover:bg-white hover:text-black transition-all"
                    >
                        패키지 신청
                    </Link>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 px-6">
                <div className="max-w-3xl mx-auto">
                    <h3 className="font-serif text-3xl font-light text-center mb-16">FAQ</h3>

                    <div className="space-y-0">
                        {[
                            { q: '결과지는 언제 받을 수 있나요?', a: '체크리스트 제출 완료 후, 다음날 개인 결과지가 이메일로 발송됩니다.' },
                            { q: '분석은 어떻게 진행되나요?', a: 'VIBE 시스템이 제출된 응답 데이터를 기반으로 자동 분석하여 결과지를 생성합니다.' },
                            { q: '환불은 가능한가요?', a: '체크리스트 제출 전까지 100% 환불 가능합니다.' },
                        ].map((item, index) => (
                            <details key={index} className="border-t border-gray-200 last:border-b group">
                                <summary className="py-6 flex justify-between items-center cursor-pointer list-none">
                                    <span className="text-lg">{item.q}</span>
                                    <span className="text-xl group-open:rotate-45 transition-transform">+</span>
                                </summary>
                                <p className="pb-6 text-gray-500 leading-relaxed">{item.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
