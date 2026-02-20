import { useState } from 'react';
import {
  Store,
  TrendingUp,
  Package,
  ShoppingCart,
  Star,
  BarChart3,
  Users,
  DollarSign,
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
  PieChart,
  Pie,
  Cell,
} from 'recharts';

const salesTrends = [
  { date: 'Jan', sales: 125000, units: 2500, orders: 1850 },
  { date: 'Feb', sales: 145000, units: 2900, orders: 2100 },
  { date: 'Mar', sales: 138000, units: 2760, orders: 2020 },
  { date: 'Apr', sales: 162000, units: 3240, orders: 2380 },
  { date: 'May', sales: 178000, units: 3560, orders: 2590 },
  { date: 'Jun', sales: 195000, units: 3900, orders: 2850 },
];

const topProducts = [
  { asin: 'B08N5WRWNW', name: 'Wireless Earbuds Pro', sales: 45280, units: 856, rating: 4.6, reviews: 12580 },
  { asin: 'B07XJ8C8F5', name: 'Smart Watch Series 5', sales: 38920, units: 680, rating: 4.5, reviews: 9840 },
  { asin: 'B09BK3HH5Y', name: 'Bluetooth Speaker Max', sales: 32150, units: 1024, rating: 4.7, reviews: 8650 },
  { asin: 'B08H75RTZ8', name: 'Fitness Tracker Band', sales: 28640, units: 1432, rating: 4.4, reviews: 7120 },
  { asin: 'B07Y2KD6TH', name: 'Noise Cancelling Headphones', sales: 24890, units: 425, rating: 4.8, reviews: 15240 },
];

const categoryPerformance = [
  { category: 'Electronics', share: 45, sales: 875000, color: '#4A6FA5' },
  { category: 'Accessories', share: 30, sales: 585000, color: '#F5D547' },
  { category: 'Wearables', share: 15, sales: 292500, color: '#B4373F' },
  { category: 'Audio', share: 10, sales: 195000, color: '#6B8DC2' },
];

const competitorInsights = [
  { brand: 'Brand A', market_share: 28, avg_price: 89.99, rating: 4.5 },
  { brand: 'Brand B', market_share: 22, avg_price: 79.99, rating: 4.3 },
  { brand: 'Your Brand', market_share: 18, avg_price: 94.99, rating: 4.6 },
  { brand: 'Brand C', market_share: 15, avg_price: 69.99, rating: 4.2 },
  { brand: 'Brand D', market_share: 10, avg_price: 99.99, rating: 4.7 },
  { brand: 'Others', market_share: 7, avg_price: 85.00, rating: 4.1 },
];

