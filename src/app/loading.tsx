export default function Loading() {
  return (
    <div className="fixed inset-0 bg-[#050505] flex items-center justify-center z-50">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-full border-2 border-white/10 border-t-blue-500 animate-spin" />
        <p className="text-sm text-white/40 font-mono tracking-widest">LOADING</p>
      </div>
    </div>
  );
}
