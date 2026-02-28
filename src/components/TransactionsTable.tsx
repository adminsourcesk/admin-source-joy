import { motion } from "framer-motion";

const transactions = [
  { id: "#TXN-4821", customer: "Sarah Chen", amount: "$249.00", status: "Completed", date: "Feb 28, 2026" },
  { id: "#TXN-4820", customer: "Marcus Johnson", amount: "$99.00", status: "Pending", date: "Feb 28, 2026" },
  { id: "#TXN-4819", customer: "Elena Rodriguez", amount: "$499.00", status: "Completed", date: "Feb 27, 2026" },
  { id: "#TXN-4818", customer: "James O'Brien", amount: "$149.00", status: "Failed", date: "Feb 27, 2026" },
  { id: "#TXN-4817", customer: "Priya Sharma", amount: "$349.00", status: "Completed", date: "Feb 26, 2026" },
];

const statusColor: Record<string, string> = {
  Completed: "text-success",
  Pending: "text-warning",
  Failed: "text-destructive",
};

const TransactionsTable = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.5 }}
      className="bg-card border border-border rounded-lg overflow-hidden"
    >
      <div className="p-5 border-b border-border">
        <h3 className="text-sm font-semibold">Recent Transactions</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left text-xs text-muted-foreground font-medium px-5 py-3">ID</th>
              <th className="text-left text-xs text-muted-foreground font-medium px-5 py-3">Customer</th>
              <th className="text-left text-xs text-muted-foreground font-medium px-5 py-3">Amount</th>
              <th className="text-left text-xs text-muted-foreground font-medium px-5 py-3">Status</th>
              <th className="text-left text-xs text-muted-foreground font-medium px-5 py-3">Date</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((t) => (
              <tr key={t.id} className="border-b border-border last:border-0 hover:bg-secondary/50 transition-colors">
                <td className="px-5 py-3 text-sm font-mono text-muted-foreground">{t.id}</td>
                <td className="px-5 py-3 text-sm font-medium">{t.customer}</td>
                <td className="px-5 py-3 text-sm font-mono">{t.amount}</td>
                <td className={`px-5 py-3 text-sm font-medium ${statusColor[t.status]}`}>{t.status}</td>
                <td className="px-5 py-3 text-sm text-muted-foreground">{t.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default TransactionsTable;
