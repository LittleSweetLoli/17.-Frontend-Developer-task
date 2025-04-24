import create from 'zustand';
import { fetchGroups, fetchMetrics } from '../api';

export const useStore = create(set => ({
  groups: [],
  metrics: [],
  selectedGroup: null,
  selectedNode: null,

  setSelectedGroup: groupId =>
    set({ selectedGroup: groupId, selectedNode: null }),

  setSelectedNode: node =>
    set({ selectedNode: node /* , selectedGroup: null  ✂ */ }),

  fetchAllData: async () => {
    const [groups, metrics] = await Promise.all([
      fetchGroups(),
      fetchMetrics()
    ]);
    set({ groups, metrics });
  }
}));
