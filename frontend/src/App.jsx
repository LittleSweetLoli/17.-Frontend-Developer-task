import React, { useEffect } from 'react';
import { useStore } from './store';
import StatusBlock from './components/StatusBlock';
import GeneralInfoBlock from './components/GeneralInfoBlock';
import GroupsList from './components/GroupsList';
import NodesList from './components/NodesList';
import NodeDetails from './components/NodeDetails';
import './index.css';

export default function App() {
  const { fetchAllData } = useStore();

  useEffect(() => {
    fetchAllData();
    const interval = setInterval(fetchAllData, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      <div className="space-y-4">
        <StatusBlock />
        <GeneralInfoBlock />
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
