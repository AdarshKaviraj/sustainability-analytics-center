
import React from 'react';
import { MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MetricsCardProps {
  title: string;
  value: string;
  subValue?: string;
  trend: string;
  trendDirection: 'up' | 'down' | 'neutral';
}

const MetricsCard: React.FC<MetricsCardProps> = ({
  title,
  value,
  subValue,
  trend,
  trendDirection
}) => {
  const getTrendColor = () => {
    if (trendDirection === 'up') return 'text-metric-positive';
    if (trendDirection === 'down') return 'text-metric-negative';
    return 'text-metric-neutral';
  };

  return (
    <div className="border rounded-md p-5 hover-lift animate-fade-in bg-white">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-sm font-medium text-gray-700">{title}</h3>
        <Button 
          variant="ghost" 
          size="icon" 
          className="h-6 w-6 text-gray-400 hover:text-gray-600 hover:bg-gray-100"
        >
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="flex flex-col">
        <div className="flex items-baseline">
          <h2 className="text-3xl font-bold">{value}</h2>
          {subValue && (
            <span className="text-sm text-gray-500 ml-1">{subValue}</span>
          )}
        </div>
        
        <div className={`text-sm mt-1 ${getTrendColor()}`}>
          {trend}
        </div>
      </div>
    </div>
  );
};

export default MetricsCard;
