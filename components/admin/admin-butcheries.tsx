"use client"

import { DropdownMenuItem } from "@/components/ui/dropdown-menu"

import { DropdownMenuContent } from "@/components/ui/dropdown-menu"

import { DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

import { DropdownMenu } from "@/components/ui/dropdown-menu"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
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
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import {
  Search,
  Plus,
  Eye,
  Edit,
  MapPin,
  Phone,
  CheckCircle,
  XCircle,
  Clock,
  AlertTriangle,
  Upload,
  Building2,
  MoreHorizontal,
} from "lucide-react"

// Dados mockados conforme especificação LGPD
const mockAcougues = [
  {
    id: 1,
    nome: "Açougue Bom Corte",
    cnpj: "12.345.678/0001-90",
    status: "Ativo",
    vendasMes: "R$ 45.600,00",
    comissao: "R$ 2.280,00",
    cidade: "São Paulo/SP",
    responsavel: "João Silva",
    telefone: "(11) 99999-8888",
    email: "contato@bomcorte.com.br",
    endereco: "Rua das Flores, 123 - Vila Exemplo",
    dataAdesao: "15/03/2023",
  },
  {
    id: 2,
    nome: "Carnes Premium",
    cnpj: "98.765.432/0001-10",
    status: "Ativo",
    vendasMes: "R$ 32.100,00",
    comissao: "R$ 1.605,00",
    cidade: "Rio de Janeiro/RJ",
    responsavel: "Maria Santos",
    telefone: "(21) 88888-7777",
    email: "contato@carnespremium.com.br",
    endereco: "Av. Copacabana, 456 - Copacabana",
    dataAdesao: "22/01/2023",
  },
  {
    id: 3,
    nome: "Açougue Central",
    cnpj: "11.222.333/0001-44",
    status: "Inativo",
    vendasMes: "R$ 0,00",
    comissao: "R$ 0,00",
    cidade: "Belo Horizonte/MG",
    responsavel: "Pedro Costa",
    telefone: "(31) 77777-6666",
    email: "contato@acouguecentral.com.br",
    endereco: "Rua Central, 789 - Centro",
    dataAdesao: "10/05/2023",
  },
]

const butcheries = [
  {
    id: "1",
    name: "Açougue do João",
    owner: "João Silva",
    cnpj: "12.345.678/0001-90",
    address: "Rua das Flores, 123 - Centro",
    phone: "(11) 99999-1111",
    revenue: "R$ 8.450,00",
    status: "Ativo",
    joinDate: "2023-06-15",
  },
  {
    id: "2",
    name: "Carnes Premium",
    owner: "Maria Santos",
    cnpj: "98.765.432/0001-10",
    address: "Av. Principal, 456 - Vila Nova",
    phone: "(11) 99999-2222",
    revenue: "R$ 7.230,00",
    status: "Ativo",
    joinDate: "2023-08-22",
  },
  {
    id: "3",
    name: "Açougue Central",
    owner: "Carlos Lima",
    cnpj: "11.222.333/0001-44",
    address: "Rua Central, 789 - Centro",
    phone: "(11) 99999-3333",
    revenue: "R$ 6.890,00",
    status: "Pendente",
    joinDate: "2024-01-10",
  },
]

export function AdminButcheries() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [selectedButchery, setSelectedButchery] = useState<any>(null)
  const [isNewButcheryOpen, setIsNewButcheryOpen] = useState(false)
  const [formStep, setFormStep] = useState(1)
  const [formData, setFormData] = useState({
    // Informações Básicas
    nomeEstabelecimento: "",
    cnpj: "",
    inscricaoEstadual: "",
    telefoneComercial: "",
    emailComercial: "",
    // Endereço
    cep: "",
    logradouro: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    estado: "",
    pontoReferencia: "",
    // Dados Operacionais
    raioEntregaKm: "",
    taxaEntrega: "",
    tempoMedioPreparo: "",
    especialidades: [] as string[],
    // Responsável Legal
    nomeResponsavel: "",
    cpfResponsavel: "",
    telefoneResponsavel: "",
    emailResponsavel: "",
    cargoResponsavel: "",
    // Dados Bancários
    banco: "",
    agencia: "",
    conta: "",
    tipoConta: "",
    chavePix: "",
    // Configurações
    statusInicial: "Pendente Aprovação",
    formasPagamento: [] as string[],
    aceitaTermos: false,
  })

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Ativo":
        return <Badge className="bg-green-100 text-green-800 border-green-200">Ativo</Badge>
      case "Inativo":
        return <Badge className="bg-red-100 text-red-800 border-red-200">Inativo</Badge>
      case "Pendente":
        return <Badge className="bg-orange-100 text-orange-800 border-orange-200">Pendente</Badge>
      default:
        return <Badge variant="secondary">Desconhecido</Badge>
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Ativo":
        return <CheckCircle className="w-4 h-4 text-green-600" />
      case "Inativo":
        return <XCircle className="w-4 h-4 text-red-600" />
      case "Pendente":
        return <Clock className="w-4 h-4 text-orange-600" />
      default:
        return <AlertTriangle className="w-4 h-4 text-gray-600" />
    }
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

  const filteredButcheries = butcheries.filter(
    (butchery) =>
      butchery.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      butchery.owner.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formStep < 7) {
      setFormStep(formStep + 1)
    } else {
      // Processar cadastro
      console.log("Cadastro completo:", formData)
      setIsNewButcheryOpen(false)
      setFormStep(1)
    }
  }

  const renderFormStep = () => {
    switch (formStep) {
      case 1:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Informações Básicas do Estabelecimento</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="nomeEstabelecimento">Nome do Estabelecimento *</Label>
                <Input
                  id="nomeEstabelecimento"
                  placeholder="Ex: Açougue Bom Corte"
                  value={formData.nomeEstabelecimento}
                  onChange={(e) => setFormData({ ...formData, nomeEstabelecimento: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="cnpj">CNPJ *</Label>
                <Input
                  id="cnpj"
                  placeholder="00.000.000/0000-00"
                  value={formData.cnpj}
                  onChange={(e) => setFormData({ ...formData, cnpj: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="inscricaoEstadual">Inscrição Estadual</Label>
                <Input
                  id="inscricaoEstadual"
                  placeholder="000.000.000.000"
                  value={formData.inscricaoEstadual}
                  onChange={(e) => setFormData({ ...formData, inscricaoEstadual: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="telefoneComercial">Telefone Comercial *</Label>
                <Input
                  id="telefoneComercial"
                  placeholder="(11) 99999-9999"
                  value={formData.telefoneComercial}
                  onChange={(e) => setFormData({ ...formData, telefoneComercial: e.target.value })}
                  required
                />
              </div>
              <div className="col-span-2">
                <Label htmlFor="emailComercial">Email Comercial *</Label>
                <Input
                  id="emailComercial"
                  type="email"
                  placeholder="contato@acougue.com.br"
                  value={formData.emailComercial}
                  onChange={(e) => setFormData({ ...formData, emailComercial: e.target.value })}
                  required
                />
              </div>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Endereço e Localização</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="cep">CEP *</Label>
                <Input
                  id="cep"
                  placeholder="00000-000"
                  value={formData.cep}
                  onChange={(e) => setFormData({ ...formData, cep: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="logradouro">Logradouro *</Label>
                <Input
                  id="logradouro"
                  placeholder="Nome da rua"
                  value={formData.logradouro}
                  onChange={(e) => setFormData({ ...formData, logradouro: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="numero">Número *</Label>
                <Input
                  id="numero"
                  placeholder="123"
                  value={formData.numero}
                  onChange={(e) => setFormData({ ...formData, numero: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="complemento">Complemento</Label>
                <Input
                  id="complemento"
                  placeholder="Sala, andar, etc."
                  value={formData.complemento}
                  onChange={(e) => setFormData({ ...formData, complemento: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="bairro">Bairro *</Label>
                <Input
                  id="bairro"
                  placeholder="Nome do bairro"
                  value={formData.bairro}
                  onChange={(e) => setFormData({ ...formData, bairro: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="cidade">Cidade *</Label>
                <Input
                  id="cidade"
                  placeholder="São Paulo"
                  value={formData.cidade}
                  onChange={(e) => setFormData({ ...formData, cidade: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="estado">Estado *</Label>
                <Select value={formData.estado} onValueChange={(value) => setFormData({ ...formData, estado: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o estado" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="SP">São Paulo</SelectItem>
                    <SelectItem value="RJ">Rio de Janeiro</SelectItem>
                    <SelectItem value="MG">Minas Gerais</SelectItem>
                    <SelectItem value="RS">Rio Grande do Sul</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="pontoReferencia">Ponto de Referência</Label>
                <Input
                  id="pontoReferencia"
                  placeholder="Próximo ao shopping"
                  value={formData.pontoReferencia}
                  onChange={(e) => setFormData({ ...formData, pontoReferencia: e.target.value })}
                />
              </div>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Dados Operacionais</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="raioEntregaKm">Raio de Entrega (km) *</Label>
                <Input
                  id="raioEntregaKm"
                  type="number"
                  placeholder="10"
                  value={formData.raioEntregaKm}
                  onChange={(e) => setFormData({ ...formData, raioEntregaKm: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="taxaEntrega">Taxa de Entrega *</Label>
                <Input
                  id="taxaEntrega"
                  placeholder="R$ 5,00"
                  value={formData.taxaEntrega}
                  onChange={(e) => setFormData({ ...formData, taxaEntrega: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="tempoMedioPreparo">Tempo Médio de Preparo (min) *</Label>
                <Input
                  id="tempoMedioPreparo"
                  type="number"
                  placeholder="30"
                  value={formData.tempoMedioPreparo}
                  onChange={(e) => setFormData({ ...formData, tempoMedioPreparo: e.target.value })}
                  required
                />
              </div>
            </div>
            <div>
              <Label>Especialidades *</Label>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {["Carnes Bovinas", "Suína", "Aves", "Embutidos", "Defumados"].map((especialidade) => (
                  <div key={especialidade} className="flex items-center space-x-2">
                    <Checkbox
                      id={especialidade}
                      checked={formData.especialidades.includes(especialidade)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setFormData({
                            ...formData,
                            especialidades: [...formData.especialidades, especialidade],
                          })
                        } else {
                          setFormData({
                            ...formData,
                            especialidades: formData.especialidades.filter((e) => e !== especialidade),
                          })
                        }
                      }}
                    />
                    <Label htmlFor={especialidade} className="text-sm">
                      {especialidade}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Documentação</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="alvaraFuncionamento">Alvará de Funcionamento *</Label>
                <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-red-400 transition-colors">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Clique para fazer upload</p>
                  <p className="text-xs text-gray-500">PDF, JPG, PNG (máx. 5MB)</p>
                </div>
              </div>
              <div>
                <Label htmlFor="licencaSanitaria">Licença Sanitária *</Label>
                <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-red-400 transition-colors">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Clique para fazer upload</p>
                  <p className="text-xs text-gray-500">PDF, JPG, PNG (máx. 5MB)</p>
                </div>
              </div>
              <div>
                <Label htmlFor="fotoFachada">Foto da Fachada *</Label>
                <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-red-400 transition-colors">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Clique para fazer upload</p>
                  <p className="text-xs text-gray-500">JPG, PNG (máx. 3MB)</p>
                </div>
              </div>
              <div>
                <Label htmlFor="logoEstabelecimento">Logo do Estabelecimento</Label>
                <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-red-400 transition-colors">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Clique para fazer upload</p>
                  <p className="text-xs text-gray-500">JPG, PNG, SVG (máx. 2MB)</p>
                </div>
              </div>
            </div>
          </div>
        )

      case 5:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Responsável Legal</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="nomeResponsavel">Nome Completo *</Label>
                <Input
                  id="nomeResponsavel"
                  placeholder="Nome completo do responsável"
                  value={formData.nomeResponsavel}
                  onChange={(e) => setFormData({ ...formData, nomeResponsavel: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="cpfResponsavel">CPF *</Label>
                <Input
                  id="cpfResponsavel"
                  placeholder="000.000.000-00"
                  value={formData.cpfResponsavel}
                  onChange={(e) => setFormData({ ...formData, cpfResponsavel: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="telefoneResponsavel">Telefone de Contato *</Label>
                <Input
                  id="telefoneResponsavel"
                  placeholder="(11) 99999-9999"
                  value={formData.telefoneResponsavel}
                  onChange={(e) => setFormData({ ...formData, telefoneResponsavel: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="emailResponsavel">Email Pessoal *</Label>
                <Input
                  id="emailResponsavel"
                  type="email"
                  placeholder="responsavel@email.com"
                  value={formData.emailResponsavel}
                  onChange={(e) => setFormData({ ...formData, emailResponsavel: e.target.value })}
                  required
                />
              </div>
              <div className="col-span-2">
                <Label htmlFor="cargoResponsavel">Cargo *</Label>
                <Select
                  value={formData.cargoResponsavel}
                  onValueChange={(value) => setFormData({ ...formData, cargoResponsavel: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o cargo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Proprietário">Proprietário</SelectItem>
                    <SelectItem value="Sócio">Sócio</SelectItem>
                    <SelectItem value="Gerente">Gerente</SelectItem>
                    <SelectItem value="Outro">Outro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        )

      case 6:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Dados Bancários</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="banco">Banco *</Label>
                <Select value={formData.banco} onValueChange={(value) => setFormData({ ...formData, banco: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o banco" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="001">Banco do Brasil</SelectItem>
                    <SelectItem value="237">Bradesco</SelectItem>
                    <SelectItem value="341">Itaú</SelectItem>
                    <SelectItem value="033">Santander</SelectItem>
                    <SelectItem value="104">Caixa Econômica</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="agencia">Agência *</Label>
                <Input
                  id="agencia"
                  placeholder="0000"
                  value={formData.agencia}
                  onChange={(e) => setFormData({ ...formData, agencia: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="conta">Conta *</Label>
                <Input
                  id="conta"
                  placeholder="00000-0"
                  value={formData.conta}
                  onChange={(e) => setFormData({ ...formData, conta: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="tipoConta">Tipo de Conta *</Label>
                <Select
                  value={formData.tipoConta}
                  onValueChange={(value) => setFormData({ ...formData, tipoConta: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="corrente">Conta Corrente</SelectItem>
                    <SelectItem value="poupanca">Poupança</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="col-span-2">
                <Label htmlFor="chavePix">Chave PIX</Label>
                <Input
                  id="chavePix"
                  placeholder="CPF, CNPJ, Email ou Telefone"
                  value={formData.chavePix}
                  onChange={(e) => setFormData({ ...formData, chavePix: e.target.value })}
                />
              </div>
            </div>
          </div>
        )

      case 7:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900">Configurações Comerciais e Termos</h3>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <Label>Comissão da Plataforma</Label>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-2xl font-bold text-gray-900">5%</span>
                  <Badge className="bg-blue-100 text-blue-800">Padrão</Badge>
                </div>
                <p className="text-sm text-gray-600 mt-1">Comissão padrão aplicada sobre todas as vendas</p>
              </div>

              <div>
                <Label>Formas de Pagamento Aceitas *</Label>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  {["Dinheiro", "PIX", "Cartão Débito", "Cartão Crédito"].map((forma) => (
                    <div key={forma} className="flex items-center space-x-2">
                      <Checkbox
                        id={forma}
                        checked={formData.formasPagamento.includes(forma)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setFormData({
                              ...formData,
                              formasPagamento: [...formData.formasPagamento, forma],
                            })
                          } else {
                            setFormData({
                              ...formData,
                              formasPagamento: formData.formasPagamento.filter((f) => f !== forma),
                            })
                          }
                        }}
                      />
                      <Label htmlFor={forma} className="text-sm">
                        {forma}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Label htmlFor="statusInicial">Status Inicial</Label>
                <Select
                  value={formData.statusInicial}
                  onValueChange={(value) => setFormData({ ...formData, statusInicial: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Ativo">Ativo</SelectItem>
                    <SelectItem value="Pendente Aprovação">Pendente Aprovação</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="border-t pt-4">
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">Conformidade com LGPD</h4>
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h5 className="font-medium text-blue-900 mb-2">Finalidade dos Dados</h5>
                    <p className="text-sm text-blue-800">
                      Os dados coletados serão utilizados para: operação da plataforma, processamento de pedidos,
                      repasses financeiros e comunicação comercial.
                    </p>
                  </div>
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <h5 className="font-medium text-green-900 mb-2">Seus Direitos</h5>
                    <p className="text-sm text-green-800">
                      Você pode acessar, corrigir ou excluir seus dados através do email: privacidade@carnefy.com.br
                    </p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="aceitaTermos"
                      checked={formData.aceitaTermos}
                      onCheckedChange={(checked) => setFormData({ ...formData, aceitaTermos: checked as boolean })}
                      required
                    />
                    <Label htmlFor="aceitaTermos" className="text-sm leading-relaxed">
                      Ao cadastrar este estabelecimento, declaro que:
                      <br />• Li e aceito os Termos de Uso da plataforma Carnefy
                      <br />• Autorizo o tratamento dos dados fornecidos conforme Política de Privacidade
                      <br />• Os dados pessoais serão utilizados exclusivamente para operação da plataforma
                      <br />• Posso solicitar alteração/exclusão dos dados a qualquer momento
                      <br />• Todos os documentos enviados são verídicos
                    </Label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Gestão de Açougues</h2>
          <p className="text-gray-600">Gerencie todos os açougues da plataforma</p>
        </div>
        <Dialog open={isNewButcheryOpen} onOpenChange={setIsNewButcheryOpen}>
          <DialogTrigger asChild>
            <Button className="bg-red-600 hover:bg-red-700 text-white shadow-lg">
              <Plus className="w-4 h-4 mr-2" />
              Novo Açougue
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <Building2 className="w-5 h-5" />
                Cadastrar Novo Açougue
              </DialogTitle>
              <DialogDescription>
                Preencha as informações completas do estabelecimento (Etapa {formStep} de 7)
              </DialogDescription>
            </DialogHeader>

            <div className="mb-6">
              <Progress value={(formStep / 7) * 100} className="h-2" />
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>Básicas</span>
                <span>Endereço</span>
                <span>Operacional</span>
                <span>Documentos</span>
                <span>Responsável</span>
                <span>Bancário</span>
                <span>Termos</span>
              </div>
            </div>

            <form onSubmit={handleFormSubmit}>
              {renderFormStep()}

              <div className="flex justify-between mt-8 pt-6 border-t">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setFormStep(Math.max(1, formStep - 1))}
                  disabled={formStep === 1}
                >
                  Anterior
                </Button>
                <div className="flex gap-2">
                  <Button type="button" variant="outline">
                    Salvar Rascunho
                  </Button>
                  <Button
                    type="submit"
                    className="bg-red-600 hover:bg-red-700"
                    disabled={formStep === 7 && !formData.aceitaTermos}
                  >
                    {formStep === 7 ? "Finalizar Cadastro" : "Próximo"}
                  </Button>
                </div>
              </div>
            </form>
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
            <SelectItem value="Ativo">Ativos</SelectItem>
            <SelectItem value="Inativo">Inativos</SelectItem>
            <SelectItem value="Pendente">Pendentes</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="shadow-md border-0">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-8 h-8 text-green-600" />
              <div>
                <p className="text-2xl font-bold text-gray-900">12</p>
                <p className="text-sm text-gray-600">Ativos</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-md border-0">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Clock className="w-8 h-8 text-orange-600" />
              <div>
                <p className="text-2xl font-bold text-gray-900">2</p>
                <p className="text-sm text-gray-600">Pendentes</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-md border-0">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <XCircle className="w-8 h-8 text-red-600" />
              <div>
                <p className="text-2xl font-bold text-gray-900">1</p>
                <p className="text-sm text-gray-600">Inativos</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-md border-0">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Building2 className="w-8 h-8 text-blue-600" />
              <div>
                <p className="text-2xl font-bold text-gray-900">15</p>
                <p className="text-sm text-gray-600">Total</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Butcheries Table */}
      <Card className="shadow-md border-0">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Lista de Açougues</CardTitle>
              <CardDescription>Todos os açougues cadastrados na plataforma</CardDescription>
            </div>
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Buscar açougues..."
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
                <TableHead>Açougue</TableHead>
                <TableHead>Proprietário</TableHead>
                <TableHead>Localização</TableHead>
                <TableHead>Receita Mensal</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Data de Cadastro</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredButcheries.map((butchery) => (
                <TableRow key={butchery.id}>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-red-100 dark:bg-red-900/20 rounded-lg flex items-center justify-center">
                        <Building2 className="w-5 h-5 text-red-600 dark:text-red-400" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{butchery.name}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{butchery.cnpj}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">{butchery.owner}</p>
                      <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                        <Phone className="w-3 h-3" />
                        {butchery.phone}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1 text-sm">
                      <MapPin className="w-3 h-3 text-gray-400" />
                      {butchery.address}
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">{butchery.revenue}</TableCell>
                  <TableCell>
                    <Badge variant={getStatusVariant(butchery.status)}>{butchery.status}</Badge>
                  </TableCell>
                  <TableCell>{butchery.joinDate}</TableCell>
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
                          <Edit className="mr-2 h-4 w-4" />
                          Editar
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
