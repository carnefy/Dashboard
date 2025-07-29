"use client"

import { useState } from "react"
import { DashboardHeader } from "@/components/shared/dashboard-header"
import { AdminSidebar } from "./admin-sidebar"
import { AdminOverview } from "./admin-overview"
import { AdminButcheries } from "./admin-butcheries"
import { AdminUsers } from "./admin-users"
import { AdminReports } from "./admin-reports"
import { AdminSettings } from "./admin-settings"
import type { User } from "@/app/page"

interface AdminDashboardProps {
  user: User
  onLogout: () => void
}

export function AdminDashboard({ user, onLogout }: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState("overview")

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return <AdminOverview />
      case "butcheries":
        return <AdminButcheries />
      case "users":
        return <AdminUsers />
      case "reports":
        return <AdminReports />
      case "settings":
        return <AdminSettings />
      default:
        return <AdminOverview />
    }
  }

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <AdminSidebar activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader user={user} onLogout={onLogout} />
        <main className="flex-1 overflow-y-auto p-6">{renderContent()}</main>
      </div>
    </div>
  )
}
