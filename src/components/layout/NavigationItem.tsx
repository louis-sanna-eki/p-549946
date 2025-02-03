import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

interface NavigationItemProps {
  icon: string;
  title: string;
  badge?: string;
  active?: boolean;
  to: string;
}

export function NavigationItem({ icon, title, badge, to }: NavigationItemProps) {
  const location = useLocation();
  const active = location.pathname === to || (to === "/performance" && location.pathname === "/");

  return (
    <Link to={to}>
      <div className={cn(
        "flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer",
        active ? "bg-sidebar-accent text-sidebar-accent-foreground" : "hover:bg-sidebar-accent/50"
      )}>
        <img src={icon} alt="" className="w-5 h-5" loading="lazy" />
        <span className="flex-grow text-sm font-medium">{title}</span>
        {badge && (
          <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-sidebar-accent text-sidebar-accent-foreground">
            {badge}
          </span>
        )}
      </div>
    </Link>
  );
}