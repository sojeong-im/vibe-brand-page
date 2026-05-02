import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Clock, Calendar, User, X, Share2, Bookmark } from 'lucide-react'
import { Link } from 'react-router-dom'

const categories = [
    { id: 'all', label: 'All' },
    { id: 'trend', label: 'VIBE Trend' },
    { id: 'workshop', label: 'Workshop' },
    { id: 'ai', label: 'AI Insight' },
    { id: 'news', label: 'VIBE News' },
    { id: 'behind', label: 'Behind' },
]

const articles = [
    {
        id: 10,
        category: 'news',
        title: "LAUNCHING EVENT : 느낌을 모아 데이터로 가이드하다",
        desc: "더욱 업그레이드된 VIBE 브랜드 런칭 행사. 주관적인 ‘인상’을 객관적인 ‘지표’로 전환하는 한층 정교해진 비주얼 로직 체험에 초대합니다.",
        content: `
            <p class="lead break-keep">VIBE 브랜드 런칭 행사 : <strong>느낌을 모아 데이터로 가이드하다</strong>.<br/>당신의 선택이 데이터가 되는 순간을 더욱 깊게 경험하세요.<br/>📅 2026년 5월 7일 (목) 19:30</p>
            
            <p class="text-center italic text-brand mb-8 font-bold">SEE YOUR VIBE. MAP YOUR IDENTITY.<br/>VISUAL IDENTITY BY INTELLIGENT BEAUTY ENGINE</p>

            <h3>✦ 참가자 전원 | AI 얼굴 분석 &amp; 이미지맵 제작</h3>
            <p className="break-keep">행사에 참여해 주시는 모든 분들께, 더욱 업그레이드된 VIBE의 핵심 서비스를 직접 경험할 수 있는 특별한 기회를 드립니다.</p>
            <p className="break-keep">VIBE는 주관적인 <strong>'인상'</strong>을 객관적인 <strong>'지표'</strong>로 변환하여, 개인의 고유한 매력을 찾아주는 비주얼 로직입니다.<br className="hidden md:block"/> 고도화된 AI가 이목구비의 골격·비율·텍스처 데이터를 분석하고, 그 결과를 바탕으로 <strong>나만의 이미지맵(Image Map)</strong>을 제작해 드립니다. 숫자로 확인하는 나다움을 더욱 정확하게 경험해보세요.</p>
            <ul>
                <li className="break-keep"><strong>분위기(Internal):</strong> 내가 선택한 이미지 맵(Map)을 기반으로 현재의 나를 확인하고, 유사한 분위기의 연예인과 매칭합니다.</li>
                <li className="break-keep"><strong>AI 결과(External):</strong> 얼굴 AI 분석을 통해 이목구비 골격 및 비율 데이터를 정밀하게 추출합니다. (예: 액티브 큐트, 엘레강스 등)</li>
            </ul>

            <h3>✦ 더욱 강력해진 VIBE 부스</h3>
            <p className="break-keep">VIBE가 직접 운영하는 뷰티 솔루션 부스입니다. 분석 결과지를 손에 들고 바로 실전 변신에 도전하세요.</p>
            <ul>
                <li className="break-keep"><strong>💄 Makeup Booth:</strong> 고도화된 AI 분석 데이터 시트를 바탕으로, 내 골격과 분위기에 최적화된 메이크업 솔루션을 제안해 드립니다.</li>
            </ul>

            <h3>✦ 파트너 입점 부스</h3>
            <p className="break-keep">VIBE의 철학에 공감한 파트너 브랜드들이 함께합니다. 분석 결과지를 지참하면 더욱 특별한 경험을 드립니다.</p>
            <ul>
                <li className="break-keep"><strong>🌸 Perfume Booth:</strong> 분석 결과지 기반으로 추천된 향수를 직접 조향하고 시향해 볼 수 있습니다. 내 분위기를 완성하는 향기를 찾아드립니다.</li>
                <li className="break-keep"><strong>🔮 Tarot Booth:</strong> 내면의 에너지와 외면의 바이브가 얼마나 정렬되어 있는지, 타로를 통해 분석해 드립니다.</li>
            </ul>
        `,
        author: "VIBE Event Team",
        date: "2026.05.07 (THU)",
        readTime: "5분 읽기",
        image: "/assets/vibe_launching_poster_new.jpg"
    },
    {
        id: 0,
        category: 'news',
        title: "VIBE CHECK : The Choice Experiment",
        desc: "주관적인 ‘인상’을 객관적인 ‘지표’로 전환하는 비주얼 로직 체험, VIBE 브랜드 런칭 행사에 초대합니다.",
        content: `
            <p class="lead">VIBE 브랜드 런칭 행사 : <strong>a choice experiment</strong>. 당신의 선택이 데이터가 되는 순간을 경험하세요.<br/>📅 2026년 3월 14일 (토)</p>

            <h3>✦ 참가자 전원 | AI 얼굴 분석 &amp; 이미지맵 제작</h3>
            <p>행사에 참여해 주시는 모든 분들께, VIBE의 핵심 서비스를 직접 경험할 수 있는 특별한 기회를 드립니다.</p>
            <p>VIBE는 주관적인 <strong>'인상'</strong>을 객관적인 <strong>'지표'</strong>로 변환하여, 개인의 고유한 매력을 찾아주는 비주얼 로직입니다. AI가 이목구비의 골격·비율·텍스처 데이터를 분석하고, 그 결과를 바탕으로 <strong>나만의 이미지맵(Image Map)</strong>을 제작해 드립니다. 지금 내가 사용하고 있는 분위기와 유사한 연예인 매칭까지, 숫자로 확인하는 나다움을 경험해보세요.</p>
            <ul>
                <li><strong>분위기(Internal):</strong> 내가 선택한 이미지 맵(Map)을 기반으로 현재의 나를 확인하고, 유사한 분위기의 연예인과 매칭합니다.</li>
                <li><strong>AI 결과(External):</strong> 얼굴 AI 분석을 통해 이목구비 골격 및 비율 데이터를 추출합니다. (예: 액티브 큐트, 엘레강스 등)</li>
            </ul>

            <h3>✦ VIBE 부스</h3>
            <p>VIBE가 직접 운영하는 뷰티 솔루션 부스입니다. 분석 결과지를 손에 들고 바로 실전 변신에 도전하세요.</p>
            <ul>
                <li><strong>💄 Makeup Booth:</strong> AI 분석 데이터 시트를 바탕으로, 내 골격과 분위기에 최적화된 메이크업 솔루션을 제안해 드립니다. 퀵 수정부터 전체 변신까지, 데이터가 이끄는 메이크업을 경험해보세요.</li>
                <li><strong>✂️ Hair Booth:</strong> 얼굴형·하관 무게중심·이목구비 배치 데이터를 기반으로, 나에게 맞는 헤어스타일을 제안해 드립니다. 지금 내 머리가 왜 어울리는지, 혹은 왜 안 어울리는지 비로소 숫자로 이해하게 됩니다.</li>
            </ul>

            <h3>✦ 입점 부스</h3>
            <p>VIBE의 철학에 공감한 브랜드들이 함께합니다. 분석 결과지를 지참하면 더욱 특별한 경험을 드립니다.</p>
            <ul>
                <li><strong>🌸 Perfume Booth:</strong> 분석 결과지 기반으로 추천된 향수를 직접 조향하고 시향해 볼 수 있습니다. 내 분위기를 완성하는 향기를 데이터로 찾아드립니다.</li>
                <li><strong>🔮 Tarot Booth:</strong> 내면의 에너지와 외면의 바이브가 얼마나 정렬되어 있는지, 타로를 통해 또 다른 시각으로 분석해 드립니다.</li>
            </ul>
        `,
        author: "VIBE Event Team",
        date: "2026.03.14 (SAT)",
        readTime: "4분 읽기",
        image: "/assets/vibe_event_poster.jpg"
    },
    {
        id: 1,
        category: 'trend',
        title: "2026년, 당신의 분위기를 결정짓는 '희소성'의 가치",
        desc: "유행하는 스타일을 따라가는 시대는 끝났습니다. 이제는 나의 데이터에서 답을 찾아야 할 때. 올해 주목해야 할 퍼스널 무드 트렌드와 이를 내 스타일로 만드는 법을 공유합니다.",
        content: `
            <p class="lead">2026년의 패러다임은 'Mass'에서 'Micro'로의 완전한 이행입니다. 지금까지의 트렌드가 거대한 파도처럼 모두를 휩쓸었다면, 이제는 각자가 고유한 섬이 되어야 합니다.</p>
            
            <h3>Data of Uniqueness</h3>
            <p>VIBE가 지난 1년간 분석한 50만 건의 페이스 데이터는 명확한 시그널을 보내고 있습니다. 바로 <strong>"가장 희소한 것이 가장 아름답다"</strong>는 명제입니다. 대중적인 미의 기준(황금비율 등)에 부합하는 얼굴보다, 자신만의 고유한 불균형(Asymmetry)을 매력으로 승화시킨 케이스가 소셜 미디어 인게이지먼트가 300% 더 높게 나타났습니다.</p>
            
            <h3>The Death of 'Trend'</h3>
            <p>이제 '올해의 컬러', '유행하는 눈썹'이라는 단어는 힘을 잃었습니다. 데이터는 말합니다. 당신의 피부 톤, 골격, 이목구비의 배치가 만드는 고유한 알고리즘만이 유일한 정답이라고요. 우리는 이것을 <strong>'퍼스널 알고리즘(Personal Algorithm)'</strong>이라고 부릅니다.</p>

            <h3>Action Plan</h3>
            <p>그렇다면 어떻게 희소성을 가질 수 있을까요? 역설적이게도 자신의 단점을 극대화하는 것에서 시작해야 합니다. 둥근 얼굴형을 가리기 위해 쉐딩을 하는 대신, 그 곡선을 강조하는 헤어스타일을 선택하세요. 작은 눈을 커 보이게 만드는 것이 아니라, 그윽한 깊이감을 더하는 음영을 찾으세요. VIBE의 분석 툴은 바로 이 '역발상'의 지점을 데이터로 찾아드립니다.</p>
        `,
        author: "김세희 | 분위기 분석가",
        date: "2026.01.27",
        readTime: "6분 읽기",
        image: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 2,
        category: 'workshop',
        title: "제1회 <나다움 찾기> 오프라인 워크숍 성료",
        desc: "단순한 메이크업 수업이 아닌, 자신의 얼굴 수치를 직접 확인하고 긍정하는 시간을 가졌습니다. 뜨거웠던 현장의 열기와 참가자들의 리얼한 변화를 아카이브합니다.",
        content: `
            <p class="lead">지난 1월 25일, 성수동 레이어57에서 VIBE의 첫 번째 오프라인 워크숍이 열렸습니다. 이것은 단순한 뷰티 클래스가 아닌, 일종의 <strong>'데이터 실험실'</strong>이었습니다.</p>

            <h3>Lab Session 01: Scanning</h3>
            <p>참가자들은 입장과 동시에 3D 페이셜 스캐너 앞에 섰습니다. 모니터에는 자신의 얼굴이 128개의 랜드마크 포인트로 분해되는 과정이 실시간으로 중계되었습니다. "내 얼굴이 이런 수치로 이루어져 있다니 충격적이에요." 참가자들의 첫 반응은 낯섦이었습니다.</p>

            <h3>Lab Session 02: Analysis</h3>
            <p>우리는 '예쁘다/아니다'의 이분법을 금지어(Ban Word)로 설정했습니다. 대신 '길다, 짧다, 각지다, 둥글다'와 같은 가치중립적인 데이터 언어만을 사용했습니다. 이 과정에서 참가자들은 자신의 외모를 객관적인 '형태(Form)'로 인식하게 되었습니다.</p>
            
            <h3>Feedback Loop</h3>
            <p>"단점이라고 생각했던 광대가, 사실은 저만의 세련된 분위기를 만드는 핵심 축이었다는 걸 숫자로 확인하니 비로소 받아들여져요." 한 참가자의 후기처럼, 데이터는 치유의 힘을 가지고 있었습니다. VIBE는 앞으로도 매월 이 실험적인 워크숍을 지속할 예정입니다.</p>
        `,
        author: "VIBE Team",
        date: "2026.01.25",
        readTime: "4분 읽기",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
    },
    {
        id: 3,
        category: 'ai',
        title: "VIBE AI는 어떻게 당신의 분위기를 스캔할까?",
        desc: "VIBE AI가 얼굴의 랜드마크를 추출하고 이를 데이터화하는 과정을 공개합니다. 주관을 배제한 완벽한 로직의 탄생 비화와 기술적 배경을 깊이 있게 다룹니다.",
        content: `
            <p class="lead">인간의 뇌는 0.1초 만에 타인의 인상을 결정합니다. VIBE의 AI 엔진 <strong>'V-Logic v3.0'</strong>은 그 찰나의 순간을 1,000개의 데이터 프레임으로 분해하여 역추적합니다.</p>

            <h3>Step 1: Metric Geometry</h3>
            <p>기존의 관상학이나 단순한 퍼스널 컬러 진단과는 다릅니다. 우리는 '기하학(Geometry)'에 집중합니다. 눈동자의 중심점과 입꼬리의 각도가 이루는 벡터, 턱선의 기울기가 만드는 텐션 등을 미적분학적으로 계산합니다. 이것이 '분위기'라는 추상적인 개념을 '좌표'라는 구체적인 실체로 만드는 첫 단계입니다.</p>

            <h3>Step 2: Texture & Vibration</h3>
            <p>형태뿐만 아니라 질감(Texture) 또한 중요한 변수입니다. 피부가 빛을 반사하는 방식, 머릿결의 밀도, 심지어 안면 근육의 미세한 떨림까지 분석합니다. 우리는 이것을 '고유 진동수(Personal Vibration)'라고 부르며, 이것이야말로 당신이 가진 아우라의 원천입니다.</p>

            <h3>The Algorithm of Beauty</h3>
            <p>VIBE AI는 정답을 주지 않습니다. 다만 당신이 가진 고유한 패턴을 발견해 줄 뿐입니다. AI가 그리는 미래의 뷰티는 '보정'이나 '성형'이 아닌, <strong>'발견'과 '최적화'</strong>에 있습니다.</p>
        `,
        author: "VIBE Lab",
        date: "2026.01.20",
        readTime: "8분 읽기",
        image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 4,
        category: 'behind',
        title: "데이터로 아름다움을 정의하다: 창업 히스토리",
        desc: "왜 우리는 감이 아닌 데이터를 선택했는가. 수많은 시행착오 끝에 만들어진 VIBE만의 독자적인 분석 시스템 개발 과정을 대표 김세희가 직접 전합니다.",
        content: `
            <p class="lead">"아름다움은 주관적인 것 아닌가요?" 제가 투자를 받으러 다닐 때 가장 많이 들었던 질문입니다. 하지만 저는 확신했습니다. <strong>주관적인 느낌(Vibe)조차도 결국 객관적인 데이터의 총합</strong>이라고요.</p>

            <h3>The Problem</h3>
            <p>저는 10년 차 IT 마케터였습니다. 모든 성과를 CTR, ROAS 같은 지표로 증명해왔죠. 하지만 정작 거울 속의 저를 설명할 언어는 빈약했습니다. "오늘 좀 피곤해 보이네", "이 옷이 더 낫네" 같은 느낌적인 말들뿐이었죠. 왜 나에게 어울리는 스타일은 A/B 테스트를 할 수 없는 걸까? 이 답답함이 창업의 불씨가 되었습니다.</p>

            <h3>The Solution</h3>
            <p>집요하게 얼굴을 측정하기 시작했습니다. 처음에는 줄자로, 나중에는 레이저 거리 측정기로, 결국에는 컴퓨터 비전 기술로. 그렇게 3년을 매달려 탄생한 것이 VIBE의 초기 알고리즘입니다. 친구 100명을 분석해주고 그들이 "이제야 내가 왜 이 머리가 안 어울렸는지 알겠어!"라고 외쳤을 때의 전율을 잊을 수 없습니다.</p>

            <h3>Future Vision</h3>
            <p>VIBE는 이제 시작입니다. 우리는 스타일 분석을 넘어, 개인의 아이덴티티를 데이터로 규명하는 '퍼스널 데이터 뱅크'가 되고자 합니다. 당신이 누구인지, 데이터는 이미 알고 있습니다.</p>
        `,
        author: "김세희 | VIBE Founder",
        date: "2026.01.15",
        readTime: "10분 읽기",
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 5,
        category: 'ai',
        title: "AI가 예측한 2026 S/S 시즌 키워드: 'Hyper-Personal'",
        desc: "빅데이터가 가리키는 다음 시즌의 트렌드는 '트렌드가 없는 것'입니다. 초개인화 시대, 데이터가 제안하는 3가지 스타일 전략.",
        content: `
            <p class="lead">2026년 봄/여름, 런웨이는 사라지고 '로그(Log)'만 남을 것입니다. VIBE의 트렌드 예측 알고리즘이 도출한 핵심 키워드는 <strong>'Hyper-Personal(초개인화)'</strong>입니다.</p>

            <h3>Keyword 1: Modular Style</h3>
            <p>하나의 스타일을 고수하는 것은 촌스러운 일이 되었습니다. 오전에는 미니멀한 오피스 룩, 저녁에는 과감한 펑크 룩. 상황과 기분에 따라 자신의 데이터를 조립(Assemble)하는 모듈형 스타일링이 부상하고 있습니다. AI는 당신의 스케줄러와 연동되어 최적의 OOTD를 매칭해 줄 것입니다.</p>

            <h3>Keyword 2: Glitch Aesthetic</h3>
            <p>디지털 데이터의 오류(Glitch)에서 영감을 받은 불규칙한 패턴, 네온 컬러의 충돌이 유행할 전망입니다. 이는 완벽함에 대한 저항이자, 디지털 네이티브 세대의 새로운 표현 방식입니다. 전기적 블루(Electric Blue)와 노이즈 질감이 패션의 메인 스트림으로 들어옵니다.</p>

            <h3>Keyword 3: Data-Driven Minimalism</h3>
            <p>불필요한 장식을 걷어내고, 오직 데이터상으로 검증된 '나에게 가장 잘 어울리는 핏'만 남기는 극단적인 미니멀리즘이 도래합니다. 옷장에 옷은 줄어들지만, 만족도는 높아지는 '에센셜리즘'의 시대. VIBE가 지향하는 바와 정확히 일치합니다.</p>
        `,
        author: "VIBE Data Team",
        date: "2026.01.10",
        readTime: "5분 읽기",
        image: "https://images.unsplash.com/photo-1485230946086-1d99d529a76a?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 6,
        category: 'news',
        title: "VIBE, 성수 플래그십 스토어 'VIBE LAB' 오픈 예정",
        desc: "온라인의 분석 경험을 오프라인으로 확장합니다. 국내 최초의 데이터 기반 스타일링 랩, 오는 3월 성수동에서 만나요.",
        content: `
            <p class="lead">화면 속의 데이터가 현실의 공간에서 펼쳐집니다. VIBE가 첫 번째 플래그십 스토어 <strong>'VIBE LAB SEONGSU'</strong>를 오픈합니다.</p>

            <h3>Touch the Data</h3>
            <p>이곳은 옷가게가 아닙니다. 거대한 데이터 센터입니다. 입장하는 순간 수십 대의 카메라가 당신의 움직임과 스타일을 스캔합니다. 벽면의 대형 디스플레이에는 당신의 '스타일 지수'가 실시간으로 시각화되어 나타납니다. 온라인에서만 보던 분석 결과를 오감으로 체험할 수 있는 공간입니다.</p>

            <h3>Smart Fitting</h3>
            <p>탈의실에 들어갈 필요가 없습니다. '스마트 미러' 앞에 서면, VIBE AI가 제안하는 100벌의 의상을 1초 만에 피팅해볼 수 있습니다. 소재의 흔들림까지 구현한 하이퍼 리얼리즘 AR 기술을 만나보세요.</p>

            <h3>Consulting Lounge</h3>
            <p>심층적인 분석을 원하는 분들을 위해 전문 컨설턴트와의 1:1 세션이 준비되어 있습니다. 커피 대신 당신의 '얼굴 데이터'를 놓고 대화를 나누는 특별한 경험. 3월 1일, 성수동에서 스타일의 미래를 확인하세요.</p>
        `,
        author: "VIBE News",
        date: "2026.01.05",
        readTime: "3분 읽기",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 7,
        category: 'trend',
        title: "퍼스널 컬러를 넘어선 '퍼스널 텍스처(Texture)'의 시대",
        desc: "색감만으로는 부족합니다. 피부의 질감, 모발의 광택, 눈동자의 깊이가 만드는 분위기의 텍스처를 분석합니다.",
        content: `
            <p class="lead">봄 웜톤, 여름 쿨톤… 아직도 색(Color)에만 갇혀 계신가요? 진정한 분위기는 색이 아니라 <strong>결(Texture)</strong>에서 결정됩니다.</p>

            <h3>Matte vs Glossy</h3>
            <p>피부 표현 하나만으로도 사람은 전혀 다른 분위기를 냅니다. VIBE의 분석에 따르면, 골격이 또렷한 사람은 매트한 피부 표현이 시크함을 강조하고, 이목구비가 둥근 사람은 글로시한 표현이 생기를 더합니다. 당신의 얼굴은 빛을 머금어야 할까요, 아니면 반사해야 할까요?</p>

            <h3>Weight of Hair</h3>
            <p>머리카락의 무게감 또한 중요한 변수입니다. 가볍게 날리는 레이어드 컷이 어울리는 '에어리(Airy)' 타입과, 묵직한 풀뱅이 어울리는 '헤비(Heavy)' 타입. 이것은 얼굴의 하관 무게중심과 밀접한 연관이 있습니다. 단순히 유행하는 머리를 따라 하지 말고, 내 얼굴이 감당할 수 있는 '무게'를 찾아야 합니다.</p>

            <h3>Texture Harmony</h3>
            <p>입고 있는 옷의 소재와 내 얼굴의 텍스처를 맞추는 것. 이것이 고수들의 스타일링 비밀입니다. 거친 린넨이 어울리는 얼굴, 매끄러운 실크가 어울리는 얼굴. 데이터는 당신에게 가장 조화로운 소재를 알려줍니다.</p>
        `,
        author: "이수진 | 스타일 디렉터",
        date: "2025.12.28",
        readTime: "7분 읽기",
        image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 8,
        category: 'behind',
        title: "[Interview] NASA 출신 데이터 과학자가 패션계로 온 이유",
        desc: "우주선을 쏘아 올리던 궤도 역학 방정식으로, 이제는 립스틱의 궤적을 계산합니다. VIBE CTO 제임스 리 인터뷰.",
        content: `
            <p class="lead">"우주의 무질서도(Entropy)를 계산하는 것이나, 불규칙해 보이는 사람의 얼굴에서 패턴을 찾는 것이나 본질은 같습니다." VIBE의 기술을 총괄하는 CTO 제임스 리를 만났습니다.</p>

            <h3>Q. NASA에서 뷰티 스타트업으로의 이직, 파격적입니다.</h3>
            <p>"많은 사람들이 의아해했습니다. 하지만 저는 데이터 사이언티스트로서, '인간의 매력'이라는 가장 복잡하고 난해한 변수를 해석해보고 싶다는 도전 의식이 생겼습니다. 우주보다 더 알 수 없는 게 사람의 마음이고, 그 마음을 움직이는 게 미(Beauty)니까요."</p>

            <h3>Q. 패션에 수학을 적용한다는 게 가능한가요?</h3>
            <p>"물론입니다. 레오나르도 다 빈치도 인체를 수학적으로 분석했죠. 우리는 단지 그것을 현대적인 머신러닝 기술로 고도화했을 뿐입니다. 사람들이 '그냥 예쁘다'고 느끼는 것들 뒤에는 사실 치밀한 비율과 균형의 법칙이 숨어 있습니다. 우리는 그 숨겨진 방정식을 찾아내는 팀입니다."</p>

            <h3>Q. VIBE의 기술적 목표는 무엇인가요?</h3>
            <p>"'완전한 개인화'입니다. 쇼핑몰에 들어갔을 때, 내가 입지 않을 옷은 아예 보이지 않는 세상. 오직 나를 위해 큐레이션 된 10개의 아이템만 존재하는 세상. 데이터 기술로 선택의 피로를 없애고, 본질적인 즐거움만 남기는 것이 목표입니다."</p>
        `,
        author: "VIBE Editorial",
        date: "2025.12.20",
        readTime: "9분 읽기",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bbcbf?q=80&w=2071&auto=format&fit=crop"
    },
    {
        id: 9,
        category: 'news',
        title: "글로벌 스타일 데이터베이스 100만 건 돌파",
        desc: "아시아를 넘어 유럽, 북미까지. VIBE가 구축하고 있는 전 세계 스타일 표준 데이터의 현황과 비전.",
        content: `
            <p class="lead">VIBE의 분석 엔진이 처리한 글로벌 스타일 데이터가 이번 달을 기점으로 100만 건(1.0M)을 돌파했습니다. 이것은 단순한 숫자가 아닙니다.</p>

            <h3>Diversity of Beauty</h3>
            <p>한국인의 데이터로 시작했지만, 이제 VIBE의 서버에는 다양한 인종, 연령, 문화권의 스타일 데이터가 쌓이고 있습니다. 파리의 시크함, 뉴욕의 실용주의, 도쿄의 개성, 서울의 트렌디함이 모두 데이터화되어 서로 융합되고 있습니다. 이는 AI의 편향성을 없애고, 전 지구적인 관점에서의 미적 기준을 확립하는 데 기여합니다.</p>

            <h3>Cross-Border Recommendation</h3>
            <p>"나와 비슷한 체형과 분위기를 가진 프랑스 사람은 어떤 옷을 입을까?" 100만 건의 데이터베이스는 이 질문에 답할 수 있습니다. 국경을 넘어 나와 가장 유사한 스타일 도플갱어들의 데이터를 참조하여, 생각지도 못했던 새로운 스타일을 제안받을 수 있습니다.</p>

            <h3>Next Milestone</h3>
            <p>우리의 다음 목표는 1,000만 건입니다. 데이터가 쌓일수록 VIBE의 제안은 더욱 정교해집니다. 전 세계인의 스타일 표준이 되는 그날까지, VIBE의 엔진은 멈추지 않을 것입니다.</p>
        `,
        author: "VIBE News",
        date: "2025.12.15",
        readTime: "2분 읽기",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
    }
]

