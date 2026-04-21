/* global React */
const { useState } = React;

function TopNav({ current, onNav }) {
  const items = [
    { id: "home", label: "Reviews" },
    { id: "compare", label: "Comparisons" },
    { id: "tiers", label: "Tier lists" },
    { id: "tools", label: "Tools" },
  ];
  return (
    <header style={navStyles.bar}>
      <div style={navStyles.inner}>
        <a href="#" onClick={(e) => { e.preventDefault(); onNav("home"); }} style={navStyles.brand}>
          <img src="../../assets/icon.png" width="32" height="32" alt="SaaSqwatch"/>
          <span style={navStyles.brandText}>SaaSqwatch</span>
        </a>
        <nav style={navStyles.nav}>
          {items.map((it) => (
            <a key={it.id} href="#" onClick={(e) => { e.preventDefault(); onNav(it.id); }}
               style={{ ...navStyles.navItem, color: current === it.id ? "var(--fg-1)" : "var(--fg-2)" }}>
              {it.label}
              {current === it.id && <span style={navStyles.navDot}/>}
            </a>
          ))}
        </nav>
        <div style={navStyles.right}>
          <div style={navStyles.search}>
            <i data-lucide="search" style={{ width: 14, height: 14 }}/>
            <span>Search tools…</span>
            <span style={navStyles.kbd}>⌘K</span>
          </div>
          <button style={navStyles.subscribe}>Subscribe</button>
        </div>
      </div>
    </header>
  );
}

const navStyles = {
  bar: {
    position: "sticky", top: 0, zIndex: 10,
    background: "rgba(26,34,53,0.85)", backdropFilter: "blur(12px)",
    borderBottom: "1px solid var(--border-1)",
  },
  inner: {
    maxWidth: 1280, margin: "0 auto", padding: "14px 32px",
    display: "flex", alignItems: "center", gap: 28,
  },
  brand: { display: "flex", alignItems: "center", gap: 10, textDecoration: "none" },
  brandText: {
    fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18,
    color: "var(--fg-1)", letterSpacing: "-0.01em",
  },
  nav: { display: "flex", gap: 22 },
  navItem: {
    fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 14,
    textDecoration: "none", position: "relative", padding: "4px 0",
  },
  navDot: {
    position: "absolute", bottom: -4, left: "50%", transform: "translateX(-50%)",
    width: 4, height: 4, borderRadius: 999, background: "var(--accent)",
  },
  right: { marginLeft: "auto", display: "flex", alignItems: "center", gap: 12 },
  search: {
    display: "flex", alignItems: "center", gap: 8,
    background: "var(--bg-inset)", border: "1px solid var(--border-2)",
    borderRadius: 999, padding: "7px 14px", fontSize: 13, color: "var(--fg-3)",
    width: 240, cursor: "text",
  },
  kbd: {
    marginLeft: "auto", fontFamily: "var(--font-mono)", fontSize: 11,
    background: "rgba(255,255,255,0.05)", padding: "2px 6px", borderRadius: 4,
  },
  subscribe: {
    background: "var(--accent)", color: "var(--fg-on-teal)",
    border: 0, borderRadius: 999, padding: "10px 18px",
    fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 13,
    cursor: "pointer",
  },
};

window.TopNav = TopNav;
