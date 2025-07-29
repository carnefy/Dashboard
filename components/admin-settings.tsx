"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Settings, DollarSign, Bell, Shield, Truck, Clock, Save } from "lucide-react"

export function AdminSettings() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Configurações da Plataforma</h2>
        <p className="text-gray-600">Gerencie as configurações gerais do Carnefy</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Platform Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="w-5 h-5" />
              Configurações Gerais
            </CardTitle>
            <CardDescription>Configurações básicas da plataforma</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="platformName">Nome da Plataforma</Label>
              <Input id="platformName" defaultValue="Carnefy" />
            </div>
            <div>
              <Label htmlFor="supportEmail">Email de Suporte</Label>
              <Input id="supportEmail" defaultValue="suporte@carnefy.com.br" />
            </div>
            <div>
              <Label htmlFor="supportPhone">Telefone de Suporte</Label>
              <Input id="supportPhone" defaultValue="(11) 99999-0000" />
            </div>
            <div>
              <Label htmlFor="maintenanceMode">Modo de Manutenção</Label>
              <div className="flex items-center space-x-2 mt-2">
                <Switch id="maintenanceMode" />
                <Label htmlFor="maintenanceMode" className="text-sm text-gray-600">
                  Ativar modo de manutenção
                </Label>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Financial Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="w-5 h-5" />
              Configurações Financeiras
            </CardTitle>
            <CardDescription>Taxas e comissões da plataforma</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="defaultCommission">Comissão Padrão (%)</Label>
              <Input id="defaultCommission" type="number" defaultValue="8" />
            </div>
            <div>
              <Label htmlFor="minCommission">Comissão Mínima (%)</Label>
              <Input id="minCommission" type="number" defaultValue="5" />
            </div>
            <div>
              <Label htmlFor="maxCommission">Comissão Máxima (%)</Label>
              <Input id="maxCommission" type="number" defaultValue="15" />
            </div>
            <div>
              <Label htmlFor="paymentFrequency">Frequência de Repasse</Label>
              <Select defaultValue="weekly">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="daily">Diário</SelectItem>
                  <SelectItem value="weekly">Semanal</SelectItem>
                  <SelectItem value="biweekly">Quinzenal</SelectItem>
                  <SelectItem value="monthly">Mensal</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Delivery Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Truck className="w-5 h-5" />
              Configurações de Delivery
            </CardTitle>
            <CardDescription>Parâmetros de entrega da plataforma</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="maxDeliveryRadius">Raio Máximo de Entrega (km)</Label>
              <Input id="maxDeliveryRadius" type="number" defaultValue="15" />
            </div>
            <div>
              <Label htmlFor="minDeliveryFee">Taxa Mínima de Entrega</Label>
              <Input id="minDeliveryFee" defaultValue="R$ 5,00" />
            </div>
            <div>
              <Label htmlFor="maxDeliveryFee">Taxa Máxima de Entrega</Label>
              <Input id="maxDeliveryFee" defaultValue="R$ 15,00" />
            </div>
            <div>
              <Label htmlFor="freeDeliveryMin">Pedido Mínimo para Frete Grátis</Label>
              <Input id="freeDeliveryMin" defaultValue="R$ 80,00" />
            </div>
          </CardContent>
        </Card>

        {/* Time Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Configurações de Tempo
            </CardTitle>
            <CardDescription>Tempos padrão de operação</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="defaultPrepTime">Tempo Padrão de Preparo (min)</Label>
              <Input id="defaultPrepTime" type="number" defaultValue="30" />
            </div>
            <div>
              <Label htmlFor="maxPrepTime">Tempo Máximo de Preparo (min)</Label>
              <Input id="maxPrepTime" type="number" defaultValue="60" />
            </div>
            <div>
              <Label htmlFor="deliveryTime">Tempo Médio de Entrega (min)</Label>
              <Input id="deliveryTime" type="number" defaultValue="45" />
            </div>
            <div>
              <Label htmlFor="operatingHours">Horário de Funcionamento</Label>
              <div className="grid grid-cols-2 gap-2">
                <Input placeholder="08:00" />
                <Input placeholder="22:00" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Notification Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="w-5 h-5" />
              Configurações de Notificação
            </CardTitle>
            <CardDescription>Gerenciar notificações da plataforma</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label>Notificações de Novos Pedidos</Label>
                <p className="text-sm text-gray-600">Notificar açougues sobre novos pedidos</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label>Alertas de Estoque Baixo</Label>
                <p className="text-sm text-gray-600">Alertar quando produtos estão em falta</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label>Relatórios Automáticos</Label>
                <p className="text-sm text-gray-600">Enviar relatórios semanais por email</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label>Notificações Push</Label>
                <p className="text-sm text-gray-600">Enviar notificações push para mobile</p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>

        {/* Security Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Configurações de Segurança
            </CardTitle>
            <CardDescription>Configurações de segurança e acesso</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="sessionTimeout">Timeout de Sessão (min)</Label>
              <Input id="sessionTimeout" type="number" defaultValue="60" />
            </div>
            <div>
              <Label htmlFor="maxLoginAttempts">Máximo de Tentativas de Login</Label>
              <Input id="maxLoginAttempts" type="number" defaultValue="5" />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label>Autenticação de Dois Fatores</Label>
                <p className="text-sm text-gray-600">Exigir 2FA para administradores</p>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label>Log de Atividades</Label>
                <p className="text-sm text-gray-600">Registrar todas as ações dos usuários</p>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Terms and Policies */}
      <Card>
        <CardHeader>
          <CardTitle>Termos e Políticas</CardTitle>
          <CardDescription>Gerencie os termos de uso e políticas da plataforma</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="termsOfUse">Termos de Uso</Label>
            <Textarea id="termsOfUse" className="h-32" defaultValue="Termos de uso da plataforma Carnefy..." />
          </div>
          <div>
            <Label htmlFor="privacyPolicy">Política de Privacidade</Label>
            <Textarea
              id="privacyPolicy"
              className="h-32"
              defaultValue="Política de privacidade da plataforma Carnefy..."
            />
          </div>
        </CardContent>
      </Card>

      {/* Save Button */}
      <div className="flex justify-end">
        <Button className="bg-red-600 hover:bg-red-700">
          <Save className="w-4 h-4 mr-2" />
          Salvar Configurações
        </Button>
      </div>
    </div>
  )
}
