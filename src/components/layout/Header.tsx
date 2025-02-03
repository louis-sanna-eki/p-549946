import { Bell, MessageSquare } from "lucide-react";

interface BreadcrumbItemProps {
  label: string;
  isLast?: boolean;
}

function BreadcrumbItem({ label, isLast }: BreadcrumbItemProps) {
  return (
    <>
      <span className={`text-sm ${isLast ? 'font-medium' : 'text-muted-foreground'}`}>
        {label}
      </span>
      {!isLast && (
        <span className="mx-2 text-muted-foreground">/</span>
      )}
    </>
  );
}

export function Header() {
  return (
    <div className="border-b">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-2">
          <BreadcrumbItem label="Total Worldwide" />
          <BreadcrumbItem label="France" isLast />
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-accent rounded-full">
            <Bell className="h-5 w-5 text-muted-foreground" />
          </button>
          <button className="p-2 hover:bg-accent rounded-full">
            <MessageSquare className="h-5 w-5 text-muted-foreground" />
          </button>
        </div>
      </div>
      <div className="px-6 py-4">
        <h1 className="text-2xl font-semibold">Past performance</h1>
      </div>
    </div>
  );
}