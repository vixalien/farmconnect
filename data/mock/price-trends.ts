/**
 * Mock Price Trends Data
 *
 * This file contains mock data for the price trends graphs in the FarmConnect Rwanda application.
 * The data structure is designed to mirror what would be expected from a database query,
 * making it easy to replace with real data in the future.
 *
 * To replace with real database data:
 * 1. Maintain the same data structure or modify the consuming components accordingly
 * 2. Replace the static imports with fetch calls to your API
 * 3. Update any filtering/processing logic as needed
 *
 * Database Integration Example:
 *
 * // Instead of importing from this file:
 * // import { getPriceTrendData } from '@/data/mock/price-trends'
 *
 * // Replace with a fetch call to your API:
 * async function getPriceTrendData(cropId: string, regionId: string, period: string) {
 *   const response = await fetch(`/api/market/prices?cropId=${cropId}&regionId=${regionId}&period=${period}`)
 *   const data = await response.json()
 *   return data
 * }
 */

// Types that mirror expected database schema
export interface PriceDataPoint {
  date: string // ISO format date string
  price: number // Price in RWF
}

export interface CropPriceData {
  cropId: string
  cropName: string
  data: PriceDataPoint[]
  currentPrice: number
  changePercent: number
  metadata?: {
    unit: string
    description?: string
    regionId?: string
    marketId?: string
  }
}

// Time periods used for filtering
export const TIME_PERIODS = {
  "1week": 7,
  "1month": 30,
  "3months": 90,
  "6months": 180,
  "1year": 365,
}

// Generate mock price data for the past year
function generateYearlyPriceData(
  basePrice: number,
  volatility: number,
  seasonalPattern: "stable" | "increasing" | "decreasing" | "seasonal" = "stable",
): PriceDataPoint[] {
  const data: PriceDataPoint[] = []
  const today = new Date()

  // Generate daily data for 1 year
  for (let i = 365; i >= 0; i--) {
    const date = new Date(today)
    date.setDate(today.getDate() - i)

    let priceModifier = 1

    // Apply seasonal patterns
    if (seasonalPattern === "increasing") {
      priceModifier += (i / 365) * 0.2 // 20% lower a year ago
    } else if (seasonalPattern === "decreasing") {
      priceModifier -= (i / 365) * 0.2 // 20% higher a year ago
    } else if (seasonalPattern === "seasonal") {
      // Create two peaks per year (planting and harvest seasons)
      const dayOfYear = Math.floor(i % 365)
      // Peak 1: Around day 90 (planting season)
      // Peak 2: Around day 270 (harvest season)
      const distance1 = Math.min(Math.abs(dayOfYear - 90), Math.abs(dayOfYear - 455))
      const distance2 = Math.min(Math.abs(dayOfYear - 270), Math.abs(dayOfYear - 635))
      const minDistance = Math.min(distance1, distance2)
      const seasonalEffect = Math.max(0, 0.15 - (minDistance / 45) * 0.15)
      priceModifier += seasonalEffect
    }

    // Add random noise
    const randomVariation = (Math.random() - 0.5) * volatility
    const finalPrice = Math.round(basePrice * (priceModifier + randomVariation))

    data.push({
      date: date.toISOString(),
      price: finalPrice,
    })
  }

  return data
}

// Mock data for different crops
const mockCropsData: CropPriceData[] = [
  {
    cropId: "maize",
    cropName: "Maize",
    data: generateYearlyPriceData(12500, 0.08, "seasonal"),
    currentPrice: 12500,
    changePercent: 5.2,
    metadata: {
      unit: "kg",
      description: "Maize grain, dry",
      regionId: "all",
    },
  },
  {
    cropId: "beans",
    cropName: "Beans",
    data: generateYearlyPriceData(15800, 0.1, "seasonal"),
    currentPrice: 15800,
    changePercent: -2.1,
    metadata: {
      unit: "kg",
      description: "Common beans, dry",
      regionId: "all",
    },
  },
  {
    cropId: "rice",
    cropName: "Rice",
    data: generateYearlyPriceData(18200, 0.06, "increasing"),
    currentPrice: 18200,
    changePercent: 1.8,
    metadata: {
      unit: "kg",
      description: "Rice, milled",
      regionId: "all",
    },
  },
  {
    cropId: "cassava",
    cropName: "Cassava",
    data: generateYearlyPriceData(9500, 0.07, "stable"),
    currentPrice: 9500,
    changePercent: 3.5,
    metadata: {
      unit: "kg",
      description: "Cassava, fresh",
      regionId: "all",
    },
  },
  {
    cropId: "coffee",
    cropName: "Coffee",
    data: generateYearlyPriceData(25000, 0.12, "increasing"),
    currentPrice: 25000,
    changePercent: 2.3,
    metadata: {
      unit: "kg",
      description: "Coffee beans, premium grade",
      regionId: "all",
    },
  },
]

