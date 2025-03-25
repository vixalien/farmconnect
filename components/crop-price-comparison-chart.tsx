"use client"

import { useState, useEffect } from "react"
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { getPriceComparisonData } from "@/data/mock/price-comparison"

/**
 * When replacing mock data with real database data:
 *
 * 1. Create an API route for price comparison data (e.g., app/api/market/comparison)
 * 2. Replace the import from mock data with fetch calls to your API
 * 3. Update the useEffect to fetch data asynchronously
 *
 * Example implementation:
 *
 * const fetchComparisonData = async (region) => {
 *   const response = await fetch(`/api/market/comparison?region=${region}`);
 *   if (!response.ok) throw new Error('Failed to fetch comparison data');
 *   return response.json();
 * };
 */

// Format price with commas
const formatPrice = (price: number) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

// Custom tooltip for the chart
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background border rounded-md shadow-sm p-3 text-sm">
        <p className="font-medium mb-1">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={`item-${index}`} style={{ color: entry.color }}>
            {entry.name}: {formatPrice(entry.value)} RWF
          </p>
        ))}
      </div>
    )
  }
  return null
}

export default function CropPriceComparisonChart() {
  const [region, setRegion] = useState("southern")
  const [chartData, setChartData] = useState<any[]>([])

  // Load comparison data when region changes
  useEffect(() => {
    // This would be replaced with a fetch call to your API
    // when moving to real database data
    const loadData = () => {
      const comparisonData = getPriceComparisonData(region)
      setChartData(comparisonData)
    }

    loadData()

    // When implementing real data fetching, you would use this approach:
    /*
    const fetchData = async () => {
      try {
        const data = await fetchComparisonData(region);
        setChartData(data);
      } catch (error) {
        console.error("Error fetching comparison data:", error);
      }
    };
    
    fetchData();
    */
  }, [region])

  return (
    <div>
      <div className="mb-6">
        <Select value={region} onValueChange={setRegion}>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Select Region" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="southern">Southern Province</SelectItem>
            <SelectItem value="eastern">Eastern Province</SelectItem>
            <SelectItem value="northern">Northern Province</SelectItem>
            <SelectItem value="western">Western Province</SelectItem>
            <SelectItem value="kigali">Kigali</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis tickFormatter={(value) => `${value / 1000}k`} />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Bar dataKey="currentPrice" name="Current Price" fill="#22c55e" />
            <Bar dataKey="lastMonth" name="Last Month" fill="#3b82f6" />
            <Bar dataKey="lastYear" name="Last Year" fill="#f59e0b" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

