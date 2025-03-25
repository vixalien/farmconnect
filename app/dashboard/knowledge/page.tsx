import { BookOpen, Filter, Search } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function KnowledgePage() {
  return (
    <div className="container py-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold">Knowledge Repository</h1>
          <p className="text-muted-foreground">Access agricultural best practices and guides</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative w-full md:w-auto">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search resources..." className="pl-8 w-full md:w-[200px]" />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Tabs defaultValue="guides" className="mb-8">
        <TabsList>
          <TabsTrigger value="guides">Farming Guides</TabsTrigger>
          <TabsTrigger value="weather">Weather Information</TabsTrigger>
          <TabsTrigger value="pests">Pest Management</TabsTrigger>
          <TabsTrigger value="expert">Expert Advice</TabsTrigger>
        </TabsList>

        <TabsContent value="guides" className="mt-4">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <Select defaultValue="all">
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Crop Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Crops</SelectItem>
                <SelectItem value="maize">Maize</SelectItem>
                <SelectItem value="beans">Beans</SelectItem>
                <SelectItem value="rice">Rice</SelectItem>
                <SelectItem value="cassava">Cassava</SelectItem>
                <SelectItem value="coffee">Coffee</SelectItem>
              </SelectContent>
            </Select>

            <Select defaultValue="all">
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Topic" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Topics</SelectItem>
                <SelectItem value="planting">Planting</SelectItem>
                <SelectItem value="harvesting">Harvesting</SelectItem>
                <SelectItem value="irrigation">Irrigation</SelectItem>
                <SelectItem value="fertilizer">Fertilizer</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Seasonal Planting Guide</CardTitle>
                <CardDescription>Best practices for planting in Rwanda</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">
                    <span className="font-medium">Crops:</span> Maize, Beans, Rice
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <span className="font-medium">Topics:</span> Planting, Seasonal Planning
                  </div>
                  <p className="text-sm mt-2">
                    Learn the optimal planting times for different crops in Rwanda's climate zones, with specific
                    guidance for each province.
                  </p>
                  <Button variant="outline" className="w-full mt-2">
                    Read Guide
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Soil Health Management</CardTitle>
                <CardDescription>Maintaining soil fertility</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">
                    <span className="font-medium">Crops:</span> All Crops
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <span className="font-medium">Topics:</span> Soil Health, Fertilizer
                  </div>
                  <p className="text-sm mt-2">
                    Techniques to maintain and improve soil fertility for better crop yields, including organic and
                    inorganic fertilizer use.
                  </p>
                  <Button variant="outline" className="w-full mt-2">
                    Read Guide
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Water Conservation</CardTitle>
                <CardDescription>Efficient irrigation techniques</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">
                    <span className="font-medium">Crops:</span> All Crops
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <span className="font-medium">Topics:</span> Irrigation, Water Management
                  </div>
                  <p className="text-sm mt-2">
                    Learn water-saving irrigation techniques suitable for Rwanda's climate, including drip irrigation
                    and rainwater harvesting.
                  </p>
                  <Button variant="outline" className="w-full mt-2">
                    Read Guide
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Maize Cultivation Guide</CardTitle>
                <CardDescription>Complete guide for maize farming</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">
                    <span className="font-medium">Crops:</span> Maize
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <span className="font-medium">Topics:</span> Planting, Harvesting, Storage
                  </div>
                  <p className="text-sm mt-2">
                    Comprehensive guide covering all aspects of maize cultivation from seed selection to post-harvest
                    handling.
                  </p>
                  <Button variant="outline" className="w-full mt-2">
                    Read Guide
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Coffee Production</CardTitle>
                <CardDescription>Best practices for coffee farming</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">
                    <span className="font-medium">Crops:</span> Coffee
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <span className="font-medium">Topics:</span> Planting, Processing, Quality
                  </div>
                  <p className="text-sm mt-2">
                    Learn how to grow high-quality coffee beans, including cultivation, harvesting, and processing
                    techniques.
                  </p>
                  <Button variant="outline" className="w-full mt-2">
                    Read Guide
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Sustainable Farming</CardTitle>
                <CardDescription>Eco-friendly agricultural practices</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">
                    <span className="font-medium">Crops:</span> All Crops
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <span className="font-medium">Topics:</span> Sustainability, Conservation
                  </div>
                  <p className="text-sm mt-2">
                    Discover sustainable farming practices that protect the environment while maintaining or improving
                    crop yields.
                  </p>
                  <Button variant="outline" className="w-full mt-2">
                    Read Guide
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="weather" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Weather Information</CardTitle>
              <CardDescription>Current and forecasted weather for agricultural planning</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <Select defaultValue="southern">
                  <SelectTrigger className="w-full md:w-[180px]">
                    <SelectValue placeholder="Select Region" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="southern">Southern Province</SelectItem>
                    <SelectItem value="eastern">Eastern Province</SelectItem>
                    <SelectItem value="northern">Northern Province</SelectItem>
                    <SelectItem value="western">Western Province</SelectItem>
                    <SelectItem value="kigali">Kigali</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-lg font-medium mb-4">Current Weather</h3>
                  <div className="bg-muted p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-2xl font-bold">24°C</div>
                        <div className="text-sm text-muted-foreground">Partly Cloudy</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm">Humidity: 65%</div>
                        <div className="text-sm">Wind: 8 km/h</div>
                      </div>
                    </div>
                    <div className="text-sm">
                      <p className="mb-2">
                        <span className="font-medium">Last Updated:</span> Today, 10:30 AM
                      </p>
                      <p>
                        <span className="font-medium">Agricultural Impact:</span> Good conditions for field work.
                        Consider irrigation for newly planted crops.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">5-Day Forecast</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="font-medium">Tomorrow</div>
                      <div>Sunny</div>
                      <div>26°C / 18°C</div>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="font-medium">Wednesday</div>
                      <div>Partly Cloudy</div>
                      <div>25°C / 17°C</div>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="font-medium">Thursday</div>
                      <div>Rain Showers</div>
                      <div>22°C / 16°C</div>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="font-medium">Friday</div>
                      <div>Heavy Rain</div>
                      <div>20°C / 15°C</div>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="font-medium">Saturday</div>
                      <div>Cloudy</div>
                      <div>21°C / 16°C</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-medium mb-4">Weather Alerts</h3>
                <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                  <div className="font-medium text-yellow-800 mb-2">Heavy Rainfall Warning</div>
                  <p className="text-sm text-yellow-800">
                    Heavy rainfall expected on Thursday and Friday. Farmers are advised to prepare drainage systems and
                    protect sensitive crops. Risk of flooding in low-lying areas.
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-medium mb-4">Seasonal Outlook</h3>
                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-sm mb-3">
                    <span className="font-medium">Next 30 Days:</span> Slightly above average rainfall expected for
                    Southern Province. Temperatures will remain near seasonal averages.
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">Agricultural Recommendations:</span> Good planting conditions for most
                    crops. Consider delayed planting for drought-sensitive varieties. Monitor soil moisture levels
                    regularly.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pests" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Pest & Disease Management</CardTitle>
              <CardDescription>Identify and manage common agricultural pests and diseases</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <Select defaultValue="all">
                  <SelectTrigger className="w-full md:w-[180px]">
                    <SelectValue placeholder="Crop Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Crops</SelectItem>
                    <SelectItem value="maize">Maize</SelectItem>
                    <SelectItem value="beans">Beans</SelectItem>
                    <SelectItem value="rice">Rice</SelectItem>
                    <SelectItem value="cassava">Cassava</SelectItem>
                    <SelectItem value="coffee">Coffee</SelectItem>
                  </SelectContent>
                </Select>

                <Select defaultValue="all">
                  <SelectTrigger className="w-full md:w-[180px]">
                    <SelectValue placeholder="Pest Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="insects">Insects</SelectItem>
                    <SelectItem value="fungi">Fungi</SelectItem>
                    <SelectItem value="bacteria">Bacteria</SelectItem>
                    <SelectItem value="virus">Viruses</SelectItem>
                    <SelectItem value="weeds">Weeds</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-6">
                <div className="border rounded-lg overflow-hidden">
                  <div className="bg-muted p-4">
                    <h3 className="font-medium">Fall Armyworm</h3>
                    <p className="text-sm text-muted-foreground">Affects: Maize, Sorghum</p>
                  </div>
                  <div className="p-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <h4 className="text-sm font-medium mb-2">Identification</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Caterpillars with light-colored inverted Y on head</li>
                          <li>• Feeding damage in whorls and leaves</li>
                          <li>• Ragged holes and frass (excrement) visible</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium mb-2">Management</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Early planting to avoid peak infestation periods</li>
                          <li>• Regular field monitoring</li>
                          <li>• Approved pesticides (follow local guidelines)</li>
                          <li>• Natural enemies like parasitic wasps</li>
                        </ul>
                      </div>
                    </div>
                    <Button variant="outline" className="mt-4 w-full md:w-auto">
                      View Detailed Guide
                    </Button>
                  </div>
                </div>

                <div className="border rounded-lg overflow-hidden">
                  <div className="bg-muted p-4">
                    <h3 className="font-medium">Bean Rust</h3>
                    <p className="text-sm text-muted-foreground">Affects: Beans, Legumes</p>
                  </div>
                  <div className="p-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <h4 className="text-sm font-medium mb-2">Identification</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Small, rusty-brown spots on leaves</li>
                          <li>• Yellow halos around spots</li>
                          <li>• Premature leaf drop</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium mb-2">Management</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Use resistant varieties</li>
                          <li>• Crop rotation with non-host plants</li>
                          <li>• Fungicide application (preventative)</li>
                          <li>• Proper spacing for air circulation</li>
                        </ul>
                      </div>
                    </div>
                    <Button variant="outline" className="mt-4 w-full md:w-auto">
                      View Detailed Guide
                    </Button>
                  </div>
                </div>

                <div className="border rounded-lg overflow-hidden">
                  <div className="bg-muted p-4">
                    <h3 className="font-medium">Coffee Berry Borer</h3>
                    <p className="text-sm text-muted-foreground">Affects: Coffee</p>
                  </div>
                  <div className="p-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <h4 className="text-sm font-medium mb-2">Identification</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Small black beetles (1.5-2mm)</li>
                          <li>• Small holes in coffee berries</li>
                          <li>• Damaged beans with tunnels</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium mb-2">Management</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Regular harvesting of all ripe berries</li>
                          <li>• Proper post-harvest sanitation</li>
                          <li>• Biological control with Beauveria bassiana</li>
                          <li>• Traps with alcohol attractants</li>
                        </ul>
                      </div>
                    </div>
                    <Button variant="outline" className="mt-4 w-full md:w-auto">
                      View Detailed Guide
                    </Button>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-medium mb-4">Current Pest Alerts</h3>
                <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                  <div className="font-medium text-red-800 mb-2">Fall Armyworm Alert - Southern Province</div>
                  <p className="text-sm text-red-800">
                    Increased fall armyworm activity reported in maize fields across Southern Province. Farmers are
                    advised to monitor fields closely and implement control measures immediately if detected.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="expert" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Expert Advice</CardTitle>
              <CardDescription>Guidance from agricultural experts and specialists</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="border rounded-lg p-4">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <BookOpen className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium mb-1">Optimizing Maize Yields in Rwanda</h3>
                      <p className="text-sm text-muted-foreground mb-2">By Dr. Jean Mutesi, Agricultural Scientist</p>
                      <p className="text-sm mb-3">
                        This comprehensive guide provides expert advice on maximizing maize yields in Rwanda's unique
                        climate conditions. Learn about optimal planting densities, fertilizer application rates, and
                        timing for different regions.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <div className="text-xs bg-muted px-2 py-1 rounded">Maize</div>
                        <div className="text-xs bg-muted px-2 py-1 rounded">Yield Optimization</div>
                        <div className="text-xs bg-muted px-2 py-1 rounded">Fertilizer</div>
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
                      <h3 className="font-medium mb-1">Climate-Smart Agriculture for Rwandan Farmers</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        By Prof. Emmanuel Nzeyimana, Climate Specialist
                      </p>
                      <p className="text-sm mb-3">
                        Learn how to adapt your farming practices to changing climate conditions in Rwanda. This expert
                        guide covers drought-resistant varieties, water conservation techniques, and sustainable farming
                        methods.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <div className="text-xs bg-muted px-2 py-1 rounded">Climate Change</div>
                        <div className="text-xs bg-muted px-2 py-1 rounded">Sustainability</div>
                        <div className="text-xs bg-muted px-2 py-1 rounded">Water Management</div>
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
                      <h3 className="font-medium mb-1">Improving Coffee Quality for Premium Markets</h3>
                      <p className="text-sm text-muted-foreground mb-2">By Marie Uwimana, Coffee Specialist</p>
                      <p className="text-sm mb-3">
                        Discover expert techniques for producing high-quality coffee that can command premium prices in
                        international markets. This guide covers cultivation, harvesting, processing, and quality
                        control.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <div className="text-xs bg-muted px-2 py-1 rounded">Coffee</div>
                        <div className="text-xs bg-muted px-2 py-1 rounded">Quality</div>
                        <div className="text-xs bg-muted px-2 py-1 rounded">Export</div>
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
                      Have a specific farming question? Submit your question to our panel of agricultural experts for
                      personalized advice.
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
        </TabsContent>
      </Tabs>
    </div>
  )
}

