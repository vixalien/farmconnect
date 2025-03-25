import { Filter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Guides from "./pages/guide";
import Weather from "./pages/weather";
import Pests from "./pages/pests";
import Guide from "./pages/guide";

export default function KnowledgePage() {
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

      <Tabs defaultValue="guides" className="mb-8">
        <TabsList>
          <TabsTrigger value="guides">Farming Guides</TabsTrigger>
          <TabsTrigger value="weather">Weather Information</TabsTrigger>
          <TabsTrigger value="pests">Pest Management</TabsTrigger>
          <TabsTrigger value="expert">Expert Advice</TabsTrigger>
        </TabsList>

        <TabsContent value="guides" className="mt-4">
          <Guides />
        </TabsContent>

        <TabsContent value="weather" className="mt-4">
          <Weather />
        </TabsContent>

        <TabsContent value="pests" className="mt-4">
          <Pests />
        </TabsContent>

        <TabsContent value="expert" className="mt-4">
          <Guide />
        </TabsContent>
      </Tabs>
    </div>
  );
}
