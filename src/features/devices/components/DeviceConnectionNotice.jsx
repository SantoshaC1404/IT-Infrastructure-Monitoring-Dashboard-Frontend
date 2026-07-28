import { FiMonitor } from "react-icons/fi";

const DeviceConnectionNotice = () => {
  return (
    <div className="rounded-xl border border-blue-100 bg-blue-50 p-4">
      <div className="flex items-start gap-3">
        <FiMonitor size={18} className="mt-1 text-blue-600" />

        <div>
          <h4 className="font-medium text-blue-700">Connection Verification</h4>

          <p className="mt-1 text-sm text-blue-600">
            Verify the SSH connection before saving the device. Any changes to
            the connection settings will require a new verification.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DeviceConnectionNotice;
