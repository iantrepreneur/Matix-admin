"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
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
  Search,
  Download,
  Upload,
  Trash2,
  Plus,
  Eye,
  Edit,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

// Données mockées avicoles
const products = [
  {
    id: 1,
    name: "Poulet fermier race locale",
    category: "Poulets & Poussins",
    price: 15000,
    salePrice: 13500,
    stock: 45,
    status: "Selling",
    published: true,
    image: "https://images.pexels.com/photos/1300355/pexels-photo-1300355.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=2"
  },
  {
    id: 2,
    name: "Poussins pondeuses ISA Brown",
    category: "Poulets & Poussins",
    price: 2500,
    salePrice: 2200,
    stock: 120,
    status: "Selling",
    published: true,
    image: "https://images.pexels.com/photos/1300355/pexels-photo-1300355.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=2"
  },
  {
    id: 3,
    name: "Cage élevage 50 poules",
    category: "Matériel Avicole",
    price: 45000,
    salePrice: 42000,
    stock: 8,
    status: "Selling",
    published: true,
    image: "https://images.pexels.com/photos/1300355/pexels-photo-1300355.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=2"
  },
  {
    id: 4,
    name: "Mangeoire automatique 10L",
    category: "Matériel Avicole",
    price: 12000,
    salePrice: 11000,
    stock: 25,
    status: "Selling",
    published: true,
    image: "https://images.pexels.com/photos/1300355/pexels-photo-1300355.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=2"
  },
  {
    id: 5,
    name: "Abreuvoir siphoïde",
    category: "Matériel Avicole",
    price: 8500,
    salePrice: 7500,
    stock: 35,
    status: "Selling",
    published: true,
    image: "https://images.pexels.com/photos/1300355/pexels-photo-1300355.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=2"
  },
  {
    id: 6,
    name: "Vaccin Newcastle",
    category: "Vaccins & Soins",
    price: 5000,
    salePrice: 4500,
    stock: 50,
    status: "Selling",
    published: true,
    image: "https://images.pexels.com/photos/1300355/pexels-photo-1300355.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=2"
  },
  {
    id: 7,
    name: "Aliment ponte enrichi 25kg",
    category: "Aliments",
    price: 18000,
    salePrice: 16500,
    stock: 75,
    status: "Selling",
    published: true,
    image: "https://images.pexels.com/photos/1300355/pexels-photo-1300355.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=2"
  },
  {
    id: 8,
    name: "Couveuse automatique 100 œufs",
    category: "Matériel Avicole",
    price: 85000,
    salePrice: 80000,
    stock: 3,
    status: "Selling",
    published: true,
    image: "https://images.pexels.com/photos/1300355/pexels-photo-1300355.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=2"
  },
  {
    id: 9,
    name: "Poussin chair Cobb 500",
    category: "Poulets & Poussins",
    price: 3000,
    salePrice: 2800,
    stock: 200,
    status: "Selling",
    published: true,
    image: "https://images.pexels.com/photos/1300355/pexels-photo-1300355.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=2"
  },
  {
    id: 10,
    name: "Désinfectant élevage 5L",
    category: "Vaccins & Soins",
    price: 12500,
    salePrice: 11500,
    stock: 40,
    status: "Selling",
    published: true,
    image: "https://images.pexels.com/photos/1300355/pexels-photo-1300355.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=2"
  },
];

