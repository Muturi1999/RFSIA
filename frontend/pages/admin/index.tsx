import DashboardLayout from "@/components/DashboardLayout";
export default function AdminHome() {
  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-4 mt-6">
        <div className="card p-4"><div className="text-sm text-gray-500">Total Submissions</div><div className="text-2xl font-bold">—</div></div>
        <div className="card p-4"><div className="text-sm text-gray-500">Avg Score</div><div className="text-2xl font-bold">—</div></div>
        <div className="card p-4"><div className="text-sm text-gray-500">IHL vs ISP</div><div className="text-2xl font-bold">—</div></div>
        <div className="card p-4"><div className="text-sm text-gray-500">Projects</div><div className="text-2xl font-bold">—</div></div>
      </div>
    </DashboardLayout>
  );
}
