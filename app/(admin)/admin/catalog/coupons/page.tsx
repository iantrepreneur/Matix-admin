"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Search,
  Download,
  Upload,
  Trash2,
  Plus,
  Edit,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// Données mockées avicoles
const coupons = [
  {
    id: 1,
    icon: "🎁",
    campaignName: "Promo Ramadan",
    code: "RAMADAN25",
    discount: "15%",
    published: true,
    startDate: "15 Mar, 2025",
    endDate: "15 Apr, 2025",
    status: "Active",
    statusColor: "bg-emerald-500",
  },
  {
    id: 2,
    icon: "🐔",
    campaignName: "Nouveau Client Poulets",
    code: "NEWBIRD50",
    discount: "5,000 FCFA",
    published: true,
    startDate: "01 Jan, 2025",
    endDate: "31 Dec, 2025",
    status: "Active",
    statusColor: "bg-emerald-500",
  },
  {
    id: 3,
    icon: "🥚",
    campaignName: "Promotion Poussins",
    code: "POUSSIN20",
    discount: "20%",
    published: false,
    startDate: "10 Feb, 2025",
    endDate: "28 Feb, 2025",
    status: "Expired",
    statusColor: "bg-red-500",
  },
  {
    id: 4,
    icon: "🏠",
    campaignName: "Équipement Élevage",
    code: "EQUIPMT10",
    discount: "10%",
    published: true,
    startDate: "01 Mar, 2025",
    endDate: "30 Jun, 2025",
    status: "Active",
    statusColor: "bg-emerald-500",
  },
  {
    id: 5,
    icon: "🌾",
    campaignName: "Aliments Volume",
    code: "ALIMENT100",
    discount: "10,000 FCFA",
    published: true,
    startDate: "15 Jan, 2025",
    endDate: "15 Jul, 2025",
    status: "Active",
    statusColor: "bg-emerald-500",
  },
  {
    id: 6,
    icon: "💉",
    campaignName: "Vaccins Groupés",
    code: "VACCIN15",
    discount: "15%",
    published: true,
    startDate: "01 Feb, 2025",
    endDate: "31 Jan, 2026",
    status: "Active",
    statusColor: "bg-emerald-500",
  },
  {
    id: 7,
    icon: "🚚",
    campaignName: "Livraison Gratuite",
    code: "FREESHIP",
    discount: "100%",
    published: true,
    startDate: "01 Apr, 2025",
    endDate: "30 Apr, 2025",
    status: "Active",
    statusColor: "bg-emerald-500",
  },
  {
    id: 8,
    icon: "🎉",
    campaignName: "Fête Tabaski",
    code: "TABASKI30",
    discount: "30%",
    published: true,
    startDate: "01 Jun, 2025",
    endDate: "15 Jun, 2025",
    status: "Active",
    statusColor: "bg-emerald-500",
  },
  {
    id: 9,
    icon: "🔄",
    campaignName: "Client Fidèle",
    code: "LOYAL25",
    discount: "25%",
    published: true,
    startDate: "01 Jan, 2025",
    endDate: "31 Dec, 2025",
    status: "Active",
    statusColor: "bg-emerald-500",
  },
  {
    id: 10,
    icon: "⚡",
    campaignName: "Flash Weekend",
    code: "FLASH40",
    discount: "40%",
    published: false,
    startDate: "28 Feb, 2025",
    endDate: "02 Mar, 2025",
    status: "Expired",
    statusColor: "bg-red-500",
  },
];

export default function CouponsPage() {
  const [selectedCoupons, setSelectedCoupons] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedCoupons(coupons.map(c => c.id));
    } else {
      setSelectedCoupons([]);
    }
  };

  const handleSelectCoupon = (couponId: number, checked: boolean) => {
    if (checked) {
      setSelectedCoupons([...selectedCoupons, couponId]);
    } else {
      setSelectedCoupons(selectedCoupons.filter(id => id !== couponId));
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Coupon</h1>
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm" className="text-gray-600">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button variant="outline" size="sm" className="text-gray-600">
            <Upload className="h-4 w-4 mr-2" />
            Import
          </Button>
          <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-white">
            Bulk Action
          </Button>
          <Button size="sm" className="bg-pink-500 hover:bg-pink-600 text-white">
            <Trash2 className="h-4 w-4 mr-2" />
            Delete
          </Button>
          <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600 text-white">
            <Plus className="h-4 w-4 mr-2" />
            Add Coupon
          </Button>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg border p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search by coupon code/name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">
              Filter
            </Button>
            <Button variant="outline">
              Reset
            </Button>
          </div>
        </div>
      </div>

      {/* Coupons Table */}
      <div className="bg-white rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow className="border-gray-100">
              <TableHead className="w-12">
                <Checkbox
                  checked={selectedCoupons.length === coupons.length}
                  onCheckedChange={handleSelectAll}
                />
              </TableHead>
              <TableHead className="font-medium text-gray-600">CAMPAIGN NAME</TableHead>
              <TableHead className="font-medium text-gray-600">CODE</TableHead>
              <TableHead className="font-medium text-gray-600">DISCOUNT</TableHead>
              <TableHead className="font-medium text-gray-600">PUBLISHED</TableHead>
              <TableHead className="font-medium text-gray-600">START DATE</TableHead>
              <TableHead className="font-medium text-gray-600">END DATE</TableHead>
              <TableHead className="font-medium text-gray-600">STATUS</TableHead>
              <TableHead className="font-medium text-gray-600">ACTIONS</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {coupons.map((coupon) => (
              <TableRow key={coupon.id} className="border-gray-50 hover:bg-gray-50/50">
                <TableCell>
                  <Checkbox
                    checked={selectedCoupons.includes(coupon.id)}
                    onCheckedChange={(checked) => handleSelectCoupon(coupon.id, checked as boolean)}
                  />
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-xl">
                      {coupon.icon}
                    </div>
                    <span className="font-medium text-gray-900">{coupon.campaignName}</span>
                  </div>
                </TableCell>
                <TableCell className="font-medium text-gray-900">
                  {coupon.code}
                </TableCell>
                <TableCell className="font-medium text-gray-900">
                  {coupon.discount}
                </TableCell>
                <TableCell>
                  <Switch
                    checked={coupon.published}
                    className="data-[state=checked]:bg-emerald-500"
                  />
                </TableCell>
                <TableCell className="text-gray-600">
                  {coupon.startDate}
                </TableCell>
                <TableCell className="text-gray-600">
                  {coupon.endDate}
                </TableCell>
                <TableCell>
                  <Badge className={`${coupon.statusColor} text-white hover:${coupon.statusColor}`}>
                    {coupon.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
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
      </div>
    </div>
  );
}