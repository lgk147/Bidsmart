import { useState } from 'react';
import {
  FileText,
  Upload,
  Save,
  Download,
  Image as ImageIcon,
  Video,
  Target,
  Calendar,
  DollarSign,
  Plus,
  X,
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
import { toast } from 'sonner';

const adProducts = [
  { id: 'dsp-display', name: 'Amazon DSP Display', category: 'DSP' },
  { id: 'dsp-video', name: 'Amazon DSP Video', category: 'DSP' },
  { id: 'prime-video', name: 'Prime Video Ads', category: 'Video' },
  { id: 'sp', name: 'Sponsored Products', category: 'Sponsored' },
  { id: 'sb', name: 'Sponsored Brands', category: 'Sponsored' },
  { id: 'sbv', name: 'Sponsored Brands Video', category: 'Sponsored' },
  { id: 'sd', name: 'Sponsored Display', category: 'Sponsored' },
];

const creativeSpecifications = {
  'dsp-display': [
    { size: '300x250', name: 'Medium Rectangle' },
    { size: '728x90', name: 'Leaderboard' },
    { size: '160x600', name: 'Wide Skyscraper' },
    { size: '320x50', name: 'Mobile Banner' },
  ],
  'dsp-video': [
    { duration: '15s', format: 'MP4', resolution: '1920x1080' },
    { duration: '30s', format: 'MP4', resolution: '1920x1080' },
  ],
  'prime-video': [
    { duration: '15s', format: 'MP4', resolution: '1920x1080' },
    { duration: '30s', format: 'MP4', resolution: '1920x1080' },
  ],
};

export default function MediaBrief() {
  const [selectedProducts, setSelectedProducts] = useState<string[]>(['dsp-display', 'sp']);
  const [briefName, setBriefName] = useState('');
  const [uploadedAssets, setUploadedAssets] = useState<any[]>([]);

  const toggleProduct = (productId: string) => {
    setSelectedProducts((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const handleSaveBrief = () => {
    toast.success('Media brief saved successfully!');
  };

  const handleExportBrief = () => {
    toast.success('Media brief exported as PDF!');
  };

  const handleAssetUpload = (type: string) => {
    toast.info(`Upload ${type} asset functionality would be integrated here`);
    // Simulating asset upload
    setUploadedAssets([
      ...uploadedAssets,
      {
        id: Date.now(),
        type,
        name: `${type}_asset_${Date.now()}.jpg`,
        size: '2.4 MB',
        uploadDate: new Date().toLocaleDateString(),
      },
    ]);
  };

  const removeAsset = (id: number) => {
    setUploadedAssets(uploadedAssets.filter((asset) => asset.id !== id));
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Media Brief</h1>
          <p className="text-gray-600 mt-1">
            Create comprehensive media briefs for your Amazon Ads campaigns
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="gap-2" onClick={handleExportBrief}>
            <Download className="h-4 w-4" />
            Export PDF
          </Button>
          <Button onClick={handleSaveBrief} className="gap-2 bg-[#4A6FA5] hover:bg-[#2C4A75]">
            <Save className="h-4 w-4" />
            Save Brief
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Campaign Overview */}
          <Card>
            <CardHeader>
              <CardTitle>Campaign Overview</CardTitle>
              <CardDescription>Basic campaign information and objectives</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="brief-name">Brief Name</Label>
                  <Input
                    id="brief-name"
                    placeholder="e.g., Q3 Product Launch Campaign"
                    value={briefName}
                    onChange={(e) => setBriefName(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="brand">Brand/Product</Label>
                  <Input id="brand" placeholder="Enter brand name" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="objective">Campaign Objective</Label>
                <Select>
                  <SelectTrigger id="objective">
                    <SelectValue placeholder="Select primary objective" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="awareness">Brand Awareness</SelectItem>
                    <SelectItem value="consideration">Consideration & Engagement</SelectItem>
                    <SelectItem value="conversion">Purchase & Conversion</SelectItem>
                    <SelectItem value="loyalty">Customer Loyalty</SelectItem>
                    <SelectItem value="full-funnel">Full Funnel</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Campaign Description</Label>
                <Textarea
                  id="description"
                  placeholder="Provide a detailed description of your campaign goals, target audience, and key messages..."
                  rows={4}
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="start-date">Start Date</Label>
                  <Input id="start-date" type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="end-date">End Date</Label>
                  <Input id="end-date" type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="budget">Total Budget</Label>
                  <Input id="budget" type="number" placeholder="100000" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Ad Products Selection */}
          <Card>
            <CardHeader>
              <CardTitle>Amazon Ad Products</CardTitle>
              <CardDescription>Select the ad products for this campaign</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {adProducts.map((product) => (
                  <div
                    key={product.id}
                    className={`flex items-center justify-between p-4 rounded-lg border-2 transition-all cursor-pointer ${
                      selectedProducts.includes(product.id)
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 bg-white hover:border-gray-300'
                    }`}
                    onClick={() => toggleProduct(product.id)}
                  >
                    <div className="flex items-center gap-3">
                      <Switch
                        checked={selectedProducts.includes(product.id)}
                        onCheckedChange={() => toggleProduct(product.id)}
                      />
                      <div>
                        <p className="font-medium text-gray-900">{product.name}</p>
                        <p className="text-sm text-gray-600">{product.category}</p>
                      </div>
                    </div>
                    <Badge variant="outline">{product.category}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Target Audience */}
          <Card>
            <CardHeader>
              <CardTitle>Target Audience</CardTitle>
              <CardDescription>Define your audience targeting criteria</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="age-range">Age Range</Label>
                  <Select>
                    <SelectTrigger id="age-range">
                      <SelectValue placeholder="Select age range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="18-24">18-24</SelectItem>
                      <SelectItem value="25-34">25-34</SelectItem>
                      <SelectItem value="35-44">35-44</SelectItem>
                      <SelectItem value="45-54">45-54</SelectItem>
                      <SelectItem value="55+">55+</SelectItem>
                      <SelectItem value="all">All Ages</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gender">Gender</Label>
                  <Select>
                    <SelectTrigger id="gender">
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All</SelectItem>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="interests">Interests & Behaviors</Label>
                <Textarea
                  id="interests"
                  placeholder="e.g., Electronics enthusiasts, Prime members, frequent shoppers..."
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="geography">Geographic Targeting</Label>
                <Input id="geography" placeholder="e.g., United States, Urban areas" />
              </div>
            </CardContent>
          </Card>

          {/* Creative Assets */}
          <Card>
            <CardHeader>
              <CardTitle>Creative Assets</CardTitle>
              <CardDescription>Upload and manage campaign creative assets</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-3 gap-4">
                <Button
                  variant="outline"
                  className="h-32 flex-col gap-2 hover:bg-blue-50 hover:border-blue-300"
                  onClick={() => handleAssetUpload('image')}
                >
                  <ImageIcon className="h-8 w-8 text-gray-400" />
                  <span className="text-sm">Upload Images</span>
                </Button>
                <Button
                  variant="outline"
                  className="h-32 flex-col gap-2 hover:bg-purple-50 hover:border-purple-300"
                  onClick={() => handleAssetUpload('video')}
                >
                  <Video className="h-8 w-8 text-gray-400" />
                  <span className="text-sm">Upload Videos</span>
                </Button>
                <Button
                  variant="outline"
                  className="h-32 flex-col gap-2 hover:bg-green-50 hover:border-green-300"
                  onClick={() => handleAssetUpload('document')}
                >
                  <FileText className="h-8 w-8 text-gray-400" />
                  <span className="text-sm">Upload Documents</span>
                </Button>
              </div>

              {uploadedAssets.length > 0 && (
                <div className="space-y-2 mt-4">
                  <Label>Uploaded Assets</Label>
                  <div className="space-y-2">
                    {uploadedAssets.map((asset) => (
                      <div
                        key={asset.id}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                      >
                        <div className="flex items-center gap-3">
                          {asset.type === 'image' && <ImageIcon className="h-5 w-5 text-blue-600" />}
                          {asset.type === 'video' && <Video className="h-5 w-5 text-purple-600" />}
                          {asset.type === 'document' && <FileText className="h-5 w-5 text-green-600" />}
                          <div>
                            <p className="text-sm font-medium text-gray-900">{asset.name}</p>
                            <p className="text-xs text-gray-600">
                              {asset.size} • {asset.uploadDate}
                            </p>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeAsset(asset.id)}
                        >
                          <X className="h-4 w-4 text-gray-400" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Key Messages */}
          <Card>
            <CardHeader>
              <CardTitle>Key Messages & Copy</CardTitle>
              <CardDescription>Define your campaign messaging</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="headline">Primary Headline</Label>
                <Input
                  id="headline"
                  placeholder="Enter your main campaign headline"
                  maxLength={80}
                />
                <p className="text-xs text-gray-500">Max 80 characters</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="tagline">Tagline/Subheadline</Label>
                <Input
                  id="tagline"
                  placeholder="Supporting message or tagline"
                  maxLength={120}
                />
                <p className="text-xs text-gray-500">Max 120 characters</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="body-copy">Body Copy</Label>
                <Textarea
                  id="body-copy"
                  placeholder="Main advertising copy and message details..."
                  rows={5}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="cta">Call to Action</Label>
                <Select>
                  <SelectTrigger id="cta">
                    <SelectValue placeholder="Select CTA" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="shop-now">Shop Now</SelectItem>
                    <SelectItem value="learn-more">Learn More</SelectItem>
                    <SelectItem value="buy-now">Buy Now</SelectItem>
                    <SelectItem value="explore">Explore</SelectItem>
                    <SelectItem value="discover">Discover</SelectItem>
                    <SelectItem value="custom">Custom</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Brief Status */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Brief Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Status</span>
                <Badge className="bg-yellow-100 text-yellow-800">Draft</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Created</span>
                <span className="text-sm font-medium">Feb 20, 2026</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Last Modified</span>
                <span className="text-sm font-medium">Today</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Completion</span>
                <span className="text-sm font-medium">65%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 w-[65%]" />
              </div>
            </CardContent>
          </Card>

          {/* Creative Specifications */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Creative Specs</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="dsp-display">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="dsp-display">Display</TabsTrigger>
                  <TabsTrigger value="dsp-video">Video</TabsTrigger>
                </TabsList>
                <TabsContent value="dsp-display" className="space-y-2">
                  {creativeSpecifications['dsp-display'].map((spec, index) => (
                    <div key={index} className="p-2 bg-gray-50 rounded text-sm">
                      <p className="font-medium">{spec.size}</p>
                      <p className="text-xs text-gray-600">{spec.name}</p>
                    </div>
                  ))}
                </TabsContent>
                <TabsContent value="dsp-video" className="space-y-2">
                  {creativeSpecifications['dsp-video'].map((spec, index) => (
                    <div key={index} className="p-2 bg-gray-50 rounded text-sm">
                      <p className="font-medium">{spec.duration}</p>
                      <p className="text-xs text-gray-600">
                        {spec.format} • {spec.resolution}
                      </p>
                    </div>
                  ))}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Best Practices */}
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-base text-blue-900">Best Practices</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-blue-800">
              <div className="flex gap-2">
                <span>✓</span>
                <p>Use high-quality images (1200x628px minimum)</p>
              </div>
              <div className="flex gap-2">
                <span>✓</span>
                <p>Keep headlines under 80 characters</p>
              </div>
              <div className="flex gap-2">
                <span>✓</span>
                <p>Include clear call-to-action</p>
              </div>
              <div className="flex gap-2">
                <span>✓</span>
                <p>Test multiple creative variations</p>
              </div>
              <div className="flex gap-2">
                <span>✓</span>
                <p>Align messaging with funnel stage</p>
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
                <Upload className="h-4 w-4" />
                Import from Template
              </Button>
              <Button variant="outline" className="w-full justify-start gap-2">
                <FileText className="h-4 w-4" />
                View Examples
              </Button>
              <Button variant="outline" className="w-full justify-start gap-2">
                <Download className="h-4 w-4" />
                Download Checklist
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
