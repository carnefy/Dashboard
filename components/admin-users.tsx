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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Eye, Shield, User, Building2, Phone, Mail, Calendar, Activity } from "lucide-react"

export function AdminUsers() {
  const [searchTerm, setSearchTerm] = useState("")
  const [roleFilter, setRoleFilter] = useState("all")
  const [selectedUser, setSelectedUser] = useState<any>(null)

  const users = [
    {
      id: 1,
      name: "João Silva",
      email: "joao@acouguepreium.com",
      role: "butcher",
      butchery: "Açougue Premium",
      phone: "(11) 99999-1234",
      lastLogin: "2024-01-15 14:30",
      status: "active",
      joinDate: "15/03/2023",
      totalLogins: 245,
    },
    {
      id: 2,
      name: "Maria Santos",
      email: "maria@carnesnobles.com",
      role: "butcher",
      butchery: "Carnes Nobres",
      phone: "(11) 88888-5678",
      lastLogin: "2024-01-15 09:15",
      status: "active",
      joinDate: "22/01/2023",
      totalLogins: 189,
    },
    {
      id: 3,
      name: "Pedro Costa",
      email: "pedro@acougue.com",
      role: "butcher",
      butchery: "Açougue Central",
      phone: "(11) 77777-9012",
      lastLogin: "2024-01-10 16:45",
      status: "suspended",
      joinDate: "10/05/2023",
      totalLogins: 156,
    },
    {
      id: 4,
      name: "Administrador Geral",
      email: "admin@carnefy.com.br",
      role: "admin",
      butchery: "-",
      phone: "(11) 99999-0000",
      lastLogin: "2024-01-15 15:00",
      status: "active",
      joinDate: "01/01/2023",
      totalLogins: 892,
    },
  ]

  const getRoleBadge = (role: string) => {
    switch (role) {
      case "admin":
        return <Badge className="bg-red-100 text-red-800">Administrador</Badge>
      case "butcher":
        return <Badge className="bg-blue-100 text-blue-800">Açougueiro</Badge>
      default:
        return <Badge variant="secondary">Desconhecido</Badge>
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 text-green-800">Ativo</Badge>
      case "suspended":
        return <Badge className="bg-red-100 text-red-800">Suspenso</Badge>
      case "inactive":
        return <Badge className="bg-gray-100 text-gray-800">Inativo</Badge>
      default:
        return <Badge variant="secondary">Desconhecido</Badge>
    }
  }

  const getRoleIcon = (role: string) => {
    switch (role) {
      case "admin":
        return <Shield className="w-4 h-4 text-red-600" />
      case "butcher":
        return <Building2 className="w-4 h-4 text-blue-600" />
      default:
        return <User className="w-4 h-4 text-gray-600" />
    }
  }

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.butchery.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesRole = roleFilter === "all" || user.role === roleFilter
    return matchesSearch && matchesRole
  })

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Usuários</h2>
          <p className="text-gray-600">Gerencie todos os usuários da plataforma</p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Buscar usuários..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={roleFilter} onValueChange={setRoleFilter}>
          <SelectTrigger className="w-48">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos os Tipos</SelectItem>
            <SelectItem value="admin">Administradores</SelectItem>
            <SelectItem value="butcher">Açougueiros</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* User Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Shield className="w-8 h-8 text-red-600" />
              <div>
                <p className="text-2xl font-bold text-gray-900">1</p>
                <p className="text-sm text-gray-600">Administradores</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Building2 className="w-8 h-8 text-blue-600" />
              <div>
                <p className="text-2xl font-bold text-gray-900">3</p>
                <p className="text-sm text-gray-600">Açougueiros</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Activity className="w-8 h-8 text-green-600" />
              <div>
                <p className="text-2xl font-bold text-gray-900">3</p>
                <p className="text-sm text-gray-600">Usuários Ativos</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <User className="w-8 h-8 text-orange-600" />
              <div>
                <p className="text-2xl font-bold text-gray-900">1</p>
                <p className="text-sm text-gray-600">Suspensos</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Users Table */}
      <Card>
        <CardHeader>
          <CardTitle>Lista de Usuários</CardTitle>
          <CardDescription>{filteredUsers.length} usuários encontrados</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Usuário</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Açougue</TableHead>
                <TableHead>Contato</TableHead>
                <TableHead>Último Acesso</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      {getRoleIcon(user.role)}
                      <div>
                        <p className="font-medium text-gray-900">{user.name}</p>
                        <p className="text-sm text-gray-500">{user.email}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{getRoleBadge(user.role)}</TableCell>
                  <TableCell>{user.butchery}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Phone className="w-3 h-3 text-gray-400" />
                      <span className="text-sm">{user.phone}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <p className="text-sm text-gray-900">{user.lastLogin.split(" ")[1]}</p>
                      <p className="text-xs text-gray-500">{user.lastLogin.split(" ")[0]}</p>
                    </div>
                  </TableCell>
                  <TableCell>{getStatusBadge(user.status)}</TableCell>
                  <TableCell>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="ghost" size="sm" onClick={() => setSelectedUser(user)}>
                          <Eye className="w-4 h-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle>Detalhes do Usuário</DialogTitle>
                          <DialogDescription>Informações completas e logs de atividade</DialogDescription>
                        </DialogHeader>
                        {selectedUser && (
                          <div className="space-y-6">
                            {/* User Info */}
                            <div className="grid grid-cols-2 gap-6">
                              <div>
                                <h4 className="font-semibold text-gray-900 mb-3">Informações Pessoais</h4>
                                <div className="space-y-2">
                                  <div className="flex items-center gap-3">
                                    {getRoleIcon(selectedUser.role)}
                                    <p className="text-lg font-medium text-gray-900">{selectedUser.name}</p>
                                  </div>
                                  <div className="flex items-center gap-2 text-gray-600">
                                    <Mail className="w-4 h-4" />
                                    <span>{selectedUser.email}</span>
                                  </div>
                                  <div className="flex items-center gap-2 text-gray-600">
                                    <Phone className="w-4 h-4" />
                                    <span>{selectedUser.phone}</span>
                                  </div>
                                  <div className="flex items-center gap-2 text-gray-600">
                                    <Building2 className="w-4 h-4" />
                                    <span>{selectedUser.butchery}</span>
                                  </div>
                                  <div className="flex items-center gap-2 text-gray-600">
                                    <Calendar className="w-4 h-4" />
                                    <span>Cadastrado em {selectedUser.joinDate}</span>
                                  </div>
                                </div>
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-900 mb-3">Atividade</h4>
                                <div className="space-y-3">
                                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                    <span className="text-gray-600">Tipo de Usuário</span>
                                    {getRoleBadge(selectedUser.role)}
                                  </div>
                                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                    <span className="text-gray-600">Status</span>
                                    {getStatusBadge(selectedUser.status)}
                                  </div>
                                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                    <span className="text-gray-600">Total de Logins</span>
                                    <span className="font-bold text-gray-900">{selectedUser.totalLogins}</span>
                                  </div>
                                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                    <span className="text-gray-600">Último Acesso</span>
                                    <span className="font-medium text-gray-900">{selectedUser.lastLogin}</span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Recent Activity */}
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-3">Atividade Recente</h4>
                              <div className="space-y-2">
                                <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                                  <div>
                                    <p className="text-sm text-gray-900">Login realizado</p>
                                    <p className="text-xs text-gray-500">15/01/2024 às 14:30</p>
                                  </div>
                                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                                    Sucesso
                                  </Badge>
                                </div>
                                <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                                  <div>
                                    <p className="text-sm text-gray-900">Produto cadastrado</p>
                                    <p className="text-xs text-gray-500">15/01/2024 às 10:15</p>
                                  </div>
                                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                                    Ação
                                  </Badge>
                                </div>
                                <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                                  <div>
                                    <p className="text-sm text-gray-900">Pedido processado</p>
                                    <p className="text-xs text-gray-500">14/01/2024 às 16:22</p>
                                  </div>
                                  <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                                    Pedido
                                  </Badge>
                                </div>
                              </div>
                            </div>

                            {/* Actions */}
                            <div className="flex gap-3">
                              {selectedUser.status === "active" && selectedUser.role !== "admin" && (
                                <Button variant="destructive">Suspender Usuário</Button>
                              )}
                              {selectedUser.status === "suspended" && (
                                <Button className="bg-green-600 hover:bg-green-700">Reativar Usuário</Button>
                              )}
                              <Button variant="outline">
                                <Phone className="w-4 h-4 mr-2" />
                                Contatar
                              </Button>
                              <Button variant="outline">Ver Logs Completos</Button>
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
