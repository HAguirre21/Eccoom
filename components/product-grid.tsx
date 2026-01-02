"use client"

import { useState } from "react"
import { mockProducts } from "@/lib/mock-data"
import { ProductCard } from "./product-card"
import { Button } from "./ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"

export function ProductGrid() {
  const [filter, setFilter] = useState<string>("all")
  const [sort, setSort] = useState<string>("featured")

  const filteredProducts = mockProducts.filter((product) => {
    if (filter === "all") return true
    return product.category === filter
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sort === "price-asc") return a.price - b.price
    if (sort === "price-desc") return b.price - a.price
    if (sort === "rating") return b.rating - a.rating
    return 0
  })

  return (
    <div>
      {/* Filters */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          <Button
            variant={filter === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("all")}
            className={filter === "all" ? "gold-gradient text-background" : ""}
          >
            All
          </Button>
          <Button
            variant={filter === "floral" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("floral")}
            className={filter === "floral" ? "gold-gradient text-background" : ""}
          >
            Floral
          </Button>
          <Button
            variant={filter === "woody" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("woody")}
            className={filter === "woody" ? "gold-gradient text-background" : ""}
          >
            Woody
          </Button>
          <Button
            variant={filter === "oriental" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("oriental")}
            className={filter === "oriental" ? "gold-gradient text-background" : ""}
          >
            Oriental
          </Button>
          <Button
            variant={filter === "fresh" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("fresh")}
            className={filter === "fresh" ? "gold-gradient text-background" : ""}
          >
            Fresh
          </Button>
          <Button
            variant={filter === "citrus" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("citrus")}
            className={filter === "citrus" ? "gold-gradient text-background" : ""}
          >
            Citrus
          </Button>
        </div>

        <Select value={sort} onValueChange={setSort}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="featured">Featured</SelectItem>
            <SelectItem value="price-asc">Price: Low to High</SelectItem>
            <SelectItem value="price-desc">Price: High to Low</SelectItem>
            <SelectItem value="rating">Highest Rated</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Product Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
