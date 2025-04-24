import React from 'react';
import { useStore } from '../store';
import MetricsChart from './MetricsChart';

export default function NodeDetails() {
  const { selectedNode, metrics } = useStore();

  if (!selectedNode) return <div className="p-4 bg-white rounded-2xl shadow">Выберите ноду</div>;

  const nodeMetrics = metrics.filter(m => m.node_id === selectedNode.node_id);

  return (
    <div className="p-4 bg-white rounded-2xl shadow space-y-4">
      <h2 className="text-xl font-bold">{selectedNode.node_name}</h2>
      <div>
        <p><strong>Интерфейс:</strong> {selectedNode.interface_name}</p>
        <p><strong>Статус:</strong> {selectedNode.node_status_description}</p>
        <p><strong>Админ:</strong> {selectedNode.user_name} ({selectedNode.user_email})</p>
        <p><strong>Приложение:</strong> {selectedNode.application_name}</p>
      </div>
      <MetricsChart data={nodeMetrics} />
    </div>
  );
}