import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Experts() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Connect with Agricultural Experts</CardTitle>
        <CardDescription>
          Get advice from verified agricultural specialists
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="border rounded-lg p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <Avatar className="h-16 w-16">
                <AvatarImage
                  src="/placeholder.svg?height=64&width=64"
                  alt="Dr. Jean Mutesi"
                />
                <AvatarFallback>JM</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h3 className="font-medium mb-1">Dr. Jean Mutesi</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Agricultural Scientist • Crop Specialist
                </p>
                <p className="text-sm mb-3">
                  Specializes in maize and bean cultivation with over 15 years
                  of experience in agricultural research. Can provide advice on
                  crop varieties, disease management, and yield optimization.
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  <div className="text-xs bg-muted px-2 py-1 rounded">
                    Maize
                  </div>
                  <div className="text-xs bg-muted px-2 py-1 rounded">
                    Beans
                  </div>
                  <div className="text-xs bg-muted px-2 py-1 rounded">
                    Crop Diseases
                  </div>
                </div>
                <Button size="sm">Send Message</Button>
              </div>
            </div>
          </div>

          <div className="border rounded-lg p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <Avatar className="h-16 w-16">
                <AvatarImage
                  src="/placeholder.svg?height=64&width=64"
                  alt="Prof. Emmanuel Nzeyimana"
                />
                <AvatarFallback>EN</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h3 className="font-medium mb-1">Prof. Emmanuel Nzeyimana</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Climate Specialist • Agricultural Adaptation
                </p>
                <p className="text-sm mb-3">
                  Expert in climate-smart agriculture with a focus on helping
                  farmers adapt to changing climate conditions in Rwanda.
                  Provides guidance on sustainable farming practices and water
                  management.
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  <div className="text-xs bg-muted px-2 py-1 rounded">
                    Climate Change
                  </div>
                  <div className="text-xs bg-muted px-2 py-1 rounded">
                    Water Management
                  </div>
                  <div className="text-xs bg-muted px-2 py-1 rounded">
                    Sustainability
                  </div>
                </div>
                <Button size="sm">Send Message</Button>
              </div>
            </div>
          </div>

          <div className="border rounded-lg p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <Avatar className="h-16 w-16">
                <AvatarImage
                  src="/placeholder.svg?height=64&width=64"
                  alt="Marie Uwimana"
                />
                <AvatarFallback>MU</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h3 className="font-medium mb-1">Marie Uwimana</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Coffee Specialist • Quality Control
                </p>
                <p className="text-sm mb-3">
                  Specializes in coffee production with expertise in
                  cultivation, processing, and quality control. Can provide
                  advice on producing high-quality coffee beans for premium
                  markets.
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  <div className="text-xs bg-muted px-2 py-1 rounded">
                    Coffee
                  </div>
                  <div className="text-xs bg-muted px-2 py-1 rounded">
                    Processing
                  </div>
                  <div className="text-xs bg-muted px-2 py-1 rounded">
                    Quality Control
                  </div>
                </div>
                <Button size="sm">Send Message</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-medium mb-4">Ask a Question</h3>
          <Card>
            <CardContent className="pt-6">
              <p className="text-sm mb-4">
                Have a specific farming question? Submit your question to our
                panel of agricultural experts for personalized advice.
              </p>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label
                    htmlFor="expert-question"
                    className="text-sm font-medium"
                  >
                    Your Question
                  </label>
                  <textarea
                    id="expert-question"
                    className="w-full min-h-[100px] p-2 border rounded-md"
                    placeholder="Type your farming question here..."
                  ></textarea>
                </div>
                <div className="flex justify-end">
                  <Button>Submit Question</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  );
}
