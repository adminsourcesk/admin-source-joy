import { motion } from "framer-motion";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", revenue: 4200 },
  { name: "Feb", revenue: 5800 },
  { name: "Mar", revenue: 4900 },
  { name: "Apr", revenue: 7200 },
  { name: "May", revenue: 6100 },
  { name: "Jun", revenue: 8400 },
  { name: "Jul", revenue: 7800 },
  { name: "Aug", revenue: 9200 },
  { name: "Sep", revenue: 8600 },
  { name: "Oct", revenue: 10400 },
  { name: "Nov", revenue: 9800 },
  { name: "Dec", revenue: 12000 },
];

const RevenueChart = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.3 }}
      className="bg-card border border-border rounded-lg p-5"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-sm font-semibold">Revenue Overview</h3>
        <span className="text-xs text-muted-foreground font-mono">2025</span>
      </div>
      <ResponsiveContainer width="100%" height={260}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(175, 80%, 50%)" stopOpacity={0.3} />
              <stop offset="95%" stopColor="hsl(175, 80%, 50%)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 15%, 16%)" />
          <XAxis dataKey="name" tick={{ fontSize: 11, fill: "hsl(215, 15%, 50%)" }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 11, fill: "hsl(215, 15%, 50%)" }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v / 1000}k`} />
          <Tooltip
            contentStyle={{
              background: "hsl(220, 18%, 10%)",
              border: "1px solid hsl(220, 15%, 16%)",
              borderRadius: "6px",
              fontSize: "12px",
              color: "hsl(210, 20%, 92%)",
            }}
            formatter={(value: number) => [`$${value.toLocaleString()}`, "Revenue"]}
          />
          <Area type="monotone" dataKey="revenue" stroke="hsl(175, 80%, 50%)" strokeWidth={2} fillOpacity={1} fill="url(#colorRevenue)" />
        </AreaChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default RevenueChart;
