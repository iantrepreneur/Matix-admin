"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Search,
  Download,
  CheckCircle,
  XCircle,
  Clock,
  AlertTriangle,
  Eye,
  MessageSquare,
  Calendar,
  FileText,
  User,
  Shield,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Pause,
  Phone,
  Mail,
  ZoomIn,
  Upload,
} from "lucide-react";

// Données mockées KYC sénégalaises
const kycRequests = [
  {
    id: "KYC001",
    photo: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=2",
    nom: "Amadou Diallo",
    telephone: "+221 77 123 4567",
    email: "amadou.diallo@gmail.com",
    typeCompte: ["Producteur", "Acheteur"],
    dateDemande: "20 Aug, 2025",
    documents: "Complet",
    priorite: "Normal",
    statut: "En attente",
    statutColor: "bg-orange-500",
    cni: "1 234 567 890 123 45",
    adresse: "Médina, Dakar, Sénégal",
    profession: "Éleveur de volailles",
    documentsUploades: {
      cni: { status: "Valide", url: "#" },
      selfie: { status: "Valide", url: "#" },
      justificatif: { status: "Valide", url: "#" },
      patente: { status: "Valide", url: "#" }
    }
  },
  {
    id: "KYC002",
    photo: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=2",
    nom: "Fatou Sall",
    telephone: "+221 76 987 6543",
    email: "fatou.sall@gmail.com",
    typeCompte: ["Acheteur"],
    dateDemande: "19 Aug, 2025",
    documents: "Incomplet",
    priorite: "Normal",
    statut: "En attente",
    statutColor: "bg-orange-500",
    cni: "2 345 678 901 234 56",
    adresse: "Thiès, Sénégal",
    profession: "Commerçante",
    documentsUploades: {
      cni: { status: "Valide", url: "#" },
      selfie: { status: "À revoir", url: "#" },
      justificatif: { status: "Manquant", url: null }
    }
  },
  {
    id: "KYC003",
    photo: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=2",
    nom: "Dr. Moussa Kane",
    telephone: "+221 70 555 1234",
    email: "moussa.kane@gmail.com",
    typeCompte: ["Vétérinaire"],
    dateDemande: "18 Aug, 2025",
    documents: "Complet",
    priorite: "Urgent",
    statut: "Validé",
    statutColor: "bg-emerald-500",
    cni: "3 456 789 012 345 67",
    adresse: "Kaolack, Sénégal",
    profession: "Docteur Vétérinaire",
    documentsUploades: {
      cni: { status: "Valide", url: "#" },
      selfie: { status: "Valide", url: "#" },
      justificatif: { status: "Valide", url: "#" },
      diplome: { status: "Valide", url: "#" },
      licence: { status: "Valide", url: "#" }
    }
  },
  {
    id: "KYC004",
    photo: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=2",
    nom: "Ibrahima Ba",
    telephone: "+221 78 444 5678",
    email: "ibrahima.ba@gmail.com",
    typeCompte: ["Producteur"],
    dateDemande: "17 Aug, 2025",
    documents: "Photo floue",
    priorite: "Normal",
    statut: "Rejeté",
    statutColor: "bg-red-500",
    cni: "4 567 890 123 456 78",
    adresse: "Rufisque, Sénégal",
    profession: "Aviculteur",
    motifRejet: "Photo CNI illisible, selfie de mauvaise qualité",
    documentsUploades: {
      cni: { status: "À revoir", url: "#" },
      selfie: { status: "À revoir", url: "#" },
      justificatif: { status: "Valide", url: "#" }
    }
  },
  {
    id: "KYC005",
    photo: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=2",
    nom: "Aïcha Ndiaye",
    telephone: "+221 77 333 9876",
    email: "aicha.ndiaye@gmail.com",
    typeCompte: ["Acheteur", "Producteur"],
    dateDemande: "16 Aug, 2025",
    documents: "Complet",
    priorite: "Urgent",
    statut: "En révision",
    statutColor: "bg-blue-500",
    cni: "5 678 901 234 567 89",
    adresse: "Saint-Louis, Sénégal",
    profession: "Éleveuse et négociante",
    documentsUploades: {
      cni: { status: "Valide", url: "#" },
      selfie: { status: "Valide", url: "#" },
      justificatif: { status: "Valide", url: "#" },
      rccm: { status: "Valide", url: "#" }
    }
  },
  {
    id: "KYC006",
    photo: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=2",
    nom: "Ousmane Fall",
    telephone: "+221 76 222 1111",
    email: "ousmane.fall@gmail.com",
    typeCompte: ["Transporteur"],
    dateDemande: "15 Aug, 2025",
    documents: "Complet",
    priorite: "Normal",
    statut: "Validé",
    statutColor: "bg-emerald-500",
    cni: "6 789 012 345 678 90",
    adresse: "Ziguinchor, Sénégal",
    profession: "Transporteur",
    documentsUploades: {
      cni: { status: "Valide", url: "#" },
      permis: { status: "Valide", url: "#" },
      carteGrise: { status: "Valide", url: "#" },
      assurance: { status: "Valide", url: "#" },
      visiteTechnique: { status: "Valide", url: "#" }
    }
  }
];

