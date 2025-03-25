import { BookOpen } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { articles } from "@/data/mock/json/articles";

export default function Expert() {
  const allExpertAdvice = articles.filter(
    (article) => article.type === "advice",
  );

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
          {allExpertAdvice.map((advice) => {
            return (
              <div key={advice.title} className="border rounded-lg p-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <BookOpen className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium mb-1">{advice.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      By {advice.author}
                    </p>
                    <p className="text-sm mb-3">{advice.description}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {[...advice.crops, ...advice.topics].map((topic) => {
                        return (
                          <div
                            key={topic}
                            className="text-xs bg-muted px-2 py-1 rounded"
                          >
                            {topic}
                          </div>
                        );
                      })}
                    </div>
                    <Button variant="outline" size="sm">
                      Read Full Article
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
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