export default function RetailIntelligence() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Retail Intelligence</h1>
          <p className="text-gray-600 mt-1">
            Amazon retail performance analytics and insights
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="gap-2">
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
                <p className="text-sm font-medium text-gray-600">Total Sales</p>
                <p className="text-2xl font-bold text-gray-900 mt-2">$943K</p>
                <p className="text-sm text-green-600 mt-1">+22.5% vs last month</p>
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
                <p className="text-sm font-medium text-gray-600">Units Sold</p>
                <p className="text-2xl font-bold text-gray-900 mt-2">19,340</p>
                <p className="text-sm text-green-600 mt-1">+18.3% vs last month</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg">
                <Package className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Avg Order Value</p>
                <p className="text-2xl font-bold text-gray-900 mt-2">$68.40</p>
                <p className="text-sm text-green-600 mt-1">+5.2% vs last month</p>
              </div>
              <div className="p-3 bg-purple-50 rounded-lg">
                <ShoppingCart className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Avg Rating</p>
                <p className="text-2xl font-bold text-gray-900 mt-2">4.6</p>
                <p className="text-sm text-blue-600 mt-1">53,430 reviews</p>
              </div>
              <div className="p-3 bg-yellow-50 rounded-lg">
                <Star className="h-6 w-6 text-yellow-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sales Trends */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Sales Performance Trends</CardTitle>
            <CardDescription>Track sales, units, and orders over time</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="sales">
              <TabsList>
                <TabsTrigger value="sales">Sales Revenue</TabsTrigger>
                <TabsTrigger value="units">Units Sold</TabsTrigger>
                <TabsTrigger value="orders">Order Count</TabsTrigger>
              </TabsList>
              <TabsContent value="sales" className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={salesTrends}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="sales" stroke="#4A6FA5" strokeWidth={2} name="Sales ($)" />
                  </LineChart>
                </ResponsiveContainer>
              </TabsContent>
              <TabsContent value="units" className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={salesTrends}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="units" fill="#F5D547" name="Units" />
                  </BarChart>
                </ResponsiveContainer>
              </TabsContent>
              <TabsContent value="orders" className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={salesTrends}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="orders" fill="#B4373F" name="Orders" />
                  </BarChart>
                </ResponsiveContainer>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Category Performance */}
        <Card>
          <CardHeader>
            <CardTitle>Category Distribution</CardTitle>
            <CardDescription>Sales by product category</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryPerformance}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ category, share }) => `${category}: ${share}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="share"
                  >
                    {categoryPerformance.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Competitor Analysis */}
        <Card>
          <CardHeader>
            <CardTitle>Market Share Analysis</CardTitle>
            <CardDescription>Competitive landscape overview</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={competitorInsights} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="brand" type="category" width={100} />
                  <Tooltip />
                  <Bar dataKey="market_share" fill="#4A6FA5" name="Market Share %" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top Products Table */}
      <Card>
        <CardHeader>
          <CardTitle>Top Performing Products</CardTitle>
          <CardDescription>Best sellers by revenue and units sold</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ASIN</TableHead>
                <TableHead>Product Name</TableHead>
                <TableHead className="text-right">Sales</TableHead>
                <TableHead className="text-right">Units Sold</TableHead>
                <TableHead className="text-right">Rating</TableHead>
                <TableHead className="text-right">Reviews</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {topProducts.map((product) => (
                <TableRow key={product.asin} className="hover:bg-gray-50">
                  <TableCell className="font-mono text-sm">{product.asin}</TableCell>
                  <TableCell className="font-medium">{product.name}</TableCell>
                  <TableCell className="text-right">${product.sales.toLocaleString()}</TableCell>
                  <TableCell className="text-right">{product.units.toLocaleString()}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      <span className="font-medium">{product.rating}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right text-gray-600">
                    {product.reviews.toLocaleString()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Competitor Comparison */}
      <Card>
        <CardHeader>
          <CardTitle>Competitive Benchmarking</CardTitle>
          <CardDescription>Compare your performance against competitors</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Brand</TableHead>
                <TableHead className="text-right">Market Share</TableHead>
                <TableHead className="text-right">Avg Price</TableHead>
                <TableHead className="text-right">Rating</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {competitorInsights.map((competitor, index) => (
                <TableRow key={index} className={competitor.brand === 'Your Brand' ? 'bg-blue-50' : ''}>
                  <TableCell className="font-medium">
                    {competitor.brand}
                    {competitor.brand === 'Your Brand' && (
                      <Badge className="ml-2 bg-blue-100 text-blue-800">You</Badge>
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <div className="flex-1 max-w-[100px] h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-blue-500"
                          style={{ width: `${competitor.market_share * 3.5}%` }}
                        />
                      </div>
                      <span className="font-medium w-12">{competitor.market_share}%</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">${competitor.avg_price}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      <span>{competitor.rating}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    {competitor.market_share < competitorInsights.find(c => c.brand === 'Your Brand')?.market_share! && (
                      <Badge className="bg-green-100 text-green-800">Ahead</Badge>
                    )}
                    {competitor.market_share > competitorInsights.find(c => c.brand === 'Your Brand')?.market_share! && (
                      <Badge className="bg-red-100 text-red-800">Behind</Badge>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
