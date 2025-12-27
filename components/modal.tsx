'use client'

import { useState } from 'react'
import { XIcon } from './icons'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
}

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b border-slate-100">
          <h2 className="text-xl font-bold text-slate-900">{title}</h2>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
            <XIcon className="w-5 h-5 text-slate-500" />
          </button>
        </div>
        <div className="p-6 overflow-y-auto max-h-[calc(85vh-80px)]">
          {children}
        </div>
      </div>
    </div>
  )
}

export function ContactContent() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  
  return (
    <div className="space-y-6">
      <p className="text-slate-600">Have questions about recovering your assets? We&apos;re here to help.</p>
      
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="w-full px-4 py-3 bg-slate-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="w-full px-4 py-3 bg-slate-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="you@example.com"
          />
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
        <input
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({...formData, phone: e.target.value})}
          className="w-full px-4 py-3 bg-slate-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="+91 XXXXX XXXXX"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
        <textarea
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
          rows={4}
          className="w-full px-4 py-3 bg-slate-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          placeholder="How can we help you?"
        />
      </div>
      
      <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-colors">
        Send Message
      </button>
      
      <div className="pt-4 border-t border-slate-100">
        <p className="text-sm text-slate-500 mb-3">Or reach us directly:</p>
        <div className="space-y-2 text-sm">
          <p className="text-slate-600">📧 support@wealthtrace.in</p>
          <p className="text-slate-600">📞 +91 1800-XXX-XXXX (Toll Free)</p>
          <p className="text-slate-600">🏢 Mumbai, Maharashtra, India</p>
        </div>
      </div>
    </div>
  )
}

export function TermsContent() {
  return (
    <div className="prose prose-slate max-w-none">
      <p className="text-sm text-slate-500 mb-4">Last updated: December 2024</p>
      
      <h3 className="text-lg font-bold text-slate-900 mt-6 mb-3">1. Acceptance of Terms</h3>
      <p className="text-slate-600 mb-4">By accessing or using WealthTrace&apos;s services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
      
      <h3 className="text-lg font-bold text-slate-900 mt-6 mb-3">2. Description of Services</h3>
      <p className="text-slate-600 mb-4">WealthTrace provides a platform to help users identify and recover unclaimed financial assets including but not limited to shares, mutual funds, bank deposits, insurance policies, and fixed deposits. We act as a facilitator and do not guarantee recovery of any assets.</p>
      
      <h3 className="text-lg font-bold text-slate-900 mt-6 mb-3">3. User Responsibilities</h3>
      <p className="text-slate-600 mb-4">You agree to provide accurate and complete information when using our services. You are responsible for maintaining the confidentiality of your account information and for all activities under your account.</p>
      
      <h3 className="text-lg font-bold text-slate-900 mt-6 mb-3">4. Data Accuracy</h3>
      <p className="text-slate-600 mb-4">While we strive to provide accurate information about unclaimed assets, we rely on third-party databases and cannot guarantee the accuracy, completeness, or timeliness of the information provided.</p>
      
      <h3 className="text-lg font-bold text-slate-900 mt-6 mb-3">5. Fees and Payments</h3>
      <p className="text-slate-600 mb-4">Initial searches are free. Recovery assistance services may be subject to fees which will be clearly communicated before any charges are applied. All fees are non-refundable unless otherwise stated.</p>
      
      <h3 className="text-lg font-bold text-slate-900 mt-6 mb-3">6. Limitation of Liability</h3>
      <p className="text-slate-600 mb-4">WealthTrace shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services. Our total liability shall not exceed the amount paid by you for our services.</p>
      
      <h3 className="text-lg font-bold text-slate-900 mt-6 mb-3">7. Intellectual Property</h3>
      <p className="text-slate-600 mb-4">All content, trademarks, and intellectual property on this platform are owned by WealthTrace. You may not reproduce, distribute, or create derivative works without our express permission.</p>
      
      <h3 className="text-lg font-bold text-slate-900 mt-6 mb-3">8. Governing Law</h3>
      <p className="text-slate-600 mb-4">These terms shall be governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Mumbai, Maharashtra.</p>
      
      <h3 className="text-lg font-bold text-slate-900 mt-6 mb-3">9. Contact</h3>
      <p className="text-slate-600">For questions about these Terms, contact us at legal@wealthtrace.in</p>
    </div>
  )
}

export function PrivacyContent() {
  return (
    <div className="prose prose-slate max-w-none">
      <p className="text-sm text-slate-500 mb-4">Last updated: December 2024</p>
      
      <h3 className="text-lg font-bold text-slate-900 mt-6 mb-3">1. Information We Collect</h3>
      <p className="text-slate-600 mb-4">We collect information you provide directly, including your name, phone number, state, and any additional details needed for asset recovery. We also collect usage data and device information automatically.</p>
      
      <h3 className="text-lg font-bold text-slate-900 mt-6 mb-3">2. How We Use Your Information</h3>
      <p className="text-slate-600 mb-2">We use your information to:</p>
      <ul className="list-disc pl-5 text-slate-600 mb-4 space-y-1">
        <li>Search for unclaimed assets linked to your identity</li>
        <li>Communicate with you about potential matches</li>
        <li>Assist in the recovery process</li>
        <li>Improve our services</li>
        <li>Comply with legal obligations</li>
      </ul>
      
      <h3 className="text-lg font-bold text-slate-900 mt-6 mb-3">3. Data Security</h3>
      <p className="text-slate-600 mb-4">We implement industry-standard security measures including 256-bit SSL encryption, secure servers, and access controls to protect your personal information. However, no method of transmission over the internet is 100% secure.</p>
      
      <h3 className="text-lg font-bold text-slate-900 mt-6 mb-3">4. Data Sharing</h3>
      <p className="text-slate-600 mb-4">We do not sell your personal information. We may share data with regulatory bodies (SEBI, RBI, IEPF Authority) solely for the purpose of asset recovery. We may also share information with service providers who assist in our operations.</p>
      
      <h3 className="text-lg font-bold text-slate-900 mt-6 mb-3">5. Data Retention</h3>
      <p className="text-slate-600 mb-4">We retain your information for as long as necessary to provide our services and comply with legal requirements. You may request deletion of your data at any time.</p>
      
      <h3 className="text-lg font-bold text-slate-900 mt-6 mb-3">6. Your Rights</h3>
      <p className="text-slate-600 mb-2">You have the right to:</p>
      <ul className="list-disc pl-5 text-slate-600 mb-4 space-y-1">
        <li>Access your personal data</li>
        <li>Correct inaccurate data</li>
        <li>Request deletion of your data</li>
        <li>Withdraw consent at any time</li>
        <li>Lodge a complaint with regulatory authorities</li>
      </ul>
      
      <h3 className="text-lg font-bold text-slate-900 mt-6 mb-3">7. Cookies</h3>
      <p className="text-slate-600 mb-4">We use cookies and similar technologies to enhance your experience, analyze usage, and assist in our marketing efforts. You can control cookie preferences through your browser settings.</p>
      
      <h3 className="text-lg font-bold text-slate-900 mt-6 mb-3">8. Changes to This Policy</h3>
      <p className="text-slate-600 mb-4">We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page with an updated revision date.</p>
      
      <h3 className="text-lg font-bold text-slate-900 mt-6 mb-3">9. Contact Us</h3>
      <p className="text-slate-600">For privacy-related inquiries, contact our Data Protection Officer at privacy@wealthtrace.in</p>
    </div>
  )
}

