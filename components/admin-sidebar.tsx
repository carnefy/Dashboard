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
import { BarChart3, Beef, Building2, Users, TrendingUp, Settings, Shield } from "lucide-react"

interface AdminSidebarProps {
  activeView: string
  onViewChange: (view: string) => void
}

export function AdminSidebar({ activeView, onViewChange }: AdminSidebarProps) {
  const menuItems = [
    {
      title: "Visão Geral",
      icon: BarChart3,
      key: "overview",
    },
    {
      title: "Açougues",
      icon: Building2,
      key: "butcheries",
    },
    {
      title: "Relatórios",
      icon: TrendingUp,
      key: "reports",
    },
    {
      title: "Usuários",
      icon: Users,
      key: "users",
    },
    {
      title: "Configurações",
      icon: Settings,
      key: "settings",
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
            <p className="text-sm text-gray-500">Administrador</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Painel Administrativo</SidebarGroupLabel>
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
          <div className="flex items-center justify-center w-8 h-8 bg-red-100 rounded-full">
            <Shield className="w-4 h-4 text-red-600" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">Administrador</p>
            <p className="text-xs text-gray-500">Acesso Total</p>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
