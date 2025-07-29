"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Search, MoreHorizontal, Eye, CheckCircle, Clock, XCircle } from "lucide-react"

export function ButcherOrders() {
  const [searchTerm, setSearchTerm] = useState("")

  const orders = [
    {
      id: "001",
      customer: "Maria Silva",
      items: ["Picanha 1kg", "Linguiça 500g"],
      total: "R$ 89,50",
      status: "Concluído",
      date: "2024-01-15",
      time: "10:30",
    },
    {
      id: "002",
      customer: "João Santos",
      items: ["Alcatra 2kg", "Fraldinha 1kg"],
      total: "R$ 156,80",
      status: "Preparando",
      date: "2024-01-15",
      time: "11:15",
    },
    {
      id: "003",
      customer: "Ana Costa",
      items: ["Costela 1.5kg"],
      total: "R$ 67,20",
      status: "Pendente",
      date: "2024-01-15",
      time: "11:45",
    },
    {
      id: "004",
      customer: "Carlos Lima",
      items: ["Picanha 2kg", "Linguiça Toscana 1kg"],
      total: "R$ 234,90",
      status: "Concluído",
      date: "2024-01-15",
      time: "12:20",
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Concluído":
        return <CheckCircle className="w-4 h-4 text-green-500" />
      case "Preparando":
        return <Clock className="w-4 h-4 text-yellow-500" />
      case "Pendente":
        return <XCircle className="w-4 h-4 text-red-500" />
      default:
        return null
    }
  }

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "Concluído":
        return "default"
      case "Preparando":
        return "secondary"
      case "Pendente":
        return "destructive"
      default:
        return "outline"
    }
  }

  const filteredOrders = orders.filter(
    (order) => order.customer.toLowerCase().includes(searchTerm.toLowerCase()) || order.id.includes(searchTerm),
  )

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Pedidos</h1>
        <p className="text-gray-600 dark:text-gray-400">Gerencie todos os pedidos do seu açougue</p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Lista de Pedidos</CardTitle>
              <CardDescription>Todos os pedidos realizados hoje</CardDescription>
            </div>
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Buscar pedidos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-64"
                />
              </div>
              <Button>Novo Pedido</Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all" className="w-full">
            <TabsList>
              <TabsTrigger value="all">Todos</TabsTrigger>
              <TabsTrigger value="pending">Pendentes</TabsTrigger>
              <TabsTrigger value="preparing">Preparando</TabsTrigger>
              <TabsTrigger value="completed">Concluídos</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Pedido</TableHead>
                    <TableHead>Cliente</TableHead>
                    <TableHead>Itens</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Horário</TableHead>
                    <TableHead className="text-right">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredOrders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell className="font-medium">#{order.id}</TableCell>
                      <TableCell>{order.customer}</TableCell>
                      <TableCell>
                        <div className="text-sm">
                          {order.items.map((item, index) => (
                            <div key={index} className="text-gray-600 dark:text-gray-400">
                              {item}
                            </div>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell className="font-medium">{order.total}</TableCell>
                      <TableCell>
                        <Badge variant={getStatusVariant(order.status)} className="flex items-center gap-1 w-fit">
                          {getStatusIcon(order.status)}
                          {order.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{order.time}</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Eye className="mr-2 h-4 w-4" />
                              Ver Detalhes
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <CheckCircle className="mr-2 h-4 w-4" />
                              Marcar como Concluído
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
