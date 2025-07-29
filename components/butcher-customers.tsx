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
import { Search, Eye, Phone, MapPin, ShoppingCart, Star, Gift } from "lucide-react"

export function ButcherCustomers() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCustomer, setSelectedCustomer] = useState<any>(null)

  const customers = [
    {
      id: 1,
      name: "João Silva",
      phone: "(11) 99999-1234",
      email: "joao@email.com",
      address: "Rua das Flores, 123 - Vila Madalena",
      totalOrders: 15,
      totalSpent: "R$ 1.247,50",
      lastOrder: "2024-01-15",
      status: "vip",
      orders: [
        { id: "#001", date: "15/01/2024", total: "R$ 89,50", items: "Picanha, Linguiça" },
        { id: "#015", date: "10/01/2024", total: "R$ 156,00", items: "Alcatra, Fraldinha" },
        { id: "#028", date: "05/01/2024", total: "R$ 67,50", items: "Costela" },
      ],
    },
    {
      id: 2,
      name: "Maria Santos",
      phone: "(11) 98888-5678",
      email: "maria@email.com",
      address: "Av. Paulista, 456 - Bela Vista",
      totalOrders: 8,
      totalSpent: "R$ 654,00",
      lastOrder: "2024-01-12",
      status: "regular",
      orders: [
        { id: "#002", date: "12/01/2024", total: "R$ 156,00", items: "Alcatra, Fraldinha" },
        { id: "#018", date: "08/01/2024", total: "R$ 89,50", items: "Picanha" },
      ],
    },
    {
      id: 3,
      name: "Pedro Costa",
      phone: "(11) 97777-9012",
      email: "pedro@email.com",
      address: "Rua Augusta, 789 - Consolação",
      totalOrders: 3,
      totalSpent: "R$ 234,50",
      lastOrder: "2024-01-08",
      status: "new",
      orders: [
        { id: "#003", date: "08/01/2024", total: "R$ 67,50", items: "Costela" },
        { id: "#025", date: "03/01/2024", total: "R$ 89,00", items: "Fraldinha" },
      ],
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "vip":
        return <Badge className="bg-purple-100 text-purple-800">VIP</Badge>
      case "regular":
        return <Badge className="bg-blue-100 text-blue-800">Regular</Badge>
      case "new":
        return <Badge className="bg-green-100 text-green-800">Novo</Badge>
      default:
        return <Badge variant="secondary">Desconhecido</Badge>
    }
  }

  const filteredCustomers = customers.filter(
    (customer) => customer.name.toLowerCase().includes(searchTerm.toLowerCase()) || customer.phone.includes(searchTerm),
  )

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Clientes</h2>
          <p className="text-gray-600">Gerencie seus clientes e histórico de compras</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Buscar clientes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-64"
            />
          </div>
        </div>
      </div>

      {/* Customer Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Star className="w-8 h-8 text-purple-600" />
              <div>
                <p className="text-2xl font-bold text-gray-900">1</p>
                <p className="text-sm text-gray-600">Clientes VIP</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <ShoppingCart className="w-8 h-8 text-blue-600" />
              <div>
                <p className="text-2xl font-bold text-gray-900">1</p>
                <p className="text-sm text-gray-600">Regulares</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Gift className="w-8 h-8 text-green-600" />
              <div>
                <p className="text-2xl font-bold text-gray-900">1</p>
                <p className="text-sm text-gray-600">Novos</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                <span className="text-red-600 font-bold">R$</span>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">R$ 2.136</p>
                <p className="text-sm text-gray-600">Receita Total</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Customers Table */}
      <Card>
        <CardHeader>
          <CardTitle>Lista de Clientes</CardTitle>
          <CardDescription>{filteredCustomers.length} clientes encontrados</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Cliente</TableHead>
                <TableHead>Contato</TableHead>
                <TableHead>Pedidos</TableHead>
                <TableHead>Total Gasto</TableHead>
                <TableHead>Último Pedido</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCustomers.map((customer) => (
                <TableRow key={customer.id}>
                  <TableCell>
                    <div>
                      <p className="font-medium text-gray-900">{customer.name}</p>
                      <p className="text-sm text-gray-500">{customer.email}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-gray-400" />
                      <span className="text-sm">{customer.phone}</span>
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">{customer.totalOrders}</TableCell>
                  <TableCell className="font-bold text-green-600">{customer.totalSpent}</TableCell>
                  <TableCell>{customer.lastOrder}</TableCell>
                  <TableCell>{getStatusBadge(customer.status)}</TableCell>
                  <TableCell>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="ghost" size="sm" onClick={() => setSelectedCustomer(customer)}>
                          <Eye className="w-4 h-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl">
                        <DialogHeader>
                          <DialogTitle>Perfil do Cliente</DialogTitle>
                          <DialogDescription>Informações detalhadas e histórico de compras</DialogDescription>
                        </DialogHeader>
                        {selectedCustomer && (
                          <div className="space-y-6">
                            {/* Customer Info */}
                            <div className="grid grid-cols-2 gap-6">
                              <div>
                                <h4 className="font-semibold text-gray-900 mb-3">Informações Pessoais</h4>
                                <div className="space-y-2">
                                  <p className="text-lg font-medium text-gray-900">{selectedCustomer.name}</p>
                                  <div className="flex items-center gap-2 text-gray-600">
                                    <Phone className="w-4 h-4" />
                                    <span>{selectedCustomer.phone}</span>
                                  </div>
                                  <p className="text-gray-600">{selectedCustomer.email}</p>
                                  <div className="flex items-start gap-2 text-gray-600">
                                    <MapPin className="w-4 h-4 mt-0.5" />
                                    <span>{selectedCustomer.address}</span>
                                  </div>
                                </div>
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-900 mb-3">Estatísticas</h4>
                                <div className="space-y-3">
                                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                    <span className="text-gray-600">Total de Pedidos</span>
                                    <span className="font-bold text-gray-900">{selectedCustomer.totalOrders}</span>
                                  </div>
                                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                    <span className="text-gray-600">Total Gasto</span>
                                    <span className="font-bold text-green-600">{selectedCustomer.totalSpent}</span>
                                  </div>
                                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                    <span className="text-gray-600">Status</span>
                                    {getStatusBadge(selectedCustomer.status)}
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Order History */}
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-3">Histórico de Pedidos</h4>
                              <div className="space-y-2">
                                {selectedCustomer.orders.map((order: any, index: number) => (
                                  <div
                                    key={index}
                                    className="flex items-center justify-between p-3 border border-gray-200 rounded-lg"
                                  >
                                    <div>
                                      <p className="font-medium text-gray-900">{order.id}</p>
                                      <p className="text-sm text-gray-600">{order.items}</p>
                                      <p className="text-xs text-gray-500">{order.date}</p>
                                    </div>
                                    <p className="font-bold text-gray-900">{order.total}</p>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Actions */}
                            <div className="flex gap-3">
                              <Button className="bg-red-600 hover:bg-red-700">
                                <Phone className="w-4 h-4 mr-2" />
                                Ligar para Cliente
                              </Button>
                              <Button variant="outline">
                                <Gift className="w-4 h-4 mr-2" />
                                Enviar Cupom
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
