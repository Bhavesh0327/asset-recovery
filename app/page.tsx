'use client'

import { useState } from 'react'
import Navbar from '@/components/navbar'
import HeroSection from '@/components/hero'
import HowItWorksSection from '@/components/how-it-works'
import StatsSection from '@/components/stats'
import KnowledgeBase from '@/components/knowledge-base'
import TestimonialsSection from '@/components/testimonials'
import CTASection from '@/components/cta'
import Footer from '@/components/footer'
import { Modal, ContactContent, TermsContent, PrivacyContent } from '@/components/modal'

export default function Home() {
  const [activeModal, setActiveModal] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <StatsSection />
        <KnowledgeBase />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer onOpenModal={setActiveModal} />
      
      {/* Modals */}
      <Modal isOpen={activeModal === 'contact'} onClose={() => setActiveModal(null)} title="Contact Us">
        <ContactContent />
      </Modal>
      <Modal isOpen={activeModal === 'terms'} onClose={() => setActiveModal(null)} title="Terms of Service">
        <TermsContent />
      </Modal>
      <Modal isOpen={activeModal === 'privacy'} onClose={() => setActiveModal(null)} title="Privacy Policy">
        <PrivacyContent />
      </Modal>
    </div>
  )
}

