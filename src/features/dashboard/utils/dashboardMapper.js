export const toDashboardSummary = (data) => ({
    totalDevices: data.total_devices,

    onlineDevices: data.online_devices,

    offlineDevices: data.offline_devices,

    monitoringEnabled: data.monitoring_enabled,

    monitoringDisabled: data.monitoring_disabled,

    deviceTypes: data.device_types ?? {},

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