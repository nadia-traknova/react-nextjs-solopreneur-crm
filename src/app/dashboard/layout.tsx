import React from 'react';
import { LayoutDashboard, Users, FileText, Settings } from 'lucide-react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* 1. Dark Sidebar Panel */}
      <aside className="w-64 bg-slate-950 text-slate-200 flex flex-col justify-between border-r border-slate-800">
        <div className="p-6">
          <div className="flex items-center space-x-2 text-xl font-bold text-white tracking-wide">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-sm">S</div>
            <span>Solopreneur</span>
          </div>
          
          {/* Navigation Links */}
          <nav className="mt-8 space-y-1">
            <a href="/dashboard" className="flex items-center space-x-3 px-4 py-3 rounded-lg bg-slate-900 text-white font-medium transition">
              <LayoutDashboard className="w-5 h-5 text-blue-500" />
              <span>Dashboard</span>
            </a>
            <a href="/dashboard/clients" className="flex items-center space-x-3 px-4 py-3 rounded-lg text-slate-400 hover:bg-slate-900 hover:text-white transition">
              <Users className="w-5 h-5" />
              <span>Clients</span>
            </a>
            <a href="/dashboard/invoices" className="flex items-center space-x-3 px-4 py-3 rounded-lg text-slate-400 hover:bg-slate-900 hover:text-white transition">
              <FileText className="w-5 h-5" />
              <span>Invoices</span>
            </a>
          </nav>
        </div>

        {/* Bottom Sidebar Brand/Settings */}
        <div className="p-4 border-t border-slate-900">
          <a href="/dashboard/settings" className="flex items-center space-x-3 px-4 py-3 rounded-lg text-slate-400 hover:bg-slate-900 hover:text-white transition">
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </a>
        </div>
      </aside>

      {/* 2. Main Content Window */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar Header */}
        <header className="h-16 bg-white border-b border-slate-100 flex items-center justify-end px-8">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-sm font-semibold text-slate-700">
              U
            </div>
            <span className="text-sm font-medium text-slate-700">User Account</span>
          </div>
        </header>

        {/* Dynamically Swapped Route Sub-view Content */}
        <main className="p-8 flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}