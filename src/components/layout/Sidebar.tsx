import { NavigationItem } from "./NavigationItem";
import { ProfileSection } from "./ProfileSection";
import { Separator } from "@/components/ui/separator";
import { BarChart3, TrendingUp, FileText, Files, Settings } from "lucide-react";

const navigationItems = [
  {
    icon: BarChart3,
    title: "Performance",
    to: "/performance"
  },
  {
    icon: TrendingUp,
    title: "Forecast",
    to: "/forecast"
  },
  {
    icon: FileText,
    title: "Reports",
    badge: "12",
    to: "/reports"
  },
  {
    icon: Files,
    title: "Documents",
    badge: "12",
    to: "/documents"
  }
];

export function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-sidebar flex flex-col border-r">
      <div className="p-6">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/fefc4dc743f5437b91c732647225a5b8/acfdf78b419a7ab3cb289d9a0cc074f6df077d5a95dd8c76713bd1b3173eefe1"
          alt="Logo"
          className="h-8"
        />
      </div>
      
      <nav className="flex-1 px-2 py-4">
        {navigationItems.map((item, index) => (
          <NavigationItem
            key={index}
            icon={item.icon}
            title={item.title}
            badge={item.badge}
            to={item.to}
          />
        ))}
      </nav>

      <div className="mt-auto">
        <NavigationItem
          icon={Settings}
          title="Settings"
          to="/settings"
        />
        <Separator className="my-2" />
        <ProfileSection />
      </div>
    </aside>
  );
}