export default function ProductsPage() {
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [showAddProduct, setShowAddProduct] = useState(false);

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedProducts(products.map(p => p.id));
    } else {
      setSelectedProducts([]);
    }
  };

  const handleSelectProduct = (productId: number, checked: boolean) => {
    if (checked) {
      setSelectedProducts([...selectedProducts, productId]);
    } else {
      setSelectedProducts(selectedProducts.filter(id => id !== productId));
    }
  };

  const formatPrice = (price: number) => {
    return `${price.toLocaleString()} FCFA`;
  };

  if (showAddProduct) {
    return (
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Add Product</h1>
            <p className="text-sm text-gray-600 mt-1">Add your product and necessary information from here</p>
          </div>
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Does this product have variants?</span>
              <div className="flex items-center space-x-2">
                <Button size="sm" variant="outline" className="text-red-500 border-red-500">
                  No
                </Button>
              </div>
            </div>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setShowAddProduct(false)}
              className="text-gray-500"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-lg border p-6">
          <div className="mb-6">
            <h3 className="text-lg font-medium text-emerald-600 mb-4">Basic Info</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Product Title/Name
                </label>
                <Input placeholder="Product Title/Name" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Product Description
                </label>
                <textarea 
                  className="w-full h-32 p-3 border border-gray-300 rounded-md resize-none"
                  placeholder="Product Description"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Product Images
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <div className="text-emerald-500 mb-2">
                    <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                  </div>
                  <p className="text-gray-600 font-medium">Drag your images here</p>
                  <p className="text-gray-400 text-sm">(Only *.jpeg, *.webp and *.png images will be accepted)</p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Product SKU
                </label>
                <Input placeholder="Product SKU" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Product Barcode
                </label>
                <Input placeholder="Product Barcode" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="poulets">🏠 Poulets & Poussins</SelectItem>
                    <SelectItem value="materiel">Matériel Avicole</SelectItem>
                    <SelectItem value="vaccins">Vaccins & Soins</SelectItem>
                    <SelectItem value="aliments">Aliments</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Default Category
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Default Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="default">Default Category</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Product Price
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">FCFA</span>
                  <Input placeholder="0" className="pl-16" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sale Price
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">FCFA</span>
                  <Input placeholder="0" className="pl-16" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Product Quantity
                </label>
                <Input placeholder="0" type="number" />
              </div>
            </div>

            {/* Right Column - Preview */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="text-lg font-medium text-gray-900 mb-4">Preview</h4>
              <div className="text-gray-500 text-center py-8">
                Product preview will appear here
              </div>
            </div>
          </div>

          {/* Footer Buttons */}
          <div className="flex justify-end space-x-4 mt-8 pt-6 border-t">
            <Button 
              variant="outline" 
              onClick={() => setShowAddProduct(false)}
            >
              Cancel
            </Button>
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">
              Add Product
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-900">Products</h1>
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
          <Button 
            size="sm" 
            className="bg-emerald-500 hover:bg-emerald-600 text-white h-8 px-3 text-xs"
            onClick={() => setShowAddProduct(true)}
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Product
          </Button>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg border p-3">
        <div className="flex items-center space-x-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search Product"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-8 text-xs"
            />
          </div>
          
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-32 h-8 text-xs">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Toutes catégories</SelectItem>
              <SelectItem value="Poulets & Poussins">Poulets & Poussins</SelectItem>
              <SelectItem value="Matériel Avicole">Matériel Avicole</SelectItem>
              <SelectItem value="Vaccins & Soins">Vaccins & Soins</SelectItem>
              <SelectItem value="Aliments">Aliments</SelectItem>
            </SelectContent>
          </Select>

          <Select value={selectedPrice} onValueChange={setSelectedPrice}>
            <SelectTrigger className="w-24 h-8 text-xs">
              <SelectValue placeholder="Price" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tous prix</SelectItem>
              <SelectItem value="0-10000">0 - 10,000 FCFA</SelectItem>
              <SelectItem value="10000-25000">10,000 - 25,000 FCFA</SelectItem>
              <SelectItem value="25000-50000">25,000 - 50,000 FCFA</SelectItem>
              <SelectItem value="50000+">50,000+ FCFA</SelectItem>
            </SelectContent>
          </Select>

          <Button className="bg-emerald-500 hover:bg-emerald-600 text-white h-8 px-4 text-xs">
            Filter
          </Button>
          <Button variant="outline" className="h-8 px-4 text-xs">
            Reset
          </Button>
        </div>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow className="border-gray-100 bg-gray-50 h-10">
              <TableHead className="w-12">
                <Checkbox
                  checked={selectedProducts.length === products.length}
                  onCheckedChange={handleSelectAll}
                />
              </TableHead>
              <TableHead className="font-bold text-gray-900 text-xs uppercase">PRODUCT NAME</TableHead>
              <TableHead className="font-bold text-gray-900 text-xs uppercase">CATEGORY</TableHead>
              <TableHead className="font-bold text-gray-900 text-xs uppercase">PRICE</TableHead>
              <TableHead className="font-bold text-gray-900 text-xs uppercase">SALE PRICE</TableHead>
              <TableHead className="font-bold text-gray-900 text-xs uppercase">STOCK</TableHead>
              <TableHead className="font-bold text-gray-900 text-xs uppercase">STATUS</TableHead>
              <TableHead className="font-bold text-gray-900 text-xs uppercase">VIEW</TableHead>
              <TableHead className="font-bold text-gray-900 text-xs uppercase">PUBLISHED</TableHead>
              <TableHead className="font-bold text-gray-900 text-xs uppercase">ACTIONS</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id} className="border-gray-50 h-12">
                <TableCell>
                  <Checkbox
                    checked={selectedProducts.includes(product.id)}
                    onCheckedChange={(checked) => handleSelectProduct(product.id, checked as boolean)}
                  />
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-6 h-6 rounded object-cover flex-shrink-0"
                    />
                    <span className="text-gray-900 text-xs whitespace-nowrap">{product.name}</span>
                  </div>
                </TableCell>
                <TableCell className="text-gray-900 text-xs whitespace-nowrap">{product.category}</TableCell>
                <TableCell className="text-gray-900 text-xs font-bold whitespace-nowrap">
                  {formatPrice(product.price)}
                </TableCell>
                <TableCell className="text-gray-900 text-xs font-bold whitespace-nowrap">
                  {formatPrice(product.salePrice)}
                </TableCell>
                <TableCell className="text-gray-900 text-xs font-bold">{product.stock}</TableCell>
                <TableCell>
                  <Badge className="bg-emerald-500 text-white hover:bg-emerald-500 text-xs whitespace-nowrap h-6 px-2">
                    {product.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon" className="h-6 w-6">
                    <Eye className="h-4 w-4 text-gray-500" />
                  </Button>
                </TableCell>
                <TableCell>
                  <Switch
                    checked={product.published}
                    className="data-[state=checked]:bg-emerald-500 scale-75"
                  />
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
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
            <Button variant="ghost" size="sm">16</Button>
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