import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { experts } from "@/data/mock/json/experts";

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
          {experts.map((expert) => {
            return (
              <div key={expert.name} className="border rounded-lg p-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage
                      src={`https://avatar.iran.liara.run/public/${expert.gender === "female" ? "girl" : "boy"}?etag=${expert.initials ?? expert.name}`}
                      alt={expert.name}
                    />
                    <AvatarFallback>{expert.initials}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-medium mb-1">{expert.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {expert.roles.join(" • ")}
                    </p>
                    <p className="text-sm mb-3">{expert.bio}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {[...expert.topics, ...expert.crops].map((topic) => {
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
                    <Button size="sm">Send Message</Button>
                  </div>
                </div>
              </div>
            );
          })}
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
