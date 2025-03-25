import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Events() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Agricultural Events</CardTitle>
        <CardDescription>
          Upcoming workshops, training sessions, and farmer meetings
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="border rounded-lg overflow-hidden">
            <div className="bg-primary/10 p-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <h3 className="font-medium">Sustainable Farming Workshop</h3>
                <div className="text-sm">June 15, 2025 • 9:00 AM - 3:00 PM</div>
              </div>
            </div>
            <div className="p-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <p className="text-sm mb-3">
                    Learn sustainable farming practices that can help you
                    improve soil health, conserve water, and reduce
                    environmental impact while maintaining or improving crop
                    yields.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">Location:</span>
                      <span>Huye Agricultural Center, Southern Province</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">Organizer:</span>
                      <span>Rwanda Agricultural Board</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">Cost:</span>
                      <span>Free</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Button>Register</Button>
                  <Button variant="outline">Add to Calendar</Button>
                </div>
              </div>
            </div>
          </div>

          <div className="border rounded-lg overflow-hidden">
            <div className="bg-primary/10 p-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <h3 className="font-medium">Coffee Quality Training</h3>
                <div className="text-sm">
                  June 22, 2025 • 10:00 AM - 4:00 PM
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <p className="text-sm mb-3">
                    Comprehensive training on coffee quality assessment,
                    processing techniques, and best practices for producing
                    premium coffee beans that can command higher prices in
                    international markets.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">Location:</span>
                      <span>Rwanda Coffee Development Center, Kigali</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">Organizer:</span>
                      <span>Rwanda Coffee Exporters Association</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">Cost:</span>
                      <span>5,000 RWF</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Button>Register</Button>
                  <Button variant="outline">Add to Calendar</Button>
                </div>
              </div>
            </div>
          </div>

          <div className="border rounded-lg overflow-hidden">
            <div className="bg-primary/10 p-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <h3 className="font-medium">Farmer Field Day</h3>
                <div className="text-sm">July 5, 2025 • 8:00 AM - 5:00 PM</div>
              </div>
            </div>
            <div className="p-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <p className="text-sm mb-3">
                    Join us for a day of practical demonstrations, knowledge
                    sharing, and networking with other farmers. See new
                    agricultural techniques in action and learn from successful
                    farmers in your region.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">Location:</span>
                      <span>
                        Nyagatare Demonstration Farm, Eastern Province
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">Organizer:</span>
                      <span>Eastern Province Farmers Cooperative</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">Cost:</span>
                      <span>Free</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Button>Register</Button>
                  <Button variant="outline">Add to Calendar</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
