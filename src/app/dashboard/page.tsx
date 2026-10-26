import React from 'react';
import { Users, DollarSign, Clock, AlertCircle } from 'lucide-react';
import MetricCard from '@/components/dashboard/MetricCard';
import ActivityFeed from '@/components/dashboard/ActivityFeed';

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-900">Welcome back, User!</h1>
      <p className="text-slate-500 text-sm">Here is what is happening with your business today.</p>
      
      {/* Dynamic Grid using our Reusable Component */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
        <MetricCard 
          title="Total Revenue"
          value="$1200"
          change="12.5%"
          isPositive={true}
          icon={DollarSign}
        />
        <MetricCard 
          title="Active Clients"
          value="8"
          change="8.1%"
          isPositive={true}
          icon={Users}
        />
        <MetricCard 
          title="Pending Invoices" 
          value="3" 
          change="15.3%" 
          isPositive={false} 
          icon={Clock} 
        />
        <MetricCard 
          title="Overdue Balance" 
          value="$1,200.00" 
          change="4.2%" 
          isPositive={false} 
          icon={AlertCircle} 
        />
      </div>

      {/* Render the interactive activity feed */}
      <ActivityFeed />      
    </div>
  );
}
