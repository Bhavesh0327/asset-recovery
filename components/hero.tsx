'use client'

import { TrendingUpIcon, PieChartIcon, CoinsIcon, StarIcon, SparklesIcon } from './icons'
import SearchWidget from './search-widget'

interface FloatingCardProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

const FloatingCard = ({ children, className, delay = 0 }: FloatingCardProps) => (
  <div 
    className={`bg-white rounded-2xl shadow-xl border border-slate-100 p-4 ${className}`}
    style={{ animationDelay: `${delay}s` }}
  >
    {children}
  </div>
)

export default function HeroSection() {
  return (
    <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 overflow-hidden grid-pattern">
      {/* Background Blobs */}
      <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-blue-200 rounded-full mix-blend-multiply blur-[120px] opacity-60 pulse-animation"></div>
      <div className="absolute top-40 right-1/4 w-[400px] h-[400px] bg-indigo-200 rounded-full mix-blend-multiply blur-[120px] opacity-60 pulse-animation" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-0 left-1/2 w-[600px] h-[300px] bg-purple-100 rounded-full mix-blend-multiply blur-[100px] opacity-40"></div>

      {/* Left Side Floating Elements */}
      <div className="hidden lg:block absolute left-8 xl:left-16 top-32">
        <FloatingCard className="float-animation mb-16" delay={0}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
              <TrendingUpIcon className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <div className="text-xs text-slate-500">Shares Recovered</div>
              <div className="text-lg font-bold text-slate-900">₹2.4 Cr</div>
            </div>
          </div>
        </FloatingCard>

        <FloatingCard className="float-animation-reverse ml-8 mb-16" delay={0.5}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
              <PieChartIcon className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <div className="text-xs text-slate-500">MF Holdings</div>
              <div className="text-lg font-bold text-slate-900">₹89 Lakh</div>
            </div>
          </div>
        </FloatingCard>

        <FloatingCard className="float-animation-slow mt-16" delay={1}>
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">R</div>
              <div className="w-8 h-8 bg-purple-500 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">S</div>
              <div className="w-8 h-8 bg-green-500 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">A</div>
            </div>
            <div className="text-xs text-slate-600">+12k recovered today</div>
          </div>
        </FloatingCard>
      </div>

      {/* Right Side Floating Elements */}
      <div className="hidden lg:block absolute right-8 xl:right-16 top-32">
        <FloatingCard className="float-animation-reverse mb-16" delay={0.3}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
              <CoinsIcon className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <div className="text-xs text-slate-500">Dormant FDs</div>
              <div className="text-lg font-bold text-slate-900">₹1.2 Cr</div>
            </div>
          </div>
        </FloatingCard>

        <FloatingCard className="float-animation-slow mt-16 mr-8" delay={0.8}>
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <div className="text-xs text-slate-600 font-medium">4.9/5 Rating</div>
          </div>
        </FloatingCard>
      </div>

      {/* Decorative Elements */}
      <div className="hidden xl:block absolute left-32 bottom-32">
        <div className="w-16 h-16 border-4 border-blue-200 rounded-2xl rotate-12 opacity-40"></div>
      </div>
      <div className="hidden xl:block absolute right-24 bottom-48">
        <div className="w-8 h-8 bg-blue-400 rounded-lg rotate-45 opacity-20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full shadow-sm">
            <SparklesIcon className="w-4 h-4 text-blue-600" />
            <span className="text-blue-700 font-semibold text-sm">
              Over ₹1.5 Lakh Crore Unclaimed
            </span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center text-slate-900 tracking-tight leading-tight mb-6">
          Find money that&apos;s<br />
          <span className="gradient-text">already yours</span>
        </h1>

        {/* Subtext */}
        <p className="text-lg sm:text-xl text-slate-500 text-center max-w-2xl mx-auto mb-12">
          Crores in unclaimed shares, forgotten mutual funds, dormant bank accounts, unclaimed insurance and fixed deposits are waiting to be recovered. Start your free search today.
        </p>

        {/* Search Widget */}
        <SearchWidget />

      </div>
    </section>
  )
}

