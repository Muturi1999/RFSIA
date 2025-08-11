// pages/survey/start.tsx
import { useState } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";

export default function Start() {
  const [role, setRole] = useState<"IHL"|"ISP"|"">("");
  const [consent, setConsent] = useState(false);
  const [anonymous, setAnonymous] = useState(false);
  const [county, setCounty] = useState("");
  const r = useRouter();

  const go = () => {
    if (!consent || !role) { alert("Consent and role are required."); return; }
    r.push(`/survey/fill?role=${role}&consent=${consent}&anonymous=${anonymous}&county=${encodeURIComponent(county)}`);
  }

  return (
    <Layout>
      <div className="max-w-xl mx-auto bg-white border rounded-2xl p-6 shadow-sm">
        <h2 className="text-2xl font-semibold">Start Survey</h2>
        <p className="text-sm text-gray-600 mt-1">Please select your role and confirm consent to continue.</p>

        <label className="block mt-5 text-sm font-medium">Role</label>
        <select className="mt-1 w-full rounded-md border p-2" value={role} onChange={(e)=>setRole(e.target.value as never)}>
          <option value="">Select…</option>
          <option value="IHL">Institution of Higher Learning</option>
          <option value="ISP">Internet Service Provider</option>
        </select>

        <label className="block mt-4 text-sm font-medium">County (optional)</label>
        <input className="mt-1 w-full rounded-md border p-2" value={county} onChange={(e)=>setCounty(e.target.value)} />

        <div className="mt-4 space-y-2">
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" checked={anonymous} onChange={e=>setAnonymous(e.target.checked)} />
            Submit anonymously
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" checked={consent} onChange={e=>setConsent(e.target.checked)} />
            I have read and consent to data collection.
          </label>
        </div>

        <button onClick={go} className="mt-6 w-full px-4 py-2.5 rounded-md bg-blue-600 text-white hover:bg-blue-700">
          Continue
        </button>

        <p className="mt-3 text-xs text-gray-500">
          See our <a href="/privacy" className="underline">privacy notice</a> for Data Protection Act 2019 compliance.
        </p>
      </div>
    </Layout>
  );
}
