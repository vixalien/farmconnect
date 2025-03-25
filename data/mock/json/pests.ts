export interface Pest {
  name: string;
  crops: string[];
  identification: string[];
  management: string[];
}

export const pests: Pest[] = [
  {
    name: "Fall Armyworm",
    crops: ["Maize", "Sorghum"],
    identification: [
      "Caterpillars with light-colored inverted Y on head ",
      "Feeding damage in whorls and leaves",
      "Ragged holes and frass (excrement) visible",
    ],
    management: [
      "Early planting to avoid peak infestation periods",
      "Regular field monitoring",
      "Approved pesticides (follow local guidelines)",
      "Natural enemies like parasitic wasps",
    ],
  },
  {
    name: "Bean Rust",
    crops: ["Beans", "Legumes"],
    identification: [
      "Small, rusty-brown spots on leaves",
      "Yellow halos around spots",
      "Premature leaf drop",
    ],
    management: [
      "Use resistant varieties",
      "Crop rotation with non-host plants",
      "Fungicide application (preventative)",
      "Proper spacing for air circulation",
    ],
  },
  {
    name: "Coffee Berry Borer",
    crops: ["Coffee"],
    identification: [
      "Small black beetles (1.5-2mm)",
      "Small holes in coffee berries",
      "Damaged beans with tunnels",
    ],
    management: [
      "Regular harvesting of all ripe berries",
      "Proper post-harvest sanitation",
      "Biological control with Beauveria bassiana",
      "Natural enemies like parasitic wasps",
    ],
  },
];
