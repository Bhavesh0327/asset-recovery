'use client'

import { useState, useEffect } from 'react'
import { WalletIcon, MenuIcon, XIcon } from './icons'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white/90 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
              <WalletIcon className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900">
              Wealth<span className="text-blue-600">Trace</span>
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">
              How it works
            </a>
            <a href="#resources" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">
              Resources
            </a>
            <a href="#search" className="px-5 py-2.5 bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-800 transition-colors">
              Search
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <XIcon className="w-6 h-6 text-slate-900" />
            ) : (
              <MenuIcon className="w-6 h-6 text-slate-900" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-100">
            <div className="flex flex-col gap-4">
              <a href="#how-it-works" className="text-slate-600 hover:text-slate-900 font-medium py-2">
                How it works
              </a>
              <a href="#resources" className="text-slate-600 hover:text-slate-900 font-medium py-2">
                Resources
              </a>
              <a href="#search" className="px-5 py-2.5 bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-800 transition-colors w-full text-center block">
                Search
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

