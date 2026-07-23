import Input from "../../../components/common/Input";
import Select from "../../../components/common/Select";
import Switch from "../../../components/common/Switch";

const deviceTypes = [
  { label: "Linux Server", value: "Linux Server" },
  { label: "Windows Server", value: "Windows Server" },
  { label: "Router", value: "Router" },
  { label: "Firewall", value: "Firewall" },
];

const operatingSystems = [
  { label: "Ubuntu 24.04", value: "Ubuntu 24.04" },
  { label: "Ubuntu 22.04", value: "Ubuntu 22.04" },
  { label: "Debian 12", value: "Debian 12" },
  { label: "RHEL 9", value: "RHEL 9" },
  { label: "Windows Server 2022", value: "Windows Server 2022" },
];

const pollingIntervals = [
  { label: "15 Seconds", value: 15 },
  { label: "30 Seconds", value: 30 },
  { label: "1 Minute", value: 60 },
  { label: "5 Minutes", value: 300 },
];

const DeviceForm = ({ formData, onChange }) => {
  return (
    <div className="space-y-8">
      {/* Basic Information */}

      <div>
        <h3 className="mb-4 text-lg font-semibold">Basic Information</h3>

        <div className="grid grid-cols-2 gap-5">
          <Input
            label="Device Name"
            required
            value={formData.name}
            onChange={(e) => onChange("name", e.target.value)}
          />

          <Input
            label="Hostname"
            required
            value={formData.hostname}
            onChange={(e) => onChange("hostname", e.target.value)}
          />
        </div>
      </div>

      {/* Network */}

      <div>
        <h3 className="mb-4 text-lg font-semibold">Network</h3>

        <div className="grid grid-cols-2 gap-5">
          <Input
            label="IP Address"
            required
            placeholder="192.168.1.101"
            value={formData.ip_address}
            onChange={(e) => onChange("ip_address", e.target.value)}
          />

          <Input
            label="Port"
            value={formData.port}
            onChange={(e) => onChange("port", e.target.value)}
          />
        </div>
      </div>

      {/* System */}

      <div>
        <h3 className="mb-4 text-lg font-semibold">System</h3>

        <div className="grid grid-cols-2 gap-5">
          <Select
            label="Device Type"
            value={formData.device_type}
            onChange={(e) => onChange("device_type", e.target.value)}
            options={deviceTypes}
          />

          <Select
            label="Operating System"
            value={formData.operating_system}
            onChange={(e) => onChange("operating_system", e.target.value)}
            options={operatingSystems}
          />
        </div>
      </div>

      {/* Authentication */}

      <div>
        <h3 className="mb-4 text-lg font-semibold">Authentication</h3>

        <div className="grid grid-cols-2 gap-5">
          <Input
            label="Username"
            value={formData.username}
            onChange={(e) => onChange("username", e.target.value)}
          />

          <Input
            type="password"
            label="Password"
            value={formData.password}
            onChange={(e) => onChange("password", e.target.value)}
          />
        </div>
      </div>

      {/* Monitoring */}

      <div>
        <h3 className="mb-4 text-lg font-semibold">Monitoring</h3>

        <div className="space-y-5">
          <Switch
            label="Enable Monitoring"
            checked={formData.monitoring_enabled}
            onChange={(e) => onChange("monitoring_enabled", e.target.checked)}
          />

          <div className="max-w-xs">
            <Select
              label="Polling Interval"
              value={formData.polling_interval}
              onChange={(e) =>
                onChange("polling_interval", Number(e.target.value))
              }
              options={pollingIntervals}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeviceForm;
