// app/maintenance/page.tsx
export default function MaintenancePage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-8">
      <section className="max-w-xl text-center">
        {/* Glowy ring / badge */}
        <div className="relative inline-block mb-8">
          <div className="absolute inset-0 blur-2xl opacity-40 bg-[radial-gradient(circle_at_50%_50%,#05f2af_0%,#e20074_40%,transparent_70%)]" />
          <div className="relative border border-white/20 rounded-xl px-4 py-2 bg-white/5 backdrop-blur-sm">
            <p className="text-xs font-mono tracking-widest text-white/70">
              SERVICE NOTICE
            </p>
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-2xl font-semibold text-white mb-4 leading-tight">
          This site is permenantly offline,
          however the domain is owned independently by theProject, LLC.
          We retain full rights to the domain but make mo claim or partnership
          with the previous tenant - as we own the name.
        </h1>

        {/* Body copy */}
        <p className="text-sm text-white/70 leading-relaxed mb-6">
          This domain previously hosted a community-forward web presence
          developed and maintained at no cost, as a public service by theProject.
          We truly wanted to give back, and enjoyed what time we had. Please consider
          speaking up at your borough meetings if you found value here, local is always best.
          
          <br />
          <br />
          As of now, the Borough has chosen to stick to a different profitary
          vendor under a formal contract, which to date provides no official site - just a facebook link.
          Because of that decision, this independently (locally and FREE) maintained version is being retired.
          
          <br />
          <br />
          To avoid confusion about which website is considered “official,”
          regular access to the prior content has been disabled here.
        </p>

        {/* Sub-note */}
        <p className="text-[0.7rem] text-white/40 font-mono leading-relaxed">
          This page exists only to clarify status and prevent outdated
          information from being mistaken as official policy, guidance,
          or public safety instruction.
        </p>

        {/* Footer tag */}
        <div className="mt-10 text-[0.65rem] text-white/40 font-mono flex flex-col items-center gap-2">
          <span className="uppercase tracking-widest">
            Independent build • community donation
          </span>
          <span className="text-white/30">
            © {new Date().getFullYear()} theProject
          </span>
        </div>
      </section>
    </main>
  );
}
