import { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router';
import {
  LayoutDashboard,
  Megaphone,
  CalendarCheck,
  Database,
  FileText,
  TrendingUp,
  Store,
  BarChart3,
  Target,
  Activity,
  Menu,
  X,
  ChevronRight,
} from 'lucide-react';
import { Button } from './ui/button';
import { cn } from './ui/utils';

const BIDSMART_LOGO = 'https://github.com/lgk147/Bidsmart/raw/main/src/app/bidsmart_trademark.png';

const navigation = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { 
    name: 'Intelligence', 
    icon: Database, 
    children: [
      { name: 'Retail Intelligence', href: '/retail-intelligence', icon: Store },
      { name: 'Ads Intelligence', href: '/ads-intelligence', icon: BarChart3 },
    ]
  },
  { name: 'Campaign Manager', href: '/campaigns', icon: Megaphone },
  { name: 'Planning', href: '/planning', icon: CalendarCheck },
  { name: 'AMC Insights', href: '/amc', icon: Database },
  { name: 'Media Brief', href: '/media-brief', icon: FileText },
  { name: 'Audience Targeting', href: '/targeting', icon: Target },
  { name: 'Bidding Models', href: '/bidding', icon: TrendingUp },
  { name: 'Performance', href: '/performance', icon: Activity },
];

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [expandedItems, setExpandedItems] = useState<string[]>(['Intelligence']);
  const location = useLocation();

  const toggleExpanded = (name: string) => {
    setExpandedItems(prev =>
      prev.includes(name) ? prev.filter(item => item !== name) : [...prev, name]
    );
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside
        className={cn(
          'flex flex-col border-r border-gray-200 bg-white transition-all duration-300 shadow-sm',
          sidebarOpen ? 'w-64' : 'w-20'
        )}
      >
        {/* Logo */}
        <div className="flex h-16 items-center justify-between border-b border-gray-200 px-4 bg-white">
          {sidebarOpen ? (
            <img 
              src={BIDSMART_LOGO} 
              alt="Bidsmart Logo" 
              className="h-12 w-auto object-contain"
            />
          ) : (
            <img 
              src={BIDSMART_LOGO} 
              alt="Bidsmart" 
              className="h-10 w-10 object-contain"
            />
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 overflow-y-auto p-3 bg-white">
          {navigation.map((item) => {
            const isActive = item.href ? location.pathname === item.href : false;
            const hasChildren = 'children' in item && item.children;
            const isExpanded = expandedItems.includes(item.name);

            return (
              <div key={item.name}>
                {hasChildren ? (
                  <>
                    <button
                      onClick={() => toggleExpanded(item.name)}
                      className={cn(
                        'flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                        'text-gray-700 hover:bg-blue-50 hover:text-[#4A6FA5]'
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <item.icon size={20} />
                        {sidebarOpen && <span>{item.name}</span>}
                      </div>
                      {sidebarOpen && (
                        <ChevronRight
                          size={16}
                          className={cn(
                            'transition-transform',
                            isExpanded && 'rotate-90'
                          )}
                        />
                      )}
                    </button>
                    {isExpanded && sidebarOpen && (
                      <div className="ml-4 mt-1 space-y-1 border-l border-gray-200 pl-3">
                        {item.children.map((child) => {
                          const isChildActive = location.pathname === child.href;
                          return (
                            <Link
                              key={child.name}
                              to={child.href}
                              className={cn(
                                'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                                isChildActive
                                  ? 'bg-gradient-to-r from-[#4A6FA5] to-[#6B8DC2] text-white shadow-sm'
                                  : 'text-gray-600 hover:bg-blue-50 hover:text-[#4A6FA5]'
                              )}
                            >
                              <child.icon size={18} />
                              <span>{child.name}</span>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.href!}
                    className={cn(
                      'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                      isActive
                        ? 'bg-gradient-to-r from-[#4A6FA5] to-[#6B8DC2] text-white shadow-sm'
                        : 'text-gray-700 hover:bg-blue-50 hover:text-[#4A6FA5]'
                    )}
                  >
                    <item.icon size={20} />
                    {sidebarOpen && <span>{item.name}</span>}
                  </Link>
                )}
              </div>
            );
          })}
        </nav>

        {/* User Profile */}
        <div className="border-t border-gray-200 p-3 bg-white">
          <div
            className={cn(
              'flex items-center gap-3 rounded-lg bg-gradient-to-br from-[#4A6FA5] to-[#6B8DC2] p-3 shadow-sm',
              !sidebarOpen && 'justify-center'
            )}
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm font-semibold text-[#4A6FA5]">
              A
            </div>
            {sidebarOpen && (
              <div className="flex-1 overflow-hidden">
                <p className="truncate text-sm font-medium text-white">Admin User</p>
                <p className="truncate text-xs text-blue-100">admin@bidsmart.io</p>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto bg-gray-50">
        <Outlet />
      </main>
    </div>
  );
}