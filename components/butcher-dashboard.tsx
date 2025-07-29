"use client"

import { useState } from "react"
import { SidebarProvider } from "@/components/ui/sidebar"
import { ButcherSidebar } from "@/components/butcher-sidebar"
import { DashboardHeader } from "@/components/dashboard-header"
import { ButcherOverview } from "@/components/butcher-overview"
import { ButcherOrders } from "@/components/butcher-orders"
import { ButcherProducts } from "@/components/butcher-products"
import { ButcherCustomers } from "@/components/butcher-customers"
import { ButcherReports } from "@/components/butcher-reports"

interface ButcherDashboardProps {
  user: any
  onLogout: () => void
}

export function ButcherDashboard({ user, onLogout }: ButcherDashboardProps) {
  const [activeView, setActiveView] = useState("overview")

  const renderContent = () => {
    switch (activeView) {
      case "overview":
        return <ButcherOverview />
      case "orders":
        return <ButcherOrders />
      case "products":
        return <ButcherProducts />
      case "customers":
        return <ButcherCustomers />
      case "reports":
        return <ButcherReports />
      default:
        return <ButcherOverview />
    }
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-gray-50">
        <ButcherSidebar activeView={activeView} onViewChange={setActiveView} />
        <div className="flex-1">
          <DashboardHeader user={user} onLogout={onLogout} />
          <main className="p-6">{renderContent()}</main>
        </div>
      </div>
    </SidebarProvider>
  )
}
