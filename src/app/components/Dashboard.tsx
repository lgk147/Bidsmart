import { useState, useEffect } from 'react';
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  Users,
  MousePointerClick,
  ShoppingCart,
  Eye,
  BarChart3,
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
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
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import { cn } from './ui/utils';

const metrics = [
  {
    title: 'Total Ad Spend',
    value: '$124,582',
    change: '+12.5%',
    trend: 'up',
    icon: DollarSign,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    title: 'Impressions',
    value: '2.4M',
    change: '+18.2%',
    trend: 'up',
    icon: Eye,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
  {
    title: 'Clicks',
    value: '48,592',
    change: '+8.3%',
    trend: 'up',
    icon: MousePointerClick,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
  },
  {
    title: 'Conversions',
    value: '3,247',
    change: '-2.4%',
    trend: 'down',
    icon: ShoppingCart,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
  },
  {
    title: 'ROAS',
    value: '4.2x',
    change: '+15.6%',
    trend: 'up',
    icon: TrendingUp,
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
  },
  {
    title: 'Reach',
    value: '1.8M',
    change: '+22.1%',
    trend: 'up',
    icon: Users,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50',
  },
];

const performanceData = [
  { date: 'Jan', spend: 18000, conversions: 520, roas: 3.8, impressions: 320000 },
  { date: 'Feb', spend: 22000, conversions: 680, roas: 4.1, impressions: 380000 },
  { date: 'Mar', spend: 19500, conversions: 590, roas: 3.9, impressions: 340000 },
  { date: 'Apr', spend: 25000, conversions: 780, roas: 4.3, impressions: 420000 },
  { date: 'May', spend: 21000, conversions: 650, roas: 4.0, impressions: 360000 },
  { date: 'Jun', spend: 27000, conversions: 850, roas: 4.5, impressions: 460000 },
];

const campaignTypeData = [
  { name: 'Sponsored Products', value: 45, color: '#4A6FA5' },
  { name: 'Sponsored Brands', value: 25, color: '#F5D547' },
  { name: 'Sponsored Display', value: 15, color: '#B4373F' },
  { name: 'DSP', value: 15, color: '#6B8DC2' },
];

const funnelData = [
  { stage: 'Awareness', value: 100, conversions: 2400000 },
  { stage: 'Consideration', value: 60, conversions: 1440000 },
  { stage: 'Purchase Intent', value: 30, conversions: 720000 },
  { stage: 'Conversion', value: 15, conversions: 360000 },
  { stage: 'Loyalty', value: 8, conversions: 192000 },
];

export default function Dashboard() {
  return (
    <div className="flex h-full flex-col bg-gray-50">
      {/* Header */}
      <div className="border-b border-gray-200 bg-white px-8 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Amazon Ads Dashboard</h1>
            <p className="mt-1 text-sm text-gray-600">
              Real-time performance metrics and insights
            </p>
          </div>
          <div className="flex gap-3">
            <button className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              Export Report
            </button>
            <button className="rounded-lg bg-gradient-to-r from-[#4A6FA5] to-[#6B8DC2] px-4 py-2 text-sm font-medium text-white shadow-sm hover:shadow-md">
              Create Campaign
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto p-8">
        {/* Metrics Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <Card key={index} className="border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className={cn('rounded-lg p-3', metric.bgColor)}>
                      <Icon className={cn('h-6 w-6', metric.color)} />
                    </div>
                    <div
                      className={cn(
                        'flex items-center gap-1 text-sm font-medium',
                        metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                      )}
                    >
                      {metric.trend === 'up' ? (
                        <TrendingUp className="h-4 w-4" />
                      ) : (
                        <TrendingDown className="h-4 w-4" />
                      )}
                      {metric.change}
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm font-medium text-gray-600">{metric.title}</p>
                    <p className="mt-1 text-2xl font-bold text-gray-900">{metric.value}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Charts */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Performance Trend */}
          <Card className="col-span-1 lg:col-span-2 border-gray-200 bg-white shadow-sm">
            <CardHeader>
              <CardTitle>Performance Trends</CardTitle>
              <CardDescription>Track key metrics over time</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="spend">
                <TabsList>
                  <TabsTrigger value="spend">Ad Spend</TabsTrigger>
                  <TabsTrigger value="conversions">Conversions</TabsTrigger>
                  <TabsTrigger value="roas">ROAS</TabsTrigger>
                  <TabsTrigger value="impressions">Impressions</TabsTrigger>
                </TabsList>
                <TabsContent value="spend" className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={performanceData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="spend" stroke="#4A6FA5" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </TabsContent>
                <TabsContent value="conversions" className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={performanceData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="conversions" fill="#B4373F" />
                    </BarChart>
                  </ResponsiveContainer>
                </TabsContent>
                <TabsContent value="roas" className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={performanceData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="roas" stroke="#F5D547" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </TabsContent>
                <TabsContent value="impressions" className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={performanceData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="impressions" fill="#6B8DC2" />
                    </BarChart>
                  </ResponsiveContainer>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Campaign Distribution */}
          <Card>
            <CardHeader>
              <CardTitle>Campaign Distribution</CardTitle>
              <CardDescription>Spend by campaign type</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={campaignTypeData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {campaignTypeData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Full Funnel View */}
          <Card>
            <CardHeader>
              <CardTitle>Full Funnel Performance</CardTitle>
              <CardDescription>Customer journey analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={funnelData} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis dataKey="stage" type="category" width={120} />
                    <Tooltip />
                    <Bar dataKey="conversions" fill="#4A6FA5" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Active Campaigns Summary */}
        <Card className="mt-6 border-gray-200 bg-white shadow-sm">
          <CardHeader>
            <CardTitle>Active Campaigns</CardTitle>
            <CardDescription>Top performing campaigns this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: 'Prime Day DSP Campaign', type: 'DSP', spend: '$45,280', roas: '5.2x', status: 'Active' },
                { name: 'Brand Defense - SP', type: 'Sponsored Products', spend: '$32,150', roas: '4.8x', status: 'Active' },
                { name: 'New Product Launch - SBV', type: 'Sponsored Brands Video', spend: '$28,940', roas: '3.9x', status: 'Active' },
                { name: 'Retargeting - SD', type: 'Sponsored Display', spend: '$18,212', roas: '6.1x', status: 'Active' },
              ].map((campaign) => (
                <div
                  key={campaign.name}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{campaign.name}</h4>
                    <p className="text-sm text-gray-600">{campaign.type}</p>
                  </div>
                  <div className="flex items-center gap-6 text-sm">
                    <div className="text-right">
                      <p className="text-gray-600">Spend</p>
                      <p className="font-medium text-gray-900">{campaign.spend}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-600">ROAS</p>
                      <p className="font-medium text-green-600">{campaign.roas}</p>
                    </div>
                    <div>
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                        {campaign.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}