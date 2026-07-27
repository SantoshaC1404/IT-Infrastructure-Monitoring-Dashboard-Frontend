import { Monitor } from "lucide-react";

const SidebarFooter = ({ collapsed }) => {
  return (
    <div className="border-t border-slate-700 p-4">
      {collapsed ? (
        <div className="flex justify-center">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800">
            <Monitor size={18} className="text-slate-400" />
          </div>
        </div>
      ) : (
        <>
          <p className="text-xs text-slate-400">Version 1.0.0</p>

          <p className="mt-1 text-[11px] text-slate-500">© 2026 IT Monitor</p>
        </>
      )}
    </div>
  );
};

export default SidebarFooter;
