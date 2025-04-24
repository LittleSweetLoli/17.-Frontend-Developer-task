export const fetchGroups = async () => {
  const res = await fetch('/api/groups');
  return res.json();
};

export const fetchMetrics = async () => {
  const res = await fetch('/api/metrics');
  return res.json();
};
