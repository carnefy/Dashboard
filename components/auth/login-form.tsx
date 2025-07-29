"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Eye, EyeOff, Mail, Lock, Phone, MapPin, Building2, Shield, Moon, Sun, AlertCircle } from "lucide-react"
import type { UserType } from "@/app/page"

interface LoginFormProps {
  onLogin: (type: UserType, user: any) => void
}

export function LoginForm({ onLogin }: LoginFormProps) {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  })
  const [registerData, setRegisterData] = useState({
    nomeEstabelecimento: "",
    cnpj: "",
    email: "",
    telefone: "",
    senha: "",
    confirmarSenha: "",
    cep: "",
    endereco: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: "",
    especialidades: [] as string[],
    termos: false,
  })

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle("dark")
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    await new Promise((resolve) => setTimeout(resolve, 1500))

    if (loginData.email === "admin@carnefy.com" && loginData.password === "admin123") {
      onLogin("admin", {
        id: "1",
        name: "Administrador",
        email: "admin@carnefy.com",
        role: "admin",
      })
    } else if (loginData.email === "acougue@demo.com" && loginData.password === "demo123") {
      onLogin("butcher", {
        id: "2",
        name: "João Silva",
        email: "acougue@demo.com",
        role: "butcher",
        butcheryId: "1",
        butcheryName: "Açougue do João",
        cnpj: "12.345.678/0001-90",
      })
    }

    setIsLoading(false)
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    await new Promise((resolve) => setTimeout(resolve, 2000))

    onLogin("butcher", {
      id: "3",
      name: registerData.nomeEstabelecimento,
      email: registerData.email,
      role: "butcher",
      butcheryId: "2",
      butcheryName: registerData.nomeEstabelecimento,
      cnpj: registerData.cnpj,
    })

    setIsLoading(false)
  }

  const buscarCEP = async (cep: string) => {
    if (cep.length === 8) {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const data = await response.json()
        if (!data.erro) {
          setRegisterData((prev) => ({
            ...prev,
            endereco: data.logradouro,
            bairro: data.bairro,
            cidade: data.localidade,
            estado: data.uf,
          }))
        }
      } catch (error) {
        console.error("Erro ao buscar CEP:", error)
      }
    }
  }

  const especialidadesDisponiveis = [
    { id: "bovino", nome: "Carnes Bovinas", icon: "🥩" },
    { id: "suino", nome: "Carnes Suínas", icon: "🐷" },
    { id: "aves", nome: "Aves", icon: "🐔" },
    { id: "embutidos", nome: "Embutidos", icon: "🌭" },
    { id: "defumados", nome: "Defumados", icon: "🥓" },
    { id: "especiais", nome: "Carnes Especiais", icon: "⭐" },
  ]

  const toggleEspecialidade = (especialidade: string) => {
    setRegisterData((prev) => ({
      ...prev,
      especialidades: prev.especialidades.includes(especialidade)
        ? prev.especialidades.filter((e) => e !== especialidade)
        : [...prev.especialidades, especialidade],
    }))
  }

  return (
    <div className={`min-h-screen relative overflow-hidden transition-all duration-500 ${darkMode ? "dark" : ""}`}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900 via-red-800 to-orange-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fillRule=evenodd%3E%3Cg fill=%23ffffff fillOpacity=0.03%3E%3Ccircle cx=30 cy=30 r=2/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      </div>

      {/* Toggle Dark Mode */}
      <Button
        onClick={toggleDarkMode}
        variant="outline"
        size="sm"
        className="absolute top-6 right-6 z-50 bg-white/20 dark:bg-gray-800/80 backdrop-blur-sm border-white/30 dark:border-gray-600 text-white dark:text-gray-200 hover:bg-white/30 dark:hover:bg-gray-700/80"
      >
        {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
      </Button>

      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-5xl">
          {/* Header com Logo */}
          <div className="text-center mb-8">
            <div className="mb-8">
              <Image src="/logo_carnefy.png" alt="Logo" width={150} height={150} className="object-contain mx-auto" />
            </div>
            <p className="text-xl text-red-100 dark:text-gray-300 font-medium">Sistema de Gestão para Açougues</p>
          </div>

          {/* Card Principal */}
          <Card className="backdrop-blur-xl bg-white/10 dark:bg-gray-800/20 border-white/20 dark:border-gray-600/30 shadow-2xl">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl font-bold text-white dark:text-gray-100 mb-2">Acesse sua conta</CardTitle>
              <CardDescription className="text-red-100 dark:text-gray-300">
                Entre com suas credenciais para continuar
              </CardDescription>
            </CardHeader>

            <CardContent className="px-8 pb-8">
              <Tabs defaultValue="login" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8 bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm border-white/20 dark:border-gray-600/30">
                  <TabsTrigger
                    value="login"
                    className="flex items-center gap-2 data-[state=active]:bg-white/20 dark:data-[state=active]:bg-gray-700/40 data-[state=active]:text-white text-red-100 dark:text-gray-300"
                  >
                    <Lock className="w-4 h-4" />
                    Entrar
                  </TabsTrigger>
                  <TabsTrigger
                    value="register"
                    className="flex items-center gap-2 data-[state=active]:bg-white/20 dark:data-[state=active]:bg-gray-700/40 data-[state=active]:text-white text-red-100 dark:text-gray-300"
                  >
                    <Building2 className="w-4 h-4" />
                    Cadastrar
                  </TabsTrigger>
                </TabsList>

                {/* Aba de Login */}
                <TabsContent value="login" className="space-y-6">
                  <form onSubmit={handleLogin} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white dark:text-gray-200 font-medium">
                        Email
                      </Label>
                      <div className="relative">
                        <Input
                          id="email"
                          type="email"
                          placeholder="seu@email.com"
                          value={loginData.email}
                          onChange={(e) => setLoginData((prev) => ({ ...prev, email: e.target.value }))}
                          className="h-12 bg-white/10 dark:bg-gray-800/30 border-white/20 dark:border-gray-600/30 text-white dark:text-gray-100 placeholder:text-red-200 dark:placeholder:text-gray-400 focus:bg-white/20 dark:focus:bg-gray-700/30 focus:border-white/40 dark:focus:border-gray-500/50"
                          required
                        />
                        <Mail className="absolute right-3 top-3 h-5 w-5 text-red-300 dark:text-gray-400" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="password" className="text-white dark:text-gray-200 font-medium">
                        Senha
                      </Label>
                      <div className="relative">
                        <Input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Sua senha"
                          value={loginData.password}
                          onChange={(e) => setLoginData((prev) => ({ ...prev, password: e.target.value }))}
                          className="h-12 bg-white/10 dark:bg-gray-800/30 border-white/20 dark:border-gray-600/30 text-white dark:text-gray-100 placeholder:text-red-200 dark:placeholder:text-gray-400 focus:bg-white/20 dark:focus:bg-gray-700/30 focus:border-white/40 dark:focus:border-gray-500/50 pr-12"
                          required
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent text-red-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="remember"
                          className="border-white/30 dark:border-gray-600/30 data-[state=checked]:bg-red-600 data-[state=checked]:border-red-600"
                        />
                        <Label htmlFor="remember" className="text-red-100 dark:text-gray-300 text-sm">
                          Lembrar de mim
                        </Label>
                      </div>
                      <a
                        href="#"
                        className="text-sm text-red-200 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition-colors"
                      >
                        Esqueceu a senha?
                      </a>
                    </div>

                    <Button
                      type="submit"
                      className="w-full h-12 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <div className="flex items-center gap-3">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Entrando...
                        </div>
                      ) : (
                        "Entrar"
                      )}
                    </Button>
                  </form>

                  <Separator className="my-6 bg-white/20 dark:bg-gray-600/30" />

                  {/* Demo Credentials */}
                  <div className="p-4 bg-white/5 dark:bg-gray-800/20 backdrop-blur-sm rounded-lg border border-white/10 dark:border-gray-600/20">
                    <h4 className="text-white dark:text-gray-200 font-medium mb-3 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-yellow-400" />
                      Contas de demonstração
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                      <div className="bg-white/5 dark:bg-gray-800/30 p-3 rounded border border-white/10 dark:border-gray-600/20">
                        <div className="flex items-center gap-2 mb-1">
                          <Shield className="w-3 h-3 text-blue-400" />
                          <span className="font-medium text-white dark:text-gray-200">Administrador</span>
                        </div>
                        <p className="text-red-200 dark:text-gray-400 text-xs">admin@carnefy.com</p>
                        <p className="text-red-200 dark:text-gray-400 text-xs">admin123</p>
                      </div>
                      <div className="bg-white/5 dark:bg-gray-800/30 p-3 rounded border border-white/10 dark:border-gray-600/20">
                        <div className="flex items-center gap-2 mb-1">
                          <Building2 className="w-3 h-3 text-red-400" />
                          <span className="font-medium text-white dark:text-gray-200">Açougueiro</span>
                        </div>
                        <p className="text-red-200 dark:text-gray-400 text-xs">acougue@demo.com</p>
                        <p className="text-red-200 dark:text-gray-400 text-xs">demo123</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Aba de Cadastro */}
                <TabsContent value="register" className="space-y-6">
                  <form onSubmit={handleRegister} className="space-y-6">
                    {/* Informações do Estabelecimento */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-bold text-white dark:text-gray-200 flex items-center gap-2">
                        <Building2 className="w-5 h-5" />
                        Informações do Estabelecimento
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="nomeEstabelecimento" className="text-white dark:text-gray-200">
                            Nome do Estabelecimento *
                          </Label>
                          <Input
                            id="nomeEstabelecimento"
                            value={registerData.nomeEstabelecimento}
                            onChange={(e) =>
                              setRegisterData((prev) => ({ ...prev, nomeEstabelecimento: e.target.value }))
                            }
                            placeholder="Açougue do João"
                            className="h-10 bg-white/10 dark:bg-gray-800/30 border-white/20 dark:border-gray-600/30 text-white dark:text-gray-100 placeholder:text-red-200 dark:placeholder:text-gray-400"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="cnpj" className="text-white dark:text-gray-200">
                            CNPJ *
                          </Label>
                          <Input
                            id="cnpj"
                            value={registerData.cnpj}
                            onChange={(e) => setRegisterData((prev) => ({ ...prev, cnpj: e.target.value }))}
                            placeholder="00.000.000/0001-00"
                            className="h-10 bg-white/10 dark:bg-gray-800/30 border-white/20 dark:border-gray-600/30 text-white dark:text-gray-100 placeholder:text-red-200 dark:placeholder:text-gray-400"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="telefoneComercial" className="text-white dark:text-gray-200">
                            Telefone *
                          </Label>
                          <div className="relative">
                            <Input
                              id="telefoneComercial"
                              value={registerData.telefone}
                              onChange={(e) => setRegisterData((prev) => ({ ...prev, telefone: e.target.value }))}
                              placeholder="(11) 99999-9999"
                              className="h-10 bg-white/10 dark:bg-gray-800/30 border-white/20 dark:border-gray-600/30 text-white dark:text-gray-100 placeholder:text-red-200 dark:placeholder:text-gray-400 pl-10"
                              required
                            />
                            <Phone className="absolute left-3 top-2.5 h-4 w-4 text-red-300 dark:text-gray-400" />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="emailComercial" className="text-white dark:text-gray-200">
                            Email *
                          </Label>
                          <div className="relative">
                            <Input
                              id="emailComercial"
                              type="email"
                              value={registerData.email}
                              onChange={(e) => setRegisterData((prev) => ({ ...prev, email: e.target.value }))}
                              placeholder="contato@acougue.com"
                              className="h-10 bg-white/10 dark:bg-gray-800/30 border-white/20 dark:border-gray-600/30 text-white dark:text-gray-100 placeholder:text-red-200 dark:placeholder:text-gray-400 pl-10"
                              required
                            />
                            <Mail className="absolute left-3 top-2.5 h-4 w-4 text-red-300 dark:text-gray-400" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Endereço */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-bold text-white dark:text-gray-200 flex items-center gap-2">
                        <MapPin className="w-5 h-5" />
                        Endereço
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="cep" className="text-white dark:text-gray-200">
                            CEP *
                          </Label>
                          <Input
                            id="cep"
                            value={registerData.cep}
                            onChange={(e) => {
                              const cep = e.target.value.replace(/\D/g, "")
                              setRegisterData((prev) => ({ ...prev, cep }))
                              if (cep.length === 8) {
                                buscarCEP(cep)
                              }
                            }}
                            placeholder="00000-000"
                            maxLength={8}
                            className="h-10 bg-white/10 dark:bg-gray-800/30 border-white/20 dark:border-gray-600/30 text-white dark:text-gray-100 placeholder:text-red-200 dark:placeholder:text-gray-400"
                            required
                          />
                        </div>

                        <div className="space-y-2 md:col-span-2">
                          <Label htmlFor="logradouro" className="text-white dark:text-gray-200">
                            Logradouro *
                          </Label>
                          <Input
                            id="logradouro"
                            value={registerData.endereco}
                            onChange={(e) => setRegisterData((prev) => ({ ...prev, endereco: e.target.value }))}
                            placeholder="Rua das Flores"
                            className="h-10 bg-white/10 dark:bg-gray-800/30 border-white/20 dark:border-gray-600/30 text-white dark:text-gray-100 placeholder:text-red-200 dark:placeholder:text-gray-400"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="numero" className="text-white dark:text-gray-200">
                            Número *
                          </Label>
                          <Input
                            id="numero"
                            value={registerData.numero}
                            onChange={(e) => setRegisterData((prev) => ({ ...prev, numero: e.target.value }))}
                            placeholder="123"
                            className="h-10 bg-white/10 dark:bg-gray-800/30 border-white/20 dark:border-gray-600/30 text-white dark:text-gray-100 placeholder:text-red-200 dark:placeholder:text-gray-400"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="bairro" className="text-white dark:text-gray-200">
                            Bairro *
                          </Label>
                          <Input
                            id="bairro"
                            value={registerData.bairro}
                            onChange={(e) => setRegisterData((prev) => ({ ...prev, bairro: e.target.value }))}
                            placeholder="Centro"
                            className="h-10 bg-white/10 dark:bg-gray-800/30 border-white/20 dark:border-gray-600/30 text-white dark:text-gray-100 placeholder:text-red-200 dark:placeholder:text-gray-400"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="cidade" className="text-white dark:text-gray-200">
                            Cidade *
                          </Label>
                          <Input
                            id="cidade"
                            value={registerData.cidade}
                            onChange={(e) => setRegisterData((prev) => ({ ...prev, cidade: e.target.value }))}
                            placeholder="São Paulo"
                            className="h-10 bg-white/10 dark:bg-gray-800/30 border-white/20 dark:border-gray-600/30 text-white dark:text-gray-100 placeholder:text-red-200 dark:placeholder:text-gray-400"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Especialidades */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-bold text-white dark:text-gray-200">Especialidades</h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {especialidadesDisponiveis.map((especialidade) => (
                          <div
                            key={especialidade.id}
                            className={`p-3 rounded-lg border cursor-pointer transition-all ${
                              registerData.especialidades.includes(especialidade.nome)
                                ? "bg-red-600/30 border-red-400 shadow-lg"
                                : "bg-white/5 border-white/20 hover:bg-white/10"
                            }`}
                            onClick={() => toggleEspecialidade(especialidade.nome)}
                          >
                            <div className="flex items-center space-x-2">
                              <span className="text-lg">{especialidade.icon}</span>
                              <Label className="text-white dark:text-gray-200 text-sm cursor-pointer">
                                {especialidade.nome}
                              </Label>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Senhas */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-bold text-white dark:text-gray-200 flex items-center gap-2">
                        <Lock className="w-5 h-5" />
                        Senha de Acesso
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="senha" className="text-white dark:text-gray-200">
                            Senha *
                          </Label>
                          <Input
                            id="senha"
                            type="password"
                            value={registerData.senha}
                            onChange={(e) => setRegisterData((prev) => ({ ...prev, senha: e.target.value }))}
                            placeholder="Mínimo 8 caracteres"
                            minLength={8}
                            className="h-10 bg-white/10 dark:bg-gray-800/30 border-white/20 dark:border-gray-600/30 text-white dark:text-gray-100 placeholder:text-red-200 dark:placeholder:text-gray-400"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="confirmarSenha" className="text-white dark:text-gray-200">
                            Confirmar Senha *
                          </Label>
                          <Input
                            id="confirmarSenha"
                            type="password"
                            value={registerData.confirmarSenha}
                            onChange={(e) => setRegisterData((prev) => ({ ...prev, confirmarSenha: e.target.value }))}
                            placeholder="Repita a senha"
                            minLength={8}
                            className="h-10 bg-white/10 dark:bg-gray-800/30 border-white/20 dark:border-gray-600/30 text-white dark:text-gray-100 placeholder:text-red-200 dark:placeholder:text-gray-400"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Termos */}
                    <div className="p-4 bg-white/5 dark:bg-gray-800/20 rounded-lg border border-white/10 dark:border-gray-600/20">
                      <div className="flex items-start space-x-3">
                        <Checkbox
                          id="aceitaTermos"
                          checked={registerData.termos}
                          onCheckedChange={(checked) =>
                            setRegisterData((prev) => ({ ...prev, termos: checked as boolean }))
                          }
                          className="border-white/30 dark:border-gray-600/30 data-[state=checked]:bg-red-600 data-[state=checked]:border-red-600 mt-1"
                          required
                        />
                        <Label htmlFor="aceitaTermos" className="text-red-100 dark:text-gray-300 text-sm">
                          Aceito os termos de uso e política de privacidade *
                        </Label>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full h-12 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <div className="flex items-center gap-3">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Cadastrando...
                        </div>
                      ) : (
                        "Cadastrar Açougue"
                      )}
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
