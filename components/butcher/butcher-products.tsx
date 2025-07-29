"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Search, MoreHorizontal, Edit, Trash2, Plus, AlertTriangle } from "lucide-react"

export function ButcherProducts() {
  const [searchTerm, setSearchTerm] = useState("")

  const products = [
    {
      id: "1",
      name: "Picanha",
      category: "Carnes Bovinas",
      price: "R$ 89,90",
      stock: 15.5,
      unit: "kg",
      status: "Disponível",
    },
    {
      id: "2",
      name: "Alcatra",
      category: "Carnes Bovinas",
      price: "R$ 45,90",
      stock: 1.5,
      unit: "kg",
      status: "Estoque Baixo",
    },
    {
      id: "3",
      name: "Linguiça Toscana",
      category: "Embutidos",
      price: "R$ 28,90",
      stock: 3.2,
      unit: "kg",
      status: "Estoque Baixo",
    },
    {
      id: "4",
      name: "Fraldinha",
      category: "Carnes Bovinas",
      price: "R$ 38,90",
      stock: 8.7,
      unit: "kg",
      status: "Disponível",
    },
    {
      id: "5",
      name: "Costela Bovina",
      category: "Carnes Bovinas",
      price: "R$ 32,90",
      stock: 12.3,
      unit: "kg",
      status: "Disponível",
    },
  ]

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "Disponível":
        return "default"
      case "Estoque Baixo":
        return "destructive"
      case "Indisponível":
        return "secondary"
      default:
        return "outline"
    }
  }

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Produtos</h1>
        <p className="text-gray-600 dark:text-gray-400">Gerencie o catálogo de produtos do seu açougue</p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Catálogo de Produtos</CardTitle>
              <CardDescription>Lista completa dos produtos disponíveis</CardDescription>
            </div>
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Buscar produtos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-64"
                />
              </div>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Novo Produto
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Produto</TableHead>
                <TableHead>Categoria</TableHead>
                <TableHead>Preço</TableHead>
                <TableHead>Estoque</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredProducts.map((product) => (
                <TableRow key={product.id}>
                  <TableCell className="font-medium">{product.name}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell className="font-medium">{product.price}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {product.stock < 5 && <AlertTriangle className="w-4 h-4 text-orange-500" />}
                      <span>
                        {product.stock} {product.unit}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={getStatusVariant(product.status)}>{product.status}</Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Edit className="mr-2 h-4 w-4" />
                          Editar
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          <Trash2 className="mr-2 h-4 w-4" />
                          Excluir
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
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
