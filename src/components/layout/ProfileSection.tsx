import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function ProfileSection() {
  return (
    <div className="flex items-center gap-3 px-4 py-3">
      <Avatar className="h-10 w-10">
        <AvatarFallback className="bg-sidebar-accent text-sidebar-accent-foreground">
          MA
        </AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <span className="text-sm font-medium">Matt Albert</span>
        <span className="text-xs text-sidebar-foreground/70">Data scientist</span>
      </div>
    </div>
  );
}