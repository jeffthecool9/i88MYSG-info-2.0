import { motion } from "framer-motion";

const FB_MY = "https://www.facebook.com/profile.php?id=61584225863316";
const FB_SG = "https://www.facebook.com/profile.php?id=61584669658907";

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function App() {
  return (
    <div className="min-h-screen bg-[#050d1f] text-white overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(30,160,255,0.18),transparent_55%),radial-gradient(circle_at_82%_70%,rgba(0,102,255,0.14),transparent_52%)]" />
        <div className="absolute -top-48 left-[-12%] h-[620px] w-[620px] rounded-full bg-blue-600/25 blur-[160px]" />
        <div className="absolute -bottom-64 right-[-12%] h-[620px] w-[620px] rounded-full bg-sky-400/18 blur-[170px]" />
        <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.10)_1px,transparent_1px)] [background-size:52px_52px]" />
        <motion.div
          className="absolute -top-24 left-[-20%] h-[420px] w-[520px] rotate-12 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent blur-3xl"
          animate={{ x: ["-15%", "130%"] }}
          transition={{ duration: 7.5, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* CONTENT WRAPPER */}
      <div className="relative mx-auto w-full max-w-6xl px-6">
        {/* HERO */}
        <main className="pt-16 pb-14">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* LEFT */}
            <div className="lg:col-span-6">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, ease: easeOut }}
                className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs font-semibold text-white/75 ring-1 ring-white/12"
              >
                <span className="h-2 w-2 rounded-full bg-blue-400" />
                OFFICIAL VERIFIED
                <span className="text-white/45">•</span>
                i88 MY/SG
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.06, duration: 0.8, ease: easeOut }}
                className="hero-title mt-5 text-6xl sm:text-7xl font-extrabold tracking-tight"
              >
                i88
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12, duration: 0.7, ease: easeOut }}
                className="mt-3 text-lg font-semibold text-white/80"
              >
                Official Page
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.18, duration: 0.7, ease: easeOut }}
                className="mt-7 max-w-xl text-lg leading-relaxed text-white/80"
              >
                Founded in <span className="font-semibold text-white">2016</span>. Over{" "}
                <span className="font-semibold text-white">500k</span> users across{" "}
                <span className="font-semibold text-white">MY</span> &amp;{" "}
                <span className="font-semibold text-white">SG</span>.
                <br />
                Smooth deposit &amp; withdrawal. Try out and see see.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.24, duration: 0.65, ease: easeOut }}
                className="mt-6 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10"
              >
                <div className="text-sm font-semibold text-white/85">
                  Quick safety:
                </div>
                <ul className="mt-2 space-y-1 text-sm text-white/70">
                  <li>• Official links only (at the bottom)</li>
                  <li>• Never share OTP or password</li>
                </ul>
              </motion.div>

              {/* Scroll cue */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.55, duration: 0.6 }}
                className="mt-10 flex items-center gap-3 text-sm text-white/55"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
                  ↓
                </span>
                Scroll down. Official buttons are at the bottom.
              </motion.div>
            </div>

            {/* RIGHT */}
            <div className="lg:col-span-6">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition=
