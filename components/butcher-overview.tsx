"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DollarSign, ShoppingCart, Package, TrendingUp, Clock, CheckCircle, AlertCircle, Eye } from "lucide-react"

export function ButcherOverview() {
  const metrics = [
    {
      title: "Vendas Hoje",
      value: "R$ 2.847,50",
      change: "+12.5%",
      icon: DollarSign,
      color: "text-green-600",
    },
    {
      title: "Pedidos Pendentes",
      value: "8",
      change: "3 novos",
      icon: ShoppingCart,
      color: "text-orange-600",
    },
    {
      title: "Produtos Ativos",
      value: "47",
      change: "2 em falta",
      icon: Package,
      color: "text-blue-600",
    },
    {
      title: "Receita Mensal",
      value: "R$ 18.420,00",
      change: "+8.2%",
      icon: TrendingUp,
      color: "text-purple-600",
    },
  ]

  const recentOrders = [
    {
      id: "#001",
      customer: "João Silva",
      items: "Picanha 1kg, Linguiça 500g",
      total: "R$ 89,50",
      status: "preparing",
      time: "10 min",
    },
    {
      id: "#002",
      customer: "Maria Santos",
      items: "Alcatra 2kg, Fraldinha 1kg",
      total: "R$ 156,00",
      status: "ready",
      time: "5 min",
    },
    {
      id: "#003",
      customer: "Pedro Costa",
      items: "Costela 1.5kg",
      total: "R$ 67,50",
      status: "delivered",
      time: "Entregue",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "preparing":
        return (
          <Badge variant="secondary" className="bg-orange-100 text-orange-800">
            Preparando
          </Badge>
        )
      case "ready":
        return (
          <Badge variant="secondary" className="bg-blue-100 text-blue-800">
            Pronto
          </Badge>
        )
      case "delivered":
        return (
          <Badge variant="secondary" className="bg-green-100 text-green-800">
            Entregue
          </Badge>
        )
      default:
        return <Badge variant="secondary">Desconhecido</Badge>
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "preparing":
        return <Clock className="w-4 h-4 text-orange-600" />
      case "ready":
        return <AlertCircle className="w-4 h-4 text-blue-600" />
      case "delivered":
        return <CheckCircle className="w-4 h-4 text-green-600" />
      default:
        return null
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Visão Geral</h2>
        <p className="text-gray-600">Acompanhe o desempenho do seu açougue</p>
      </div>

      {/* Métricas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
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

      {/* Pedidos Recentes */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Pedidos Recentes
            <Button variant="outline" size="sm">
              Ver Todos
            </Button>
          </CardTitle>
          <CardDescription>Acompanhe os pedidos em tempo real</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentOrders.map((order) => (
              <div
                key={order.id}
                className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  {getStatusIcon(order.status)}
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-gray-900">{order.id}</span>
                      {getStatusBadge(order.status)}
                    </div>
                    <p className="text-sm text-gray-600">{order.customer}</p>
                    <p className="text-xs text-gray-500">{order.items}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-900">{order.total}</p>
                  <p className="text-sm text-gray-500">{order.time}</p>
                  <Button variant="ghost" size="sm" className="mt-1">
                    <Eye className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Produtos em Destaque */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Produtos Mais Vendidos</CardTitle>
            <CardDescription>Top 5 produtos da semana</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { name: "Picanha", sales: "24 vendas", revenue: "R$ 1.680,00" },
                { name: "Alcatra", sales: "18 vendas", revenue: "R$ 1.260,00" },
                { name: "Fraldinha", sales: "15 vendas", revenue: "R$ 825,00" },
                { name: "Costela", sales: "12 vendas", revenue: "R$ 720,00" },
                { name: "Linguiça", sales: "20 vendas", revenue: "R$ 400,00" },
              ].map((product, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">{product.name}</p>
                    <p className="text-sm text-gray-500">{product.sales}</p>
                  </div>
                  <p className="font-bold text-gray-900">{product.revenue}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Status do Estoque</CardTitle>
            <CardDescription>Produtos com baixo estoque</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { name: "Picanha", stock: "2 kg", status: "low" },
                { name: "Salmão", stock: "0 kg", status: "out" },
                { name: "Linguiça Toscana", stock: "1.5 kg", status: "low" },
                { name: "Frango Inteiro", stock: "5 unidades", status: "ok" },
              ].map((product, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">{product.name}</p>
                    <p className="text-sm text-gray-500">{product.stock}</p>
                  </div>
                  <Badge
                    variant={
                      product.status === "out" ? "destructive" : product.status === "low" ? "secondary" : "default"
                    }
                    className={
                      product.status === "out"
                        ? "bg-red-100 text-red-800"
                        : product.status === "low"
                          ? "bg-orange-100 text-orange-800"
                          : "bg-green-100 text-green-800"
                    }
                  >
                    {product.status === "out" ? "Esgotado" : product.status === "low" ? "Baixo" : "OK"}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
