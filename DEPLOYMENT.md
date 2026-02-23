# Bidsmart - Deployment Guide

## ✅ Recent Updates

### Logo Integration
- **Bidsmart trademark logo** now properly integrated from `/src/app/bidsmart_trademark.png`
- Logo displays in sidebar (full size when expanded, compact when collapsed)
- Removed `figma:asset` dependency for Vercel compatibility

### Hiveminds Branding
- **Color palette** updated to match www.hiveminds.in:
  - Primary Blue: `#4A6FA5` (Hiveminds brand blue)
  - Accent Orange: `#FF6B35` 
  - Accent Gold: `#F7931E`
  - Secondary Yellow: `#F5D547`
- All UI components use consistent Hiveminds color scheme
- Charts and data visualizations use brand-aligned colors

### Vercel Deployment Ready
- Fixed build configuration for Vercel
- Removed problematic function runtime configs
- All asset imports use standard ES module syntax
- Production-ready build configuration

---

## 🚀 Deploy to Vercel

### Prerequisites
- GitHub repository: `https://github.com/lgk147/Bidsmart`
- Vercel account connected to GitHub
- Supabase project setup

### Deployment Steps

1. **Push latest changes to GitHub:**
   ```bash
   git add .
   git commit -m "feat: Add Bidsmart logo and Hiveminds branding"
   git push origin main
   ```

2. **Vercel Auto-Deploy:**
   - Vercel will automatically detect the push
   - Build will start within 30 seconds
   - Monitor at: https://vercel.com/dashboard

3. **Expected Build Output:**
   ```
   ✓ Build completed successfully
   ✓ Deployment ready
   🌍 Live at: https://bidsmart-xxx.vercel.app
   ```

---

## 🎨 Branding Details

### Logo Usage
- **File:** `/src/app/bidsmart_trademark.png`
- **Import:** `import bidsmartLogo from '../bidsmart_trademark.png'`
- **Display:** Used in Layout.tsx sidebar header

### Color Palette (Hiveminds)

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| Primary Blue | `#4A6FA5` | Main brand color, buttons, links |
| Primary Dark | `#2C4A75` | Sidebar background |
| Primary Light | `#6B8DC2` | Hover states |
| Accent Orange | `#FF6B35` | Gradients, highlights |
| Accent Gold | `#F7931E` | Gradients, CTAs |
| Secondary Yellow | `#F5D547` | Charts, accents |

### Typography
- Font family: System default (Inter-like)
- Headings: Medium weight (500)
- Body: Normal weight (400)

---

## 📦 Build Configuration

### package.json Scripts
```json
{
  "build": "vite build",
  "preview": "vite preview"
}
```

### vercel.json
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

---

## 🔐 Environment Variables

Required for Vercel deployment:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key_here
```

Add these in Vercel Dashboard → Settings → Environment Variables

---

## ✨ Features Checklist

- ✅ Bidsmart trademark logo integrated
- ✅ Hiveminds color palette applied
- ✅ Vercel build configuration
- ✅ React Router setup
- ✅ Responsive sidebar navigation
- ✅ 10 complete modules
- ✅ Backend API integration ready
- ✅ Supabase integration
- ✅ Production-ready code

---

## 🎯 Post-Deployment

After successful deployment:

1. **Test all modules:**
   - Dashboard
   - Campaign Manager
   - AMC Insights
   - All Intelligence modules
   - Performance Analytics

2. **Verify branding:**
   - Logo displays correctly
   - Colors match Hiveminds palette
   - Responsive design works

3. **Configure domain (optional):**
   - Add custom domain in Vercel
   - Update DNS settings
   - SSL certificate auto-generated

---

## 📞 Support

- **Hiveminds:** www.hiveminds.in
- **Email:** support@hiveminds.in
- **Deployment Issues:** Check Vercel build logs

---

**Last Updated:** February 23, 2026  
**Version:** 1.0.0  
**Status:** Production Ready ✅
