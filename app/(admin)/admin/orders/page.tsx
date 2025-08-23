"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Search,
  Download,
  ChevronDown,
  Printer,
  Eye,
  ChevronLeft,
  ChevronRight,
  Calendar,
} from "lucide-react";

// Données mockées avicoles sénégalaises
const orders = [
  {
    invoiceNo: "12182",
    orderTime: "22 Aug, 2025 5:41 PM",
    customerName: "Amadou Diallo",
    method: "Cash",
    amount: "45,000 FCFA",
    status: "Processing",
    statusColor: "bg-pink-500",
  },
  {
    invoiceNo: "12195",
    orderTime: "22 Aug, 2025 9:01 AM",
    customerName: "Fatou Sall",
    method: "Mobile Money",
    amount: "25,000 FCFA",
    status: "Delivered",
    statusColor: "bg-emerald-500",
  },
  {
    invoiceNo: "12176",
    orderTime: "21 Aug, 2025 9:21 PM",
    customerName: "Moussa Kane",
    method: "Cash",
    amount: "35,000 FCFA",
    status: "Pending",
    statusColor: "bg-orange-500",
  },
  {
    invoiceNo: "12175",
    orderTime: "21 Aug, 2025 9:21 PM",
    customerName: "Ibrahima Ba",
    method: "Cash",
    amount: "55,000 FCFA",
    status: "Cancel",
    statusColor: "bg-red-500",
  },
  {
    invoiceNo: "12193",
    orderTime: "21 Aug, 2025 9:21 PM",
    customerName: "Aïcha Ndiaye",
    method: "Mobile Money",
    amount: "15,000 FCFA",
    status: "Pending",
    statusColor: "bg-orange-500",
  },
  {
    invoiceNo: "12186",
    orderTime: "21 Aug, 2025 3:58 PM",
    customerName: "Ousmane Fall",
    method: "Cash",
    amount: "75,000 FCFA",
    status: "Delivered",
    statusColor: "bg-emerald-500",
  },
  {
    invoiceNo: "12194",
    orderTime: "21 Aug, 2025 3:50 PM",
    customerName: "Mariama Sy",
    method: "Cash",
    amount: "28,000 FCFA",
    status: "Pending",
    statusColor: "bg-orange-500",
  },
  {
    invoiceNo: "12192",
    orderTime: "21 Aug, 2025 6:26 AM",
    customerName: "Cheikh Mbaye",
    method: "Mobile Money",
    amount: "42,000 FCFA",
    status: "Delivered",
    statusColor: "bg-emerald-500",
  },
  {
    invoiceNo: "12191",
    orderTime: "21 Aug, 2025 6:20 AM",
    customerName: "Bineta Diop",
    method: "Cash",
    amount: "18,000 FCFA",
    status: "Pending",
    statusColor: "bg-orange-500",
  },
  {
    invoiceNo: "12190",
    orderTime: "20 Aug, 2025 8:41 PM",
    customerName: "Lamine Sarr",
    method: "Cash",
    amount: "65,000 FCFA",
    status: "Pending",
    statusColor: "bg-orange-500",
  },
  {
    invoiceNo: "12189",
    orderTime: "20 Aug, 2025 7:45 PM",
    customerName: "Khadija Thiam",
    method: "Mobile Money",
    amount: "32,000 FCFA",
    status: "Delivered",
    statusColor: "bg-emerald-500",
  },
  {
    invoiceNo: "12188",
    orderTime: "20 Aug, 2025 5:09 PM",
    customerName: "Modou Gueye",
    method: "Cash",
    amount: "48,000 FCFA",
    status: "Processing",
    statusColor: "bg-pink-500",
  },
  {
    invoiceNo: "12187",
    orderTime: "20 Aug, 2025 4:42 PM",
    customerName: "Awa Diagne",
    method: "Cash",
    amount: "22,000 FCFA",
    status: "Delivered",
    statusColor: "bg-emerald-500",
  },
  {
    invoiceNo: "12185",
    orderTime: "20 Aug, 2025 5:55 AM",
    customerName: "Babacar Ndoye",
    method: "Mobile Money",
    amount: "38,000 FCFA",
    status: "Delivered",
    statusColor: "bg-emerald-500",
  },
  {
    invoiceNo: "12184",
    orderTime: "19 Aug, 2025 10:30 AM",
    customerName: "Seynabou Cissé",
    method: "Cash",
    amount: "52,000 FCFA",
    status: "Processing",
    statusColor: "bg-pink-500",
  },
];

