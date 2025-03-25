"use client"

import { useState, useEffect } from "react"
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  getPriceTrendData,
  getMarketStatistics,
  getAvailableCrops,
  getAvailableRegions,
  type TIME_PERIODS,
} from "@/data/mock/price-trends"

/**
 * When replacing mock data with real database data:
 *
 * 1. Create an API route in the app/api directory (e.g., app/api/market/prices)
 * 2. Update the data fetching logic to use fetch() calls to your API
 * 3. If needed, implement server-side data fetching using React Server Components
 *
 * Example API route implementation:
 *
 * // app/api/market/prices/route.ts
 * import { NextResponse } from 'next/server'
 * import { db } from '@/lib/db' // Your database connection
 *
 * export async function GET(request: Request) {
 *   const { searchParams } = new URL(request.url)
 *   const cropId = searchParams.get('cropId') || 'maize'
 *   const regionId = searchParams.get('regionId') || 'all'
 *   const period = searchParams.get('period') || '3months'
 *
 *   // Query your database
 *   const data = await db.marketPrices.findMany({
 *     where: {
 *       cropId: cropId,
 *       regionId: regionId === 'all' ? undefined : regionId,
 *       date: {
 *         gte: calculateDateFromPeriod(period)
 *       }
 *     },
 *     orderBy: {
 *       date: 'asc'
 *     }
 *   })
 *
 *   return NextResponse.json(data)
 * }
 */

// Prepare data for the chart by converting dates to more readable format
const prepareChartData = (data: any[]) => {
  return data.map((item) => {
    const date = new Date(item.date)
    return {
      ...item,
      formattedDate: date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      }),
    }
  })
}

// Format price with commas
const formatPrice = (price: number) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

// Custom tooltip for the chart
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background border rounded-md shadow-sm p-2 text-sm">
        <p className="font-medium">{label}</p>
        <p className="text-primary">{formatPrice(payload[0].value)} RWF</p>
      </div>
    )
  }
  return null
}

interface PriceTrendChartProps {
  defaultCrop?: string
  defaultRegion?: string
  defaultTimePeriod?: string
}

export default function PriceTrendChart({
  defaultCrop = "maize",
  defaultRegion = "all",
  defaultTimePeriod = "3months",
}: PriceTrendChartProps) {
  const [selectedCrop, setSelectedCrop] = useState(defaultCrop)
  const [selectedRegion, setSelectedRegion] = useState(defaultRegion)
  const [timePeriod, setTimePeriod] = useState(defaultTimePeriod)
  const [chartData, setChartData] = useState<any[]>([])
  const [statistics, setStatistics] = useState({
    averagePrice: 0,
    highestPrice: 0,
    lowestPrice: 0,
    volatility: 0,
  })

  // List of available crops and regions
  const crops = getAvailableCrops()
  const regions = getAvailableRegions()

  // Load data when selections change
  useEffect(() => {
    // This function would be replaced with a fetch call to your API
    // when moving to real database data
    const loadData = () => {
      const cropData = getPriceTrendData(selectedCrop, selectedRegion, timePeriod as keyof typeof TIME_PERIODS)

      if (cropData) {
        setChartData(prepareChartData(cropData.data))

        const stats = getMarketStatistics(selectedCrop, selectedRegion, timePeriod as keyof typeof TIME_PERIODS)
        setStatistics(stats)
      }
    }

    loadData()

    // When implementing real data fetching, you would use a setup like this:
    /*
    const fetchData = async () => {
      try {
        const response = await fetch(
          `/api/market/prices?cropId=${selectedCrop}&regionId=${selectedRegion}&period=${timePeriod}`
        );
        const data = await response.json();
        setChartData(prepareChartData(data));
        
        const statsResponse = await fetch(
          `/api/market/statistics?cropId=${selectedCrop}&regionId=${selectedRegion}&period=${timePeriod}`
        );
        const statsData = await statsResponse.json();
        setStatistics(statsData);
      } catch (error) {
        console.error("Error fetching price data:", error);
      }
    };
    
    fetchData();
    */
  }, [selectedCrop, selectedRegion, timePeriod])

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <Select value={selectedCrop} onValueChange={setSelectedCrop}>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Select Crop" />
          </SelectTrigger>
          <SelectContent>
            {crops.map((crop) => (
              <SelectItem key={crop.id} value={crop.id}>
                {crop.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={selectedRegion} onValueChange={setSelectedRegion}>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Select Region" />
          </SelectTrigger>
          <SelectContent>
            {regions.map((region) => (
              <SelectItem key={region.id} value={region.id}>
                {region.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={timePeriod} onValueChange={setTimePeriod}>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Time Period" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1week">1 Week</SelectItem>
            <SelectItem value="1month">1 Month</SelectItem>
            <SelectItem value="3months">3 Months</SelectItem>
            <SelectItem value="6months">6 Months</SelectItem>
            <SelectItem value="1year">1 Year</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="h-[300px] mb-6">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#22c55e" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="formattedDate" tick={{ fontSize: 12 }} tickLine={false} />
            <YAxis
              tick={{ fontSize: 12 }}
              tickLine={false}
              tickFormatter={(value) => `${value / 1000}k`}
              domain={["auto", "auto"]}
            />
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <Tooltip content={<CustomTooltip />} />
            <Area type="monotone" dataKey="price" stroke="#22c55e" fillOpacity={1} fill="url(#colorPrice)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <div className="bg-muted p-4 rounded-lg">
          <div className="text-sm text-muted-foreground mb-1">Average Price</div>
          <div className="text-2xl font-bold">{formatPrice(statistics.averagePrice)} RWF</div>
        </div>
        <div className="bg-muted p-4 rounded-lg">
          <div className="text-sm text-muted-foreground mb-1">Highest Price</div>
          <div className="text-2xl font-bold">{formatPrice(statistics.highestPrice)} RWF</div>
        </div>
        <div className="bg-muted p-4 rounded-lg">
          <div className="text-sm text-muted-foreground mb-1">Lowest Price</div>
          <div className="text-2xl font-bold">{formatPrice(statistics.lowestPrice)} RWF</div>
        </div>
        <div className="bg-muted p-4 rounded-lg">
          <div className="text-sm text-muted-foreground mb-1">Price Volatility</div>
          <div className="text-2xl font-bold">{(statistics.volatility * 100).toFixed(1)}%</div>
        </div>
      </div>
    </div>
  )
}

