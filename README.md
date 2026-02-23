# Bidsmart - Full-Funnel Amazon Advertising Platform

<div align="center">
  <img src="./src/app/bidsmart-logo.png" alt="Bidsmart Logo" width="400"/>
  
  **Comprehensive Amazon Ads management platform for full-funnel advertising campaigns**
  
  Built with React, TypeScript, Material UI, and Supabase
</div>

---

## 🎯 Overview

Bidsmart is a professional-grade Amazon Advertising management platform designed to streamline full-funnel campaign planning, execution, optimization, and analytics. Built with best practices from YouTube Brand Stack and tailored for Amazon DSP, Sponsored Products, Sponsored Brands, Sponsored Display, and other Amazon ad products.

## ✨ Key Features

### 📊 **Dashboard**
- Real-time performance metrics (ROAS, conversions, spend, impressions)
- Full-funnel performance visualization
- Campaign distribution by ad product
- Active campaign summaries
- Trend analysis and forecasting

### 🎯 **Campaign Manager**
- Multi-channel campaign creation and management
- Support for Amazon DSP, SP, SB, SBV, SD
- Bulk import/export functionality
- Campaign status management (Active, Paused, Ended)
- Performance tracking per campaign

### 📅 **Planning Module**
- Full-funnel budget allocation
- Top/Mid/Bottom funnel strategy planning
- Media mix optimization
- Campaign duration and timeline management
- Performance forecasting
- KPI target setting (ROAS, reach, conversions)

### 🧠 **AMC Insights** (Amazon Marketing Cloud)
- Audience segment analysis
- Multi-touch attribution modeling
- Cross-device journey tracking
- Reach & frequency optimization
- Demographic breakdowns
- Path to conversion analysis

### 📄 **Media Brief**
- Comprehensive campaign brief creation
- Creative asset management
- Ad product selection
- Target audience definition
- Messaging and copy guidelines
- Creative specifications

### 💰 **Bidding Models**
- Dynamic bidding strategies
- Target ROAS optimization
- Keyword-level bid recommendations
- Performance-based bid adjustments
- Audience segment bid modifiers
- Real-time optimization scoring

### 🏪 **Retail Intelligence**
- Sales performance tracking
- Product-level analytics (ASIN performance)
- Category distribution
- Competitor benchmarking
- Review and rating tracking
- Market share analysis

### 📈 **Ads Intelligence**
- Cross-channel performance comparison
- Keyword performance analysis
- CTR, CPC, conversion tracking
- Campaign health monitoring
- Optimization recommendations
- ACoS efficiency tracking

### 📊 **Performance Analytics**
- Daily performance trends
- Channel-by-channel breakdown
- Revenue and spend tracking
- Conversion funnel analysis
- Multi-metric dashboards
- Export and reporting

### 👥 **Audience Targeting**
- Custom audience segment creation
- Demographic targeting
- Behavioral filters (Prime members, purchase frequency)
- In-market audience targeting
- Lookalike audience building
- Retargeting capabilities
- Performance by audience segment

---

## 🛠️ Technology Stack

### Frontend
- **React 18.3** - Modern UI framework
- **TypeScript** - Type-safe development
- **React Router 7** - Client-side routing
- **Material UI (MUI)** - Professional component library
- **Tailwind CSS v4** - Utility-first styling
- **Recharts** - Data visualization
- **Lucide React** - Icon library
- **Sonner** - Toast notifications

### Backend
- **Supabase** - Cloud database and backend services
- **Hono** - Fast web framework for Deno
- **Deno** - Secure TypeScript runtime
- **Key-Value Store** - Campaign and user data persistence

### Build & Development
- **Vite 6** - Fast build tool
- **PostCSS** - CSS processing

---

## 📁 Project Structure

