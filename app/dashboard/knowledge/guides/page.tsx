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

export default function Guides() {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <Select defaultValue="all">
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Crop Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Crops</SelectItem>
            <SelectItem value="maize">Maize</SelectItem>
            <SelectItem value="beans">Beans</SelectItem>
            <SelectItem value="rice">Rice</SelectItem>
            <SelectItem value="cassava">Cassava</SelectItem>
            <SelectItem value="coffee">Coffee</SelectItem>
          </SelectContent>
        </Select>

        <Select defaultValue="all">
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Topic" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Topics</SelectItem>
            <SelectItem value="planting">Planting</SelectItem>
            <SelectItem value="harvesting">Harvesting</SelectItem>
            <SelectItem value="irrigation">Irrigation</SelectItem>
            <SelectItem value="fertilizer">Fertilizer</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Seasonal Planting Guide</CardTitle>
            <CardDescription>
              Best practices for planting in Rwanda
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">
                <span className="font-medium">Crops:</span> Maize, Beans, Rice
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-medium">Topics:</span> Planting, Seasonal
                Planning
              </div>
              <p className="text-sm mt-2">
                Learn the optimal planting times for different crops in Rwanda's
                climate zones, with specific guidance for each province.
              </p>
              <Button variant="outline" className="w-full mt-2">
                Read Guide
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Soil Health Management</CardTitle>
            <CardDescription>Maintaining soil fertility</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">
                <span className="font-medium">Crops:</span> All Crops
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-medium">Topics:</span> Soil Health,
                Fertilizer
              </div>
              <p className="text-sm mt-2">
                Techniques to maintain and improve soil fertility for better
                crop yields, including organic and inorganic fertilizer use.
              </p>
              <Button variant="outline" className="w-full mt-2">
                Read Guide
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Water Conservation</CardTitle>
            <CardDescription>Efficient irrigation techniques</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">
                <span className="font-medium">Crops:</span> All Crops
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-medium">Topics:</span> Irrigation, Water
                Management
              </div>
              <p className="text-sm mt-2">
                Learn water-saving irrigation techniques suitable for Rwanda's
                climate, including drip irrigation and rainwater harvesting.
              </p>
              <Button variant="outline" className="w-full mt-2">
                Read Guide
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Maize Cultivation Guide</CardTitle>
            <CardDescription>Complete guide for maize farming</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">
                <span className="font-medium">Crops:</span> Maize
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-medium">Topics:</span> Planting,
                Harvesting, Storage
              </div>
              <p className="text-sm mt-2">
                Comprehensive guide covering all aspects of maize cultivation
                from seed selection to post-harvest handling.
              </p>
              <Button variant="outline" className="w-full mt-2">
                Read Guide
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Coffee Production</CardTitle>
            <CardDescription>Best practices for coffee farming</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">
                <span className="font-medium">Crops:</span> Coffee
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-medium">Topics:</span> Planting,
                Processing, Quality
              </div>
              <p className="text-sm mt-2">
                Learn how to grow high-quality coffee beans, including
                cultivation, harvesting, and processing techniques.
              </p>
              <Button variant="outline" className="w-full mt-2">
                Read Guide
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Sustainable Farming</CardTitle>
            <CardDescription>
              Eco-friendly agricultural practices
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">
                <span className="font-medium">Crops:</span> All Crops
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-medium">Topics:</span> Sustainability,
                Conservation
              </div>
              <p className="text-sm mt-2">
                Discover sustainable farming practices that protect the
                environment while maintaining or improving crop yields.
              </p>
              <Button variant="outline" className="w-full mt-2">
                Read Guide
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
