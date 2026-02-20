import { useState } from 'react';
import {
  TrendingUp,
  DollarSign,
  Target,
  Zap,
  Settings,
  BarChart3,
  AlertCircle,
  Save,
  Play,
  RefreshCw,
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { Slider } from './ui/slider';
import { Switch } from './ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';
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
  ScatterChart,
  Scatter,
} from 'recharts';
import { toast } from 'sonner';

const biddingStrategies = [
  {
    id: 'dynamic',
    name: 'Dynamic Bidding',
    description: 'Automatically adjust bids based on conversion likelihood',
    recommended: true,
  },
  {
    id: 'fixed',
    name: 'Fixed Bidding',
    description: 'Set fixed bid amounts for consistent spending',
    recommended: false,
  },
  {
    id: 'target-roas',
    name: 'Target ROAS',
    description: 'Optimize bids to achieve a specific return on ad spend',
    recommended: true,
  },
  {
    id: 'maximize-conversions',
    name: 'Maximize Conversions',
    description: 'Get the most conversions within your budget',
    recommended: false,
  },
];

const performanceData = [
  { bid: 1.5, conversions: 120, roas: 3.2, spend: 450 },
  { bid: 2.0, conversions: 180, roas: 3.8, spend: 600 },
  { bid: 2.5, conversions: 240, roas: 4.2, spend: 750 },
  { bid: 3.0, conversions: 280, roas: 4.5, spend: 900 },
  { bid: 3.5, conversions: 310, roas: 4.3, spend: 1050 },
  { bid: 4.0, conversions: 330, roas: 4.0, spend: 1200 },
  { bid: 4.5, conversions: 340, roas: 3.6, spend: 1350 },
];

const keywordBids = [
  { keyword: 'wireless headphones', current_bid: 3.25, suggested_bid: 3.80, impressions: 45000, conversions: 280 },
  { keyword: 'bluetooth speaker', current_bid: 2.50, suggested_bid: 2.90, impressions: 38000, conversions: 210 },
  { keyword: 'smart watch', current_bid: 4.10, suggested_bid: 3.90, impressions: 52000, conversions: 320 },
  { keyword: 'fitness tracker', current_bid: 2.80, suggested_bid: 3.20, impressions: 41000, conversions: 245 },
  { keyword: 'noise cancelling', current_bid: 3.60, suggested_bid: 4.20, impressions: 48000, conversions: 298 },
];

const bidAdjustments = [
  { segment: 'Mobile Devices', adjustment: 15, performance: '+12% conv rate' },
  { segment: 'Desktop', adjustment: -5, performance: '-3% conv rate' },
  { segment: 'Prime Members', adjustment: 25, performance: '+28% ROAS' },
  { segment: 'Repeat Customers', adjustment: 30, performance: '+35% ROAS' },
  { segment: 'High-Income Zip', adjustment: 20, performance: '+18% AOV' },
];

