# WealthTrace - Unclaimed Asset Recovery Platform

A Next.js application for searching and recovering unclaimed financial assets in India, including shares, mutual funds, bank deposits, insurance policies, and fixed deposits.

## Features

- 🔍 Search for unclaimed assets across multiple databases
- 📊 View detailed investor information
- 🔒 Secure API routes that proxy external API calls
- 📱 Fully responsive design
- ⚡ Server-side API handling with Next.js API routes

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. **Clone/navigate to the project directory**:
   ```bash
   cd "/Users/darshan/Desktop/Asset Recovery"
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

### Production Build

1. **Build the application**:
   ```bash
   npm run build
   ```

2. **Start the production server**:
   ```bash
   npm start
   ```

## Project Structure

```
├── app/
│   ├── api/
│   │   ├── invest-search/
│   │   │   └── route.ts        # API route for investor search
│   │   └── investor-select/
│   │       └── route.ts        # API route for investor details
│   ├── globals.css             # Global styles and animations
│   ├── layout.tsx              # Root layout with metadata
│   └── page.tsx                # Main page component
├── components/
│   ├── icons.tsx               # SVG icon components
│   ├── navbar.tsx              # Navigation bar
│   ├── hero.tsx                # Hero section with floating cards
│   ├── search-widget.tsx       # Search form component
│   ├── search-results.tsx      # Results table and modal
│   ├── how-it-works.tsx        # Process steps section
│   ├── stats.tsx               # Statistics section
│   ├── knowledge-base.tsx      # Accordion FAQ section
│   ├── testimonials.tsx        # User testimonials
│   ├── cta.tsx                 # Call-to-action section
│   ├── footer.tsx              # Footer with links
│   └── modal.tsx               # Modal components
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## API Routes

The application uses Next.js API routes to proxy requests to the external API:

### POST `/api/invest-search`

Search for unclaimed investments by investor name and state.

**Request Body**:
```json
{
  "clone_id": 404,
  "investor_name": "John Doe",
  "state": "Maharashtra"
}
```

### POST `/api/investor-select`

Get detailed information about a specific investor.

**Request Body**:
```json
{
  "clone_id": 404,
  "investor_id": "12345"
}
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on port 3000 |
| `npm run build` | Create production build |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

## Environment Variables

No environment variables are required for basic functionality. The API endpoints are configured to use the external API at `https://recosset.vercel.app/api/`.

## Deployment

### Vercel (Recommended)

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import the project in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build settings
4. Click Deploy

### Other Platforms

The application can be deployed to any platform that supports Node.js:

- **Docker**: Create a Dockerfile and build the image
- **AWS/GCP/Azure**: Use their respective deployment services
- **Self-hosted**: Run `npm run build && npm start`

## License

This project is private and proprietary.

## Support

For questions or issues, contact: support@wealthtrace.in

