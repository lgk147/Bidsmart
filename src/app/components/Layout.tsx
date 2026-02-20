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
    <div className="flex h-screen bg-[#0A0F1E]">
      {/* Sidebar */}
      <aside
        className={cn(
          'flex flex-col border-r border-gray-800 bg-[#0F1624] transition-all duration-300',
          sidebarOpen ? 'w-64' : 'w-20'
        )}
      >
        {/* Logo */}
        <div className="flex h-16 items-center justify-between border-b border-gray-800 px-4">
          {sidebarOpen ? (
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#FF6B35] to-[#F7931E]">
                <span className="text-lg font-bold text-white">B</span>
              </div>
              <div>
                <h1 className="text-lg font-bold text-white">Bidsmart</h1>
                <p className="text-[10px] text-gray-400">by Hiveminds</p>
              </div>
            </div>
          ) : (
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#FF6B35] to-[#F7931E]">
              <span className="text-lg font-bold text-white">B</span>
            </div>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-gray-400 hover:text-white"
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 overflow-y-auto p-3">
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
                        'text-gray-300 hover:bg-gray-800 hover:text-white'
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
                      <div className="ml-4 mt-1 space-y-1 border-l border-gray-800 pl-3">
                        {item.children.map((child) => {
                          const isChildActive = location.pathname === child.href;
                          return (
                            <Link
                              key={child.name}
                              to={child.href}
                              className={cn(
                                'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                                isChildActive
                                  ? 'bg-gradient-to-r from-[#FF6B35] to-[#F7931E] text-white'
                                  : 'text-gray-400 hover:bg-gray-800 hover:text-white'
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
                        ? 'bg-gradient-to-r from-[#FF6B35] to-[#F7931E] text-white'
                        : 'text-gray-300 hover:bg-gray-800 hover:text-white'
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
        <div className="border-t border-gray-800 p-3">
          <div
            className={cn(
              'flex items-center gap-3 rounded-lg bg-gray-800 p-3',
              !sidebarOpen && 'justify-center'
            )}
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#FF6B35] to-[#F7931E] text-sm font-semibold text-white">
              A
            </div>
            {sidebarOpen && (
              <div className="flex-1 overflow-hidden">
                <p className="truncate text-sm font-medium text-white">Admin User</p>
                <p className="truncate text-xs text-gray-400">admin@bidsmart.io</p>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}
