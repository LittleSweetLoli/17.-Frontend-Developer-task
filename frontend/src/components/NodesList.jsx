import React from 'react';
import { useStore } from '../store';

export default function NodesList() {
  const { groups, selectedGroup, setSelectedNode } = useStore();
  const nodes = groups.filter(g => g.group_id === selectedGroup);

  return (
    <div className="p-4 bg-white rounded-2xl shadow">
      <h2 className="text-xl font-bold mb-2">Ноды</h2>
      {nodes.map(group => (
        <div key={group.node_id} className="mb-2">
          <div
            className={`p-2 border-l-4 rounded cursor-pointer bg-gray-100 border-${group.node_status_color}`}
            onClick={() => setSelectedNode(group)}
          >
            <p className="font-semibold">{group.node_name}</p>
          </div>
        </div>
      ))}
    </div>
  );
}