/* global React, ReviewCard */
function ReviewGrid({ reviews, onOpen, heading, eyebrow }) {
  return (
    <section style={rgStyles.section}>
      <div style={rgStyles.headRow}>
        <div>
          {eyebrow && <div style={rgStyles.eyebrow}>{eyebrow}</div>}
          <h2 style={rgStyles.heading}>{heading}</h2>
        </div>
        <div style={rgStyles.filters}>
          {["All", "S-tier", "A-tier", "Skip list"].map((f, i) => (
            <button key={f} style={{
              ...rgStyles.filterBtn,
              ...(i === 0 ? rgStyles.filterBtnActive : {}),
            }}>{f}</button>
          ))}
          <button style={rgStyles.filterIcon}>
            <i data-lucide="sliders-horizontal" style={{ width: 16, height: 16 }}/>
          </button>
        </div>
      </div>
      <div style={rgStyles.grid}>
        {reviews.map((r) => <ReviewCard key={r.id} review={r} onOpen={onOpen}/>)}
      </div>
    </section>
  );
}

const rgStyles = {
  section: { maxWidth: 1280, margin: "0 auto", padding: "24px 32px 48px" },
  headRow: {
    display: "flex", alignItems: "flex-end", justifyContent: "space-between",
    marginBottom: 24, gap: 16, flexWrap: "wrap",
  },
  eyebrow: {
    fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 12,
    textTransform: "uppercase", letterSpacing: "0.14em",
    color: "var(--accent)", marginBottom: 6,
  },
  heading: {
    fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 32,
    letterSpacing: "-0.02em", color: "var(--fg-1)", margin: 0,
  },
  filters: { display: "flex", gap: 8, alignItems: "center" },
  filterBtn: {
    fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 13,
    background: "transparent", color: "var(--fg-2)",
    border: "1px solid var(--border-2)", borderRadius: 999,
    padding: "8px 14px", cursor: "pointer",
  },
  filterBtnActive: {
    background: "var(--bg-panel)", color: "var(--fg-1)",
    borderColor: "var(--accent)",
  },
  filterIcon: {
    width: 36, height: 36, borderRadius: 999,
    background: "transparent", color: "var(--fg-2)",
    border: "1px solid var(--border-2)", cursor: "pointer",
    display: "inline-flex", alignItems: "center", justifyContent: "center",
  },
  grid: {
    display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24,
  },
};

window.ReviewGrid = ReviewGrid;
