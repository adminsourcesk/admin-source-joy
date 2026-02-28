import { DollarSign, Users, Package, TrendingUp } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import StatsCard from "@/components/StatsCard";
import RevenueChart from "@/components/RevenueChart";
import RecentActivity from "@/components/RecentActivity";
import TransactionsTable from "@/components/TransactionsTable";

const stats = [
  { title: "Total Revenue", value: "$86,400", change: "+12.5% from last month", positive: true, icon: DollarSign },
  { title: "Active Users", value: "2,847", change: "+8.2% from last month", positive: true, icon: Users },
  { title: "Products Sold", value: "1,234", change: "-3.1% from last month", positive: false, icon: Package },
  { title: "Conversion Rate", value: "3.24%", change: "+0.8% from last month", positive: true, icon: TrendingUp },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Sidebar />
      <main className="ml-64 p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
          <p className="text-sm text-muted-foreground mt-1">Welcome back. Here's your overview.</p>
        </div>

        <div className="grid grid-cols-4 gap-4 mb-6">
          {stats.map((s, i) => (
            <StatsCard key={s.title} {...s} delay={i * 0.08} />
          ))}
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="col-span-2">
            <RevenueChart />
          </div>
          <RecentActivity />
        </div>

        <TransactionsTable />
      </main>
    </div>
  );
};

export default Index;
