"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
  Eye,
  Edit,
} from "lucide-react";

// Données mockées avicoles
const categories = [
  {
    id: "75A9",
    icon: "🐔",
    name: "Poulets & Poussins",
    description: "Volailles vivantes pour élevage et consommation",
    published: true,
  },
  {
    id: "0C24",
    icon: "🥚",
    name: "Œufs & Reproduction",
    description: "Œufs à couver et reproduction avicole",
    published: true,
  },
  {
    id: "0BE8",
    icon: "🏠",
    name: "Équipements Élevage",
    description: "Cages, poulaillers et infrastructures",
    published: true,
  },
  {
    id: "0BC4",
    icon: "🍽️",
    name: "Mangeoires & Abreuvoirs",
    description: "Systèmes d'alimentation et d'abreuvement",
    published: true,
  },
  {
    id: "0BA0",
    icon: "🌾",
    name: "Aliments Volaille",
    description: "Aliments complets et compléments nutritionnels",
    published: true,
  },
  {
    id: "0B49",
    icon: "💉",
    name: "Vaccins & Soins",
    description: "Produits vétérinaires et de prévention",
    published: true,
  },
  {
    id: "0B0E",
    icon: "🧽",
    name: "Hygiène & Désinfection",
    description: "Produits de nettoyage et désinfection",
    published: true,
  },
  {
    id: "0A8A",
    icon: "⚡",
    name: "Équipements Électriques",
    description: "Couveuses, éclairage et ventilation",
    published: true,
  },
  {
    id: "0A6A",
    icon: "📦",
    name: "Conditionnement",
    description: "Emballages et transport des produits",
    published: true,
  },
  {
    id: "0A29",
    icon: "🚚",
    name: "Services Livraison",
    description: "Services de transport et logistique",
    published: true,
  },
  {
    id: "09C1",
    icon: "📚",
    name: "Formation & Conseil",
    description: "Guides et formations en aviculture",
    published: true,
  },
  {
    id: "0945",
    icon: "🔧",
    name: "Maintenance & Pièces",
    description: "Pièces détachées et maintenance équipements",
    published: true,
  },
];

export default function CategoriesPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [parentsOnly, setParentsOnly] = useState(false);

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedCategories(categories.map(c => c.id));
    } else {
      setSelectedCategories([]);
    }
  };

  const handleSelectCategory = (categoryId: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, categoryId]);
    } else {
      setSelectedCategories(selectedCategories.filter(id => id !== categoryId));
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-900">Category</h1>
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm" className="text-gray-600 h-8 px-3 text-xs">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button variant="outline" size="sm" className="text-gray-600 h-8 px-3 text-xs">
            <Upload className="h-4 w-4 mr-2" />
            Import
          </Button>
          <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-white h-8 px-3 text-xs">
            Bulk Action
          </Button>
          <Button size="sm" className="bg-pink-500 hover:bg-pink-600 text-white h-8 px-3 text-xs">
            <Trash2 className="h-4 w-4 mr-2" />
            Delete
          </Button>
          <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600 text-white h-8 px-3 text-xs">
            <Plus className="h-4 w-4 mr-2" />
            Add Category
          </Button>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg border p-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search by Category name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-8 text-xs"
              />
            </div>
            
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-white h-8 px-4 text-xs">
              Filter
            </Button>
            <Button variant="outline" className="h-8 px-4 text-xs">
              Reset
            </Button>
          </div>

          {/* Parents Only Toggle */}
          <div className="flex items-center space-x-3">
            <label className="text-xs font-medium text-gray-700">Parents Only</label>
            <Switch
              checked={parentsOnly}
              onCheckedChange={setParentsOnly}
              className="data-[state=checked]:bg-emerald-500 scale-75"
            />
          </div>
        </div>
      </div>

      {/* Categories Table */}
      <div className="bg-white rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow className="border-gray-100 bg-gray-50 h-10">
              <TableHead className="w-12">
                <Checkbox
                  checked={selectedCategories.length === categories.length}
                  onCheckedChange={handleSelectAll}
                />
              </TableHead>
              <TableHead className="font-bold text-gray-900 text-xs uppercase">ID</TableHead>
              <TableHead className="font-bold text-gray-900 text-xs uppercase">ICON</TableHead>
              <TableHead className="font-bold text-gray-900 text-xs uppercase">NAME</TableHead>
              <TableHead className="font-bold text-gray-900 text-xs uppercase">DESCRIPTION</TableHead>
              <TableHead className="font-bold text-gray-900 text-xs uppercase">PUBLISHED</TableHead>
              <TableHead className="font-bold text-gray-900 text-xs uppercase">ACTIONS</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {categories.map((category) => (
              <TableRow key={category.id} className="border-gray-50 hover:bg-gray-50/50 h-12">
                <TableCell>
                  <Checkbox
                    checked={selectedCategories.includes(category.id)}
                    onCheckedChange={(checked) => handleSelectCategory(category.id, checked as boolean)}
                  />
                </TableCell>
                <TableCell className="text-gray-900 text-xs font-bold">
                  {category.id}
                </TableCell>
                <TableCell>
                  <div className="w-6 h-6 flex items-center justify-center text-lg">
                    {category.icon}
                  </div>
                </TableCell>
                <TableCell className="text-gray-900 text-xs whitespace-nowrap">
                  {category.name}
                </TableCell>
                <TableCell className="text-gray-900 text-xs max-w-xs">
                  {category.description}
                </TableCell>
                <TableCell>
                  <Switch
                    checked={category.published}
                    className="data-[state=checked]:bg-emerald-500 scale-75"
                  />
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="icon" className="h-6 w-6">
                      <Eye className="h-4 w-4 text-gray-500" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-6 w-6">
                      <Edit className="h-4 w-4 text-gray-500" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-6 w-6">
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