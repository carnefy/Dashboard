"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Download, TrendingUp, DollarSign, Building2, Users, Activity } from "lucide-react"

export function AdminReports() {
  const platformStats = [
    { title: "Receita Total", value: "R$ 45.231,80", change: "+20.1%", icon: DollarSign },
    { title: "Açougues Ativos", value: "12", change: "+2", icon: Building2 },
    { title: "Total de Usuários", value: "89", change: "+12", icon: Users },
    { title: "Taxa de Atividade", value: "94.2%", change: "+1.2%", icon: Activity },
  ]

  const topPerformers = [
    { name: "Açougue do João", revenue: "R$ 8.450,00", growth: "+15%", orders: 234 },
    { name: "Carnes Premium", revenue: "R$ 7.230,00", growth: "+22%", orders: 189 },
    { name: "Açougue Central", revenue: "R$ 6.890,00", growth: "+8%", orders: 156 },
    { name: "Carnes Nobres", revenue: "R$ 5.670,00", growth: "+18%", orders: 143 },
  ]

  const monthlyGrowth = [
    { month: "Jan", revenue: "R$ 38.450,00", butcheries: 8 },
    { month: "Fev", revenue: "R$ 41.230,00", butcheries: 9 },
    { month: "Mar", revenue: "R$ 45.231,80", butcheries: 12 },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Relatórios</h1>
          <p className="text-gray-600 dark:text-gray-400">Análise completa da plataforma</p>
        </div>
        <div className="flex items-center space-x-2">
          <Select defaultValue="month">
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="week">Esta Semana</SelectItem>
              <SelectItem value="month">Este Mês</SelectItem>
              <SelectItem value="quarter">Este Trimestre</SelectItem>
              <SelectItem value="year">Este Ano</SelectItem>
            </SelectContent>
          </Select>
          <Button>
            <Download className="w-4 h-4 mr-2" />
            Exportar Relatório
          </Button>
        </div>
      </div>

      {/* Platform Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {platformStats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">{stat.title}</CardTitle>
                <Icon className="h-4 w-4 text-gray-600 dark:text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                <div className="flex items-center text-xs">
                  <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                  <span className="text-green-500">{stat.change}</span>
                  <span className="text-gray-500 dark:text-gray-400 ml-1">vs mês anterior</span>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Performers */}
        <Card>
          <CardHeader>
            <CardTitle>Açougues com Melhor Performance</CardTitle>
            <CardDescription>Ranking por receita e crescimento</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topPerformers.map((performer, index) => (
                <div
                  key={performer.name}
                  className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-red-600 dark:text-red-400">#{index + 1}</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">{performer.name}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{performer.orders} pedidos</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-900 dark:text-white">{performer.revenue}</p>
                    <Badge variant="secondary" className="text-green-600">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      {performer.growth}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Monthly Growth */}
        <Card>
          <CardHeader>
            <CardTitle>Crescimento Mensal</CardTitle>
            <CardDescription>Evolução da receita e número de açougues</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {monthlyGrowth.map((month) => (
                <div key={month.month} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                      <span className="font-bold text-blue-600 dark:text-blue-400">{month.month}</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Receita Total</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{month.butcheries} açougues ativos</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-gray-900 dark:text-white">{month.revenue}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
