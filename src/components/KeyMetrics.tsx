
import React from 'react';
import MetricsCard from './MetricsCard';
import ResponseChart from './ResponseChart';

const KeyMetrics: React.FC = () => {
  return (
    <div className="animate-slide-in">
      <h2 className="text-2xl font-semibold mb-5">Supply Chain Key Metrics</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricsCard 
          title="Total Supply Chain Emissions" 
          value="400,200" 
          subValue="tCO₂e" 
          trend="-10%" 
          trendDirection="down" 
        />
        
        <MetricsCard 
          title="Pending Submissions" 
          value="15" 
          subValue="Suppliers" 
          trend="-10%" 
          trendDirection="down" 
        />
        
        <MetricsCard 
          title="Complete Emissions Submissions" 
          value="88" 
          subValue="Supplier Submissions" 
          trend="+0.2%" 
          trendDirection="up" 
        />
        
        <MetricsCard 
          title="Renewable Energy Adoption" 
          value="35%" 
          trend="+20.3%" 
          trendDirection="up" 
        />
      </div>
      
      <h3 className="text-xl font-medium mt-6 mb-2">Email Workflow Performance Over Time</h3>
      
      <ResponseChart rate="45%" trend="+3%" />
    </div>
  );
};

export default KeyMetrics;
