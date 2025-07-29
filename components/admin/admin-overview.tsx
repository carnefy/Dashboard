"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DollarSign, Building2, Users, TrendingUp, TrendingDown, Activity, AlertTriangle } from "lucide-react"

export function AdminOverview() {
  const stats = [
    {
      title: "Receita Total",
      value: "R$ 45.231,80",
      change: "+20.1%",
      trend: "up",
      icon: DollarSign,
    },
    {
      title: "Açougues Ativos",
      value: "12",
      change: "+2",
      trend: "up",
      icon: Building2,
    },
    {
      title: "Usuários",
      value: "89",
      change: "+12",
      trend: "up",
      icon: Users,
    },
    {
      title: "Taxa de Atividade",
      value: "94.2%",
      change: "+1.2%",
      trend: "up",
      icon: Activity,
    },
  ]

  const topButcheries = [
    { name: "Açougue do João", revenue: "R$ 8.450,00", growth: "+15%" },
    { name: "Carnes Premium", revenue: "R$ 7.230,00", growth: "+22%" },
    { name: "Açougue Central", revenue: "R$ 6.890,00", growth: "+8%" },
    { name: "Carnes Nobres", revenue: "R$ 5.670,00", growth: "+18%" },
  ]

  const alerts = [
    { type: "warning", message: "3 açougues com estoque baixo", time: "2h atrás" },
    { type: "info", message: "Novo açougue cadastrado", time: "4h atrás" },
    { type: "warning", message: "Novo açougue cadastrado", time: "4h atrás" },
    { type: "warning", message: "Sistema de backup executado", time: "6h atrás" },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Painel Administrativo</h1>
        <p className="text-gray-600 dark:text-gray-400">Visão geral da plataforma</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
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
                  {stat.trend === "up" ? (
                    <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                  ) : (
                    <TrendingDown className="h-3 w-3 text-red-500 mr-1" />
                  )}
                  <span className={stat.trend === "up" ? "text-green-500" : "text-red-500"}>{stat.change}</span>
                  <span className="text-gray-500 dark:text-gray-400 ml-1">este mês</span>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Butcheries */}
        <Card>
          <CardHeader>
            <CardTitle>Açougues com Melhor Performance</CardTitle>
            <CardDescription>Ranking por receita mensal</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topButcheries.map((butchery, index) => (
                <div
                  key={butchery.name}
                  className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-red-600 dark:text-red-400">#{index + 1}</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">{butchery.name}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{butchery.revenue}</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-green-600 dark:text-green-400">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    {butchery.growth}
                  </Badge>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4 bg-transparent">
              Ver Relatório Completo
            </Button>
          </CardContent>
        </Card>

        {/* System Alerts */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-orange-500" />
              Alertas do Sistema
            </CardTitle>
            <CardDescription>Notificações importantes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {alerts.map((alert, index) => (
                <div
                  key={index}
                  className="flex items-start justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                >
                  <div className="flex items-start space-x-3">
                    <div
                      className={`w-2 h-2 rounded-full mt-2 ${
                        alert.type === "warning" ? "bg-orange-500" : "bg-blue-500"
                      }`}
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{alert.message}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{alert.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4 bg-transparent">
              Ver Todos os Alertas
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
