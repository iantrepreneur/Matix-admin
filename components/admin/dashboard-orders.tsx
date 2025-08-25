"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Printer as Print, Eye, ChevronDown, ChevronLeft, ChevronRight, Search } from "lucide-react";

const orders = [
  {
    invoiceNo: "AV2190",
    orderTime: "20 Aug, 2025 7:09 PM",
    customerName: "Ferme Diallo",
    method: "Cash",
    amount: "850,000 FCFA",
    status: "En Cours",
    statusColor: "bg-pink-500",
  },
  {
    invoiceNo: "AV2169",
    orderTime: "20 Aug, 2025 5:10 PM",
    customerName: "Elevage Ndiaye",
    method: "Mobile Money",
    amount: "425,000 FCFA",
    status: "En Attente",
    statusColor: "bg-orange-500",
  },
  {
    invoiceNo: "AV2168",
    orderTime: "20 Aug, 2025 5:09 PM",
    customerName: "Poulailler Sarr",
    method: "Cash",
    amount: "680,000 FCFA",
    status: "En Cours",
    statusColor: "bg-pink-500",
  },
  {
    invoiceNo: "AV2172",
    orderTime: "20 Aug, 2025 5:06 PM",
    customerName: "Aviculture Mbaye",
    method: "Mobile Money",
    amount: "320,000 FCFA",
    status: "Livrée",
    statusColor: "bg-emerald-500",
  },
  {
    invoiceNo: "AV2175",
    orderTime: "20 Aug, 2025 5:04 PM",
    customerName: "Ferme Sow",
    method: "Cash",
    amount: "180,000 FCFA",
    status: "Livrée",
    statusColor: "bg-emerald-500",
  },
  {
    invoiceNo: "AV2181",
    orderTime: "20 Aug, 2025 4:42 PM",
    customerName: "Elevage Thiam",
    method: "Mobile Money",
    amount: "520,000 FCFA",
    status: "En Attente",
    statusColor: "bg-orange-500",
  },
  {
    invoiceNo: "AV2189",
    orderTime: "20 Aug, 2025 9:59 AM",
    customerName: "Poulailler Fall",
    method: "Cash",
    amount: "95,000 FCFA",
    status: "Annulée",
    statusColor: "bg-red-500",
  },
  {
    invoiceNo: "AV2185",
    orderTime: "20 Aug, 2025 5:55 AM",
    customerName: "Ferme Ba",
    method: "Cash",
    amount: "750,000 FCFA",
    status: "Livrée",
    statusColor: "bg-emerald-500",
  },
];

export function DashboardOrders() {
  return (
    <Card className="mt-8 border-0 shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-gray-900">Commandes Récentes</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-gray-100 bg-gray-50">
                <TableHead className="font-bold text-gray-900 text-sm uppercase">N° FACTURE</TableHead>
                <TableHead className="font-bold text-gray-900 text-sm uppercase">DATE COMMANDE</TableHead>
                <TableHead className="font-bold text-gray-900 text-sm uppercase">CLIENT</TableHead>
                <TableHead className="font-bold text-gray-900 text-sm uppercase">MÉTHODE</TableHead>
                <TableHead className="font-bold text-gray-900 text-sm uppercase">MONTANT</TableHead>
                <TableHead className="font-bold text-gray-900 text-sm uppercase">STATUS</TableHead>
                <TableHead className="font-bold text-gray-900 text-sm uppercase">ACTION</TableHead>
                <TableHead className="font-bold text-gray-900 text-sm uppercase">FACTURE</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order, index) => (
                <TableRow key={index} className="border-gray-100 hover:bg-gray-50">
                  <TableCell className="font-bold text-gray-900 text-sm">{order.invoiceNo}</TableCell>
                  <TableCell>
                    <div className="text-xs text-gray-900">{order.orderTime}</div>
                  </TableCell>
                  <TableCell className="font-medium text-gray-900 text-sm">{order.customerName}</TableCell>
                  <TableCell>
                    <span className="text-gray-900 font-bold text-sm">{order.method}</span>
                  </TableCell>
                  <TableCell className="font-bold text-gray-900 text-sm">{order.amount}</TableCell>
                  <TableCell>
                    <Badge className={`${order.statusColor} text-white hover:${order.statusColor} font-medium px-2 py-1 rounded-full text-xs`}>
                      {order.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="sm" className="h-8 px-3 text-sm font-medium">
                          <span>{order.status}</span>
                          <ChevronDown className="h-3 w-3 ml-1" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem className="font-medium">En Cours</DropdownMenuItem>
                        <DropdownMenuItem className="font-medium">En Attente</DropdownMenuItem>
                        <DropdownMenuItem className="font-medium">Livrée</DropdownMenuItem>
                        <DropdownMenuItem className="font-medium">Annulée</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-gray-100">
                        <Print className="h-4 w-4 text-gray-600" />
                      </Button>
                      <Link href={`/admin/invoice/${order.invoiceNo.replace('AV', '')}`}>
                        <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-gray-100">
                          <Search className="h-4 w-4 text-gray-600" />
                        </Button>
                      </Link>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
          <Button variant="ghost" size="sm" className="text-gray-600 font-medium">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Previous
          </Button>
          
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="bg-emerald-50 text-emerald-600 font-bold">1</Button>
            <Button variant="ghost" size="sm" className="font-medium">2</Button>
            <Button variant="ghost" size="sm" className="font-medium">3</Button>
            <span className="text-gray-400 font-medium">...</span>
            <Button variant="ghost" size="sm" className="font-medium">141</Button>
          </div>

          <Button variant="ghost" size="sm" className="text-gray-600 font-medium">
            Next
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}