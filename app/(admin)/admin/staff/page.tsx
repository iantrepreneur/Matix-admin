"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
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
  Search,
  Plus,
  Eye,
  Edit,
  Trash2,
} from "lucide-react";

// Données mockées équipe Matix
const staffMembers = [
  {
    id: 1,
    name: "Amadou Diallo",
    email: "amadou@matix.sn",
    contact: "+221 77 123 4567",
    joiningDate: "15 Jan, 2024",
    role: "CEO",
    status: "Active",
    published: true,
    photo: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=2"
  },
  {
    id: 2,
    name: "Fatou Sall",
    email: "fatou@matix.sn",
    contact: "+221 76 987 6543",
    joiningDate: "20 Jan, 2024",
    role: "Directrice Tech",
    status: "Active",
    published: true,
    photo: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=2"
  },
  {
    id: 3,
    name: "Ibrahima Ba",
    email: "ibrahima@matix.sn",
    contact: "+221 78 444 5678",
    joiningDate: "1 Fév, 2024",
    role: "Développeur Senior",
    status: "Active",
    published: true,
    photo: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=2"
  },
  {
    id: 4,
    name: "Aïcha Ndiaye",
    email: "aicha@matix.sn",
    contact: "+221 77 333 9876",
    joiningDate: "15 Fév, 2024",
    role: "UX/UI Designer",
    status: "Active",
    published: true,
    photo: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=2"
  },
  {
    id: 5,
    name: "Ousmane Fall",
    email: "ousmane@matix.sn",
    contact: "+221 76 222 1111",
    joiningDate: "1 Mar, 2024",
    role: "DevOps Engineer",
    status: "Inactive",
    published: false,
    photo: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=2"
  },
  {
    id: 6,
    name: "Mariama Sy",
    email: "mariama@matix.sn",
    contact: "+221 70 888 2222",
    joiningDate: "15 Mar, 2024",
    role: "Support Client",
    status: "Active",
    published: true,
    photo: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=2"
  },
  {
    id: 7,
    name: "Cheikh Mbaye",
    email: "cheikh@matix.sn",
    contact: "+221 78 777 3333",
    joiningDate: "1 Avr, 2024",
    role: "Community Manager",
    status: "Active",
    published: true,
    photo: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=2"
  },
  {
    id: 8,
    name: "Bineta Diop",
    email: "bineta@matix.sn",
    contact: "+221 77 555 4444",
    joiningDate: "15 Avr, 2024",
    role: "Assistante Admin",
    status: "Inactive",
    published: false,
    photo: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=2"
  },
  {
    id: 9,
    name: "Modou Gueye",
    email: "modou@matix.sn",
    contact: "+221 76 111 2222",
    joiningDate: "1 Mai, 2024",
    role: "Responsable Partenariats",
    status: "Active",
    published: true,
    photo: "https://images.pexels.com/photos/1300355/pexels-photo-1300355.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=2"
  },
  {
    id: 10,
    name: "Khadija Thiam",
    email: "khadija@matix.sn",
    contact: "+221 77 888 9999",
    joiningDate: "15 Mai, 2024",
    role: "Analyste Data",
    status: "Active",
    published: true,
    photo: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=2"
  }
];

export default function StaffPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRole, setSelectedRole] = useState("");

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const getStatusBadge = (status: string) => {
    return status === "Active" ? (
      <Badge className="bg-emerald-500 text-white hover:bg-emerald-500">Active</Badge>
    ) : (
      <Badge className="bg-orange-500 text-white hover:bg-orange-500">Inactive</Badge>
    );
  };

  const filteredStaff = staffMembers.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.contact.includes(searchTerm);
    const matchesRole = !selectedRole || selectedRole === "all" || member.role === selectedRole;
    return matchesSearch && matchesRole;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Notre Équipe</h1>
        <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">
          <Plus className="h-4 w-4 mr-2" />
          Ajouter Membre
        </Button>
      </div>

      {/* Filtres */}
      <div className="bg-white rounded-lg border p-4">
        <div className="flex items-center space-x-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search by name/email/phone"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <Select value={selectedRole} onValueChange={setSelectedRole}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Rôle Équipe" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tous les rôles</SelectItem>
              <SelectItem value="CEO">CEO</SelectItem>
              <SelectItem value="Directrice Tech">Directrice Tech</SelectItem>
              <SelectItem value="Développeur Senior">Développeur Senior</SelectItem>
              <SelectItem value="UX/UI Designer">UX/UI Designer</SelectItem>
              <SelectItem value="DevOps Engineer">DevOps Engineer</SelectItem>
              <SelectItem value="Support Client">Support Client</SelectItem>
              <SelectItem value="Community Manager">Community Manager</SelectItem>
              <SelectItem value="Assistante Admin">Assistante Admin</SelectItem>
              <SelectItem value="Responsable Partenariats">Responsable Partenariats</SelectItem>
              <SelectItem value="Analyste Data">Analyste Data</SelectItem>
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

      {/* Tableau Staff */}
      <div className="bg-white rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow className="border-gray-100">
              <TableHead className="font-bold text-gray-900">NAME</TableHead>
              <TableHead className="font-bold text-gray-900">EMAIL</TableHead>
              <TableHead className="font-bold text-gray-900">CONTACT</TableHead>
              <TableHead className="font-bold text-gray-900">JOINING DATE</TableHead>
              <TableHead className="font-bold text-gray-900">ROLE</TableHead>
              <TableHead className="font-bold text-gray-900">STATUS</TableHead>
              <TableHead className="font-bold text-gray-900">PUBLISHED</TableHead>
              <TableHead className="font-bold text-gray-900">ACTIONS</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredStaff.map((member) => (
              <TableRow key={member.id} className="border-gray-50 hover:bg-gray-50/50">
                <TableCell>
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={member.photo} alt={member.name} />
                      <AvatarFallback className="bg-emerald-100 text-emerald-700 text-sm font-medium">
                        {getInitials(member.name)}
                      </AvatarFallback>
                    </Avatar>
                    <span className="font-medium text-gray-900">{member.name}</span>
                  </div>
                </TableCell>
                <TableCell className="text-gray-600">{member.email}</TableCell>
                <TableCell className="text-gray-600">{member.contact}</TableCell>
                <TableCell className="text-gray-600">{member.joiningDate}</TableCell>
                <TableCell className="font-medium text-gray-900">{member.role}</TableCell>
                <TableCell>{getStatusBadge(member.status)}</TableCell>
                <TableCell>
                  <Switch
                    checked={member.published}
                    className="data-[state=checked]:bg-emerald-500 data-[state=unchecked]:bg-red-500"
                  />
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Eye className="h-4 w-4 text-gray-500" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-md">
                        <DialogHeader>
                          <DialogTitle>Détails - {member.name}</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div className="flex items-center space-x-4">
                            <Avatar className="h-16 w-16">
                              <AvatarImage src={member.photo} alt={member.name} />
                              <AvatarFallback className="bg-emerald-100 text-emerald-700 text-lg font-medium">
                                {getInitials(member.name)}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <h3 className="text-lg font-semibold">{member.name}</h3>
                              <p className="text-gray-600">{member.role}</p>
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <div><span className="font-medium">Email:</span> {member.email}</div>
                            <div><span className="font-medium">Contact:</span> {member.contact}</div>
                            <div><span className="font-medium">Date d'arrivée:</span> {member.joiningDate}</div>
                            <div className="flex items-center space-x-2">
                              <span className="font-medium">Statut:</span>
                              {getStatusBadge(member.status)}
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>

                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Edit className="h-4 w-4 text-gray-500" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Trash2 className="h-4 w-4 text-gray-500" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}