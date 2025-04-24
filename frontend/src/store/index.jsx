import create from 'zustand';
import { fetchGroups, fetchMetrics } from '../api';

export const useStore = create(set => ({
  groups: [],
  metrics: [],
  selectedGroup: null,
  selectedNode: null,
  nodes: [],
  setSelectedGroup: groupId => set({ selectedGroup: groupId }),
  setSelectedNode: node => set({ selectedNode: node }),
  fetchAllData: async () => {
    const [groups, metrics] = await Promise.all([fetchGroups(), fetchMetrics()]);
    set({ groups, metrics });
  },
}));