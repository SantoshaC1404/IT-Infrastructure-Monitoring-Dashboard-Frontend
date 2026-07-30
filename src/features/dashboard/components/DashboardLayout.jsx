import { useEffect, useState } from "react";

import Navbar from "../../../components/layout/navbar/Navbar";
import Footer from "../../../components/layout/footer/Footer";
import Sidebar from "../../../components/layout/sidebar/Sidebar";

const DashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // const [collapsed, setCollapsed] = useState(false);
  const [collapsed, setCollapsed] = useState(() => {
    const saved = localStorage.getItem("sidebar-collapsed");

    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem("sidebar-collapsed", JSON.stringify(collapsed));
  }, [collapsed]);

  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar
        collapsed={collapsed}
        onClose={() => setSidebarOpen(false)}
        onToggleCollapse={() => setCollapsed(!collapsed)}
      />

      {/* <div className="lg:ml-72 flex min-h-screen flex-col"> */}
      <div
        className={`
          flex
          min-h-screen
          flex-col
          transition-all
          duration-300
          ease-in-out
          ${collapsed ? "lg:ml-20" : "lg:ml-72"}
        `}
      >
        {/* <Navbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} /> */}
        <Navbar
          collapsed={collapsed}
          onToggleCollapse={() => setCollapsed(!collapsed)}
          onMenuClick={() => setSidebarOpen(!sidebarOpen)}
        />

        <main className="flex-1 overflow-y-auto p-6">{children}</main>

        <Footer />
      </div>
    </div>
  );
};

export default DashboardLayout;
