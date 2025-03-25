import { MessageSquare, Users } from "lucide-react";

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

export default function Groups() {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <Select defaultValue="all">
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Group Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Groups</SelectItem>
            <SelectItem value="crop">Crop Specific</SelectItem>
            <SelectItem value="regional">Regional</SelectItem>
            <SelectItem value="cooperative">Cooperatives</SelectItem>
          </SelectContent>
        </Select>

        <div className="flex-1 md:text-right">
          <Button>
            <Users className="h-4 w-4 mr-2" />
            Create New Group
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Southern Maize Growers</CardTitle>
            <CardDescription>
              Maize farmers in Southern Province
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Users className="h-4 w-4 text-muted-foreground" />
                <span>156 members</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MessageSquare className="h-4 w-4 text-muted-foreground" />
                <span>Active discussions</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                A community of maize farmers in Southern Province sharing best
                practices, market information, and support.
              </p>
              <Button variant="outline" className="w-full mt-2">
                Join Group
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Rwanda Coffee Network</CardTitle>
            <CardDescription>Coffee farmers across Rwanda</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Users className="h-4 w-4 text-muted-foreground" />
                <span>243 members</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MessageSquare className="h-4 w-4 text-muted-foreground" />
                <span>Very active discussions</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Connect with coffee farmers across Rwanda to discuss cultivation
                techniques, processing methods, and market opportunities.
              </p>
              <Button variant="outline" className="w-full mt-2">
                Join Group
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Eastern Province Cooperative</CardTitle>
            <CardDescription>
              Farmers cooperative in Eastern Province
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Users className="h-4 w-4 text-muted-foreground" />
                <span>189 members</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MessageSquare className="h-4 w-4 text-muted-foreground" />
                <span>Active discussions</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Official group for members of the Eastern Province Farmers
                Cooperative. Share resources, plan events, and coordinate
                activities.
              </p>
              <Button variant="outline" className="w-full mt-2">
                Request to Join
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Sustainable Farming Rwanda</CardTitle>
            <CardDescription>Eco-friendly farming practices</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Users className="h-4 w-4 text-muted-foreground" />
                <span>127 members</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MessageSquare className="h-4 w-4 text-muted-foreground" />
                <span>Moderately active discussions</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                A community focused on sustainable and organic farming practices
                in Rwanda. Share techniques for reducing environmental impact
                while maintaining yields.
              </p>
              <Button variant="outline" className="w-full mt-2">
                Join Group
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Women in Agriculture</CardTitle>
            <CardDescription>Female farmers across Rwanda</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Users className="h-4 w-4 text-muted-foreground" />
                <span>168 members</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MessageSquare className="h-4 w-4 text-muted-foreground" />
                <span>Very active discussions</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                A supportive community for women in agriculture across Rwanda.
                Share experiences, opportunities, and overcome challenges
                together.
              </p>
              <Button variant="outline" className="w-full mt-2">
                Join Group
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Young Farmers Network</CardTitle>
            <CardDescription>
              Next generation of Rwandan farmers
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Users className="h-4 w-4 text-muted-foreground" />
                <span>142 members</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MessageSquare className="h-4 w-4 text-muted-foreground" />
                <span>Active discussions</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                A community for young and new farmers in Rwanda. Learn from each
                other, share innovative approaches, and build the future of
                Rwandan agriculture.
              </p>
              <Button variant="outline" className="w-full mt-2">
                Join Group
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
