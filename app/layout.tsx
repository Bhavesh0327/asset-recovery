import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'IEPF Search - Unclaimed Shares Search - Unified Unclaimed Investments Search',
  description: 'Search for unclaimed shares, unpaid/unclaimed dividends, and IEPF search-linked holdings in India. Discover other unclaimed financial assets like dormant bank accounts, deposits/FDs, mutual funds, EPF/PPF and insurance—then get a clear report and next steps.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-slate-50">
        {children}
      </body>
    </html>
  )
}

