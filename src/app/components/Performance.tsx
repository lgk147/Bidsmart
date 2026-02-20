import { useState } from 'react';
import {
  Activity,
  TrendingUp,
  DollarSign,
  MousePointerClick,
  ShoppingCart,
  Eye,
  Download,
  Calendar,
  Filter,
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
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
  ComposedChart,
} from 'recharts';
import { toast } from 'sonner';

const overallMetrics = [
  { metric: 'Total Spend', value: '$124,582', change: '+12.5%', trend: 'up' },
  { metric: 'Impressions', value: '10.6M', change: '+15.8%', trend: 'up' },
  { metric: 'Clicks', value: '351K', change: '+12.3%', trend: 'up' },
  { metric: 'Conversions', value: '23,410', change: '+8.7%', trend: 'up' },
  { metric: 'ROAS', value: '4.5x', change: '+18.2%', trend: 'up' },
  { metric: 'CPA', value: '$5.32', change: '-6.4%', trend: 'up' },
];

const dailyPerformance = [
  { date: '2/14', spend: 4200, impressions: 425000, clicks: 12750, conversions: 765, revenue: 22950 },
  { date: '2/15', spend: 4450, impressions: 445000, clicks: 13350, conversions: 801, revenue: 24030 },
  { date: '2/16', spend: 3980, impressions: 398000, clicks: 11940, conversions: 717, revenue: 21510 },
  { date: '2/17', spend: 4680, impressions: 468000, clicks: 14040, conversions: 842, revenue: 25260 },
  { date: '2/18', spend: 4320, impressions: 432000, clicks: 12960, conversions: 778, revenue: 23340 },
  { date: '2/19', spend: 4890, impressions: 489000, clicks: 14670, conversions: 880, revenue: 26400 },
  { date: '2/20', spend: 5060, impressions: 506000, clicks: 15180, conversions: 911, revenue: 27330 },
];

const channelPerformance = [
  { channel: 'Amazon DSP', spend: 42500, impressions: 4500000, conversions: 8100, roas: 5.2 },
  { channel: 'Sponsored Products', spend: 32150, impressions: 2800000, conversions: 7350, roas: 4.8 },
  { channel: 'Sponsored Brands', spend: 28940, impressions: 1900000, conversions: 4560, roas: 4.1 },
  { channel: 'Sponsored Display', spend: 18212, impressions: 1400000, conversions: 3360, roas: 6.1 },
  { channel: 'Sponsored Brands Video', spend: 2780, impressions: 580000, conversions: 1040, roas: 3.8 },
];

export default function Performance() {
  const [timeRange, setTimeRange] = useState('7d');
  const [selectedMetric, setSelectedMetric] = useState('all');

  const handleExport = () => {
    toast.success('Performance report exported successfully!');
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Performance Analytics</h1>
          <p className="text-gray-600 mt-1">
            Comprehensive performance metrics and campaign analytics
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 90 days</SelectItem>
              <SelectItem value="12m">Last 12 months</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="gap-2" onClick={handleExport}>
            <Download className="h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      {/* Key Performance Indicators */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {overallMetrics.map((metric, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-600">{metric.metric}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-2">{metric.value}</p>
                  <div className="flex items-center mt-2">
                    <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
                    <span className="text-sm font-medium text-green-600">{metric.change}</span>
                    <span className="text-sm text-gray-500 ml-1">vs last period</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Daily Trends */}
      <Card>
        <CardHeader>
          <CardTitle>Daily Performance Trends</CardTitle>
          <CardDescription>Track key metrics over time</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="overview">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="spend">Spend</TabsTrigger>
              <TabsTrigger value="traffic">Traffic</TabsTrigger>
              <TabsTrigger value="conversions">Conversions</TabsTrigger>
              <TabsTrigger value="revenue">Revenue</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={dailyPerformance}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Legend />
                  <Bar yAxisId="left" dataKey="spend" fill="#4A6FA5" name="Spend ($)" />
                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="conversions"
                    stroke="#F5D547"
                    strokeWidth={2}
                    name="Conversions"
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </TabsContent>

            <TabsContent value="spend" className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={dailyPerformance}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="spend"
                    stroke="#4A6FA5"
                    fill="#4A6FA5"
                    fillOpacity={0.3}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </TabsContent>

            <TabsContent value="traffic" className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={dailyPerformance}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Legend />
                  <Bar yAxisId="left" dataKey="impressions" fill="#6B8DC2" name="Impressions" />
                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="clicks"
                    stroke="#B4373F"
                    strokeWidth={2}
                    name="Clicks"
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </TabsContent>

            <TabsContent value="conversions" className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={dailyPerformance}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="conversions" fill="#F5D547" />
                </BarChart>
              </ResponsiveContainer>
            </TabsContent>

            <TabsContent value="revenue" className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={dailyPerformance}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="revenue"
                    stroke="#10B981"
                    fill="#10B981"
                    fillOpacity={0.3}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Channel Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Performance by Channel</CardTitle>
            <CardDescription>Compare metrics across ad products</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={channelPerformance} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="channel" type="category" width={150} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="spend" fill="#4A6FA5" name="Spend ($)" />
                  <Bar dataKey="conversions" fill="#F5D547" name="Conversions" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>ROAS by Channel</CardTitle>
            <CardDescription>Return on ad spend comparison</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={channelPerformance}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="channel" angle={-45} textAnchor="end" height={100} />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="roas" fill="#10B981" name="ROAS" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Channel Metrics */}
      <Card>
        <CardHeader>
          <CardTitle>Detailed Channel Performance</CardTitle>
          <CardDescription>Comprehensive metrics for each advertising channel</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {channelPerformance.map((channel, index) => (
              <div
                key={index}
                className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-medium text-gray-900 text-lg">{channel.channel}</h4>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">ROAS:</span>
                    <span className="text-lg font-bold text-green-600">
                      {channel.roas.toFixed(1)}x
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Spend</p>
                    <p className="text-xl font-bold text-gray-900">
                      ${(channel.spend / 1000).toFixed(1)}K
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Impressions</p>
                    <p className="text-xl font-bold text-gray-900">
                      {(channel.impressions / 1000000).toFixed(1)}M
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Conversions</p>
                    <p className="text-xl font-bold text-gray-900">
                      {channel.conversions.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">CPA</p>
                    <p className="text-xl font-bold text-gray-900">
                      ${(channel.spend / channel.conversions).toFixed(2)}
                    </p>
                  </div>
                </div>
                {/* Progress bar */}
                <div className="mt-3">
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-500"
                      style={{
                        width: `${(channel.spend / Math.max(...channelPerformance.map((c) => c.spend))) * 100}%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Performance Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-blue-500 rounded-lg">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-sm font-medium text-blue-900">Best Performing Channel</p>
                <p className="text-2xl font-bold text-blue-900 mt-1">Sponsored Display</p>
                <p className="text-sm text-blue-700">6.1x ROAS</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-green-500 rounded-lg">
                <DollarSign className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-sm font-medium text-green-900">Highest Revenue</p>
                <p className="text-2xl font-bold text-green-900 mt-1">$222.2K</p>
                <p className="text-sm text-green-700">From Amazon DSP</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-purple-500 rounded-lg">
                <Activity className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-sm font-medium text-purple-900">Overall Health</p>
                <p className="text-2xl font-bold text-purple-900 mt-1">Excellent</p>
                <p className="text-sm text-purple-700">All KPIs trending up</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
