# Bidsmart API Documentation

Complete API reference for the Bidsmart Amazon Advertising Full-Funnel Platform.

---

## 📚 Table of Contents

1. [Authentication](#authentication)
2. [Campaign Management](#campaign-management)
3. [Media Briefs](#media-briefs)
4. [Audience Targeting](#audience-targeting)
5. [Bidding Strategies](#bidding-strategies)
6. [Planning & Budgeting](#planning--budgeting)
7. [AMC Insights](#amc-insights)
8. [Analytics & Reporting](#analytics--reporting)
9. [Amazon Ads Integration](#amazon-ads-integration)
10. [Error Handling](#error-handling)

---

## 🔐 Authentication

All API requests require authentication via Bearer token.

### Headers

```http
Authorization: Bearer {YOUR_API_TOKEN}
Content-Type: application/json
```

### Get Access Token (Future Implementation)

```http
POST /make-server-a79fb251/auth/login
```

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "expiresIn": 3600
}
```

---

## 🎯 Campaign Management

### Get All Campaigns

```http
GET /make-server-a79fb251/campaigns
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "campaign:1708502400000",
      "name": "Prime Day DSP Campaign",
      "type": "DSP",
      "status": "Active",
      "budget": 50000,
      "spend": 45280,
      "impressions": 1250000,
      "clicks": 18750,
      "conversions": 1125,
      "roas": 5.2,
      "startDate": "2024-06-01",
      "endDate": "2024-07-15",
      "createdAt": "2024-02-20T10:30:00Z",
      "updatedAt": "2024-02-20T15:45:00Z"
    }
  ]
}
```

### Create Campaign

```http
POST /make-server-a79fb251/campaigns
```

**Request Body:**
```json
{
  "name": "Summer Sale Campaign",
  "type": "Sponsored Products",
  "objective": "conversion",
  "budget": 30000,
  "dailyBudget": 1000,
  "startDate": "2024-07-01",
  "endDate": "2024-08-31",
  "targeting": {
    "keywords": ["wireless headphones", "bluetooth earbuds"],
    "ageRange": "25-44",
    "primeMembers": true
  },
  "bidStrategy": "dynamic"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Campaign created successfully",
  "campaignId": "campaign:1708502500000"
}
```

### Update Campaign

```http
PUT /make-server-a79fb251/campaigns/:id
```

**Request Body:**
```json
{
  "status": "Paused",
  "budget": 35000
}
```

**Response:**
```json
{
  "success": true,
  "message": "Campaign updated successfully"
}
```

### Delete Campaign

```http
DELETE /make-server-a79fb251/campaigns/:id
```

**Response:**
```json
{
  "success": true,
  "message": "Campaign deleted successfully"
}
```

---

## 📄 Media Briefs

### Get All Media Briefs

```http
GET /make-server-a79fb251/media-briefs
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "brief:1708502600000",
      "name": "Q3 Product Launch Brief",
      "campaignObjective": "awareness",
      "brand": "TechBrand",
      "targetAudience": "Tech enthusiasts, 25-45",
      "adProducts": ["DSP", "Sponsored Brands Video"],
      "budget": 100000,
      "duration": 90,
      "keyMessages": {
        "headline": "Revolutionary New Product",
        "tagline": "Innovation Meets Performance",
        "cta": "Shop Now"
      },
      "creativeAssets": [
        {
          "type": "video",
          "name": "product_demo.mp4",
          "size": "2.4 MB"
        }
      ],
      "createdAt": "2024-02-20T10:30:00Z"
    }
  ]
}
```

### Create Media Brief

```http
POST /make-server-a79fb251/media-briefs
```

**Request Body:**
```json
{
  "name": "Holiday Campaign Brief",
  "campaignObjective": "conversion",
  "brand": "TechBrand",
  "targetAudience": "Holiday shoppers, all ages",
  "adProducts": ["Sponsored Products", "Sponsored Display"],
  "budget": 75000,
  "startDate": "2024-11-01",
  "endDate": "2024-12-31",
  "keyMessages": {
    "headline": "Perfect Holiday Gifts",
    "tagline": "Save Big This Season",
    "bodyCopy": "Discover amazing deals on tech gifts...",
    "cta": "Shop Deals"
  },
  "targeting": {
    "demographics": {
      "ageRange": "all",
      "gender": "all"
    },
    "behavioral": {
      "primeMembers": true,
      "purchaseFrequency": "high"
    }
  }
}
```

**Response:**
```json
{
  "success": true,
  "message": "Media brief created successfully",
  "briefId": "brief:1708502700000"
}
```

---

## 👥 Audience Targeting

### Get All Audiences

```http
GET /make-server-a79fb251/audiences
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "audience:1708502800000",
      "name": "High-Value Prime Members",
      "type": "Behavioral",
      "size": 450000,
      "criteria": {
        "demographics": {
          "ageRange": "30-50",
          "householdIncome": "high"
        },
        "behavioral": {
          "primeMembers": true,
          "purchaseFrequency": "high",
          "avgOrderValue": ">$100"
        },
        "interests": ["Electronics", "Smart Home", "Tech Gadgets"]
      },
      "performance": {
        "ctr": 4.2,
        "conversions": 8500,
        "roas": 5.8
      },
      "status": "Active",
      "createdAt": "2024-02-20T10:30:00Z"
    }
  ]
}
```

### Create Audience

```http
POST /make-server-a79fb251/audiences
```

**Request Body:**
```json
{
  "name": "Tech Enthusiast Lookalike",
  "type": "Lookalike",
  "seedAudience": "audience:1708502800000",
  "size": 750000,
  "criteria": {
    "demographics": {
      "ageRange": "25-45",
      "gender": "all"
    },
    "behavioral": {
      "interests": ["Technology", "Gadgets", "Innovation"]
    }
  }
}
```

**Response:**
```json
{
  "success": true,
  "message": "Audience segment created successfully",
  "audienceId": "audience:1708502900000"
}
```

---

## 💰 Bidding Strategies

### Get All Bidding Strategies

```http
GET /make-server-a79fb251/bidding-strategies
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "bidding:1708503000000",
      "name": "High ROAS Strategy",
      "type": "target-roas",
      "targetRoas": 4.5,
      "maxBid": 5.0,
      "minBid": 0.5,
      "bidAdjustments": [
        {
          "segment": "Mobile Devices",
          "adjustment": 15
        },
        {
          "segment": "Prime Members",
          "adjustment": 25
        }
      ],
      "autoBidding": true,
      "optimizationGoal": "maximize-roas",
      "createdAt": "2024-02-20T10:30:00Z"
    }
  ]
}
```

### Save Bidding Strategy

```http
POST /make-server-a79fb251/bidding-strategies
```

**Request Body:**
```json
{
  "name": "Aggressive Conversion Strategy",
  "type": "maximize-conversions",
  "maxBid": 8.0,
  "minBid": 1.0,
  "autoBidding": true,
  "optimizationGoal": "maximize-conversions",
  "bidAdjustments": [
    {
      "segment": "High-Income Zip Codes",
      "adjustment": 30
    },
    {
      "segment": "Repeat Customers",
      "adjustment": 35
    }
  ]
}
```

**Response:**
```json
{
  "success": true,
  "message": "Bidding strategy saved successfully",
  "strategyId": "bidding:1708503100000"
}
```

---

## 📅 Planning & Budgeting

### Get All Plans

```http
GET /make-server-a79fb251/plans
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "plan:1708503200000",
      "name": "Q3 Full Funnel Plan",
      "objective": "full-funnel",
      "totalBudget": 150000,
      "duration": 90,
      "startDate": "2024-07-01",
      "endDate": "2024-09-30",
      "funnelAllocation": {
        "awareness": {
          "percentage": 40,
          "budget": 60000,
          "channels": ["DSP Display", "Prime Video"]
        },
        "consideration": {
          "percentage": 35,
          "budget": 52500,
          "channels": ["Sponsored Brands", "DSP Video"]
        },
        "conversion": {
          "percentage": 25,
          "budget": 37500,
          "channels": ["Sponsored Products", "Sponsored Display"]
        }
      },
      "kpis": {
        "targetReach": 1000000,
        "targetRoas": 4.0,
        "targetConversions": 5000
      },
      "createdAt": "2024-02-20T10:30:00Z"
    }
  ]
}
```

### Save Plan

```http
POST /make-server-a79fb251/plans
```

**Request Body:**
```json
{
  "name": "Holiday Season Plan",
  "objective": "conversion",
  "totalBudget": 200000,
  "duration": 60,
  "startDate": "2024-11-01",
  "endDate": "2024-12-31",
  "funnelAllocation": {
    "awareness": {
      "percentage": 30,
      "budget": 60000
    },
    "consideration": {
      "percentage": 30,
      "budget": 60000
    },
    "conversion": {
      "percentage": 40,
      "budget": 80000
    }
  },
  "kpis": {
    "targetReach": 1500000,
    "targetRoas": 5.0,
    "targetConversions": 8000
  }
}
```

**Response:**
```json
{
  "success": true,
  "message": "Campaign plan saved successfully",
  "planId": "plan:1708503300000"
}
```

---

## 🧠 AMC Insights

### Get AMC Insights

```http
GET /make-server-a79fb251/amc/insights
```

**Query Parameters:**
- `type` (optional): `audience`, `attribution`, `journey`, `reach-frequency`
- `startDate` (optional): ISO 8601 date
- `endDate` (optional): ISO 8601 date

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "type": "audience",
      "insights": {
        "totalReach": 2320000,
        "avgFrequency": 4.8,
        "segments": [
          {
            "name": "High-Value Shoppers",
            "size": 450000,
            "conversionRate": 8.5,
            "avgOrderValue": 125
          }
        ]
      },
      "generatedAt": "2024-02-20T10:30:00Z"
    }
  ]
}
```

