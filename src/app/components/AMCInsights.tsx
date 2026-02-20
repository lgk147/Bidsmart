import { useState } from 'react';
import {
  Database,
  Users,
  TrendingUp,
  Target,
  BarChart3,
  PieChart as PieChartIcon,
  Download,
  RefreshCw,
  Filter,
  Share2,
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
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
  PieChart,
  Pie,
  Cell,
  Treemap,
} from 'recharts';
import { toast } from 'sonner';

const audienceInsights = [
  { segment: 'High-Value Shoppers', size: 450000, conversion_rate: 8.5, avg_order: 125 },
  { segment: 'Frequent Browsers', size: 680000, conversion_rate: 3.2, avg_order: 85 },
  { segment: 'Seasonal Shoppers', size: 320000, conversion_rate: 5.1, avg_order: 95 },
  { segment: 'New Customers', size: 890000, conversion_rate: 2.8, avg_order: 70 },
  { segment: 'Cart Abandoners', size: 420000, conversion_rate: 12.3, avg_order: 110 },
];

const pathToConversion = [
  { touchpoint: '1st Touch', count: 1200000, conversion_rate: 1.2 },
  { touchpoint: '2nd Touch', count: 850000, conversion_rate: 2.8 },
  { touchpoint: '3rd Touch', count: 620000, conversion_rate: 4.5 },
  { touchpoint: '4th Touch', count: 380000, conversion_rate: 7.2 },
  { touchpoint: '5th+ Touch', count: 280000, conversion_rate: 11.5 },
];

const channelAttribution = [
  { channel: 'Amazon DSP', impressions: 4500000, clicks: 135000, conversions: 8100, attributed_sales: 1215000 },
  { channel: 'Sponsored Products', impressions: 2800000, clicks: 98000, conversions: 7350, attributed_sales: 1102500 },
  { channel: 'Sponsored Brands', impressions: 1900000, clicks: 76000, conversions: 4560, attributed_sales: 684000 },
  { channel: 'Sponsored Display', impressions: 1400000, clicks: 42000, conversions: 3360, attributed_sales: 504000 },
];

const crossDeviceJourney = [
  { device: 'Mobile', sessions: 2500000, conversions: 15000, revenue: 2250000 },
  { device: 'Desktop', sessions: 1800000, conversions: 21600, revenue: 3240000 },
  { device: 'Tablet', sessions: 900000, conversions: 8100, revenue: 1215000 },
  { device: 'Smart TV', sessions: 450000, conversions: 2700, revenue: 405000 },
];

const reachFrequency = [
  { frequency: '1', reach: 850000, conversions: 8500 },
  { frequency: '2-3', reach: 620000, conversions: 18600 },
  { frequency: '4-6', reach: 420000, conversions: 21000 },
  { frequency: '7-10', reach: 280000, conversions: 19600 },
  { frequency: '11+', reach: 150000, conversions: 12000 },
];

const demographicData = [
  { age_group: '18-24', size: 280000, spend: 245, color: '#4A6FA5' },
  { age_group: '25-34', size: 520000, spend: 385, color: '#6B8DC2' },
  { age_group: '35-44', size: 680000, spend: 425, color: '#F5D547' },
  { age_group: '45-54', size: 450000, spend: 395, color: '#E6C33C' },
  { age_group: '55+', size: 320000, spend: 340, color: '#B4373F' },
];

