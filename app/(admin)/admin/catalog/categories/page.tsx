"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
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
} from "@/components/ui/dialog";
import {
  Search,
  Download,
  Upload,
  Trash2,
  Plus,
  Eye,
  Edit,
  X,
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
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<any>(null);

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

  const handleEditCategory = (category: any) => {
    setSelectedCategory(category);
    setShowUpdateModal(true);
  };

  const handleViewCategory = (category: any) => {
    setSelectedCategory(category);
    setShowViewModal(true);
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
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-6 w-6"
                      onClick={() => handleViewCategory(category)}
                    >
                      <Eye className="h-4 w-4 text-gray-500" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-6 w-6"
                      onClick={() => handleEditCategory(category)}
                    >
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

      {/* Update Category Modal */}
      <Dialog open={showUpdateModal} onOpenChange={setShowUpdateModal}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader className="flex flex-row items-center justify-between">
            <div>
              <DialogTitle className="text-xl font-semibold">Update Category</DialogTitle>
              <p className="text-sm text-gray-600 mt-1">Updated your Product category and necessary information from here</p>
            </div>
            <div className="flex items-center space-x-2">
              <select className="border rounded px-2 py-1 text-sm">
                <option>en</option>
              </select>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setShowUpdateModal(false)}
                className="text-gray-500"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          </DialogHeader>
          
          <div className="space-y-6 mt-6">
            {/* Form Fields */}
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <Textarea 
                  defaultValue="Fish & Meat"
                  className="w-full h-24 resize-none"
                />
              </div>
                </label>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Parent Category
                </label>
                <div className="flex items-center space-x-2 mb-2">
                  <Input 
                    defaultValue="Home"
                    className="w-full"
                  />
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <span className="text-blue-500">+</span>
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">🏠 Home</span>
                </div>
              </div>
                <Input 
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category Image
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center mb-4">
                  <div className="text-emerald-500 mb-2">
                    <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                  </div>
                  <p className="text-gray-600 font-medium">Drag your images here</p>
                  <p className="text-gray-400 text-sm">(Only *.jpeg, *.webp and *.png images will be accepted)</p>
                </div>
                
                {/* Current Image Preview */}
                <div className="relative inline-block">
                  <img 
                    src="https://images.pexels.com/photos/1300355/pexels-photo-1300355.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2" 
                    alt="Category" 
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <button className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs">
                    ×
                  </button>
                </div>
              </div>
                  defaultValue="Fish & Meat"
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-gray-700">
                  Published
                </label>
                <div className="flex items-center space-x-2">
                  <Button 
                    size="sm" 
                    className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-1 rounded-full text-xs"
                  >
                    Yes
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="px-4 py-1 rounded-full text-xs"
                  >
                    No
                  </Button>
                </div>
              </div>
            </div>
                  className="w-full"
            {/* Footer Buttons */}
            <div className="flex justify-between pt-6 border-t">
              <Button 
                variant="outline"
                onClick={() => setShowUpdateModal(false)}
                className="px-8"
              >
                Cancel
              </Button>
              <Button 
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-8"
                onClick={() => setShowUpdateModal(false)}
              >
                Update Category
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
                />
      {/* View Category Modal */}
      <Dialog open={showViewModal} onOpenChange={setShowViewModal}>
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
          <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Category</h1>
                <div className="flex items-center space-x-2 text-sm text-gray-600 mt-1">
                  <span>Categories</span>
                  <span>></span>
                  <span className="text-blue-600">Fish & Meat</span>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600 text-white">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Category
                </Button>
                <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-white">
                  Bulk Action
                </Button>
                <Button size="sm" className="bg-pink-500 hover:bg-pink-600 text-white">
                  Delete
                </Button>
              </div>
            </div>
              </div>
            {/* Sub-categories Table */}
            <div className="bg-white rounded-lg border">
              <Table>
                <TableHeader>
                  <TableRow className="border-gray-100 bg-gray-50 h-10">
                    <TableHead className="w-12">
                      <Checkbox />
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
                  <TableRow className="border-gray-50 hover:bg-gray-50/50 h-12">
                    <TableCell>
                      <Checkbox />
                    </TableCell>
                    <TableCell className="text-gray-900 text-xs font-bold">
                      0C34
                    </TableCell>
                    <TableCell>
                      <div className="w-6 h-6 flex items-center justify-center text-lg">
                        🐟
                      </div>
                    </TableCell>
                    <TableCell className="text-gray-900 text-xs">
                      Fish
                    </TableCell>
                    <TableCell className="text-gray-900 text-xs">
                      Fish
                    </TableCell>
                    <TableCell>
                      <Switch
                        checked={true}
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
                  <TableRow className="border-gray-50 hover:bg-gray-50/50 h-12">
                    <TableCell>
                      <Checkbox />
                    </TableCell>
                    <TableCell className="text-gray-900 text-xs font-bold">
                      0C2C
                    </TableCell>
                    <TableCell>
                      <div className="w-6 h-6 flex items-center justify-center text-lg">
                        🥩
                      </div>
                    </TableCell>
                    <TableCell className="text-gray-900 text-xs">
                      Meat
                    </TableCell>
                    <TableCell className="text-gray-900 text-xs">
                      Meat
                    </TableCell>
                    <TableCell>
                      <Switch
                        checked={true}
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
                </TableBody>
              </Table>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}