import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";

const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-a79fb251/health", (c) => {
  return c.json({ status: "ok" });
});

// ========================================
// BIDSMART API ENDPOINTS
// ========================================

// Campaign Management Endpoints
app.get("/make-server-a79fb251/campaigns", async (c) => {
  try {
    const campaigns = await kv.getByPrefix("campaign:");
    return c.json({ success: true, data: campaigns });
  } catch (error) {
    console.error("Error fetching campaigns:", error);
    return c.json({ success: false, error: "Failed to fetch campaigns" }, 500);
  }
});

app.post("/make-server-a79fb251/campaigns", async (c) => {
  try {
    const body = await c.req.json();
    const campaignId = `campaign:${Date.now()}`;
    await kv.set(campaignId, {
      ...body,
      id: campaignId,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
    return c.json({ success: true, message: "Campaign created successfully" });
  } catch (error) {
    console.error("Error creating campaign:", error);
    return c.json({ success: false, error: "Failed to create campaign" }, 500);
  }
});

app.put("/make-server-a79fb251/campaigns/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const body = await c.req.json();
    const existing = await kv.get(id);
    await kv.set(id, {
      ...existing,
      ...body,
      updatedAt: new Date().toISOString(),
    });
    return c.json({ success: true, message: "Campaign updated successfully" });
  } catch (error) {
    console.error("Error updating campaign:", error);
    return c.json({ success: false, error: "Failed to update campaign" }, 500);
  }
});

app.delete("/make-server-a79fb251/campaigns/:id", async (c) => {
  try {
    const id = c.req.param("id");
    await kv.del(id);
    return c.json({ success: true, message: "Campaign deleted successfully" });
  } catch (error) {
    console.error("Error deleting campaign:", error);
    return c.json({ success: false, error: "Failed to delete campaign" }, 500);
  }
});

// Media Brief Endpoints
app.get("/make-server-a79fb251/media-briefs", async (c) => {
  try {
    const briefs = await kv.getByPrefix("brief:");
    return c.json({ success: true, data: briefs });
  } catch (error) {
    console.error("Error fetching media briefs:", error);
    return c.json({ success: false, error: "Failed to fetch media briefs" }, 500);
  }
});

