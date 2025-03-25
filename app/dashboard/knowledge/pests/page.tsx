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

import { pests } from "@/data/mock/json/pests";

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
          {pests.map((pest) => {
            return (
              <div
                key={pest.name}
                className="border rounded-lg overflow-hidden"
              >
                <div className="bg-muted p-4">
                  <h3 className="font-medium">{pest.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    Affects: {pest.crops.join(", ")}
                  </p>
                </div>
                <div className="p-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <h4 className="text-sm font-medium mb-2">
                        Identification
                      </h4>
                      <ul className="text-sm space-y-1">
                        {pest.identification.map((identification) => {
                          return (
                            <li key={identification}>• {identification}</li>
                          );
                        })}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-2">Management</h4>
                      <ul className="text-sm space-y-1">
                        {pest.management.map((management) => {
                          return <li key={management}>• {management}</li>;
                        })}
                      </ul>
                    </div>
                  </div>
                  <Button variant="outline" className="mt-4 w-full md:w-auto">
                    View Detailed Guide
                  </Button>
                </div>
              </div>
            );
          })}
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
