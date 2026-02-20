# Bidsmart Quick Start Guide

Get up and running with Bidsmart in 5 minutes!

---

## 🚀 Quick Installation

### Step 1: Install Dependencies

```bash
npm install
# or
pnpm install
```

### Step 2: Start Development Server

```bash
npm run dev
```

### Step 3: Open in Browser

Navigate to: `http://localhost:5173`

That's it! You're now running Bidsmart locally.

---

## 🎯 First Steps

### 1. Explore the Dashboard

- **Location**: Opens automatically at root URL (`/`)
- **What to see**: Key metrics, performance charts, campaign overview
- **Try**: Change time range using the dropdown (top right)

### 2. Create Your First Campaign

1. Click **"Campaign Manager"** in sidebar
2. Click **"Create Campaign"** button (top right)
3. Fill in:
   - Campaign Name: "Test Campaign"
   - Type: "Sponsored Products"
   - Objective: "Conversion"
   - Budget: $1000
   - Start Date: Today
   - End Date: 30 days from now
4. Click **"Create Campaign"**
5. ✅ Success! Your campaign is created

### 3. Build a Media Brief

1. Click **"Media Brief"** in sidebar
2. Fill in campaign overview:
   - Brief Name: "Product Launch Brief"
   - Brand: Your brand name
   - Objective: "Awareness"
3. Select ad products (check 2-3 boxes)
4. Define target audience
5. Upload creative assets (optional)
6. Add key messages
7. Click **"Save Brief"**

### 4. Create an Audience Segment

1. Click **"Audience Targeting"** in sidebar
2. Click **"Create Audience"** (top right)
3. Enter:
   - Name: "High-Value Customers"
   - Type: "Behavioral"
   - Age Range: "25-34"
   - Enable "Prime Members Only"
4. Adjust audience size slider
5. Click **"Create Audience"**

### 5. Set Up Bidding Strategy

1. Click **"Bidding Models"** in sidebar
2. Select **"Target ROAS"** strategy
3. Set Target ROAS to 4.0
4. Enable "Auto-Bidding"
5. Review keyword bid recommendations
6. Click **"Save Strategy"**

---

## 📊 Key Features to Try

### Dashboard
- Switch between time ranges
- Hover over charts for details
- Click on campaign names

### Campaign Manager
- Use search to filter campaigns
- Try the dropdown filters
- Click three-dot menu for actions (Edit, Pause, Delete)

### Planning
- Adjust funnel allocation sliders
- Change budget and duration
- View forecast charts

### AMC Insights
- Explore 5 different tabs
- View audience segments
- Check attribution data

### Performance Analytics
- Switch between metric views
- Compare channels
- Export data (top right)

---

## 🎨 UI Customization

### Change Theme Colors

Edit `/src/styles/theme.css`:

```css
:root {
  --primary: #4A6FA5;        /* Change primary color */
  --accent-red: #B4373F;     /* Change accent color */
  --secondary: #F5D547;      /* Change secondary color */
}
```

### Change Fonts

Edit `/src/styles/fonts.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@400;500;600;700&display=swap');

body {
  font-family: 'YourFont', sans-serif;
}
```

---

## 🔧 Common Tasks

### Add a New Module

1. Create component in `/src/app/components/YourModule.tsx`
2. Add route in `/src/app/routes.tsx`:
   ```typescript
   { path: "your-module", Component: YourModule }
   ```
3. Add navigation in `/src/app/components/Layout.tsx`:
   ```typescript
   { name: 'Your Module', href: '/your-module', icon: YourIcon }
   ```

### Install New Package

```bash
npm install package-name
# or
pnpm add package-name
```

### Build for Production

```bash
npm run build
```

Output will be in `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

---

## 🐛 Troubleshooting

### Port Already in Use

```bash
# Kill process on port 5173
npx kill-port 5173

# Then restart
npm run dev
```

### Dependencies Not Installing

```bash
# Clear cache and reinstall
rm -rf node_modules
rm package-lock.json
npm install
```

### Charts Not Rendering

Make sure you're importing Recharts:
```typescript
import { LineChart, Line, ... } from 'recharts';
```

### CSS Not Updating

```bash
# Clear Tailwind cache
rm -rf .tailwindcss
npm run dev
```

---

## 📚 Next Steps

### Learn More

- 📖 Read [USER_GUIDE.md](./USER_GUIDE.md) for detailed feature documentation
- 🔌 Check [API_DOCUMENTATION.md](./API_DOCUMENTATION.md) for API reference
- 🚀 Review [DEPLOYMENT.md](./DEPLOYMENT.md) for production deployment
- 📊 See [PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md) for complete overview

### Connect to Real Data

1. Set up Amazon Ads API credentials
2. Configure Supabase project
3. Update environment variables
4. Enable real-time data sync

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

---

## 🆘 Getting Help

### Resources

- **Documentation**: Check all `.md` files in project root
- **Code Comments**: Review inline comments in components
- **Console**: Check browser console for errors

### Support

- Email: support@hiveminds.in
- Website: www.hiveminds.in

---

## ✨ Pro Tips

1. **Use the Time Range Selector** - Available on Dashboard and Performance pages
2. **Export Your Data** - Click export buttons to download reports
3. **Explore AMC Insights** - 5 tabs of advanced analytics
4. **Test Bidding Strategies** - Use the optimization score to guide improvements
5. **Create Multiple Audiences** - Build various segments for targeting

---

## 🎯 Your First Hour Checklist

- [ ] Start development server
- [ ] Explore the Dashboard
- [ ] Create a test campaign
- [ ] Build a media brief
- [ ] Create an audience segment
- [ ] Set up a bidding strategy
- [ ] View AMC insights
- [ ] Check performance analytics
- [ ] Export some data
- [ ] Read the user guide

---

## 🎉 You're Ready!

Bidsmart is now running locally. Start exploring the features and building your Amazon Advertising campaigns!

For detailed information about each module, refer to [USER_GUIDE.md](./USER_GUIDE.md).

---

**Happy Advertising! 🚀**

*Last Updated: February 20, 2026*
