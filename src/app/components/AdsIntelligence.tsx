import { useState } from 'react';
import {
  BarChart3,
  TrendingUp,
  Eye,
  MousePointerClick,
  DollarSign,
  Target,
  Zap,
  AlertTriangle,
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from 'recharts';

const adPerformance = [
  { date: 'Week 1', impressions: 450000, clicks: 13500, spend: 4280, conversions: 680 },
  { date: 'Week 2', impressions: 520000, clicks: 15600, spend: 4950, conversions: 780 },
  { date: 'Week 3', impressions: 480000, clicks: 14400, spend: 4560, conversions: 720 },
  { date: 'Week 4', impressions: 580000, clicks: 17400, spend: 5510, conversions: 870 },
];

const campaignInsights = [
  {
    campaign: 'Prime Day DSP Campaign',
    type: 'DSP',
    impressions: 1250000,
    ctr: 3.0,
    cpc: 3.24,
    conversions: 1125,
    roas: 5.2,
    status: 'Performing',
  },
  {
    campaign: 'Brand Defense - SP',
    type: 'SP',
    impressions: 890000,
    ctr: 2.8,
    cpc: 2.58,
    conversions: 892,
    roas: 4.8,
    status: 'Performing',
  },
  {
    campaign: 'New Product Launch - SBV',
    type: 'SBV',
    impressions: 720000,
    ctr: 2.5,
    cpc: 2.93,
    conversions: 685,
    roas: 3.9,
    status: 'Needs Attention',
  },
  {
    campaign: 'Retargeting - SD',
    type: 'SD',
    impressions: 540000,
    ctr: 4.2,
    cpc: 2.50,
    conversions: 876,
    roas: 6.1,
    status: 'Performing',
  },
];

const keywordPerformance = [
  { keyword: 'wireless headphones', impressions: 125000, clicks: 3750, ctr: 3.0, acos: 18, conversions: 420 },
  { keyword: 'bluetooth speaker', impressions: 98000, clicks: 2940, ctr: 3.0, acos: 22, conversions: 310 },
  { keyword: 'smart watch', impressions: 142000, clicks: 4260, ctr: 3.0, acos: 16, conversions: 485 },
  { keyword: 'fitness tracker', impressions: 87000, clicks: 2610, ctr: 3.0, acos: 20, conversions: 268 },
  { keyword: 'noise cancelling', impressions: 105000, clicks: 3150, ctr: 3.0, acos: 15, conversions: 380 },
];

const adProductComparison = [
  { product: 'Amazon DSP', impressions: 4500000, clicks: 135000, conversions: 8100, spend: 42500 },
  { product: 'Sponsored Products', impressions: 2800000, clicks: 98000, conversions: 7350, spend: 32150 },
  { product: 'Sponsored Brands', impressions: 1900000, clicks: 76000, conversions: 4560, spend: 28940 },
  { product: 'Sponsored Display', impressions: 1400000, clicks: 42000, conversions: 3360, spend: 18212 },
];

export default function AdsIntelligence() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Ads Intelligence</h1>
          <p className="text-gray-600 mt-1">
            Amazon advertising performance analytics and optimization insights
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="gap-2">
            <Zap className="h-4 w-4" />
            Auto-Optimize
          </Button>
          <Button className="gap-2 bg-[#4A6FA5] hover:bg-[#2C4A75]">
            <BarChart3 className="h-4 w-4" />
            Generate Report
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Impressions</p>
                <p className="text-2xl font-bold text-gray-900 mt-2">10.6M</p>
                <p className="text-sm text-green-600 mt-1">+15.8% vs last period</p>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg">
                <Eye className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Clicks</p>
                <p className="text-2xl font-bold text-gray-900 mt-2">351K</p>
                <p className="text-sm text-green-600 mt-1">+12.3% vs last period</p>
              </div>
              <div className="p-3 bg-purple-50 rounded-lg">
                <MousePointerClick className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Avg CTR</p>
                <p className="text-2xl font-bold text-gray-900 mt-2">3.3%</p>
                <p className="text-sm text-green-600 mt-1">+8.5% vs last period</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg">
                <Target className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Ad Spend</p>
                <p className="text-2xl font-bold text-gray-900 mt-2">$121.8K</p>
                <p className="text-sm text-green-600 mt-1">ROAS: 4.5x</p>
              </div>
              <div className="p-3 bg-orange-50 rounded-lg">
                <DollarSign className="h-6 w-6 text-orange-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Trends */}
      <Card>
        <CardHeader>
          <CardTitle>Advertising Performance Trends</CardTitle>
          <CardDescription>Track key advertising metrics over time</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="impressions">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="impressions">Impressions</TabsTrigger>
              <TabsTrigger value="clicks">Clicks</TabsTrigger>
              <TabsTrigger value="spend">Spend</TabsTrigger>
              <TabsTrigger value="conversions">Conversions</TabsTrigger>
            </TabsList>
            <TabsContent value="impressions" className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={adPerformance}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Area type="monotone" dataKey="impressions" stroke="#4A6FA5" fill="#4A6FA5" fillOpacity={0.3} />
                </AreaChart>
              </ResponsiveContainer>
            </TabsContent>
            <TabsContent value="clicks" className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={adPerformance}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Area type="monotone" dataKey="clicks" stroke="#F5D547" fill="#F5D547" fillOpacity={0.3} />
                </AreaChart>
              </ResponsiveContainer>
            </TabsContent>
            <TabsContent value="spend" className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={adPerformance}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="spend" fill="#B4373F" />
                </BarChart>
              </ResponsiveContainer>
            </TabsContent>
            <TabsContent value="conversions" className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={adPerformance}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="conversions" fill="#6B8DC2" />
                </BarChart>
              </ResponsiveContainer>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Ad Product Comparison */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Performance by Ad Product</CardTitle>
            <CardDescription>Compare metrics across different Amazon ad products</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={adProductComparison}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="product" angle={-45} textAnchor="end" height={100} />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Legend />
                  <Bar yAxisId="left" dataKey="impressions" fill="#4A6FA5" name="Impressions" />
                  <Bar yAxisId="right" dataKey="conversions" fill="#F5D547" name="Conversions" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Spend by Ad Product</CardTitle>
            <CardDescription>Budget allocation across ad products</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={adProductComparison} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="product" type="category" width={150} />
                  <Tooltip />
                  <Bar dataKey="spend" fill="#B4373F" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Campaign Performance Table */}
      <Card>
        <CardHeader>
          <CardTitle>Campaign Performance Overview</CardTitle>
          <CardDescription>Detailed metrics for all active campaigns</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Campaign</TableHead>
                <TableHead>Type</TableHead>
                <TableHead className="text-right">Impressions</TableHead>
                <TableHead className="text-right">CTR</TableHead>
                <TableHead className="text-right">CPC</TableHead>
                <TableHead className="text-right">Conversions</TableHead>
                <TableHead className="text-right">ROAS</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {campaignInsights.map((campaign, index) => (
                <TableRow key={index} className="hover:bg-gray-50">
                  <TableCell className="font-medium">{campaign.campaign}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{campaign.type}</Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    {(campaign.impressions / 1000000).toFixed(2)}M
                  </TableCell>
                  <TableCell className="text-right">{campaign.ctr.toFixed(1)}%</TableCell>
                  <TableCell className="text-right">${campaign.cpc.toFixed(2)}</TableCell>
                  <TableCell className="text-right">{campaign.conversions.toLocaleString()}</TableCell>
                  <TableCell className="text-right font-medium text-green-600">
                    {campaign.roas.toFixed(1)}x
                  </TableCell>
                  <TableCell>
                    {campaign.status === 'Performing' ? (
                      <Badge className="bg-green-100 text-green-800">Performing</Badge>
                    ) : (
                      <Badge className="bg-yellow-100 text-yellow-800">Needs Attention</Badge>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Keyword Performance */}
      <Card>
        <CardHeader>
          <CardTitle>Top Keyword Performance</CardTitle>
          <CardDescription>Best performing keywords by conversions and efficiency</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Keyword</TableHead>
                <TableHead className="text-right">Impressions</TableHead>
                <TableHead className="text-right">Clicks</TableHead>
                <TableHead className="text-right">CTR</TableHead>
                <TableHead className="text-right">ACoS</TableHead>
                <TableHead className="text-right">Conversions</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {keywordPerformance.map((keyword, index) => (
                <TableRow key={index} className="hover:bg-gray-50">
                  <TableCell className="font-medium">{keyword.keyword}</TableCell>
                  <TableCell className="text-right">{keyword.impressions.toLocaleString()}</TableCell>
                  <TableCell className="text-right">{keyword.clicks.toLocaleString()}</TableCell>
                  <TableCell className="text-right">{keyword.ctr.toFixed(1)}%</TableCell>
                  <TableCell className="text-right">
                    <span className={keyword.acos < 20 ? 'text-green-600 font-medium' : ''}>
                      {keyword.acos}%
                    </span>
                  </TableCell>
                  <TableCell className="text-right font-medium">{keyword.conversions}</TableCell>
                  <TableCell>
                    {keyword.acos < 20 ? (
                      <Badge className="bg-green-100 text-green-800">Efficient</Badge>
                    ) : (
                      <Badge className="bg-yellow-100 text-yellow-800">Optimize</Badge>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Recommendations */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="bg-green-50 border-green-200">
          <CardContent className="pt-6">
            <div className="flex gap-3">
              <div className="p-2 bg-green-100 rounded-lg h-fit">
                <TrendingUp className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <h4 className="font-medium text-green-900 mb-2">Top Performer</h4>
                <p className="text-sm text-green-700">
                  "Retargeting - SD" campaign is exceeding ROAS target by 36%. Consider increasing
                  budget allocation.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-yellow-50 border-yellow-200">
          <CardContent className="pt-6">
            <div className="flex gap-3">
              <div className="p-2 bg-yellow-100 rounded-lg h-fit">
                <AlertTriangle className="h-5 w-5 text-yellow-600" />
              </div>
              <div>
                <h4 className="font-medium text-yellow-900 mb-2">Needs Attention</h4>
                <p className="text-sm text-yellow-700">
                  "New Product Launch - SBV" has declining CTR. Review creative assets and targeting
                  parameters.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="pt-6">
            <div className="flex gap-3">
              <div className="p-2 bg-blue-100 rounded-lg h-fit">
                <Zap className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h4 className="font-medium text-blue-900 mb-2">Optimization Opportunity</h4>
                <p className="text-sm text-blue-700">
                  Increase bids for "smart watch" keyword by 15% to capture more high-intent traffic.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
