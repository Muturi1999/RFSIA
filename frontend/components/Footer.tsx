export default function Footer() {
  return (
    <footer id="contact" className="mt-16 bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-10 grid gap-6 md:grid-cols-3">
        <div>
          <div className="text-xl font-bold text-white">RAFSIA</div>
          <p className="mt-2 text-sm">Readiness Assessment for IHLs & ISPs in Kenya.</p>
        </div>
        <div>
          <div className="font-semibold text-white">Contact</div>
          <p className="text-sm mt-2">Kakamega • Kenya</p>
          <p className="text-sm">Email: research@example.org</p>
        </div>
        <div>
          <div className="font-semibold text-white">Links</div>
          <ul className="text-sm mt-2 space-y-1">
            <li><a className="hover:text-white" href="#about">About</a></li>
            <li><a className="hover:text-white" href="#services">Services</a></li>
            <li><a className="hover:text-white" href="/privacy">Privacy</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-4 text-xs text-gray-400">
          © {new Date().getFullYear()} RAFSIA. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
