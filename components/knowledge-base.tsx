'use client'

import { useState } from 'react'
import { Building2Icon, TrendingUpIcon, LandmarkIcon, FileTextIcon, ChevronDownIcon, ArrowRightIcon, Share2Icon } from './icons'

export default function KnowledgeBase() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const sections = [
    {
      id: 'founders',
      title: "Founders' Wealth Recovery",
      summary: 'How startup founders can reclaim equity from dissolved ventures.',
      content: "When startups dissolve, equity often becomes trapped in complex cap tables and legal structures. Our platform helps founders trace their ownership stakes through IEPF filings, RoC records, and demat account histories. We've helped recover over ₹50 Cr for founders in the last year alone.",
      Icon: Building2Icon
    },
    {
      id: 'mutual-funds',
      title: 'Mutual Fund Tracing',
      summary: 'Locate forgotten SIPs and lump-sum investments across AMCs.',
      content: "With over 44 Asset Management Companies in India, it's easy to lose track of old investments. Our MF tracing tool connects to CAMS and KFintech databases to surface dormant folios. Simply enter your PAN, and we'll show you every mutual fund unit registered to your name.",
      Icon: TrendingUpIcon
    },
    {
      id: 'dormant',
      title: 'Dormant Bank Accounts',
      summary: 'Reclaim funds from inactive savings and FD accounts.',
      content: "RBI regulations require banks to transfer inactive accounts (10+ years) to the Depositor Education and Awareness Fund. But you can still claim these funds! Our system checks DEAF registries across all major banks and guides you through the reclamation process with pre-filled forms.",
      Icon: LandmarkIcon
    },
    {
      id: 'paper-trail',
      title: 'Paper Trail Documentation',
      summary: 'Essential documents needed for successful asset recovery.',
      content: "Successful recovery requires proper documentation: Death certificates for deceased holders, legal heir certificates, succession certificates for disputed claims, and valid KYC documents. Our document checklist and verification system ensures you have everything before you file.",
      Icon: FileTextIcon
    }
  ]

  const toggleSection = (id: string) => {
    setExpandedSection(expandedSection === id ? null : id)
  }

  return (
    <section id="resources" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Side decorations */}
      <div className="hidden lg:block absolute left-8 top-1/2 -translate-y-1/2">
        <div className="space-y-4">
          <div className="w-2 h-20 bg-blue-200 rounded-full"></div>
          <div className="w-2 h-12 bg-indigo-200 rounded-full ml-2"></div>
          <div className="w-2 h-16 bg-purple-200 rounded-full"></div>
        </div>
      </div>
      <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2">
        <div className="space-y-4">
          <div className="w-2 h-16 bg-purple-200 rounded-full ml-2"></div>
          <div className="w-2 h-20 bg-blue-200 rounded-full"></div>
          <div className="w-2 h-12 bg-indigo-200 rounded-full ml-2"></div>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 rounded-full text-indigo-600 text-sm font-semibold mb-4">
            <FileTextIcon className="w-4 h-4" />
            Knowledge Base
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            Wealth Recovery 101
          </h2>
          <p className="text-lg text-slate-500">
            Everything you need to know about reclaiming your assets
          </p>
        </div>

        <div className="space-y-4">
          {sections.map((section) => (
            <div 
              key={section.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-slate-100"
            >
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full px-6 py-5 flex items-start gap-4 text-left"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                  <section.Icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-slate-900 mb-1">
                    {section.title}
                  </h3>
                  <p className="text-slate-500 text-sm">
                    {section.summary}
                  </p>
                </div>
                <ChevronDownIcon 
                  className={`w-5 h-5 text-slate-400 flex-shrink-0 mt-1 transition-transform duration-300 ${
                    expandedSection === section.id ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div className={`accordion-content ${expandedSection === section.id ? 'expanded' : ''}`}>
                <div className="px-6 pb-6">
                  <div className="pl-16">
                    <p className="text-slate-600 mb-4 leading-relaxed">
                      {section.content}
                    </p>
                    <div className="flex items-center gap-3">
                      <button className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold text-sm hover:bg-blue-700 transition-colors">
                        Read Guide
                        <ArrowRightIcon className="w-4 h-4" />
                      </button>
                      <button className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-lg font-semibold text-sm hover:bg-slate-200 transition-colors">
                        <Share2Icon className="w-4 h-4" />
                        Share
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

