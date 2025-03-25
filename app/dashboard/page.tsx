import { BarChart3, BookOpen, Calendar, Clock, Leaf, ShoppingCart, TrendingUp, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Dashboard() {
  return (
    <div className="container py-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      {/* Overview Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Current Market Prices</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12,500 RWF</div>
            <p className="text-xs text-muted-foreground">Average price for maize (per kg)</p>
            <div className="mt-2 flex items-center text-sm text-green-600">
              <TrendingUp className="h-4 w-4 mr-1" />
              <span>+5.2% from last week</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Weather Forecast</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Partly Cloudy</div>
            <p className="text-xs text-muted-foreground">Today's forecast for Southern Province</p>
            <div className="mt-2 flex items-center text-sm">
              <span>24°C / 18°C</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Community Activity</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">New posts in your community</p>
            <div className="mt-2 flex items-center text-sm">
              <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
              <span className="text-muted-foreground">Last updated 2 hours ago</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Recent Transactions</CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Transactions this week</p>
            <div className="mt-2 flex items-center text-sm">
              <span className="text-muted-foreground">Total value: 45,000 RWF</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Market Prices */}
      <div className="grid gap-6 md:grid-cols-2 mb-8">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Latest Market Prices</CardTitle>
            <CardDescription>Current prices for popular crops in your region</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center mr-3">
                    <Leaf className="h-4 w-4 text-yellow-600" />
                  </div>
                  <div>
                    <div className="font-medium">Maize</div>
                    <div className="text-xs text-muted-foreground">Per kg</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium">12,500 RWF</div>
                  <div className="text-xs text-green-600">+5.2%</div>
                </div>
              </div>

              <div className="flex items-center justify-between pb-2 border-b">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <Leaf className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <div className="font-medium">Beans</div>
                    <div className="text-xs text-muted-foreground">Per kg</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium">15,800 RWF</div>
                  <div className="text-xs text-red-600">-2.1%</div>
                </div>
              </div>

              <div className="flex items-center justify-between pb-2 border-b">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center mr-3">
                    <Leaf className="h-4 w-4 text-amber-600" />
                  </div>
                  <div>
                    <div className="font-medium">Rice</div>
                    <div className="text-xs text-muted-foreground">Per kg</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium">18,200 RWF</div>
                  <div className="text-xs text-green-600">+1.8%</div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <Leaf className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium">Cassava</div>
                    <div className="text-xs text-muted-foreground">Per kg</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium">9,500 RWF</div>
                  <div className="text-xs text-green-600">+3.5%</div>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <Button variant="outline" className="w-full">
                View All Prices
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Recent Community Posts</CardTitle>
            <CardDescription>Latest discussions from your farming community</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="pb-3 border-b">
                <div className="flex items-center justify-between mb-1">
                  <div className="font-medium">Best practices for maize planting this season</div>
                  <div className="text-xs text-muted-foreground">2h ago</div>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  I've been experimenting with different spacing techniques for maize and wanted to share my findings
                  with the community...
                </p>
                <div className="mt-2 flex items-center text-xs text-muted-foreground">
                  <Users className="h-3 w-3 mr-1" />
                  <span>Posted by Emmanuel K. • 12 replies</span>
                </div>
              </div>

              <div className="pb-3 border-b">
                <div className="flex items-center justify-between mb-1">
                  <div className="font-medium">Weather alert: Heavy rain expected next week</div>
                  <div className="text-xs text-muted-foreground">5h ago</div>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  The meteorological department has issued a warning for heavy rainfall next week. Here are some steps
                  to protect your crops...
                </p>
                <div className="mt-2 flex items-center text-xs text-muted-foreground">
                  <Users className="h-3 w-3 mr-1" />
                  <span>Posted by Marie N. • 8 replies</span>
                </div>
              </div>

              <div className="pb-3">
                <div className="flex items-center justify-between mb-1">
                  <div className="font-medium">Looking for bean seeds - Southern Province</div>
                  <div className="text-xs text-muted-foreground">1d ago</div>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  I'm looking to purchase high-quality bean seeds for the upcoming planting season. Does anyone know
                  where I can find them in the Southern Province?
                </p>
                <div className="mt-2 flex items-center text-xs text-muted-foreground">
                  <Users className="h-3 w-3 mr-1" />
                  <span>Posted by Jean P. • 5 replies</span>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <Button variant="outline" className="w-full">
                View All Posts
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Knowledge Resources */}
      <div className="mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Featured Knowledge Resources</CardTitle>
            <CardDescription>Latest agricultural guides and best practices</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="bg-muted rounded-lg p-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <BookOpen className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-medium mb-1">Seasonal Planting Guide</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Learn the optimal planting times for different crops in Rwanda's climate zones.
                </p>
                <Button variant="link" className="p-0 h-auto">
                  Read Guide
                </Button>
              </div>

              <div className="bg-muted rounded-lg p-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <BookOpen className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-medium mb-1">Pest Management</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Effective strategies for managing common pests affecting crops in Rwanda.
                </p>
                <Button variant="link" className="p-0 h-auto">
                  Read Guide
                </Button>
              </div>

              <div className="bg-muted rounded-lg p-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <BookOpen className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-medium mb-1">Soil Health Management</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Techniques to maintain and improve soil fertility for better crop yields.
                </p>
                <Button variant="link" className="p-0 h-auto">
                  Read Guide
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

