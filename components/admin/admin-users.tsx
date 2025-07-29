"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Search, MoreHorizontal, Eye, Edit, Shield, Building2, Mail, Phone } from "lucide-react"

export function AdminUsers() {
  const [searchTerm, setSearchTerm] = useState("")

  const users = [
    {
      id: "1",
      name: "João Silva",
      email: "joao@acougue.com",
      phone: "(11) 99999-1111",
      role: "Açougueiro",
      butchery: "Açougue do João",
      status: "Ativo",
      lastLogin: "2024-01-15 10:30",
    },
    {
      id: "2",
      name: "Maria Santos",
      email: "maria@premium.com",
      phone: "(11) 99999-2222",
      role: "Açougueiro",
      butchery: "Carnes Premium",
      status: "Ativo",
      lastLogin: "2024-01-15 09:15",
    },
    {
      id: "3",
      name: "Admin Sistema",
      email: "admin@carnefy.com",
      phone: "(11) 99999-0000",
      role: "Administrador",
      butchery: "-",
      status: "Ativo",
      lastLogin: "2024-01-15 14:20",
    },
    {
      id: "4",
      name: "Carlos Lima",
      email: "carlos@central.com",
      phone: "(11) 99999-3333",
      role: "Açougueiro",
      butchery: "Açougue Central",
      status: "Pendente",
      lastLogin: "Nunca",
    },
  ]

  const getRoleIcon = (role: string) => {
    return role === "Administrador" ? Shield : Building2
  }

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "Ativo":
        return "default"
      case "Pendente":
        return "secondary"
      case "Inativo":
        return "destructive"
      default:
        return "outline"
    }
  }

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.butchery.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Usuários</h1>
        <p className="text-gray-600 dark:text-gray-400">Gerencie todos os usuários da plataforma</p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Lista de Usuários</CardTitle>
              <CardDescription>Todos os usuários cadastrados na plataforma</CardDescription>
            </div>
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Buscar usuários..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-64"
                />
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Usuário</TableHead>
                <TableHead>Contato</TableHead>
                <TableHead>Função</TableHead>
                <TableHead>Açougue</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Último Acesso</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.map((user) => {
                const RoleIcon = getRoleIcon(user.role)
                return (
                  <TableRow key={user.id}>
                    <TableCell>
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center text-white font-semibold">
                          {user.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">{user.name}</p>
                          <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                            <Mail className="w-3 h-3" />
                            {user.email}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1 text-sm">
                        <Phone className="w-3 h-3 text-gray-400" />
                        {user.phone}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <RoleIcon className="w-4 h-4 text-gray-500" />
                        {user.role}
                      </div>
                    </TableCell>
                    <TableCell>{user.butchery}</TableCell>
                    <TableCell>
                      <Badge variant={getStatusVariant(user.status)}>{user.status}</Badge>
                    </TableCell>
                    <TableCell className="text-sm text-gray-500 dark:text-gray-400">{user.lastLogin}</TableCell>
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
                            Ver Perfil
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Edit className="mr-2 h-4 w-4" />
                            Editar
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
