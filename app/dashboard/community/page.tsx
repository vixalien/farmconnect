import { Filter, MessageSquare, Search, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function CommunityPage() {
  return (
    <div className="container py-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold">Community Network</h1>
          <p className="text-muted-foreground">Connect with other farmers and agricultural experts</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative w-full md:w-auto">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search community..." className="pl-8 w-full md:w-[200px]" />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Tabs defaultValue="discussions" className="mb-8">
        <TabsList>
          <TabsTrigger value="discussions">Discussions</TabsTrigger>
          <TabsTrigger value="groups">Farmer Groups</TabsTrigger>
          <TabsTrigger value="experts">Connect with Experts</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
        </TabsList>

        <TabsContent value="discussions" className="mt-4">
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
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Emmanuel K." />
                    <AvatarFallback>EK</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-medium">Best practices for maize planting this season</h3>
                      <span className="text-xs text-muted-foreground">2 hours ago</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      I've been experimenting with different spacing techniques for maize and wanted to share my
                      findings with the community. I found that spacing plants 75cm between rows and 30cm between plants
                      has given me the best yields in the Southern Province.
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
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Marie N." />
                    <AvatarFallback>MN</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-medium">Weather alert: Heavy rain expected next week</h3>
                      <span className="text-xs text-muted-foreground">5 hours ago</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      The meteorological department has issued a warning for heavy rainfall next week. Here are some
                      steps to protect your crops: ensure proper drainage in your fields, delay any planned fertilizer
                      application, and consider harvesting any mature crops early.
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
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Jean P." />
                    <AvatarFallback>JP</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-medium">Looking for bean seeds - Southern Province</h3>
                      <span className="text-xs text-muted-foreground">1 day ago</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      I'm looking to purchase high-quality bean seeds for the upcoming planting season. Does anyone know
                      where I can find them in the Southern Province? I'm specifically looking for climbing bean
                      varieties that are resistant to common diseases.
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
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Claude M." />
                    <AvatarFallback>CM</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-medium">Market prices for coffee beans increasing</h3>
                      <span className="text-xs text-muted-foreground">2 days ago</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      I've noticed that coffee bean prices have been steadily increasing over the past month. Current
                      prices are around 25,000 RWF/kg for high-quality beans. Has anyone else noticed this trend? Any
                      insights on whether this will continue?
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
        </TabsContent>

        <TabsContent value="groups" className="mt-4">
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
                <CardDescription>Maize farmers in Southern Province</CardDescription>
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
                    A community of maize farmers in Southern Province sharing best practices, market information, and
                    support.
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
                    Connect with coffee farmers across Rwanda to discuss cultivation techniques, processing methods, and
                    market opportunities.
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
                <CardDescription>Farmers cooperative in Eastern Province</CardDescription>
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
                    Official group for members of the Eastern Province Farmers Cooperative. Share resources, plan
                    events, and coordinate activities.
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
                    A community focused on sustainable and organic farming practices in Rwanda. Share techniques for
                    reducing environmental impact while maintaining yields.
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
                    A supportive community for women in agriculture across Rwanda. Share experiences, opportunities, and
                    overcome challenges together.
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
                <CardDescription>Next generation of Rwandan farmers</CardDescription>
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
                    A community for young and new farmers in Rwanda. Learn from each other, share innovative approaches,
                    and build the future of Rwandan agriculture.
                  </p>
                  <Button variant="outline" className="w-full mt-2">
                    Join Group
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="experts" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Connect with Agricultural Experts</CardTitle>
              <CardDescription>Get advice from verified agricultural specialists</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="border rounded-lg p-4">
                  <div className="flex flex-col md:flex-row gap-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src="/placeholder.svg?height=64&width=64" alt="Dr. Jean Mutesi" />
                      <AvatarFallback>JM</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="font-medium mb-1">Dr. Jean Mutesi</h3>
                      <p className="text-sm text-muted-foreground mb-2">Agricultural Scientist • Crop Specialist</p>
                      <p className="text-sm mb-3">
                        Specializes in maize and bean cultivation with over 15 years of experience in agricultural
                        research. Can provide advice on crop varieties, disease management, and yield optimization.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <div className="text-xs bg-muted px-2 py-1 rounded">Maize</div>
                        <div className="text-xs bg-muted px-2 py-1 rounded">Beans</div>
                        <div className="text-xs bg-muted px-2 py-1 rounded">Crop Diseases</div>
                      </div>
                      <Button size="sm">Send Message</Button>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex flex-col md:flex-row gap-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src="/placeholder.svg?height=64&width=64" alt="Prof. Emmanuel Nzeyimana" />
                      <AvatarFallback>EN</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="font-medium mb-1">Prof. Emmanuel Nzeyimana</h3>
                      <p className="text-sm text-muted-foreground mb-2">Climate Specialist • Agricultural Adaptation</p>
                      <p className="text-sm mb-3">
                        Expert in climate-smart agriculture with a focus on helping farmers adapt to changing climate
                        conditions in Rwanda. Provides guidance on sustainable farming practices and water management.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <div className="text-xs bg-muted px-2 py-1 rounded">Climate Change</div>
                        <div className="text-xs bg-muted px-2 py-1 rounded">Water Management</div>
                        <div className="text-xs bg-muted px-2 py-1 rounded">Sustainability</div>
                      </div>
                      <Button size="sm">Send Message</Button>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex flex-col md:flex-row gap-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src="/placeholder.svg?height=64&width=64" alt="Marie Uwimana" />
                      <AvatarFallback>MU</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="font-medium mb-1">Marie Uwimana</h3>
                      <p className="text-sm text-muted-foreground mb-2">Coffee Specialist • Quality Control</p>
                      <p className="text-sm mb-3">
                        Specializes in coffee production with expertise in cultivation, processing, and quality control.
                        Can provide advice on producing high-quality coffee beans for premium markets.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <div className="text-xs bg-muted px-2 py-1 rounded">Coffee</div>
                        <div className="text-xs bg-muted px-2 py-1 rounded">Processing</div>
                        <div className="text-xs bg-muted px-2 py-1 rounded">Quality Control</div>
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
                      Have a specific farming question? Submit your question to our panel of agricultural experts for
                      personalized advice.
                    </p>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label htmlFor="expert-question" className="text-sm font-medium">
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
        </TabsContent>

        <TabsContent value="events" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Agricultural Events</CardTitle>
              <CardDescription>Upcoming workshops, training sessions, and farmer meetings</CardDescription>
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
                          Learn sustainable farming practices that can help you improve soil health, conserve water, and
                          reduce environmental impact while maintaining or improving crop yields.
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
                      <div className="text-sm">June 22, 2025 • 10:00 AM - 4:00 PM</div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex-1">
                        <p className="text-sm mb-3">
                          Comprehensive training on coffee quality assessment, processing techniques, and best practices
                          for producing premium coffee beans that can command higher prices in international markets.
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
                          Join us for a day of practical demonstrations, knowledge sharing, and networking with other
                          farmers. See new agricultural techniques in action and learn from successful farmers in your
                          region.
                        </p>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2">
                            <span className="font-medium">Location:</span>
                            <span>Nyagatare Demonstration Farm, Eastern Province</span>
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
        </TabsContent>
      </Tabs>
    </div>
  )
}

