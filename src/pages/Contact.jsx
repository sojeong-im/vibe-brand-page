import { useState } from 'react'

export default function Contact() {
    const [selectedKeywords, setSelectedKeywords] = useState([])
    const [agreed, setAgreed] = useState(false)

    const keywords = ['우아함', '도시적', '미니멀', '러블리', '내추럴', '중성적', '화려함', '클래식']

    const toggleKeyword = (keyword) => {
        setSelectedKeywords(prev =>
            prev.includes(keyword)
                ? prev.filter(k => k !== keyword)
                : [...prev, keyword]
        )
    }

    const [selectedService, setSelectedService] = useState('HAIR PROFILE')
    const [discountCode, setDiscountCode] = useState('')

    const prices = {
        'HAIR PROFILE': 55000,
        'MAKEUP PROFILE': 55000,
        'FASHION PROFILE': 55000,
        'ALL-IN-ONE PACKAGE': 140000,
    }

    const currentPrice = prices[selectedService]
    const finalPrice = discountCode === 'vb-614412' ? 0 : currentPrice

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!agreed) {
            alert('개인정보 수집 및 이용에 동의해주세요.')
            return
        }
        alert('신청이 완료되었습니다. 곧 연락드리겠습니다.')
    }

    return (
        <div className="bg-white min-h-screen">
            {/* Header */}
            <section className="pt-32 pb-16 px-6">
                <div className="max-w-2xl mx-auto text-center">
                    <p className="text-caption uppercase text-gray-400 mb-4">Contact</p>
                    <h1 className="font-serif text-headline font-light mb-4">신청하기</h1>
                    <p className="text-gray-500 keep-all">
                        당신만의 고유한 바이브를 찾기 위한 첫 번째 단계입니다.
                    </p>
                </div>
            </section>

            {/* Form */}
            <section className="max-w-xl mx-auto px-6 pb-24">
                <form onSubmit={handleSubmit} className="space-y-10">
                    {/* Service Type */}
                    <div>
                        <label className="block text-caption uppercase text-gray-400 mb-3">Service</label>
                        <select
                            value={selectedService}
                            onChange={(e) => setSelectedService(e.target.value)}
                            className="w-full p-4 border border-gray-200 bg-white text-black focus:outline-none focus:border-black transition-colors"
                        >
                            <option value="HAIR PROFILE">HAIR PROFILE</option>
                            <option value="MAKEUP PROFILE">MAKEUP PROFILE</option>
                            <option value="FASHION PROFILE">FASHION PROFILE</option>
                            <option value="ALL-IN-ONE PACKAGE">ALL-IN-ONE PACKAGE</option>
                        </select>
                    </div>

                    {/* Pricing & Discount Code */}
                    <div className="p-6 bg-gray-50 border border-gray-100 space-y-4">
                        <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                            <span className="text-sm text-gray-600">예상 금액</span>
                            <div className="text-right">
                                {discountCode === 'vb-614412' && (
                                    <span className="block text-xs text-gray-400 line-through mb-1">
                                        {currentPrice.toLocaleString()} KRW
                                    </span>
                                )}
                                <span className={`font-serif text-xl ${discountCode === 'vb-614412' ? 'text-accent' : 'text-black'}`}>
                                    {finalPrice.toLocaleString()} KRW
                                </span>
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs uppercase text-gray-400 mb-2">Promotion Code</label>
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={discountCode}
                                    onChange={(e) => setDiscountCode(e.target.value)}
                                    placeholder="프로모션 코드를 입력하세요"
                                    className="flex-1 p-3 text-sm border border-gray-200 focus:outline-none focus:border-black transition-colors uppercase placeholder:normal-case"
                                />
                                {discountCode === 'vb-614412' && (
                                    <div className="flex items-center text-xs text-accent font-medium px-2">
                                        ✓ 적용됨
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Name */}
                    <div>
                        <label className="block text-caption uppercase text-gray-400 mb-3">Name / Contact</label>
                        <input
                            type="text"
                            placeholder="성함과 연락처를 입력해주세요"
                            className="w-full p-4 border border-gray-200 focus:outline-none focus:border-black transition-colors placeholder:text-gray-300"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-caption uppercase text-gray-400 mb-3">Email</label>
                        <input
                            type="email"
                            placeholder="결과지를 받으실 이메일 주소"
                            className="w-full p-4 border border-gray-200 focus:outline-none focus:border-black transition-colors placeholder:text-gray-300"
                        />
                    </div>

                    {/* Keywords */}
                    <div>
                        <label className="block text-caption uppercase text-gray-400 mb-3">지향하는 이미지</label>
                        <div className="grid grid-cols-4 gap-2">
                            {keywords.map((keyword) => (
                                <button
                                    key={keyword}
                                    type="button"
                                    onClick={() => toggleKeyword(keyword)}
                                    className={`py-3 text-sm border transition-all ${selectedKeywords.includes(keyword)
                                        ? 'bg-black text-white border-black'
                                        : 'bg-white text-gray-600 border-gray-200 hover:border-black'
                                        }`}
                                >
                                    {keyword}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block text-caption uppercase text-gray-400 mb-3">Message</label>
                        <textarea
                            rows={4}
                            placeholder="고민되는 스타일 부분을 자유롭게 적어주세요"
                            className="w-full p-4 border border-gray-200 focus:outline-none focus:border-black transition-colors placeholder:text-gray-300 resize-none"
                        />
                    </div>

                    {/* Privacy */}
                    <div className="border border-gray-200 p-6">
                        <p className="text-caption uppercase text-gray-400 mb-4">개인정보 수집 동의</p>
                        <div className="text-xs text-gray-500 space-y-1 mb-4">
                            <p>1. 수집 항목: 이름, 연락처, 이메일</p>
                            <p>2. 수집 목적: 프로파일링 리포트 제공</p>
                            <p>3. 보유 기간: 서비스 완료 후 6개월</p>
                        </div>
                        <label className="flex items-center gap-3 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={agreed}
                                onChange={(e) => setAgreed(e.target.checked)}
                                className="w-4 h-4 accent-black"
                            />
                            <span className="text-sm">동의합니다 (필수)</span>
                        </label>
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full py-5 bg-black text-white text-sm tracking-[0.15em] uppercase hover:bg-gray-800 transition-all"
                    >
                        신청하기
                    </button>
                </form>

                {/* Alternative */}
                <div className="mt-16 text-center">
                    <div className="editorial-divider mx-auto mb-6" />
                    <p className="text-sm text-gray-500 mb-2">다른 문의 방법</p>
                    <a href="mailto:contact@vibe-profile.co.kr" className="text-sm hover-line">
                        contact@vibe-profile.co.kr
                    </a>
                </div>
            </section>
        </div>
    )
}
