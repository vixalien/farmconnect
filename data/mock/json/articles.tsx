export interface BaseArticle {
  type: string;
  title: string;
  description: string;
  author?: string;
}

export interface Guide extends BaseArticle {
  type: "guide";
  crops: string[];
  topics: string[];
  tagline: string;
}

export type Article = Guide;

export const articles: Article[] = [
  {
    type: "guide",
    title: "Seasonal Planting Guide",
    tagline: "Best practices for planting in Rwanda",
    description: `Learn the optimal planting times for different crops in Rwanda's
    climate zones, with specific guidance for each province.`,
    crops: ["Maize", "Beans", "Rice"],
    topics: ["Planting", "Seasonal Planning"],
  },
  {
    type: "guide",
    title: "Soil Health Management",
    tagline: "Maintaining soil fertility",
    description: `Techniques to maintain and improve soil fertility for better
      crop yields, including organic and inorganic fertilizer use.`,
    crops: ["All Crops"],
    topics: ["Soil Health", "Fertilizer"],
  },
  {
    type: "guide",
    title: "Water Conservation",
    tagline: "Efficient irrigation techniques",
    description: `Learn water-saving irrigation techniques suitable for Rwanda's
    climate, including drip irrigation and rainwater harvesting.`,
    crops: ["All Crops"],
    topics: ["Irrigation", "Water Management"],
  },
  {
    type: "guide",
    title: "Maize Cultivation Guide",
    tagline: "Complete guide for maize farming",
    description: `Comprehensive guide covering all aspects of maize cultivation
    from seed selection to post-harvest handling.`,
    crops: ["Maize"],
    topics: ["Planting", "Harvesting", "Storage"],
  },
  {
    type: "guide",
    title: "Coffee Production",
    tagline: "Best practices for coffee farming",
    description: `Learn how to grow high-quality coffee beans, including
    cultivation, harvesting, and processing techniques.`,
    crops: ["Coffee"],
    topics: ["Planting", "Processing", "Quality"],
  },
  {
    type: "guide",
    title: "Sustainable Farming",
    tagline: "Eco-friendly agricultural practices",
    description: `Discover sustainable farming practices that protect the
    environment while maintaining or improving crop yields.`,
    crops: ["All Crops"],
    topics: ["Sustainability", "Conservation"],
  },
];
