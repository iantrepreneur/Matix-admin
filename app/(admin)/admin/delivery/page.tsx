"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
  Upload,
  Calendar,
  MapPin,
  Truck,
  Clock,
  Eye,
  Edit,
  Phone,
  Navigation,
  CheckCircle,
  AlertTriangle,
  Printer,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Star,
  User,
} from "lucide-react";

// Données mockées avicoles sénégalaises
const deliveries = [
  {
    id: "LIV001",
    commandeId: "CMD12182",
    client: {
      nom: "Amadou Diallo",
      telephone: "+221 77 123 4567"
    },
    produits: "5x Poulets fermiers",
    depart: "Rufisque",
    destination: "Dakar Plateau",
    transporteur: {
      nom: "Ousmane Fall",
      vehicule: "Camionnette",
      photo: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=2"
    },
    distance: "25km",
    tarif: "5,000 FCFA",
    heureProgrammee: "14:00",
    eta: "14:45",
    statut: "En cours",
    statutColor: "bg-orange-500"
  },
  {
    id: "LIV002",
    commandeId: "CMD12195",
    client: {
      nom: "Fatou Sall",
      telephone: "+221 76 987 6543"
    },
    produits: "1x Couveuse 100 œufs",
    depart: "Thiès",
    destination: "Pikine",
    transporteur: {
      nom: "Ibrahima Transport",
      vehicule: "Pickup",
      photo: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=2"
    },
    distance: "45km",
    tarif: "8,000 FCFA",
    heureProgrammee: "15:30",
    eta: "16:15",
    statut: "Programmée",
    statutColor: "bg-blue-500"
  },
  {
    id: "LIV003",
    commandeId: "CMD12176",
    client: {
      nom: "Moussa Kane",
      telephone: "+221 70 555 1234"
    },
    produits: "20x Poussins pondeuses",
    depart: "Kaolack",
    destination: "Diourbel",
    transporteur: {
      nom: "Mamadou Livraison",
      vehicule: "Moto",
      photo: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=2"
    },
    distance: "35km",
    tarif: "6,000 FCFA",
    heureProgrammee: "09:00",
    eta: "09:50",
    statut: "Terminée",
    statutColor: "bg-emerald-500"
  },
  {
    id: "LIV004",
    commandeId: "CMD12175",
    client: {
      nom: "Aïcha Ndiaye",
      telephone: "+221 77 333 9876"
    },
    produits: "2x Cages + Aliment 25kg",
    depart: "Saint-Louis",
    destination: "Louga",
    transporteur: {
      nom: "Cheikh Express",
      vehicule: "Camion",
      photo: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=2"
    },
    distance: "65km",
    tarif: "12,000 FCFA",
    heureProgrammee: "16:00",
    eta: "En retard",
    statut: "En retard",
    statutColor: "bg-red-500"
  },
  {
    id: "LIV005",
    commandeId: "CMD12193",
    client: {
      nom: "Mariama Sy",
      telephone: "+221 70 888 2222"
    },
    produits: "3x Mangeoires + Vaccins",
    depart: "Diourbel",
    destination: "Bambey",
    transporteur: {
      nom: "Babacar Transport",
      vehicule: "Camionnette",
      photo: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=2"
    },
    distance: "20km",
    tarif: "4,000 FCFA",
    heureProgrammee: "11:30",
    eta: "12:00",
    statut: "Terminée",
    statutColor: "bg-emerald-500"
  },
  {
    id: "LIV006",
    commandeId: "CMD12186",
    client: {
      nom: "Khadija Thiam",
      telephone: "+221 77 111 2222"
    },
    produits: "10x Poulets chair + Aliment",
    depart: "Mbour",
    destination: "Saly",
    transporteur: {
      nom: "Modou Express",
      vehicule: "Pickup",
      photo: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=2"
    },
    distance: "15km",
    tarif: "3,500 FCFA",
    heureProgrammee: "13:00",
    eta: "13:30",
    statut: "En cours",
    statutColor: "bg-orange-500"
  }
];

