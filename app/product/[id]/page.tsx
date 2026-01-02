import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Star, Droplet } from "lucide-react"
import { mockProducts } from "@/lib/mock-data"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AddToCartButton } from "@/components/add-to-cart-button"

interface ProductPageProps {
  params: Promise<{ id: string }>
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params
  const product = mockProducts.find((p) => p.id === id)

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <Button variant="ghost" className="mb-6" asChild>
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Shop
          </Link>
        </Button>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Product Image */}
          <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col">
            <div className="mb-4">
              <Badge className="mb-4">{product.category}</Badge>
              <p className="mb-2 text-sm text-muted-foreground">{product.brand}</p>
              <h1 className="mb-4 font-display text-4xl font-bold text-balance md:text-5xl">{product.name}</h1>

              <div className="mb-4 flex items-center gap-2">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < Math.floor(product.rating) ? "fill-primary text-primary" : "text-muted"}`}
                    />
                  ))}
                </div>
                <span className="text-sm font-medium">{product.rating}</span>
                <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
              </div>

              <p className="mb-6 text-lg leading-relaxed text-muted-foreground">{product.description}</p>

              <div className="mb-8 flex items-baseline gap-3">
                <p className="font-display text-4xl font-bold text-primary">${product.price}</p>
                <p className="text-muted-foreground">{product.size}</p>
              </div>
            </div>

            {/* Olfactory Pyramid */}
            <div className="mb-8 glass-card rounded-xl p-6">
              <div className="mb-4 flex items-center gap-2">
                <Droplet className="h-5 w-5 text-primary" />
                <h2 className="font-display text-xl font-semibold">Olfactory Pyramid</h2>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="mb-2 text-sm font-semibold text-secondary">Top Notes</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.topNotes.map((note) => (
                      <Badge key={note} variant="outline" className="border-secondary/50">
                        {note}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="mb-2 text-sm font-semibold text-accent">Middle Notes</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.middleNotes.map((note) => (
                      <Badge key={note} variant="outline" className="border-accent/50">
                        {note}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="mb-2 text-sm font-semibold text-primary">Base Notes</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.baseNotes.map((note) => (
                      <Badge key={note} variant="outline" className="border-primary/50">
                        {note}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4">
              <AddToCartButton product={product} className="flex-1" />
            </div>

            {/* Stock Info */}
            <p className="mt-4 text-sm text-muted-foreground">
              {product.stock > 10 ? "In Stock" : `Only ${product.stock} left in stock`}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
