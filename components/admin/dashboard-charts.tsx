"use client";

import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const weeklyData = [
  { date: '13 Août', sales: 1500000, orders: 45 },
  { date: '16 Août', sales: 2100000, orders: 62 },
  { date: '17 Août', sales: 1800000, orders: 54 },
  { date: '18 Août', sales: 2300000, orders: 68 },
  { date: '20 Août', sales: 1950000, orders: 58 },
];

const topProducts = [
  { name: 'Poulets vivants', value: 45, color: '#10b981' },
  { name: 'Poussins', value: 28, color: '#3b82f6' },
  { name: 'Cages', value: 15, color: '#f97316' },
  { name: 'Vaccins', value: 12, color: '#06b6d4' },
];

export function DashboardCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      {/* Weekly Sales Chart */}
      <Card>
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-semibold">Ventes Hebdomadaires</CardTitle>
            <Tabs defaultValue="sales" className="w-auto">
              <TabsList className="h-8">
                <TabsTrigger value="sales" className="text-xs px-3 py-1 text-emerald-600">Ventes</TabsTrigger>
                <TabsTrigger value="orders" className="text-xs px-3 py-1">Commandes</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </CardHeader>
        <CardContent>
          <div className="relative h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis 
                  dataKey="date" 
                  tick={{ fontSize: 12 }}
                  stroke="#6b7280"
                />
                <YAxis 
                  tick={{ fontSize: 12 }}
                  stroke="#6b7280"
                  tickFormatter={(value) => `${(value / 1000000).toFixed(1)}M`}
                />
                <Tooltip 
                  formatter={(value, name) => [
                    name === 'sales' ? `${(value as number).toLocaleString()} FCFA` : value,
                    name === 'sales' ? 'Ventes' : 'Commandes'
                  ]}
                  labelStyle={{ color: '#374151' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="sales" 
                  stroke="#10b981" 
                  strokeWidth={3}
                  dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Top Produits Vendus */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Top Produits Vendus</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Legend */}
            <div className="flex flex-wrap gap-4 text-sm">
              {topProducts.map((product, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded" style={{ backgroundColor: product.color }}></div>
                  <span className="text-gray-600 text-xs">{product.name}</span>
                </div>
              ))}
            </div>
            
            {/* Camembert */}
            <div className="flex justify-center">
              <div className="w-48 h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={topProducts}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={80}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {topProducts.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      formatter={(value) => [`${value}%`, 'Part de marché']}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}