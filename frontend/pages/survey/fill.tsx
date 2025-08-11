import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import api from "@/lib/api";

type Q = { id:number; dimension:string; text:string; order:number };

export default function Fill() {
  const router = useRouter();
  const { role, consent, anonymous, county } = router.query as never;
  const [qs, setQs] = useState<Q[]>([]);
  const [values, setValues] = useState<Record<number, number>>({});

  useEffect(() => {
    if (!role) return;
    api.get("/survey/questions/", { params: { role }})
      .then(r => setQs(r.data));
  }, [role]);

  const setVal = (qid:number, v:number) => setValues(s => ({...s, [qid]: v}));

  const submit = async () => {
    if (!consent) { alert("Consent required"); return; }
    const answers = Object.entries(values).map(([q,v]) => ({question: Number(q), value: Number(v||3)}));
    const payload = {
      role, county, consent: consent==="true", anonymous: anonymous==="true",
      answers
    };
    const r = await api.post("/survey/submissions/", payload);
    router.push(`/survey/result/${r.data.id}`);
  }

  return (
    <div className="p-6 max-w-2xl">
      <h2 className="text-xl font-semibold mb-4">Survey ({role})</h2>
      {qs.map(q => (
        <div key={q.id} className="border-b py-3">
          <p className="font-medium">{q.text}</p>
          <div className="flex gap-2 mt-2">
            {[1,2,3,4,5].map(v => (
              <button key={v} onClick={()=>setVal(q.id, v)}
                className={`px-3 py-1 rounded border ${values[q.id]===v? "bg-blue-600 text-white":"bg-white"}`}>
                {v}
              </button>
            ))}
          </div>
          <div className="text-xs mt-1 text-gray-500">1=Strongly Disagree … 5=Strongly Agree</div>
        </div>
      ))}
      <button onClick={submit} className="mt-6 px-4 py-2 bg-green-600 text-white rounded">Submit</button>
    </div>
  );
}