export default function BiddingModel() {
  const [selectedStrategy, setSelectedStrategy] = useState('dynamic');
  const [targetRoas, setTargetRoas] = useState(4.0);
  const [maxBid, setMaxBid] = useState(5.0);
  const [minBid, setMinBid] = useState(0.5);
  const [autoBidding, setAutoBidding] = useState(true);

  const handleSaveStrategy = () => {
    toast.success('Bidding strategy saved successfully!');
  };

  const handleApplyBids = () => {
    toast.success('Bid adjustments applied to campaigns!');
  };

  const handleOptimize = () => {
    toast.info('Running optimization algorithm...');
    setTimeout(() => {
      toast.success('Bids optimized for maximum ROAS!');
    }, 2000);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Bidding Models</h1>
          <p className="text-gray-600 mt-1">
            Optimize your bidding strategy for maximum performance
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="gap-2" onClick={handleOptimize}>
            <Zap className="h-4 w-4" />
            Auto-Optimize
          </Button>
          <Button onClick={handleSaveStrategy} className="gap-2 bg-[#4A6FA5] hover:bg-[#2C4A75]">
            <Save className="h-4 w-4" />
            Save Strategy
          </Button>
        </div>
      </div>

      {/* Current Performance */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Avg CPC</p>
                <p className="text-2xl font-bold text-gray-900 mt-2">$3.24</p>
                <p className="text-sm text-green-600 mt-1">-8% vs target</p>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg">
                <DollarSign className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Current ROAS</p>
                <p className="text-2xl font-bold text-gray-900 mt-2">4.2x</p>
                <p className="text-sm text-green-600 mt-1">+5% vs target</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Conv. Rate</p>
                <p className="text-2xl font-bold text-gray-900 mt-2">5.8%</p>
                <p className="text-sm text-green-600 mt-1">+12% vs avg</p>
              </div>
              <div className="p-3 bg-purple-50 rounded-lg">
                <Target className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Bids</p>
                <p className="text-2xl font-bold text-gray-900 mt-2">1,247</p>
                <p className="text-sm text-blue-600 mt-1">Across campaigns</p>
              </div>
              <div className="p-3 bg-orange-50 rounded-lg">
                <BarChart3 className="h-6 w-6 text-orange-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Strategy Configuration */}
        <div className="lg:col-span-2 space-y-6">
          {/* Bidding Strategy Selection */}
          <Card>
            <CardHeader>
              <CardTitle>Bidding Strategy</CardTitle>
              <CardDescription>Choose the best bidding approach for your goals</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {biddingStrategies.map((strategy) => (
                <div
                  key={strategy.id}
                  className={`relative flex items-start p-4 rounded-lg border-2 cursor-pointer transition-all ${
                    selectedStrategy === strategy.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => setSelectedStrategy(strategy.id)}
                >
                  <div className="flex items-start gap-3 flex-1">
                    <div className="flex items-center h-5 mt-0.5">
                      <input
                        type="radio"
                        checked={selectedStrategy === strategy.id}
                        onChange={() => setSelectedStrategy(strategy.id)}
                        className="h-4 w-4 text-blue-600"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <label className="font-medium text-gray-900">{strategy.name}</label>
                        {strategy.recommended && (
                          <Badge className="bg-green-100 text-green-800 text-xs">
                            Recommended
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{strategy.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Strategy Parameters */}
          <Card>
            <CardHeader>
              <CardTitle>Strategy Parameters</CardTitle>
              <CardDescription>Fine-tune your bidding parameters</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <Label className="text-base">Auto-Bidding</Label>
                  <p className="text-sm text-gray-600 mt-1">
                    Let Amazon automatically adjust bids for optimal performance
                  </p>
                </div>
                <Switch checked={autoBidding} onCheckedChange={setAutoBidding} />
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label>Target ROAS: {targetRoas.toFixed(1)}x</Label>
                  <Input
                    type="number"
                    value={targetRoas}
                    onChange={(e) => setTargetRoas(parseFloat(e.target.value))}
                    className="w-24"
                    step="0.1"
                  />
                </div>
                <Slider
                  value={[targetRoas]}
                  onValueChange={(value) => setTargetRoas(value[0])}
                  min={1.0}
                  max={10.0}
                  step={0.1}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label>Max Bid: ${maxBid.toFixed(2)}</Label>
                  </div>
                  <Slider
                    value={[maxBid]}
                    onValueChange={(value) => setMaxBid(value[0])}
                    min={0.5}
                    max={10.0}
                    step={0.25}
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label>Min Bid: ${minBid.toFixed(2)}</Label>
                  </div>
                  <Slider
                    value={[minBid]}
                    onValueChange={(value) => setMinBid(value[0])}
                    min={0.1}
                    max={2.0}
                    step={0.1}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="bid-adjustment">Bid Adjustment Mode</Label>
                  <Select>
                    <SelectTrigger id="bid-adjustment">
                      <SelectValue placeholder="Select mode" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="aggressive">Aggressive</SelectItem>
                      <SelectItem value="moderate">Moderate</SelectItem>
                      <SelectItem value="conservative">Conservative</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="optimization-goal">Optimization Goal</Label>
                  <Select>
                    <SelectTrigger id="optimization-goal">
                      <SelectValue placeholder="Select goal" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="conversions">Maximize Conversions</SelectItem>
                      <SelectItem value="roas">Maximize ROAS</SelectItem>
                      <SelectItem value="reach">Maximize Reach</SelectItem>
                      <SelectItem value="clicks">Maximize Clicks</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Bid Performance Analysis */}
          <Card>
            <CardHeader>
              <CardTitle>Bid Performance Analysis</CardTitle>
              <CardDescription>How different bid levels impact performance</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="roas">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="roas">ROAS</TabsTrigger>
                  <TabsTrigger value="conversions">Conversions</TabsTrigger>
                  <TabsTrigger value="spend">Spend</TabsTrigger>
                </TabsList>
                <TabsContent value="roas" className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={performanceData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="bid" label={{ value: 'Bid Amount ($)', position: 'insideBottom', offset: -5 }} />
                      <YAxis label={{ value: 'ROAS', angle: -90, position: 'insideLeft' }} />
                      <Tooltip />
                      <Line type="monotone" dataKey="roas" stroke="#4A6FA5" strokeWidth={3} />
                    </LineChart>
                  </ResponsiveContainer>
                </TabsContent>
                <TabsContent value="conversions" className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={performanceData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="bid" label={{ value: 'Bid Amount ($)', position: 'insideBottom', offset: -5 }} />
                      <YAxis label={{ value: 'Conversions', angle: -90, position: 'insideLeft' }} />
                      <Tooltip />
                      <Bar dataKey="conversions" fill="#F5D547" />
                    </BarChart>
                  </ResponsiveContainer>
                </TabsContent>
                <TabsContent value="spend" className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={performanceData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="bid" label={{ value: 'Bid Amount ($)', position: 'insideBottom', offset: -5 }} />
                      <YAxis label={{ value: 'Spend ($)', angle: -90, position: 'insideLeft' }} />
                      <Tooltip />
                      <Bar dataKey="spend" fill="#B4373F" />
                    </BarChart>
                  </ResponsiveContainer>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Keyword Bid Recommendations */}
          <Card>
            <CardHeader>
              <CardTitle>Keyword Bid Recommendations</CardTitle>
              <CardDescription>AI-powered bid suggestions for top keywords</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {keywordBids.map((keyword, index) => (
                  <div
                    key={index}
                    className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-900">{keyword.keyword}</h4>
                      <div className="flex items-center gap-2">
                        <Button size="sm" variant="outline">
                          Apply
                        </Button>
                      </div>
                    </div>
                    <div className="grid grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Current Bid</p>
                        <p className="font-medium text-gray-900">${keyword.current_bid}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Suggested Bid</p>
                        <p className="font-medium text-green-600">${keyword.suggested_bid}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Impressions</p>
                        <p className="font-medium text-gray-900">{keyword.impressions.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Conversions</p>
                        <p className="font-medium text-gray-900">{keyword.conversions}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4" variant="outline" onClick={handleApplyBids}>
                Apply All Recommendations
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Optimization Score */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Optimization Score</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="relative inline-flex items-center justify-center">
                  <svg className="w-32 h-32 transform -rotate-90">
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                      className="text-gray-200"
                    />
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 56}`}
                      strokeDashoffset={`${2 * Math.PI * 56 * (1 - 0.82)}`}
                      className="text-green-500"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <span className="text-3xl font-bold text-gray-900">82</span>
                    <span className="text-sm text-gray-600">/ 100</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  Your bidding strategy is well optimized
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Bid Adjustments */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Bid Adjustments</CardTitle>
              <CardDescription className="text-xs">
                By audience segment
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {bidAdjustments.map((adjustment, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-700">{adjustment.segment}</span>
                    <Badge variant="outline" className={adjustment.adjustment > 0 ? 'text-green-600' : 'text-red-600'}>
                      {adjustment.adjustment > 0 ? '+' : ''}{adjustment.adjustment}%
                    </Badge>
                  </div>
                  <p className="text-xs text-gray-500">{adjustment.performance}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Recommendations */}
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-base text-blue-900 flex items-center gap-2">
                <AlertCircle className="h-4 w-4" />
                Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-blue-800">
              <div className="flex gap-2">
                <span>•</span>
                <p>Increase bids by 15% for "Prime Members" segment to capture high-value customers</p>
              </div>
              <div className="flex gap-2">
                <span>•</span>
                <p>Lower desktop bids by 10% and reallocate budget to mobile</p>
              </div>
              <div className="flex gap-2">
                <span>•</span>
                <p>Set dayparting adjustments for peak shopping hours (6-9 PM)</p>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start gap-2">
                <RefreshCw className="h-4 w-4" />
                Reset to Defaults
              </Button>
              <Button variant="outline" className="w-full justify-start gap-2">
                <Settings className="h-4 w-4" />
                Advanced Settings
              </Button>
              <Button variant="outline" className="w-full justify-start gap-2">
                <Play className="h-4 w-4" />
                Run Simulation
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
