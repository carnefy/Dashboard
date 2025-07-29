"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ShoppingCart, Package, Users, FileText, Home } from "lucide-react"

interface ButcherSidebarProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

const menuItems = [
  { id: "overview", label: "Visão Geral", icon: Home },
  { id: "orders", label: "Pedidos", icon: ShoppingCart },
  { id: "products", label: "Produtos", icon: Package },
  { id: "customers", label: "Clientes", icon: Users },
  { id: "reports", label: "Relatórios", icon: FileText },
]

export function ButcherSidebar({ activeTab, onTabChange }: ButcherSidebarProps) {
  return (
    <div className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col">
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Menu</h2>
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
