import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CropPriceComparisonChart from "@/components/crop-price-comparison-chart";

export default function Comparison() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Price Comparison</CardTitle>
        <CardDescription>
          Compare current prices with historical data
        </CardDescription>
      </CardHeader>
      <CardContent>
        <CropPriceComparisonChart />
      </CardContent>
    </Card>
  );
}
