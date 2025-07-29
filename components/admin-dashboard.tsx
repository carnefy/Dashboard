"use client"

import { useState } from "react"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AdminSidebar } from "@/components/admin-sidebar"
import { DashboardHeader } from "@/components/dashboard-header"
import { AdminOverview } from "@/components/admin-overview"
import { AdminButcheries } from "@/components/admin-butcheries"
import { AdminReports } from "@/components/admin-reports"
import { AdminUsers } from "@/components/admin-users"
import { AdminSettings } from "@/components/admin-settings"

interface AdminDashboardProps {
  user: any
  onLogout: () => void
}

export function AdminDashboard({ user, onLogout }: AdminDashboardProps) {
  const [activeView, setActiveView] = useState("overview")

  const renderContent = () => {
    switch (activeView) {
      case "overview":
        return <AdminOverview />
      case "butcheries":
        return <AdminButcheries />
      case "reports":
        return <AdminReports />
      case "users":
        return <AdminUsers />
      case "settings":
        return <AdminSettings />
      default:
        return <AdminOverview />
    }
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-gray-50">
        <AdminSidebar activeView={activeView} onViewChange={setActiveView} />
        <div className="flex-1">
          <DashboardHeader user={user} onLogout={onLogout} />
          <main className="p-6">{renderContent()}</main>
        </div>
      </div>
    </SidebarProvider>
  )
}
