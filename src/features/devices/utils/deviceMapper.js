/**
 * ----------------------------------------
 * Device Request Mappers
 * ----------------------------------------
 */

/**
 * Convert form values into
 * Create Device API payload.
 */
export const toCreateDevicePayload = (device) => ({
  name: device.name.trim(),

  device_type: device.device_type,

  ip_address: device.ip_address.trim(),

  ssh_port: Number(device.ssh_port),

  port: Number(device.ssh_port),

  username: device.username.trim(),

  password: device.password,

  monitoring_enabled: device.monitoring_enabled ?? true,
});

/**
 * Convert form values into
 * Update Device API payload.
 *
 * (Currently same as create,
 * but kept separate because
 * update payloads often differ
 * in real projects.)
 */
export const toUpdateDevicePayload = (device) => ({
  name: device.name.trim(),

  device_type: device.device_type,

  ip_address: device.ip_address.trim(),

  ssh_port: Number(device.ssh_port),

  port: Number(device.ssh_port),

  username: device.username.trim(),

  password: device.password,

  monitoring_enabled: device.monitoring_enabled,
});

/**
 * Convert form values into
 * Test Connection API payload.
 */
export const toTestConnectionPayload = (device) => ({
  device_type: device.device_type,

  ip_address: device.ip_address.trim(),

  username: device.username.trim(),

  password: device.password,

  port: Number(device.ssh_port),
});

/**
 * ----------------------------------------
 * Device Response Mappers
 * ----------------------------------------
 */

/**
 * Convert API response
 * into frontend model.
 */
export const toDeviceModel = (device) => ({
  id: device.id,

  name: device.name,

  device_type: device.device_type,

  ip_address: device.ip_address,

  ssh_port: device.ssh_port ?? device.port ?? 22,

  username: device.username,

  monitoring_enabled: device.monitoring_enabled ?? true,

  status: device.status ?? "UNKNOWN",

  last_seen: device.last_seen ?? null,

  created_at: device.created_at,

  updated_at: device.updated_at,
});

/**
 * Convert list response
 * into frontend models.
 */
export const toDeviceListModel = (devices = []) => devices.map(toDeviceModel);
