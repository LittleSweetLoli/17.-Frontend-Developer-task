console.log('App loaded')
import React, { useEffect } from 'react';
import { useStore } from './store';
import GroupsList from './components/GroupsList';
import NodesList from './components/NodesList';
import NodeDetails from './components/NodeDetails';
import StatusBlock from './components/StatusBlock';
import './index.css';

export default function App() {
  const { fetchAllData } = useStore();

  console.log('🔥 App loaded');

  useEffect(() => {
    fetchAllData();
    const interval = setInterval(fetchAllData, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      <div className="space-y-4">
        <StatusBlock />
        <GroupsList />
      </div>

      <div>
        <NodesList />
      </div>

      <div>
        <NodeDetails />
      </div>
    </div>
  );
}
