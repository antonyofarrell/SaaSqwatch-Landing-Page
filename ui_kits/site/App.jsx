/* global React, TopNav, HeroSpotlight, ReviewGrid, TierList, VerdictPanel, Footer */
const { useState, useEffect } = React;

const REVIEWS = [
  { id: 1, tier: "S", category: "Comparisons · Ep 042", title: "The 12 best Notion alternatives, tested on real projects", author: "Avery Kell", views: "40,281 views", age: "3 days ago", duration: "12:48", thumbBg: "linear-gradient(135deg,#2b375a,#1a2235)" },
  { id: 2, tier: "A", category: "Deep dive · Ep 041", title: "Linear vs Jira: one-month switch diary", author: "Sam Roz", views: "28,140 views", age: "1 week ago", duration: "18:02", thumbBg: "linear-gradient(135deg,#3a4872,#1a2235)" },
  { id: 3, tier: "D", category: "Teardown · Ep 040", title: "This AI 'agent builder' crashed after 4 minutes", author: "Avery Kell", views: "112,908 views", age: "2 weeks ago", duration: "9:21", thumbBg: "linear-gradient(135deg,#d77553,#1a2235)" },
  { id: 4, tier: "B", category: "Tools · Ep 039", title: "Cursor vs Windsurf vs Zed, for Rails devs", author: "Jess Park", views: "66,002 views", age: "2 weeks ago", duration: "22:44", thumbBg: "linear-gradient(135deg,#5dcaa5,#1a2235)" },
  { id: 5, tier: "C", category: "Review · Ep 038", title: "A brutally honest look at Retool's pricing shift", author: "Sam Roz", views: "19,470 views", age: "3 weeks ago", duration: "14:15", thumbBg: "linear-gradient(135deg,#2b375a,#0f1524)" },
  { id: 6, tier: "A", category: "Shelf-worthy · Ep 037", title: "Raycast extensions that actually save 10 min/day", author: "Avery Kell", views: "54,812 views", age: "1 month ago", duration: "11:07", thumbBg: "linear-gradient(135deg,#3ea985,#1a2235)" },
];

const TIER_ENTRIES = [
  { name: "Linear", tier: "S" }, { name: "Height", tier: "S" },
  { name: "Notion", tier: "A" }, { name: "Asana", tier: "A" }, { name: "Trello", tier: "A" },
  { name: "ClickUp", tier: "B" }, { name: "Basecamp", tier: "B" },
  { name: "Jira", tier: "C" }, { name: "Monday", tier: "C" },
  { name: "Wrike", tier: "D" },
  { name: "AgentBuilder Pro", tier: "F" },
];

const VERDICT = {
  score: 9.2,
  pick: "S-tier · shelf-worthy",
  pros: [
    "Keyboard-first. You stop reaching for the mouse in a day.",
    "Cycles actually work — deadlines feel real, not decorative.",
    "Predictable pricing; no enterprise upsell tantrum.",
  ],
  cons: [
    "Docs are thin if you're coming from Notion.",
    "Mobile still feels like a companion app, not a home.",
  ],
  price: "$0 – $14/seat/mo",
};

function App() {
  const [route, setRoute] = useState(() => localStorage.getItem("sq_route") || "home");
  useEffect(() => { localStorage.setItem("sq_route", route); }, [route]);
  useEffect(() => { if (window.lucide) window.lucide.createIcons(); }, [route]);

  return (
    <div style={{ minHeight: "100vh" }}>
      <TopNav current={route} onNav={setRoute}/>
      {route === "home" && (
        <>
          <HeroSpotlight onOpen={() => setRoute("detail")}/>
          <ReviewGrid
            eyebrow="Recently tracked"
            heading="Fresh teardowns"
            reviews={REVIEWS}
            onOpen={() => setRoute("detail")}
          />
        </>
      )}
      {route === "tiers" && <TierList entries={TIER_ENTRIES}/>}
      {route === "detail" && <ReviewDetail onBack={() => setRoute("home")}/>}
      {route === "compare" && <Placeholder title="Comparisons" blurb="Head-to-heads, live builds, migrations."/>}
      {route === "tools" && <Placeholder title="Tools we use" blurb="The stack behind the channel. Affiliate-linked, honest."/>}
      <Footer/>
    </div>
  );
}

