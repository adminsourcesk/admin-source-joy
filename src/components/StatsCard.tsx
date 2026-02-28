import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  positive: boolean;
  icon: LucideIcon;
  delay?: number;
}

const StatsCard = ({ title, value, change, positive, icon: Icon, delay = 0 }: StatsCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className="bg-card border border-border rounded-lg p-5 hover:border-primary/30 transition-colors"
    >
      <div className="flex items-start justify-between mb-4">
        <p className="text-sm text-muted-foreground font-medium">{title}</p>
        <Icon className="w-4 h-4 text-muted-foreground" />
      </div>
      <p className="text-2xl font-semibold tracking-tight">{value}</p>
      <p className={`text-xs mt-1 font-mono ${positive ? "text-success" : "text-destructive"}`}>
        {change}
      </p>
    </motion.div>
  );
};

export default StatsCard;
