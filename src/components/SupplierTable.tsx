
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Badge from './Badge';

interface Supplier {
  name: string;
  percentage: string;
  emissions: string;
  dataQuality: string;
  sustainabilityScore: {
    value: number;
    rating: 'high' | 'medium' | 'low';
  };
}

const suppliers: Supplier[] = [
  {
    name: 'Acme Corp',
    percentage: '9.69%',
    emissions: '40,703 tCO₂e',
    dataQuality: '98%',
    sustainabilityScore: { value: 85, rating: 'high' }
  },
  {
    name: 'Global Supplies',
    percentage: '8.42%',
    emissions: '15,016 tCO₂e',
    dataQuality: '92%',
    sustainabilityScore: { value: 70, rating: 'medium' }
  },
  {
    name: 'Quick Logistics',
    percentage: '5.12%',
    emissions: '13,860 tCO₂e',
    dataQuality: '88%',
    sustainabilityScore: { value: 50, rating: 'low' }
  },
  {
    name: 'FastTrack Inc.',
    percentage: '2.06%',
    emissions: '5,328 tCO₂e',
    dataQuality: '85%',
    sustainabilityScore: { value: 88, rating: 'high' }
  },
  {
    name: 'Reliable Goods',
    percentage: '0.75%',
    emissions: '26,667 tCO₂e',
    dataQuality: '80%',
    sustainabilityScore: { value: 72, rating: 'medium' }
  }
];

const SupplierTable: React.FC = () => {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="mt-8 animate-slide-in">
      <div 
        className="flex items-center justify-between cursor-pointer mb-4"
        onClick={() => setExpanded(!expanded)}
      >
        <h2 className="text-2xl font-semibold">Supplier Overview</h2>
        <ChevronDown className={`h-5 w-5 transition-transform ${expanded ? 'transform rotate-180' : ''}`} />
      </div>
      
      {expanded && (
        <div className="overflow-x-auto border rounded-md">
          <table className="min-w-full divide-y divide-gray-200 bg-white">
            <thead>
              <tr className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <th className="px-6 py-3 w-1/5">
                  <div className="flex items-center">
                    Supplier Name
                    <ChevronDown className="h-4 w-4 ml-1" />
                  </div>
                </th>
                <th className="px-6 py-3 w-1/5">
                  <div className="flex items-center">
                    % of your emissions
                    <ChevronDown className="h-4 w-4 ml-1" />
                  </div>
                </th>
                <th className="px-6 py-3 w-1/5">
                  <div className="flex items-center">
                    Total Emissions
                    <ChevronDown className="h-4 w-4 ml-1" />
                  </div>
                </th>
                <th className="px-6 py-3 w-1/5">
                  <div className="flex items-center">
                    Data Quality Score
                    <ChevronDown className="h-4 w-4 ml-1" />
                  </div>
                </th>
                <th className="px-6 py-3 w-1/5">
                  <div className="flex items-center">
                    Sustainability Score
                    <ChevronDown className="h-4 w-4 ml-1" />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {suppliers.map((supplier, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-all-fast">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{supplier.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{supplier.percentage}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{supplier.emissions}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{supplier.dataQuality}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Badge 
                      variant={supplier.sustainabilityScore.rating} 
                      value={supplier.sustainabilityScore.value} 
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default SupplierTable;
