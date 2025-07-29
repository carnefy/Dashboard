"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Settings, Shield, Bell, Database } from "lucide-react"

export function AdminSettings() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Configurações</h1>
        <p className="text-gray-600 dark:text-gray-400">Gerencie as configurações da plataforma</p>
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
            <div className="space-y-2">
              <Label htmlFor="platform-name">Nome da Plataforma</Label>
              <Input id="platform-name" defaultValue="Sistema de Gestão para Açougues" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="support-email">Email de Suporte</Label>
              <Input id="support-email" type="email" defaultValue="suporte@carnefy.com" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="timezone">Fuso Horário</Label>
              <Select defaultValue="america-sao_paulo">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="america-sao_paulo">América/São Paulo</SelectItem>
                  <SelectItem value="america-new_york">América/Nova York</SelectItem>
                  <SelectItem value="europe-london">Europa/Londres</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button className="w-full">Salvar Configurações</Button>
          </CardContent>
        </Card>

        {/* Security Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Segurança
            </CardTitle>
            <CardDescription>Configurações de segurança e acesso</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Autenticação de Dois Fatores</Label>
                <p className="text-sm text-gray-500 dark:text-gray-400">Exigir 2FA para administradores</p>
              </div>
              <Switch defaultChecked />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Sessões Múltiplas</Label>
                <p className="text-sm text-gray-500 dark:text-gray-400">Permitir múltiplas sessões por usuário</p>
              </div>
              <Switch />
            </div>

            <Separator />

            <div className="space-y-2">
              <Label htmlFor="session-timeout">Timeout de Sessão (minutos)</Label>
              <Input id="session-timeout" type="number" defaultValue="30" />
            </div>

            <Button className="w-full">Salvar Configurações</Button>
          </CardContent>
        </Card>

        {/* Notification Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="w-5 h-5" />
              Notificações
            </CardTitle>
            <CardDescription>Configure as notificações do sistema</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Notificações por Email</Label>
                <p className="text-sm text-gray-500 dark:text-gray-400">Enviar alertas importantes por email</p>
              </div>
              <Switch defaultChecked />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Relatórios Automáticos</Label>
                <p className="text-sm text-gray-500 dark:text-gray-400">Enviar relatórios semanais automaticamente</p>
              </div>
              <Switch defaultChecked />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Alertas de Sistema</Label>
                <p className="text-sm text-gray-500 dark:text-gray-400">Notificar sobre problemas técnicos</p>
              </div>
              <Switch defaultChecked />
            </div>

            <Button className="w-full">Salvar Configurações</Button>
          </CardContent>
        </Card>

        {/* Database Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="w-5 h-5" />
              Banco de Dados
            </CardTitle>
            <CardDescription>Configurações de backup e manutenção</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Backup Automático</Label>
                <p className="text-sm text-gray-500 dark:text-gray-400">Realizar backup diário dos dados</p>
              </div>
              <Switch defaultChecked />
            </div>

            <Separator />

            <div className="space-y-2">
              <Label htmlFor="backup-retention">Retenção de Backup (dias)</Label>
              <Input id="backup-retention" type="number" defaultValue="30" />
            </div>

            <div className="space-y-2">
              <Label>Último Backup</Label>
              <p className="text-sm text-gray-500 dark:text-gray-400">15/01/2024 às 03:00</p>
            </div>

            <div className="flex gap-2">
              <Button variant="outline" className="flex-1 bg-transparent">
                Executar Backup
              </Button>
              <Button variant="outline" className="flex-1 bg-transparent">
                Restaurar
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
