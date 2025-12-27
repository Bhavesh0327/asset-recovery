'use client'

import { SparklesIcon, ArrowRightIcon, ShieldIcon, CheckCircleIcon } from './icons'

export default function CTASection() {
  return (
    <section className="relative py-24 bg-slate-900 overflow-hidden">
      {/* Ambient Blur Effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600 rounded-full mix-blend-screen blur-[150px] opacity-20"></div>
      <div className="absolute top-20 right-20 w-[300px] h-[300px] bg-purple-600 rounded-full mix-blend-screen blur-[150px] opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600 rounded-full mix-blend-screen blur-[150px] opacity-15"></div>

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-10"></div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-blue-300 text-sm font-semibold mb-6 backdrop-blur-sm">
          <SparklesIcon className="w-4 h-4" />
          Start Your Free Search Today
        </div>
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
          Stop letting inflation<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">eat your legacy</span>
        </h2>
        <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
          Every day your assets sit unclaimed, they lose value. Start your recovery journey now and secure what&apos;s rightfully yours.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#search" className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-lg shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2 group">
            Start Free Search
            <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <button className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-xl font-bold text-lg transition-all backdrop-blur-sm border border-white/10">
            Talk to an Expert
          </button>
        </div>
        
        {/* Trust indicators */}
        <div className="flex flex-wrap items-center justify-center gap-8 mt-12">
          <div className="flex items-center gap-2 text-slate-400">
            <ShieldIcon className="w-5 h-5" />
            <span className="text-sm">100% Secure</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <CheckCircleIcon className="w-5 h-5" />
            <span className="text-sm">No Hidden Fees</span>
          </div>
        </div>
      </div>
    </section>
  )
}

