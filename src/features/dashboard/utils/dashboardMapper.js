export const toDashboardSummary = (data = {}) => ({
  totalDevices: Number(data.total_devices ?? data.totalDevices ?? 0),

  onlineDevices: Number(data.online_devices ?? data.onlineDevices ?? 0),

  offlineDevices: Number(data.offline_devices ?? data.offlineDevices ?? 0),

  monitoringEnabled: Number(
    data.monitoring_enabled ?? data.monitoringEnabled ?? 0,
  ),

  monitoringDisabled: Number(
    data.monitoring_disabled ?? data.monitoringDisabled ?? 0,
  ),

  alerts: Number(data.alerts ?? data.alerts ?? 0),

  deviceTypes: data.device_types ?? data.deviceTypes ?? {},

  criticalDevices: Number(
    data.critical_devices ??
      data.criticalDevices ??
      data.critical_alerts ??
      data.criticalAlerts ??
      0,
  ),

  criticalAlerts: Number(
    data.critical_alerts ??
      data.criticalAlerts ??
      data.critical_devices ??
      data.criticalDevices ??
      0,
  ),
});

const extractDevices = (payload) => {
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload.devices)) return payload.devices;
  if (Array.isArray(payload.data)) return payload.data;
  return [];
};

export const toDashboardDevices = (data) => {
  const devices = extractDevices(data);

  return devices.map((device) => ({
    ...device,
    cpu_usage: Number(device.cpu_usage ?? 0),
    memory_usage: Number(device.memory_usage ?? 0),
    disk_usage: Number(device.disk_usage ?? 0),
  }));
};
