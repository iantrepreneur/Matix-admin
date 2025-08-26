"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
  Eye,
  Edit,
  Trash2,
  CheckCircle,
  XCircle,
  Shield,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  MessageSquare,
  History,
  Star,
} from "lucide-react";

// Types d'utilisateurs
type UserType = "acheteur" | "vendeur" | "veterinaire" | "transporteur";
type KYCStatus = "Validé" | "En attente" | "Rejeté";
type AccountStatus = "Actif" | "Suspendu" | "Inactif";

interface User {
  id: string;
  nom: string;
  email: string;
  telephone: string;
  localisation: string;
  types: UserType[];
  statutKYC: KYCStatus;
  statutCompte: AccountStatus;
  dateInscription: string;
  derniereConnexion: string;
  photo?: string;
  specialite?: string;
  volumeMensuel?: string;
  rating?: number;
  totalTransactions?: number;
}

// Données mockées avec noms sénégalais
const users: User[] = [
  {
    id: "U001",
    nom: "Amadou Diallo",
    email: "amadou.diallo@gmail.com",
    telephone: "+221 77 123 4567",
    localisation: "Dakar, Sénégal",
    types: ["acheteur", "vendeur"],
    statutKYC: "Validé",
    statutCompte: "Actif",
    dateInscription: "15 Jan, 2025",
    derniereConnexion: "Il y a 2h",
    photo: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=2",
    specialite: "Élevage de poulets",
    volumeMensuel: "500 têtes/mois",
    rating: 4.8,
    totalTransactions: 156
  },
  {
    id: "U002",
    nom: "Fatou Sall",
    email: "fatou.sall@gmail.com",
    telephone: "+221 76 987 6543",
    localisation: "Thiès, Sénégal",
    types: ["acheteur"],
    statutKYC: "En attente",
    statutCompte: "Actif",
    dateInscription: "12 Jan, 2025",
    derniereConnexion: "Il y a 1j",
    photo: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=2",
    volumeMensuel: "200 poulets/mois",
    rating: 4.2,
    totalTransactions: 23
  },
  {
    id: "U003",
    nom: "Dr. Moussa Kane",
    email: "moussa.kane@gmail.com",
    telephone: "+221 70 555 1234",
    localisation: "Kaolack, Sénégal",
    types: ["veterinaire"],
    statutKYC: "Validé",
    statutCompte: "Actif",
    dateInscription: "08 Jan, 2025",
    derniereConnexion: "Il y a 30min",
    photo: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=2",
    specialite: "Pathologie aviaire",
    rating: 4.9,
    totalTransactions: 89
  },
  {
    id: "U004",
    nom: "Ibrahima Ba",
    email: "ibrahima.ba@gmail.com",
    telephone: "+221 78 444 5678",
    localisation: "Rufisque, Sénégal",
    types: ["vendeur"],
    statutKYC: "Validé",
    statutCompte: "Actif",
    dateInscription: "05 Jan, 2025",
    derniereConnexion: "Il y a 4h",
    photo: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=2",
    specialite: "Production d'œufs",
    volumeMensuel: "300 pondeuses",
    rating: 4.6,
    totalTransactions: 78
  },
  {
    id: "U005",
    nom: "Aïcha Ndiaye",
    email: "aicha.ndiaye@gmail.com",
    telephone: "+221 77 333 9876",
    localisation: "Saint-Louis, Sénégal",
    types: ["acheteur", "vendeur"],
    statutKYC: "Validé",
    statutCompte: "Actif",
    dateInscription: "03 Jan, 2025",
    derniereConnexion: "Il y a 1h",
    photo: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=2",
    specialite: "Commerce avicole",
    volumeMensuel: "800 têtes/mois",
    rating: 4.7,
    totalTransactions: 234
  },
  {
    id: "U006",
    nom: "Ousmane Fall",
    email: "ousmane.fall@gmail.com",
    telephone: "+221 76 222 1111",
    localisation: "Ziguinchor, Sénégal",
    types: ["transporteur"],
    statutKYC: "Validé",
    statutCompte: "Actif",
    dateInscription: "01 Jan, 2025",
    derniereConnexion: "Il y a 6h",
    photo: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=2",
    specialite: "Transport frigorifique",
    rating: 4.5,
    totalTransactions: 145
  },
  {
    id: "U007",
    nom: "Mariama Sy",
    email: "mariama.sy@gmail.com",
    telephone: "+221 70 888 2222",
    localisation: "Diourbel, Sénégal",
    types: ["acheteur"],
    statutKYC: "Rejeté",
    statutCompte: "Suspendu",
    dateInscription: "28 Déc, 2024",
    derniereConnexion: "Il y a 3j",
    photo: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=2",
    volumeMensuel: "100 poulets/mois",
    rating: 3.8,
    totalTransactions: 12
  },
  {
    id: "U008",
    nom: "Cheikh Mbaye",
    email: "cheikh.mbaye@gmail.com",
    telephone: "+221 78 777 3333",
    localisation: "Louga, Sénégal",
    types: ["vendeur", "transporteur"],
    statutKYC: "Validé",
    statutCompte: "Actif",
    dateInscription: "25 Déc, 2024",
    derniereConnexion: "Il y a 5h",
    photo: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=2",
    specialite: "Élevage + Transport",
    volumeMensuel: "400 têtes/mois",
    rating: 4.4,
    totalTransactions: 67
  },
  {
    id: "U009",
    nom: "Khadija Diop",
    email: "khadija.diop@gmail.com",
    telephone: "+221 77 111 2222",
    localisation: "Mbour, Sénégal",
    types: ["acheteur"],
    statutKYC: "Validé",
    statutCompte: "Actif",
    dateInscription: "22 Déc, 2024",
    derniereConnexion: "Il y a 8h",
    volumeMensuel: "150 poulets/mois",
    rating: 4.3,
    totalTransactions: 34
  },
  {
    id: "U010",
    nom: "Dr. Bineta Cissé",
    email: "bineta.cisse@gmail.com",
    telephone: "+221 76 444 5555",
    localisation: "Tambacounda, Sénégal",
    types: ["veterinaire"],
    statutKYC: "Validé",
    statutCompte: "Actif",
    dateInscription: "20 Déc, 2024",
    derniereConnexion: "Il y a 2h",
    photo: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=2",
    specialite: "Médecine préventive",
    rating: 4.8,
    totalTransactions: 56
  }
];

