"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Search, Eye, Clock, CheckCircle, AlertCircle, Truck, Phone, MapPin } from "lucide-react"

export function ButcherOrders() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedOrder, setSelectedOrder] = useState<any>(null)

  const orders = [
    {
      id: "#001",
      customer: "João Silva",
      phone: "(11) 99999-1234",
      address: "Rua das Flores, 123 - Vila Madalena",
      items: [
        { name: "Picanha", quantity: "1kg", price: "R$ 65,00" },
        { name: "Linguiça Toscana", quantity: "500g", price: "R$ 24,50" },
      ],
      total: "R$ 89,50",
      status: "preparing",
      time: "10:30",
      estimatedDelivery: "11:15",
    },
    {
      id: "#002",
      customer: "Maria Santos",
      phone: "(11) 98888-5678",
      address: "Av. Paulista, 456 - Bela Vista",
      items: [
        { name: "Alcatra", quantity: "2kg", price: "R$ 120,00" },
        { name: "Fraldinha", quantity: "1kg", price: "R$ 36,00" },
      ],
      total: "R$ 156,00",
      status: "ready",
      time: "10:45",
      estimatedDelivery: "11:30",
    },
    {
      id: "#003",
      customer: "Pedro Costa",
      phone: "(11) 97777-9012",
      address: "Rua Augusta, 789 - Consolação",
      items: [{ name: "Costela Bovina", quantity: "1.5kg", price: "R$ 67,50" }],
      total: "R$ 67,50",
      status: "delivered",
      time: "09:15",
      estimatedDelivery: "Entregue às 10:30",
    },
    {
      id: "#004",
      customer: "Ana Oliveira",
      phone: "(11) 96666-3456",
      address: "Rua Oscar Freire, 321 - Jardins",
      items: [
        { name: "Salmão", quantity: "800g", price: "R$ 48,00" },
        { name: "Camarão", quantity: "500g", price: "R$ 35,00" },
      ],
      total: "R$ 83,00",
      status: "out_for_delivery",
      time: "11:00",
      estimatedDelivery: "11:45",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "preparing":
        return <Badge className="bg-orange-100 text-orange-800">Preparando</Badge>
      case "ready":
        return <Badge className="bg-blue-100 text-blue-800">Pronto</Badge>
      case "out_for_delivery":
        return <Badge className="bg-purple-100 text-purple-800">Saiu para Entrega</Badge>
      case "delivered":
        return <Badge className="bg-green-100 text-green-800">Entregue</Badge>
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
      case "out_for_delivery":
        return <Truck className="w-4 h-4 text-purple-600" />
      case "delivered":
        return <CheckCircle className="w-4 h-4 text-green-600" />
      default:
        return null
    }
  }

  const filteredOrders = orders.filter(
    (order) =>
      order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.id.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Pedidos</h2>
          <p className="text-gray-600">Gerencie todos os pedidos do seu açougue</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Buscar pedidos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-64"
            />
          </div>
        </div>
      </div>

      {/* Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Clock className="w-8 h-8 text-orange-600" />
              <div>
                <p className="text-2xl font-bold text-gray-900">2</p>
                <p className="text-sm text-gray-600">Preparando</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <AlertCircle className="w-8 h-8 text-blue-600" />
              <div>
                <p className="text-2xl font-bold text-gray-900">1</p>
                <p className="text-sm text-gray-600">Pronto</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Truck className="w-8 h-8 text-purple-600" />
              <div>
                <p className="text-2xl font-bold text-gray-900">1</p>
                <p className="text-sm text-gray-600">Saiu para Entrega</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-8 h-8 text-green-600" />
              <div>
                <p className="text-2xl font-bold text-gray-900">1</p>
                <p className="text-sm text-gray-600">Entregue</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Orders Table */}
      <Card>
        <CardHeader>
          <CardTitle>Lista de Pedidos</CardTitle>
          <CardDescription>{filteredOrders.length} pedidos encontrados</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Pedido</TableHead>
                <TableHead>Cliente</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Horário</TableHead>
                <TableHead>Entrega</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell className="font-bold">{order.total}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {getStatusIcon(order.status)}
                      {getStatusBadge(order.status)}
                    </div>
                  </TableCell>
                  <TableCell>{order.time}</TableCell>
                  <TableCell>{order.estimatedDelivery}</TableCell>
                  <TableCell>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="ghost" size="sm" onClick={() => setSelectedOrder(order)}>
                          <Eye className="w-4 h-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle>Detalhes do Pedido {order.id}</DialogTitle>
                          <DialogDescription>Informações completas do pedido</DialogDescription>
                        </DialogHeader>
                        {selectedOrder && (
                          <div className="space-y-6">
                            {/* Customer Info */}
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <h4 className="font-semibold text-gray-900 mb-2">Cliente</h4>
                                <div className="space-y-1">
                                  <p className="text-gray-700">{selectedOrder.customer}</p>
                                  <div className="flex items-center gap-2 text-gray-600">
                                    <Phone className="w-4 h-4" />
                                    <span>{selectedOrder.phone}</span>
                                  </div>
                                  <div className="flex items-start gap-2 text-gray-600">
                                    <MapPin className="w-4 h-4 mt-0.5" />
                                    <span>{selectedOrder.address}</span>
                                  </div>
                                </div>
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-900 mb-2">Status</h4>
                                <div className="space-y-2">
                                  <div className="flex items-center gap-2">
                                    {getStatusIcon(selectedOrder.status)}
                                    {getStatusBadge(selectedOrder.status)}
                                  </div>
                                  <p className="text-sm text-gray-600">Pedido feito às {selectedOrder.time}</p>
                                  <p className="text-sm text-gray-600">
                                    Entrega prevista: {selectedOrder.estimatedDelivery}
                                  </p>
                                </div>
                              </div>
                            </div>

                            {/* Items */}
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-3">Itens do Pedido</h4>
                              <div className="space-y-2">
                                {selectedOrder.items.map((item: any, index: number) => (
                                  <div
                                    key={index}
                                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                                  >
                                    <div>
                                      <p className="font-medium text-gray-900">{item.name}</p>
                                      <p className="text-sm text-gray-600">{item.quantity}</p>
                                    </div>
                                    <p className="font-bold text-gray-900">{item.price}</p>
                                  </div>
                                ))}
                              </div>
                              <div className="flex items-center justify-between pt-3 border-t border-gray-200 mt-3">
                                <p className="font-bold text-lg text-gray-900">Total</p>
                                <p className="font-bold text-lg text-gray-900">{selectedOrder.total}</p>
                              </div>
                            </div>

                            {/* Actions */}
                            <div className="flex gap-3">
                              {selectedOrder.status === "preparing" && (
                                <Button className="bg-blue-600 hover:bg-blue-700">Marcar como Pronto</Button>
                              )}
                              {selectedOrder.status === "ready" && (
                                <Button className="bg-purple-600 hover:bg-purple-700">Saiu para Entrega</Button>
                              )}
                              <Button variant="outline">
                                <Phone className="w-4 h-4 mr-2" />
                                Ligar para Cliente
                              </Button>
                            </div>
                          </div>
                        )}
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
