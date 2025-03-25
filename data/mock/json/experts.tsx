export interface Expert {
  name: string;
  gender: "male" | "female";
  initials?: string;
  roles: string[];
  bio: string;
  crops: string[];
  topics: string[];
}

export const experts: Expert[] = [
  {
    name: "Dr. Jean Mutesi",
    gender: "female",
    initials: "JM",
    roles: ["Agricultural Scientist", "Crop Specialist"],
    bio: `Specializes in maize and bean cultivation with over 15 years
    of experience in agricultural research. Can provide advice on
    crop varieties, disease management, and yield optimization.`,
    crops: ["Maize", "Beans"],
    topics: ["Crop Diseases"],
  },
  {
    name: "Prof. Emmanuel Nzeyimana",
    gender: "male",
    initials: "EN",
    roles: ["Climate Specialist", "Agricultural Adaptation"],
    bio: `Expert in climate-smart agriculture with a focus on helping
    farmers adapt to changing climate conditions in Rwanda.
    Provides guidance on sustainable farming practices and water
    management.`,
    crops: [],
    topics: ["Climate Change", "Water Management", "Sustainability"],
  },
  {
    name: "Marie Uwimana",
    gender: "female",
    initials: "MU",
    roles: ["Coffee Specialist", "Quality Control"],
    bio: `Specializes in coffee production with expertise in
    cultivation, processing, and quality control. Can provide
    advice on producing high-quality coffee beans for premium
    markets.`,
    crops: ["Coffee"],
    topics: ["Processing", "Quality Control"],
  },
];
