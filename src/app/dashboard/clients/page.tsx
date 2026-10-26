'use client'; // We need this because filtering requires interactive useState hooks!

import React, { useState } from 'react';
import { Search, UserPlus, Filter } from 'lucide-react';
import { Client } from '@/types';

// Seed mock data specifically for our filter exercise
const initialClients: Client[] = [
  { id: '1', name: 'Sophia Miller', email: 'sophia@millerco.com', companyName: 'Miller Co', status: 'active', createdAt: '2026-01-15' },
  { id: '2', name: 'Liam Anderson', email: 'liam@andersonltd.com', companyName: 'Anderson Ltd', status: 'inactive', createdAt: '2026-03-22' },
  { id: '3', name: 'Olivia Davis', email: 'olivia@davisgroup.com', companyName: 'Davis Group', status: 'inactive', createdAt: '2026-05-10' },
  { id: '4', name: 'Noah Wilson', email: 'noah@wilsonent.com', companyName: 'Wilson Enterprises', status: 'active', createdAt: '2026-06-01' },
];

export default function ClientsPage() {
  // 1. Core Reactive States
  const [clients] = useState<Client[]>(initialClients);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'active' | 'inactive'>('all');

  // 2. DERIVED STATE (The React Way vs Angular Pipe/Lifecycle)
  // We do NOT store filtered items in a separate state. We compute them on every single render loop execution!
  const filteredClients = clients.filter((client) => {
    const matchesSearch = 
      client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.companyName.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = 
      statusFilter === 'all' || client.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Clients Portal</h1>
          <p className="text-slate-500 text-sm">Manage client relationships, pipelines, and corporate accounts.</p>
        </div>
        <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl text-sm font-medium transition shadow-sm">
          <UserPlus className="w-4 h-4" />
          <span>Add Client</span>
        </button>
      </div>

      {/* Filter and Control Bar Layout */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search clients or companies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition"
          />
        </div>

        <div className="flex items-center space-x-2 w-full md:w-auto">
          <Filter className="w-4 h-4 text-slate-400 hidden md:block" />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as any)}
            className="w-full md:w-44 px-3 py-2 border border-slate-200 rounded-lg text-sm bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition"
          >
            <option value="all">All Statuses</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
      </div>

      {/* Clients Data Table */}
      <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-100 text-xs font-semibold text-slate-500 uppercase tracking-wider">
              <th className="px-6 py-4">Client / Company</th>
              <th className="px-6 py-4">Email</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm">
            {filteredClients.length === 0 ? (
              <tr>
                <td colSpan={4} className="text-center py-12 text-slate-400 font-medium">
                  No clients match your search filter criteria.
                </td>
              </tr>
            ) : (
              filteredClients.map((client) => (
                <tr key={client.id} className="hover:bg-slate-50/50 transition">
                  <td className="px-6 py-4">
                    <div className="font-semibold text-slate-900">{client.name}</div>
                    <div className="text-xs text-slate-400">{client.companyName}</div>
                  </td>
                  <td className="px-6 py-4 text-slate-600">{client.email}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                      client.status === 'active' 
                        ? 'bg-emerald-50 text-emerald-700' 
                        : 'bg-slate-100 text-slate-600'
                    }`}>
                      {client.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-blue-600 hover:text-blue-800 font-medium text-xs">View Profile</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}