export default function AMCInsights() {
  const [selectedReport, setSelectedReport] = useState('audience');
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = () => {
    setRefreshing(true);
    toast.info('Refreshing AMC data...');
    setTimeout(() => {
      setRefreshing(false);
      toast.success('AMC data updated successfully!');
    }, 2000);
  };

  const handleExport = () => {
    toast.success('Report exported successfully!');
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">AMC Insights</h1>
          <p className="text-gray-600 mt-1">
            Amazon Marketing Cloud analytics and audience insights
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            className="gap-2"
            onClick={handleRefresh}
            disabled={refreshing}
          >
            <RefreshCw className={`h-4 w-4 ${refreshing ? 'animate-spin' : ''}`} />
            Refresh
          </Button>
          <Button variant="outline" className="gap-2" onClick={handleExport}>
            <Download className="h-4 w-4" />
            Export
          </Button>
          <Button className="gap-2 bg-[#4A6FA5] hover:bg-[#2C4A75]">
            <Share2 className="h-4 w-4" />
            Share Report
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Reach</p>
                <p className="text-2xl font-bold text-gray-900 mt-2">2.32M</p>
                <p className="text-sm text-green-600 mt-1">+18.2% vs last period</p>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Avg Frequency</p>
                <p className="text-2xl font-bold text-gray-900 mt-2">4.8</p>
                <p className="text-sm text-green-600 mt-1">+12.5% vs last period</p>
              </div>
              <div className="p-3 bg-purple-50 rounded-lg">
                <TrendingUp className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Audience Segments</p>
                <p className="text-2xl font-bold text-gray-900 mt-2">247</p>
                <p className="text-sm text-blue-600 mt-1">Active segments</p>
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
                <p className="text-sm font-medium text-gray-600">Cross-Device Rate</p>
                <p className="text-2xl font-bold text-gray-900 mt-2">68%</p>
                <p className="text-sm text-green-600 mt-1">+5.3% vs last period</p>
              </div>
              <div className="p-3 bg-orange-50 rounded-lg">
                <Database className="h-6 w-6 text-orange-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="audience" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="audience">Audience Insights</TabsTrigger>
          <TabsTrigger value="attribution">Attribution</TabsTrigger>
          <TabsTrigger value="journey">Customer Journey</TabsTrigger>
          <TabsTrigger value="reach">Reach & Frequency</TabsTrigger>
          <TabsTrigger value="demographics">Demographics</TabsTrigger>
        </TabsList>

        {/* Audience Insights */}
        <TabsContent value="audience" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Audience Segments</CardTitle>
              <CardDescription>
                Top performing audience segments and their characteristics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {audienceInsights.map((segment, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <h4 className="font-medium text-gray-900">{segment.segment}</h4>
                        <Badge variant="outline">{segment.size.toLocaleString()} users</Badge>
                      </div>
                    </div>
                    <div className="flex items-center gap-8 text-sm">
                      <div className="text-right">
                        <p className="text-gray-600">Conversion Rate</p>
                        <p className="font-medium text-green-600">{segment.conversion_rate}%</p>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-600">Avg Order Value</p>
                        <p className="font-medium text-gray-900">${segment.avg_order}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Segment Size Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={audienceInsights}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="segment" angle={-45} textAnchor="end" height={100} />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="size" fill="#4A6FA5" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Conversion Rate by Segment</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={audienceInsights}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="segment" angle={-45} textAnchor="end" height={100} />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="conversion_rate" fill="#B4373F" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Attribution */}
        <TabsContent value="attribution" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Multi-Touch Attribution</CardTitle>
              <CardDescription>Performance attribution across all touchpoints</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {channelAttribution.map((channel, index) => (
                  <div
                    key={index}
                    className="p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-medium text-gray-900">{channel.channel}</h4>
                      <Badge className="bg-green-100 text-green-800">
                        ${(channel.attributed_sales / 1000).toFixed(0)}K Revenue
                      </Badge>
                    </div>
                    <div className="grid grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Impressions</p>
                        <p className="font-medium text-gray-900">
                          {(channel.impressions / 1000000).toFixed(1)}M
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-600">Clicks</p>
                        <p className="font-medium text-gray-900">
                          {channel.clicks.toLocaleString()}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-600">Conversions</p>
                        <p className="font-medium text-gray-900">
                          {channel.conversions.toLocaleString()}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-600">CTR</p>
                        <p className="font-medium text-gray-900">
                          {((channel.clicks / channel.impressions) * 100).toFixed(2)}%
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Attribution Comparison</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={channelAttribution}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="channel" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="clicks" fill="#4A6FA5" name="Clicks" />
                    <Bar dataKey="conversions" fill="#F5D547" name="Conversions" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Customer Journey */}
        <TabsContent value="journey" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Path to Conversion</CardTitle>
                <CardDescription>Conversion rate by number of touchpoints</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={pathToConversion}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="touchpoint" />
                      <YAxis yAxisId="left" />
                      <YAxis yAxisId="right" orientation="right" />
                      <Tooltip />
                      <Legend />
                      <Line
                        yAxisId="left"
                        type="monotone"
                        dataKey="count"
                        stroke="#4A6FA5"
                        name="Users"
                        strokeWidth={2}
                      />
                      <Line
                        yAxisId="right"
                        type="monotone"
                        dataKey="conversion_rate"
                        stroke="#B4373F"
                        name="Conversion Rate %"
                        strokeWidth={2}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cross-Device Journey</CardTitle>
                <CardDescription>User engagement across devices</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={crossDeviceJourney}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="device" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="sessions" fill="#6B8DC2" name="Sessions" />
                      <Bar dataKey="conversions" fill="#F5D547" name="Conversions" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Cross-Device Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {crossDeviceJourney.map((device, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{device.device}</h4>
                    </div>
                    <div className="flex items-center gap-8 text-sm">
                      <div className="text-right">
                        <p className="text-gray-600">Sessions</p>
                        <p className="font-medium text-gray-900">
                          {(device.sessions / 1000000).toFixed(1)}M
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-600">Conversions</p>
                        <p className="font-medium text-gray-900">
                          {device.conversions.toLocaleString()}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-600">Revenue</p>
                        <p className="font-medium text-green-600">
                          ${(device.revenue / 1000).toFixed(0)}K
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-600">Conv. Rate</p>
                        <p className="font-medium text-gray-900">
                          {((device.conversions / device.sessions) * 100).toFixed(2)}%
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Reach & Frequency */}
        <TabsContent value="reach" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Reach & Frequency Analysis</CardTitle>
              <CardDescription>Impact of ad frequency on conversion performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={reachFrequency}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="frequency" />
                    <YAxis yAxisId="left" />
                    <YAxis yAxisId="right" orientation="right" />
                    <Tooltip />
                    <Legend />
                    <Bar yAxisId="left" dataKey="reach" fill="#4A6FA5" name="Reach" />
                    <Bar yAxisId="right" dataKey="conversions" fill="#F5D547" name="Conversions" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Frequency Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {reachFrequency.map((item, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">{item.frequency} exposures</span>
                        <span className="text-sm text-gray-600">
                          {item.reach.toLocaleString()} users
                        </span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-blue-500"
                          style={{
                            width: `${(item.reach / reachFrequency[0].reach) * 100}%`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Optimal Frequency</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-sm font-medium text-green-900">Recommendation</p>
                    <p className="text-2xl font-bold text-green-700 mt-2">4-6 exposures</p>
                    <p className="text-sm text-green-600 mt-1">
                      Optimal frequency for maximum conversion efficiency
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-600">Peak Conversions</p>
                      <p className="text-xl font-bold text-gray-900">21,000</p>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-600">Conv. Rate</p>
                      <p className="text-xl font-bold text-green-600">5.0%</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Demographics */}
        <TabsContent value="demographics" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Demographic Analysis</CardTitle>
              <CardDescription>Audience breakdown by age group</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={demographicData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ age_group, size }) =>
                        `${age_group}: ${(size / 1000).toFixed(0)}K`
                      }
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="size"
                    >
                      {demographicData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Average Spend by Age Group</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {demographicData.map((demo, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-4 h-4 rounded"
                        style={{ backgroundColor: demo.color }}
                      />
                      <div>
                        <p className="font-medium text-gray-900">{demo.age_group}</p>
                        <p className="text-sm text-gray-600">
                          {demo.size.toLocaleString()} users
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600">Avg Spend</p>
                      <p className="text-lg font-bold text-gray-900">${demo.spend}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
