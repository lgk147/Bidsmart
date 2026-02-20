import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard";
import CampaignManager from "./components/CampaignManager";
import Planning from "./components/Planning";
import AMCInsights from "./components/AMCInsights";
import MediaBrief from "./components/MediaBrief";
import BiddingModel from "./components/BiddingModel";
import RetailIntelligence from "./components/RetailIntelligence";
import AdsIntelligence from "./components/AdsIntelligence";
import Performance from "./components/Performance";
import AudienceTargeting from "./components/AudienceTargeting";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Dashboard },
      { path: "campaigns", Component: CampaignManager },
      { path: "planning", Component: Planning },
      { path: "amc", Component: AMCInsights },
      { path: "media-brief", Component: MediaBrief },
      { path: "bidding", Component: BiddingModel },
      { path: "retail-intelligence", Component: RetailIntelligence },
      { path: "ads-intelligence", Component: AdsIntelligence },
      { path: "performance", Component: Performance },
      { path: "targeting", Component: AudienceTargeting },
    ],
  },
]);
