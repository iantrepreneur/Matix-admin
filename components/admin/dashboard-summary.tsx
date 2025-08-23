"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Clock, Truck, CheckCircle } from "lucide-react";

const summaryStats = [
  {
    title: "Total Commandes",
    value: "1,456",
    icon: ShoppingCart,
    color: "text-orange-500",
    bgColor: "bg-orange-50",
  },
  {
    title: "En Attente",
    value: "34",
    subtitle: "(2,850,000 FCFA)",
    icon: Clock,
    color: "text-blue-500",
    bgColor: "bg-blue-50",
  },
  {
    title: "En Cours",
    value: "18",
    icon: Truck,
    color: "text-cyan-500",
    bgColor: "bg-cyan-50",
  },
  {
    title: "Livrées",
    value: "89",
    icon: CheckCircle,
    color: "text-emerald-500",
    bgColor: "bg-emerald-50",
  },
];

export function DashboardSummary() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {summaryStats.map((stat, index) => {
        const IconComponent = stat.icon;
        return (
          <Card key={index} className="border-0 shadow-sm">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-gray-600">{stat.title}</p>
                  <div className="flex items-baseline space-x-2">
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    {stat.subtitle && (
                      <p className="text-xs text-red-500">{stat.subtitle}</p>
                    )}
                  </div>
                </div>
                <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                  <IconComponent className={`h-5 w-5 ${stat.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}