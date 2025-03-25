import { Filter, Search } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PriceTrendChart from "@/components/price-trend-chart"
import MarketPriceTable from "@/components/market-price-table"
import Link from "next/link"
import CropPriceComparisonChart from "@/components/crop-price-comparison-chart"

export default function MarketPage() {
  return (
    <div className="container py-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold">Market Information</h1>
          <p className="text-muted-foreground">View real-time market prices and trends</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative w-full md:w-auto">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search crops..." className="pl-8 w-full md:w-[200px]" />
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
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Current Market Prices</CardTitle>
              <CardDescription>Real-time market prices for crops across Rwanda</CardDescription>
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
        </TabsContent>

        <TabsContent value="trends" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Price Trends</CardTitle>
              <CardDescription>Historical price data for selected crops</CardDescription>
            </CardHeader>
            <CardContent>
              <PriceTrendChart />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="comparison" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Price Comparison</CardTitle>
              <CardDescription>Compare current prices with historical data</CardDescription>
            </CardHeader>
            <CardContent>
              <CropPriceComparisonChart />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="buyers" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Active Buyers</CardTitle>
              <CardDescription>Buyers looking to purchase crops in your region</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="font-medium">Rwanda Grain Cooperative</h3>
                      <p className="text-sm text-muted-foreground">Looking for: Maize, Beans, Rice</p>
                      <p className="text-sm text-muted-foreground">Location: Kigali, Rwanda</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="text-sm">
                        <span className="font-medium">Quantity Needed:</span> 5,000 kg
                      </div>
                      <div className="text-sm">
                        <span className="font-medium">Offered Price:</span> 13,000 RWF/kg
                      </div>
                      <Button size="sm">Contact Buyer</Button>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="font-medium">Eastern Food Processors</h3>
                      <p className="text-sm text-muted-foreground">Looking for: Cassava, Sweet Potatoes</p>
                      <p className="text-sm text-muted-foreground">Location: Kayonza, Eastern Province</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="text-sm">
                        <span className="font-medium">Quantity Needed:</span> 3,500 kg
                      </div>
                      <div className="text-sm">
                        <span className="font-medium">Offered Price:</span> 9,800 RWF/kg
                      </div>
                      <Button size="sm">Contact Buyer</Button>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="font-medium">Rwanda Coffee Exporters</h3>
                      <p className="text-sm text-muted-foreground">Looking for: Coffee Beans</p>
                      <p className="text-sm text-muted-foreground">Location: Huye, Southern Province</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="text-sm">
                        <span className="font-medium">Quantity Needed:</span> 2,000 kg
                      </div>
                      <div className="text-sm">
                        <span className="font-medium">Offered Price:</span> 25,500 RWF/kg
                      </div>
                      <Button size="sm">Contact Buyer</Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sellers" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Active Sellers</CardTitle>
              <CardDescription>Farmers selling crops in your region</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="font-medium">Southern Farmers Association</h3>
                      <p className="text-sm text-muted-foreground">Selling: Maize, Beans</p>
                      <p className="text-sm text-muted-foreground">Location: Huye, Southern Province</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="text-sm">
                        <span className="font-medium">Available Quantity:</span> 3,200 kg
                      </div>
                      <div className="text-sm">
                        <span className="font-medium">Asking Price:</span> 12,200 RWF/kg
                      </div>
                      <Button size="sm">Contact Seller</Button>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="font-medium">Northern Rice Growers</h3>
                      <p className="text-sm text-muted-foreground">Selling: Rice</p>
                      <p className="text-sm text-muted-foreground">Location: Musanze, Northern Province</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="text-sm">
                        <span className="font-medium">Available Quantity:</span> 4,500 kg
                      </div>
                      <div className="text-sm">
                        <span className="font-medium">Asking Price:</span> 17,800 RWF/kg
                      </div>
                      <Button size="sm">Contact Seller</Button>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="font-medium">Eastern Cassava Cooperative</h3>
                      <p className="text-sm text-muted-foreground">Selling: Cassava, Sweet Potatoes</p>
                      <p className="text-sm text-muted-foreground">Location: Nyagatare, Eastern Province</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="text-sm">
                        <span className="font-medium">Available Quantity:</span> 5,800 kg
                      </div>
                      <div className="text-sm">
                        <span className="font-medium">Asking Price:</span> 9,300 RWF/kg
                      </div>
                      <Button size="sm">Contact Seller</Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

