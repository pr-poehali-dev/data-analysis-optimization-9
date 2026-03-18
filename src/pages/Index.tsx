import { Button } from "@/components/ui/button"
import { ArrowRight, Menu } from "lucide-react"
import { LineShadowText } from "@/components/line-shadow-text"
import { ShimmerButton } from "@/components/shimmer-button"
import { useState } from "react"

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-black">
        {/* Gold & Lavender flowing wave rays */}
        <div className="absolute inset-0">
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1200 800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              {/* Gold neon pulse */}
              <radialGradient id="neonPulse1" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(255,248,200,1)" />
                <stop offset="30%" stopColor="rgba(212,175,55,1)" />
                <stop offset="70%" stopColor="rgba(180,140,20,0.8)" />
                <stop offset="100%" stopColor="rgba(180,140,20,0)" />
              </radialGradient>
              {/* Lavender neon pulse */}
              <radialGradient id="neonPulse2" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(240,230,255,0.9)" />
                <stop offset="25%" stopColor="rgba(180,140,220,0.9)" />
                <stop offset="60%" stopColor="rgba(140,90,200,0.7)" />
                <stop offset="100%" stopColor="rgba(140,90,200,0)" />
              </radialGradient>
              {/* Warm gold pulse */}
              <radialGradient id="neonPulse3" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(255,240,150,1)" />
                <stop offset="35%" stopColor="rgba(218,165,32,1)" />
                <stop offset="75%" stopColor="rgba(160,120,10,0.6)" />
                <stop offset="100%" stopColor="rgba(160,120,10,0)" />
              </radialGradient>

              {/* Hero text background — golden glow */}
              <radialGradient id="heroTextBg" cx="30%" cy="50%" r="70%">
                <stop offset="0%" stopColor="rgba(212,175,55,0.18)" />
                <stop offset="40%" stopColor="rgba(180,140,220,0.10)" />
                <stop offset="80%" stopColor="rgba(212,175,55,0.06)" />
                <stop offset="100%" stopColor="rgba(0,0,0,0)" />
              </radialGradient>
              <filter id="heroTextBlur" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="12" result="blur" />
                <feTurbulence baseFrequency="0.7" numOctaves="4" result="noise" />
                <feColorMatrix in="noise" type="saturate" values="0" result="monoNoise" />
                <feComponentTransfer in="monoNoise" result="alphaAdjustedNoise">
                  <feFuncA type="discrete" tableValues="0.03 0.06 0.09 0.12" />
                </feComponentTransfer>
                <feComposite in="blur" in2="alphaAdjustedNoise" operator="multiply" result="noisyBlur" />
                <feMerge>
                  <feMergeNode in="noisyBlur" />
                </feMerge>
              </filter>

              {/* Gold thread gradients */}
              <linearGradient id="threadFade1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(0,0,0,1)" />
                <stop offset="15%" stopColor="rgba(212,175,55,0.85)" />
                <stop offset="85%" stopColor="rgba(212,175,55,0.85)" />
                <stop offset="100%" stopColor="rgba(0,0,0,1)" />
              </linearGradient>
              {/* Lavender thread gradients */}
              <linearGradient id="threadFade2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(0,0,0,1)" />
                <stop offset="12%" stopColor="rgba(180,140,220,0.75)" />
                <stop offset="88%" stopColor="rgba(180,140,220,0.75)" />
                <stop offset="100%" stopColor="rgba(0,0,0,1)" />
              </linearGradient>
              {/* Mixed gold-lavender thread */}
              <linearGradient id="threadFade3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(0,0,0,1)" />
                <stop offset="18%" stopColor="rgba(218,165,32,0.80)" />
                <stop offset="50%" stopColor="rgba(160,120,210,0.70)" />
                <stop offset="82%" stopColor="rgba(218,165,32,0.80)" />
                <stop offset="100%" stopColor="rgba(0,0,0,1)" />
              </linearGradient>

              <filter id="backgroundBlur" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="8" result="blur" />
                <feTurbulence baseFrequency="0.9" numOctaves="3" result="noise" />
                <feColorMatrix in="noise" type="saturate" values="0" result="monoNoise" />
                <feComponentTransfer in="monoNoise" result="alphaAdjustedNoise">
                  <feFuncA type="discrete" tableValues="0.05 0.1 0.15 0.2" />
                </feComponentTransfer>
                <feComposite in="blur" in2="alphaAdjustedNoise" operator="multiply" result="noisyBlur" />
                <feMerge>
                  <feMergeNode in="noisyBlur" />
                </feMerge>
              </filter>
              <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* Certificate border gradient */}
              <linearGradient id="certBorder" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(212,175,55,0.6)" />
                <stop offset="30%" stopColor="rgba(180,140,220,0.4)" />
                <stop offset="70%" stopColor="rgba(212,175,55,0.6)" />
                <stop offset="100%" stopColor="rgba(180,140,220,0.4)" />
              </linearGradient>

              {/* Shimmer animation for cert area */}
              <linearGradient id="shimmerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(212,175,55,0.05)" />
                <stop offset="50%" stopColor="rgba(255,248,200,0.12)" />
                <stop offset="100%" stopColor="rgba(180,140,220,0.06)" />
              </linearGradient>
            </defs>

            <g>
              {/* Hero text background glow */}
              <ellipse cx="300" cy="350" rx="400" ry="200" fill="url(#heroTextBg)" filter="url(#heroTextBlur)" opacity="0.6" />
              <ellipse cx="350" cy="320" rx="500" ry="250" fill="url(#heroTextBg)" filter="url(#heroTextBlur)" opacity="0.4" />
              <ellipse cx="400" cy="300" rx="600" ry="300" fill="url(#heroTextBg)" filter="url(#heroTextBlur)" opacity="0.2" />

              {/* Certificate placeholder area — right side */}
              <rect x="720" y="130" width="400" height="280" rx="12" fill="url(#shimmerGrad)" stroke="url(#certBorder)" strokeWidth="1.5" opacity="0.7" />
              <rect x="730" y="140" width="380" height="260" rx="8" fill="none" stroke="url(#certBorder)" strokeWidth="0.5" opacity="0.4" />
              {/* Corner ornaments */}
              <path d="M728 148 L728 132 L744 132" stroke="rgba(212,175,55,0.8)" strokeWidth="2" fill="none" />
              <path d="M1112 148 L1112 132 L1096 132" stroke="rgba(212,175,55,0.8)" strokeWidth="2" fill="none" />
              <path d="M728 402 L728 418 L744 418" stroke="rgba(212,175,55,0.8)" strokeWidth="2" fill="none" />
              <path d="M1112 402 L1112 418 L1096 418" stroke="rgba(212,175,55,0.8)" strokeWidth="2" fill="none" />
              {/* Inner text lines placeholder */}
              <line x1="790" y1="190" x2="1050" y2="190" stroke="rgba(212,175,55,0.3)" strokeWidth="1" />
              <line x1="810" y1="215" x2="1030" y2="215" stroke="rgba(180,140,220,0.25)" strokeWidth="0.8" />
              <line x1="760" y1="270" x2="1080" y2="270" stroke="rgba(212,175,55,0.2)" strokeWidth="0.6" />
              <line x1="760" y1="290" x2="1080" y2="290" stroke="rgba(212,175,55,0.2)" strokeWidth="0.6" />
              <line x1="760" y1="310" x2="1080" y2="310" stroke="rgba(180,140,220,0.15)" strokeWidth="0.6" />
              <line x1="760" y1="330" x2="1080" y2="330" stroke="rgba(180,140,220,0.15)" strokeWidth="0.6" />
              {/* Signature line */}
              <line x1="800" y1="375" x2="960" y2="375" stroke="rgba(212,175,55,0.5)" strokeWidth="1" />
              <text x="920" y="165" textAnchor="middle" fill="rgba(212,175,55,0.35)" fontSize="11" fontFamily="serif" letterSpacing="3">СЕРТИФИКАТ</text>

              {/* Flowing gold threads */}
              <path id="thread1" d="M50 720 Q200 590 350 540 Q500 490 650 520 Q800 550 950 460 Q1100 370 1200 340" stroke="url(#threadFade1)" strokeWidth="0.8" fill="none" opacity="0.8" />
              <circle r="2" fill="url(#neonPulse1)" opacity="1" filter="url(#neonGlow)">
                <animateMotion dur="4s" repeatCount="indefinite"><mpath href="#thread1" /></animateMotion>
              </circle>

              <path id="thread2" d="M80 730 Q250 620 400 570 Q550 520 700 550 Q850 580 1000 490 Q1150 400 1300 370" stroke="url(#threadFade2)" strokeWidth="1.5" fill="none" opacity="0.7" />
              <circle r="3" fill="url(#neonPulse2)" opacity="1" filter="url(#neonGlow)">
                <animateMotion dur="5s" repeatCount="indefinite"><mpath href="#thread2" /></animateMotion>
              </circle>

              <path id="thread3" d="M20 710 Q180 580 320 530 Q460 480 600 510 Q740 540 880 450 Q1020 360 1200 330" stroke="url(#threadFade3)" strokeWidth="1.2" fill="none" opacity="0.8" />
              <circle r="2.5" fill="url(#neonPulse1)" opacity="1" filter="url(#neonGlow)">
                <animateMotion dur="4.5s" repeatCount="indefinite"><mpath href="#thread3" /></animateMotion>
              </circle>

              <path id="thread4" d="M120 740 Q280 640 450 590 Q620 540 770 570 Q920 600 1070 510 Q1220 420 1350 390" stroke="url(#threadFade1)" strokeWidth="0.6" fill="none" opacity="0.6" />
              <circle r="1.5" fill="url(#neonPulse3)" opacity="1" filter="url(#neonGlow)">
                <animateMotion dur="5.5s" repeatCount="indefinite"><mpath href="#thread4" /></animateMotion>
              </circle>

              <path id="thread5" d="M60 725 Q220 600 380 550 Q540 500 680 530 Q820 560 960 470 Q1100 380 1280 350" stroke="url(#threadFade2)" strokeWidth="1.0" fill="none" opacity="0.7" />
              <circle r="2.2" fill="url(#neonPulse2)" opacity="1" filter="url(#neonGlow)">
                <animateMotion dur="4.2s" repeatCount="indefinite"><mpath href="#thread5" /></animateMotion>
              </circle>

              <path id="thread6" d="M150 735 Q300 660 480 610 Q660 560 800 590 Q940 620 1080 530 Q1220 440 1400 410" stroke="url(#threadFade3)" strokeWidth="1.3" fill="none" opacity="0.6" />
              <circle r="2.8" fill="url(#neonPulse1)" opacity="1" filter="url(#neonGlow)">
                <animateMotion dur="5.2s" repeatCount="indefinite"><mpath href="#thread6" /></animateMotion>
              </circle>

              <path id="thread7" d="M40 715 Q190 585 340 535 Q490 485 630 515 Q770 545 910 455 Q1050 365 1250 335" stroke="url(#threadFade1)" strokeWidth="0.9" fill="none" opacity="0.8" />
              <circle r="2" fill="url(#neonPulse3)" opacity="1" filter="url(#neonGlow)">
                <animateMotion dur="4.8s" repeatCount="indefinite"><mpath href="#thread7" /></animateMotion>
              </circle>

              <path id="thread8" d="M100 728 Q260 630 420 580 Q580 530 720 560 Q860 590 1000 500 Q1140 410 1320 380" stroke="url(#threadFade2)" strokeWidth="1.4" fill="none" opacity="0.7" />
              <circle r="3" fill="url(#neonPulse2)" opacity="1" filter="url(#neonGlow)">
                <animateMotion dur="5.8s" repeatCount="indefinite"><mpath href="#thread8" /></animateMotion>
              </circle>

              <path id="thread9" d="M30 722 Q170 595 310 545 Q450 495 590 525 Q730 555 870 465 Q1010 375 1180 345" stroke="url(#threadFade3)" strokeWidth="0.5" fill="none" opacity="0.6" />
              <circle r="1.2" fill="url(#neonPulse1)" opacity="1" filter="url(#neonGlow)">
                <animateMotion dur="6s" repeatCount="indefinite"><mpath href="#thread9" /></animateMotion>
              </circle>

              <path id="thread10" d="M90 732 Q240 625 390 575 Q540 525 680 555 Q820 585 960 495 Q1100 405 1300 375" stroke="url(#threadFade1)" strokeWidth="1.1" fill="none" opacity="0.8" />
              <circle r="2.5" fill="url(#neonPulse3)" opacity="1" filter="url(#neonGlow)">
                <animateMotion dur="4.3s" repeatCount="indefinite"><mpath href="#thread10" /></animateMotion>
              </circle>

              <path id="thread11" d="M70 727 Q210 605 360 555 Q510 505 650 535 Q790 565 930 475 Q1070 385 1260 355" stroke="url(#threadFade2)" strokeWidth="0.4" fill="none" opacity="0.5" />
              <circle r="1" fill="url(#neonPulse2)" opacity="1" filter="url(#neonGlow)">
                <animateMotion dur="5.7s" repeatCount="indefinite"><mpath href="#thread11" /></animateMotion>
              </circle>

              <path id="thread12" d="M110 738 Q270 645 430 595 Q590 545 730 575 Q870 605 1010 515 Q1150 425 1380 395" stroke="url(#threadFade3)" strokeWidth="1.5" fill="none" opacity="0.7" />
              <circle r="3.2" fill="url(#neonPulse1)" opacity="1" filter="url(#neonGlow)">
                <animateMotion dur="4.7s" repeatCount="indefinite"><mpath href="#thread12" /></animateMotion>
              </circle>

              <path id="thread13" d="M45 718 Q185 588 325 538 Q465 488 605 518 Q745 548 885 458 Q1025 368 1220 338" stroke="url(#threadFade1)" strokeWidth="0.7" fill="none" opacity="0.6" />
              <circle r="1.8" fill="url(#neonPulse3)" opacity="1" filter="url(#neonGlow)">
                <animateMotion dur="5.3s" repeatCount="indefinite"><mpath href="#thread13" /></animateMotion>
              </circle>

              <path id="thread14" d="M130 721 Q290 630 460 580 Q630 530 770 560 Q910 590 1050 500 Q1190 410 1350 380" stroke="url(#threadFade2)" strokeWidth="1.0" fill="none" opacity="0.8" />
              <circle r="2.3" fill="url(#neonPulse2)" opacity="1" filter="url(#neonGlow)">
                <animateMotion dur="4.9s" repeatCount="indefinite"><mpath href="#thread14" /></animateMotion>
              </circle>

              <path id="thread15" d="M25 713 Q165 583 305 533 Q445 483 585 513 Q725 543 865 453 Q1005 363 1200 333" stroke="url(#threadFade3)" strokeWidth="0.3" fill="none" opacity="0.4" />
              <circle r="0.8" fill="url(#neonPulse1)" opacity="1" filter="url(#neonGlow)">
                <animateMotion dur="6.2s" repeatCount="indefinite"><mpath href="#thread15" /></animateMotion>
              </circle>

              <path id="thread16" d="M85 719 Q235 605 385 555 Q535 505 675 535 Q815 565 955 475 Q1095 385 1320 355" stroke="url(#threadFade1)" strokeWidth="1.5" fill="none" opacity="0.9" />
              <circle r="3.2" fill="url(#neonPulse2)" opacity="1" filter="url(#neonGlow)">
                <animateMotion dur="4.1s" repeatCount="indefinite"><mpath href="#thread16" /></animateMotion>
              </circle>

              <path id="thread17" d="M50 720 Q180 660 320 620 Q460 580 600 600 Q740 620 880 560 Q1020 500 1200 340" stroke="url(#threadFade2)" strokeWidth="0.6" fill="none" opacity="0.5" />
              <circle r="1.5" fill="url(#neonPulse1)" opacity="1" filter="url(#neonGlow)">
                <animateMotion dur="5.1s" repeatCount="indefinite"><mpath href="#thread17" /></animateMotion>
              </circle>

              <path id="thread18" d="M50 720 Q200 680 350 640 Q500 600 650 620 Q800 640 950 580 Q1100 520 1200 340" stroke="url(#threadFade3)" strokeWidth="1.2" fill="none" opacity="0.7" />
              <circle r="2.8" fill="url(#neonPulse2)" opacity="1" filter="url(#neonGlow)">
                <animateMotion dur="4.6s" repeatCount="indefinite"><mpath href="#thread18" /></animateMotion>
              </circle>

              <path id="thread19" d="M50 720 Q160 670 280 630 Q400 590 540 610 Q680 630 820 570 Q960 510 1200 340" stroke="url(#threadFade1)" strokeWidth="0.8" fill="none" opacity="0.6" />
              <circle r="2" fill="url(#neonPulse3)" opacity="1" filter="url(#neonGlow)">
                <animateMotion dur="5.4s" repeatCount="indefinite"><mpath href="#thread19" /></animateMotion>
              </circle>

              <path id="thread20" d="M50 720 Q220 690 380 650 Q540 610 680 630 Q820 650 960 590 Q1100 530 1200 340" stroke="url(#threadFade2)" strokeWidth="1.4" fill="none" opacity="0.8" />
              <circle r="3" fill="url(#neonPulse1)" opacity="1" filter="url(#neonGlow)">
                <animateMotion dur="4.4s" repeatCount="indefinite"><mpath href="#thread20" /></animateMotion>
              </circle>
            </g>
          </svg>
        </div>
      </div>

      {/* Header Navigation */}
      <header className="relative z-10 flex items-center justify-between px-4 sm:px-6 py-4 lg:px-12">
        <div className="flex items-center space-x-2 pl-3 sm:pl-6 lg:pl-12">
          <span
            className="font-bold text-lg sm:text-xl lg:text-2xl"
            style={{
              background: "linear-gradient(90deg, #D4AF37, #E8D5A3, #B89FCC, #D4AF37)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundSize: "200% auto",
              animation: "shimmerText 4s linear infinite",
            }}
          >
            АРТ-СТУДИЯ
          </span>
        </div>

        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <a href="#" className="text-white/70 hover:text-amber-300 transition-colors text-sm lg:text-base">
            Мастер-классы
          </a>
          <a href="#" className="text-white/70 hover:text-amber-300 transition-colors text-sm lg:text-base">
            Сертификаты
          </a>
          <a href="#" className="text-white/70 hover:text-amber-300 transition-colors text-sm lg:text-base">
            О студии
          </a>
          <a href="#" className="text-white/70 hover:text-amber-300 transition-colors text-sm lg:text-base">
            Контакты
          </a>
        </nav>

        <button className="md:hidden text-white p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <Menu className="w-6 h-6" />
        </button>

        <ShimmerButton
          shimmerColor="#D4AF37"
          background="rgba(20,15,0,1)"
          className="hidden md:flex border-amber-600/40 text-amber-200 px-4 lg:px-6 py-2 rounded-xl text-sm lg:text-base font-medium"
        >
          Записаться
        </ShimmerButton>
      </header>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-black/95 backdrop-blur-sm border-b border-amber-600/20 z-20">
          <nav className="flex flex-col space-y-4 px-6 py-6">
            <a href="#" className="text-white/80 hover:text-amber-300 transition-colors">Мастер-классы</a>
            <a href="#" className="text-white/80 hover:text-amber-300 transition-colors">Сертификаты</a>
            <a href="#" className="text-white/80 hover:text-amber-300 transition-colors">О студии</a>
            <a href="#" className="text-white/80 hover:text-amber-300 transition-colors">Контакты</a>
            <ShimmerButton shimmerColor="#D4AF37" background="rgba(20,15,0,1)" className="border-amber-600/40 text-amber-200 px-6 py-2.5 rounded-xl text-sm font-medium w-fit">
              Записаться
            </ShimmerButton>
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-start justify-start sm:justify-center min-h-[calc(100vh-80px)] px-4 sm:px-6 lg:px-12 max-w-6xl pt-4 sm:-mt-12 lg:-mt-24 pl-6 sm:pl-12 lg:pl-20">
        {/* Badge */}
        <div className="mb-4 sm:mb-8">
          <div
            className="inline-flex items-center backdrop-blur-sm rounded-full px-3 sm:px-4 py-2"
            style={{
              background: "rgba(212,175,55,0.12)",
              border: "1px solid rgba(212,175,55,0.35)",
            }}
          >
            <span
              className="text-xs md:text-xs font-medium tracking-widest uppercase"
              style={{ color: "#E8D5A3" }}
            >
              Официальный документ
            </span>
          </div>
        </div>

        <h1 className="text-white text-4xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-8xl font-bold leading-tight mb-4 sm:mb-6 text-balance">
          Сертификат
          <br />
          на{" "}
          <LineShadowText className="italic font-light" shadowColor="#D4AF37">
            мастер-класс
          </LineShadowText>
        </h1>

        <p className="text-white/60 text-sm sm:text-base md:text-sm lg:text-2xl mb-6 sm:mb-8 max-w-2xl text-pretty" style={{ color: "rgba(232,213,163,0.65)" }}>
          Подарите незабываемый опыт творчества.
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          Красивый сертификат с золотым оформлением.
        </p>

        <Button
          className="group relative text-black px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base md:text-xs lg:text-lg font-semibold flex items-center gap-2 border-0 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
          style={{
            background: "linear-gradient(135deg, #D4AF37, #F0E080, #B8860B)",
            boxShadow: "0 4px 24px rgba(212,175,55,0.35), 0 0 40px rgba(212,175,55,0.15)",
          }}
        >
          Получить сертификат
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-rotate-12 transition-transform duration-300" />
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Button>
      </main>

      <style>{`
        @keyframes shimmerText {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
    </div>
  )
}
