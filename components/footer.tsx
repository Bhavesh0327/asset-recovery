'use client'

import { WalletIcon } from './icons'

interface FooterProps {
  onOpenModal: (modal: string) => void
}

export default function Footer({ onOpenModal }: FooterProps) {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                <WalletIcon className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-900">
                Wealth<span className="text-blue-600">Trace</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm mb-4">
              India&apos;s most trusted platform for unclaimed asset recovery.
            </p>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><a href="#how-it-works" className="hover:text-slate-900 transition-colors">How it Works</a></li>
              <li><a href="#resources" className="hover:text-slate-900 transition-colors">Resources</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><button onClick={() => onOpenModal('contact')} className="hover:text-slate-900 transition-colors">Contact Us</button></li>
              <li><a href="#resources" className="hover:text-slate-900 transition-colors">FAQs</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><button onClick={() => onOpenModal('privacy')} className="hover:text-slate-900 transition-colors">Privacy Policy</button></li>
              <li><button onClick={() => onOpenModal('terms')} className="hover:text-slate-900 transition-colors">Terms of Service</button></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-200 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-slate-400">
            © 2024 WealthTrace. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <button onClick={() => onOpenModal('privacy')} className="text-sm text-slate-400 hover:text-slate-600 transition-colors">Privacy</button>
            <button onClick={() => onOpenModal('terms')} className="text-sm text-slate-400 hover:text-slate-600 transition-colors">Terms</button>
            <button onClick={() => onOpenModal('contact')} className="text-sm text-slate-400 hover:text-slate-600 transition-colors">Contact</button>
          </div>
        </div>
      </div>
    </footer>
  )
}

