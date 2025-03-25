"use client"

import { useState, useEffect } from "react"
import { TrendingDown, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { getMarketPrices, getLastUpdateTime } from "@/data/mock/market-price-table"

/**
 * When replacing mock data with real database data:
 *
 * 1. Create an API route for fetching market prices (e.g., app/api/market/current-prices)
 * 2. Replace the import from mock data with fetch calls to your API
 * 3. Update the useEffect to fetch data asynchronously
 *
 * Example implementation:
 *
 * const fetchMarketPrices = async (filters) => {
 *   const queryParams = new URLSearchParams(filters).toString();
 *   const response = await fetch(`/api/market/current-prices?${queryParams}`);
 *   if (!response.ok) throw new Error('Failed to fetch market prices');
 *   return response.json();
 * };
 */

export default function MarketPriceTable() {
  const [cropType, setCropType] = useState("all")
  const [region, setRegion] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [priceData, setPriceData] = useState<any[]>([])
  const [lastUpdated, setLastUpdated] = useState<string>("")

  // Load data when filters change
  useEffect(() => {
    // Function to load data from our mock data source
    // This would be replaced with an API call in a real application
    const loadData = () => {
      const data = getMarketPrices({
        category: cropType,
        region: region,
        crop: searchQuery,
      })

      setPriceData(data)
      setLastUpdated(getLastUpdateTime())
    }

    loadData()

    // When implementing real data fetching, you would use this approach:
    /*
    const fetchData = async () => {
      try {
        const data = await fetchMarketPrices({
          category: cropType,
          region: region,
          crop: searchQuery
        });
        setPriceData(data.prices);
        setLastUpdated(data.lastUpdated);
      } catch (error) {
        console.error("Error fetching market prices:", error);
      }
    };
    
    fetchData();
    */
  }, [cropType, region, searchQuery])

  // Format price with commas
  const formatPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  // Format the last updated time
  const formatLastUpdated = (isoString: string) => {
    const date = new Date(isoString)
    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    const diffHrs = Math.floor(diffMs / (1000 * 60 * 60))
    const diffMins = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60))

    if (diffHrs > 0) {
      return `${diffHrs} hour${diffHrs > 1 ? "s" : ""} ago`
    } else {
      return `${diffMins} minute${diffMins > 1 ? "s" : ""} ago`
    }
  }

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <Select value={cropType} onValueChange={setCropType}>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Crop Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Crops</SelectItem>
            <SelectItem value="grains">Grains</SelectItem>
            <SelectItem value="vegetables">Vegetables</SelectItem>
            <SelectItem value="fruits">Fruits</SelectItem>
            <SelectItem value="cash">Cash Crops</SelectItem>
          </SelectContent>
        </Select>

        <Select value={region} onValueChange={setRegion}>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Region" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Regions</SelectItem>
            <SelectItem value="southern">Southern Province</SelectItem>
            <SelectItem value="eastern">Eastern Province</SelectItem>
            <SelectItem value="northern">Northern Province</SelectItem>
            <SelectItem value="western">Western Province</SelectItem>
            <SelectItem value="kigali">Kigali</SelectItem>
          </SelectContent>
        </Select>

        <div className="relative flex-1 md:max-w-[250px]">
          <Input
            type="search"
            placeholder="Search crops..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full"
          />
        </div>
      </div>

      {lastUpdated && (
        <div className="text-sm text-muted-foreground mb-4">Last updated: {formatLastUpdated(lastUpdated)}</div>
      )}

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left font-medium py-3 px-4">Crop</th>
              <th className="text-left font-medium py-3 px-4">Price (RWF/kg)</th>
              <th className="text-left font-medium py-3 px-4">Change</th>
              <th className="text-left font-medium py-3 px-4">Market</th>
              <th className="text-left font-medium py-3 px-4">Volume</th>
              <th className="text-left font-medium py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {priceData.length > 0 ? (
              priceData.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="py-3 px-4">{item.crop}</td>
                  <td className="py-3 px-4">{formatPrice(item.price)}</td>
                  <td className="py-3 px-4">
                    <div className={`flex items-center ${item.change >= 0 ? "text-green-600" : "text-red-600"}`}>
                      {item.change >= 0 ? (
                        <TrendingUp className="h-4 w-4 mr-1" />
                      ) : (
                        <TrendingDown className="h-4 w-4 mr-1" />
                      )}
                      {item.change >= 0 ? "+" : ""}
                      {item.change}%
                    </div>
                  </td>
                  <td className="py-3 px-4">{item.market}</td>
                  <td className="py-3 px-4">{item.volume}</td>
                  <td className="py-3 px-4">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="py-6 text-center text-muted-foreground">
                  No market prices found for the selected filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

