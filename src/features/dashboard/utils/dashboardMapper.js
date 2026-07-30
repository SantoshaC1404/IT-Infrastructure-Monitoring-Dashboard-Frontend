
export const toDashboardSummary = (data) => ({
  totalDevices: data.total_devices,

  onlineDevices: data.online_devices,

  offlineDevices: data.offline_devices,

  monitoringEnabled: data.monitoring_enabled,
});


/*
export const toDashboardSummary = (devices = []) => {
    const totalDevices = devices.length;

    const onlineDevices = devices.filter(
        (device) => device.status === "ONLINE",
    ).length;

    const offlineDevices = devices.filter(
        (device) => device.status === "OFFLINE",
    ).length;

    const monitoringEnabled = devices.filter(
        (device) => device.monitoring_enabled,
    ).length;

    return {
        totalDevices,
        onlineDevices,
        offlineDevices,
        monitoringEnabled,
    };
};
*/