import Layout from "@/components/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      {/* HERO */}
      <section
        className="relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1600&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-black/60"></div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Assess Digital Readiness with <span className="text-purple-300">RAFSIA</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-200">
            Measure Technical, Economic, Socio‑Cultural, Environmental, and Policy readiness for IHLs and ISPs.
            Get instant scores, radar charts, and exportable reports.
          </p>
          <div className="mt-8 flex gap-3">
            <Link href="/survey/start" className="btn btn-primary">Start Survey</Link>
            <Link href="/admin/login" className="btn btn-outline bg-white/10 text-white border-white">Admin Login</Link>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-7xl px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold">About RAFSIA</h2>
          <p className="mt-4 text-gray-600">
            RAFSIA evaluates readiness along five dimensions using Likert‑scale questionnaires and qualitative interviews.
            Our scoring engine converts responses to 0–100 per dimension, generates an overall level, and offers
            actionable recommendations.
          </p>
          <ul className="mt-4 text-gray-700 list-disc list-inside space-y-1">
            <li>Dual forms: IHLs and ISPs</li>
            <li>Real‑time radar visualization</li>
            <li>Admin interview capture & exports</li>
          </ul>
          <div className="mt-6">
            <a href="#services" className="btn btn-primary">Explore Services</a>
          </div>
        </div>
        <div className="order-first md:order-last">
          <img
            className="w-full rounded-2xl shadow-lg"
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop"
            alt="About RAFSIA"
          />
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-7xl px-4 pb-16">
        <h2 className="text-3xl font-bold">Services</h2>
        <p className="mt-2 text-gray-600">Choose a module to get started.</p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="card p-6">
            <div className="w-11 h-11 grid place-items-center rounded-lg bg-purple-100 text-purple-700">
              {/* survey icon */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M5 3h14a2 2 0 0 1 2 2v3H3V5a2 2 0 0 1 2-2Zm-2 8h20v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6Zm5 2v2h8v-2H8Z"/></svg>
            </div>
            <h3 className="mt-4 font-semibold text-lg">Readiness Survey</h3>
            <p className="mt-2 text-sm text-gray-600">Complete the RAFSIA Likert questionnaire for IHLs or ISPs and get instant scoring.</p>
            <Link href="/survey/start" className="mt-4 inline-block text-purple-700 font-medium">Open Survey →</Link>
          </div>

          <div className="card p-6">
            <div className="w-11 h-11 grid place-items-center rounded-lg bg-purple-100 text-purple-700">
              {/* interview icon */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M2 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3H9l-4 4v-4H5a3 3 0 0 1-3-3V5Zm17 8h2a3 3 0 0 1 3 3v4l-4-4h-1a3 3 0 0 1-3-3v-1h3Z"/></svg>
            </div>
            <h3 className="mt-4 font-semibold text-lg">Interviews (Admin)</h3>
            <p className="mt-2 text-sm text-gray-600">Capture qualitative notes tagged to RAFSIA dimensions from institutions and providers.</p>
            <Link href="/admin/login" className="mt-4 inline-block text-purple-700 font-medium">Go to Admin →</Link>
          </div>

          <div className="card p-6">
            <div className="w-11 h-11 grid place-items-center rounded-lg bg-purple-100 text-purple-700">
              {/* report icon */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M6 2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm8 1v5h5"/></svg>
            </div>
            <h3 className="mt-4 font-semibold text-lg">Reports & Exports</h3>
            <p className="mt-2 text-sm text-gray-600">Download CSV/PDF readiness reports; compare across institutions.</p>
            <Link href="/admin/submissions" className="mt-4 inline-block text-purple-700 font-medium">Open Dashboard →</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
