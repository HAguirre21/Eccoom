"use client"

import Image from "next/image"
import Link from "next/link"
import { Star, ShoppingCart } from "lucide-react"
import type { Product } from "@/lib/types"
import { Button } from "./ui/button"
import { Card, CardContent, CardFooter } from "./ui/card"
import { Badge } from "./ui/badge"
import { useCart } from "@/lib/cart-context"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart()

  return (
    <Card className="group overflow-hidden transition-all hover:shadow-lg hover:shadow-primary/10">
      <Link href={`/product/${product.id}`}>
        <div className="relative aspect-square overflow-hidden bg-muted">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <Badge className="absolute right-2 top-2 bg-card/90 text-foreground backdrop-blur-sm">
            {product.category}
          </Badge>
        </div>
      </Link>

      <CardContent className="p-4">
        <Link href={`/product/${product.id}`}>
          <p className="mb-1 text-xs text-muted-foreground">{product.brand}</p>
          <h3 className="mb-2 font-display text-lg font-semibold leading-tight transition-colors group-hover:text-primary">
            {product.name}
          </h3>
          <div className="mb-2 flex items-center gap-1">
            <Star className="h-4 w-4 fill-primary text-primary" />
            <span className="text-sm font-medium">{product.rating}</span>
            <span className="text-xs text-muted-foreground">({product.reviews})</span>
          </div>
        </Link>
      </CardContent>

      <CardFooter className="flex items-center justify-between p-4 pt-0">
        <div>
          <p className="text-2xl font-bold text-primary">${product.price}</p>
          <p className="text-xs text-muted-foreground">{product.size}</p>
        </div>
        <Button
          size="icon"
          onClick={() => addItem(product)}
          className="gold-gradient h-10 w-10 text-background transition-transform hover:scale-105"
        >
          <ShoppingCart className="h-5 w-5" />
        </Button>
      </CardFooter>
    </Card>
  )
}
