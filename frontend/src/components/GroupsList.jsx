import React from 'react';
import { useStore } from '../store';

export default function GroupsList() {
  const { groups, selectedGroup, setSelectedGroup } = useStore();

  return (
    <div className="p-4 bg-white rounded-2xl shadow">
      <h2 className="text-xl font-bold mb-2">Группы</h2>
      <ul>
        {groups.map(group => (
          <li
            key={group.group_id}
            className={`cursor-pointer px-2 py-1 rounded ${selectedGroup === group.group_id ? 'bg-blue-100' : ''}`}
            onClick={() => setSelectedGroup(group.group_id)}
          >
            {group.group_name}
          </li>
        ))}
      </ul>
    </div>
  );
}