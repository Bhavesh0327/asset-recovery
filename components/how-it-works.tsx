'use client'

import { UsersIcon, SearchIcon, FileTextIcon, BanknoteIcon, ZapIcon } from './icons'

export default function HowItWorksSection() {
  const steps = [
    {
      step: '01',
      title: 'Enter Your Info',
      description: "Just your name, phone number and state — that's all we need to begin.",
      icon: UsersIcon,
      color: 'blue'
    },
    {
      step: '02',
      title: 'We Search All Databases',
      description: 'Our system scans IEPF, SEBI, banks, insurers, and mutual fund registries simultaneously.',
      icon: SearchIcon,
      color: 'indigo'
    },
    {
      step: '03',
      title: 'Get Complete Report',
      description: 'Receive a consolidated report of unclaimed shares, MFs, deposits, insurance & FDs.',
      icon: FileTextIcon,
      color: 'purple'
    },
    {
      step: '04',
      title: 'Recover Your Wealth',
      description: 'We assist you with documentation and guide you through the claim process.',
      icon: BanknoteIcon,
      color: 'green'
    }
  ]

  const colors: Record<string, string> = {
    blue: 'bg-blue-100 text-blue-600',
    indigo: 'bg-indigo-100 text-indigo-600',
    purple: 'bg-purple-100 text-purple-600',
    green: 'bg-green-100 text-green-600'
  }

  return (
    <section id="how-it-works" className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-pattern opacity-50"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 rounded-full text-blue-600 text-sm font-semibold mb-4">
            <ZapIcon className="w-4 h-4" />
            Simple Process
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Four simple steps to recover your forgotten wealth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div key={index} className="relative group">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-slate-200 to-transparent z-0"></div>
              )}
              
              <div className="bg-slate-50 rounded-3xl p-8 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative z-10">
                <div className="text-5xl font-black text-slate-100 mb-4">{item.step}</div>
                <div className={`w-14 h-14 ${colors[item.color]} rounded-2xl flex items-center justify-center mb-4`}>
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

