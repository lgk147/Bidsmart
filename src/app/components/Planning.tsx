import { useState } from 'react';
import { Calendar, Target, DollarSign, Users, TrendingUp, AlertCircle, Plus, Save } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Slider } from './ui/slider';
import { toast } from 'sonner';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
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

const funnelAllocation = [
  { stage: 'Awareness (Top)', percentage: 40, budget: 40000, channels: ['DSP Display', 'Prime Video'] },
  { stage: 'Consideration (Mid)', percentage: 35, budget: 35000, channels: ['Sponsored Brands', 'DSP Video'] },
  { stage: 'Conversion (Bottom)', percentage: 25, budget: 25000, channels: ['Sponsored Products', 'Sponsored Display'] },
];

const channelMix = [
  { name: 'Amazon DSP', allocation: 35, color: '#4A6FA5' },
  { name: 'Sponsored Products', allocation: 30, color: '#F5D547' },
  { name: 'Sponsored Brands', allocation: 20, color: '#B4373F' },
  { name: 'Sponsored Display', allocation: 15, color: '#6B8DC2' },
];

const forecastData = [
  { month: 'Jul', impressions: 450000, reach: 180000, conversions: 2800, spend: 25000 },
  { month: 'Aug', impressions: 520000, reach: 210000, conversions: 3200, spend: 28000 },
  { month: 'Sep', impressions: 580000, reach: 235000, conversions: 3600, spend: 31000 },
  { month: 'Oct', impressions: 620000, reach: 250000, conversions: 3900, spend: 33000 },
  { month: 'Nov', impressions: 720000, reach: 290000, conversions: 4500, spend: 38000 },
  { month: 'Dec', impressions: 850000, reach: 340000, conversions: 5300, spend: 45000 },
];