function Placeholder({ title, blurb }) {
  return (
    <section style={{ maxWidth: 1280, margin: "0 auto", padding: "72px 32px" }}>
      <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.14em", color: "var(--accent)", marginBottom: 10 }}>Coming soon</div>
      <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 56, letterSpacing: "-0.02em", margin: 0 }}>{title}</h1>
      <p style={{ fontFamily: "var(--font-body)", fontSize: 20, color: "var(--fg-2)", maxWidth: 560, marginTop: 16 }}>{blurb}</p>
    </section>
  );
}

function ReviewDetail({ onBack }) {
  return (
    <section style={{ maxWidth: 1280, margin: "0 auto", padding: "48px 32px" }}>
      <button onClick={onBack} style={{ background: "transparent", border: 0, color: "var(--fg-2)", fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 13, cursor: "pointer", marginBottom: 20, display: "inline-flex", alignItems: "center", gap: 6 }}>
        <i data-lucide="arrow-left" style={{ width: 14, height: 14 }}/> Back to feed
      </button>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 32, alignItems: "start" }}>
        <article>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.14em", color: "var(--accent)", marginBottom: 12 }}>Ep 042 · Comparisons</div>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 48, lineHeight: 1.05, letterSpacing: "-0.02em", margin: 0, textWrap: "balance" }}>
            The 12 best Notion alternatives, tested on real projects.
          </h1>
          <div style={{ display: "flex", gap: 12, marginTop: 16, fontSize: 13, color: "var(--fg-3)" }}>
            <span>Avery Kell &amp; Sam Roz</span><span>·</span><span>Apr 18, 2026</span><span>·</span><span>8 min read · 12:48 video</span>
          </div>
          <div style={{ marginTop: 24, aspectRatio: "16/9", borderRadius: 16, overflow: "hidden", background: "linear-gradient(135deg,#2b375a,#1a2235)", position: "relative", border: "1px solid var(--border-2)" }}>
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 35% 40%, rgba(60,229,229,0.25), transparent 55%)" }}/>
            <img src="../../assets/icon.png" style={{ position: "absolute", right: -60, bottom: -60, width: 320, opacity: 0.18 }}/>
            <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", width: 88, height: 88, borderRadius: "50%", background: "var(--accent)", color: "var(--fg-on-teal)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 16px 40px rgba(60,229,229,0.35)" }}>
              <i data-lucide="play" style={{ width: 30, height: 30, fill: "currentColor" }}/>
            </div>
          </div>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 20, lineHeight: 1.5, color: "var(--fg-1)", marginTop: 28, textWrap: "pretty" }}>
            Forty hours. Twelve tools. Three earned a spot on the shelf; the rest broke in the first week. Here's what we actually shipped with — and what we uninstalled on day two.
          </p>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 28, letterSpacing: "-0.01em", marginTop: 36 }}>The good</h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 16, lineHeight: 1.7, color: "var(--fg-2)", marginTop: 12 }}>
            The winners shared three things: fast sync, predictable pricing, and an export that didn't feel like a punishment. Everything else is a feature war you don't need to fight.
          </p>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 28, letterSpacing: "-0.01em", marginTop: 28 }}>The bad</h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 16, lineHeight: 1.7, color: "var(--fg-2)", marginTop: 12 }}>
            Two tools raised prices mid-test. One shipped a breaking API change on a Tuesday. A third's "AI assistant" invented a meeting we did not have. We logged everything — video shows the receipts.
          </p>
        </article>
        <VerdictPanel verdict={VERDICT}/>
      </div>
    </section>
  );
}

window.App = App;
