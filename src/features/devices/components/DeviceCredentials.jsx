import { FiLock, FiUser } from "react-icons/fi";

import Input from "../../../components/common/Input";

const DeviceCredentials = ({ register, errors }) => {
  return (
    <section>
      <h3 className="mb-5 flex items-center gap-2 text-lg font-semibold text-gray-800">
        <FiUser />
        Credentials
      </h3>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <Input
          label="Username"
          required
          leftIcon={<FiUser />}
          {...register("username")}
          error={errors.username?.message}
        />

        <Input
          label="Password"
          required
          type="password"
          leftIcon={<FiLock />}
          {...register("password")}
          error={errors.password?.message}
        />
      </div>
    </section>
  );
};

export default DeviceCredentials;
