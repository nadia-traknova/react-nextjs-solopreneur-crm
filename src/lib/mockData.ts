import { ActivityLog } from '@/types';

export const mockActivities: ActivityLog[] = [
  {
    id: 'act-1',
    clientId: 'client-1',
    type: 'call',
    title: 'Discovery Call with Sophia Miller',
    content: 'Discussed scope for the upcoming website redesign contract.',
    createdAt: '2 mins ago',
  },
  {
    id: 'act-2',
    clientId: 'client-2',
    type: 'task',
    title: 'Review proposal for Liam Anderson',
    content: 'Finalize pricing tiers and contract terms before sending.',
    dueDate: 'Today, 2:30 PM',
    isCompleted: false,
    createdAt: '15 mins ago',
  },
  {
    id: 'act-3',
    clientId: 'client-3',
    type: 'meeting',
    title: 'Kickoff meeting with Olivia Davis',
    content: 'Project roadmap alignment and asset gathering.',
    createdAt: '1 hour ago',
  }
];