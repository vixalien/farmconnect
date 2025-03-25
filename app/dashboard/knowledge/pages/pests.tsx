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

export default function Pests() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Pest & Disease Management</CardTitle>
        <CardDescription>
          Identify and manage common agricultural pests and diseases
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row gap-4 mb-6">
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
              <SelectValue placeholder="Pest Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="insects">Insects</SelectItem>
              <SelectItem value="fungi">Fungi</SelectItem>
              <SelectItem value="bacteria">Bacteria</SelectItem>
              <SelectItem value="virus">Viruses</SelectItem>
              <SelectItem value="weeds">Weeds</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-6">
          <div className="border rounded-lg overflow-hidden">
            <div className="bg-muted p-4">
              <h3 className="font-medium">Fall Armyworm</h3>
              <p className="text-sm text-muted-foreground">
                Affects: Maize, Sorghum
              </p>
            </div>
            <div className="p-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="text-sm font-medium mb-2">Identification</h4>
                  <ul className="text-sm space-y-1">
                    <li>
                      • Caterpillars with light-colored inverted Y on head
                    </li>
                    <li>• Feeding damage in whorls and leaves</li>
                    <li>• Ragged holes and frass (excrement) visible</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-2">Management</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Early planting to avoid peak infestation periods</li>
                    <li>• Regular field monitoring</li>
                    <li>• Approved pesticides (follow local guidelines)</li>
                    <li>• Natural enemies like parasitic wasps</li>
                  </ul>
                </div>
              </div>
              <Button variant="outline" className="mt-4 w-full md:w-auto">
                View Detailed Guide
              </Button>
            </div>
          </div>

          <div className="border rounded-lg overflow-hidden">
            <div className="bg-muted p-4">
              <h3 className="font-medium">Bean Rust</h3>
              <p className="text-sm text-muted-foreground">
                Affects: Beans, Legumes
              </p>
            </div>
            <div className="p-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="text-sm font-medium mb-2">Identification</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Small, rusty-brown spots on leaves</li>
                    <li>• Yellow halos around spots</li>
                    <li>• Premature leaf drop</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-2">Management</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Use resistant varieties</li>
                    <li>• Crop rotation with non-host plants</li>
                    <li>• Fungicide application (preventative)</li>
                    <li>• Proper spacing for air circulation</li>
                  </ul>
                </div>
              </div>
              <Button variant="outline" className="mt-4 w-full md:w-auto">
                View Detailed Guide
              </Button>
            </div>
          </div>

          <div className="border rounded-lg overflow-hidden">
            <div className="bg-muted p-4">
              <h3 className="font-medium">Coffee Berry Borer</h3>
              <p className="text-sm text-muted-foreground">Affects: Coffee</p>
            </div>
            <div className="p-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="text-sm font-medium mb-2">Identification</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Small black beetles (1.5-2mm)</li>
                    <li>• Small holes in coffee berries</li>
                    <li>• Damaged beans with tunnels</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-2">Management</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Regular harvesting of all ripe berries</li>
                    <li>• Proper post-harvest sanitation</li>
                    <li>• Biological control with Beauveria bassiana</li>
                    <li>• Traps with alcohol attractants</li>
                  </ul>
                </div>
              </div>
              <Button variant="outline" className="mt-4 w-full md:w-auto">
                View Detailed Guide
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-medium mb-4">Current Pest Alerts</h3>
          <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
            <div className="font-medium text-red-800 mb-2">
              Fall Armyworm Alert - Southern Province
            </div>
            <p className="text-sm text-red-800">
              Increased fall armyworm activity reported in maize fields across
              Southern Province. Farmers are advised to monitor fields closely
              and implement control measures immediately if detected.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
