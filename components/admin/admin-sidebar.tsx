"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  Store, 
  Users, 
  ShoppingCart, 
  Truck, 
  Shield, 
  Settings,
  LogOut,
  ChevronDown,
  ChevronRight,
  FileText
} from "lucide-react";

interface AdminSidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const menuItems = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "Factures",
    href: "/admin/invoices",
    icon: FileText,
  },
  {
    title: "Catalog",
    href: "/admin/catalog",
    icon: Store,
    submenu: [
      {
        title: "Produits",
        href: "/admin/catalog/products",
      },
      {
        title: "Coupons",
        href: "/admin/catalog/coupons",
      },
      {
        title: "Catégories",
        href: "/admin/catalog/categories",
      }
    ]
  },
  {
    title: "Marketplace",
    href: "/admin/marketplace",
    icon: Store,
  },
  {
    title: "Utilisateurs",
    href: "/admin/users",
    icon: Users,
  },
  {
    title: "Commandes",
    href: "/admin/orders",
    icon: ShoppingCart,
  },
  {
    title: "Livraison",
    href: "/admin/delivery",
    icon: Truck,
  },
  {
    title: "KYC",
    href: "/admin/kyc",
    icon: Shield,
  },
  {
    title: "Staff",
    href: "/admin/staff",
    icon: Users,
  },
  {
    title: "Paramètres",
    href: "/admin/settings",
    icon: Settings,
  },
];

export function AdminSidebar({ sidebarOpen, setSidebarOpen }: AdminSidebarProps) {
  const pathname = usePathname();
  const [expandedMenus, setExpandedMenus] = useState<string[]>(['Catalog']);

  const toggleMenu = (title: string) => {
    setExpandedMenus(prev => 
      prev.includes(title) 
        ? prev.filter(item => item !== title)
        : [...prev, title]
    );
  };

  const isMenuExpanded = (title: string) => expandedMenus.includes(title);

  const SidebarContent = () => (
    <div className="flex h-full w-full flex-col">
      {/* Logo */}
      <div className="flex h-16 items-center px-6 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
            <Store className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-gray-900">MATIX</h1>
            <p className="text-xs text-gray-500 -mt-1">MART</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-1">
        {menuItems.map((item) => {
          const isActive = pathname === item.href || (item.submenu && item.submenu.some(sub => pathname === sub.href));
          const Icon = item.icon;
          const hasSubmenu = item.submenu && item.submenu.length > 0;
          const isExpanded = isMenuExpanded(item.title);
          
          return (
            <div key={item.title}>
              {/* Menu principal */}
              {hasSubmenu ? (
                <button
                  onClick={() => toggleMenu(item.title)}
                  className={cn(
                    "flex items-center justify-between w-full px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                    isActive
                      ? "bg-emerald-50 text-emerald-700"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  )}
                >
                  <div className="flex items-center space-x-3">
                    <Icon className={cn(
                      "w-5 h-5",
                      isActive ? "text-emerald-600" : "text-gray-400"
                    )} />
                    <span>{item.title}</span>
                  </div>
                  {isExpanded ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )}
                </button>
              ) : (
                <Link
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={cn(
                    "flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                    isActive
                      ? "bg-emerald-50 text-emerald-700"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  )}
                >
                  <Icon className={cn(
                    "w-5 h-5",
                    isActive ? "text-emerald-600" : "text-gray-400"
                  )} />
                  <span>{item.title}</span>
                </Link>
              )}

              {/* Sous-menu */}
              {hasSubmenu && isExpanded && (
                <div className="ml-8 mt-1 space-y-1">
                  {item.submenu!.map((subItem) => {
                    const isSubActive = pathname === subItem.href;
                    return (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        onClick={() => setSidebarOpen(false)}
                        className={cn(
                          "block px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                          isSubActive
                            ? "bg-emerald-50 text-emerald-700"
                            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                        )}
                      >
                        {subItem.title}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-gray-200">
        <button className="flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 w-full transition-colors">
          <LogOut className="w-5 h-5 text-gray-400" />
          <span>Log Out</span>
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-50 lg:block lg:w-64 lg:bg-white lg:border-r lg:border-gray-200">
        <SidebarContent />
      </div>

      {/* Mobile Sidebar */}
      <div className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out lg:hidden",
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <SidebarContent />
      </div>
    </>
  );
}