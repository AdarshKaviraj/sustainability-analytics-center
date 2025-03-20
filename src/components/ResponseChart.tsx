
import React from 'react';
import { MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Area, 
  AreaChart, 
  ResponsiveContainer, 
  XAxis, 
  YAxis, 
  Tooltip, 
  CartesianGrid 
} from 'recharts';

const data = [
  { week: 'Week 1', value: 20 },
  { week: '', value: 22 },
  { week: '', value: 20 },
  { week: '', value: 25 },
  { week: '', value: 30 },
  { week: '', value: 40 },
  { week: '', value: 48 },
  { week: 'Week 2', value: 50 },
  { week: '', value: 40 },
  { week: '', value: 30 },
  { week: '', value: 28 },
  { week: '', value: 32 },
  { week: '', value: 34 },
  { week: '', value: 36 },
  { week: '', value: 38 },
  { week: '', value: 35 },
  { week: '', value: 34 },
  { week: 'Week 3', value: 32 },
  { week: '', value: 30 },
];

interface ResponseChartProps {
  rate: string;
  trend: string;
}

const ResponseChart: React.FC<ResponseChartProps> = ({ rate, trend }) => {
  return (
    <div className="border rounded-md p-5 mt-5 hover-lift animate-fade-in bg-white">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-sm font-medium text-gray-700">Response Rate</h3>
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
          <h2 className="text-3xl font-bold">{rate}</h2>
          <span className="text-sm text-metric-positive ml-2">{trend}</span>
        </div>
        
        <div className="h-60 mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{ top: 5, right: 5, left: 0, bottom: 5 }}
            >
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#90CAC4" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#90CAC4" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <CartesianGrid vertical={false} stroke="#f0f0f0" />
              <XAxis 
                dataKey="week" 
                axisLine={false}
                tickLine={false}
                tickMargin={10}
                tick={{ fontSize: 12, fill: '#718096' }}
              />
              <YAxis 
                domain={[10, 50]} 
                ticks={[10, 20, 30, 40, 50]} 
                axisLine={false}
                tickLine={false}
                tickMargin={10}
                tick={{ fontSize: 12, fill: '#718096' }}
                tickFormatter={(value) => `${value}%`}
              />
              <Tooltip 
                formatter={(value: number) => [`${value}%`, 'Response Rate']}
                contentStyle={{ 
                  borderRadius: '8px', 
                  border: 'none', 
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                  padding: '8px 12px',
                }}
              />
              <Area 
                type="monotone" 
                dataKey="value" 
                stroke="#90CAC4" 
                fillOpacity={1} 
                fill="url(#colorValue)" 
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ResponseChart;
