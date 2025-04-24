import React from 'react';
import { useStore } from '../store';

export default function StatusBlock() {
  const { groups, selectedGroup } = useStore();

  const status = groups
    .filter(g => !selectedGroup || g.group_id === selectedGroup)
    .reduce((worst, g) => {
      if (!worst || g.node_status_description === 'CRITICAL') return g;
      if (g.node_status_description === 'DOWN' && worst.node_status_description !== 'CRITICAL') return g;
      return worst;
    }, null);

  return (
    <div className="p-4 bg-white rounded-2xl shadow">
      <h2 className="text-xl font-bold mb-2">Статус сервиса</h2>
      {status ? (
        <div className={`px-2 py-1 border-l-4 border-${status.node_status_color}`}> 
          {status.node_status_description}
        </div>
      ) : 'Нет данных'}
    </div>
  );
}