export default function UsersPage() {
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedKYCStatus, setSelectedKYCStatus] = useState("");
  const [selectedAccountStatus, setSelectedAccountStatus] = useState("");
  const [activeTab, setActiveTab] = useState("tous");

  // Filtrage des utilisateurs selon le tab actif
  const getFilteredUsers = () => {
    let filtered = users;

    // Filtrage par tab
    switch (activeTab) {
      case "producteurs":
        filtered = users.filter(user => user.types.includes("vendeur"));
        break;
      case "acheteurs":
        filtered = users.filter(user => user.types.includes("acheteur"));
        break;
      case "veterinaires":
        filtered = users.filter(user => user.types.includes("veterinaire"));
        break;
      case "transporteurs":
        filtered = users.filter(user => user.types.includes("transporteur"));
        break;
      case "mixtes":
        filtered = users.filter(user => user.types.length > 1);
        break;
      default:
        filtered = users;
    }

    // Filtrage par recherche
    if (searchTerm) {
      filtered = filtered.filter(user =>
        user.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.telephone.includes(searchTerm)
      );
    }

    return filtered;
  };

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedUsers(getFilteredUsers().map(u => u.id));
    } else {
      setSelectedUsers([]);
    }
  };

  const handleSelectUser = (userId: string, checked: boolean) => {
    if (checked) {
      setSelectedUsers([...selectedUsers, userId]);
    } else {
      setSelectedUsers(selectedUsers.filter(id => id !== userId));
    }
  };

  const getTypesBadges = (types: UserType[]) => {
    const badgeColors = {
      acheteur: "bg-blue-500 text-white",
      vendeur: "bg-emerald-500 text-white",
      veterinaire: "bg-purple-500 text-white",
      transporteur: "bg-orange-500 text-white"
    };

    const typeLabels = {
      acheteur: "Acheteur",
      vendeur: "Vendeur",
      veterinaire: "Vétérinaire",
      transporteur: "Transporteur"
    };

    return types.map(type => (
      <Badge key={type} className={`${badgeColors[type]} hover:${badgeColors[type]} text-xs mr-1 px-1 py-0.5 h-5`}>
        {typeLabels[type]}
      </Badge>
    ));
  };

  const getKYCBadge = (status: KYCStatus) => {
    const colors = {
      "Validé": "bg-emerald-500 text-white",
      "En attente": "bg-orange-500 text-white",
      "Rejeté": "bg-red-500 text-white"
    };
    return <Badge className={`${colors[status]} hover:${colors[status]} text-xs px-1 py-0.5 h-5`}>{status}</Badge>;
  };

  const getAccountStatusBadge = (status: AccountStatus) => {
    const colors = {
      "Actif": "bg-emerald-500 text-white",
      "Suspendu": "bg-red-500 text-white",
      "Inactif": "bg-gray-500 text-white"
    };
    return <Badge className={`${colors[status]} hover:${colors[status]} text-xs px-1 py-0.5 h-5`}>{status}</Badge>;
  };

  const getInitials = (nom: string) => {
    return nom.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const filteredUsers = getFilteredUsers();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Utilisateurs</h1>
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm" className="text-gray-600">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button variant="outline" size="sm" className="text-gray-600">
            <Upload className="h-4 w-4 mr-2" />
            Import
          </Button>
        </div>
      </div>

      {/* Filtres */}
      <div className="bg-white rounded-lg border p-4">
        <div className="flex items-center space-x-4 mb-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search by name/email/phone"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <Select value={selectedRegion} onValueChange={setSelectedRegion}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Région" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Toutes régions</SelectItem>
              <SelectItem value="dakar">Dakar</SelectItem>
              <SelectItem value="thies">Thiès</SelectItem>
              <SelectItem value="kaolack">Kaolack</SelectItem>
              <SelectItem value="saint-louis">Saint-Louis</SelectItem>
              <SelectItem value="ziguinchor">Ziguinchor</SelectItem>
            </SelectContent>
          </Select>

          <Select value={selectedKYCStatus} onValueChange={setSelectedKYCStatus}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Statut KYC" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tous statuts</SelectItem>
              <SelectItem value="valide">Validé</SelectItem>
              <SelectItem value="attente">En attente</SelectItem>
              <SelectItem value="rejete">Rejeté</SelectItem>
            </SelectContent>
          </Select>

          <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">
            Filter
          </Button>
          <Button variant="outline">
            Reset
          </Button>
        </div>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="tous">Tous ({users.length})</TabsTrigger>
          <TabsTrigger value="producteurs">Producteurs ({users.filter(u => u.types.includes("vendeur")).length})</TabsTrigger>
          <TabsTrigger value="acheteurs">Acheteurs ({users.filter(u => u.types.includes("acheteur")).length})</TabsTrigger>
          <TabsTrigger value="veterinaires">Vétérinaires ({users.filter(u => u.types.includes("veterinaire")).length})</TabsTrigger>
          <TabsTrigger value="transporteurs">Transporteurs ({users.filter(u => u.types.includes("transporteur")).length})</TabsTrigger>
          <TabsTrigger value="mixtes">Mixtes ({users.filter(u => u.types.length > 1).length})</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="mt-6">
          {/* Tableau Utilisateurs */}
          <div className="bg-white rounded-lg border">
            <div className="overflow-hidden">
              <Table>
              <TableHeader>
                <TableRow className="border-gray-100 h-10">
                  <TableHead className="w-8">
                    <Checkbox
                      checked={selectedUsers.length === filteredUsers.length && filteredUsers.length > 0}
                      onCheckedChange={handleSelectAll}
                    />
                  </TableHead>
                  <TableHead className="font-medium text-gray-600 w-32">UTILISATEUR</TableHead>
                  <TableHead className="font-medium text-gray-600 w-24">TÉLÉPHONE</TableHead>
                  <TableHead className="font-medium text-gray-600 w-32">EMAIL</TableHead>
                  <TableHead className="font-medium text-gray-600 w-24">LOCALISATION</TableHead>
                  <TableHead className="font-medium text-gray-600 w-20">TYPE(S)</TableHead>
                  <TableHead className="font-medium text-gray-600 w-16">KYC</TableHead>
                  <TableHead className="font-medium text-gray-600 w-16">STATUT</TableHead>
                  <TableHead className="font-medium text-gray-600 w-20">INSCRIPTION</TableHead>
                  <TableHead className="font-medium text-gray-600 w-20">ACTIONS</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUsers.map((user) => (
                  <TableRow key={user.id} className="border-gray-50 hover:bg-gray-50/50 h-12">
                    <TableCell>
                      <Checkbox
                        checked={selectedUsers.includes(user.id)}
                        onCheckedChange={(checked) => handleSelectUser(user.id, checked as boolean)}
                      />
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={user.photo} alt={user.nom} />
                          <AvatarFallback className="bg-emerald-100 text-emerald-700 text-xs font-medium">
                            {getInitials(user.nom)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium text-gray-900 text-sm">{user.nom}</div>
                          <div className="text-xs text-gray-500 truncate">{user.derniereConnexion}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-gray-900 text-sm">{user.telephone}</TableCell>
                    <TableCell className="text-gray-600 text-sm truncate">{user.email}</TableCell>
                    <TableCell className="text-gray-600 text-sm">{user.localisation}</TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {getTypesBadges(user.types)}
                      </div>
                    </TableCell>
                    <TableCell>{getKYCBadge(user.statutKYC)}</TableCell>
                    <TableCell>{getAccountStatusBadge(user.statutCompte)}</TableCell>
                    <TableCell className="text-gray-600 text-sm">{user.dateInscription}</TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-1">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-6 w-6">
                              <Eye className="h-3 w-3 text-gray-500" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl">
                            <DialogHeader>
                              <DialogTitle>Profil de {user.nom}</DialogTitle>
                            </DialogHeader>
                            <div className="space-y-6">
                              <div className="flex items-center space-x-4">
                                <Avatar className="h-16 w-16">
                                  <AvatarImage src={user.photo} alt={user.nom} />
                                  <AvatarFallback className="bg-emerald-100 text-emerald-700 text-lg font-medium">
                                    {getInitials(user.nom)}
                                  </AvatarFallback>
                                </Avatar>
                                <div>
                                  <h3 className="text-xl font-semibold">{user.nom}</h3>
                                  <div className="flex flex-wrap gap-1 mt-2">
                                    {getTypesBadges(user.types)}
                                  </div>
                                  {user.rating && (
                                    <div className="flex items-center mt-2">
                                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                                      <span className="ml-1 text-sm font-medium">{user.rating}</span>
                                      <span className="ml-1 text-sm text-gray-500">({user.totalTransactions} transactions)</span>
                                    </div>
                                  )}
                                </div>
                              </div>
                              
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <h4 className="font-medium text-gray-900 mb-2">Informations de contact</h4>
                                  <div className="space-y-2 text-sm">
                                    <div><span className="text-gray-500">Email:</span> {user.email}</div>
                                    <div><span className="text-gray-500">Téléphone:</span> {user.telephone}</div>
                                    <div><span className="text-gray-500">Localisation:</span> {user.localisation}</div>
                                  </div>
                                </div>
                                
                                <div>
                                  <h4 className="font-medium text-gray-900 mb-2">Statuts</h4>
                                  <div className="space-y-2">
                                    <div className="flex items-center space-x-2">
                                      <span className="text-sm text-gray-500">KYC:</span>
                                      {getKYCBadge(user.statutKYC)}
                                    </div>
                                    <div className="flex items-center space-x-2">
                                      <span className="text-sm text-gray-500">Compte:</span>
                                      {getAccountStatusBadge(user.statutCompte)}
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {user.specialite && (
                                <div>
                                  <h4 className="font-medium text-gray-900 mb-2">Spécialité</h4>
                                  <p className="text-sm text-gray-600">{user.specialite}</p>
                                  {user.volumeMensuel && (
                                    <p className="text-sm text-gray-500 mt-1">Volume: {user.volumeMensuel}</p>
                                  )}
                                </div>
                              )}

                              <div className="flex space-x-3 pt-4 border-t">
                                <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600">
                                  <MessageSquare className="h-4 w-4 mr-2" />
                                  Contacter
                                </Button>
                                <Button size="sm" variant="outline">
                                  <History className="h-4 w-4 mr-2" />
                                  Historique
                                </Button>
                                <Button size="sm" variant="outline">
                                  <Shield className="h-4 w-4 mr-2" />
                                  Gérer KYC
                                </Button>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>

                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-6 w-6">
                              <ChevronDown className="h-3 w-3 text-gray-500" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Edit className="h-4 w-4 mr-2" />
                              Modifier profil
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Shield className="h-4 w-4 mr-2" />
                              Valider KYC
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <CheckCircle className="h-4 w-4 mr-2" />
                              Activer compte
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">
                              <XCircle className="h-4 w-4 mr-2" />
                              Suspendre
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            </div>

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
                <Button variant="ghost" size="sm">12</Button>
              </div>

              <Button variant="ghost" size="sm" className="text-gray-500">
                Next
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}