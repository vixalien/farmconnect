import { Filter, Search } from "lucide-react";
import { ReactElement } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs } from "@/components/tabs";

export default function KnowledgePage({
  children,
}: {
  children: ReactElement;
}) {
  return (
    <div className="container py-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold">Knowledge Repository</h1>
          <p className="text-muted-foreground">
            Access agricultural best practices and guides
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative w-full md:w-auto">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search resources..."
              className="pl-8 w-full md:w-[200px]"
            />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Tabs
        base="/dashboard/knowledge"
        tabs={[
          {
            value: "guides",
            label: "Farming Guides",
          },
          {
            value: "weather",
            label: "Weather Information",
          },
          {
            value: "pests",
            label: "Pest Management",
          },
          {
            value: "expert",
            label: "Expert Advice",
          },
        ]}
      />

      <div className="mt-4">{children}</div>
    </div>
  );
}