const transporteurs = [
  {
    nom: "Ousmane Fall",
    vehicule: "Camionnette Toyota",
    zone: "Dakar-Rufisque",
    statut: "En mission",
    livraisonsDuJour: 3,
    note: 4.8,
    photo: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=2"
  },
  {
    nom: "Ibrahima Transport",
    vehicule: "Pickup Ford",
    zone: "Thiès-Pikine",
    statut: "Disponible",
    livraisonsDuJour: 1,
    note: 4.6,
    photo: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=2"
  },
  {
    nom: "Mamadou Livraison",
    vehicule: "Moto 125cc",
    zone: "Kaolack-Diourbel",
    statut: "Hors service",
    livraisonsDuJour: 0,
    note: 4.2,
    photo: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=2"
  },
  {
    nom: "Cheikh Express",
    vehicule: "Camion Isuzu",
    zone: "Saint-Louis-Louga",
    statut: "En mission",
    livraisonsDuJour: 2,
    note: 4.9,
    photo: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=2"
  }
];

const stats = [
  {
    title: "Livraisons Aujourd'hui",
    value: "24",
    subtitle: "6 en cours",
    icon: Truck,
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    title: "Temps Moyen",
    value: "45min",
    subtitle: "Par livraison",
    icon: Clock,
    color: "text-orange-600",
    bgColor: "bg-orange-50"
  },
  {
    title: "Taux de Réussite",
    value: "96%",
    subtitle: "Ce mois",
    icon: CheckCircle,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50"
  },
  {
    title: "CA Livraisons",
    value: "485,000 FCFA",
    subtitle: "Ce mois",
    icon: Download,
    color: "text-purple-600",
    bgColor: "bg-purple-50"
  }
];

