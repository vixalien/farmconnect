import { BookOpen } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Expert() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Expert Advice</CardTitle>
        <CardDescription>
          Guidance from agricultural experts and specialists
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="border rounded-lg p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium mb-1">
                  Optimizing Maize Yields in Rwanda
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  By Dr. Jean Mutesi, Agricultural Scientist
                </p>
                <p className="text-sm mb-3">
                  This comprehensive guide provides expert advice on maximizing
                  maize yields in Rwanda's unique climate conditions. Learn
                  about optimal planting densities, fertilizer application
                  rates, and timing for different regions.
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  <div className="text-xs bg-muted px-2 py-1 rounded">
                    Maize
                  </div>
                  <div className="text-xs bg-muted px-2 py-1 rounded">
                    Yield Optimization
                  </div>
                  <div className="text-xs bg-muted px-2 py-1 rounded">
                    Fertilizer
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Read Full Article
                </Button>
              </div>
            </div>
          </div>

          <div className="border rounded-lg p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium mb-1">
                  Climate-Smart Agriculture for Rwandan Farmers
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  By Prof. Emmanuel Nzeyimana, Climate Specialist
                </p>
                <p className="text-sm mb-3">
                  Learn how to adapt your farming practices to changing climate
                  conditions in Rwanda. This expert guide covers
                  drought-resistant varieties, water conservation techniques,
                  and sustainable farming methods.
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  <div className="text-xs bg-muted px-2 py-1 rounded">
                    Climate Change
                  </div>
                  <div className="text-xs bg-muted px-2 py-1 rounded">
                    Sustainability
                  </div>
                  <div className="text-xs bg-muted px-2 py-1 rounded">
                    Water Management
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Read Full Article
                </Button>
              </div>
            </div>
          </div>

          <div className="border rounded-lg p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium mb-1">
                  Improving Coffee Quality for Premium Markets
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  By Marie Uwimana, Coffee Specialist
                </p>
                <p className="text-sm mb-3">
                  Discover expert techniques for producing high-quality coffee
                  that can command premium prices in international markets. This
                  guide covers cultivation, harvesting, processing, and quality
                  control.
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  <div className="text-xs bg-muted px-2 py-1 rounded">
                    Coffee
                  </div>
                  <div className="text-xs bg-muted px-2 py-1 rounded">
                    Quality
                  </div>
                  <div className="text-xs bg-muted px-2 py-1 rounded">
                    Export
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Read Full Article
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-medium mb-4">Ask an Expert</h3>
          <Card>
            <CardContent className="pt-6">
              <p className="text-sm mb-4">
                Have a specific farming question? Submit your question to our
                panel of agricultural experts for personalized advice.
              </p>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="question" className="text-sm font-medium">
                    Your Question
                  </label>
                  <textarea
                    id="question"
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
