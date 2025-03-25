import Link from "next/link"
import { ArrowRight, Leaf, BarChart3, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import LanguageSwitcher from "@/components/language-switcher"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Leaf className="h-6 w-6 text-green-600" />
            <span className="text-xl font-bold">FarmConnect Rwanda</span>
          </div>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <Link href="/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Link href="/register">
              <Button>Register</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-green-50 to-white dark:from-green-950 dark:to-background">
          <div className="container grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Empowering Rwandan Farmers with Digital Solutions
              </h1>
              <p className="text-xl text-muted-foreground">
                Access real-time market information, agricultural best practices, and connect with a community of
                farmers and experts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/register">
                  <Button size="lg" className="w-full sm:w-auto">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=800&width=1200"
                alt="Rwandan farmers using mobile technology"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Key Features</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                FarmConnect Rwanda provides essential tools to help farmers succeed in the digital age.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="bg-card rounded-lg p-6 shadow-sm border">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Market Information</h3>
                <p className="text-muted-foreground mb-4">
                  Access real-time market prices, trends, and connect directly with buyers.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-green-600" />
                    Real-time price tracking
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-green-600" />
                    Market trend analysis
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-green-600" />
                    Buyer-seller matching
                  </li>
                </ul>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm border">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Leaf className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Knowledge Repository</h3>
                <p className="text-muted-foreground mb-4">
                  Learn agricultural best practices, weather information, and crop management.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-green-600" />
                    Best practices documentation
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-green-600" />
                    Weather alerts and forecasting
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-green-600" />
                    Crop management guides
                  </li>
                </ul>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm border">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Community Network</h3>
                <p className="text-muted-foreground mb-4">
                  Connect with other farmers and agricultural experts to share knowledge.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-green-600" />
                    Farmer-to-farmer messaging
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-green-600" />
                    Expert consultation
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-green-600" />
                    Community forums
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-muted">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-4 text-center">
              <div>
                <p className="text-4xl font-bold text-primary">70%</p>
                <p className="text-muted-foreground">of Rwanda's workforce are smallholder farmers</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary">25%</p>
                <p className="text-muted-foreground">projected income increase through market intelligence</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary">3</p>
                <p className="text-muted-foreground">provinces initially targeted (Southern, Eastern, Northern)</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary">30-40%</p>
                <p className="text-muted-foreground">reduction in transaction costs through direct connections</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container">
            <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Join FarmConnect Rwanda Today</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Be part of the agricultural revolution in Rwanda. Connect with markets, access knowledge, and grow your
                farming business.
              </p>
              <Link href="/register">
                <Button size="lg" variant="secondary">
                  Register Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-12 bg-muted/50">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="h-6 w-6 text-green-600" />
                <span className="text-xl font-bold">FarmConnect Rwanda</span>
              </div>
              <p className="text-muted-foreground">
                Empowering Rwandan farmers with digital solutions for market access and knowledge sharing.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Features</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/market" className="text-muted-foreground hover:text-foreground">
                    Market Information
                  </Link>
                </li>
                <li>
                  <Link href="/knowledge" className="text-muted-foreground hover:text-foreground">
                    Knowledge Repository
                  </Link>
                </li>
                <li>
                  <Link href="/community" className="text-muted-foreground hover:text-foreground">
                    Community Network
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-foreground">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-muted-foreground hover:text-foreground">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>© 2025 FarmConnect Rwanda. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

