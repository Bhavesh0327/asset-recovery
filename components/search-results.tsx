'use client'

import { useState } from 'react'
import { CheckCircleIcon, XIcon } from './icons'

interface InvestorData {
  id: string
  investor_name: string
  investor_father_name?: string
  company_name: string
  state: string
  no_of_share: number
}

interface InvestorDetails {
  investor_full_name: string
  father_full_name?: string
  company_name: string
  security_code?: string
  folio_no?: string
  no_of_share: number
  dp_id_client_id?: string
  actual_date_transfer_iepf?: string
  address?: string
  market_val_of_share?: number
  nominal_val_of_share?: number
}

interface SearchResultsProps {
  results: {
    success: boolean
    data?: {
      data: InvestorData[]
    }
  }
  currentPage: number
  setCurrentPage: (page: number) => void
  itemsPerPage: number
}

export default function SearchResultsTable({ results, currentPage, setCurrentPage, itemsPerPage }: SearchResultsProps) {
  const [selectedInvestor, setSelectedInvestor] = useState<InvestorData | null>(null)
  const [investorDetails, setInvestorDetails] = useState<{ success: boolean; data?: { data: { list: InvestorDetails[] } } } | null>(null)
  const [detailsLoading, setDetailsLoading] = useState(false)
  const [detailsError, setDetailsError] = useState('')

  if (!results) return null
  
  if (!results.success || !results.data?.data?.length) {
    return (
      <div className="mt-8 max-w-4xl mx-auto px-4">
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 text-center">
          <p className="text-amber-700">No unclaimed assets found matching your search criteria.</p>
        </div>
      </div>
    )
  }

  const allData = results.data.data
  const totalItems = allData.length
  const totalPages = Math.ceil(totalItems / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentData = allData.slice(startIndex, endIndex)

  const fetchInvestorDetails = async (investor: InvestorData) => {
    setSelectedInvestor(investor)
    setDetailsLoading(true)
    setDetailsError('')
    setInvestorDetails(null)

    try {
      const response = await fetch('/api/investor-select', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          clone_id: 404,
          investor_id: investor.id
        })
      })

      if (!response.ok) {
        throw new Error('Failed to fetch investor details')
      }

      const data = await response.json()
      setInvestorDetails(data)
    } catch (err) {
      setDetailsError(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setDetailsLoading(false)
    }
  }

  const closeModal = () => {
    setSelectedInvestor(null)
    setInvestorDetails(null)
    setDetailsError('')
  }

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
      document.getElementById('results-section')?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const getPageNumbers = () => {
    const pages: number[] = []
    const maxVisible = 5
    let start = Math.max(1, currentPage - Math.floor(maxVisible / 2))
    const end = Math.min(totalPages, start + maxVisible - 1)
    
    if (end - start + 1 < maxVisible) {
      start = Math.max(1, end - maxVisible + 1)
    }
    
    for (let i = start; i <= end; i++) {
      pages.push(i)
    }
    return pages
  }

  const formatDate = (dateStr?: string) => {
    if (!dateStr) return '-'
    const date = new Date(dateStr)
    return date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
  }

  const formatCurrency = (value?: number) => {
    if (!value) return '-'
    return `₹${parseFloat(String(value)).toLocaleString('en-IN')}`
  }

  return (
    <div id="results-section" className="mt-12 max-w-6xl mx-auto px-4 scroll-mt-24">
      {/* Results Header */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-6 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <CheckCircleIcon className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-green-800">Potential Matches Found!</h3>
              <p className="text-green-600">
                {totalItems} unclaimed asset{totalItems !== 1 ? 's' : ''} found matching your search
              </p>
            </div>
          </div>
          <div className="text-sm text-green-600 bg-green-100 px-4 py-2 rounded-lg">
            Showing {startIndex + 1}-{Math.min(endIndex, totalItems)} of {totalItems}
          </div>
        </div>
      </div>

      {/* Results Table */}
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="text-left px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">#</th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Investor Name</th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Father&apos;s Name</th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Company</th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">State</th>
                <th className="text-right px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Shares</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {currentData.map((item, index) => (
                <tr 
                  key={item.id} 
                  onClick={() => fetchInvestorDetails(item)}
                  className="hover:bg-blue-50 transition-colors cursor-pointer group"
                >
                  <td className="px-6 py-4 text-sm text-slate-400">{startIndex + index + 1}</td>
                  <td className="px-6 py-4">
                    <span className="font-semibold text-slate-900 group-hover:text-blue-600">{item.investor_name}</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">
                    {item.investor_father_name?.trim() || '-'}
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-slate-700">{item.company_name}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex px-2 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-lg">
                      {item.state}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className="font-bold text-green-600">{item.no_of_share}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-4 bg-slate-50 border-t border-slate-200">
            <p className="text-sm text-slate-500">
              Page {currentPage} of {totalPages}
            </p>
            <div className="flex items-center gap-1">
              <button
                onClick={() => goToPage(1)}
                disabled={currentPage === 1}
                className="px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-200 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                First
              </button>
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-200 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                ←
              </button>
              
              {getPageNumbers().map((page) => (
                <button
                  key={page}
                  onClick={() => goToPage(page)}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    currentPage === page
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {page}
                </button>
              ))}
              
              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-200 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                →
              </button>
              <button
                onClick={() => goToPage(totalPages)}
                disabled={currentPage === totalPages}
                className="px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-200 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Last
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
        <p className="text-blue-800 font-semibold mb-2">Found your name in the list?</p>
        <p className="text-blue-600 text-sm mb-4">Contact us to start the recovery process and claim your shares.</p>
        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-colors">
          Start Recovery Process
        </button>
      </div>

      {/* Investor Details Modal */}
      {selectedInvestor && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={closeModal}></div>
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-gradient-to-r from-blue-600 to-indigo-600">
              <div className="text-white">
                <h2 className="text-xl font-bold">Investor Details</h2>
                <p className="text-blue-100 text-sm">{selectedInvestor.investor_name}</p>
              </div>
              <button onClick={closeModal} className="p-2 hover:bg-white/20 rounded-lg transition-colors text-white">
                <XIcon className="w-5 h-5" />
              </button>
            </div>
            
            {/* Modal Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-100px)]">
              {detailsLoading && (
                <div className="flex flex-col items-center justify-center py-16">
                  <div className="relative">
                    <div className="w-16 h-16 border-4 border-blue-200 rounded-full"></div>
                    <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin absolute top-0 left-0"></div>
                  </div>
                  <p className="mt-4 text-slate-600 font-medium">Fetching investor details...</p>
                  <p className="text-slate-400 text-sm">Please wait a moment</p>
                </div>
              )}

              {detailsError && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-center">
                  <p className="text-red-600">{detailsError}</p>
                  <button 
                    onClick={() => fetchInvestorDetails(selectedInvestor)}
                    className="mt-3 px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700"
                  >
                    Try Again
                  </button>
                </div>
              )}

              {investorDetails && investorDetails.success && investorDetails.data?.data?.list?.[0] && (
                <div className="space-y-6">
                  {(() => {
                    const details = investorDetails.data.data.list[0]
                    return (
                      <>
                        {/* Value Highlight */}
                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6 text-center">
                          <p className="text-green-600 text-sm font-medium mb-1">Estimated Market Value</p>
                          <p className="text-4xl font-bold text-green-700">{formatCurrency(details.market_val_of_share)}</p>
                          <p className="text-green-600 text-sm mt-1">{details.no_of_share} shares @ {formatCurrency(details.nominal_val_of_share)} nominal value</p>
                        </div>

                        {/* Details Grid */}
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="bg-slate-50 rounded-xl p-4">
                            <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Investor Name</p>
                            <p className="font-semibold text-slate-900">{details.investor_full_name}</p>
                          </div>
                          <div className="bg-slate-50 rounded-xl p-4">
                            <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Father&apos;s Name</p>
                            <p className="font-semibold text-slate-900">{details.father_full_name || '-'}</p>
                          </div>
                          <div className="bg-slate-50 rounded-xl p-4">
                            <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Company</p>
                            <p className="font-semibold text-slate-900">{details.company_name}</p>
                          </div>
                          <div className="bg-slate-50 rounded-xl p-4">
                            <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Security Code</p>
                            <p className="font-semibold text-slate-900">{details.security_code || '-'}</p>
                          </div>
                          <div className="bg-slate-50 rounded-xl p-4">
                            <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Folio Number</p>
                            <p className="font-semibold text-slate-900 text-sm break-all">{details.folio_no || '-'}</p>
                          </div>
                          <div className="bg-slate-50 rounded-xl p-4">
                            <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Number of Shares</p>
                            <p className="font-semibold text-slate-900">{details.no_of_share}</p>
                          </div>
                          <div className="bg-slate-50 rounded-xl p-4">
                            <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">DP ID / Client ID</p>
                            <p className="font-semibold text-slate-900">{details.dp_id_client_id || '-'}</p>
                          </div>
                          <div className="bg-slate-50 rounded-xl p-4">
                            <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Transfer Date to IEPF</p>
                            <p className="font-semibold text-slate-900">{formatDate(details.actual_date_transfer_iepf)}</p>
                          </div>
                        </div>

                        {/* Address */}
                        <div className="bg-slate-50 rounded-xl p-4">
                          <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Registered Address</p>
                          <p className="font-medium text-slate-900">{details.address || '-'}</p>
                        </div>

                        {/* CTA */}
                        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
                          <p className="text-blue-800 font-semibold mb-2">Is this your investment?</p>
                          <p className="text-blue-600 text-sm mb-4">We can help you recover these shares. Our team will guide you through the entire IEPF claim process.</p>
                          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-colors">
                            Claim This Investment
                          </button>
                        </div>
                      </>
                    )
                  })()}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

