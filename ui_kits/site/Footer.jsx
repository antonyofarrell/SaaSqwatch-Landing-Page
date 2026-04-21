/* global React */
function Footer() {
  return (
    <footer style={ftStyles.bar}>
      <div style={ftStyles.inner}>
        <div style={ftStyles.brand}>
          <img src="../../assets/icon.png" width="28" height="28" alt=""/>
          <span style={ftStyles.brandText}>SaaSqwatch</span>
        </div>
        <div style={ftStyles.copy}>
          Tracked down since 2024. No sponsored verdicts — affiliate only.
        </div>
        <div style={ftStyles.links}>
          <a style={ftStyles.link}>YouTube</a>
          <a style={ftStyles.link}>RSS</a>
          <a style={ftStyles.link}>Newsletter</a>
          <a style={ftStyles.link}>Contact</a>
        </div>
      </div>
    </footer>
  );
}

const ftStyles = {
  bar: { borderTop: "1px solid var(--border-1)", marginTop: 48 },
  inner: {
    maxWidth: 1280, margin: "0 auto", padding: "32px",
    display: "flex", gap: 24, alignItems: "center", flexWrap: "wrap",
  },
  brand: { display: "flex", alignItems: "center", gap: 10 },
  brandText: {
    fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 16,
    color: "var(--fg-1)", letterSpacing: "-0.01em",
  },
  copy: { fontFamily: "var(--font-body)", fontSize: 13, color: "var(--fg-3)" },
  links: { marginLeft: "auto", display: "flex", gap: 18 },
  link: {
    fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 13,
    color: "var(--fg-2)", textDecoration: "none", cursor: "pointer",
  },
};

window.Footer = Footer;
