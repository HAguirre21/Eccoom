export interface Product {
  id: string
  name: string
  brand: string
  price: number
  image: string
  description: string
  category: "floral" | "woody" | "oriental" | "fresh" | "citrus"
  gender: "men" | "women" | "unisex"
  size: string
  stock: number
  topNotes: string[]
  middleNotes: string[]
  baseNotes: string[]
  rating: number
  reviews: number
}

export interface CartItem extends Product {
  quantity: number
}

export interface Order {
  id: string
  date: string
  customer: {
    name: string
    email: string
    phone: string
    address: string
  }
  items: CartItem[]
  total: number
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled"
}

export interface User {
  id: string
  email: string
  role: "admin" | "customer"
  name: string
}
