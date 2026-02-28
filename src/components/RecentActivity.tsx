import { motion } from "framer-motion";

const activities = [
  { user: "Sarah Chen", action: "purchased Pro Plan", time: "2m ago", avatar: "SC" },
  { user: "Marcus Johnson", action: "updated profile settings", time: "15m ago", avatar: "MJ" },
  { user: "Elena Rodriguez", action: "submitted support ticket #4821", time: "1h ago", avatar: "ER" },
  { user: "James O'Brien", action: "exported analytics report", time: "3h ago", avatar: "JO" },
  { user: "Priya Sharma", action: "added 3 team members", time: "5h ago", avatar: "PS" },
];

const RecentActivity = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.4 }}
      className="bg-card border border-border rounded-lg p-5"
    >
      <h3 className="text-sm font-semibold mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((a, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-[10px] font-mono text-muted-foreground shrink-0">
              {a.avatar}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm truncate">
                <span className="font-medium">{a.user}</span>{" "}
                <span className="text-muted-foreground">{a.action}</span>
              </p>
            </div>
            <span className="text-xs text-muted-foreground font-mono shrink-0">{a.time}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default RecentActivity;
