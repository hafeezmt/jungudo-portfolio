import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center px-6">
      <div className="text-center">
        <p className="text-blue-500 font-mono text-sm tracking-widest mb-4">404</p>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Page not found.</h1>
        <p className="text-white/40 text-lg mb-8">
          The page you&apos;re looking for doesn&apos;t exist or was moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-white/90 transition-colors"
        >
          ← Back to Portfolio
        </Link>
      </div>
    </div>
  );
}
