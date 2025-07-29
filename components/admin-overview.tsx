"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DollarSign, Building2, ShoppingCart, TrendingUp, AlertTriangle, CheckCircle, Clock, Users } from "lucide-react"

export function AdminOverview() {
  const platformMetrics = [
    {
      title: "Receita Total",
      value: "R$ 127.450,00",
      change: "+15.2%",
      icon: DollarSign,
      color: "text-green-600",
    },
    {
      title: "Açougues Ativos",
      value: "24",
      change: "+3 novos",
      icon: Building2,
      color: "text-blue-600",
    },
    {
      title: "Pedidos Hoje",
      value: "156",
      change: "+12%",
      icon: ShoppingCart,
      color: "text-purple-600",
    },
    {
      title: "Crescimento Mensal",
      value: "18.5%",
      change: "+2.3%",
      icon: TrendingUp,
      color: "text-orange-600",
    },
  ]

  const topButcheries = [
    {
      name: "Açougue Premium",
      location: "Vila Madalena",
      revenue: "R$ 18.420,00",
      orders: 89,
      status: "excellent",
      growth: "+25%",
    },
    {
      name: "Carnes Nobres",
      location: "Jardins",
      revenue: "R$ 15.680,00",
      orders: 76,
      status: "good",
      growth: "+18%",
    },
    {
      name: "Açougue Central",
      location: "Centro",
      revenue: "R$ 12.340,00",
      orders: 65,
      status: "good",
      growth: "+12%",
    },
    {
      name: "Carnes & Cia",
      location: "Pinheiros",
      revenue: "R$ 9.870,00",
      orders: 52,
      status: "average",
      growth: "+8%",
    },
  ]

  const recentAlerts = [
    {
      type: "warning",
      message: "Açougue São Paulo com baixo estoque em 3 produtos",
      time: "5 min atrás",
      butchery: "Açougue São Paulo",
    },
    {
      type: "info",
      message: "Novo açougue cadastrado aguardando aprovação",
      time: "15 min atrás",
      butchery: "Carnes Especiais",
    },
    {
      type: "success",
      message: "Meta mensal de R$ 100k atingida",
      time: "1 hora atrás",
      butchery: "Plataforma",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "excellent":
        return <Badge className="bg-green-100 text-green-800">Excelente</Badge>
      case "good":
        return <Badge className="bg-blue-100 text-blue-800">Bom</Badge>
      case "average":
        return <Badge className="bg-orange-100 text-orange-800">Regular</Badge>
      case "poor":
        return <Badge className="bg-red-100 text-red-800">Baixo</Badge>
      default:
        return <Badge variant="secondary">Desconhecido</Badge>
    }
  }

  const getAlertIcon = (type: string) => {
    switch (type) {
      case "warning":
        return <AlertTriangle className="w-4 h-4 text-orange-600" />
      case "success":
        return <CheckCircle className="w-4 h-4 text-green-600" />
      case "info":
        return <Clock className="w-4 h-4 text-blue-600" />
      default:
        return null
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Visão Geral da Plataforma</h2>
        <p className="text-gray-600">Acompanhe o desempenho geral do Carnefy</p>
      </div>

      {/* Platform Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {platformMetrics.map((metric, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">{metric.title}</CardTitle>
              <metric.icon className={`w-5 h-5 ${metric.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
              <p className="text-xs text-gray-600 mt-1">{metric.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Top Performing Butcheries */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Açougues com Melhor Performance
            <Button variant="outline" size="sm">
              Ver Todos
            </Button>
          </CardTitle>
          <CardDescription>Ranking dos açougues por receita mensal</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topButcheries.map((butchery, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="font-bold text-red-600">#{index + 1}</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-gray-900">{butchery.name}</span>
                      {getStatusBadge(butchery.status)}
                    </div>
                    <p className="text-sm text-gray-600">{butchery.location}</p>
                    <p className="text-xs text-gray-500">{butchery.orders} pedidos</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-900">{butchery.revenue}</p>
                  <p className="text-sm text-green-600">{butchery.growth}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Alerts */}
        <Card>
          <CardHeader>
            <CardTitle>Alertas Recentes</CardTitle>
            <CardDescription>Notificações importantes da plataforma</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentAlerts.map((alert, index) => (
                <div key={index} className="flex items-start gap-3 p-3 border border-gray-200 rounded-lg">
                  {getAlertIcon(alert.type)}
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">{alert.message}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <p className="text-xs text-gray-500">{alert.butchery}</p>
                      <span className="text-xs text-gray-400">•</span>
                      <p className="text-xs text-gray-500">{alert.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <Card>
          <CardHeader>
            <CardTitle>Estatísticas Rápidas</CardTitle>
            <CardDescription>Resumo da atividade da plataforma</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Building2 className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Açougues Cadastrados</span>
                </div>
                <span className="font-bold text-gray-900">27</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Açougues Ativos</span>
                </div>
                <span className="font-bold text-gray-900">24</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-orange-600" />
                  <span className="text-gray-700">Aguardando Aprovação</span>
                </div>
                <span className="font-bold text-gray-900">3</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700">Total de Clientes</span>
                </div>
                <span className="font-bold text-gray-900">1,247</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <ShoppingCart className="w-5 h-5 text-red-600" />
                  <span className="text-gray-700">Pedidos Este Mês</span>
                </div>
                <span className="font-bold text-gray-900">2,156</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