// Region-specific data
const regions = ["southern", "eastern", "northern", "western", "kigali"]

// Generate mock price data with region-specific pricing
const mockRegionalData: Record<string, CropPriceData[]> = {}

regions.forEach((region, index) => {
  // Price variation factor for different regions (southern as baseline)
  const regionFactor =
    {
      southern: 1.0, // Baseline
      eastern: 0.98, // 2% lower than southern
      northern: 1.02, // 2% higher than southern
      western: 1.01, // 1% higher than southern
      kigali: 1.03, // 3% higher than southern
    }[region] || 1

  mockRegionalData[region] = mockCropsData.map((crop) => {
    // Create a regional variation of the crop data
    const regionalData = { ...crop }
    regionalData.data = crop.data.map((point) => ({
      date: point.date,
      price: Math.round(point.price * regionFactor),
    }))
    regionalData.currentPrice = Math.round(crop.currentPrice * regionFactor)
    regionalData.metadata = { ...crop.metadata, regionId: region }
    return regionalData
  })
})

/**
 * Get price trend data for a specific crop and region
 *
 * @param cropId - The ID of the crop to get data for
 * @param regionId - The ID of the region (province)
 * @param period - Time period to get data for (e.g., "1month", "3months")
 * @returns Price trend data for the specified parameters
 */
export function getPriceTrendData(
  cropId = "maize",
  regionId = "all",
  period: keyof typeof TIME_PERIODS = "3months",
): CropPriceData | null {
  // Get the base data (all regions) or region-specific data
  const dataSource = regionId === "all" ? mockCropsData : mockRegionalData[regionId]

  if (!dataSource) {
    return null
  }

  // Find the crop data
  const cropData = dataSource.find((crop) => crop.cropId === cropId)

  if (!cropData) {
    return null
  }

  // If we need to filter by time period
  if (period !== "all") {
    const days = TIME_PERIODS[period]

    if (days) {
      const cutoffDate = new Date()
      cutoffDate.setDate(cutoffDate.getDate() - days)

      // Create a filtered copy of the data
      const filteredData = { ...cropData }
      filteredData.data = cropData.data.filter((point) => {
        const pointDate = new Date(point.date)
        return pointDate >= cutoffDate
      })

      return filteredData
    }
  }

  return cropData
}

/**
 * Get all available crops
 *
 * @returns List of all available crops with basic information
 */
export function getAvailableCrops(): { id: string; name: string }[] {
  return mockCropsData.map((crop) => ({
    id: crop.cropId,
    name: crop.cropName,
  }))
}

/**
 * Get all available regions
 *
 * @returns List of all available regions
 */
export function getAvailableRegions(): { id: string; name: string }[] {
  return [
    { id: "all", name: "All Regions" },
    { id: "southern", name: "Southern Province" },
    { id: "eastern", name: "Eastern Province" },
    { id: "northern", name: "Northern Province" },
    { id: "western", name: "Western Province" },
    { id: "kigali", name: "Kigali" },
  ]
}

/**
 * Get market statistics for a specific crop, region, and time period
 */
export function getMarketStatistics(
  cropId = "maize",
  regionId = "all",
  period: keyof typeof TIME_PERIODS = "3months",
): {
  averagePrice: number
  highestPrice: number
  lowestPrice: number
  volatility: number
} {
  const cropData = getPriceTrendData(cropId, regionId, period)

  if (!cropData || cropData.data.length === 0) {
    return {
      averagePrice: 0,
      highestPrice: 0,
      lowestPrice: 0,
      volatility: 0,
    }
  }

  const prices = cropData.data.map((point) => point.price)
  const averagePrice = Math.round(prices.reduce((a, b) => a + b, 0) / prices.length)
  const highestPrice = Math.max(...prices)
  const lowestPrice = Math.min(...prices)

  // Calculate volatility (standard deviation / mean)
  const variance = prices.reduce((acc, price) => acc + Math.pow(price - averagePrice, 2), 0) / prices.length
  const stdDev = Math.sqrt(variance)
  const volatility = Math.round((stdDev / averagePrice) * 100) / 100 // As a decimal

  return {
    averagePrice,
    highestPrice,
    lowestPrice,
    volatility,
  }
}

export default mockCropsData

