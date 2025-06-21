import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { ShoppingCart, Star, Truck, Shield, Headphones, Menu, Sparkles } from "lucide-react"

export default function LandingPage() {
  const mahsulotlar = [
    {
      id: 1,
      nom: "Premium Smartfon",
      narx: 2500000,
      chegirma_narx: 2000000,
      rasm: "/placeholder.svg?height=300&width=300",
      rang: "Qora",
      mavjud: true,
    },
    {
      id: 2,
      nom: "Wireless Quloqchin",
      narx: 500000,
      chegirma_narx: null,
      rasm: "/placeholder.svg?height=300&width=300",
      rang: "Oq",
      mavjud: true,
    },
    {
      id: 3,
      nom: "Smart Soat",
      narx: 1200000,
      chegirma_narx: 900000,
      rasm: "/placeholder.svg?height=300&width=300",
      rang: "Kumush",
      mavjud: false,
    },
  ]

  const chegirma_foizi = (asl_narx: number, chegirma_narx: number) => {
    return Math.round(((asl_narx - chegirma_narx) / asl_narx) * 100)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <ShoppingCart className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                <Sparkles className="h-3 w-3 text-yellow-500 absolute -top-1 -right-1" />
              </div>
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                TechStore
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6 lg:space-x-8">
              <Link href="#mahsulotlar" className="text-muted-foreground hover:text-primary transition-colors">
                Mahsulotlar
              </Link>
              <Link href="#xizmatlar" className="text-muted-foreground hover:text-primary transition-colors">
                Xizmatlar
              </Link>
              <Link href="#aloqa" className="text-muted-foreground hover:text-primary transition-colors">
                Aloqa
              </Link>
            </nav>

            <div className="flex items-center space-x-2 sm:space-x-4">
              {/* Mobile menu button */}
              <Button variant="ghost" size="sm" className="md:hidden hover:bg-muted/50">
                <Menu className="h-5 w-5" />
              </Button>

              <ThemeToggle />

              <Link href="/rava">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs sm:text-sm border-border/50 hover:border-primary/50 hover:bg-muted/50"
                >
                  Admin
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="gradient-bg text-primary-foreground py-12 sm:py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background/10 to-background/20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
            Eng Yaxshi Texnologiyalar
          </h1>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed opacity-90">
            Zamonaviy gadjetlar va aksessuarlar eng qulay narxlarda. Sifatli mahsulotlar va tez yetkazib berish.
          </p>
          <Button
            size="lg"
            className="bg-card text-foreground hover:bg-card/90 text-sm sm:text-base px-6 sm:px-8 shadow-lg border border-border/20"
          >
            Mahsulotlarni Ko'rish
          </Button>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 sm:py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-foreground">
            Nima Uchun Bizni Tanlaysiz?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center p-4 sm:p-6 bg-card/80 backdrop-blur-sm rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-md">
              <Truck className="h-10 w-10 sm:h-12 sm:w-12 text-primary mx-auto mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-foreground">Tez Yetkazib Berish</h3>
              <p className="text-muted-foreground text-sm sm:text-base">
                24 soat ichida barcha buyurtmalarni yetkazib beramiz
              </p>
            </div>
            <div className="text-center p-4 sm:p-6 bg-card/80 backdrop-blur-sm rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-md">
              <Shield className="h-10 w-10 sm:h-12 sm:w-12 text-primary mx-auto mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-foreground">Kafolat</h3>
              <p className="text-muted-foreground text-sm sm:text-base">
                Barcha mahsulotlarga 1 yillik kafolat beramiz
              </p>
            </div>
            <div className="text-center p-4 sm:p-6 bg-card/80 backdrop-blur-sm rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-md sm:col-span-2 lg:col-span-1">
              <Headphones className="h-10 w-10 sm:h-12 sm:w-12 text-primary mx-auto mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-foreground">24/7 Qo'llab-quvvatlash</h3>
              <p className="text-muted-foreground text-sm sm:text-base">
                Har qanday savolingiz bo'yicha yordam beramiz
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="mahsulotlar" className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-foreground">
            Mashhur Mahsulotlar
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {mahsulotlar.map((mahsulot) => (
              <Card
                key={mahsulot.id}
                className="overflow-hidden hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30 group bg-card/80 backdrop-blur-sm"
              >
                <div className="relative">
                  <img
                    src={mahsulot.rasm || "/placeholder.svg"}
                    alt={mahsulot.nom}
                    className="w-full h-48 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {mahsulot.chegirma_narx && (
                    <Badge className="absolute top-2 right-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs sm:text-sm shadow-lg">
                      -{chegirma_foizi(mahsulot.narx, mahsulot.chegirma_narx)}%
                    </Badge>
                  )}
                  {!mahsulot.mavjud && (
                    <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center">
                      <Badge variant="secondary" className="text-sm sm:text-base bg-muted text-muted-foreground">
                        Tugagan
                      </Badge>
                    </div>
                  )}
                </div>
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="text-base sm:text-lg text-foreground">{mahsulot.nom}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">Rang: {mahsulot.rang}</CardDescription>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div>
                      {mahsulot.chegirma_narx ? (
                        <div>
                          <span className="text-lg sm:text-2xl font-bold text-primary">
                            {mahsulot.chegirma_narx.toLocaleString()} so'm
                          </span>
                          <span className="text-xs sm:text-sm text-muted-foreground line-through ml-2 block sm:inline">
                            {mahsulot.narx.toLocaleString()} so'm
                          </span>
                        </div>
                      ) : (
                        <span className="text-lg sm:text-2xl font-bold text-foreground">
                          {mahsulot.narx.toLocaleString()} so'm
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center mb-3 sm:mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-xs sm:text-sm text-muted-foreground ml-2">(4.8)</span>
                  </div>
                  <Link href={`/mahsulot/${mahsulot.id}`}>
                    <Button
                      className="w-full text-sm sm:text-base bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-md"
                      disabled={!mahsulot.mavjud}
                    >
                      {mahsulot.mavjud ? "Ko'rish" : "Tugagan"}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card/80 backdrop-blur-sm border-t border-border/50 py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-2 mb-3 sm:mb-4">
                <ShoppingCart className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  TechStore
                </span>
              </div>
              <p className="text-muted-foreground text-sm sm:text-base">
                Eng yaxshi texnologiyalar va gadjetlar do'koni
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base text-foreground">Mahsulotlar</h3>
              <ul className="space-y-1 sm:space-y-2 text-muted-foreground text-sm sm:text-base">
                <li className="hover:text-primary transition-colors cursor-pointer">Smartfonlar</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Noutbuklar</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Aksessuarlar</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Smart uy</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base text-foreground">Xizmatlar</h3>
              <ul className="space-y-1 sm:space-y-2 text-muted-foreground text-sm sm:text-base">
                <li className="hover:text-primary transition-colors cursor-pointer">Yetkazib berish</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Kafolat</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Ta'mirlash</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Qo'llab-quvvatlash</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base text-foreground">Aloqa</h3>
              <ul className="space-y-1 sm:space-y-2 text-muted-foreground text-sm sm:text-base">
                <li>+998 90 123 45 67</li>
                <li>info@techstore.uz</li>
                <li>Toshkent, O'zbekiston</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border/50 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-muted-foreground text-sm sm:text-base">
            <p>&copy; 2024 TechStore. Barcha huquqlar himoyalangan.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
