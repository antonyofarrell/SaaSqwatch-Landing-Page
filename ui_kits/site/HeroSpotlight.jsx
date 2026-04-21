/* global React */
function HeroSpotlight({ onOpen }) {
  return (
    <section style={heroStyles.section}>
      <div style={heroStyles.halo}/>
      <div style={heroStyles.grid}>
        <div style={heroStyles.left}>
          <div style={heroStyles.eyebrow}>Episode 042 · Now watching</div>
          <h1 style={heroStyles.title}>
            The 12 best Notion alternatives,<br/>
            <span style={{ color: "var(--accent)" }}>tested on real projects.</span>
          </h1>
          <p style={heroStyles.lede}>
            Forty hours. Twelve tools. Three earned a spot on the shelf; the rest
            broke in the first week. Here's what we actually shipped with.
          </p>
          <div style={heroStyles.ctaRow}>
            <button style={heroStyles.primary} onClick={onOpen}>
              <i data-lucide="play" style={{ width: 14, height: 14, fill: "currentColor" }}/>
              Watch teardown · 12:48
            </button>
            <button style={heroStyles.secondary}>Read scorecard</button>
          </div>
          <div style={heroStyles.meta}>
            <span>Avery Kell &amp; Sam Roz</span>
            <span>·</span>
            <span>40,281 views</span>
            <span>·</span>
            <span>3 days ago</span>
          </div>
        </div>
        <div style={heroStyles.right}>
          <div style={heroStyles.thumb}>
            <div style={heroStyles.thumbGradient}/>
            <img src="../../assets/icon.png" style={heroStyles.thumbMark} alt=""/>
            <span style={heroStyles.tierChip}>S-tier verdict</span>
            <span style={heroStyles.duration}>12:48</span>
            <div style={heroStyles.playBtn}>
              <i data-lucide="play" style={{ width: 22, height: 22, fill: "currentColor" }}/>
            </div>
            <div style={heroStyles.liveDot}>
              <span style={heroStyles.liveBlink}/>
              Watching now · 218
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const heroStyles = {
  section: {
    position: "relative", maxWidth: 1280, margin: "0 auto",
    padding: "72px 32px 48px", overflow: "hidden",
  },
  halo: {
    position: "absolute", top: -120, right: -120, width: 520, height: 520,
    borderRadius: "50%", background: "radial-gradient(circle, rgba(60,229,229,0.18), transparent 60%)",
    pointerEvents: "none",
  },
  grid: {
    display: "grid", gridTemplateColumns: "1.05fr 1fr", gap: 48,
    alignItems: "center", position: "relative",
  },
  left: {},
  eyebrow: {
    fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 12,
    textTransform: "uppercase", letterSpacing: "0.14em",
    color: "var(--accent)", marginBottom: 20,
  },
  title: {
    fontFamily: "var(--font-display)", fontWeight: 700,
    fontSize: "clamp(40px, 5vw, 60px)", lineHeight: 1.05,
    letterSpacing: "-0.02em", color: "var(--fg-1)", margin: 0,
    textWrap: "balance",
  },
  lede: {
    fontFamily: "var(--font-body)", fontSize: 18, lineHeight: 1.5,
    color: "var(--fg-2)", maxWidth: 520, marginTop: 20,
  },
  ctaRow: { display: "flex", gap: 12, marginTop: 28 },
  primary: {
    background: "var(--accent)", color: "var(--fg-on-teal)",
    border: 0, borderRadius: 999, padding: "14px 22px",
    fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 15,
    cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 10,
  },
  secondary: {
    background: "transparent", color: "var(--fg-1)",
    border: "1px solid var(--border-2)", borderRadius: 999,
    padding: "14px 22px", fontFamily: "var(--font-display)",
    fontWeight: 600, fontSize: 15, cursor: "pointer",
  },
  meta: {
    display: "flex", gap: 10, marginTop: 24, fontFamily: "var(--font-body)",
    fontSize: 13, color: "var(--fg-3)",
  },
  right: {},
  thumb: {
    position: "relative", borderRadius: 20,
    background: "linear-gradient(135deg, #2b375a 0%, #1a2235 60%, #0f1524 100%)",
    aspectRatio: "16/10", overflow: "hidden",
    border: "1px solid var(--border-2)",
    boxShadow: "0 28px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(60,229,229,0.2)",
  },
  thumbGradient: {
    position: "absolute", inset: 0,
    background: "radial-gradient(circle at 70% 30%, rgba(60,229,229,0.28), transparent 55%)",
  },
  thumbMark: {
    position: "absolute", right: -40, bottom: -40,
    width: 260, height: 260, opacity: 0.18,
  },
  tierChip: {
    position: "absolute", top: 16, right: 16,
    background: "var(--accent)", color: "var(--fg-on-teal)",
    fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 11,
    letterSpacing: "0.12em", textTransform: "uppercase",
    padding: "6px 12px", borderRadius: 999,
  },
  duration: {
    position: "absolute", bottom: 16, left: 16,
    fontFamily: "var(--font-mono)", fontSize: 12,
    background: "rgba(15,21,36,0.75)", color: "#f5f7fb",
    padding: "4px 10px", borderRadius: 6,
  },
  playBtn: {
    position: "absolute", left: "50%", top: "50%",
    transform: "translate(-50%,-50%)",
    width: 72, height: 72, borderRadius: "50%",
    background: "var(--accent)", color: "var(--fg-on-teal)",
    display: "flex", alignItems: "center", justifyContent: "center",
    cursor: "pointer",
    boxShadow: "0 12px 32px rgba(60,229,229,0.35)",
  },
  liveDot: {
    position: "absolute", bottom: 16, right: 16,
    display: "inline-flex", alignItems: "center", gap: 8,
    fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 12,
    color: "var(--fg-1)", background: "rgba(15,21,36,0.75)",
    padding: "6px 12px", borderRadius: 999,
  },
  liveBlink: {
    width: 8, height: 8, borderRadius: "50%",
    background: "var(--accent)", boxShadow: "0 0 0 4px rgba(60,229,229,0.25)",
    animation: "sqBlink 2s ease-in-out infinite",
  },
};

window.HeroSpotlight = HeroSpotlight;
