import { useState } from "react";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";

const DashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex flex-1 flex-col">
        <Navbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

        <main className="flex-1 p-6">{children}</main>

        <Footer />
      </div>
    </div>
  );
};

export default DashboardLayout;
