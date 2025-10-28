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
          This site has been ordered offline.
        </h1>

        {/* Main explainer */}
        <p className="text-sm text-white/70 leading-relaxed mb-6">
          This domain (hellertownpolice.org and all associated 
          sub-domains are privately owned and operated by theProject,
          a local and independent development studio. While
          we retain our rights to use our domains as we please, we need to be clear that
          this is not an official, legally-mandated, contracted or operated property of the 
          Hellertown Borough or any local police department effective immediately. Nor
          was it sanctioned in the past by a borough entity - finally it does not
          represent current policy, guidance, or emergency information, nor any opinion
          or guidance from a governing body. Opinions are only of the donor as follows:
          <br />
          <br />
          The content that previously appeared here was created,
          maintained, and hosted with love as a community service at no cost.
          No ads here Saucon. Daily web traffic was around 75-100
          visitors - with a 99 to 1 majority coming from
          Google search, not social media. This proves a need for local, curated info -
          somethkng close to home and not data mined like facebook. We absolutely loved your visits, 
          and ask humbly, that if you found value - please voice your support during borough meetings
          and demand transparency as to what sort of web presence fhe community pays for - and who updates it?
          The community should have a presence and fair use of a commmnity information site to
          conduct awareness to everything that makes our town special - especially one that
          that isn't 100% traded on social media. Ask why a community donated site
          shouldn't operate - but an outside webmill charging thousands deserves your tax-dollar?
          

          <br />
          <br />
          The Borough has chosen to keep its public-facing
          communication to a different contracted vendor (Who?) Because of that
          decision, the independently maintained version has been retired,
          and regular access to prior pages has been disabled to avoid any
          confusion about which source is considered “official.”. This is to
          provide separation, as we share no affliation now - and we do not
          want to imply by any means we are. There is also no matter of disagreement
          or resentment - we love and support our entire borough - but we
          can't deny the feeling of rejection, without a single explanation or
          comversation as to why? So we want to find out, and appreciate your support.
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
