import Link from "next/link";
import { useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Item = ({ href, label, icon }: any) => (
  <Link href={href} className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-purple-50 text-sm">
    <span className="text-purple-700">{icon}</span>
    <span>{label}</span>
  </Link>
);

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [openSurvey, setOpenSurvey] = useState(true);

  return (
    <div className="min-h-[calc(100vh-64px)] bg-purple-50/40">
      <div className="mx-auto max-w-7xl px-4 py-6 grid md:grid-cols-[250px_1fr] gap-6">
        {/* Sidebar */}
        <aside className="card p-4 h-max sticky top-20">
          <div className="text-xl font-extrabold mb-3">RAFSIA Admin</div>

          <nav className="space-y-1">
            <Item href="/admin" label="Overview" icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M3 13h8V3H3v10Zm10 8h8V3h-8v18ZM3 21h8v-6H3v6Z"/></svg>} />

            {/* Survey dropdown */}
            <button
              onClick={() => setOpenSurvey(v=>!v)}
              className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-purple-50 text-sm"
            >
              <span className="flex items-center gap-2">
                <span className="text-purple-700">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M4 4h16v4H4V4Zm0 6h10v4H4v-4Zm0 6h16v4H4v-4Z"/></svg>
                </span>
                Survey
              </span>
              <svg width="14" height="14" viewBox="0 0 24 24" className={`transition ${openSurvey ? "rotate-180" : ""}`} fill="currentColor">
                <path d="M7 10l5 5 5-5H7z"/>
              </svg>
            </button>
            {openSurvey && (
              <div className="ml-2 border-l pl-3 space-y-1">
                <Item href="/admin/surveys" label="Submissions" icon={<span className="w-2 h-2 rounded-full bg-purple-400 inline-block" />} />
                <Item href="/admin/answers" label="Answers" icon={<span className="w-2 h-2 rounded-full bg-purple-400 inline-block" />} />
                <Item href="/admin/institutions" label="Institutions" icon={<span className="w-2 h-2 rounded-full bg-purple-400 inline-block" />} />
                <Item href="/admin/projects" label="Projects" icon={<span className="w-2 h-2 rounded-full bg-purple-400 inline-block" />} />
                <Item href="/admin/questions" label="Questions" icon={<span className="w-2 h-2 rounded-full bg-purple-400 inline-block" />} />
              </div>
            )}

            <Item href="/admin/interviews" label="Interviews" icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M2 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3H9l-4 4v-4H5a3 3 0 0 1-3-3V5Z"/></svg>} />
            <Item href="/admin/reports" label="Reports" icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6 2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm8 1v5h5"/></svg>} />
            <Item href="/admin/settings" label="Settings" icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.14 12.94a7.49 7.49 0 0 0 .06-.94 7.49 7.49 0 0 0-.06-.94l2.03-1.58a.5.5 0 0 0 .12-.64l-1.92-3.32a.5.5 0 0 0-.6-.22l-2.39.96a7.47 7.47 0 0 0-1.63-.94l-.36-2.54A.5.5 0 0 0 11.9 0H8.1a.5.5 0 0 0-.49.41l-.36 2.54a7.47 7.47 0 0 0-1.63.94l-2.39-.96a.5.5 0 0 0-.6.22L.71 6.47a.5.5 0 0 0 .12.64L2.86 8.7a7.49 7.49 0 0 0 0 1.88L.83 12.16a.5.5 0 0 0-.12.64l1.92 3.32a.5.5 0 0 0 .6.22l2.39-.96c.51.39 1.06.71 1.63.94l.36 2.54c.04.24.25.41.49.41h3.8c.24 0 .45-.17.49-.41l.36-2.54c.57-.23 1.12-.55 1.63-.94l2.39.96c.22.09.47 0 .6-.22l1.92-3.32a.5.5 0 0 0-.12-.64l-2.03-1.58ZM10 15a3 3 0 1 1 4 0 3 3 0 0 1-4 0Z"/></svg>} />
          </nav>
        </aside>

        {/* Main */}
        <section>{children}</section>
      </div>
    </div>
  );
}
