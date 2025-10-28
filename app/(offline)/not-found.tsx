// app/(offline)/not-found.tsx
export default function OfflineNotFound() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center p-8">
      <section className="max-w-lg text-center">
        <div className="mb-6">
          <div className="text-[0.7rem] font-mono text-[#05f2af] tracking-widest uppercase">
            error · 404
          </div>
          <h1 className="mt-2 text-3xl font-semibold leading-tight text-white">
            Not found.
            <br />
            Not abandoned.
            <br />
            Just… replaced.
          </h1>
        </div>

        <p className="text-sm text-white/70 leading-relaxed mb-6">
          You reached a page that used to live here when this site was run
          by builders who actually live in and care about this community.
          <br />
          <br />
          That version of the site has been taken down.
          Decisions about public-facing information have been moved to
          a contracted provider through municipal bureaucracy.
        </p>

        <p className="text-xs text-white/40 font-mono leading-relaxed mb-10">
          Translation: you’re not looking at a “broken website.” You’re
          looking at the gap between what was offered freely in good faith
          and what a procurement process decided it wanted instead.
        </p>

        <div className="inline-block border border-white/20 bg-white/5 rounded-lg px-4 py-3 backdrop-blur-sm relative">
          <div className="absolute inset-0 blur-xl opacity-30 bg-[radial-gradient(circle_at_50%_50%,#e20074_0%,#05f2af_40%,transparent_70%)]" />
          <div className="relative text-left">
            <div className="text-[0.65rem] text-white/60 font-mono uppercase tracking-widest">
              NOT A CORPORATE CONGLOMERATE
            </div>
            <div className="text-[0.7rem] text-white/40 font-mono">
              Independent build • No contract • No invoice
            </div>
          </div>
        </div>

        <div className="mt-10 text-[0.6rem] text-white/30 font-mono">
          theProject · {new Date().getFullYear()}
        </div>
      </section>
    </main>
  );
}
