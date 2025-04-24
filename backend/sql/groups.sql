SELECT
  g.id AS group_id,
  g.caption AS group_name,
  n.id AS node_id,
  n.caption AS node_name,
  ns.color AS node_status_color,
  ns.description AS node_status_description,
  i.id AS interface_id,
  i.caption AS interface_name,
  ists.color AS interface_status_color,
  ists.description AS interface_status_description,
  a.id AS application_id,
  a.caption AS application_name,
  u.id AS user_id,
  u.firstname || ' ' || u.lastname AS user_name,
  u.email AS user_email
FROM groups g
LEFT JOIN groups_nodes gn ON g.id = gn.group_id
LEFT JOIN nodes n ON gn.node_id = n.id
LEFT JOIN statuses ns ON n.status = ns.id
LEFT JOIN interfaces i ON n.interface = i.id
LEFT JOIN statuses ists ON i.status = ists.id
LEFT JOIN nodes_applications na ON n.id = na.node_id
LEFT JOIN applications a ON na.application_id = a.id
LEFT JOIN users u ON n.admin = u.id
ORDER BY g.id, n.id, i.id, a.id, u.id