app.post("/make-server-a79fb251/media-briefs", async (c) => {
  try {
    const body = await c.req.json();
    const briefId = `brief:${Date.now()}`;
    await kv.set(briefId, {
      ...body,
      id: briefId,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
    return c.json({ success: true, message: "Media brief created successfully" });
  } catch (error) {
    console.error("Error creating media brief:", error);
    return c.json({ success: false, error: "Failed to create media brief" }, 500);
  }
});

// Audience Segments Endpoints
app.get("/make-server-a79fb251/audiences", async (c) => {
  try {
    const audiences = await kv.getByPrefix("audience:");
    return c.json({ success: true, data: audiences });
  } catch (error) {
    console.error("Error fetching audiences:", error);
    return c.json({ success: false, error: "Failed to fetch audiences" }, 500);
  }
});

app.post("/make-server-a79fb251/audiences", async (c) => {
  try {
    const body = await c.req.json();
    const audienceId = `audience:${Date.now()}`;
    await kv.set(audienceId, {
      ...body,
      id: audienceId,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
    return c.json({ success: true, message: "Audience segment created successfully" });
  } catch (error) {
    console.error("Error creating audience:", error);
    return c.json({ success: false, error: "Failed to create audience" }, 500);
  }
});

// Bidding Strategies Endpoints
app.get("/make-server-a79fb251/bidding-strategies", async (c) => {
  try {
    const strategies = await kv.getByPrefix("bidding:");
    return c.json({ success: true, data: strategies });
  } catch (error) {
    console.error("Error fetching bidding strategies:", error);
    return c.json({ success: false, error: "Failed to fetch bidding strategies" }, 500);
  }
});

app.post("/make-server-a79fb251/bidding-strategies", async (c) => {
  try {
    const body = await c.req.json();
    const strategyId = `bidding:${Date.now()}`;
    await kv.set(strategyId, {
      ...body,
      id: strategyId,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
    return c.json({ success: true, message: "Bidding strategy saved successfully" });
  } catch (error) {
    console.error("Error saving bidding strategy:", error);
    return c.json({ success: false, error: "Failed to save bidding strategy" }, 500);
  }
});

// Planning & Budgeting Endpoints
app.get("/make-server-a79fb251/plans", async (c) => {
  try {
    const plans = await kv.getByPrefix("plan:");
    return c.json({ success: true, data: plans });
  } catch (error) {
    console.error("Error fetching plans:", error);
    return c.json({ success: false, error: "Failed to fetch plans" }, 500);
  }
});

app.post("/make-server-a79fb251/plans", async (c) => {
  try {
    const body = await c.req.json();
    const planId = `plan:${Date.now()}`;
    await kv.set(planId, {
      ...body,
      id: planId,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
    return c.json({ success: true, message: "Campaign plan saved successfully" });
  } catch (error) {
    console.error("Error saving plan:", error);
    return c.json({ success: false, error: "Failed to save plan" }, 500);
  }
});

// Amazon Ads API Proxy Endpoints (for future integration)
// Note: These would require Amazon Ads API credentials
app.post("/make-server-a79fb251/amazon-ads/auth", async (c) => {
  try {
    // This endpoint would handle OAuth flow with Amazon Ads API
    // For now, return a placeholder response
    return c.json({ 
      success: true, 
      message: "Amazon Ads API integration endpoint - requires API credentials" 
    });
  } catch (error) {
    console.error("Error with Amazon Ads auth:", error);
    return c.json({ success: false, error: "Authentication failed" }, 500);
  }
});

app.get("/make-server-a79fb251/amazon-ads/campaigns", async (c) => {
  try {
    // This would fetch campaigns from Amazon Ads API
    // For now, return cached/local data
    const campaigns = await kv.getByPrefix("campaign:");
    return c.json({ success: true, data: campaigns });
  } catch (error) {
    console.error("Error fetching Amazon campaigns:", error);
    return c.json({ success: false, error: "Failed to fetch campaigns" }, 500);
  }
});

app.get("/make-server-a79fb251/amazon-ads/performance", async (c) => {
  try {
    // This would fetch performance data from Amazon Marketing Stream
    // For now, return placeholder data
    return c.json({ 
      success: true, 
      message: "Amazon Marketing Stream integration - requires API setup" 
    });
  } catch (error) {
    console.error("Error fetching performance data:", error);
    return c.json({ success: false, error: "Failed to fetch performance data" }, 500);
  }
});

// AMC Insights Endpoints
app.get("/make-server-a79fb251/amc/insights", async (c) => {
  try {
    const insights = await kv.getByPrefix("amc:");
    return c.json({ success: true, data: insights });
  } catch (error) {
    console.error("Error fetching AMC insights:", error);
    return c.json({ success: false, error: "Failed to fetch AMC insights" }, 500);
  }
});

// Analytics & Reporting
app.get("/make-server-a79fb251/analytics/dashboard", async (c) => {
  try {
    const dashboardData = await kv.get("dashboard:latest");
    return c.json({ success: true, data: dashboardData || {} });
  } catch (error) {
    console.error("Error fetching dashboard data:", error);
    return c.json({ success: false, error: "Failed to fetch dashboard data" }, 500);
  }
});

app.post("/make-server-a79fb251/analytics/report", async (c) => {
  try {
    const body = await c.req.json();
    const reportId = `report:${Date.now()}`;
    await kv.set(reportId, {
      ...body,
      generatedAt: new Date().toISOString(),
    });
    return c.json({ 
      success: true, 
      message: "Report generated successfully",
      reportId 
    });
  } catch (error) {
    console.error("Error generating report:", error);
    return c.json({ success: false, error: "Failed to generate report" }, 500);
  }
});

Deno.serve(app.fetch);