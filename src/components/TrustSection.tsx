import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const easeOut = [0.22, 1, 0.36, 1] as const;

export function TrustFakePages() {
  const tips = [
    {
      title: "Only trust official buttons",
      desc: "If it’s not on this landing page bottom buttons, it’s not official.",
    },
    {
      title: "No OTP / password",
      desc: "We never ask for OTP or your password. Anyone asking = scam.",
    },
    {
      title: "Check the page name carefully",
      desc: "Fake pages use similar names to confuse you. Look twice.",
    },
  ];

  return (
    <section className="py-16 sm:py-24">
      <div className="rounded-3xl bg-white/5 ring-1 ring-white/12 overflow-hidden">
        <div className="p-7 sm:p-10 lg:p-12">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: easeOut }}
          >
            <div className="text-xs font-semibold text-white/70">
              SAFETY CHECK
            </div>
            <h3 className="mt-2 text-3xl sm:text-4xl font-extrabold">
              Spot fake pages in 5 seconds
            </h3>
            <p className="mt-2 max-w-2xl text-white/75">
              Simple rule: official links only. If someone DM you and push you to
              pay fast — pause. Think.
            </p>
          </motion.div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {tips.map((t) => (
              <Tilt
                key={t.title}
                tiltMaxAngleX={7}
                tiltMaxAngleY={9}
                glareEnable
                glareMaxOpacity={0.16}
                glareColor="white"
                glarePosition="all"
              >
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.65, ease: easeOut }}
                  className="h-full rounded-2xl bg-white/6 ring-1 ring-white/12 p-6"
                >
                  <div className="text-sm font-extrabold">{t.title}</div>
                  <div className="mt-2 text-sm text-white/70">{t.desc}</div>
                  <div className="mt-5 h-2 w-full rounded-full bg-white/10 overflow-hidden">
                    <motion.div
                      className="h-full w-1/2 rounded-full bg-gradient-to-r from-sky-300 to-blue-500"
                      animate={{ x: ["-30%", "130%"] }}
                      transition={{
                        duration: 2.6,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  </div>
                </motion.div>
              </Tilt>
            ))}
          </div>

          <div className="mt-10 flex items-center gap-3 text-sm text-white/60">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
              ↓
            </span>
            Next: i88 story — why people trust us long-term.
          </div>
        </div>
      </div>
    </section>
  );
}
