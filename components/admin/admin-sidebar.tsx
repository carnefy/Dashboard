"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Building2, Users, FileText, Settings, Home } from "lucide-react"

interface AdminSidebarProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

const menuItems = [
  { id: "overview", label: "Visão Geral", icon: Home },
  { id: "butcheries", label: "Açougues", icon: Building2 },
  { id: "users", label: "Usuários", icon: Users },
  { id: "reports", label: "Relatórios", icon: FileText },
  { id: "settings", label: "Configurações", icon: Settings },
]

export function AdminSidebar({ activeTab, onTabChange }: AdminSidebarProps) {
  return (
    <div className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col">
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Administração</h2>
      </div>

      <nav className="flex-1 px-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon
          return (
            <Button
              key={item.id}
              variant="ghost"
              className={cn(
                "w-full justify-start gap-3 h-12",
                activeTab === item.id
                  ? "bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 border-r-2 border-red-600 dark:border-red-400"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700",
              )}
              onClick={() => onTabChange(item.id)}
            >
              <Icon className="w-5 h-5" />
              {item.label}
            </Button>
          )
        })}
      </nav>
    </div>
  )
}
