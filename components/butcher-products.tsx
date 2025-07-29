"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Plus, Edit, Package, AlertTriangle, CheckCircle } from "lucide-react"

export function ButcherProducts() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { value: "all", label: "Todas as Categorias" },
    { value: "bovino", label: "Bovino" },
    { value: "suino", label: "Suíno" },
    { value: "aves", label: "Aves" },
    { value: "peixes", label: "Peixes" },
    { value: "embutidos", label: "Embutidos" },
  ]

  const products = [
    {
      id: 1,
      name: "Picanha",
      category: "bovino",
      price: "R$ 65,00",
      stock: "2 kg",
      status: "low",
      image: "/placeholder.svg?height=80&width=80",
      description: "Corte nobre bovino, ideal para churrasco",
    },
    {
      id: 2,
      name: "Alcatra",
      category: "bovino",
      price: "R$ 42,00",
      stock: "8 kg",
      status: "ok",
      image: "/placeholder.svg?height=80&width=80",
      description: "Carne macia e saborosa",
    },
    {
      id: 3,
      name: "Fraldinha",
      category: "bovino",
      price: "R$ 36,00",
      stock: "5 kg",
      status: "ok",
      image: "/placeholder.svg?height=80&width=80",
      description: "Corte suculento para churrasco",
    },
    {
      id: 4,
      name: "Salmão",
      category: "peixes",
      price: "R$ 60,00",
      stock: "0 kg",
      status: "out",
      image: "/placeholder.svg?height=80&width=80",
      description: "Peixe fresco, rico em ômega 3",
    },
    {
      id: 5,
      name: "Linguiça Toscana",
      category: "embutidos",
      price: "R$ 24,50",
      stock: "1.5 kg",
      status: "low",
      image: "/placeholder.svg?height=80&width=80",
      description: "Linguiça artesanal temperada",
    },
    {
      id: 6,
      name: "Frango Inteiro",
      category: "aves",
      price: "R$ 18,00",
      stock: "12 unidades",
      status: "ok",
      image: "/placeholder.svg?height=80&width=80",
      description: "Frango caipira fresco",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "ok":
        return <Badge className="bg-green-100 text-green-800">Em Estoque</Badge>
      case "low":
        return <Badge className="bg-orange-100 text-orange-800">Baixo Estoque</Badge>
      case "out":
        return <Badge className="bg-red-100 text-red-800">Esgotado</Badge>
      default:
        return <Badge variant="secondary">Desconhecido</Badge>
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "ok":
        return <CheckCircle className="w-4 h-4 text-green-600" />
      case "low":
        return <AlertTriangle className="w-4 h-4 text-orange-600" />
      case "out":
        return <Package className="w-4 h-4 text-red-600" />
      default:
        return null
    }
  }

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Produtos</h2>
          <p className="text-gray-600">Gerencie o catálogo do seu açougue</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-red-600 hover:bg-red-700">
              <Plus className="w-4 h-4 mr-2" />
              Novo Produto
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Cadastrar Novo Produto</DialogTitle>
              <DialogDescription>Adicione um novo produto ao seu catálogo</DialogDescription>
            </DialogHeader>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Nome do Produto</Label>
                  <Input id="name" placeholder="Ex: Picanha" />
                </div>
                <div>
                  <Label htmlFor="category">Categoria</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione a categoria" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bovino">Bovino</SelectItem>
                      <SelectItem value="suino">Suíno</SelectItem>
                      <SelectItem value="aves">Aves</SelectItem>
                      <SelectItem value="peixes">Peixes</SelectItem>
                      <SelectItem value="embutidos">Embutidos</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="price">Preço (por kg)</Label>
                  <Input id="price" placeholder="R$ 0,00" />
                </div>
                <div>
                  <Label htmlFor="stock">Estoque Inicial</Label>
                  <Input id="stock" placeholder="Ex: 10 kg" />
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="description">Descrição</Label>
                  <Textarea id="description" placeholder="Descreva o produto..." className="h-32" />
                </div>
                <div>
                  <Label htmlFor="image">Imagem do Produto</Label>
                  <Input id="image" type="file" accept="image/*" />
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-3 mt-6">
              <Button variant="outline">Cancelar</Button>
              <Button className="bg-red-600 hover:bg-red-700">Cadastrar Produto</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Buscar produtos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-48">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category.value} value={category.value}>
                {category.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Stock Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-8 h-8 text-green-600" />
              <div>
                <p className="text-2xl font-bold text-gray-900">3</p>
                <p className="text-sm text-gray-600">Em Estoque</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-8 h-8 text-orange-600" />
              <div>
                <p className="text-2xl font-bold text-gray-900">2</p>
                <p className="text-sm text-gray-600">Baixo Estoque</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Package className="w-8 h-8 text-red-600" />
              <div>
                <p className="text-2xl font-bold text-gray-900">1</p>
                <p className="text-sm text-gray-600">Esgotado</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <Card key={product.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-lg text-gray-900">{product.name}</h3>
                    <Button variant="ghost" size="sm">
                      <Edit className="w-4 h-4" />
                    </Button>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Preço:</span>
                      <span className="font-bold text-gray-900">{product.price}/kg</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Estoque:</span>
                      <span className="font-medium text-gray-900">{product.stock}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Status:</span>
                      <div className="flex items-center gap-1">
                        {getStatusIcon(product.status)}
                        {getStatusBadge(product.status)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <Package className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhum produto encontrado</h3>
            <p className="text-gray-600">Tente ajustar os filtros ou adicione novos produtos.</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
