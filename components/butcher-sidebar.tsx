"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar"
import { BarChart3, Beef, Package, ShoppingCart, Users, TrendingUp, Store } from "lucide-react"

interface ButcherSidebarProps {
  activeView: string
  onViewChange: (view: string) => void
}

export function ButcherSidebar({ activeView, onViewChange }: ButcherSidebarProps) {
  const menuItems = [
    {
      title: "Visão Geral",
      icon: BarChart3,
      key: "overview",
    },
    {
      title: "Pedidos",
      icon: ShoppingCart,
      key: "orders",
    },
    {
      title: "Produtos",
      icon: Package,
      key: "products",
    },
    {
      title: "Clientes",
      icon: Users,
      key: "customers",
    },
    {
      title: "Relatórios",
      icon: TrendingUp,
      key: "reports",
    },
  ]

  return (
    <Sidebar className="border-r border-gray-200">
      <SidebarHeader className="border-b border-gray-200 p-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 bg-red-600 rounded-lg">
            <Beef className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="font-bold text-lg text-gray-900">Carnefy</h2>
            <p className="text-sm text-gray-500">Açougueiro</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu Principal</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.key}>
                  <SidebarMenuButton
                    onClick={() => onViewChange(item.key)}
                    isActive={activeView === item.key}
                    className="w-full justify-start"
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-gray-200 p-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full">
            <Store className="w-4 h-4 text-gray-600" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">Açougue Premium</p>
            <p className="text-xs text-gray-500">CNPJ: 12.345.678/0001-90</p>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
