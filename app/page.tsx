import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ProductGrid } from "@/components/product-grid"
import { Sparkles, Star, Shield } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-card py-20 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card px-4 py-2 text-sm">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">Discover Exclusive Fragrances</span>
            </div>

            <h1 className="mb-6 font-display text-5xl font-bold leading-tight tracking-tight text-balance md:text-7xl">
              Luxury Perfumes,
              <br />
              <span className="gold-gradient bg-clip-text text-transparent">Crafted to Perfection</span>
            </h1>

            <p className="mb-8 text-lg text-muted-foreground text-balance md:text-xl">
              Experience the art of fine perfumery with our curated collection of premium fragrances from the world's
              most prestigious houses.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="gold-gradient text-background" asChild>
                <Link href="#products">Explore Collection</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/about">Our Story</Link>
              </Button>
            </div>
          </div>

          {/* Features */}
          <div className="mt-20 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Star,
                title: "Premium Quality",
                description: "Only the finest ingredients from around the world",
              },
              {
                icon: Shield,
                title: "Authenticity Guaranteed",
                description: "100% genuine products with certificate of authenticity",
              },
              {
                icon: Sparkles,
                title: "Exclusive Collection",
                description: "Rare and limited edition fragrances",
              },
            ].map((feature, i) => (
              <div key={i} className="glass-card rounded-xl p-6 text-center">
                <feature.icon className="mx-auto mb-4 h-10 w-10 text-primary" />
                <h3 className="mb-2 font-display text-lg font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <h2 className="mb-3 font-display text-3xl font-bold md:text-4xl">Featured Collection</h2>
            <p className="text-muted-foreground">Discover our handpicked selection of luxury perfumes</p>
          </div>
          <ProductGrid />
        </div>
      </section>
    </div>
  )
}
