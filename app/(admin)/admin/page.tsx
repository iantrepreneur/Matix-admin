"use client";

import { DashboardStats } from "@/components/admin/dashboard-stats";
import { DashboardSummary } from "@/components/admin/dashboard-summary";
import { DashboardCharts } from "@/components/admin/dashboard-charts";
import { DashboardOrders } from "@/components/admin/dashboard-orders";

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard Overview</h1>
      </div>

      {/* Stats Cards */}
      <DashboardStats />

      {/* Summary Stats */}
      <DashboardSummary />

      {/* Charts Section */}
      <DashboardCharts />

      {/* Recent Orders Table */}
      <DashboardOrders />
    </div>
  );
}