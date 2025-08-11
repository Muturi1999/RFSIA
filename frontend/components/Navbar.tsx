import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { setAuthToken } from "@/lib/api";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const r = useRouter();

  useEffect(() => {
    const token = typeof window !== "undefined" ? localStorage.getItem("rafsia_token") : null;
    if (token) setAuthToken(token);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  }, []);

  const logout = () => {
    localStorage.removeItem("rafsia_token");
    setAuthToken(undefined);
    r.push("/");
  };

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
      <nav className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-2xl font-extrabold tracking-tight">
          <span className="text-purple-700">RAFSIA</span>
        </Link>

        <div className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/" className="hover:text-purple-700">Home</Link>
          <a href="#about" className="hover:text-purple-700">About</a>
          <a href="#services" className="hover:text-purple-700">Services</a>
          <a href="#contact" className="hover:text-purple-700">Contact</a>

          {/* User menu */}
          <div ref={menuRef} className="relative">
            <button
              onClick={() => setOpen(v=>!v)}
              className="w-9 h-9 rounded-full bg-purple-100 text-purple-800 grid place-items-center"
              aria-label="User menu"
              title="Account"
            >
              {/* simple user icon */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm0 2c-4.418 0-8 2.239-8 5v1h16v-1c0-2.761-3.582-5-8-5Z" fill="currentColor"/>
              </svg>
            </button>
            {open && (
              <div className="absolute right-0 mt-2 w-44 card p-2">
                <Link href="/admin/login" className="block px-3 py-2 rounded hover:bg-gray-50">Login</Link>
                <Link href="/admin/login" className="block px-3 py-2 rounded hover:bg-gray-50">Register</Link>
                <Link href="/admin/submissions" className="block px-3 py-2 rounded hover:bg-gray-50">Settings</Link>
                <button onClick={logout} className="block w-full text-left px-3 py-2 rounded text-red-600 hover:bg-red-50">
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
