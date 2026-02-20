import { useState } from 'react';
import {
  Plus,
  Search,
  Filter,
  MoreVertical,
  Play,
  Pause,
  Edit,
  Copy,
  Trash2,
  Download,
  Upload,
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from './ui/dialog';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { toast } from 'sonner';

const campaigns = [
  {
    id: '1',
    name: 'Prime Day DSP Campaign',
    type: 'DSP',
    status: 'Active',
    budget: 50000,
    spend: 45280,
    impressions: 1250000,
    clicks: 18750,
    conversions: 1125,
    roas: 5.2,
    startDate: '2024-06-01',
    endDate: '2024-07-15',
  },
  {
    id: '2',
    name: 'Brand Defense - SP',
    type: 'Sponsored Products',
    status: 'Active',
    budget: 35000,
    spend: 32150,
    impressions: 890000,
    clicks: 12460,
    conversions: 892,
    roas: 4.8,
    startDate: '2024-06-10',
    endDate: '2024-08-10',
  },
  {
    id: '3',
    name: 'New Product Launch - SBV',
    type: 'Sponsored Brands Video',
    status: 'Active',
    budget: 30000,
    spend: 28940,
    impressions: 720000,
    clicks: 9860,
    conversions: 685,
    roas: 3.9,
    startDate: '2024-06-15',
    endDate: '2024-07-30',
  },
  {
    id: '4',
    name: 'Retargeting - SD',
    type: 'Sponsored Display',
    status: 'Active',
    budget: 20000,
    spend: 18212,
    impressions: 540000,
    clicks: 7290,
    conversions: 876,
    roas: 6.1,
    startDate: '2024-06-05',
    endDate: '2024-08-05',
  },
  {
    id: '5',
    name: 'Q2 Awareness Campaign',
    type: 'DSP',
    status: 'Paused',
    budget: 25000,
    spend: 15680,
    impressions: 420000,
    clicks: 5460,
    conversions: 328,
    roas: 3.2,
    startDate: '2024-04-01',
    endDate: '2024-06-30',
  },
];

export default function CampaignManager() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [createDialogOpen, setCreateDialogOpen] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState<any>(null);

  const handleCreateCampaign = () => {
    toast.success('Campaign created successfully!');
    setCreateDialogOpen(false);
  };

  const handlePauseCampaign = (campaignName: string) => {
    toast.info(`Campaign "${campaignName}" has been paused`);
  };

  const handleResumeCampaign = (campaignName: string) => {
    toast.success(`Campaign "${campaignName}" has been resumed`);
  };

  const getStatusBadge = (status: string) => {
    const variants: any = {
      Active: 'bg-green-100 text-green-800',
      Paused: 'bg-yellow-100 text-yellow-800',
      Ended: 'bg-gray-100 text-gray-800',
    };
    return <Badge className={variants[status]}>{status}</Badge>;
  };

  const filteredCampaigns = campaigns.filter((campaign) => {
    const matchesSearch = campaign.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = filterType === 'all' || campaign.type === filterType;
    const matchesStatus = filterStatus === 'all' || campaign.status === filterStatus;
    return matchesSearch && matchesType && matchesStatus;
  });

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Campaign Manager</h1>
          <p className="text-gray-600 mt-1">Manage all your Amazon Advertising campaigns</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="gap-2">
            <Upload className="h-4 w-4" />
            Import
          </Button>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export
          </Button>
          <Dialog open={createDialogOpen} onOpenChange={setCreateDialogOpen}>
            <DialogTrigger asChild>
              <Button className="gap-2 bg-[#4A6FA5] hover:bg-[#2C4A75]">
                <Plus className="h-4 w-4" />
                Create Campaign
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Create New Campaign</DialogTitle>
                <DialogDescription>
                  Set up a new Amazon Advertising campaign across different ad products
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="campaign-name">Campaign Name</Label>
                  <Input id="campaign-name" placeholder="e.g., Summer Sale DSP Campaign" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="campaign-type">Campaign Type</Label>
                    <Select>
                      <SelectTrigger id="campaign-type">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dsp">Amazon DSP</SelectItem>
                        <SelectItem value="sp">Sponsored Products</SelectItem>
                        <SelectItem value="sb">Sponsored Brands</SelectItem>
                        <SelectItem value="sbv">Sponsored Brands Video</SelectItem>
                        <SelectItem value="sd">Sponsored Display</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="objective">Campaign Objective</Label>
                    <Select>
                      <SelectTrigger id="objective">
                        <SelectValue placeholder="Select objective" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="awareness">Brand Awareness</SelectItem>
                        <SelectItem value="consideration">Consideration</SelectItem>
                        <SelectItem value="conversion">Conversion</SelectItem>
                        <SelectItem value="loyalty">Loyalty</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="budget">Daily Budget ($)</Label>
                    <Input id="budget" type="number" placeholder="1000" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="bid-strategy">Bidding Strategy</Label>
                    <Select>
                      <SelectTrigger id="bid-strategy">
                        <SelectValue placeholder="Select strategy" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="auto">Automatic</SelectItem>
                        <SelectItem value="manual">Manual</SelectItem>
                        <SelectItem value="dynamic">Dynamic</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="start-date">Start Date</Label>
                    <Input id="start-date" type="date" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="end-date">End Date</Label>
                    <Input id="end-date" type="date" />
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setCreateDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleCreateCampaign} className="bg-[#4A6FA5] hover:bg-[#2C4A75]">
                  Create Campaign
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Filters & Search */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search campaigns..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Campaign Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="DSP">DSP</SelectItem>
                <SelectItem value="Sponsored Products">Sponsored Products</SelectItem>
                <SelectItem value="Sponsored Brands">Sponsored Brands</SelectItem>
                <SelectItem value="Sponsored Brands Video">Sponsored Brands Video</SelectItem>
                <SelectItem value="Sponsored Display">Sponsored Display</SelectItem>
              </SelectContent>
            </Select>
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="Active">Active</SelectItem>
                <SelectItem value="Paused">Paused</SelectItem>
                <SelectItem value="Ended">Ended</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Campaigns Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Campaigns ({filteredCampaigns.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Campaign Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Budget</TableHead>
                <TableHead className="text-right">Spend</TableHead>
                <TableHead className="text-right">Impressions</TableHead>
                <TableHead className="text-right">Clicks</TableHead>
                <TableHead className="text-right">Conversions</TableHead>
                <TableHead className="text-right">ROAS</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCampaigns.map((campaign) => (
                <TableRow key={campaign.id} className="hover:bg-gray-50">
                  <TableCell className="font-medium">{campaign.name}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="text-xs">
                      {campaign.type}
                    </Badge>
                  </TableCell>
                  <TableCell>{getStatusBadge(campaign.status)}</TableCell>
                  <TableCell className="text-right">${campaign.budget.toLocaleString()}</TableCell>
                  <TableCell className="text-right">${campaign.spend.toLocaleString()}</TableCell>
                  <TableCell className="text-right">{campaign.impressions.toLocaleString()}</TableCell>
                  <TableCell className="text-right">{campaign.clicks.toLocaleString()}</TableCell>
                  <TableCell className="text-right">{campaign.conversions.toLocaleString()}</TableCell>
                  <TableCell className="text-right font-medium text-green-600">
                    {campaign.roas.toFixed(1)}x
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="gap-2">
                          <Edit className="h-4 w-4" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem className="gap-2">
                          <Copy className="h-4 w-4" />
                          Duplicate
                        </DropdownMenuItem>
                        {campaign.status === 'Active' ? (
                          <DropdownMenuItem
                            className="gap-2"
                            onClick={() => handlePauseCampaign(campaign.name)}
                          >
                            <Pause className="h-4 w-4" />
                            Pause
                          </DropdownMenuItem>
                        ) : (
                          <DropdownMenuItem
                            className="gap-2"
                            onClick={() => handleResumeCampaign(campaign.name)}
                          >
                            <Play className="h-4 w-4" />
                            Resume
                          </DropdownMenuItem>
                        )}
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="gap-2 text-red-600">
                          <Trash2 className="h-4 w-4" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
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