```
bidsmart/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── Dashboard.tsx              # Main dashboard
│   │   │   ├── CampaignManager.tsx        # Campaign management
│   │   │   ├── Planning.tsx               # Campaign planning
│   │   │   ├── AMCInsights.tsx            # AMC analytics
│   │   │   ├── MediaBrief.tsx             # Media brief creator
│   │   │   ├── BiddingModel.tsx           # Bidding optimization
│   │   │   ├── RetailIntelligence.tsx     # Retail analytics
│   │   │   ├── AdsIntelligence.tsx        # Ads performance
│   │   │   ├── Performance.tsx            # Performance analytics
│   │   │   ├── AudienceTargeting.tsx      # Audience management
│   │   │   ├── Layout.tsx                 # App layout & navigation
│   │   │   └── ui/                        # Reusable UI components
│   │   ├── App.tsx                        # Root component
│   │   └── routes.tsx                     # Route configuration
│   └── styles/
│       ├── theme.css                      # Hiveminds color scheme
│       ├── fonts.css                      # Inter font family
│       └── tailwind.css                   # Tailwind configuration
├── supabase/
│   └── functions/
│       └── server/
│           ├── index.tsx                  # API endpoints
│           └── kv_store.tsx               # Database utilities
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd bidsmart
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

---

## 🔌 API Integration

### Amazon Ads API Setup

Bidsmart is designed to integrate with Amazon Advertising APIs:

1. **Amazon DSP API** - Display and video campaigns
2. **Amazon Sponsored Products API** - Product ads
3. **Amazon Sponsored Brands API** - Brand campaigns
4. **Amazon Sponsored Display API** - Display retargeting
5. **Amazon Marketing Cloud (AMC)** - Advanced analytics
6. **Amazon Marketing Stream** - Real-time performance data

### Configuration

To integrate with Amazon Ads APIs:

1. Register for Amazon Ads API access at [advertising.amazon.com/API](https://advertising.amazon.com/API)
2. Obtain API credentials (Client ID, Client Secret, Refresh Token)
3. Configure authentication in `/supabase/functions/server/index.tsx`
4. Use the `/amazon-ads/*` endpoints for API proxying

### Backend Endpoints

The Bidsmart backend provides the following API endpoints:

#### Campaign Management
- `GET /make-server-a79fb251/campaigns` - Fetch all campaigns
- `POST /make-server-a79fb251/campaigns` - Create campaign
- `PUT /make-server-a79fb251/campaigns/:id` - Update campaign
- `DELETE /make-server-a79fb251/campaigns/:id` - Delete campaign

#### Media Briefs
- `GET /make-server-a79fb251/media-briefs` - Fetch briefs
- `POST /make-server-a79fb251/media-briefs` - Create brief

#### Audiences
- `GET /make-server-a79fb251/audiences` - Fetch audiences
- `POST /make-server-a79fb251/audiences` - Create audience

#### Bidding Strategies
- `GET /make-server-a79fb251/bidding-strategies` - Fetch strategies
- `POST /make-server-a79fb251/bidding-strategies` - Save strategy

#### Planning
- `GET /make-server-a79fb251/plans` - Fetch plans
- `POST /make-server-a79fb251/plans` - Save plan

#### Amazon Ads Integration
- `POST /make-server-a79fb251/amazon-ads/auth` - Authentication
- `GET /make-server-a79fb251/amazon-ads/campaigns` - Fetch campaigns
- `GET /make-server-a79fb251/amazon-ads/performance` - Performance data

---

## 🎨 Design System

### Color Palette (Hiveminds Branding)

- **Primary Blue**: `#4A6FA5` - Main brand color
- **Primary Dark**: `#2C4A75` - Sidebar and headers
- **Primary Light**: `#6B8DC2` - Accents
- **Accent Red**: `#B4373F` - CTAs and alerts
- **Secondary Yellow**: `#F5D547` - Highlights
- **Secondary Dark**: `#E6C33C` - Chart colors

### Typography

- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800

---

## 📊 Module Descriptions

### 1. Dashboard
Centralized view of all advertising performance with:
- Real-time KPI cards
- Performance trend charts
- Campaign distribution
- Full-funnel visualization
- Active campaign overview

### 2. Campaign Manager
End-to-end campaign management:
- Create campaigns across all Amazon ad products
- Bulk operations (import/export)
- Status management
- Performance tracking
- Budget monitoring

### 3. Planning
Strategic campaign planning tools:
- Budget allocation by funnel stage
- Media mix optimization
- Timeline planning
- Forecasting and projections
- KPI target setting

### 4. AMC Insights
Advanced Amazon Marketing Cloud analytics:
- Audience segment insights
- Multi-touch attribution
- Cross-device tracking
- Reach and frequency analysis
- Demographic breakdowns

### 5. Media Brief
Comprehensive campaign brief creation:
- Objective setting
- Ad product selection
- Creative asset management
- Audience definition
- Messaging guidelines

### 6. Bidding Models
AI-powered bid optimization:
- Multiple bidding strategies
- Keyword-level recommendations
- Audience segment adjustments
- ROAS targeting
- Performance simulation

### 7. Retail Intelligence
E-commerce performance tracking:
- Sales and revenue analytics
- Product (ASIN) performance
- Category analysis
- Competitor benchmarking
- Review monitoring

### 8. Ads Intelligence
Advertising performance optimization:
- Campaign performance comparison
- Keyword analysis
- CTR and CPC tracking
- ACoS optimization
- Health monitoring

### 9. Performance Analytics
Comprehensive reporting:
- Daily trend analysis
- Channel comparison
- Multi-metric dashboards
- Export capabilities
- Custom date ranges

### 10. Audience Targeting
Precision audience management:
- Segment creation and management
- Demographic targeting
- Behavioral filters
- Lookalike audiences
- Performance by segment

---

## 🔐 Security Considerations

**Important**: This application is designed for prototyping and demonstration purposes. For production use:

1. Implement proper authentication and authorization
2. Secure API keys and credentials using environment variables
3. Add rate limiting to API endpoints
4. Implement data validation and sanitization
5. Use HTTPS for all API communications
6. Follow Amazon Ads API security guidelines
7. Implement proper error handling and logging

---

## 📦 Deployment

### Local Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

The build output will be in the `dist/` directory.

### Deployment Platforms

Bidsmart can be deployed to:
- **Vercel** - Recommended for React apps
- **Netlify** - Easy deployment with continuous integration
- **AWS Amplify** - Native AWS integration
- **Cloudflare Pages** - Fast global CDN

### Supabase Backend

The Supabase backend can be deployed to Supabase Cloud or self-hosted.

---

## 🤝 Contributing

This is a proprietary product. For questions or support, contact the development team.

---

## 📄 License

Copyright © 2024 Hiveminds. All rights reserved.

---

## 📞 Support

For technical support or questions:
- Email: support@hiveminds.in
- Website: [www.hiveminds.in](https://www.hiveminds.in)

---

## 🙏 Acknowledgments

- Amazon Advertising API documentation
- YouTube Brand Stack best practices
- Material UI component library
- Recharts visualization library
- Supabase backend infrastructure

---

**Built with ❤️ by Hiveminds**
