"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BarChart3, TrendingUp, DollarSign, Building2, ShoppingCart, Download, Target } from "lucide-react"

export function AdminReports() {
  const platformStats = [
    {
      title: "Receita Total",
      value: "R$ 127.450,00",
      change: "+15.2%",
      icon: DollarSign,
      color: "text-green-600",
    },
    {
      title: "Comissões",
      value: "R$ 10.196,00",
      change: "+18.5%",
      icon: Target,
      color: "text-purple-600",
    },
    {
      title: "Açougues Ativos",
      value: "24",
      change: "+3",
      icon: Building2,
      color: "text-blue-600",
    },
    {
      title: "Total de Pedidos",
      value: "2,156",
      change: "+12.8%",
      icon: ShoppingCart,
      color: "text-orange-600",
    },
  ]

  const monthlyData = [
    { month: "Janeiro", revenue: "R$ 89.420,00", commission: "R$ 7.154,00", butcheries: 21, orders: 1456 },
    { month: "Fevereiro", revenue: "R$ 98.650,00", commission: "R$ 7.892,00", butcheries: 22, orders: 1678 },
    { month: "Março", revenue: "R$ 112.180,00", commission: "R$ 8.974,00", butcheries: 23, orders: 1892 },
    { month: "Abril", revenue: "R$ 127.450,00", commission: "R$ 10.196,00", butcheries: 24, orders: 2156 },
  ]

  const topPerformingButcheries = [
    { name: "Açougue Premium", revenue: "R$ 18.420,00", commission: "R$ 1.474,00", growth: "+25%" },
    { name: "Carnes Nobres", revenue: "R$ 15.680,00", commission: "R$ 1.254,00", growth: "+18%" },
    { name: "Açougue Central", revenue: "R$ 12.340,00", commission: "R$ 987,00", growth: "+12%" },
    { name: "Carnes & Cia", revenue: "R$ 9.870,00", commission: "R$ 790,00", growth: "+8%" },
    { name: "Açougue São Paulo", revenue: "R$ 8.650,00", commission: "R$ 692,00", growth: "+15%" },
  ]

  const categoryAnalysis = [
    { category: "Bovino", percentage: "45%", revenue: "R$ 57.352,00" },
    { category: "Suíno", percentage: "22%", revenue: "R$ 28.039,00" },
    { category: "Aves", percentage: "18%", revenue: "R$ 22.941,00" },
    { category: "Peixes", percentage: "10%", revenue: "R$ 12.745,00" },
    { category: "Embutidos", percentage: "5%", revenue: "R$ 6.373,00" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Relatórios Administrativos</h2>
          <p className="text-gray-600">Análise completa da performance da plataforma</p>
        </div>
        <div className="flex items-center gap-4">
          <Select defaultValue="month">
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="week">Esta Semana</SelectItem>
              <SelectItem value="month">Este Mês</SelectItem>
              <SelectItem value="quarter">Trimestre</SelectItem>
              <SelectItem value="year">Este Ano</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Exportar Relatório
          </Button>
        </div>
      </div>

      {/* Platform Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {platformStats.map((stat, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">{stat.title}</CardTitle>
              <stat.icon className={`w-5 h-5 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="flex items-center gap-1 mt-1">
                <TrendingUp className="w-4 h-4 text-green-600" />
                <span className="text-xs text-green-600">{stat.change}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Monthly Growth */}
      <Card>
        <CardHeader>
          <CardTitle>Crescimento Mensal da Plataforma</CardTitle>
          <CardDescription>Evolução das métricas principais nos últimos 4 meses</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {monthlyData.map((data, index) => (
              <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{data.month}</p>
                    <p className="text-sm text-gray-600">
                      {data.butcheries} açougues • {data.orders} pedidos
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-lg text-gray-900">{data.revenue}</p>
                  <p className="text-sm text-green-600">Comissão: {data.commission}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Performing Butcheries */}
        <Card>
          <CardHeader>
            <CardTitle>Açougues com Melhor Performance</CardTitle>
            <CardDescription>Ranking por receita e comissões geradas</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topPerformingButcheries.map((butchery, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-red-600">{index + 1}</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{butchery.name}</p>
                      <p className="text-sm text-gray-600">Comissão: {butchery.commission}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-gray-900">{butchery.revenue}</p>
                    <div className="flex items-center gap-1">
                      <TrendingUp className="w-4 h-4 text-green-600" />
                      <span className="text-sm text-green-600">{butchery.growth}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Category Analysis */}
        <Card>
          <CardHeader>
            <CardTitle>Análise por Categoria</CardTitle>
            <CardDescription>Distribuição de vendas por tipo de produto</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {categoryAnalysis.map((category, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-red-600 rounded-full" style={{ width: category.percentage }} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{category.category}</p>
                      <p className="text-sm text-gray-600">{category.percentage} do total</p>
                    </div>
                  </div>
                  <p className="font-bold text-gray-900">{category.revenue}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Financial Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Resumo Financeiro</CardTitle>
          <CardDescription>Análise detalhada das receitas e comissões</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-green-50 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <DollarSign className="w-8 h-8 text-green-600" />
                <h4 className="font-semibold text-gray-900">Receita Bruta</h4>
              </div>
              <p className="text-2xl font-bold text-green-600">R$ 127.450,00</p>
              <p className="text-sm text-gray-600 mt-1">Total movimentado na plataforma</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <Target className="w-8 h-8 text-purple-600" />
                <h4 className="font-semibold text-gray-900">Comissões</h4>
              </div>
              <p className="text-2xl font-bold text-purple-600">R$ 10.196,00</p>
              <p className="text-sm text-gray-600 mt-1">8% de comissão média</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <TrendingUp className="w-8 h-8 text-blue-600" />
                <h4 className="font-semibold text-gray-900">Crescimento</h4>
              </div>
              <p className="text-2xl font-bold text-blue-600">+15.2%</p>
              <p className="text-sm text-gray-600 mt-1">Comparado ao mês anterior</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
