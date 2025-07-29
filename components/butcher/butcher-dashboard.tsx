"use client"

import { useState } from "react"
import { DashboardHeader } from "@/components/shared/dashboard-header"
import { ButcherSidebar } from "./butcher-sidebar"
import { ButcherOverview } from "./butcher-overview"
import { ButcherOrders } from "./butcher-orders"
import { ButcherProducts } from "./butcher-products"
import { ButcherCustomers } from "./butcher-customers"
import { ButcherReports } from "./butcher-reports"
import type { User } from "@/app/page"

interface ButcherDashboardProps {
  user: User
  onLogout: () => void
}

export function ButcherDashboard({ user, onLogout }: ButcherDashboardProps) {
  const [activeTab, setActiveTab] = useState("overview")

  const renderContent = () => {
    switch (activeTab) {
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
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <ButcherSidebar activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader user={user} onLogout={onLogout} />
        <main className="flex-1 overflow-y-auto p-6">{renderContent()}</main>
      </div>
    </div>
  )
}
