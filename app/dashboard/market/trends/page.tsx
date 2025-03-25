import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import PriceTrendChart from "@/components/price-trend-chart";

export default function Trends() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Price Trends</CardTitle>
        <CardDescription>
          Historical price data for selected crops
        </CardDescription>
      </CardHeader>
      <CardContent>
        <PriceTrendChart />
      </CardContent>
    </Card>
  );
}
