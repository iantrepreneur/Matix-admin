"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, DollarSign, TrendingUp, Package } from "lucide-react";

const stats = [
  {
    title: "Commandes Aujourd'hui",
    value: "1,850,000 FCFA",
    details: "Cash: 1,200,000 FCFA  Mobile: 650,000 FCFA",
    color: "bg-emerald-500",
    icon: Package,
  },
  {
    title: "Hier",
    value: "2,100,000 FCFA",
    details: "Cash: 1,400,000 FCFA  Mobile: 700,000 FCFA",
    color: "bg-orange-500",
    icon: Package,
  },
  {
    title: "Ce Mois",
    value: "52,750,000 FCFA",
    details: "",
    color: "bg-blue-500",
    icon: ShoppingCart,
  },
  {
    title: "Mois Dernier",
    value: "48,890,000 FCFA",
    details: "",
    color: "bg-cyan-500",
    icon: DollarSign,
  },
  {
    title: "Total Ventes",
    value: "1,250,450,000 FCFA",
    details: "",
    color: "bg-emerald-600",
    icon: DollarSign,
  },
];

export function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, index) => {
        const IconComponent = stat.icon;
        return (
          <Card key={index} className={`${stat.color} text-white border-0 overflow-hidden`}>
            <CardContent className="p-3">
              <div className="flex items-center justify-between mb-4">
                <div className="p-1.5 bg-white/20 rounded-lg">
                  <IconComponent className="h-4 w-4 text-white" />
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-xs text-white/80 font-medium">{stat.title}</p>
                <p className="text-lg font-bold text-white">{stat.value}</p>
                {stat.details && (
                  <p className="text-xs text-white/70 leading-tight">{stat.details}</p>
                )}
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}