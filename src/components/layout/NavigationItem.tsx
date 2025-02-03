import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface NavigationItemProps {
  icon: LucideIcon;
  title: string;
  badge?: string;
  to: string;
}

export function NavigationItem({ icon: Icon, title, badge, to }: NavigationItemProps) {
  const location = useLocation();
  const active = location.pathname === to || (to === "/performance" && location.pathname === "/");

  return (
    <Link to={to}>
      <div className={cn(
        "flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer",
        active ? "bg-[#4F46E5] text-white" : "text-gray-700 hover:bg-sidebar-accent/50"
      )}>
        <Icon 
          className="w-5 h-5"
          strokeWidth={1.5}
        />
        <span className="flex-grow text-sm font-medium">{title}</span>
        {badge && (
          <span className={cn(
            "px-2 py-0.5 text-xs font-medium rounded-full",
            active ? "bg-white/20 text-white" : "bg-sidebar-accent text-sidebar-accent-foreground"
          )}>
            {badge}
          </span>
        )}
      </div>
    </Link>
  );
}