import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { articles } from "@/data/mock/json/articles";

export default function Guides() {
  const allGuides = articles.filter((article) => article.type === "guide");

  const crops = allGuides.reduce(
    (crops, guide) => {
      guide.crops.forEach((crop) => {
        if (!crops.includes(crop)) crops.push(crop);
      });

      return crops;
    },
    ["All Crops"],
  );

  const topics = allGuides.reduce(
    (topics, guide) => {
      guide.topics.forEach((topic) => {
        if (!topics.includes(topic)) topics.push(topic);
      });

      return topics;
    },
    ["All Topics"],
  );

  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <Select defaultValue="All Crops">
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Crop Type" />
          </SelectTrigger>
          <SelectContent>
            {crops.map((crop) => {
              return <SelectItem value={crop}>{crop}</SelectItem>;
            })}
          </SelectContent>
        </Select>

        <Select defaultValue="All Topics">
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Topic" />
          </SelectTrigger>
          <SelectContent>
            {topics.map((topic) => {
              return <SelectItem value={topic}>{topic}</SelectItem>;
            })}
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {allGuides.map((guide) => {
          return (
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>{guide.title}</CardTitle>
                <CardDescription>{guide.tagline}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">
                    <span className="font-medium">Crops:</span>{" "}
                    {guide.crops.join(", ")}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <span className="font-medium">Topics:</span>{" "}
                    {guide.topics.join(", ")}
                  </div>
                  <p className="text-sm mt-2">{guide.description}</p>
                  <Button variant="outline" className="w-full mt-2">
                    Read Guide
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </>
  );
}
