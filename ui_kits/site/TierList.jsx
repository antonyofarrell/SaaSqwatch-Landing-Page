/* global React */
function TierList({ entries }) {
  const tiers = [
    { id: "S", bg: "#3ce5e5", fg: "#0f1524", label: "Shelf-worthy" },
    { id: "A", bg: "#5dcaa5", fg: "#0f1524", label: "Buy it" },
    { id: "B", bg: "#b5f5f5", fg: "#0f1524", label: "Solid" },
    { id: "C", bg: "#2b375a", fg: "#f5f7fb", label: "Meh" },
    { id: "D", bg: "#f0997b", fg: "#0f1524", label: "Skip" },
    { id: "F", bg: "#d77553", fg: "#0f1524", label: "Actively bad" },
  ];
  return (
    <section style={tlStyles.section}>
      <div style={tlStyles.head}>
        <div style={tlStyles.eyebrow}>The tier list · Project management</div>
        <h2 style={tlStyles.heading}>12 tools, ranked.</h2>
      </div>
      <div style={tlStyles.rack}>
        {tiers.map((t) => {
          const items = (entries || []).filter((e) => e.tier === t.id);
          return (
            <div key={t.id} style={tlStyles.row}>
              <div style={{ ...tlStyles.tierCell, background: t.bg, color: t.fg }}>
                <span style={tlStyles.tierLetter}>{t.id}</span>
                <span style={tlStyles.tierLabel}>{t.label}</span>
              </div>
              <div style={tlStyles.itemsCell}>
                {items.length === 0 && <span style={tlStyles.empty}>— nothing here</span>}
                {items.map((it) => (
                  <span key={it.name} style={tlStyles.pill}>{it.name}</span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

const tlStyles = {
  section: { maxWidth: 1280, margin: "0 auto", padding: "24px 32px 64px" },
  head: { marginBottom: 20 },
  eyebrow: {
    fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 12,
    textTransform: "uppercase", letterSpacing: "0.14em",
    color: "var(--accent)", marginBottom: 8,
  },
  heading: {
    fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 32,
    letterSpacing: "-0.02em", color: "var(--fg-1)", margin: 0,
  },
  rack: {
    background: "var(--bg-panel)", border: "1px solid var(--border-1)",
    borderRadius: 16, overflow: "hidden",
  },
  row: {
    display: "grid", gridTemplateColumns: "160px 1fr",
    borderTop: "1px solid var(--border-1)",
  },
  tierCell: {
    padding: "18px 16px", display: "flex", flexDirection: "column",
    gap: 2, justifyContent: "center",
  },
  tierLetter: {
    fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 28,
    letterSpacing: "-0.03em", lineHeight: 1,
  },
  tierLabel: {
    fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 11,
    textTransform: "uppercase", letterSpacing: "0.12em", opacity: 0.8,
  },
  itemsCell: {
    padding: "14px 18px", display: "flex", gap: 8, flexWrap: "wrap",
    alignItems: "center",
  },
  empty: {
    fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--fg-3)",
  },
  pill: {
    fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 13,
    background: "var(--bg-inset)", border: "1px solid var(--border-2)",
    color: "var(--fg-1)", padding: "6px 12px", borderRadius: 999,
  },
};

window.TierList = TierList;
