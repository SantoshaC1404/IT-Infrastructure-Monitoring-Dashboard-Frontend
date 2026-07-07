import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Left Section */}

      {/* <div className="hidden lg:flex lg:w-1/2 bg-blue-700 text-white">
        <div className="flex flex-col justify-center px-16">
          <div className="mb-8 text-6xl">🛡️</div>

          <h1 className="text-5xl font-bold leading-tight">
            IT Infrastructure
            <br />
            Monitoring
          </h1>

          <p className="mt-6 text-lg text-blue-100">
            Monitor your servers, Docker containers, services, logs and alerts
            from one place.
          </p>

          <div className="mt-12 space-y-4">
            <div>✔ Live Monitoring</div>

            <div>✔ Docker Management</div>

            <div>✔ SSL Monitoring</div>

            <div>✔ Alert Notifications</div>
          </div>
        </div>
      </div> */}

      {/* Right Section */}

      <div className="flex flex-1 items-center justify-center p-6">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
