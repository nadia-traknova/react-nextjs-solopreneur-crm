'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { X } from 'lucide-react';
import { clientSchema, ClientFormValues } from '@/lib/validations';

interface AddClientModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddClient: (values: ClientFormValues) => void;
}

export default function AddClientModal({ isOpen, onClose, onAddClient }: AddClientModalProps) {
  // Initialize React Hook Form with Zod integration
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ClientFormValues>({
    resolver: zodResolver(clientSchema),
    defaultValues: {
      name: '',
      email: '',
      companyName: '',
      status: 'active',
    },
  });

  if (!isOpen) return null;

  const onSubmit = async (data: ClientFormValues) => {
    // Simulate minor network delay for professional presentation feel
    await new Promise((resolve) => setTimeout(resolve, 600));
    onAddClient(data);
    reset(); // Reset fields
    onClose(); // Close slider
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end bg-slate-950/40 backdrop-blur-xs">
      {/* Slide-over Container */}
      <div className="w-full max-w-md h-full bg-white shadow-xl flex flex-col p-6 animate-in slide-in-from-right duration-200">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div>
            <h2 className="text-lg font-bold text-slate-900">Create New Client</h2>
            <p className="text-xs text-slate-500">Add operational details to initiate pipeline tracks.</p>
          </div>
          <button onClick={onClose} className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-slate-600 transition">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Submission Execution */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 flex-1 mt-6">
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Full Name</label>
            <input
              type="text"
              {...register('name')}
              className={`w-full px-3 py-2 border rounded-lg text-sm bg-slate-50 focus:bg-white focus:outline-hidden focus:ring-2 transition ${
                errors.name ? 'border-rose-500 focus:ring-rose-500/20' : 'border-slate-200 focus:ring-blue-500/20'
              }`}
            />
            {errors.name && <p className="text-xs text-rose-600 font-medium mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Email Address</label>
            <input
              type="email"
              {...register('email')}
              className={`w-full px-3 py-2 border rounded-lg text-sm bg-slate-50 focus:bg-white focus:outline-hidden focus:ring-2 transition ${
                errors.email ? 'border-rose-500 focus:ring-rose-500/20' : 'border-slate-200 focus:ring-blue-500/20'
              }`}
            />
            {errors.email && <p className="text-xs text-rose-600 font-medium mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Company Association</label>
            <input
              type="text"
              {...register('companyName')}
              className={`w-full px-3 py-2 border rounded-lg text-sm bg-slate-50 focus:bg-white focus:outline-hidden focus:ring-2 transition ${
                errors.companyName ? 'border-rose-500 focus:ring-rose-500/20' : 'border-slate-200 focus:ring-blue-500/20'
              }`}
            />
            {errors.companyName && <p className="text-xs text-rose-600 font-medium mt-1">{errors.companyName.message}</p>}
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Account Status</label>
            <select
              {...register('status')}
              className="w-full px-3 py-2 border border-slate-200 bg-slate-50 rounded-lg text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 transition"
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>

          {/* Sticky Actions Footer */}
          <div className="pt-6 border-t border-slate-100 flex items-center justify-end space-x-3 absolute bottom-6 left-6 right-6 bg-white">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-slate-200 hover:bg-slate-50 rounded-xl text-sm font-medium text-slate-700 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-xl text-sm font-medium transition shadow-sm flex items-center"
            >
              {isSubmitting ? 'Creating...' : 'Save Client'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
