import { Filter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Discussions from "./pages/discussions";
import Groups from "./pages/groups";
import Experts from "./pages/experts";
import Events from "./pages/events";

export default function CommunityPage() {
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

      <Tabs defaultValue="discussions" className="mb-8">
        <TabsList>
          <TabsTrigger value="discussions">Discussions</TabsTrigger>
          <TabsTrigger value="groups">Farmer Groups</TabsTrigger>
          <TabsTrigger value="experts">Connect with Experts</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
        </TabsList>

        <TabsContent value="discussions" className="mt-4">
          <Discussions />
        </TabsContent>

        <TabsContent value="groups" className="mt-4">
          <Groups />
        </TabsContent>

        <TabsContent value="experts" className="mt-4">
          <Experts />
        </TabsContent>

        <TabsContent value="events" className="mt-4">
          <Events />
        </TabsContent>
      </Tabs>
    </div>
  );
}