export default function OrdersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedMethod, setSelectedMethod] = useState("");
  const [orderLimit, setOrderLimit] = useState("25");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Orders</h1>
        <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">
          <Download className="h-4 w-4 mr-2" />
          Download All Orders
        </Button>
      </div>

      {/* Filtres */}
      <div className="bg-white rounded-lg border p-6 space-y-4">
        {/* Ligne 1 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search by Customer"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <Select value={selectedStatus} onValueChange={setSelectedStatus}>
            <SelectTrigger>
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tous</SelectItem>
              <SelectItem value="processing">Processing</SelectItem>
              <SelectItem value="delivered">Delivered</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="cancel">Cancel</SelectItem>
            </SelectContent>
          </Select>

          <Select value={orderLimit} onValueChange={setOrderLimit}>
            <SelectTrigger>
              <SelectValue placeholder="Order limits" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="25">25</SelectItem>
              <SelectItem value="50">50</SelectItem>
              <SelectItem value="100">100</SelectItem>
            </SelectContent>
          </Select>

          <Select value={selectedMethod} onValueChange={setSelectedMethod}>
            <SelectTrigger>
              <SelectValue placeholder="Method" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Toutes méthodes</SelectItem>
              <SelectItem value="cash">Cash</SelectItem>
              <SelectItem value="mobile">Mobile Money</SelectItem>
              <SelectItem value="card">Carte bancaire</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Ligne 2 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
            <div className="relative">
              <Input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="pr-10"
              />
              <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">End Date</label>
            <div className="relative">
              <Input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="pr-10"
              />
              <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
          </div>

          <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">
            Filter
          </Button>

          <Button variant="outline">
            Reset
          </Button>
        </div>
      </div>

      {/* Tableau des commandes */}
      <div className="bg-white rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow className="border-gray-100">
              <TableHead className="font-medium text-gray-600">INVOICE NO</TableHead>
              <TableHead className="font-medium text-gray-600">ORDER TIME</TableHead>
              <TableHead className="font-medium text-gray-600">CUSTOMER NAME</TableHead>
              <TableHead className="font-medium text-gray-600">METHOD</TableHead>
              <TableHead className="font-medium text-gray-600">AMOUNT</TableHead>
              <TableHead className="font-medium text-gray-600">STATUS</TableHead>
              <TableHead className="font-medium text-gray-600">ACTION</TableHead>
              <TableHead className="font-medium text-gray-600">INVOICE</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order, index) => (
              <TableRow key={index} className="border-gray-50 hover:bg-gray-50/50">
                <TableCell className="font-medium text-gray-900">
                  {order.invoiceNo}
                </TableCell>
                <TableCell className="text-gray-600">
                  {order.orderTime}
                </TableCell>
                <TableCell className="font-medium text-gray-900">
                  {order.customerName}
                </TableCell>
                <TableCell className="text-gray-600">
                  {order.method}
                </TableCell>
                <TableCell className="font-medium text-gray-900">
                  {order.amount}
                </TableCell>
                <TableCell>
                  <Badge className={`${order.statusColor} text-white hover:${order.statusColor}`}>
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="h-8 px-2">
                        <span className="text-sm">{order.status}</span>
                        <ChevronDown className="h-3 w-3 ml-1" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Voir détails</DropdownMenuItem>
                      <DropdownMenuItem>Processing</DropdownMenuItem>
                      <DropdownMenuItem>Delivered</DropdownMenuItem>
                      <DropdownMenuItem>Pending</DropdownMenuItem>
                      <DropdownMenuItem>Cancel</DropdownMenuItem>
                      <DropdownMenuItem>Contacter client</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">Annuler commande</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Printer className="h-4 w-4 text-gray-500" />
                    </Button>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Eye className="h-4 w-4 text-gray-500" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle>Détails de la commande #{order.invoiceNo}</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-6">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <h4 className="font-medium text-gray-900 mb-2">Informations client</h4>
                              <div className="space-y-2 text-sm">
                                <div><span className="text-gray-500">Nom:</span> {order.customerName}</div>
                                <div><span className="text-gray-500">Téléphone:</span> +221 77 123 45 67</div>
                                <div><span className="text-gray-500">Adresse:</span> Dakar, Sénégal</div>
                              </div>
                            </div>
                            
                            <div>
                              <h4 className="font-medium text-gray-900 mb-2">Détails commande</h4>
                              <div className="space-y-2 text-sm">
                                <div><span className="text-gray-500">Date:</span> {order.orderTime}</div>
                                <div><span className="text-gray-500">Méthode:</span> {order.method}</div>
                                <div><span className="text-gray-500">Montant:</span> {order.amount}</div>
                                <div className="flex items-center space-x-2">
                                  <span className="text-gray-500">Statut:</span>
                                  <Badge className={`${order.statusColor} text-white hover:${order.statusColor}`}>
                                    {order.status}
                                  </Badge>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-medium text-gray-900 mb-2">Produits commandés</h4>
                            <div className="border rounded-lg p-4 space-y-2">
                              <div className="flex justify-between">
                                <span>10 Poulets fermiers</span>
                                <span>25,000 FCFA</span>
                              </div>
                              <div className="flex justify-between">
                                <span>5 kg Aliment ponte</span>
                                <span>15,000 FCFA</span>
                              </div>
                              <div className="flex justify-between">
                                <span>1 Mangeoire automatique</span>
                                <span>5,000 FCFA</span>
                              </div>
                              <div className="border-t pt-2 flex justify-between font-medium">
                                <span>Total</span>
                                <span>{order.amount}</span>
                              </div>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-medium text-gray-900 mb-2">Timeline de suivi</h4>
                            <div className="space-y-2 text-sm">
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                                <span>Commande passée - {order.orderTime}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                <span>En préparation - 22 Aug, 2025 6:00 PM</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                                <span>En livraison - En attente</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
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
            <Button variant="ghost" size="sm">57</Button>
          </div>

          <Button variant="ghost" size="sm" className="text-gray-500">
            Next
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </div>
    </div>
  );
}