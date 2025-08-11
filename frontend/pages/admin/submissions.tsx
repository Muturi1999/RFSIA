// pages/admin/submissions.tsx
import { useEffect, useState } from "react";
import api, { setAuthToken } from "@/lib/api";
import fileDownload from "js-file-download";
import Layout from "@/components/Layout";

type Row = { id:number; role:string; overall_score:number; level:string; created_at:string; };

export default function Submissions() {
  const [rows, setRows] = useState<Row[]>([]);

  useEffect(() => {
    const token = typeof window !== "undefined" ? localStorage.getItem("rafsia_token") : null;
    if (token) setAuthToken(token);
    api.get("/survey/admin/submissions/").then(r => setRows(r.data)).catch(()=>{});
  }, []);

  const exportCSV = async () => {
    const r = await api.get("/reports/submissions.csv", { responseType: "blob" });
    fileDownload(r.data, "submissions.csv");
  };

  return (
    <Layout>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Submissions</h2>
        <button onClick={exportCSV} className="px-3 py-1.5 rounded-md border hover:bg-gray-100">Export CSV</button>
      </div>

      {rows.length === 0 ? (
        <div className="mt-8 text-gray-500">No submissions yet.</div>
      ) : (
        <div className="mt-6 overflow-x-auto rounded-lg border bg-white">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr className="text-left">
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Role</th>
                <th className="px-4 py-2">Score</th>
                <th className="px-4 py-2">Level</th>
                <th className="px-4 py-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(r=>(
                <tr key={r.id} className="border-t">
                  <td className="px-4 py-2">{r.id}</td>
                  <td className="px-4 py-2">{r.role}</td>
                  <td className="px-4 py-2">{r.overall_score}</td>
                  <td className="px-4 py-2">{r.level}</td>
                  <td className="px-4 py-2">{new Date(r.created_at).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </Layout>
  );
}