export default function Insight() {
    const [activeTab, setActiveTab] = useState('all')
    const [selectedArticle, setSelectedArticle] = useState(null)

    // Lock body scroll when modal is open
    useEffect(() => {
        if (selectedArticle) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
    }, [selectedArticle])

    const filteredArticles = activeTab === 'all'
        ? articles
        : articles.filter(article => article.category === activeTab)

    return (
        <div className="pt-32 pb-20 px-6 lg:px-12 max-w-[1200px] mx-auto min-h-screen text-white">

            {/* Page Header */}
            <div className="mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="font-serif text-5xl md:text-6xl mb-6 tracking-tight text-white">VIBE INSIGHT</h1>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed keep-all">
                        데이터가 제안하는 스타일 전략과 VIBE의 발자취를 공유합니다.
                        감각 너머의 논리를 탐구하는 전문가들의 시선을 만나보세요.
                    </p>
                </motion.div>
            </div>

            {/* Category Tabs */}
            <div className="mb-12 border-b border-white/10 overflow-x-auto">
                <div className="flex gap-8 pb-4 min-w-max">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveTab(cat.id)}
                            className={`
                                text-sm font-medium tracking-wide transition-colors relative pb-4 -mb-4
                                ${activeTab === cat.id ? 'text-brand' : 'text-gray-400 hover:text-white'}
                            `}
                        >
                            {cat.label}
                            {activeTab === cat.id && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand"
                                />
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* Article List */}
            <div className="grid grid-cols-1 gap-12">
                {filteredArticles.map((article, index) => (
                    <motion.article
                        key={article.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="group flex flex-col md:flex-row gap-8 md:gap-12 items-start cursor-pointer"
                        onClick={() => setSelectedArticle(article)}
                    >
                        {/* Thumbnail */}
                        <div className="w-full md:w-[400px] aspect-[4/3] md:aspect-[16/10] overflow-hidden bg-white/5 relative">
                            <img
                                src={article.image}
                                alt={article.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] font-bold tracking-widest uppercase">
                                {categories.find(c => c.id === article.category)?.label}
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 py-2">
                            <div className="flex items-center gap-4 text-xs text-gray-400 mb-3 font-mono">
                                <span className="flex items-center gap-1">
                                    <Clock size={12} /> {article.readTime}
                                </span>
                                <span className="w-px h-3 bg-gray-300" />
                                <span className="flex items-center gap-1">
                                    <Calendar size={12} /> {article.date}
                                </span>
                            </div>

                            <h2 className="text-2xl md:text-3xl font-serif font-medium mb-4 group-hover:text-brand transition-colors leading-tight break-keep text-white">
                                {article.title}
                            </h2>

                            <p className="text-gray-400 leading-relaxed mb-6 line-clamp-2 md:line-clamp-3 keep-all">
                                {article.desc}
                            </p>

                            <div className="flex items-center justify-between border-t border-white/10 pt-4 mt-auto">
                                <div className="flex items-center gap-2 text-sm font-medium text-gray-300">
                                    <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gray-400">
                                        <User size={14} />
                                    </span>
                                    {article.author}
                                </div>
                                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-brand group-hover:border-brand group-hover:text-black transition-all text-white">
                                    <ArrowUpRight size={18} />
                                </div>
                            </div>
                        </div>
                    </motion.article>
                ))}
            </div>

            {filteredArticles.length === 0 && (
                <div className="py-20 text-center text-gray-400">
                    <p>아직 등록된 게시물이 없습니다.</p>
                </div>
            )}

            {/* Article Detail Modal */}
            <AnimatePresence>
                {selectedArticle && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-sm"
                        onClick={() => setSelectedArticle(null)}
                    >
                        <motion.div
                            initial={{ y: 50, opacity: 0, scale: 0.95 }}
                            animate={{ y: 0, opacity: 1, scale: 1 }}
                            exit={{ y: 20, opacity: 0, scale: 0.95 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="bg-[#0a0a0a] w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative custom-scrollbar"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedArticle(null)}
                                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors z-10"
                            >
                                <X size={24} />
                            </button>

                            {/* Hero Image */}
                            <div className="w-full h-[40vh] relative">
                                <img
                                    src={selectedArticle.image}
                                    alt={selectedArticle.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
                                <div className="absolute bottom-8 left-8 right-8">
                                    <span className="inline-block px-3 py-1 bg-brand/20 text-brand text-xs font-bold tracking-widest uppercase mb-4 border border-brand/20 rounded-full">
                                        {categories.find(c => c.id === selectedArticle.category)?.label}
                                    </span>
                                    <h2 className="font-serif text-3xl md:text-5xl text-white leading-tight mb-4">
                                        {selectedArticle.title}
                                    </h2>
                                    <div className="flex items-center gap-6 text-sm text-gray-400">
                                        <span className="flex items-center gap-2">
                                            <Calendar size={14} /> {selectedArticle.date}
                                        </span>
                                        <span className="flex items-center gap-2">
                                            <User size={14} /> {selectedArticle.author}
                                        </span>
                                        <span className="flex items-center gap-2">
                                            <Clock size={14} /> {selectedArticle.readTime}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="px-8 md:px-16 py-12">
                                <div
                                    className="prose prose-invert prose-lg max-w-none 
                                    prose-headings:font-serif prose-headings:font-light prose-headings:text-white 
                                    prose-p:text-gray-300 prose-p:leading-relaxed 
                                    prose-strong:text-brand prose-strong:font-normal
                                    prose-li:text-gray-300"
                                    dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
                                />

                                {/* Footer Actions */}
                                <div className="mt-16 pt-8 border-t border-white/10 flex justify-between items-center">
                                    <div className="flex gap-4">
                                        <button className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                                            <Share2 size={18} /> 공유하기
                                        </button>
                                        <button className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                                            <Bookmark size={18} /> 저장하기
                                        </button>
                                    </div>
                                    <button
                                        onClick={() => setSelectedArticle(null)}
                                        className="text-sm text-gray-500 hover:text-white transition-colors"
                                    >
                                        닫기
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
