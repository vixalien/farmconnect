/**
 * Mock Price Comparison Data
 *
 * Contains mock data for comparing current prices with historical prices.
 * This structure is designed to be replaced with database queries in the future.
 *
 * Database Integration Example:
 *
 * // Instead of importing from this file:
 * // import { getPriceComparisonData } from '@/data/mock/price-comparison'
 *
 * // Replace with an API call:
 * async function getPriceComparisonData(region) {
 *   const response = await fetch(`/api/market/comparison?region=${region}`);
 *   return response.json();
 * }
 */

export interface PriceComparisonItem {
  name: string
  currentPrice: number
  lastMonth: number
  lastYear: number
  changeMonthly: number // Percentage change from last month
  changeYearly: number // Percentage change from last year
}

// Base data for Southern Province
const basePriceData: PriceComparisonItem[] = [
  {
    name: "Maize",
    currentPrice: 12500,
    lastMonth: 12100,
    lastYear: 11200,
    changeMonthly: 3.3,
    changeYearly: 11.6,
  },
  {
    name: "Beans",
    currentPrice: 15800,
    lastMonth: 16100,
    lastYear: 14500,
    changeMonthly: -1.9,
    changeYearly: 9.0,
  },
  {
    name: "Rice",
    currentPrice: 18200,
    lastMonth: 17900,
    lastYear: 16800,
    changeMonthly: 1.7,
    changeYearly: 8.3,
  },
  {
    name: "Cassava",
    currentPrice: 9500,
    lastMonth: 9100,
    lastYear: 8700,
    changeMonthly: 4.4,
    changeYearly: 9.2,
  },
  {
    name: "Coffee",
    currentPrice: 25000,
    lastMonth: 24500,
    lastYear: 22800,
    changeMonthly: 2.0,
    changeYearly: 9.6,
  },
]

// Regional modifiers
const regionModifiers: Record<string, number> = {
  southern: 1.0, // Baseline
  eastern: 0.98, // 2% lower than southern
  northern: 1.02, // 2% higher than southern
  western: 1.01, // 1% higher than southern
  kigali: 1.03, // 3% higher than southern
}

// Generate regional data
const regionalPriceData: Record<string, PriceComparisonItem[]> = {}

Object.keys(regionModifiers).forEach((region) => {
  const modifier = regionModifiers[region]

  regionalPriceData[region] = basePriceData.map((item) => ({
    ...item,
    currentPrice: Math.round(item.currentPrice * modifier),
    lastMonth: Math.round(item.lastMonth * modifier),
    lastYear: Math.round(item.lastYear * modifier),
  }))
})

/**
 * Get price comparison data for a specific region
 * @param region Region ID
 * @returns Array of price comparison data
 */
export function getPriceComparisonData(region = "southern"): PriceComparisonItem[] {
  return regionalPriceData[region] || basePriceData
}

/**
 * Get all available crops for comparison
 * @returns List of crop names
 */
export function getComparisonCrops(): string[] {
  return basePriceData.map((item) => item.name)
}

/**
 * Get all available regions
 *
 * @returns List of all available regions
 */
export function getAvailableRegions(): { id: string; name: string }[] {
  return [
    { id: "southern", name: "Southern Province" },
    { id: "eastern", name: "Eastern Province" },
    { id: "northern", name: "Northern Province" },
    { id: "western", name: "Western Province" },
    { id: "kigali", name: "Kigali" },
  ]
}

export default regionalPriceData

