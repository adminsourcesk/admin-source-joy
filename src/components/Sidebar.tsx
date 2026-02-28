import { LayoutDashboard, Users, BarChart3, Settings, Package, Bell, LogOut, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: Users, label: "Users" },
  { icon: Package, label: "Products" },
  { icon: BarChart3, label: "Analytics" },
  { icon: Bell, label: "Notifications" },
  { icon: Settings, label: "Settings" },
];

const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-sidebar border-r border-sidebar-border flex flex-col z-50">
      <div className="p-6 flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
          <Zap className="w-4 h-4 text-primary-foreground" />
        </div>
        <span className="text-lg font-semibold text-sidebar-accent-foreground tracking-tight">
          AdminSource
        </span>
      </div>

      <nav className="flex-1 px-3 space-y-1">
        {navItems.map((item) => (
          <button
            key={item.label}
            className={cn(
              "w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors",
              item.active
                ? "bg-sidebar-accent text-primary"
                : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            )}
          >
            <item.icon className="w-4 h-4" />
            {item.label}
          </button>
        ))}
      </nav>

      <div className="p-3 border-t border-sidebar-border">
        <div className="flex items-center gap-3 px-3 py-2">
          <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-xs font-mono text-muted-foreground">
            AS
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-sidebar-accent-foreground truncate">Admin</p>
            <p className="text-xs text-muted-foreground truncate">admin@source.io</p>
          </div>
          <LogOut className="w-4 h-4 text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
