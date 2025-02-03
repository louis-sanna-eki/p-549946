import { NavigationItem } from "./NavigationItem";
import { ProfileSection } from "./ProfileSection";
import { Separator } from "@/components/ui/separator";

const navigationItems = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/fefc4dc743f5437b91c732647225a5b8/71096e2dfbab3881c10cb6ac25dffafa32661e3bf301bb3e7eb0b1b172feedb4",
    title: "Performance",
    active: true
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/fefc4dc743f5437b91c732647225a5b8/0c78c0d737c9b4e0733cdeaf24fddb25883d91554f956dabca16f64e31fbe15b",
    title: "Forecast"
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/fefc4dc743f5437b91c732647225a5b8/e306aaa5b94f211b84b544885dfddc5a4f7ab7a6333651a77a6c212270ddbd1f",
    title: "Reports",
    badge: "12"
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/fefc4dc743f5437b91c732647225a5b8/605002b8f48484dedad45c89be90d3c82615ab8f691b6b796fbfece040928c70",
    title: "Documents",
    badge: "12"
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
            active={item.active}
          />
        ))}
      </nav>

      <div className="mt-auto">
        <NavigationItem
          icon="https://cdn.builder.io/api/v1/image/assets/fefc4dc743f5437b91c732647225a5b8/435c42bb5e6dcf75d9abf3907388fe27eb110811b7892aa9c584e1081bbe401c"
          title="Settings"
        />
        <Separator className="my-2" />
        <ProfileSection />
      </div>
    </aside>
  );
}