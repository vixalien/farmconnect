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

export interface ExpertAdvice extends BaseArticle {
  type: "advice";
  crops: string[];
  topics: string[];
  author: string;
}

export type Article = Guide | ExpertAdvice;

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
  {
    type: "advice",
    title: "Optimizing Maize Yields in Rwanda",
    author: "Dr. Jean Mutesi, Agricultural Scientist",
    description: `This comprehensive guide provides expert advice on maximizing
    maize yields in Rwanda's unique climate conditions. Learn
    about optimal planting densities, fertilizer application
    rates, and timing for different regions.`,
    crops: ["Maize"],
    topics: ["Yield Optimization", "Fertilizer"],
  },
  {
    type: "advice",
    title: "Climate-Smart Agriculture for Rwandan Farmers",
    author: "Prof. Emmanuel Nzeyimana, Climate Specialist",
    description: `Learn how to adapt your farming practices to changing climate
    conditions in Rwanda. This expert guide covers
    drought-resistant varieties, water conservation techniques,
    and sustainable farming methods.`,
    crops: [],
    topics: ["Climate Change", "Sustainability", "Water Management"],
  },
  {
    type: "advice",
    title: "Improving Coffee Quality for Premium Markets",
    author: "Marie Uwimana, Coffee Specialist",
    description: `Discover expert techniques for producing high-quality coffee
    that can command premium prices in international markets. This
    guide covers cultivation, harvesting, processing, and quality
    control.`,
    crops: ["Coffee"],
    topics: ["Quality", "Export"],
  },
];
