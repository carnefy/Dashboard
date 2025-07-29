"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Plus, Eye, Edit, MapPin, Phone, Mail, CheckCircle, XCircle, Clock, AlertTriangle } from "lucide-react"

export function AdminButcheries() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [selectedButchery, setSelectedButchery] = useState<any>(null)

  const butcheries = [
    {
      id: 1,
      name: "Açougue Premium",
      cnpj: "12.345.678/0001-90",
      owner: "João Silva",
      phone: "(11) 99999-1234",
      email: "contato@acouguepreium.com",
      address: "Rua das Flores, 123 - Vila Madalena, São Paulo - SP",
      status: "active",
      revenue: "R$ 18.420,00",
      orders: 89,
      rating: 4.8,
      joinDate: "15/03/2023",
    },
    {
      id: 2,
      name: "Carnes Nobres",
      cnpj: "98.765.432/0001-10",
      owner: "Maria Santos",
      phone: "(11) 88888-5678",
      email: "contato@carnesnobles.com",
      address: "Av. Paulista, 456 - Jardins, São Paulo - SP",
      status: "active",
      revenue: "R$ 15.680,00",
      orders: 76,
      rating: 4.6,
      joinDate: "22/01/2023",
    },
    {
      id: 3,
      name: "Açougue Central",
      cnpj: "11.222.333/0001-44",
      owner: "Pedro Costa",
      phone: "(11) 77777-9012",
      email: "central@acougue.com",
      address: "Rua Augusta, 789 - Centro, São Paulo - SP",
      status: "suspended",
      revenue: "R$ 12.340,00",
      orders: 65,
      rating: 4.2,
      joinDate: "10/05/2023",
    },
    {
      id: 4,
      name: "Carnes Especiais",
      cnpj: "55.666.777/0001-88",
      owner: "Ana Oliveira",
      phone: "(11) 66666-3456",
      email: "especiais@carnes.com",
      address: "Rua Oscar Freire, 321 - Jardins, São Paulo - SP",
      status: "pending",
      revenue: "R$ 0,00",
      orders: 0,
      rating: 0,
      joinDate: "28/01/2024",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 text-green-800">Ativo</Badge>
      case "suspended":
        return <Badge className="bg-red-100 text-red-800">Suspenso</Badge>
      case "pending":
        return <Badge className="bg-orange-100 text-orange-800">Pendente</Badge>
      case "inactive":
        return <Badge className="bg-gray-100 text-gray-800">Inativo</Badge>
      default:
        return <Badge variant="secondary">Desconhecido</Badge>
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active":
        return <CheckCircle className="w-4 h-4 text-green-600" />
      case "suspended":
        return <XCircle className="w-4 h-4 text-red-600" />
      case "pending":
        return <Clock className="w-4 h-4 text-orange-600" />
      case "inactive":
        return <AlertTriangle className="w-4 h-4 text-gray-600" />
      default:
        return null
    }
  }

  const filteredButcheries = butcheries.filter((butchery) => {
    const matchesSearch =
      butchery.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      butchery.owner.toLowerCase().includes(searchTerm.toLowerCase()) ||
      butchery.cnpj.includes(searchTerm)
    const matchesStatus = statusFilter === "all" || butchery.status === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Açougues</h2>
          <p className="text-gray-600">Gerencie todos os açougues da plataforma</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-red-600 hover:bg-red-700">
              <Plus className="w-4 h-4 mr-2" />
              Novo Açougue
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Cadastrar Novo Açougue</DialogTitle>
              <DialogDescription>Preencha as informações completas do estabelecimento</DialogDescription>
            </DialogHeader>
            <div className="space-y-6">
              {/* Basic Information */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Informações Básicas</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Nome do Estabelecimento</Label>
                    <Input id="name" placeholder="Ex: Açougue Premium" />
                  </div>
                  <div>
                    <Label htmlFor="cnpj">CNPJ</Label>
                    <Input id="cnpj" placeholder="00.000.000/0000-00" />
                  </div>
                  <div>
                    <Label htmlFor="owner">Responsável</Label>
                    <Input id="owner" placeholder="Nome do proprietário" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Telefone Principal</Label>
                    <Input id="phone" placeholder="(11) 99999-9999" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email de Contato</Label>
                    <Input id="email" type="email" placeholder="contato@acougue.com" />
                  </div>
                  <div>
                    <Label htmlFor="status">Status Inicial</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pending">Pendente</SelectItem>
                        <SelectItem value="active">Ativo</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Address Information */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Endereço</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="cep">CEP</Label>
                    <Input id="cep" placeholder="00000-000" />
                  </div>
                  <div>
                    <Label htmlFor="street">Rua</Label>
                    <Input id="street" placeholder="Nome da rua" />
                  </div>
                  <div>
                    <Label htmlFor="number">Número</Label>
                    <Input id="number" placeholder="123" />
                  </div>
                  <div>
                    <Label htmlFor="neighborhood">Bairro</Label>
                    <Input id="neighborhood" placeholder="Nome do bairro" />
                  </div>
                  <div>
                    <Label htmlFor="city">Cidade</Label>
                    <Input id="city" placeholder="São Paulo" />
                  </div>
                  <div>
                    <Label htmlFor="state">Estado</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o estado" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="SP">São Paulo</SelectItem>
                        <SelectItem value="RJ">Rio de Janeiro</SelectItem>
                        <SelectItem value="MG">Minas Gerais</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Business Information */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Informações do Negócio</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="deliveryRadius">Raio de Entrega (km)</Label>
                    <Input id="deliveryRadius" type="number" placeholder="5" />
                  </div>
                  <div>
                    <Label htmlFor="deliveryFee">Taxa de Entrega</Label>
                    <Input id="deliveryFee" placeholder="R$ 8,00" />
                  </div>
                  <div>
                    <Label htmlFor="prepTime">Tempo Médio de Preparo (min)</Label>
                    <Input id="prepTime" type="number" placeholder="30" />
                  </div>
                  <div>
                    <Label htmlFor="commission">Comissão da Plataforma (%)</Label>
                    <Input id="commission" type="number" placeholder="8" />
                  </div>
                </div>
                <div className="mt-4">
                  <Label htmlFor="specialties">Especialidades</Label>
                  <Textarea id="specialties" placeholder="Descreva as especialidades do açougue..." className="h-20" />
                </div>
              </div>

              {/* Banking Information */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Informações Bancárias</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="bank">Banco</Label>
                    <Input id="bank" placeholder="Nome do banco" />
                  </div>
                  <div>
                    <Label htmlFor="agency">Agência</Label>
                    <Input id="agency" placeholder="0000" />
                  </div>
                  <div>
                    <Label htmlFor="account">Conta</Label>
                    <Input id="account" placeholder="00000-0" />
                  </div>
                  <div>
                    <Label htmlFor="accountType">Tipo de Conta</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o tipo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="checking">Conta Corrente</SelectItem>
                        <SelectItem value="savings">Poupança</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-3 mt-6">
              <Button variant="outline">Cancelar</Button>
              <Button className="bg-red-600 hover:bg-red-700">Cadastrar Açougue</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Buscar açougues..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-48">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos os Status</SelectItem>
            <SelectItem value="active">Ativos</SelectItem>
            <SelectItem value="suspended">Suspensos</SelectItem>
            <SelectItem value="pending">Pendentes</SelectItem>
            <SelectItem value="inactive">Inativos</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-8 h-8 text-green-600" />
              <div>
                <p className="text-2xl font-bold text-gray-900">24</p>
                <p className="text-sm text-gray-600">Ativos</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Clock className="w-8 h-8 text-orange-600" />
              <div>
                <p className="text-2xl font-bold text-gray-900">1</p>
                <p className="text-sm text-gray-600">Pendentes</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <XCircle className="w-8 h-8 text-red-600" />
              <div>
                <p className="text-2xl font-bold text-gray-900">1</p>
                <p className="text-sm text-gray-600">Suspensos</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-8 h-8 text-gray-600" />
              <div>
                <p className="text-2xl font-bold text-gray-900">1</p>
                <p className="text-sm text-gray-600">Inativos</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Butcheries Table */}
      <Card>
        <CardHeader>
          <CardTitle>Lista de Açougues</CardTitle>
          <CardDescription>{filteredButcheries.length} açougues encontrados</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Açougue</TableHead>
                <TableHead>Proprietário</TableHead>
                <TableHead>Contato</TableHead>
                <TableHead>Receita Mensal</TableHead>
                <TableHead>Pedidos</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredButcheries.map((butchery) => (
                <TableRow key={butchery.id}>
                  <TableCell>
                    <div>
                      <p className="font-medium text-gray-900">{butchery.name}</p>
                      <p className="text-sm text-gray-500">{butchery.cnpj}</p>
                    </div>
                  </TableCell>
                  <TableCell>{butchery.owner}</TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Phone className="w-3 h-3 text-gray-400" />
                        <span className="text-sm">{butchery.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="w-3 h-3 text-gray-400" />
                        <span className="text-sm">{butchery.email}</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="font-bold text-green-600">{butchery.revenue}</TableCell>
                  <TableCell>{butchery.orders}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {getStatusIcon(butchery.status)}
                      {getStatusBadge(butchery.status)}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="ghost" size="sm" onClick={() => setSelectedButchery(butchery)}>
                            <Eye className="w-4 h-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-3xl">
                          <DialogHeader>
                            <DialogTitle>Detalhes do Açougue</DialogTitle>
                            <DialogDescription>Informações completas e métricas de performance</DialogDescription>
                          </DialogHeader>
                          {selectedButchery && (
                            <div className="space-y-6">
                              {/* Basic Info */}
                              <div className="grid grid-cols-2 gap-6">
                                <div>
                                  <h4 className="font-semibold text-gray-900 mb-3">Informações Básicas</h4>
                                  <div className="space-y-2">
                                    <p className="text-lg font-medium text-gray-900">{selectedButchery.name}</p>
                                    <p className="text-gray-600">CNPJ: {selectedButchery.cnpj}</p>
                                    <p className="text-gray-600">Proprietário: {selectedButchery.owner}</p>
                                    <div className="flex items-center gap-2 text-gray-600">
                                      <Phone className="w-4 h-4" />
                                      <span>{selectedButchery.phone}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-600">
                                      <Mail className="w-4 h-4" />
                                      <span>{selectedButchery.email}</span>
                                    </div>
                                    <div className="flex items-start gap-2 text-gray-600">
                                      <MapPin className="w-4 h-4 mt-0.5" />
                                      <span>{selectedButchery.address}</span>
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <h4 className="font-semibold text-gray-900 mb-3">Performance</h4>
                                  <div className="space-y-3">
                                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                      <span className="text-gray-600">Receita Mensal</span>
                                      <span className="font-bold text-green-600">{selectedButchery.revenue}</span>
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                      <span className="text-gray-600">Pedidos</span>
                                      <span className="font-bold text-gray-900">{selectedButchery.orders}</span>
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                      <span className="text-gray-600">Avaliação</span>
                                      <span className="font-bold text-gray-900">{selectedButchery.rating}/5</span>
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                      <span className="text-gray-600">Status</span>
                                      {getStatusBadge(selectedButchery.status)}
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                      <span className="text-gray-600">Cadastrado em</span>
                                      <span className="font-medium text-gray-900">{selectedButchery.joinDate}</span>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Actions */}
                              <div className="flex gap-3">
                                {selectedButchery.status === "pending" && (
                                  <Button className="bg-green-600 hover:bg-green-700">
                                    <CheckCircle className="w-4 h-4 mr-2" />
                                    Aprovar
                                  </Button>
                                )}
                                {selectedButchery.status === "active" && (
                                  <Button variant="destructive">
                                    <XCircle className="w-4 h-4 mr-2" />
                                    Suspender
                                  </Button>
                                )}
                                {selectedButchery.status === "suspended" && (
                                  <Button className="bg-blue-600 hover:bg-blue-700">
                                    <CheckCircle className="w-4 h-4 mr-2" />
                                    Reativar
                                  </Button>
                                )}
                                <Button variant="outline">
                                  <Edit className="w-4 h-4 mr-2" />
                                  Editar
                                </Button>
                                <Button variant="outline">
                                  <Phone className="w-4 h-4 mr-2" />
                                  Contatar
                                </Button>
                              </div>
                            </div>
                          )}
                        </DialogContent>
                      </Dialog>
                      <Button variant="ghost" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                    </div>
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