---

## 📊 Analytics & Reporting

### Get Dashboard Data

```http
GET /make-server-a79fb251/analytics/dashboard
```

**Query Parameters:**
- `timeRange`: `7d`, `30d`, `90d`, `12m`

**Response:**
```json
{
  "success": true,
  "data": {
    "metrics": {
      "totalSpend": 124582,
      "impressions": 10600000,
      "clicks": 351000,
      "conversions": 23410,
      "roas": 4.5,
      "cpa": 5.32
    },
    "trends": [
      {
        "date": "2024-02-14",
        "spend": 4200,
        "impressions": 425000,
        "clicks": 12750,
        "conversions": 765
      }
    ],
    "topCampaigns": [
      {
        "name": "Prime Day DSP Campaign",
        "spend": 45280,
        "roas": 5.2
      }
    ]
  }
}
```

### Generate Report

```http
POST /make-server-a79fb251/analytics/report
```

**Request Body:**
```json
{
  "reportType": "campaign-performance",
  "dateRange": {
    "startDate": "2024-01-01",
    "endDate": "2024-02-20"
  },
  "metrics": [
    "impressions",
    "clicks",
    "conversions",
    "spend",
    "roas"
  ],
  "groupBy": "campaign",
  "format": "json"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Report generated successfully",
  "reportId": "report:1708503400000",
  "downloadUrl": "/reports/report:1708503400000.json"
}
```

