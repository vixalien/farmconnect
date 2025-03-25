import { Filter, Search } from "lucide-react";
import { ReactElement } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs } from "@/components/tabs";

export default function CommunityPage({
  children,
}: {
  children: ReactElement;
}) {
  return (
    <div className="container py-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold">Community Network</h1>
          <p className="text-muted-foreground">
            Connect with other farmers and agricultural experts
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative w-full md:w-auto">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search community..."
              className="pl-8 w-full md:w-[200px]"
            />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Tabs
        base="/dashboard/community"
        tabs={[
          {
            value: "discussions",
            label: "Discussions",
          },
          {
            value: "groups",
            label: "Farmer Groups",
          },
          {
            value: "experts",
            label: "Connect with Experts",
          },
          {
            value: "events",
            label: "Events",
          },
        ]}
      />

      <div className="mt-4">{children}</div>
    </div>
  );
}
