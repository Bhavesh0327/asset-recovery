'use client'

import { TrendingUpIcon, LandmarkIcon, PieChartIcon, ShieldIcon } from './icons'

export default function StatsSection() {
  const stats = [
    { value: '₹1.5L Cr+', label: 'Unclaimed Shares', Icon: TrendingUpIcon },
    { value: '₹50,000 Cr+', label: 'Dormant Bank Deposits', Icon: LandmarkIcon },
    { value: '₹25,000 Cr+', label: 'Forgotten Mutual Funds', Icon: PieChartIcon },
    { value: '₹20,000 Cr+', label: 'Unclaimed Insurance', Icon: ShieldIcon }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply blur-[150px] opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply blur-[150px] opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            The Forgotten Wealth of India
          </h2>
          <p className="text-lg text-slate-400">
            Billions lying unclaimed across financial institutions — is some of it yours?
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 text-center hover:bg-white/10 transition-all"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-xl mb-4">
                <stat.Icon className="w-6 h-6 text-blue-400" />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-400 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

