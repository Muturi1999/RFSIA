import { useState } from "react";
import api, { setAuthToken } from "@/lib/api";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";

export default function Login() {
  const [username, setU] = useState("");
  const [password, setP] = useState("");
  const [remember, setRemember] = useState(false);
  const [busy, setBusy] = useState(false);
  const r = useRouter();

  const submit = async () => {
    try {
      setBusy(true);
      const res = await api.post("/auth/token/", { username, password });
      const token = res.data.access;
      setAuthToken(token);
      if (typeof window !== "undefined") {
        if (remember) localStorage.setItem("rafsia_token", token);
        else sessionStorage.setItem("rafsia_token", token);
      }
      r.push("/admin"); // land on dashboard
    } catch {
      alert("Login failed");
    } finally {
      setBusy(false);
    }
  };

  return (
    <Layout>
      <div className="mx-auto max-w-lg px-4">
        <div className="mx-auto mt-12 card p-8">
          <h1 className="text-3xl font-extrabold text-center">Sign in to your account</h1>

          {/* Username */}
          <label className="block mt-6 text-sm font-medium">Email or Username</label>
          <div className="mt-1 flex items-center gap-2 rounded-md border px-3">
            <svg width="18" height="18" viewBox="0 0 24 24" className="text-gray-400" fill="currentColor">
              <path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1l-10 6L2 7V6Z"/><path d="M2 8.3V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.3l-10 6-10-6Z"/>
            </svg>
            <input
              className="w-full py-3 outline-none"
              placeholder="you@example.com"
              value={username}
              onChange={(e) => setU(e.target.value)}
            />
          </div>

          {/* Password */}
          <label className="block mt-4 text-sm font-medium">Password</label>
          <div className="mt-1 flex items-center gap-2 rounded-md border px-3">
            <svg width="18" height="18" viewBox="0 0 24 24" className="text-gray-400" fill="currentColor">
              <path d="M17 9V7a5 5 0 0 0-10 0v2H5v12h14V9h-2Zm-8 0V7a3 3 0 0 1 6 0v2H9Z"/>
            </svg>
            <input
              type="password"
              className="w-full py-3 outline-none"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setP(e.target.value)}
            />
          </div>

          {/* Row: remember + forgot */}
          <div className="mt-3 flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" checked={remember} onChange={e=>setRemember(e.target.checked)} />
              Remember me
            </label>
            <a className="text-purple-700" href="#">Forgot password?</a>
          </div>

          {/* Submit */}
          <button
            onClick={submit}
            disabled={busy}
            className="btn btn-primary w-full mt-5 py-3 text-base"
          >
            {busy ? "Signing in…" : "Sign in"}
          </button>

          {/* Divider */}
          <div className="my-6 flex items-center gap-3 text-sm text-gray-500">
            <div className="h-px flex-1 bg-gray-200" />
            or
            <div className="h-px flex-1 bg-gray-200" />
          </div>

          {/* Social (placeholder) */}
          <button className="w-full rounded-md border px-4 py-3 hover:bg-gray-50 text-sm">
            Sign in with Google
          </button>

          <p className="mt-6 text-center text-sm">
            Don’t have an account?{" "}
            <a className="text-purple-700" href="/auth/register">Register</a>
          </p>
        </div>
      </div>
    </Layout>
  );
}
