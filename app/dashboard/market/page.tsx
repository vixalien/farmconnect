import { Filter, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Prices from "./pages/prices";
import Trends from "./pages/trends";
import Comparison from "./pages/comparison";
import Buyers from "./pages/buyers";
import Sellers from "./pages/sellers";

export default function MarketPage() {
  return (
    <div className="container py-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold">Market Information</h1>
          <p className="text-muted-foreground">
            View real-time market prices and trends
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative w-full md:w-auto">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search crops..."
              className="pl-8 w-full md:w-[200px]"
            />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Tabs defaultValue="prices" className="mb-8">
        <TabsList>
          <TabsTrigger value="prices">Current Prices</TabsTrigger>
          <TabsTrigger value="trends">Price Trends</TabsTrigger>
          <TabsTrigger value="comparison">Price Comparison</TabsTrigger>
          <TabsTrigger value="buyers">Buyers</TabsTrigger>
          <TabsTrigger value="sellers">Sellers</TabsTrigger>
        </TabsList>

        <TabsContent value="prices" className="mt-4">
          <Prices />
        </TabsContent>

        <TabsContent value="trends" className="mt-4">
          <Trends />
        </TabsContent>

        <TabsContent value="comparison" className="mt-4">
          <Comparison />
        </TabsContent>

        <TabsContent value="buyers" className="mt-4">
          <Buyers />
        </TabsContent>

        <TabsContent value="sellers" className="mt-4">
          <Sellers />
        </TabsContent>
      </Tabs>
    </div>
  );
}
