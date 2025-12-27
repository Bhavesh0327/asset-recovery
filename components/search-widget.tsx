'use client'

import { useState } from 'react'
import { SearchIcon, CheckCircleIcon, ChevronDownIcon } from './icons'
import SearchResultsTable from './search-results'

interface SearchResults {
  success: boolean
  data?: {
    data: Array<{
      id: string
      investor_name: string
      investor_father_name?: string
      company_name: string
      state: string
      no_of_share: number
    }>
  }
}

export default function SearchWidget() {
  const [firstName, setFirstName] = useState('')
  const [middleName, setMiddleName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [phoneError, setPhoneError] = useState('')
  const [state, setState] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [searchResults, setSearchResults] = useState<SearchResults | null>(null)
  const [error, setError] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 50

  const indianStates = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
    'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand',
    'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
    'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab',
    'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
    'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
    'Andaman and Nicobar Islands', 'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu',
    'Delhi', 'Jammu and Kashmir', 'Ladakh', 'Lakshadweep', 'Puducherry'
  ]

  const validatePhone = (value: string) => {
    const cleaned = value.replace(/\D/g, '')
    if (cleaned.length > 10) return
    setPhone(cleaned)
    
    if (cleaned.length === 0) {
      setPhoneError('')
    } else if (cleaned.length < 10) {
      setPhoneError('Phone number must be 10 digits')
    } else if (!/^[6-9]/.test(cleaned)) {
      setPhoneError('Invalid Indian mobile number')
    } else {
      setPhoneError('')
    }
  }

  const formatPhone = (value: string) => {
    if (value.length <= 5) return value
    return `${value.slice(0, 5)} ${value.slice(5)}`
  }

  const handleSearch = async () => {
    setIsLoading(true)
    setError('')
    setSearchResults(null)
    setCurrentPage(1)

    // Merge names: first + middle (if exists) + last
    const nameParts = [firstName.trim()]
    if (middleName.trim()) {
      nameParts.push(middleName.trim())
    }
    if (lastName.trim()) {
      nameParts.push(lastName.trim())
    }
    const investorName = nameParts.join(' ')

    const payload = {
      clone_id: 404,
      investor_name: investorName,
      state: state
    }

    try {
      const response = await fetch('/api/invest-search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      })

      if (!response.ok) {
        throw new Error('Search failed. Please try again.')
      }

      const data = await response.json()
      setSearchResults(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <div id="search" className="bg-white rounded-[2rem] shadow-2xl p-6 sm:p-8 max-w-2xl mx-auto top-border-gradient relative z-10 scroll-mt-24">
        {/* Header */}
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold text-slate-900 mb-1">Start Your Free Search</h3>
          <p className="text-slate-500 text-sm">We&apos;ll search across shares, mutual funds, banking, insurance & FDs</p>
        </div>

        {/* Form Fields */}
        <div className="space-y-4">
          {/* Name Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name *"
              className="w-full px-4 py-3.5 bg-slate-50 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 transition-all"
            />
            <input
              type="text"
              value={middleName}
              onChange={(e) => setMiddleName(e.target.value)}
              placeholder="Middle Name"
              className="w-full px-4 py-3.5 bg-slate-50 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 transition-all"
            />
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
              className="w-full px-4 py-3.5 bg-slate-50 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>

          {/* Phone Number */}
          <div>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 text-slate-500">
                <span className="text-lg">🇮🇳</span>
                <span className="font-medium">+91</span>
                <div className="w-px h-5 bg-slate-300"></div>
              </div>
              <input
                type="tel"
                value={formatPhone(phone)}
                onChange={(e) => validatePhone(e.target.value)}
                placeholder="Mobile Number *"
                className={`w-full pl-24 pr-4 py-3.5 bg-slate-50 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 transition-all ${
                  phoneError ? 'ring-2 ring-red-400 focus:ring-red-400' : 'focus:ring-blue-500'
                }`}
              />
              {phone.length === 10 && !phoneError && (
                <div className="absolute right-4 top-1/2 -translate-y-1/2">
                  <CheckCircleIcon className="w-5 h-5 text-green-500" />
                </div>
              )}
            </div>
            {phoneError && (
              <p className="text-red-500 text-sm mt-1 ml-1">{phoneError}</p>
            )}
          </div>

          {/* State Dropdown */}
          <div className="relative">
            <select 
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="w-full px-4 py-3.5 bg-slate-50 rounded-xl text-slate-900 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 transition-all appearance-none cursor-pointer"
            >
              <option value="">Select State / UT *</option>
              {indianStates.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            <ChevronDownIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
          </div>

          {/* What We Search */}
          <div className="bg-slate-50 rounded-xl p-4">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">We&apos;ll search across:</p>
            <div className="flex flex-wrap gap-2">
              {['Shares & Securities', 'Mutual Funds', 'Bank Deposits', 'Insurance', 'Fixed Deposits'].map((item) => (
                <span key={item} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-lg text-sm text-slate-600 border border-slate-200">
                  <CheckCircleIcon className="w-3.5 h-3.5 text-green-500" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <button 
            onClick={handleSearch}
            disabled={!firstName || phone.length !== 10 || !!phoneError || !state || isLoading}
            className="w-full py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white rounded-xl font-bold text-lg shadow-lg shadow-blue-600/30 disabled:shadow-none transition-all flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Searching...
              </>
            ) : (
              <>
                <SearchIcon className="w-5 h-5" />
                Start Recovery Search
              </>
            )}
          </button>

          {/* Error Message */}
          {error && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
              {error}
            </div>
          )}

        </div>

      </div>
      
      {/* Search Results */}
      {searchResults && (
        <SearchResultsTable 
          results={searchResults} 
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage} 
          itemsPerPage={itemsPerPage} 
        />
      )}
    </>
  )
}

