"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DollarSign, Package, ShoppingCart, TrendingUp } from "lucide-react"
import { ProductsTab } from "@/components/admin/products-tab"
import { OrdersTab } from "@/components/admin/orders-tab"
import { AdminGuard } from "@/components/admin-guard"
import { mockProducts, mockOrders } from "@/lib/mock-data"

export default function AdminPage() {
  const totalRevenue = mockOrders.reduce((sum, order) => sum + order.total, 0)
  const totalOrders = mockOrders.length
  const totalProducts = mockProducts.length
  const averageOrderValue = totalRevenue / totalOrders

  return (
    <AdminGuard>
      <div className="min-h-screen py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="mb-2 font-display text-3xl font-bold md:text-4xl">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage your luxury perfume store</p>
          </div>

          {/* Stats Cards */}
          <div className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                <DollarSign className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="font-display text-2xl font-bold text-primary">${totalRevenue.toFixed(2)}</div>
                <p className="text-xs text-muted-foreground">+12.5% from last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Orders</CardTitle>
                <ShoppingCart className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="font-display text-2xl font-bold">{totalOrders}</div>
                <p className="text-xs text-muted-foreground">+8 new orders today</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Products</CardTitle>
                <Package className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="font-display text-2xl font-bold">{totalProducts}</div>
                <p className="text-xs text-muted-foreground">Across 5 categories</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Avg. Order Value</CardTitle>
                <TrendingUp className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="font-display text-2xl font-bold text-primary">${averageOrderValue.toFixed(2)}</div>
                <p className="text-xs text-muted-foreground">+5.2% from last month</p>
              </CardContent>
            </Card>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="products" className="space-y-4">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="products">Products</TabsTrigger>
              <TabsTrigger value="orders">Orders</TabsTrigger>
            </TabsList>

            <TabsContent value="products">
              <ProductsTab />
            </TabsContent>

            <TabsContent value="orders">
              <OrdersTab />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </AdminGuard>
  )
}