export default function DeliveryPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedTransporteur, setSelectedTransporteur] = useState("");
  const [selectedZone, setSelectedZone] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const getStatusBadge = (statut: string, color: string) => {
    return <Badge className={`${color} text-white hover:${color}`}>{statut}</Badge>;
  };

  const getTransporteurStatusBadge = (statut: string) => {
    const colors = {
      "Disponible": "bg-emerald-500 text-white",
      "En mission": "bg-orange-500 text-white",
      "Hors service": "bg-gray-500 text-white"
    };
    return <Badge className={`${colors[statut as keyof typeof colors]} hover:${colors[statut as keyof typeof colors]}`}>{statut}</Badge>;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Livraisons</h1>
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm" className="text-gray-600">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button variant="outline" size="sm" className="text-gray-600">
            <Upload className="h-4 w-4 mr-2" />
            Import
          </Button>
          <Button size="sm" className="bg-blue-500 hover:bg-blue-600 text-white">
            <Navigation className="h-4 w-4 mr-2" />
            Planifier Tournée
          </Button>
          <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600 text-white">
            <User className="h-4 w-4 mr-2" />
            Add Transporteur
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

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
        {/* Section principale */}
        <div className="xl:col-span-3 space-y-6">
          {/* Carte mockée */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-emerald-600" />
                Suivi des Livraisons en Temps Réel
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80 bg-gray-100 rounded-lg relative overflow-hidden">
                {/* Carte mockée avec marqueurs */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-emerald-50">
                  <div className="absolute top-4 left-4 bg-white rounded-lg shadow-md p-3">
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                        <span>En cours (6)</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                        <span>Terminé (18)</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <span>En retard (1)</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                        <span>Transporteur actif (4)</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Marqueurs simulés */}
                  <div className="absolute top-20 left-32 w-4 h-4 bg-orange-500 rounded-full border-2 border-white shadow-lg animate-pulse"></div>
                  <div className="absolute top-32 right-40 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white shadow-lg"></div>
                  <div className="absolute bottom-24 left-20 w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-lg"></div>
                  <div className="absolute top-40 left-1/2 w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-lg animate-pulse"></div>
                  
                  {/* Trajets simulés */}
                  <svg className="absolute inset-0 w-full h-full">
                    <path d="M 130 80 Q 200 120 320 160" stroke="#f59e0b" strokeWidth="3" fill="none" strokeDasharray="5,5" opacity="0.7" />
                    <path d="M 80 200 Q 150 180 250 140" stroke="#10b981" strokeWidth="3" fill="none" opacity="0.7" />
                  </svg>
                  
                  <div className="absolute bottom-4 right-4 text-xs text-gray-500 bg-white px-2 py-1 rounded">
                    Carte Google Maps - Région Dakar
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Filtres */}
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search by client/transporteur/produit"
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
                      <SelectItem value="programmee">Programmée</SelectItem>
                      <SelectItem value="en-cours">En cours</SelectItem>
                      <SelectItem value="terminee">Terminée</SelectItem>
                      <SelectItem value="en-retard">En retard</SelectItem>
                      <SelectItem value="annulee">Annulée</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select value={selectedTransporteur} onValueChange={setSelectedTransporteur}>
                    <SelectTrigger>
                      <SelectValue placeholder="Transporteur" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Tous</SelectItem>
                      <SelectItem value="ousmane">Ousmane Fall</SelectItem>
                      <SelectItem value="ibrahima">Ibrahima Transport</SelectItem>
                      <SelectItem value="mamadou">Mamadou Livraison</SelectItem>
                      <SelectItem value="cheikh">Cheikh Express</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select value={selectedZone} onValueChange={setSelectedZone}>
                    <SelectTrigger>
                      <SelectValue placeholder="Zone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Toutes zones</SelectItem>
                      <SelectItem value="dakar">Dakar</SelectItem>
                      <SelectItem value="thies">Thiès</SelectItem>
                      <SelectItem value="rufisque">Rufisque</SelectItem>
                      <SelectItem value="kaolack">Kaolack</SelectItem>
                      <SelectItem value="saint-louis">Saint-Louis</SelectItem>
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

          {/* Tableau des livraisons */}
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow className="border-gray-100">
                    <TableHead className="font-medium text-gray-600">ID LIVRAISON</TableHead>
                    <TableHead className="font-medium text-gray-600">COMMANDE</TableHead>
                    <TableHead className="font-medium text-gray-600">CLIENT</TableHead>
                    <TableHead className="font-medium text-gray-600">PRODUITS</TableHead>
                    <TableHead className="font-medium text-gray-600">TRAJET</TableHead>
                    <TableHead className="font-medium text-gray-600">TRANSPORTEUR</TableHead>
                    <TableHead className="font-medium text-gray-600">DISTANCE</TableHead>
                    <TableHead className="font-medium text-gray-600">TARIF</TableHead>
                    <TableHead className="font-medium text-gray-600">HORAIRE</TableHead>
                    <TableHead className="font-medium text-gray-600">STATUT</TableHead>
                    <TableHead className="font-medium text-gray-600">ACTIONS</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {deliveries.map((delivery) => (
                    <TableRow key={delivery.id} className="border-gray-50 hover:bg-gray-50/50">
                      <TableCell className="font-medium text-gray-900">
                        {delivery.id}
                      </TableCell>
                      <TableCell className="text-blue-600 font-medium">
                        {delivery.commandeId}
                      </TableCell>
                      <TableCell>
                        <div>
                          <div className="font-medium text-gray-900">{delivery.client.nom}</div>
                          <div className="text-xs text-gray-500">{delivery.client.telephone}</div>
                        </div>
                      </TableCell>
                      <TableCell className="text-gray-600">
                        {delivery.produits}
                      </TableCell>
                      <TableCell>
                        <div className="text-sm">
                          <div className="text-gray-900">{delivery.depart}</div>
                          <div className="text-gray-500">→ {delivery.destination}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <img
                            src={delivery.transporteur.photo}
                            alt={delivery.transporteur.nom}
                            className="w-8 h-8 rounded-full object-cover"
                          />
                          <div>
                            <div className="text-sm font-medium text-gray-900">{delivery.transporteur.nom}</div>
                            <div className="text-xs text-gray-500">{delivery.transporteur.vehicule}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="text-gray-600">
                        {delivery.distance}
                      </TableCell>
                      <TableCell className="font-medium text-gray-900">
                        {delivery.tarif}
                      </TableCell>
                      <TableCell>
                        <div className="text-sm">
                          <div className="text-gray-900">{delivery.heureProgrammee}</div>
                          <div className="text-gray-500">ETA: {delivery.eta}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        {getStatusBadge(delivery.statut, delivery.statutColor)}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <Eye className="h-4 w-4 text-gray-500" />
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-2xl">
                              <DialogHeader>
                                <DialogTitle>Détails Livraison {delivery.id}</DialogTitle>
                              </DialogHeader>
                              <div className="space-y-6">
                                <div className="grid grid-cols-2 gap-4">
                                  <div>
                                    <h4 className="font-medium text-gray-900 mb-2">Informations client</h4>
                                    <div className="space-y-2 text-sm">
                                      <div><span className="text-gray-500">Nom:</span> {delivery.client.nom}</div>
                                      <div><span className="text-gray-500">Téléphone:</span> {delivery.client.telephone}</div>
                                      <div><span className="text-gray-500">Destination:</span> {delivery.destination}</div>
                                    </div>
                                  </div>
                                  
                                  <div>
                                    <h4 className="font-medium text-gray-900 mb-2">Détails livraison</h4>
                                    <div className="space-y-2 text-sm">
                                      <div><span className="text-gray-500">Produits:</span> {delivery.produits}</div>
                                      <div><span className="text-gray-500">Distance:</span> {delivery.distance}</div>
                                      <div><span className="text-gray-500">Tarif:</span> {delivery.tarif}</div>
                                      <div className="flex items-center space-x-2">
                                        <span className="text-gray-500">Statut:</span>
                                        {getStatusBadge(delivery.statut, delivery.statutColor)}
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div>
                                  <h4 className="font-medium text-gray-900 mb-2">Timeline</h4>
                                  <div className="space-y-2 text-sm">
                                    <div className="flex items-center space-x-2">
                                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                                      <span>Commande confirmée - {delivery.heureProgrammee}</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                      <span>Transporteur assigné - {delivery.transporteur.nom}</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                      <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                                      <span>En route vers destination - ETA {delivery.eta}</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>

                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <ChevronDown className="h-4 w-4 text-gray-500" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>
                                <Eye className="h-4 w-4 mr-2" />
                                Voir détails
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Edit className="h-4 w-4 mr-2" />
                                Modifier horaire
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Phone className="h-4 w-4 mr-2" />
                                Contacter transporteur
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Navigation className="h-4 w-4 mr-2" />
                                Tracking GPS
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <CheckCircle className="h-4 w-4 mr-2" />
                                Marquer terminée
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Printer className="h-4 w-4 mr-2" />
                                Bon de livraison
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-red-600">
                                <AlertTriangle className="h-4 w-4 mr-2" />
                                Signaler problème
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

        {/* Sidebar Transporteurs */}
        <div className="xl:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold flex items-center">
                <Truck className="h-5 w-5 mr-2 text-emerald-600" />
                Transporteurs Actifs
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {transporteurs.map((transporteur, index) => (
                <div key={index} className="p-4 border border-gray-100 rounded-lg hover:bg-gray-50">
                  <div className="flex items-center space-x-3 mb-3">
                    <img
                      src={transporteur.photo}
                      alt={transporteur.nom}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="font-medium text-gray-900 text-sm">{transporteur.nom}</div>
                      <div className="text-xs text-gray-500">{transporteur.vehicule}</div>
                    </div>
                  </div>
                  
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Zone:</span>
                      <span className="text-gray-900">{transporteur.zone}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Livraisons:</span>
                      <span className="text-gray-900">{transporteur.livraisonsDuJour}/jour</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500">Note:</span>
                      <div className="flex items-center space-x-1">
                        <Star className="h-3 w-3 text-yellow-400 fill-current" />
                        <span className="text-gray-900">{transporteur.note}</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500">Statut:</span>
                      {getTransporteurStatusBadge(transporteur.statut)}
                    </div>
                  </div>
                  
                  <Button 
                    size="sm" 
                    className="w-full mt-3 bg-emerald-500 hover:bg-emerald-600 text-white"
                    disabled={transporteur.statut === "Hors service"}
                  >
                    Assigner Mission
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}