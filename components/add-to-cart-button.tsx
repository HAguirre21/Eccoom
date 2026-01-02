"use client"

import { ShoppingCart } from "lucide-react"
import { Button } from "./ui/button"
import { useCart } from "@/lib/cart-context"
import type { Product } from "@/lib/types"

interface AddToCartButtonProps {
  product: Product
  className?: string
}

export function AddToCartButton({ product, className }: AddToCartButtonProps) {
  const { addItem } = useCart()

  return (
    <Button size="lg" className={`gold-gradient text-background ${className}`} onClick={() => addItem(product)}>
      <ShoppingCart className="mr-2 h-5 w-5" />
      Add to Cart
    </Button>
  )
}
