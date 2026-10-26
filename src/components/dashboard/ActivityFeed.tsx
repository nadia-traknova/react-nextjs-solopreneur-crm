'use client'; // Required by Next.js App Router because this component uses interactive client state (useState)

import React, { useState } from 'react';
import { mockActivities } from '@/lib/mockData';
import { Phone, CheckSquare, Users, CheckCircle } from 'lucide-react';

export default function ActivityFeed() {
  // Initialize local component state with our mock data array
  const [activities, setActivities] = useState(mockActivities);

  // Core React State Mutation Handler
  const toggleTaskCompletion = (activityId: string) => {
    // IMMUTABILITY RULE: We must never mutate the array directly!
    // We use .map() to create a brand new array reference.
    const updatedActivities = activities.map((activity) => {
      if (activity.id === activityId) {
        return { ...activity, isCompleted: !activity.isCompleted };
      }
      return activity;
    });

    // This schedules a re-render with the new array pointer
    setActivities(updatedActivities);
  };

  // Helper to map icons dynamically
  const getIcon = (type: string) => {
    switch (type) {
      case 'call': return <Phone className="w-4 h-4 text-blue-500" />;
      case 'task': return <CheckSquare className="w-4 h-4 text-amber-500" />;
      default: return <Users className="w-4 h-4 text-purple-500" />;
    }
  };

  return (
    <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-6 mt-8">
      <h2 className="text-lg font-bold text-slate-900">Tasks & Activity</h2>
      <p className="text-sm text-slate-500 mb-4">Real-time status updates of your business operations.</p>

      <div className="divide-y divide-slate-100">
        {activities.map((activity) => (
          <div key={activity.id} className="py-4 flex items-start justify-between first:pt-0 last:pb-0">
            <div className="flex space-x-3">
              <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mt-0.5">
                {getIcon(activity.type)}
              </div>
              <div>
                <h4 className={`text-sm font-semibold ${activity.isCompleted ? 'line-through text-slate-400' : 'text-slate-900'}`}>
                  {activity.title}
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">{activity.content}</p>
                <span className="inline-block mt-2 text-[10px] font-medium bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                  {activity.createdAt}
                </span>
              </div>
            </div>

            {activity.type === 'task' && (
              <button
                onClick={() => toggleTaskCompletion(activity.id)}
                className={`p-1.5 rounded-lg border transition ${
                  activity.isCompleted 
                    ? 'bg-emerald-50 border-emerald-200 text-emerald-600' 
                    : 'bg-white border-slate-200 text-slate-400 hover:text-slate-600'
                }`}
              >
                <CheckCircle className="w-4 h-4" />
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}