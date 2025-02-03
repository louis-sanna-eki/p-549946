import { cn } from "@/lib/utils";

interface NavigationItemProps {
  icon: string;
  title: string;
  badge?: string;
  active?: boolean;
}

export function NavigationItem({ icon, title, badge, active }: NavigationItemProps) {
  return (
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
  );
}