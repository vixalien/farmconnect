/**
 * Mock Market Price Table Data
 *
 * Contains mock data for the current market prices table.
 * The data structure is designed to mirror what would be expected from a database query.
 *
 * Database Integration Example:
 *
 * // Instead of importing from this file:
 * // import { getMarketPrices } from '@/data/mock/market-price-table'
 *
 * // Replace with an API call:
 * async function getMarketPrices(filters) {
 *   const queryParams = new URLSearchParams(filters).toString();
 *   const response = await fetch(`/api/market/prices?${queryParams}`);
 *   return response.json();
 * }
 */

export interface MarketPrice {
  id: number
  crop: string
  price: number
  change: number
  market: string
  volume: string
  category: string
  region: string
  updatedAt: string
}

// Sample market price data
const marketPrices: MarketPrice[] = [
  {
    id: 1,
    crop: "Maize",
    price: 12500,
    change: 5.2,
    market: "Huye Market",
    volume: "2,500 kg",
    category: "grains",
    region: "southern",
    updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // 2 hours ago
  },
  {
    id: 2,
    crop: "Beans",
    price: 15800,
    change: -2.1,
    market: "Nyagatare Market",
    volume: "1,800 kg",
    category: "grains",
    region: "eastern",
    updatedAt: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(), // 3 hours ago
  },
  {
    id: 3,
    crop: "Rice",
    price: 18200,
    change: 1.8,
    market: "Muhanga Market",
    volume: "3,200 kg",
    category: "grains",
    region: "southern",
    updatedAt: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(), // 1 hour ago
  },
  {
    id: 4,
    crop: "Cassava",
    price: 9500,
    change: 3.5,
    market: "Rubavu Market",
    volume: "4,500 kg",
    category: "vegetables",
    region: "western",
    updatedAt: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(), // 4 hours ago
  },
  {
    id: 5,
    crop: "Coffee",
    price: 25000,
    change: 2.3,
    market: "Kigali Market",
    volume: "1,200 kg",
    category: "cash",
    region: "kigali",
    updatedAt: new Date(Date.now() - 2.5 * 60 * 60 * 1000).toISOString(), // 2.5 hours ago
  },
  {
    id: 6,
    crop: "Tomatoes",
    price: 7800,
    change: 4.2,
    market: "Kigali Market",
    volume: "1,500 kg",
    category: "vegetables",
    region: "kigali",
    updatedAt: new Date(Date.now() - 1.5 * 60 * 60 * 1000).toISOString(), // 1.5 hours ago
  },
  {
    id: 7,
    crop: "Potatoes",
    price: 8200,
    change: -1.5,
    market: "Musanze Market",
    volume: "3,800 kg",
    category: "vegetables",
    region: "northern",
    updatedAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(), // 5 hours ago
  },
  {
    id: 8,
    crop: "Tea",
    price: 22000,
    change: 1.2,
    market: "Nyabihu Market",
    volume: "950 kg",
    category: "cash",
    region: "western",
    updatedAt: new Date(Date.now() - 3.5 * 60 * 60 * 1000).toISOString(), // 3.5 hours ago
  },
  {
    id: 9,
    crop: "Bananas",
    price: 6500,
    change: 2.8,
    market: "Huye Market",
    volume: "5,200 kg",
    category: "fruits",
    region: "southern",
    updatedAt: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(), // 6 hours ago
  },
  {
    id: 10,
    crop: "Avocados",
    price: 11200,
    change: 6.5,
    market: "Kigali Market",
    volume: "1,800 kg",
    category: "fruits",
    region: "kigali",
    updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // 2 hours ago
  },
]

/**
 * Get market prices with optional filtering
 * @param filters Optional filters to apply to the data
 * @returns Filtered market price data
 */
export function getMarketPrices(filters?: {
  category?: string
  region?: string
  crop?: string
}): MarketPrice[] {
  let filteredData = [...marketPrices]

  if (filters) {
    if (filters.category && filters.category !== "all") {
      filteredData = filteredData.filter((item) => item.category === filters.category)
    }

    if (filters.region && filters.region !== "all") {
      filteredData = filteredData.filter((item) => item.region === filters.region)
    }

    if (filters.crop) {
      const cropQuery = filters.crop.toLowerCase()
      filteredData = filteredData.filter((item) => item.crop.toLowerCase().includes(cropQuery))
    }
  }

  return filteredData
}

/**
 * Get last update time for market prices
 * @returns ISO string of the last update time
 */
export function getLastUpdateTime(): string {
  // Find the most recent update time
  const updateTimes = marketPrices.map((item) => new Date(item.updatedAt).getTime())
  const mostRecentTime = Math.max(...updateTimes)
  return new Date(mostRecentTime).toISOString()
}

export default marketPrices

