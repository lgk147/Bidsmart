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
import bidsmartLogo from 'figma:asset/dd3d780a607eac6dadc9c89baa9767e25c97c25b.png';

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

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside
        className={cn(
          'flex flex-col transition-all duration-300 bg-[#2C4A75] text-white',
          sidebarOpen ? 'w-64' : 'w-20'
        )}
      >
        {/* Logo Header */}
        <div className="flex items-center justify-between h-16 px-4 border-b border-white/10">
          {sidebarOpen ? (
            <img src={bidsmartLogo} alt="Bidsmart" className="h-8 object-contain" />
          ) : (
            <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
              <span className="text-xl font-bold">B</span>
            </div>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-white hover:bg-white/10"
          >
            {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4 px-2">
          <ul className="space-y-1">
            {navigation.map((item) => (
              <li key={item.name}>
                {item.children ? (
                  <div>
                    <button
                      onClick={() => toggleExpanded(item.name)}
                      className={cn(
                        'w-full flex items-center justify-between px-3 py-2.5 rounded-lg transition-colors',
                        'hover:bg-white/10 text-white'
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <item.icon className="h-5 w-5 flex-shrink-0" />
                        {sidebarOpen && <span className="text-sm font-medium">{item.name}</span>}
                      </div>
                      {sidebarOpen && (
                        <ChevronRight
                          className={cn(
                            'h-4 w-4 transition-transform',
                            expandedItems.includes(item.name) && 'rotate-90'
                          )}
                        />
                      )}
                    </button>
                    {sidebarOpen && expandedItems.includes(item.name) && (
                      <ul className="mt-1 ml-6 space-y-1">
                        {item.children.map((child) => (
                          <li key={child.name}>
                            <Link
                              to={child.href}
                              className={cn(
                                'flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-sm',
                                isActive(child.href)
                                  ? 'bg-white/20 text-white font-medium'
                                  : 'text-white/80 hover:bg-white/10 hover:text-white'
                              )}
                            >
                              <child.icon className="h-4 w-4 flex-shrink-0" />
                              <span>{child.name}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={cn(
                      'flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors',
                      isActive(item.href)
                        ? 'bg-white/20 text-white font-medium'
                        : 'text-white/80 hover:bg-white/10 hover:text-white'
                    )}
                  >
                    <item.icon className="h-5 w-5 flex-shrink-0" />
                    {sidebarOpen && <span className="text-sm font-medium">{item.name}</span>}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* User Info */}
        {sidebarOpen && (
          <div className="p-4 border-t border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <span className="text-sm font-medium">A</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">Admin User</p>
                <p className="text-xs text-white/60 truncate">admin@bidsmart.com</p>
              </div>
            </div>
          </div>
        )}
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}
