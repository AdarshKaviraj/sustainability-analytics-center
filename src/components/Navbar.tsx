
import React from 'react';
import { Menu, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  return (
    <header className="w-full bg-navbar flex items-center justify-between px-4 py-2 h-16 animate-fade-in">
      <div className="flex items-center">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={toggleSidebar}
          className="text-white hover:bg-white/10 mr-2"
        >
          <Menu className="h-5 w-5" />
        </Button>
        <div className="text-navbar-foreground text-lg font-medium ml-2">Home Agent</div>
      </div>
      
      <Button 
        variant="outline" 
        className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all-medium rounded-md flex items-center gap-2"
      >
        <Sparkles className="h-4 w-4" />
        <span>Copilot</span>
      </Button>
    </header>
  );
};

export default Navbar;
