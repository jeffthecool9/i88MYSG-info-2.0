import { motion } from "framer-motion";

const FB_MY = "https://www.facebook.com/profile.php?id=61584225863316";
const FB_SG = "https://www.facebook.com/profile.php?id=61584669658907";

export default function App() {
  return (
    <div className="min-h-screen bg-[#050d1f] text-white overflow-hidden">
      {/* Background (blue/white/dark blue only) */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -top-44 left-[-10%] h-[560px] w-[560px] rounded-full bg-blue-600/25 blur-[150px]" />
        <div className="absolute -bottom-60 right-[-12%] h-[560px] w-[560px] rounded-full bg-sky-400/20 blur-[150px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_15%,rgba(30,160,255,0.12),transparent_55%),radial-gradient(circle_at_78%_72%,rgba(0,102,255,0.10),transparent_52%)]" />
        {/* subtle grid */}
        <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.10)_1px,transparent_1px)] [background-size:46px_46px]" />
      </div>

      {/* Hero */}
      <main className="relative mx-auto w-full max-w-6xl px-6 pt-16 pb-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* LEFT: Copy + CTA */}
          <div className="lg:col-span-6">
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-6xl sm:text-7xl font-extrabold tracking-tight"
            >
              i88
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mt-3 text-lg font-semibold text-white/80"
            >
              Official Page
            </motion.p>

            {/* Exact copy you provided */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mt-7 max-w-xl text-lg leading-relaxed text-white/80"
            >
              We are founded in 2016, we have over 500k users across MY &amp; SG.
              <br />
              Smooth deposit &amp; withdrawal, try out and see see.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm text-white/75 ring-1 ring-white/10"
            >
              <span className="h-2 w-2 rounded-full bg-blue-400" />
              Official links only. If it’s not here, it’s not us.
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <motion.a
                href={FB_MY}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 to-blue-600 px-6 py-4 font-bold shadow-[0_22px_70px_rgba(0,120,255,0.35)] ring-1 ring-white/10"
              >
                i88 MY Official
                <span className="ml-2 opacity-85 transition-transform duration-200 group-hover:translate-x-0.5">
                  →
                </span>
              </motion.a>

              <motion.a
                href={FB_SG}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center justify-center rounded-2xl bg-white/6 px-6 py-4 font-bold ring-1 ring-white/15 hover:bg-white/10"
              >
                i88 SG Official
                <span className="ml-2 opacity-70 transition-transform duration-200 group-hover:translate-x-0.5">
                  →
                </span>
              </motion.a>
            </motion.div>

            {/* Scroll cue */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-10 flex items-center gap-3 text-sm text-white/55"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
                ↓
              </span>
              Scroll down for the sports section + why us.
            </motion.div>
          </div>

          {/* RIGHT: Sports-first hero panel */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden rounded-3xl bg-white/5 ring-1 ring-white/12"
            >
              {/* stadium glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(30,160,255,0.20),transparent_58%),radial-gradient(circle_at_75%_70%,rgba(0,102,255,0.16),transparent_52%)]" />

              {/* subtle “football motion lines” */}
              <motion.div
                aria-hidden="true"
                className="absolute -right-16 top-10 h-48 w-48 rounded-full border border-white/10"
                animate={{ x: [0, -10, 0], opacity: [0.5, 0.75, 0.5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                aria-hidden="true"
                className="absolute -right-10 top-24 h-64 w-64 rounded-full border border-white/8"
                animate={{ x: [0, -14, 0], opacity: [0.35, 0.6, 0.35] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />

              <div className="relative p-8 sm:p-10">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-white/80">
                    Sports Mode
                  </div>
                  <div className="text-xs text-white/60">
                    Clean • Fast • Official
                  </div>
                </div>

                <div className="mt-8 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
                  <div className="text-xs text-white/65">Quick summary</div>
                  <div className="mt-2 text-2xl font-extrabold">
                    Built for MY &amp; SG
                  </div>
                  <div className="mt-2 text-sm text-white/70">
                    Sports-first look. Simple UI. Easy to follow.
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3 text-xs text-white/70">
                  <div className="rounded-xl bg-white/5 p-3 ring-1 ring-white/10">
                    <div className="text-base font-extrabold text-white">2016</div>
                    <div className="mt-1 text-white/60">Founded</div>
                  </div>
                  <div className="rounded-xl bg-white/5 p-3 ring-1 ring-white/10">
                    <div className="text-base font-extrabold text-white">500k+</div>
                    <div className="mt-1 text-white/60">Users</div>
                  </div>
                  <div className="rounded-xl bg-white/5 p-3 ring-1 ring-white/10">
                    <div className="text-base font-extrabold text-white">MY/SG</div>
                    <div className="mt-1 text-white/60">Markets</div>
                  </div>
                </div>

                {/* tiny “casino elements” but subtle: icons as abstract shapes */}
                <div className="mt-8 flex gap-2 opacity-60">
                  <span className="h-2 w-10 rounded-full bg-white/20" />
                  <span className="h-2 w-6 rounded-full bg-white/14" />
                  <span className="h-2 w-14 rounded-full bg-white/18" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
