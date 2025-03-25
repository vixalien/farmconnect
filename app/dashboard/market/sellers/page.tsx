import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Sellers() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Active Sellers</CardTitle>
        <CardDescription>Farmers selling crops in your region</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="font-medium">Southern Farmers Association</h3>
                <p className="text-sm text-muted-foreground">
                  Selling: Maize, Beans
                </p>
                <p className="text-sm text-muted-foreground">
                  Location: Huye, Southern Province
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-sm">
                  <span className="font-medium">Available Quantity:</span> 3,200
                  kg
                </div>
                <div className="text-sm">
                  <span className="font-medium">Asking Price:</span> 12,200
                  RWF/kg
                </div>
                <Button size="sm">Contact Seller</Button>
              </div>
            </div>
          </div>

          <div className="border rounded-lg p-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="font-medium">Northern Rice Growers</h3>
                <p className="text-sm text-muted-foreground">Selling: Rice</p>
                <p className="text-sm text-muted-foreground">
                  Location: Musanze, Northern Province
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-sm">
                  <span className="font-medium">Available Quantity:</span> 4,500
                  kg
                </div>
                <div className="text-sm">
                  <span className="font-medium">Asking Price:</span> 17,800
                  RWF/kg
                </div>
                <Button size="sm">Contact Seller</Button>
              </div>
            </div>
          </div>

          <div className="border rounded-lg p-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="font-medium">Eastern Cassava Cooperative</h3>
                <p className="text-sm text-muted-foreground">
                  Selling: Cassava, Sweet Potatoes
                </p>
                <p className="text-sm text-muted-foreground">
                  Location: Nyagatare, Eastern Province
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-sm">
                  <span className="font-medium">Available Quantity:</span> 5,800
                  kg
                </div>
                <div className="text-sm">
                  <span className="font-medium">Asking Price:</span> 9,300
                  RWF/kg
                </div>
                <Button size="sm">Contact Seller</Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
