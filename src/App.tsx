const FB_MY = "https://www.facebook.com/profile.php?id=61584225863316";
const FB_SG = "https://www.facebook.com/profile.php?id=61584669658907";

export default function App() {
  return (
    <div className="min-h-screen bg-[#050d1f] text-white overflow-hidden">
      {/* Glow background */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -top-40 left-[-10%] h-[520px] w-[520px] rounded-full bg-blue-600/25 blur-[140px]" />
        <div className="absolute -bottom-52 right-[-10%] h-[520px] w-[520px] rounded-full bg-sky-400/20 blur-[140px]" />
      </div>

      {/* Header */}
      <header className="relative mx-auto max-w-6xl px-6 py-8 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-white/10 ring-1 ring-white/15" />
          <span className="font-bold tracking-wide">i88</span>
        </div>
        <span className="text-xs text-white/60">Official Page</span>
      </header>

      {/* Hero */}
      <main className="relative mx-auto max-w-6xl px-6 pt-12 pb-28 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          <h1 className="text-6xl font-extrabold tracking-tight">i88</h1>
          <p className="mt-2 text-lg font-semibold text-white/80">
            Official Page
          </p>

          <p className="mt-6 max-w-xl text-lg text-white/80 leading-relaxed">
            Founded in 2016. Over <span className="text-white font-semibold">500k</span>{" "}
            users across Malaysia &amp; Singapore.
            <br />
            Smooth deposit &amp; withdrawal. Try out and see see.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm ring-1 ring-white/10">
            <span className="h-2 w-2 rounded-full bg-blue-400" />
            Official links only. If it’s not here, it’s not us.
          </div>

          <div className="mt-10 flex gap-4 flex-wrap">
            <a
              href={FB_MY}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-gradient-to-br from-sky-400 to-blue-600 px-6 py-4 font-bold shadow-[0_20px_60px_rgba(0,120,255,0.35)] hover:-translate-y-0.5 transition"
            >
              i88 MY Official →
            </a>

            <a
              href={FB_SG}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-white/5 px-6 py-4 font-bold ring-1 ring-white/15 hover:bg-white/10 hover:-translate-y-0.5 transition"
            >
              i88 SG Official →
            </a>
          </div>
        </div>

        {/* Right visual */}
        <div className="relative">
          <div className="relative rounded-3xl bg-white/5 ring-1 ring-white/15 p-10 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.25),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(14,165,233,0.18),transparent_50%)]" />
            <div className="relative">
              <div className="text-sm text-white/70">Sports-first experience</div>
              <div className="mt-3 text-3xl font-extrabold">
                Clean. Fast. Official.
              </div>
              <p className="mt-3 text-white/70">
                Built for long-term users who value speed, clarity, and trust.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-4 text-center text-sm">
                <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                  <div className="text-xl font-bold">2016</div>
                  <div className="text-white/60">Founded</div>
                </div>
                <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                  <div className="text-xl font-bold">500k+</div>
                  <div className="text-white/60">Users</div>
                </div>
                <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                  <div className="text-xl font-bold">MY / SG</div>
                  <div className="text-white/60">Markets</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