export default function Planning() {
  const [totalBudget, setTotalBudget] = useState(100000);
  const [campaignDuration, setCampaignDuration] = useState(90);
  const [funnelSplit, setFunnelSplit] = useState({ top: 40, mid: 35, bottom: 25 });

  const handleSavePlan = () => {
    toast.success('Campaign plan saved successfully!');
  };

  const updateFunnelSplit = (stage: string, value: number) => {
    const remaining = 100 - value;
    if (stage === 'top') {
      const midPercent = Math.round(remaining * 0.6);
      setFunnelSplit({ top: value, mid: midPercent, bottom: remaining - midPercent });
    } else if (stage === 'mid') {
      const topPercent = Math.round(remaining * 0.55);
      setFunnelSplit({ top: topPercent, mid: value, bottom: remaining - topPercent });
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Campaign Planning</h1>
          <p className="text-gray-600 mt-1">Full-funnel strategy and budget allocation</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="gap-2">
            <Calendar className="h-4 w-4" />
            Schedule
          </Button>
          <Button onClick={handleSavePlan} className="gap-2 bg-[#4A6FA5] hover:bg-[#2C4A75]">
            <Save className="h-4 w-4" />
            Save Plan
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Campaign Setup */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Campaign Configuration</CardTitle>
            <CardDescription>Define your campaign objectives and budget</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Basic Info */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="campaign-name">Campaign Name</Label>
                <Input id="campaign-name" placeholder="e.g., Q3 Brand Campaign" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="objective">Primary Objective</Label>
                <Select>
                  <SelectTrigger id="objective">
                    <SelectValue placeholder="Select objective" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="awareness">Brand Awareness</SelectItem>
                    <SelectItem value="consideration">Consideration</SelectItem>
                    <SelectItem value="conversion">Conversion</SelectItem>
                    <SelectItem value="full-funnel">Full Funnel</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Budget & Timeline */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Total Budget: ${totalBudget.toLocaleString()}</Label>
                <Slider
                  value={[totalBudget]}
                  onValueChange={(value) => setTotalBudget(value[0])}
                  min={10000}
                  max={500000}
                  step={5000}
                  className="mt-2"
                />
              </div>
              <div className="space-y-2">
                <Label>Campaign Duration: {campaignDuration} days</Label>
                <Slider
                  value={[campaignDuration]}
                  onValueChange={(value) => setCampaignDuration(value[0])}
                  min={7}
                  max={365}
                  step={1}
                  className="mt-2"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="start-date">Start Date</Label>
                <Input id="start-date" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="end-date">End Date</Label>
                <Input id="end-date" type="date" />
              </div>
            </div>

            {/* Targeting */}
            <div className="space-y-2">
              <Label htmlFor="target-audience">Target Audience</Label>
              <Textarea
                id="target-audience"
                placeholder="Describe your target audience (e.g., Age 25-45, interested in electronics, high purchase intent...)"
                rows={3}
              />
            </div>

            {/* KPIs */}
            <div className="space-y-2">
              <Label>Key Performance Indicators</Label>
              <div className="grid grid-cols-3 gap-4 mt-2">
                <div className="space-y-2">
                  <Label htmlFor="target-reach" className="text-sm text-gray-600">
                    Target Reach
                  </Label>
                  <Input id="target-reach" type="number" placeholder="1000000" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="target-roas" className="text-sm text-gray-600">
                    Target ROAS
                  </Label>
                  <Input id="target-roas" type="number" step="0.1" placeholder="4.0" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="target-conversions" className="text-sm text-gray-600">
                    Target Conversions
                  </Label>
                  <Input id="target-conversions" type="number" placeholder="5000" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Daily Budget</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-gray-900">
                ${Math.round(totalBudget / campaignDuration).toLocaleString()}
              </p>
              <p className="text-sm text-gray-600 mt-1">per day</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Estimated Reach</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-gray-900">
                {((totalBudget / 50) * 1000).toLocaleString()}
              </p>
              <p className="text-sm text-gray-600 mt-1">unique users</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Projected ROAS</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-green-600">4.2x</p>
              <p className="text-sm text-gray-600 mt-1">return on ad spend</p>
            </CardContent>
          </Card>

          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="pt-6">
              <div className="flex gap-3">
                <AlertCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-blue-900">Recommendation</p>
                  <p className="text-xs text-blue-700 mt-1">
                    For full-funnel campaigns, allocate 40% to awareness, 35% to consideration, and
                    25% to conversion.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Funnel Budget Allocation */}
      <Card>
        <CardHeader>
          <CardTitle>Full Funnel Budget Allocation</CardTitle>
          <CardDescription>
            Distribute your budget across the customer journey stages
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Top of Funnel - Awareness */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-base">Top of Funnel - Awareness</Label>
                  <p className="text-sm text-gray-600">Build brand awareness and reach</p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-gray-900">
                    ${Math.round(totalBudget * (funnelSplit.top / 100)).toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-600">{funnelSplit.top}%</p>
                </div>
              </div>
              <Slider
                value={[funnelSplit.top]}
                onValueChange={(value) => updateFunnelSplit('top', value[0])}
                min={20}
                max={60}
                step={5}
              />
              <div className="flex gap-2 flex-wrap">
                <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded">DSP Display</span>
                <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded">Prime Video</span>
                <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded">Sponsored Brands Video</span>
              </div>
            </div>

            {/* Mid Funnel - Consideration */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-base">Mid Funnel - Consideration</Label>
                  <p className="text-sm text-gray-600">Drive engagement and interest</p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-gray-900">
                    ${Math.round(totalBudget * (funnelSplit.mid / 100)).toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-600">{funnelSplit.mid}%</p>
                </div>
              </div>
              <Slider
                value={[funnelSplit.mid]}
                onValueChange={(value) => updateFunnelSplit('mid', value[0])}
                min={20}
                max={60}
                step={5}
              />
              <div className="flex gap-2 flex-wrap">
                <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded">Sponsored Brands</span>
                <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded">DSP Video</span>
                <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded">Sponsored Display</span>
              </div>
            </div>

            {/* Bottom Funnel - Conversion */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-base">Bottom Funnel - Conversion</Label>
                  <p className="text-sm text-gray-600">Drive purchases and conversions</p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-gray-900">
                    ${Math.round(totalBudget * (funnelSplit.bottom / 100)).toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-600">{funnelSplit.bottom}%</p>
                </div>
              </div>
              <div className="h-2 bg-gray-200 rounded">
                <div
                  className="h-full bg-green-500 rounded"
                  style={{ width: `${funnelSplit.bottom}%` }}
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded">Sponsored Products</span>
                <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded">Sponsored Display Retargeting</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Forecasts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Performance Forecast</CardTitle>
            <CardDescription>Projected metrics over campaign duration</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="impressions">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="impressions">Impressions</TabsTrigger>
                <TabsTrigger value="reach">Reach</TabsTrigger>
                <TabsTrigger value="conversions">Conversions</TabsTrigger>
                <TabsTrigger value="spend">Spend</TabsTrigger>
              </TabsList>
              <TabsContent value="impressions" className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={forecastData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="impressions" stroke="#4A6FA5" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </TabsContent>
              <TabsContent value="reach" className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={forecastData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="reach" stroke="#B4373F" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </TabsContent>
              <TabsContent value="conversions" className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={forecastData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="conversions" fill="#F5D547" />
                  </BarChart>
                </ResponsiveContainer>
              </TabsContent>
              <TabsContent value="spend" className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={forecastData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="spend" fill="#6B8DC2" />
                  </BarChart>
                </ResponsiveContainer>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Channel Mix</CardTitle>
            <CardDescription>Budget distribution across ad products</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={channelMix}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, allocation }) => `${name}: ${allocation}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="allocation"
                  >
                    {channelMix.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 space-y-2">
              {channelMix.map((channel) => (
                <div key={channel.name} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded"
                      style={{ backgroundColor: channel.color }}
                    />
                    <span>{channel.name}</span>
                  </div>
                  <span className="font-medium">
                    ${Math.round((totalBudget * channel.allocation) / 100).toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
