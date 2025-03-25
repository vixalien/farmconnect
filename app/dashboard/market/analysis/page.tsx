import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import PriceTrendChart from "@/components/price-trend-chart"
import CropPriceComparisonChart from "@/components/crop-price-comparison-chart"

export default function MarketAnalysisPage() {
  return (
    <div className="container py-6">
      <div className="flex items-center gap-2 mb-6">
        <Link href="/dashboard/market">
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold">Market Analysis</h1>
          <p className="text-muted-foreground">Detailed market trends and price analysis</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Price Trends</CardTitle>
            <CardDescription>Historical price data for selected crops</CardDescription>
          </CardHeader>
          <CardContent>
            <PriceTrendChart defaultTimePeriod="1year" />
          </CardContent>
        </Card>

        <div className="md:col-span-2">
          <CropPriceComparisonChart />
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Market Insights</CardTitle>
            <CardDescription>Key observations and predictions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-b pb-3">
                <h3 className="font-medium mb-1">Seasonal Trends</h3>
                <p className="text-sm text-muted-foreground">
                  Maize prices typically peak during the planting season (March-April) and drop after harvest
                  (July-August). Current prices are following the expected seasonal pattern, with a slight upward trend
                  due to increased demand.
                </p>
              </div>

              <div className="border-b pb-3">
                <h3 className="font-medium mb-1">Regional Variations</h3>
                <p className="text-sm text-muted-foreground">
                  Southern Province consistently shows higher prices for beans and maize compared to Eastern Province.
                  This is likely due to higher production costs and transportation challenges in the Southern region.
                </p>
              </div>

              <div className="border-b pb-3">
                <h3 className="font-medium mb-1">Price Volatility</h3>
                <p className="text-sm text-muted-foreground">
                  Coffee prices have shown the highest volatility over the past year, with fluctuations of up to 15%.
                  This is primarily influenced by international market conditions and export demand.
                </p>
              </div>

              <div>
                <h3 className="font-medium mb-1">Future Outlook</h3>
                <p className="text-sm text-muted-foreground">
                  Based on current trends and weather forecasts, we predict stable prices for staple crops over the next
                  3 months, with a potential increase in rice prices due to anticipated rainfall shortages in key
                  growing regions.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Market Recommendations</CardTitle>
            <CardDescription>Suggested actions based on market analysis</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-b pb-3">
                <h3 className="font-medium mb-1">For Maize Farmers</h3>
                <p className="text-sm text-muted-foreground">
                  Consider staggered selling of your harvest to take advantage of potential price increases in the
                  coming months. Current market conditions suggest prices will rise by approximately 5-8% before the
                  next planting season.
                </p>
              </div>

              <div className="border-b pb-3">
                <h3 className="font-medium mb-1">For Bean Producers</h3>
                <p className="text-sm text-muted-foreground">
                  With bean prices currently trending downward, consider storing your harvest if possible. Historical
                  data indicates prices should recover within 2-3 months, potentially offering better returns.
                </p>
              </div>

              <div className="border-b pb-3">
                <h3 className="font-medium mb-1">For Coffee Growers</h3>
                <p className="text-sm text-muted-foreground">
                  Current coffee prices are near their yearly high. If you have mature crops ready for harvest, this may
                  be an optimal time to sell. International demand remains strong, supporting the current price levels.
                </p>
              </div>

              <div>
                <h3 className="font-medium mb-1">For Buyers</h3>
                <p className="text-sm text-muted-foreground">
                  Consider securing contracts for rice and cassava now, as prices for these crops are expected to
                  increase in the coming months due to weather-related supply constraints in key growing regions.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

