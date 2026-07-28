import { FiServer } from "react-icons/fi";

import Input from "../../../components/common/Input";

const DeviceBasicInfo = ({ register, errors }) => {
  return (
    <section>
      <h3 className="mb-5 flex items-center gap-2 text-lg font-semibold text-gray-800">
        <FiServer />
        Device Information
      </h3>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <Input
          label="Device Name"
          required
          placeholder="Ubuntu Server"
          {...register("name")}
          error={errors.name?.message}
        />

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Device Type
          </label>

          <select
            {...register("device_type")}
            className="
              w-full
              rounded-lg
              border
              border-gray-300
              bg-white
              px-4
              py-2.5
              outline-none
              transition
              focus:border-blue-500
              focus:ring-2
              focus:ring-blue-200
            "
          >
            <option value="LINUX">Linux</option>
            <option value="WINDOWS">Windows</option>
          </select>
        </div>

        <Input
          label="IP Address"
          required
          placeholder="192.168.1.100"
          {...register("ip_address")}
          error={errors.ip_address?.message}
        />

        <Input
          label="SSH Port"
          required
          type="number"
          {...register("ssh_port")}
          error={errors.ssh_port?.message}
        />
      </div>
    </section>
  );
};

export default DeviceBasicInfo;
