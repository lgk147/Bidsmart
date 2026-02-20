# Bidsmart Deployment Guide

This guide provides step-by-step instructions for deploying the Bidsmart Amazon Ads Full-Funnel platform to production.

---

## 📋 Pre-Deployment Checklist

- [ ] Amazon Ads API credentials obtained
- [ ] Supabase project created
- [ ] Environment variables configured
- [ ] Production domain secured
- [ ] SSL certificates ready
- [ ] Analytics tracking setup (optional)
- [ ] Error monitoring configured (optional)

---

## 🔐 Amazon Ads API Setup

### 1. Register for Amazon Ads API Access

1. Visit [advertising.amazon.com/API](https://advertising.amazon.com/API)
2. Sign in with your Amazon Ads account
3. Navigate to "API Center" → "Get Started"
4. Complete the API access request form
5. Wait for approval (typically 1-3 business days)

### 2. Create API Application

1. Go to API Console → "Create Application"
2. Fill in application details:
   - **App Name**: Bidsmart
   - **Description**: Full-funnel Amazon advertising management platform
   - **Redirect URIs**: Your production domain + `/auth/callback`
3. Note down your **Client ID** and **Client Secret**

### 3. Generate Refresh Token

```bash
# Authorization URL (replace CLIENT_ID)
https://www.amazon.com/ap/oa?client_id=YOUR_CLIENT_ID&scope=advertising::campaign_management&response_type=code&redirect_uri=YOUR_REDIRECT_URI

# Exchange authorization code for refresh token
curl -X POST \
  https://api.amazon.com/auth/o2/token \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'grant_type=authorization_code&code=YOUR_AUTH_CODE&redirect_uri=YOUR_REDIRECT_URI&client_id=YOUR_CLIENT_ID&client_secret=YOUR_CLIENT_SECRET'
```

Save the `refresh_token` from the response.

---

## 🗄️ Supabase Backend Setup

### 1. Create Supabase Project

1. Visit [supabase.com](https://supabase.com)
2. Click "New Project"
3. Fill in project details:
   - **Name**: bidsmart-prod
   - **Database Password**: Generate strong password
   - **Region**: Choose closest to your users
4. Wait for project creation (~2 minutes)

### 2. Configure Database

The application uses the pre-configured `kv_store_a79fb251` table. No additional schema setup is required for basic functionality.

For advanced features, you may want to create additional tables:

```sql
-- Optional: Create campaigns table for better querying
CREATE TABLE campaigns (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  type TEXT NOT NULL,
  status TEXT NOT NULL,
  budget DECIMAL(10,2),
  spend DECIMAL(10,2),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Optional: Create audiences table
CREATE TABLE audiences (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  type TEXT NOT NULL,
  size INTEGER,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### 3. Deploy Edge Functions

```bash
# Install Supabase CLI
npm install -g supabase

# Login to Supabase
supabase login

# Link to your project
supabase link --project-ref YOUR_PROJECT_REF

# Deploy edge functions
supabase functions deploy make-server-a79fb251
```

### 4. Set Environment Secrets

```bash
# Set Amazon Ads API credentials
supabase secrets set AMAZON_ADS_CLIENT_ID=your_client_id
supabase secrets set AMAZON_ADS_CLIENT_SECRET=your_client_secret
supabase secrets set AMAZON_ADS_REFRESH_TOKEN=your_refresh_token
supabase secrets set AMAZON_ADS_PROFILE_ID=your_profile_id
```

---

## 🚀 Frontend Deployment

### Option 1: Vercel (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel --prod
   ```

4. **Configure Environment Variables**
   - Go to Vercel Dashboard → Your Project → Settings → Environment Variables
   - Add the following:
     ```
     VITE_SUPABASE_URL=https://your-project.supabase.co
     VITE_SUPABASE_ANON_KEY=your_anon_key
     ```

### Option 2: Netlify

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**
   ```bash
   netlify login
   ```

3. **Deploy**
   ```bash
   netlify deploy --prod
   ```

4. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `dist`

### Option 3: AWS Amplify

1. **Install Amplify CLI**
   ```bash
   npm install -g @aws-amplify/cli
   ```

2. **Initialize Amplify**
   ```bash
   amplify init
   ```

3. **Add hosting**
   ```bash
   amplify add hosting
   ```

4. **Publish**
   ```bash
   amplify publish
   ```

### Option 4: Cloudflare Pages

1. Go to Cloudflare Dashboard → Pages
2. Click "Create a project"
3. Connect your Git repository
4. Configure build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
5. Add environment variables
6. Deploy

---

## 🔧 Environment Variables

Create a `.env.production` file:

```env
# Supabase
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key

# Amazon Ads API (handled server-side)
# These should be set in Supabase secrets, not in frontend
```

**Important**: Never commit `.env` files to version control.

---

## 📊 Post-Deployment Configuration

### 1. Configure Custom Domain

**Vercel:**
```bash
vercel domains add yourdomain.com
```

**Netlify:**
1. Go to Domain Settings
2. Add custom domain
3. Configure DNS

### 2. Enable HTTPS

All deployment platforms provide automatic SSL certificates via Let's Encrypt.

### 3. Setup Analytics (Optional)

Add Google Analytics or Mixpanel to `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 4. Error Monitoring (Optional)

Integrate Sentry for error tracking:

```bash
npm install @sentry/react
```

Configure in `src/main.tsx`:

```typescript
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "YOUR_SENTRY_DSN",
  environment: "production",
});
```

---

## 🔒 Security Hardening

### 1. Content Security Policy

Add to `index.html`:

```html
<meta http-equiv="Content-Security-Policy" content="
  default-src 'self';
  script-src 'self' 'unsafe-inline' https://www.googletagmanager.com;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  font-src 'self' https://fonts.gstatic.com;
  img-src 'self' data: https:;
  connect-src 'self' https://your-project.supabase.co https://advertising-api.amazon.com;
