import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import MarketPriceTable from "@/components/market-price-table";

export default function Prices() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>Current Market Prices</CardTitle>
        <CardDescription>
          Real-time market prices for crops across Rwanda
        </CardDescription>
      </CardHeader>
      <CardContent>
        <MarketPriceTable />
        <div className="mt-4 text-right">
          <Link href="/dashboard/market/analysis">
            <Button>View Detailed Market Analysis</Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
