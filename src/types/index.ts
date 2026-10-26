
export interface Client {
  id: string;
  name: string;
  email: string;
  companyName: string;
  status: 'active' | 'inactive';
  createdAt: string;
}

export interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  rate: number;
}

export type InvoiceStatus = 'draft' | 'pending' | 'paid' | 'overdue';

export interface Invoice {
  id: string;
  clientId: string;
  invoiceNumber: string;
  issueDate: string;
  dueDate: string;
  status: InvoiceStatus;
  items: InvoiceItem[];
  taxRate: number;
}

export type ActivityLogType = 'call' | 'email' | 'meeting' | 'task';

export interface ActivityLog {
  id: string;
  clientId: string;
  type: ActivityLogType;
  title: string;
  content: string;
  dueDate?: string;
  isCompleted?: boolean;
  createdAt: string;
}
