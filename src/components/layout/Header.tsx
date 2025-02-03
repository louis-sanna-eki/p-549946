import { Bell, MessageSquare, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BreadcrumbItemProps {
  label: string;
  isLast?: boolean;
}

function BreadcrumbItem({ label, isLast }: BreadcrumbItemProps) {
  return (
    <>
      <span className={`text-sm ${isLast ? 'font-medium flex items-center gap-1' : 'text-muted-foreground'}`}>
        {label}
        {isLast && <ChevronDown className="h-4 w-4" />}
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
          <Button variant="secondary" className="gap-2">
            <div className="w-4 h-4 bg-indigo-600 rounded"></div>
            Preview mode
            <ChevronDown className="h-4 w-4" />
          </Button>
          <div className="mx-4">
            <BreadcrumbItem label="Total Worldwide" />
            <BreadcrumbItem label="France" isLast />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="relative p-2 hover:bg-accent rounded-full">
            <Bell className="h-5 w-5 text-muted-foreground" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <button className="relative p-2 hover:bg-accent rounded-full">
            <MessageSquare className="h-5 w-5 text-muted-foreground" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
        </div>
      </div>
    </div>
  );
}