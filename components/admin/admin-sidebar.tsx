import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Package,
  Users,
  ShoppingCart,
  UserCheck,
  Building2,
  FileText,
  Truck,
  Settings,
  Globe,
  Store,
  LogOut,
  ChevronDown,
  Tag,
  Grid3X3,
  Ticket
} from "lucide-react";
import { useState } from "react";

interface AdminSidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export function AdminSidebar({ sidebarOpen, setSidebarOpen }: AdminSidebarProps) {
  const pathname = usePathname();
  const [catalogOpen, setCatalogOpen] = useState(true);

  const navigation = [
    {
      name: "Dashboard",
      href: "/admin",
      icon: LayoutDashboard,
      current: pathname === "/admin",
    },
    {
      name: "Catalogue",
      icon: Package,
      current: pathname.startsWith("/admin/catalog"),
      children: [
        {
          name: "Produits",
          href: "/admin/catalog/products",
          icon: Package,
          current: pathname === "/admin/catalog/products",
        },
        {
          name: "Coupon",
          href: "/admin/catalog/coupons",
          icon: Ticket,
          current: pathname === "/admin/catalog/coupons",
        },
        {
          name: "Categories",
          href: "/admin/catalog/categories",
          icon: Grid3X3,
          current: pathname === "/admin/catalog/categories",
        },
      ],
    },
    {
      name: "Customers",
      href: "/admin/customers",
      icon: Users,
      current: pathname === "/admin/customers",
    },
    {
      name: "Orders",
      href: "/admin/orders",
      icon: ShoppingCart,
      current: pathname === "/admin/orders",
    },
    {
      name: "Our Staff",
      href: "/admin/staff",
      icon: UserCheck,
      current: pathname === "/admin/staff",
    },
    {
      name: "Settings",
      href: "/admin/settings",
      icon: Settings,
      current: pathname === "/admin/settings",
    },
    {
      name: "International",
      href: "/admin/international",
      icon: Globe,
      current: pathname === "/admin/international",
    },
    {
      name: "Online Store",
      href: "/admin/store",
      icon: Store,
      current: pathname === "/admin/store",
    },
  ];

  return (
    <div className="flex h-full flex-col bg-white border-r border-gray-200">
      {/* Logo */}
      <div className="flex h-16 items-center px-6 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
            <Package className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-gray-900">KACHA</span>
          <span className="text-xl font-normal text-gray-600">BAZAR</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navigation.map((item) => (
          <div key={item.name}>
            {item.children ? (
              <div>
                <button
                  onClick={() => setCatalogOpen(!catalogOpen)}
                  className={cn(
                    "w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                    item.current
                      ? "bg-emerald-50 text-emerald-700"
                      : "text-gray-700 hover:bg-gray-50"
                  )}
                >
                  <div className="flex items-center space-x-3">
                    <item.icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </div>
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 transition-transform",
                      catalogOpen ? "rotate-180" : ""
                    )}
                  />
                </button>
                {catalogOpen && (
                  <div className="ml-6 mt-2 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className={cn(
                          "flex items-center space-x-3 px-3 py-2 text-sm rounded-lg transition-colors",
                          child.current
                            ? "bg-emerald-50 text-emerald-700"
                            : "text-gray-600 hover:bg-gray-50"
                        )}
                      >
                        <span className="w-2 h-2 bg-gray-400 rounded-full" />
                        <span>{child.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                href={item.href}
                className={cn(
                  "flex items-center space-x-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                  item.current
                    ? "bg-emerald-50 text-emerald-700"
                    : "text-gray-700 hover:bg-gray-50"
                )}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
              </Link>
            )}
          </div>
        ))}
      </nav>

      {/* Logout Button */}
      <div className="p-4 border-t border-gray-200">
        <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors">
          <LogOut className="w-4 h-4" />
          <span className="text-sm font-medium">Log Out</span>
        </button>
      </div>
    </div>
  );
}