const stats = [
  {
    title: "En attente de validation",
    value: "12",
    subtitle: "Nouvelles demandes",
    icon: Clock,
    color: "text-orange-600",
    bgColor: "bg-orange-50"
  },
  {
    title: "Validés aujourd'hui",
    value: "8",
    subtitle: "Taux: 85%",
    icon: CheckCircle,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50"
  },
  {
    title: "Taux d'approbation",
    value: "92%",
    subtitle: "Ce mois",
    icon: Shield,
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    title: "Temps moyen",
    value: "4.2h",
    subtitle: "De traitement",
    icon: AlertTriangle,
    color: "text-purple-600",
    bgColor: "bg-purple-50"
  }
];

export default function KYCPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedPriority, setSelectedPriority] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedRequest, setSelectedRequest] = useState<any>(null);
  const [validationComment, setValidationComment] = useState("");

  const getStatusBadge = (statut: string, color: string) => {
    return <Badge className={`${color} text-white hover:${color}`}>{statut}</Badge>;
  };

  const getTypesBadges = (types: string[]) => {
    const badgeColors = {
      "Acheteur": "bg-blue-500 text-white",
      "Producteur": "bg-emerald-500 text-white",
      "Vétérinaire": "bg-purple-500 text-white",
      "Transporteur": "bg-orange-500 text-white"
    };

    return types.map(type => (
      <Badge key={type} className={`${badgeColors[type as keyof typeof badgeColors]} hover:${badgeColors[type as keyof typeof badgeColors]} text-xs mr-1`}>
        {type}
      </Badge>
    ));
  };

  const getDocumentStatus = (status: string) => {
    const statusConfig = {
      "Complet": { icon: "✅", color: "text-emerald-600" },
      "Incomplet": { icon: "⚠️", color: "text-yellow-600" },
      "Photo floue": { icon: "❌", color: "text-red-600" }
    };
    
    const config = statusConfig[status as keyof typeof statusConfig] || { icon: "📄", color: "text-gray-600" };
    
    return (
      <span className={`${config.color} font-medium`}>
        {config.icon} {status}
      </span>
    );
  };

  const getPriorityBadge = (priority: string) => {
    return priority === "Urgent" ? 
      <Badge className="bg-red-100 text-red-700 hover:bg-red-100">🔥 Urgent</Badge> :
      <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-100">Normal</Badge>;
  };

  const getInitials = (nom: string) => {
    return nom.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const handleValidation = (action: string, requestId: string) => {
    console.log(`${action} pour ${requestId}:`, validationComment);
    // Ici on ferait l'appel API
    setValidationComment("");
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Validation KYC</h1>
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm" className="text-gray-600">
            <Download className="h-4 w-4 mr-2" />
            Export Rapport
          </Button>
          <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-white">
            <CheckCircle className="h-4 w-4 mr-2" />
            Bulk Validation
          </Button>
          <Button size="sm" className="bg-red-500 hover:bg-red-600 text-white">
            <XCircle className="h-4 w-4 mr-2" />
            Rejeter Sélection
          </Button>
        </div>
      </div>

      {/* Statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <Card key={index} className="border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">{stat.title}</p>
                    <div className="space-y-1">
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      <p className="text-xs text-gray-500">{stat.subtitle}</p>
                    </div>
                  </div>
                  <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                    <IconComponent className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Filtres */}
      <Card>
        <CardContent className="p-6">
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search by name/phone/ID"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger>
                  <SelectValue placeholder="Statut" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tous</SelectItem>
                  <SelectItem value="en-attente">En attente</SelectItem>
                  <SelectItem value="valide">Validé</SelectItem>
                  <SelectItem value="rejete">Rejeté</SelectItem>
                  <SelectItem value="incomplet">Incomplet</SelectItem>
                  <SelectItem value="en-revision">En révision</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger>
                  <SelectValue placeholder="Type utilisateur" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tous</SelectItem>
                  <SelectItem value="producteur">Producteur</SelectItem>
                  <SelectItem value="acheteur">Acheteur</SelectItem>
                  <SelectItem value="veterinaire">Vétérinaire</SelectItem>
                  <SelectItem value="transporteur">Transporteur</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedPriority} onValueChange={setSelectedPriority}>
                <SelectTrigger>
                  <SelectValue placeholder="Priorité" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Toutes</SelectItem>
                  <SelectItem value="normal">Normale</SelectItem>
                  <SelectItem value="urgent">Urgente</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <Input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="pr-10"
                />
                <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>

              <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">
                Filter
              </Button>
              <Button variant="outline">
                Reset
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tableau KYC */}
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="border-gray-100">
                <TableHead className="font-medium text-gray-600">PHOTO</TableHead>
                <TableHead className="font-medium text-gray-600">NOM COMPLET</TableHead>
                <TableHead className="font-medium text-gray-600">TÉLÉPHONE</TableHead>
                <TableHead className="font-medium text-gray-600">TYPE COMPTE</TableHead>
                <TableHead className="font-medium text-gray-600">DATE DEMANDE</TableHead>
                <TableHead className="font-medium text-gray-600">DOCUMENTS</TableHead>
                <TableHead className="font-medium text-gray-600">PRIORITÉ</TableHead>
                <TableHead className="font-medium text-gray-600">STATUT</TableHead>
                <TableHead className="font-medium text-gray-600">ACTIONS</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {kycRequests.map((request) => (
                <TableRow key={request.id} className="border-gray-50 hover:bg-gray-50/50">
                  <TableCell>
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={request.photo} alt={request.nom} />
                      <AvatarFallback className="bg-emerald-100 text-emerald-700 text-sm font-medium">
                        {getInitials(request.nom)}
                      </AvatarFallback>
                    </Avatar>
                  </TableCell>
                  <TableCell className="font-medium text-gray-900">
                    {request.nom}
                  </TableCell>
                  <TableCell className="text-gray-600">
                    {request.telephone}
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {getTypesBadges(request.typeCompte)}
                    </div>
                  </TableCell>
                  <TableCell className="text-gray-600">
                    {request.dateDemande}
                  </TableCell>
                  <TableCell>
                    {getDocumentStatus(request.documents)}
                  </TableCell>
                  <TableCell>
                    {getPriorityBadge(request.priorite)}
                  </TableCell>
                  <TableCell>
                    {getStatusBadge(request.statut, request.statutColor)}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="h-8 w-8"
                            onClick={() => setSelectedRequest(request)}
                          >
                            <Eye className="h-4 w-4 text-gray-500" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle>Validation KYC - {request.nom}</DialogTitle>
                          </DialogHeader>
                          
                          <Tabs defaultValue="infos" className="w-full">
                            <TabsList className="grid w-full grid-cols-4">
                              <TabsTrigger value="infos">Informations</TabsTrigger>
                              <TabsTrigger value="documents">Documents</TabsTrigger>
                              <TabsTrigger value="verifications">Vérifications</TabsTrigger>
                              <TabsTrigger value="historique">Historique</TabsTrigger>
                            </TabsList>
                            
                            <TabsContent value="infos" className="space-y-4">
                              <div className="grid grid-cols-2 gap-6">
                                <div>
                                  <h4 className="font-medium text-gray-900 mb-3">Informations personnelles</h4>
                                  <div className="space-y-2 text-sm">
                                    <div><span className="text-gray-500">Nom complet:</span> {request.nom}</div>
                                    <div><span className="text-gray-500">Téléphone:</span> {request.telephone}</div>
                                    <div><span className="text-gray-500">Email:</span> {request.email}</div>
                                    <div><span className="text-gray-500">CNI:</span> {request.cni}</div>
                                    <div><span className="text-gray-500">Adresse:</span> {request.adresse}</div>
                                    <div><span className="text-gray-500">Profession:</span> {request.profession}</div>
                                  </div>
                                </div>
                                
                                <div>
                                  <h4 className="font-medium text-gray-900 mb-3">Détails compte</h4>
                                  <div className="space-y-2">
                                    <div className="flex items-center space-x-2">
                                      <span className="text-sm text-gray-500">Types:</span>
                                      <div className="flex flex-wrap gap-1">
                                        {getTypesBadges(request.typeCompte)}
                                      </div>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                      <span className="text-sm text-gray-500">Priorité:</span>
                                      {getPriorityBadge(request.priorite)}
                                    </div>
                                    <div className="flex items-center space-x-2">
                                      <span className="text-sm text-gray-500">Statut:</span>
                                      {getStatusBadge(request.statut, request.statutColor)}
                                    </div>
                                    <div><span className="text-sm text-gray-500">Date demande:</span> {request.dateDemande}</div>
                                  </div>
                                </div>
                              </div>
                            </TabsContent>
                            
                            <TabsContent value="documents" className="space-y-4">
                              <div className="grid grid-cols-2 gap-4">
                                {Object.entries(request.documentsUploades).map(([docType, doc]) => (
                                  <div key={docType} className="border rounded-lg p-4">
                                    <div className="flex items-center justify-between mb-2">
                                      <h5 className="font-medium capitalize">{docType.replace(/([A-Z])/g, ' $1')}</h5>
                                      <Badge className={
                                        doc.status === "Valide" ? "bg-emerald-100 text-emerald-700" :
                                        doc.status === "À revoir" ? "bg-orange-100 text-orange-700" :
                                        "bg-red-100 text-red-700"
                                      }>
                                        {doc.status}
                                      </Badge>
                                    </div>
                                    {doc.url ? (
                                      <div className="flex items-center space-x-2">
                                        <Button size="sm" variant="outline">
                                          <ZoomIn className="h-4 w-4 mr-2" />
                                          Voir
                                        </Button>
                                        <Button size="sm" variant="outline">
                                          <Download className="h-4 w-4 mr-2" />
                                          Télécharger
                                        </Button>
                                      </div>
                                    ) : (
                                      <p className="text-sm text-gray-500">Document manquant</p>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </TabsContent>
                            
                            <TabsContent value="verifications" className="space-y-4">
                              <div className="space-y-4">
                                <div className="border rounded-lg p-4">
                                  <h5 className="font-medium mb-2">Vérifications automatiques</h5>
                                  <div className="space-y-2 text-sm">
                                    <div className="flex items-center space-x-2">
                                      <CheckCircle className="h-4 w-4 text-emerald-500" />
                                      <span>Format CNI sénégalais valide</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                      <CheckCircle className="h-4 w-4 text-emerald-500" />
                                      <span>Cohérence nom/documents</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                      <CheckCircle className="h-4 w-4 text-emerald-500" />
                                      <span>Qualité photos acceptable</span>
                                    </div>
                                  </div>
                                </div>
                                
                                <div className="border rounded-lg p-4">
                                  <h5 className="font-medium mb-2">Commentaires validation</h5>
                                  <Textarea
                                    placeholder="Ajouter des commentaires sur la validation..."
                                    value={validationComment}
                                    onChange={(e) => setValidationComment(e.target.value)}
                                    className="mb-3"
                                  />
                                  
                                  <div className="flex space-x-2">
                                    <Button 
                                      size="sm" 
                                      className="bg-emerald-500 hover:bg-emerald-600"
                                      onClick={() => handleValidation("APPROUVER", request.id)}
                                    >
                                      <CheckCircle className="h-4 w-4 mr-2" />
                                      Approuver
                                    </Button>
                                    <Button 
                                      size="sm" 
                                      className="bg-red-500 hover:bg-red-600"
                                      onClick={() => handleValidation("REJETER", request.id)}
                                    >
                                      <XCircle className="h-4 w-4 mr-2" />
                                      Rejeter
                                    </Button>
                                    <Button 
                                      size="sm" 
                                      variant="outline"
                                      onClick={() => handleValidation("DEMANDER_COMPLEMENT", request.id)}
                                    >
                                      <Upload className="h-4 w-4 mr-2" />
                                      Demander complément
                                    </Button>
                                    <Button 
                                      size="sm" 
                                      variant="outline"
                                      onClick={() => handleValidation("METTRE_EN_ATTENTE", request.id)}
                                    >
                                      <Pause className="h-4 w-4 mr-2" />
                                      Mettre en attente
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </TabsContent>
                            
                            <TabsContent value="historique" className="space-y-4">
                              <div className="space-y-3">
                                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                  <div className="flex-1">
                                    <div className="text-sm font-medium">Demande soumise</div>
                                    <div className="text-xs text-gray-500">{request.dateDemande} - Utilisateur</div>
                                  </div>
                                </div>
                                
                                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                  <div className="flex-1">
                                    <div className="text-sm font-medium">En cours de validation</div>
                                    <div className="text-xs text-gray-500">Assigné à Admin KYC</div>
                                  </div>
                                </div>
                                
                                {request.motifRejet && (
                                  <div className="flex items-center space-x-3 p-3 bg-red-50 rounded-lg">
                                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                    <div className="flex-1">
                                      <div className="text-sm font-medium text-red-700">Rejeté</div>
                                      <div className="text-xs text-red-600">{request.motifRejet}</div>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </TabsContent>
                          </Tabs>
                        </DialogContent>
                      </Dialog>

                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <ChevronDown className="h-4 w-4 text-gray-500" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          {request.statut === "En attente" && (
                            <>
                              <DropdownMenuItem className="text-emerald-600">
                                <CheckCircle className="h-4 w-4 mr-2" />
                                Valider KYC
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-red-600">
                                <XCircle className="h-4 w-4 mr-2" />
                                Rejeter
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Upload className="h-4 w-4 mr-2" />
                                Demander documents
                              </DropdownMenuItem>
                            </>
                          )}
                          <DropdownMenuItem>
                            <MessageSquare className="h-4 w-4 mr-2" />
                            Contacter utilisateur
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Phone className="h-4 w-4 mr-2" />
                            Appeler
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Mail className="h-4 w-4 mr-2" />
                            Envoyer email
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <FileText className="h-4 w-4 mr-2" />
                            Voir dossier complet
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {/* Pagination */}
          <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100">
            <Button variant="ghost" size="sm" className="text-gray-500">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Previous
            </Button>
            
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" className="bg-emerald-50 text-emerald-600">1</Button>
              <Button variant="ghost" size="sm">2</Button>
              <Button variant="ghost" size="sm">3</Button>
              <span className="text-gray-400">...</span>
              <Button variant="ghost" size="sm">8</Button>
            </div>

            <Button variant="ghost" size="sm" className="text-gray-500">
              Next
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}