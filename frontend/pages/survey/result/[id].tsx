import { useRouter } from "next/router";
import { useEffect, useState, useMemo } from "react";
import api from "@/lib/api";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts";

type PerDim = { [k:string]: number };
type S = { id:number; role:string; overall_score:number; level:string; per_dimension:PerDim };

export default function Result() {
  const { query:{ id } } = useRouter();
  const [data, setData] = useState<S|null>(null);

  useEffect(() => {
    if (!id) return;
    api.get(`/survey/submissions/${id}/`).then(r => setData(r.data));
  }, [id]);

  const chartData = useMemo(() => {
    if (!data) return [];
    return Object.entries(data.per_dimension).map(([k,v]) => ({ dim: k, score: v }));
  }, [data]);

  // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
  const color = data?.overall_score! >= 80 ? "bg-green-600"
    // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
    : data?.overall_score! >= 60 ? "bg-amber-500" : "bg-red-600";

  const advice = (dim:string, v:number) => {
    if (v >= 80) return "Strong";
    if (v >= 60) return "Moderate—monitor";
    return dim==="technical" ? "Upgrade ICT infra & power backup"
         : dim==="economic" ? "Budget for connectivity & devices"
         : dim==="socio_cultural" ? "Digital literacy & change mgmt"
         : dim==="environmental" ? "Energy efficiency & resilience"
         : "Engage regulators; compliance roadmap";
  };

  return data ? (
    <div className="p-6">
      <h2 className="text-xl font-semibold">Results</h2>
      <div className={`inline-block text-white px-3 py-1 rounded mt-2 ${color}`}>
        {data.level} ({data.overall_score})
      </div>

      <div className="h-80 mt-6">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={chartData}>
            <PolarGrid />
            <PolarAngleAxis dataKey="dim" />
            <PolarRadiusAxis angle={30} domain={[0, 100]} />
            <Radar name="Readiness" dataKey="score" />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mt-6">
        {chartData.map(row => (
          <div key={row.dim} className="border p-3 rounded">
            <div className="font-medium capitalize">{row.dim.replace("_"," ")}</div>
            <div className="text-sm text-gray-600">Score: {row.score}</div>
            <div className="mt-1">{advice(row.dim, row.score)}</div>
          </div>
        ))}
      </div>
    </div>
  ) : <div className="p-6">Loading...</div>;
}
