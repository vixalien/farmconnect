import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Buyers() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Active Buyers</CardTitle>
        <CardDescription>
          Buyers looking to purchase crops in your region
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="font-medium">Rwanda Grain Cooperative</h3>
                <p className="text-sm text-muted-foreground">
                  Looking for: Maize, Beans, Rice
                </p>
                <p className="text-sm text-muted-foreground">
                  Location: Kigali, Rwanda
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-sm">
                  <span className="font-medium">Quantity Needed:</span> 5,000 kg
                </div>
                <div className="text-sm">
                  <span className="font-medium">Offered Price:</span> 13,000
                  RWF/kg
                </div>
                <Button size="sm">Contact Buyer</Button>
              </div>
            </div>
          </div>

          <div className="border rounded-lg p-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="font-medium">Eastern Food Processors</h3>
                <p className="text-sm text-muted-foreground">
                  Looking for: Cassava, Sweet Potatoes
                </p>
                <p className="text-sm text-muted-foreground">
                  Location: Kayonza, Eastern Province
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-sm">
                  <span className="font-medium">Quantity Needed:</span> 3,500 kg
                </div>
                <div className="text-sm">
                  <span className="font-medium">Offered Price:</span> 9,800
                  RWF/kg
                </div>
                <Button size="sm">Contact Buyer</Button>
              </div>
            </div>
          </div>

          <div className="border rounded-lg p-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="font-medium">Rwanda Coffee Exporters</h3>
                <p className="text-sm text-muted-foreground">
                  Looking for: Coffee Beans
                </p>
                <p className="text-sm text-muted-foreground">
                  Location: Huye, Southern Province
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-sm">
                  <span className="font-medium">Quantity Needed:</span> 2,000 kg
                </div>
                <div className="text-sm">
                  <span className="font-medium">Offered Price:</span> 25,500
                  RWF/kg
                </div>
                <Button size="sm">Contact Buyer</Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