---

## 🔗 Amazon Ads Integration

### Authenticate with Amazon Ads API

```http
POST /make-server-a79fb251/amazon-ads/auth
```

**Request Body:**
```json
{
  "clientId": "amzn1.application-oa2-client.xxxxx",
  "clientSecret": "xxxxx",
  "refreshToken": "Atzr|xxxxx",
  "profileId": "xxxxx"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Amazon Ads API integration endpoint - requires API credentials"
}
```

### Get Amazon Campaigns

```http
GET /make-server-a79fb251/amazon-ads/campaigns
```

**Query Parameters:**
- `campaignType`: `sponsoredProducts`, `sponsoredBrands`, `sponsoredDisplay`, `dsp`
- `status`: `enabled`, `paused`, `archived`

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "campaignId": "123456789",
      "name": "Brand Campaign",
      "campaignType": "sponsoredProducts",
      "status": "enabled",
      "budget": 1000,
      "targetingType": "auto"
    }
  ]
}
```

### Get Performance Data

```http
GET /make-server-a79fb251/amazon-ads/performance
```

**Query Parameters:**
- `campaignIds`: Comma-separated campaign IDs
- `startDate`: ISO 8601 date
- `endDate`: ISO 8601 date
- `metrics`: Comma-separated list (impressions, clicks, cost, purchases)

**Response:**
```json
{
  "success": true,
  "message": "Amazon Marketing Stream integration - requires API setup"
}
```

---

## ❌ Error Handling

### Error Response Format

All errors follow this format:

```json
{
  "success": false,
  "error": "Error message description",
  "code": "ERROR_CODE",
  "details": {
    "field": "Additional error details"
  }
}
```

### HTTP Status Codes

- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `429` - Too Many Requests
- `500` - Internal Server Error
- `503` - Service Unavailable

### Common Error Codes

| Code | Description |
|------|-------------|
| `INVALID_REQUEST` | Request body validation failed |
| `UNAUTHORIZED` | Missing or invalid authentication |
| `NOT_FOUND` | Resource not found |
| `CAMPAIGN_EXISTS` | Campaign with this name already exists |
| `BUDGET_EXCEEDED` | Budget limit exceeded |
| `API_RATE_LIMIT` | Too many requests |
| `AMAZON_API_ERROR` | Error from Amazon Ads API |

### Example Error Response

```json
{
  "success": false,
  "error": "Campaign validation failed",
  "code": "INVALID_REQUEST",
  "details": {
    "budget": "Budget must be greater than 0",
    "startDate": "Start date must be in the future"
  }
}
```

---

## 🔄 Rate Limiting

API requests are rate-limited to:
- **100 requests per minute** per user
- **1000 requests per hour** per user

Rate limit headers:
```http
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1708503600
```

When rate limit is exceeded:
```json
{
  "success": false,
  "error": "Rate limit exceeded",
  "code": "API_RATE_LIMIT",
  "retryAfter": 60
}
```

---

## 📝 Pagination

For endpoints returning multiple results:

**Query Parameters:**
- `page`: Page number (default: 1)
- `limit`: Results per page (default: 20, max: 100)

**Response:**
```json
{
  "success": true,
  "data": [...],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 150,
    "totalPages": 8
  }
}
```

---

## 🔍 Filtering & Sorting

### Query Parameters

- `sort`: Field to sort by (prefix with `-` for descending)
- `filter[field]`: Filter by field value

**Example:**
```http
GET /make-server-a79fb251/campaigns?sort=-spend&filter[status]=Active&limit=10
```

---

## 📚 Additional Resources

- [Amazon Ads API Documentation](https://advertising.amazon.com/API/docs/en-us)
- [Amazon DSP API Guide](https://advertising.amazon.com/API/docs/en-us/dsp-api)
- [Amazon Marketing Cloud](https://advertising.amazon.com/API/docs/en-us/amc-api)
- [Amazon Marketing Stream](https://advertising.amazon.com/API/docs/en-us/guides/amazon-marketing-stream/overview)

---

**Last Updated**: February 20, 2024  
**API Version**: 1.0.0
