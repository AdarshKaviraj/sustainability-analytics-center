
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import KeyMetrics from '@/components/KeyMetrics';
import SupplierTable from '@/components/SupplierTable';

const Index: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar toggleSidebar={toggleSidebar} />
      
      <div className="flex flex-1 overflow-hidden">
        <Sidebar isOpen={sidebarOpen} />
        
        <main className={`flex-1 overflow-auto transition-all duration-300 p-6 bg-gray-50`}>
          <div className="max-w-7xl mx-auto">
            <KeyMetrics />
            <SupplierTable />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
