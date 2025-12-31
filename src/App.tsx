export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: 40,
        background: "#06152c",
        color: "white",
        fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial",
      }}
    >
      <h1 style={{ fontSize: 56, margin: 0 }}>i88</h1>
      <p style={{ marginTop: 12, fontSize: 18, maxWidth: 720, lineHeight: 1.5 }}>
        Founded in 2016. Over 500k users across Malaysia &amp; Singapore.
        <br />
        Smooth deposit &amp; withdrawal. Try out and see see.
      </p>

      <div style={{ display: "flex", gap: 12, marginTop: 20, flexWrap: "wrap" }}>
        <a
          href="https://www.facebook.com/profile.php?id=61584225863316"
          target="_blank"
          rel="noreferrer"
          style={{
            padding: "12px 16px",
            borderRadius: 12,
            background: "rgba(0,140,255,0.22)",
            border: "1px solid rgba(0,140,255,0.55)",
            color: "white",
            textDecoration: "none",
            fontWeight: 700,
          }}
        >
          i88 MY Official
        </a>

        <a
          href="https://www.facebook.com/profile.php?id=61584669658907"
          target="_blank"
          rel="noreferrer"
          style={{
            padding: "12px 16px",
            borderRadius: 12,
            background: "rgba(0,140,255,0.22)",
            border: "1px solid rgba(0,140,255,0.55)",
            color: "white",
            textDecoration: "none",
            fontWeight: 700,
          }}
        >
          i88 SG Official
        </a>
      </div>

      <p style={{ marginTop: 18, opacity: 0.8 }}>
        If you can see this page, your deployment is fine. Your fancy components were crashing or hidden.
      </p>
    </div>
  );
}
