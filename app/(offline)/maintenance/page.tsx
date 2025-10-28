// app/(offline)/maintenance/page.tsx
export default function MaintenancePage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-8">
      <section className="max-w-xl text-center">
        {/* Badge / header */}
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
          This site is currently offline.
        </h1>

        {/* Main explainer */}
        <p className="text-sm text-white/70 leading-relaxed mb-6">
          This domain is privately owned and operated by theProject, an
          independent design and technology studio. It is not an official
          website of the Borough or any police department, and it does not
          represent current policy, guidance, or emergency information.
          <br />
          <br />
          The content that previously appeared here was created,
          maintained, and hosted as a community service at no cost.
          <br />
          <br />
          The Borough has since chosen to move its public-facing
          communication to a different contracted vendor. Because of that
          decision, the independently maintained version has been retired,
          and regular access to prior pages has been disabled to avoid any
          confusion about which source is considered “official.”
        </p>

        {/* Clarifier */}
        <p className="text-[0.7rem] text-white/40 font-mono leading-relaxed">
          This notice exists so outdated material is not mistaken for
          active public information.
        </p>

        {/* Footer / ownership + link */}
        <div className="mt-10 text-[0.65rem] text-white/40 font-mono flex flex-col items-center gap-2">
          <span className="uppercase tracking-widest">
            Independently built • Provided as a public courtesy • No active
            affiliation
          </span>

          <a
            href="https://bytheproject.com"
            className="text-white/60 hover:text-white transition-colors underline underline-offset-4"
            rel="noopener noreferrer"
            target="_blank"
          >
            theProject · bytheproject.com
          </a>

          <span className="text-white/30">
            © {new Date().getFullYear()} theProject
          </span>
        </div>
      </section>
    </main>
  );
}
