"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    // General Settings
    numberOfImages: "12",
    allowAutoTranslation: false,
    defaultLanguage: "french",
    defaultCurrency: "fcfa",
    defaultTimezone: "dakar",
    defaultDateFormat: "dd-mm-yyyy",
    receiptWidth: "57mm",
    
    // Invoice Settings
    enableEmailInvoice: true,
    fromEmail: "contact@matix.sn",
    
    // Company Information
    fromName: "Matix SA",
    companyName: "Matix - Marketplace Avicole",
    nineaNumber: "47589123456",
    address: "Zone Industrielle, Rufisque, Dakar, Sénégal",
    postCode: "12345",
    
    // Contact Information
    phone: "+221 33 123 45 67",
    email: "contact@matix.sn",
    website: "www.matix.sn",
    
    // Marketplace Settings
    marketplaceCommission: "5",
    transactionFee: "2.5",
    minimumOrderAmount: "5000",
    kycValidationDelay: "3",
    maxDeliveryRadius: "50",
    
    // WhatsApp Integration
    whatsappNumber: "+221 77 123 45 67",
    whatsappToken: "••••••••••••••••",
    enableWhatsappNotifications: true,
    whatsappLanguage: "wolof",
    
    // Payment Settings
    paymentMethods: {
      cash: true,
      orangeMoney: true,
      wave: true,
      freeMoney: true,
      bankCard: false
    },
    paymentDelay: "7"
  });

  const handleInputChange = (field: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handlePaymentMethodChange = (method: string, checked: boolean) => {
    setSettings(prev => ({
      ...prev,
      paymentMethods: {
        ...prev.paymentMethods,
        [method]: checked
      }
    }));
  };

  const handleUpdate = () => {
    console.log("Updating settings:", settings);
    // Ici on ferait l'appel API pour sauvegarder
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Paramètres Globaux</h1>
        <Button 
          onClick={handleUpdate}
          className="bg-emerald-500 hover:bg-emerald-600 text-white"
        >
          Update
        </Button>
      </div>

      <div className="space-y-8">
        {/* General Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-900">Paramètres Généraux</CardTitle>
            <p className="text-sm text-gray-600">Configurez vos paramètres d'application de base et préférences</p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="numberOfImages" className="text-sm font-medium text-gray-700">
                  Nombre d'images par produit
                </Label>
                <Input
                  id="numberOfImages"
                  type="number"
                  value={settings.numberOfImages}
                  onChange={(e) => handleInputChange("numberOfImages", e.target.value)}
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">
                  Autoriser traduction automatique
                </Label>
                <div className="flex items-center space-x-2">
                  <Switch
                    checked={settings.allowAutoTranslation}
                    onCheckedChange={(checked) => handleInputChange("allowAutoTranslation", checked)}
                    className="data-[state=checked]:bg-emerald-500"
                  />
                  <span className="text-sm text-gray-600">
                    {settings.allowAutoTranslation ? "Oui" : "Non"}
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">
                  Langue par défaut
                </Label>
                <Select value={settings.defaultLanguage} onValueChange={(value) => handleInputChange("defaultLanguage", value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="french">Français</SelectItem>
                    <SelectItem value="wolof">Wolof</SelectItem>
                    <SelectItem value="english">Anglais</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">
                  Devise par défaut
                </Label>
                <Select value={settings.defaultCurrency} onValueChange={(value) => handleInputChange("defaultCurrency", value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fcfa">Franc CFA (FCFA)</SelectItem>
                    <SelectItem value="eur">Euro (EUR)</SelectItem>
                    <SelectItem value="usd">Dollar US (USD)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">
                  Fuseau horaire par défaut
                </Label>
                <Select value={settings.defaultTimezone} onValueChange={(value) => handleInputChange("defaultTimezone", value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dakar">Dakar/Abidjan (GMT+00:00)</SelectItem>
                    <SelectItem value="casablanca">Casablanca (GMT+01:00)</SelectItem>
                    <SelectItem value="paris">Paris (GMT+01:00)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">
                  Format de date par défaut
                </Label>
                <Select value={settings.defaultDateFormat} onValueChange={(value) => handleInputChange("defaultDateFormat", value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dd-mm-yyyy">DD/MM/YYYY</SelectItem>
                    <SelectItem value="mm-dd-yyyy">MM/DD/YYYY</SelectItem>
                    <SelectItem value="yyyy-mm-dd">YYYY-MM-DD</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">
                  Taille reçu (largeur)
                </Label>
                <Select value={settings.receiptWidth} onValueChange={(value) => handleInputChange("receiptWidth", value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="57mm">57 mm</SelectItem>
                    <SelectItem value="80mm">80 mm</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Invoice Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-900">Paramètres Factures</CardTitle>
            <p className="text-sm text-gray-600">Configurez la génération de factures et préférences d'envoi par email</p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">
                  Activer envoi facture par email
                </Label>
                <div className="flex items-center space-x-2">
                  <Switch
                    checked={settings.enableEmailInvoice}
                    onCheckedChange={(checked) => handleInputChange("enableEmailInvoice", checked)}
                    className="data-[state=checked]:bg-emerald-500"
                  />
                  <span className="text-sm text-gray-600">
                    {settings.enableEmailInvoice ? "Oui" : "Non"}
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="fromEmail" className="text-sm font-medium text-gray-700">
                  Email expéditeur
                </Label>
                <Input
                  id="fromEmail"
                  type="email"
                  value={settings.fromEmail}
                  onChange={(e) => handleInputChange("fromEmail", e.target.value)}
                  className="w-full"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Company Information */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-900">Informations Entreprise</CardTitle>
            <p className="text-sm text-gray-600">Entrez les détails de votre entreprise qui apparaîtront sur les factures et reçus</p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="fromName" className="text-sm font-medium text-gray-700">
                  Nom expéditeur
                </Label>
                <Input
                  id="fromName"
                  value={settings.fromName}
                  onChange={(e) => handleInputChange("fromName", e.target.value)}
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="companyName" className="text-sm font-medium text-gray-700">
                  Nom de l'entreprise
                </Label>
                <Input
                  id="companyName"
                  value={settings.companyName}
                  onChange={(e) => handleInputChange("companyName", e.target.value)}
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="nineaNumber" className="text-sm font-medium text-gray-700">
                  Numéro NINEA
                </Label>
                <Input
                  id="nineaNumber"
                  value={settings.nineaNumber}
                  onChange={(e) => handleInputChange("nineaNumber", e.target.value)}
                  placeholder="47589123456"
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="postCode" className="text-sm font-medium text-gray-700">
                  Code postal
                </Label>
                <Input
                  id="postCode"
                  value={settings.postCode}
                  onChange={(e) => handleInputChange("postCode", e.target.value)}
                  className="w-full"
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="address" className="text-sm font-medium text-gray-700">
                  Adresse
                </Label>
                <Textarea
                  id="address"
                  value={settings.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                  rows={3}
                  className="w-full"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-900">Informations de Contact</CardTitle>
            <p className="text-sm text-gray-600">Fournissez les détails de contact pour la communication client et support</p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                  Téléphone
                </Label>
                <Input
                  id="phone"
                  value={settings.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={settings.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="website" className="text-sm font-medium text-gray-700">
                  Site web
                </Label>
                <Input
                  id="website"
                  value={settings.website}
                  onChange={(e) => handleInputChange("website", e.target.value)}
                  className="w-full"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Marketplace Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-900">Paramètres Marketplace</CardTitle>
            <p className="text-sm text-gray-600">Configurez les paramètres spécifiques à la marketplace avicole</p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="marketplaceCommission" className="text-sm font-medium text-gray-700">
                  Commission marketplace (%)
                </Label>
                <Input
                  id="marketplaceCommission"
                  type="number"
                  value={settings.marketplaceCommission}
                  onChange={(e) => handleInputChange("marketplaceCommission", e.target.value)}
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="transactionFee" className="text-sm font-medium text-gray-700">
                  Frais de transaction (%)
                </Label>
                <Input
                  id="transactionFee"
                  type="number"
                  step="0.1"
                  value={settings.transactionFee}
                  onChange={(e) => handleInputChange("transactionFee", e.target.value)}
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="minimumOrderAmount" className="text-sm font-medium text-gray-700">
                  Montant minimum commande (FCFA)
                </Label>
                <Input
                  id="minimumOrderAmount"
                  type="number"
                  value={settings.minimumOrderAmount}
                  onChange={(e) => handleInputChange("minimumOrderAmount", e.target.value)}
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="kycValidationDelay" className="text-sm font-medium text-gray-700">
                  Délai validation KYC (jours)
                </Label>
                <Input
                  id="kycValidationDelay"
                  type="number"
                  value={settings.kycValidationDelay}
                  onChange={(e) => handleInputChange("kycValidationDelay", e.target.value)}
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="maxDeliveryRadius" className="text-sm font-medium text-gray-700">
                  Rayon livraison maximum (km)
                </Label>
                <Input
                  id="maxDeliveryRadius"
                  type="number"
                  value={settings.maxDeliveryRadius}
                  onChange={(e) => handleInputChange("maxDeliveryRadius", e.target.value)}
                  className="w-full"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* WhatsApp Integration */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-900">Intégration WhatsApp</CardTitle>
            <p className="text-sm text-gray-600">Configurez l'intégration WhatsApp Business pour les notifications</p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="whatsappNumber" className="text-sm font-medium text-gray-700">
                  Numéro WhatsApp Business
                </Label>
                <Input
                  id="whatsappNumber"
                  value={settings.whatsappNumber}
                  onChange={(e) => handleInputChange("whatsappNumber", e.target.value)}
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="whatsappToken" className="text-sm font-medium text-gray-700">
                  Token API WhatsApp
                </Label>
                <Input
                  id="whatsappToken"
                  type="password"
                  value={settings.whatsappToken}
                  onChange={(e) => handleInputChange("whatsappToken", e.target.value)}
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">
                  Activer notifications WhatsApp
                </Label>
                <div className="flex items-center space-x-2">
                  <Switch
                    checked={settings.enableWhatsappNotifications}
                    onCheckedChange={(checked) => handleInputChange("enableWhatsappNotifications", checked)}
                    className="data-[state=checked]:bg-emerald-500"
                  />
                  <span className="text-sm text-gray-600">
                    {settings.enableWhatsappNotifications ? "Oui" : "Non"}
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">
                  Langue messages WhatsApp
                </Label>
                <Select value={settings.whatsappLanguage} onValueChange={(value) => handleInputChange("whatsappLanguage", value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="wolof">Wolof</SelectItem>
                    <SelectItem value="french">Français</SelectItem>
                    <SelectItem value="english">Anglais</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Payment Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-900">Paramètres de Paiement</CardTitle>
            <p className="text-sm text-gray-600">Configurez les méthodes de paiement acceptées et délais</p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label className="text-sm font-medium text-gray-700 mb-3 block">
                  Méthodes de paiement acceptées
                </Label>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="cash"
                      checked={settings.paymentMethods.cash}
                      onCheckedChange={(checked) => handlePaymentMethodChange("cash", checked as boolean)}
                    />
                    <Label htmlFor="cash" className="text-sm text-gray-700">
                      Espèces à la livraison
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="orangeMoney"
                      checked={settings.paymentMethods.orangeMoney}
                      onCheckedChange={(checked) => handlePaymentMethodChange("orangeMoney", checked as boolean)}
                    />
                    <Label htmlFor="orangeMoney" className="text-sm text-gray-700">
                      Orange Money
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="wave"
                      checked={settings.paymentMethods.wave}
                      onCheckedChange={(checked) => handlePaymentMethodChange("wave", checked as boolean)}
                    />
                    <Label htmlFor="wave" className="text-sm text-gray-700">
                      Wave
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="freeMoney"
                      checked={settings.paymentMethods.freeMoney}
                      onCheckedChange={(checked) => handlePaymentMethodChange("freeMoney", checked as boolean)}
                    />
                    <Label htmlFor="freeMoney" className="text-sm text-gray-700">
                      Free Money
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="bankCard"
                      checked={settings.paymentMethods.bankCard}
                      onCheckedChange={(checked) => handlePaymentMethodChange("bankCard", checked as boolean)}
                    />
                    <Label htmlFor="bankCard" className="text-sm text-gray-700">
                      Carte bancaire
                    </Label>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="paymentDelay" className="text-sm font-medium text-gray-700">
                  Délai de paiement (jours)
                </Label>
                <Input
                  id="paymentDelay"
                  type="number"
                  value={settings.paymentDelay}
                  onChange={(e) => handleInputChange("paymentDelay", e.target.value)}
                  className="w-full max-w-xs"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}