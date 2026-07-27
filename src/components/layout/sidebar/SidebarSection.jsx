import SidebarItem from "./SidebarItem";

const SidebarSection = ({ section, collapsed }) => {
  return (
    <div className="mb-6">
      {!collapsed && (
        <h3
          className="
            mb-3
            px-3
            text-[11px]
            font-bold
            uppercase
            tracking-[0.15em]
            text-slate-500
          "
        >
          {section.title}
        </h3>
      )}

      <div className="space-y-1">
        {section.items.map((item) => (
          <SidebarItem key={item.path} item={item} collapsed={collapsed} />
        ))}
      </div>
    </div>
  );
};

export default SidebarSection;
