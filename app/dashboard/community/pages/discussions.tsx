import { MessageSquare, Users } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Discussions() {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <Select defaultValue="all">
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Topic" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Topics</SelectItem>
            <SelectItem value="crops">Crop Management</SelectItem>
            <SelectItem value="market">Market Information</SelectItem>
            <SelectItem value="weather">Weather</SelectItem>
            <SelectItem value="equipment">Equipment</SelectItem>
          </SelectContent>
        </Select>

        <Select defaultValue="all">
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Region" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Regions</SelectItem>
            <SelectItem value="southern">Southern Province</SelectItem>
            <SelectItem value="eastern">Eastern Province</SelectItem>
            <SelectItem value="northern">Northern Province</SelectItem>
            <SelectItem value="western">Western Province</SelectItem>
            <SelectItem value="kigali">Kigali</SelectItem>
          </SelectContent>
        </Select>

        <div className="flex-1 md:text-right">
          <Button>
            <MessageSquare className="h-4 w-4 mr-2" />
            Start New Discussion
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-start gap-4">
              <Avatar className="h-10 w-10">
                <AvatarImage
                  src="/placeholder.svg?height=40&width=40"
                  alt="Emmanuel K."
                />
                <AvatarFallback>EK</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-medium">
                    Best practices for maize planting this season
                  </h3>
                  <span className="text-xs text-muted-foreground">
                    2 hours ago
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  I've been experimenting with different spacing techniques for
                  maize and wanted to share my findings with the community. I
                  found that spacing plants 75cm between rows and 30cm between
                  plants has given me the best yields in the Southern Province.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Users className="h-3 w-3" />
                    <span>Posted by Emmanuel K.</span>
                    <span>•</span>
                    <span>12 replies</span>
                  </div>
                  <Button variant="ghost" size="sm">
                    View Discussion
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-start gap-4">
              <Avatar className="h-10 w-10">
                <AvatarImage
                  src="/placeholder.svg?height=40&width=40"
                  alt="Marie N."
                />
                <AvatarFallback>MN</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-medium">
                    Weather alert: Heavy rain expected next week
                  </h3>
                  <span className="text-xs text-muted-foreground">
                    5 hours ago
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  The meteorological department has issued a warning for heavy
                  rainfall next week. Here are some steps to protect your crops:
                  ensure proper drainage in your fields, delay any planned
                  fertilizer application, and consider harvesting any mature
                  crops early.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Users className="h-3 w-3" />
                    <span>Posted by Marie N.</span>
                    <span>•</span>
                    <span>8 replies</span>
                  </div>
                  <Button variant="ghost" size="sm">
                    View Discussion
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-start gap-4">
              <Avatar className="h-10 w-10">
                <AvatarImage
                  src="/placeholder.svg?height=40&width=40"
                  alt="Jean P."
                />
                <AvatarFallback>JP</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-medium">
                    Looking for bean seeds - Southern Province
                  </h3>
                  <span className="text-xs text-muted-foreground">
                    1 day ago
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  I'm looking to purchase high-quality bean seeds for the
                  upcoming planting season. Does anyone know where I can find
                  them in the Southern Province? I'm specifically looking for
                  climbing bean varieties that are resistant to common diseases.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Users className="h-3 w-3" />
                    <span>Posted by Jean P.</span>
                    <span>•</span>
                    <span>5 replies</span>
                  </div>
                  <Button variant="ghost" size="sm">
                    View Discussion
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-start gap-4">
              <Avatar className="h-10 w-10">
                <AvatarImage
                  src="/placeholder.svg?height=40&width=40"
                  alt="Claude M."
                />
                <AvatarFallback>CM</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-medium">
                    Market prices for coffee beans increasing
                  </h3>
                  <span className="text-xs text-muted-foreground">
                    2 days ago
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  I've noticed that coffee bean prices have been steadily
                  increasing over the past month. Current prices are around
                  25,000 RWF/kg for high-quality beans. Has anyone else noticed
                  this trend? Any insights on whether this will continue?
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Users className="h-3 w-3" />
                    <span>Posted by Claude M.</span>
                    <span>•</span>
                    <span>15 replies</span>
                  </div>
                  <Button variant="ghost" size="sm">
                    View Discussion
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
