import React from 'react';
import { useStore } from '../store';

export default function GeneralInfoBlock() {
  const { groups, selectedGroup } = useStore();

  const filtered = groups.filter(
    g => !selectedGroup || g.group_id === selectedGroup
  );
  const uniqueNodes = Array.from(
    new Map(filtered.map(g => [g.node_id, g])).values()
  );
  if (uniqueNodes.length === 0) {
    return (
      <div className="p-4 bg-white rounded-2xl shadow">
        <h2 className="text-xl font-bold mb-2">Общая информация</h2>
        <div>Нет данных</div>
      </div>
    );
  }

  const severity = {
    CRITICAL: 3,
    DOWN:     2,
    UP:       1,
    UNKNOWN:  0
  };

  const worst = uniqueNodes.reduce((acc, node) => {
    if (!acc || severity[node.node_status_description] > severity[acc.node_status_description]) {
      return node;
    }
    return acc;
  }, null);

  return (
    <div className="p-4 bg-white rounded-2xl shadow">
      <h2 className="text-xl font-bold mb-2">Общая информация</h2>
      <div className="space-y-1">
        <p><strong>Наихудший статус:</strong></p>
        <div
          className={`px-2 py-1 border-l-4`}
          style={{ borderColor: worst.node_status_color }}
        >
          {worst.node_status_description}
        </div>
      </div>
    </div>
  );
}
