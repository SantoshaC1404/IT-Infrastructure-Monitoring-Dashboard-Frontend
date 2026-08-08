const normalizeNumber = (value) => {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
};

const extractItems = (payload) => {
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload?.items)) return payload.items;
  if (Array.isArray(payload?.data)) return payload.data;
  if (Array.isArray(payload?.results)) return payload.results;
  if (Array.isArray(payload?.history)) return payload.history;
  if (Array.isArray(payload?.critical_devices)) return payload.critical_devices;
  if (Array.isArray(payload?.criticalDevices)) return payload.criticalDevices;

  if (payload && typeof payload === "object") {
    const firstArrayValue = Object.values(payload).find(Array.isArray);
    return firstArrayValue ?? [];
  }

  return [];
};

export const toHistory = (data) => {
  const items = extractItems(data);

  return items.map((item = {}) => ({
    time: item.time ?? item.timestamp ?? item.created_at ?? "",
    cpu: normalizeNumber(item.cpu ?? item.cpu_usage),
    memory: normalizeNumber(item.memory ?? item.memory_usage),
    disk: normalizeNumber(item.disk ?? item.disk_usage),
  }));
};

export const toCriticalDevices = (data) => {
  const devices = extractItems(data);

  return devices.map((device = {}) => ({
    id: device.id ?? device.device_id ?? device._id ?? null,
    name: device.name ?? device.hostname ?? device.device_name ?? "Unknown device",
    ip_address: device.ip_address ?? device.ipAddress ?? device.ip ?? "",
    status: String(device.status ?? device.current_status ?? "critical").toLowerCase(),
    cpu_usage: normalizeNumber(device.cpu_usage ?? device.cpu),
    memory_usage: normalizeNumber(device.memory_usage ?? device.memory),
    disk_usage: normalizeNumber(device.disk_usage ?? device.disk),
    critical_reason:
      device.critical_reason ?? device.reason ?? device.criticalReason ?? "High resource usage",
  }));
};
