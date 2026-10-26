import React from 'react';
import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: LucideIcon;
}

export default function MetricCard({
  title, 
  value, 
  change, 
  isPositive, 
  icon: Icon, // Renaming to uppercase so React recognizes it as a component
}: MetricCardProps) {
  return (
    <div className="p-6 bg-white rounded-xl border border-slate-100 shadow-sm flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-slate-500">{title}</p>
        <h3 className="text-2xl font-bold text-slate-900 mt-1">{value}</h3>
        <p className={`text-xs font-semibold mt-2 ${isPositive ? 'text-emerald-600' : 'text-rose-600'}`}>
          {isPositive ? '↑' : '↓'} {change} <span className="text-slate-400 font-normal">this month</span>
        </p>
      </div>
      <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100 text-slate-600">
        <Icon className="w-6 h-6 text-blue-600" />
      </div>
    </div>
  );
}