">
```

### 2. API Rate Limiting

Configure rate limiting in Supabase Edge Functions:

```typescript
// Add to server/index.tsx
import { RateLimiter } from 'npm:limiter';

const limiter = new RateLimiter({ tokensPerInterval: 100, interval: "minute" });

app.use('*', async (c, next) => {
  await limiter.removeTokens(1);
  await next();
});
```

### 3. Authentication

For production, implement proper authentication:

```typescript
// Example with Supabase Auth
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.VITE_SUPABASE_ANON_KEY
);

// Protected route
app.get('/api/protected', async (c) => {
  const token = c.req.header('Authorization')?.replace('Bearer ', '');
  const { data: { user }, error } = await supabase.auth.getUser(token);
  
  if (error || !user) {
    return c.json({ error: 'Unauthorized' }, 401);
  }
  
  // Continue with authenticated request
});
```

---

## 🧪 Testing Production Build

Before deploying, test the production build locally:

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

Test all features:
- [ ] Dashboard loads correctly
- [ ] All navigation links work
- [ ] Forms submit successfully
- [ ] Charts render properly
- [ ] API endpoints respond correctly
- [ ] Mobile responsiveness works

---

## 📈 Performance Optimization

### 1. Enable Compression

All major platforms enable gzip/brotli compression by default.

### 2. Configure Caching

Add `vercel.json` for Vercel:

```json
{
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

### 3. Lazy Load Routes

Already configured via React Router's code splitting.

---

## 🔄 CI/CD Pipeline

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Run tests
        run: npm test
        
      - name: Build
        run: npm run build
        env:
          VITE_SUPABASE_URL: ${{ secrets.SUPABASE_URL }}
          VITE_SUPABASE_ANON_KEY: ${{ secrets.SUPABASE_ANON_KEY }}
          
      - name: Deploy to Vercel
        run: vercel --prod --token ${{ secrets.VERCEL_TOKEN }}
```

---

## 📱 Mobile App (Optional)

To create a mobile app version using Capacitor:

```bash
# Install Capacitor
npm install @capacitor/core @capacitor/cli

# Initialize Capacitor
npx cap init

# Add platforms
npx cap add ios
npx cap add android

# Build and sync
npm run build
npx cap sync
```

---

## 🆘 Troubleshooting

### Issue: API requests fail in production

**Solution**: Check CORS configuration and ensure Supabase URL is correct.

### Issue: Environment variables not loading

**Solution**: Verify variables are prefixed with `VITE_` for frontend access.

### Issue: Charts not rendering

**Solution**: Ensure Recharts is included in dependencies, not devDependencies.

### Issue: 404 on refresh

**Solution**: Configure platform for SPA routing:
- **Vercel**: Add `vercel.json` with rewrites
- **Netlify**: Add `_redirects` file
- **Cloudflare**: Configure Page Rules

---

## 📊 Monitoring & Maintenance

### Key Metrics to Monitor

1. **API Response Times**
2. **Error Rates**
3. **User Session Duration**
4. **Page Load Performance**
5. **Database Query Performance**

### Recommended Tools

- **Uptime Monitoring**: UptimeRobot, Pingdom
- **Performance**: Lighthouse, WebPageTest
- **Error Tracking**: Sentry, Rollbar
- **Analytics**: Google Analytics, Mixpanel

---

## 🔄 Updates & Rollbacks

### Deploy New Version

```bash
# Pull latest changes
git pull origin main

# Build and deploy
npm run build
vercel --prod
```

### Rollback to Previous Version

**Vercel:**
```bash
vercel rollback
```

**Netlify:**
Use the Netlify dashboard to rollback to a previous deploy.

---

## 📞 Support

For deployment issues:
- Check platform-specific documentation
- Review Supabase logs in dashboard
- Verify API credentials are correct
- Test API endpoints with Postman/Thunder Client

---

**Deployment Checklist Complete! 🎉**

Your Bidsmart platform is now ready for production use.
