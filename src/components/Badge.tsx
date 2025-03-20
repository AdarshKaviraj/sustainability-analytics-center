
import React from 'react';
import { cn } from '@/lib/utils';

type BadgeVariant = 'high' | 'medium' | 'low';

interface BadgeProps {
  variant: BadgeVariant;
  value: string | number;
}

const Badge: React.FC<BadgeProps> = ({ variant, value }) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'high':
        return 'text-sustainability-high border-sustainability-high/30 bg-sustainability-high/10';
      case 'medium':
        return 'text-sustainability-medium border-sustainability-medium/30 bg-sustainability-medium/10';
      case 'low':
        return 'text-sustainability-low border-sustainability-low/30 bg-sustainability-low/10';
      default:
        return 'text-gray-600 border-gray-300 bg-gray-100';
    }
  };

  const getDot = () => {
    switch (variant) {
      case 'high':
        return 'bg-sustainability-high';
      case 'medium':
        return 'bg-sustainability-medium';
      case 'low':
        return 'bg-sustainability-low';
      default:
        return 'bg-gray-400';
    }
  };

  return (
    <div className={cn(
      'inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium border',
      getVariantClasses()
    )}>
      <div className={cn('w-1.5 h-1.5 rounded-full mr-1.5', getDot())}></div>
      <span>{value}</span>
    </div>
  );
};

export default Badge;
