/* global React */
function ReviewCard({ review, onOpen }) {
  const tierColors = {
    S: { bg: "#3ce5e5", fg: "#0f1524" },
    A: { bg: "#5dcaa5", fg: "#0f1524" },
    B: { bg: "#b5f5f5", fg: "#0f1524" },
    C: { bg: "#2b375a", fg: "#f5f7fb" },
    D: { bg: "#f0997b", fg: "#0f1524" },
    F: { bg: "#d77553", fg: "#0f1524" },
  };
  const tc = tierColors[review.tier] || tierColors.C;
  return (
    <article style={rcStyles.card} onClick={() => onOpen && onOpen(review)}>
      <div style={{ ...rcStyles.thumb, background: review.thumbBg }}>
        <div style={rcStyles.thumbHaze}/>
        <span style={{ ...rcStyles.tier, background: tc.bg, color: tc.fg }}>
          {review.tier}-tier
        </span>
        <span style={rcStyles.duration}>{review.duration}</span>
        <div style={rcStyles.play}>
          <i data-lucide="play" style={{ width: 16, height: 16, fill: "currentColor" }}/>
        </div>
      </div>
      <div style={rcStyles.body}>
        <div style={rcStyles.eyebrow}>{review.category}</div>
        <h3 style={rcStyles.title}>{review.title}</h3>
        <div style={rcStyles.meta}>
          <span>{review.author}</span>
          <span>·</span>
          <span>{review.views}</span>
          <span>·</span>
          <span>{review.age}</span>
        </div>
      </div>
    </article>
  );
}

const rcStyles = {
  card: {
    background: "var(--bg-panel)", border: "1px solid var(--border-1)",
    borderRadius: 16, overflow: "hidden", cursor: "pointer",
    transition: "transform 150ms ease, box-shadow 150ms ease, background 150ms ease",
  },
  thumb: {
    position: "relative", aspectRatio: "16/9", overflow: "hidden",
  },
  thumbHaze: {
    position: "absolute", inset: 0,
    background: "radial-gradient(circle at 30% 40%, rgba(60,229,229,0.18), transparent 55%), linear-gradient(180deg, transparent 60%, rgba(15,21,36,0.65))",
  },
  tier: {
    position: "absolute", top: 10, right: 10,
    fontFamily: "var(--font-display)", fontWeight: 700,
    fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase",
    padding: "4px 9px", borderRadius: 999,
  },
  duration: {
    position: "absolute", bottom: 10, left: 10,
    fontFamily: "var(--font-mono)", fontSize: 11,
    background: "rgba(15,21,36,0.75)", color: "#f5f7fb",
    padding: "3px 8px", borderRadius: 4,
  },
  play: {
    position: "absolute", right: 12, bottom: 12,
    width: 36, height: 36, borderRadius: "50%",
    background: "rgba(60,229,229,0.95)", color: "#0f1524",
    display: "flex", alignItems: "center", justifyContent: "center",
  },
  body: { padding: "16px 18px 18px" },
  eyebrow: {
    fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 11,
    textTransform: "uppercase", letterSpacing: "0.12em",
    color: "var(--accent)", marginBottom: 8,
  },
  title: {
    fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18,
    lineHeight: 1.25, letterSpacing: "-0.01em",
    color: "var(--fg-1)", margin: 0, textWrap: "balance",
  },
  meta: {
    display: "flex", gap: 8, marginTop: 12, fontSize: 12,
    color: "var(--fg-3)", fontFamily: "var(--font-body)",
  },
};

window.ReviewCard = ReviewCard;
