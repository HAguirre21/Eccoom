import Link from "next/link"
import { CheckCircle, Package, Truck, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function OrderConfirmationPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
            <CheckCircle className="h-12 w-12 text-primary" />
          </div>

          <h1 className="mb-4 font-display text-3xl font-bold md:text-4xl">Order Confirmed!</h1>
          <p className="mb-8 text-lg text-muted-foreground">
            Thank you for your purchase. Your order has been successfully placed.
          </p>

          <Card className="glass-card mb-8">
            <CardContent className="p-6">
              <div className="mb-6 border-b border-border pb-4">
                <p className="text-sm text-muted-foreground">Order Number</p>
                <p className="font-display text-2xl font-bold text-primary">ORD-{Date.now().toString().slice(-6)}</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="mt-1 h-5 w-5 text-primary" />
                  <div className="text-left">
                    <p className="font-semibold">Confirmation Email Sent</p>
                    <p className="text-sm text-muted-foreground">
                      We've sent a confirmation email with your order details
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Package className="mt-1 h-5 w-5 text-primary" />
                  <div className="text-left">
                    <p className="font-semibold">Processing Your Order</p>
                    <p className="text-sm text-muted-foreground">Your order is being carefully prepared for shipment</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Truck className="mt-1 h-5 w-5 text-primary" />
                  <div className="text-left">
                    <p className="font-semibold">Estimated Delivery</p>
                    <p className="text-sm text-muted-foreground">3-5 business days</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button className="gold-gradient text-background" size="lg" asChild>
              <Link href="/">Continue Shopping</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/orders">View Orders</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
