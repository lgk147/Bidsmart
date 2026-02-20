import { useState } from 'react';
import {
  Target,
  Users,
  Plus,
  Search,
  Filter,
  Save,
  TrendingUp,
  Eye,
  MousePointerClick,
  ShoppingCart,
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';
import { Switch } from './ui/switch';
import { Slider } from './ui/slider';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from './ui/dialog';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { toast } from 'sonner';

const savedAudiences = [
  {
    id: '1',
    name: 'High-Value Prime Members',
    size: 450000,
    type: 'Behavioral',
    performance: { ctr: 4.2, conversions: 8500, roas: 5.8 },
    status: 'Active',
  },
  {
    id: '2',
    name: 'Cart Abandoners - Electronics',
    size: 320000,
    type: 'Retargeting',
    performance: { ctr: 5.1, conversions: 6400, roas: 6.2 },
    status: 'Active',
  },
  {
    id: '3',
    name: 'In-Market: Smart Home',
    size: 680000,
    type: 'In-Market',
    performance: { ctr: 3.5, conversions: 12240, roas: 4.5 },
    status: 'Active',
  },
  {
    id: '4',
    name: 'Lookalike: Top 10% Customers',
    size: 890000,
    type: 'Lookalike',
    performance: { ctr: 3.8, conversions: 16910, roas: 4.9 },
    status: 'Active',
  },
  {
    id: '5',
    name: 'Seasonal Shoppers Q4',
    size: 420000,
    type: 'Seasonal',
    performance: { ctr: 4.5, conversions: 9450, roas: 5.2 },
    status: 'Paused',
  },
];

const audienceInsights = [
  { segment: '18-24 years', size: 280000, color: '#4A6FA5', conversion_rate: 2.8 },
  { segment: '25-34 years', size: 520000, color: '#6B8DC2', conversion_rate: 4.2 },
  { segment: '35-44 years', size: 680000, color: '#F5D547', conversion_rate: 5.1 },
  { segment: '45-54 years', size: 450000, color: '#E6C33C', conversion_rate: 4.5 },
  { segment: '55+ years', size: 320000, color: '#B4373F', conversion_rate: 3.8 },
];

const targetingOptions = [
  { category: 'Demographics', options: ['Age', 'Gender', 'Household Income', 'Parental Status'] },
  { category: 'Behavioral', options: ['Purchase History', 'Browsing Behavior', 'Prime Membership', 'Shopping Frequency'] },
  { category: 'In-Market', options: ['Category Shoppers', 'Product Researchers', 'Comparison Shoppers'] },
  { category: 'Contextual', options: ['Product Categories', 'Brands', 'Keywords', 'ASINs'] },
];

export default function AudienceTargeting() {
  const [createDialogOpen, setCreateDialogOpen] = useState(false);
  const [audienceName, setAudienceName] = useState('');
  const [audienceSize, setAudienceSize] = useState(500000);

  const handleCreateAudience = () => {
    toast.success('Audience segment created successfully!');
    setCreateDialogOpen(false);
    setAudienceName('');
  };

  const handleSaveAudience = () => {
    toast.success('Audience configuration saved!');
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Audience Targeting</h1>
          <p className="text-gray-600 mt-1">
            Build and manage audience segments for precision targeting
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
          <Dialog open={createDialogOpen} onOpenChange={setCreateDialogOpen}>
            <DialogTrigger asChild>
              <Button className="gap-2 bg-[#4A6FA5] hover:bg-[#2C4A75]">
                <Plus className="h-4 w-4" />
                Create Audience
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Create New Audience Segment</DialogTitle>
                <DialogDescription>
                  Define targeting criteria to build your custom audience
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-6 py-4">
                <div className="space-y-2">
                  <Label htmlFor="audience-name">Audience Name</Label>
                  <Input
                    id="audience-name"
                    placeholder="e.g., High-Intent Electronics Shoppers"
                    value={audienceName}
                    onChange={(e) => setAudienceName(e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="audience-type">Audience Type</Label>
                    <Select>
                      <SelectTrigger id="audience-type">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="behavioral">Behavioral</SelectItem>
                        <SelectItem value="demographic">Demographic</SelectItem>
                        <SelectItem value="in-market">In-Market</SelectItem>
                        <SelectItem value="retargeting">Retargeting</SelectItem>
                        <SelectItem value="lookalike">Lookalike</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="campaign-objective">Campaign Objective</Label>
                    <Select>
                      <SelectTrigger id="campaign-objective">
                        <SelectValue placeholder="Select objective" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="awareness">Awareness</SelectItem>
                        <SelectItem value="consideration">Consideration</SelectItem>
                        <SelectItem value="conversion">Conversion</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-3">
                  <Label>Demographic Targeting</Label>
                  <div className="grid grid-cols-2 gap-4">
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Age Range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="18-24">18-24</SelectItem>
                        <SelectItem value="25-34">25-34</SelectItem>
                        <SelectItem value="35-44">35-44</SelectItem>
                        <SelectItem value="45-54">45-54</SelectItem>
                        <SelectItem value="55+">55+</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All</SelectItem>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-3">
                  <Label>Behavioral Filters</Label>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm">Prime Members Only</span>
                      <Switch />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm">High Purchase Frequency</span>
                      <Switch />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm">Premium Product Buyers</span>
                      <Switch />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Interest Categories</Label>
                  <Textarea
                    placeholder="Enter product categories, brands, or keywords (comma-separated)"
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Estimated Audience Size: {audienceSize.toLocaleString()}</Label>
                  <Slider
                    value={[audienceSize]}
                    onValueChange={(value) => setAudienceSize(value[0])}
                    min={10000}
                    max={2000000}
                    step={10000}
                  />
                  <p className="text-xs text-gray-500">
                    Adjust targeting criteria to refine audience size
                  </p>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setCreateDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleCreateAudience} className="bg-[#4A6FA5] hover:bg-[#2C4A75]">
                  Create Audience
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Audiences</p>
                <p className="text-2xl font-bold text-gray-900 mt-2">247</p>
                <p className="text-sm text-blue-600 mt-1">Segments</p>
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
                <p className="text-sm font-medium text-gray-600">Total Reach</p>
                <p className="text-2xl font-bold text-gray-900 mt-2">2.76M</p>
                <p className="text-sm text-green-600 mt-1">+18.5%</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg">
                <Eye className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Avg Engagement</p>
                <p className="text-2xl font-bold text-gray-900 mt-2">4.1%</p>
                <p className="text-sm text-green-600 mt-1">+12.3%</p>
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
                <p className="text-sm font-medium text-gray-600">Avg Conv. Rate</p>
                <p className="text-2xl font-bold text-gray-900 mt-2">4.3%</p>
                <p className="text-sm text-green-600 mt-1">+8.7%</p>
              </div>
              <div className="p-3 bg-orange-50 rounded-lg">
                <ShoppingCart className="h-6 w-6 text-orange-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Audience Segments Table */}
      <Card>
        <CardHeader>
          <CardTitle>Saved Audience Segments</CardTitle>
          <CardDescription>Manage and analyze your custom audience segments</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Audience Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead className="text-right">Size</TableHead>
                <TableHead className="text-right">CTR</TableHead>
                <TableHead className="text-right">Conversions</TableHead>
                <TableHead className="text-right">ROAS</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {savedAudiences.map((audience) => (
                <TableRow key={audience.id} className="hover:bg-gray-50">
                  <TableCell className="font-medium">{audience.name}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{audience.type}</Badge>
                  </TableCell>
                  <TableCell className="text-right">{audience.size.toLocaleString()}</TableCell>
                  <TableCell className="text-right">{audience.performance.ctr}%</TableCell>
                  <TableCell className="text-right">
                    {audience.performance.conversions.toLocaleString()}
                  </TableCell>
                  <TableCell className="text-right font-medium text-green-600">
                    {audience.performance.roas}x
                  </TableCell>
                  <TableCell>
                    {audience.status === 'Active' ? (
                      <Badge className="bg-green-100 text-green-800">Active</Badge>
                    ) : (
                      <Badge className="bg-gray-100 text-gray-800">Paused</Badge>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Audience Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Audience Demographics</CardTitle>
            <CardDescription>Age distribution of your target audience</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={audienceInsights}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ segment, size }) =>
                      `${segment}: ${(size / 1000).toFixed(0)}K`
                    }
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="size"
                  >
                    {audienceInsights.map((entry, index) => (
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
            <CardTitle>Conversion Rate by Segment</CardTitle>
            <CardDescription>Performance comparison across age groups</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={audienceInsights}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="segment" angle={-45} textAnchor="end" height={100} />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="conversion_rate" fill="#4A6FA5" name="Conversion Rate %" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Targeting Builder */}
      <Card>
        <CardHeader>
          <CardTitle>Targeting Options</CardTitle>
          <CardDescription>Available targeting criteria for Amazon Ads</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {targetingOptions.map((category, index) => (
              <div key={index} className="space-y-3">
                <h4 className="font-medium text-gray-900 flex items-center gap-2">
                  <Target className="h-4 w-4 text-blue-600" />
                  {category.category}
                </h4>
                <ul className="space-y-2">
                  {category.options.map((option, optIndex) => (
                    <li key={optIndex} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full" />
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recommendations */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="pt-6">
            <div className="flex gap-3">
              <div className="p-2 bg-blue-100 rounded-lg h-fit">
                <TrendingUp className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h4 className="font-medium text-blue-900 mb-2">High Performer</h4>
                <p className="text-sm text-blue-700">
                  "Cart Abandoners - Electronics" has 6.2x ROAS. Consider increasing budget
                  allocation.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-green-50 border-green-200">
          <CardContent className="pt-6">
            <div className="flex gap-3">
              <div className="p-2 bg-green-100 rounded-lg h-fit">
                <Users className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <h4 className="font-medium text-green-900 mb-2">Lookalike Opportunity</h4>
                <p className="text-sm text-green-700">
                  Create a lookalike audience based on "High-Value Prime Members" to expand reach.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-purple-50 border-purple-200">
          <CardContent className="pt-6">
            <div className="flex gap-3">
              <div className="p-2 bg-purple-100 rounded-lg h-fit">
                <Target className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <h4 className="font-medium text-purple-900 mb-2">Optimization Tip</h4>
                <p className="text-sm text-purple-700">
                  Age group 35-44 shows highest conversion rate. Focus creative messaging for this
                  segment.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
