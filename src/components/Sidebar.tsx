
import React from 'react';
import { ChevronRight, Home, Building, LayoutDashboard, Database, 
  Briefcase, FileText, Palette, TrendingUp, ShieldCheck, Target, 
  PlayCircle, ShoppingBag, HelpCircle, User } from 'lucide-react';

interface SidebarItemProps {
  icon: React.ElementType;
  label: string;
  expandable?: boolean;
  active?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ 
  icon: Icon, 
  label, 
  expandable = false,
  active = false
}) => {
  return (
    <div className={`flex items-center px-4 py-3 text-sm cursor-pointer transition-all-medium
      ${active ? 'bg-sidebar-accent text-sidebar-primary font-medium' : 'hover:bg-sidebar-accent/60'}`}>
      <Icon className="h-4 w-4 mr-3" />
      <span className="flex-1">{label}</span>
      {expandable && <ChevronRight className="h-4 w-4 opacity-70" />}
    </div>
  );
};

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <aside className={`bg-sidebar border-r border-sidebar-border h-[calc(100vh-4rem)] overflow-y-auto transition-all duration-300 ${isOpen ? 'w-64' : 'w-0'}`}>
      <div className="flex items-center justify-center py-4 border-b border-sidebar-border">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-semibold text-sm">LS</span>
          </div>
          <span className="font-semibold">LatSpace</span>
        </div>
      </div>
      
      <nav className="py-2">
        <SidebarItem icon={Home} label="Home" active={true} />
        <SidebarItem icon={Building} label="My Organisation" expandable />
        <div className="border-t border-sidebar-border my-2"></div>
        
        <SidebarItem icon={LayoutDashboard} label="Dashboard" />
        <SidebarItem icon={Database} label="Data Collection Agent" />
        <SidebarItem icon={Briefcase} label="ERP Agent" />
        <SidebarItem icon={FileText} label="My Reports" expandable />
        <SidebarItem icon={Palette} label="Canvas" />
        <SidebarItem icon={TrendingUp} label="Supply Chain Dashboard" />
        <SidebarItem icon={ShieldCheck} label="Compliance Agent" />
        <SidebarItem icon={Target} label="Materiality Agent" />
        <SidebarItem icon={PlayCircle} label="Act" expandable />
        <SidebarItem icon={ShoppingBag} label="Marketplace" />
        
        <div className="border-t border-sidebar-border my-2"></div>
        
        <SidebarItem icon={HelpCircle} label="Help Center" />
        <SidebarItem icon={User} label="Profile" />
      </nav>
    </aside>
  );
};

export default Sidebar;
