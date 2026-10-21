import Link from "next/link";
import { Crown, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#080706] text-white flex flex-col items-center justify-center p-6 text-center space-y-6">
      <div className="w-16 h-16 rounded-2xl bg-orange-950/60 border border-orange-500/40 flex items-center justify-center text-orange-400">
        <Crown className="w-8 h-8" />
      </div>

      <div className="space-y-2">
        <h1 className="text-5xl sm:text-6xl font-serif font-black text-orange-500">404</h1>
        <h2 className="text-2xl font-serif font-bold text-white">Page Not Found</h2>
        <p className="text-stone-400 text-sm max-w-md">
          The royal outfit or page you are looking for has been moved or does not exist.
        </p>
      </div>

      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-orange-600 to-orange-500 text-white font-bold text-sm shadow-xl shadow-orange-600/30 hover:scale-105 transition-all"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Return to Home &amp; Catalogue</span>
      </Link>
    </div>
  );
}
