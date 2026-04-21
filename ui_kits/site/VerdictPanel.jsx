/* global React */
function VerdictPanel({ verdict }) {
  const { score, pros, cons, price, pick } = verdict;
  return (
    <aside style={vpStyles.panel}>
      <div style={vpStyles.scoreBlock}>
        <div style={vpStyles.eyebrow}>The verdict</div>
        <div style={vpStyles.scoreRow}>
          <span style={vpStyles.score}>{score}</span>
          <span style={vpStyles.outof}>/ 10</span>
        </div>
        <span style={vpStyles.pickChip}>{pick}</span>
      </div>

      <div style={vpStyles.list}>
        <div style={vpStyles.listHead}>
          <i data-lucide="thumbs-up" style={{ width: 16, height: 16, color: "var(--mint-500)" }}/>
          The good
        </div>
        {pros.map((p) => (
          <div key={p} style={vpStyles.liPro}>
            <span style={vpStyles.dotPro}/> <span>{p}</span>
          </div>
        ))}
      </div>

      <div style={vpStyles.list}>
        <div style={vpStyles.listHead}>
          <i data-lucide="thumbs-down" style={{ width: 16, height: 16, color: "var(--caution-500)" }}/>
          The bad
        </div>
        {cons.map((c) => (
          <div key={c} style={vpStyles.liCon}>
            <span style={vpStyles.dotCon}/> <span>{c}</span>
          </div>
        ))}
      </div>

      <div style={vpStyles.priceBox}>
        <span style={vpStyles.priceLabel}>Price</span>
        <span style={vpStyles.priceValue}>{price}</span>
      </div>

      <button style={vpStyles.cta}>Try it (affiliate)</button>
      <div style={vpStyles.fineprint}>Affiliate links support the channel. They don't buy verdicts.</div>
    </aside>
  );
}

const vpStyles = {
  panel: {
    background: "var(--bg-panel)", border: "1px solid var(--border-1)",
    borderRadius: 20, padding: 24, display: "flex", flexDirection: "column", gap: 18,
    position: "sticky", top: 96, alignSelf: "start",
  },
  scoreBlock: { display: "flex", flexDirection: "column", gap: 8, paddingBottom: 18, borderBottom: "1px solid var(--border-1)" },
  eyebrow: {
    fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 11,
    textTransform: "uppercase", letterSpacing: "0.14em", color: "var(--accent)",
  },
  scoreRow: { display: "flex", alignItems: "baseline", gap: 6 },
  score: {
    fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 64,
    letterSpacing: "-0.04em", color: "var(--fg-1)", lineHeight: 1,
  },
  outof: { fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 20, color: "var(--fg-3)" },
  pickChip: {
    alignSelf: "flex-start", background: "var(--accent)", color: "var(--fg-on-teal)",
    fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 11,
    letterSpacing: "0.1em", textTransform: "uppercase",
    padding: "5px 10px", borderRadius: 999,
  },
  list: { display: "flex", flexDirection: "column", gap: 8 },
  listHead: {
    display: "flex", alignItems: "center", gap: 8,
    fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 13,
    color: "var(--fg-1)", marginBottom: 2,
  },
  liPro: { display: "flex", gap: 10, fontSize: 13, color: "var(--fg-2)", lineHeight: 1.45 },
  liCon: { display: "flex", gap: 10, fontSize: 13, color: "var(--fg-2)", lineHeight: 1.45 },
  dotPro: { width: 6, height: 6, borderRadius: 999, background: "var(--mint-500)", marginTop: 7, flex: "none" },
  dotCon: { width: 6, height: 6, borderRadius: 999, background: "var(--caution-500)", marginTop: 7, flex: "none" },
  priceBox: {
    display: "flex", justifyContent: "space-between", alignItems: "center",
    padding: "12px 14px", background: "var(--bg-inset)", borderRadius: 10,
    border: "1px solid var(--border-1)",
  },
  priceLabel: {
    fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 11,
    textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--fg-3)",
  },
  priceValue: { fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--fg-1)" },
  cta: {
    background: "var(--accent)", color: "var(--fg-on-teal)",
    border: 0, borderRadius: 999, padding: "12px 18px",
    fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 14, cursor: "pointer",
  },
  fineprint: {
    fontFamily: "var(--font-body)", fontSize: 11, color: "var(--fg-3)", lineHeight: 1.5,
  },
};

window.VerdictPanel = VerdictPanel;
