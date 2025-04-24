import React from 'react';
import { useStore } from '../store';

export default function NodesList() {
  const { groups, selectedGroup, setSelectedNode, metrics } = useStore();

  const raw = selectedGroup
    ? groups.filter(g => g.group_id === selectedGroup)
    : groups;

  const uniqueNodes = Array.from(
    new Map(raw.map(g => [g.node_id, g])).values()
  );

  const getLastMetrics = nodeId =>
    metrics.find(m => m.node_id === nodeId) || null;

  const colorClass = v =>
    v > 95 ? 'text-red-600' :
    v > 85 ? 'text-yellow-500' :
    'text-gray-800';

  return (
    <div className="p-4 bg-white rounded-2xl shadow">
      <h2 className="text-xl font-bold mb-2">Ноды</h2>

      {uniqueNodes.map(node => {
        const m = getLastMetrics(node.node_id);
        return (
          <div
            key={node.node_id}
            onClick={() => setSelectedNode(node)}
            className="mb-2 flex items-center justify-between cursor-pointer bg-gray-100 rounded border-l-4 p-2"
            style={{ borderColor: node.node_status_color }}
          >
            <div className="flex-grow text-center font-semibold">
              {node.node_name}
            </div>

            {m && (
              <div className="text-sm text-right space-y-0.5">
                <div className={colorClass(m.cpu_utilization)}>
                  CPU: {m.cpu_utilization}%
                </div>
                <div className={colorClass(m.memory_utilization)}>
                  RAM: {m.memory_utilization}%
                </div>
                <div className={colorClass(m.disk_utilization)}>
                  Disk: {m.disk_utilization}%
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
