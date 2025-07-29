"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DollarSign, ShoppingCart, Package, Users, TrendingUp, TrendingDown, Clock, CheckCircle } from "lucide-react"

export function ButcherOverview() {
  const stats = [
    {
      title: "Vendas Hoje",
      value: "R$ 2.847,50",
      change: "+12.5%",
      trend: "up",
      icon: DollarSign,
    },
    {
      title: "Pedidos",
      value: "23",
      change: "+3",
      trend: "up",
      icon: ShoppingCart,
    },
    {
      title: "Produtos",
      value: "156",
      change: "-2",
      trend: "down",
      icon: Package,
    },
    {
      title: "Clientes",
      value: "89",
      change: "+5",
      trend: "up",
      icon: Users,
    },
  ]

  const recentOrders = [
    { id: "001", customer: "Maria Silva", total: "R$ 89,50", status: "Concluído", time: "10:30" },
    { id: "002", customer: "João Santos", total: "R$ 156,80", status: "Preparando", time: "11:15" },
    { id: "003", customer: "Ana Costa", total: "R$ 67,20", status: "Pendente", time: "11:45" },
    { id: "004", customer: "Carlos Lima", total: "R$ 234,90", status: "Concluído", time: "12:20" },
  ]

  const lowStockProducts = [
    { name: "Picanha", stock: 2, unit: "kg" },
    { name: "Alcatra", stock: 1.5, unit: "kg" },
    { name: "Linguiça Toscana", stock: 3, unit: "kg" },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Visão Geral</h1>
        <p className="text-gray-600 dark:text-gray-400">Acompanhe o desempenho do seu açougue</p>
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
                  <span className="text-gray-500 dark:text-gray-400 ml-1">vs ontem</span>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <Card>
          <CardHeader>
            <CardTitle>Pedidos Recentes</CardTitle>
            <CardDescription>Últimos pedidos do dia</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div
                  key={order.id}
                  className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center">
                      <span className="text-xs font-medium text-red-600 dark:text-red-400">#{order.id}</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">{order.customer}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{order.time}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-900 dark:text-white">{order.total}</p>
                    <Badge
                      variant={
                        order.status === "Concluído"
                          ? "default"
                          : order.status === "Preparando"
                            ? "secondary"
                            : "outline"
                      }
                      className="text-xs"
                    >
                      {order.status === "Concluído" && <CheckCircle className="w-3 h-3 mr-1" />}
                      {order.status === "Preparando" && <Clock className="w-3 h-3 mr-1" />}
                      {order.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4 bg-transparent">
              Ver Todos os Pedidos
            </Button>
          </CardContent>
        </Card>

        {/* Low Stock Alert */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="w-5 h-5 text-orange-500" />
              Estoque Baixo
            </CardTitle>
            <CardDescription>Produtos que precisam de reposição</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {lowStockProducts.map((product) => (
                <div
                  key={product.name}
                  className="flex items-center justify-between p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800"
                >
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">{product.name}</p>
                    <p className="text-sm text-orange-600 dark:text-orange-400">
                      Restam apenas {product.stock} {product.unit}
                    </p>
                  </div>
                  <Button size="sm" variant="outline">
                    Repor
                  </Button>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4 bg-transparent">
              Gerenciar Estoque
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
