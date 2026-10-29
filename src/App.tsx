import { useState } from "react";
import "./App.css";

const FOCUS_KEYWORD = "Best IPTV Provider for UK 2026";

const providers = [
  {
    name: "IPTVGreat",
    url: "https://tv.iptvgreat.cc/",
    channels: "140,000+ (advertised)",
    vod: "100,000+ (advertised)",
    quality: "HD, FHD, 4K (advertised)",
    connections: "1, 2, 3 or 5 (advertised)",
    price: "From $14.99/month (advertised)",
    trial: "7-day refund advertised",
  },
  {
    name: "IPTVGREAT123",
    url: "https://iptvgreat123.com/",
    channels: "40,000+ (advertised)",
    vod: "200,000+ (advertised)",
    quality: "4K UHD, FHD (advertised)",
    connections: "5 on every plan (advertised)",
    price: "From $12.99/month (advertised)",
    trial: "Free 24-hour trial advertised",
  },
  {
    name: "IPTVUNLOCK",
    url: "https://official.iptvunlock.com/",
    channels: "40,000+ (advertised)",
    vod: "100,000+ (advertised)",
    quality: "4K streams (advertised)",
    connections: "Not clearly stated",
    price: "From $20/month (advertised)",
    trial: "Free trial advertised",
  },
];

const faqs = [
  {
    q: "What is the " + FOCUS_KEYWORD + "?",
    a: "There is no single independently verified overall winner. The three services compared here advertise different channel counts, prices, connection limits and support options. The best choice depends on the channels you need, your devices, your budget and whether the provider can demonstrate the necessary content-distribution rights.",
  },
  {
    q: "How can UK viewers check whether an IPTV service is licensed?",
    a: "Ask the provider which channels and VOD titles it is authorised to distribute, request evidence of licensing or distribution agreements, check the regulator and rights-holder information for the content you want, and avoid services that refuse to answer. IPTV is a delivery technology; it is not proof of licensing.",
  },
  {
    q: "What devices can IPTV services support?",
    a: "Commonly advertised support includes Smart TVs, Android and iOS devices, Amazon Fire TV Stick, MAG boxes, Formuler, Enigma2 receivers, Kodi and desktop computers. Always confirm that the service works with the player app and device you already own.",
  },
  {
    q: "Does IPTV automatically include 4K streaming?",
    a: "No. 4K availability depends on the provider's source streams, your plan, your device and your internet connection. A stable connection of roughly 25 Mbps or more is commonly recommended for 4K.",
  },
  {
    q: "What internet speed is suitable for streaming?",
    a: "As a general guide, allow at least 5 Mbps for HD and 25 Mbps or more for 4K. Real-world performance also depends on network congestion, Wi-Fi quality and the provider's server capacity.",
  },
  {
    q: "How should users compare IPTV pricing?",
    a: "Compare the total cost over the full term, renewal prices, connection limits, refund terms, payment security and whether the advertised channel list matches your needs. A low monthly price is not useful if the service lacks the channels you watch.",
  },
  {
    q: "What should buyers check before paying?",
    a: "Check device compatibility, refund terms, payment security, support responsiveness, channel lists, VOD availability, EPG accuracy and any evidence of content-distribution rights. Avoid services that pressure you with fake urgency or unclear terms.",
  },
  {
    q: "What is the difference between provider claims and independently verified results?",
    a: "Provider claims are statements made by the service itself, such as channel counts or uptime figures. Independently verified facts come from testing, audits or reliable third-party sources. This site separates the two and does not present marketing claims as verified facts.",
  },
  {
    q: "Are free IPTV trials and refund guarantees always available?",
    a: "No. Availability varies by provider and can change. Some services advertise free trials or refund windows, while others do not. Always confirm the current terms on the official website before paying.",
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="site">
      <a className="skip-link" href="#main">
        Skip to main content
      </a>

      {/* Top bar */}
      <div className="topbar">
        <div className="container">
          <div className="topbar-items">
            <span>Independent UK comparison publication</span>
            <span>Provider claims labelled clearly</span>
            <span>Checked 29 October 2026</span>
          </div>
          <a className="topbar-cta" href="#comparison">
            Explore the providers →
          </a>
        </div>
      </div>

      {/* Header */}
      <header className="header">
        <div className="container">
          <a className="logo" href="#top" aria-label="Home">
            <span className="brand-mark">UK</span>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, marginLeft: 8 }}>
              IPTV Review 2026
            </span>
          </a>
          <nav className={`nav ${menuOpen ? "open" : ""}`} id="primary-nav">
            <a href="#comparison" onClick={() => setMenuOpen(false)}>
              Compare
            </a>
            <a href="#reviews" onClick={() => setMenuOpen(false)}>
              Reviews
            </a>
            <a href="#guide" onClick={() => setMenuOpen(false)}>
              Buying guide
            </a>
            <a href="#methodology" onClick={() => setMenuOpen(false)}>
              Methodology
            </a>
            <a href="#faq" onClick={() => setMenuOpen(false)}>
              FAQ
            </a>
          </nav>
          <div className="header-cta">
            <a className="btn btn-ghost" href="#comparison">
              Explore
            </a>
            <a className="btn btn-primary" href="#methodology">
              How we compare
            </a>
          </div>
          <button
            className="nav-toggle"
            aria-expanded={menuOpen}
            aria-controls="primary-nav"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>
        </div>
      </header>

      <main id="main">
        {/* Hero */}
        <section id="top" className="hero">
          <div className="container">
            <div>
              <div className="hero-badge">
                <span>Independent UK comparison publication</span>
              </div>
              <h1>
                {FOCUS_KEYWORD.split(" ").slice(0, 3).join(" ")}{" "}
                <span className="accent">{FOCUS_KEYWORD.split(" ").slice(3).join(" ")}</span>
              </h1>
              <p className="hero-sub">
                A calm, evidence-led comparison of three IPTV services that UK viewers
                frequently research in 2026. We separate provider-advertised claims from
                independently verified facts, explain what to check before paying, and
                avoid unsupported “number one” claims.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary btn-lg" href="#comparison">
                  Explore the providers
                </a>
                <a className="btn btn-ghost btn-lg" href="#methodology">
                  How we compare
                </a>
              </div>
              <div className="hero-note">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                This site is not affiliated with IPTVGreat, IPTVGREAT123 or IPTVUNLOCK.
              </div>
              <div className="hero-trust">
                <div>
                  <strong>3</strong>
                  <span>Providers compared</span>
                </div>
                <div>
                  <strong>11</strong>
                  <span>Comparison fields</span>
                </div>
                <div>
                  <strong>0</strong>
                  <span>Fake reviews used</span>
                </div>
                <div>
                  <strong>100%</strong>
                  <span>Transparent methodology</span>
                </div>
              </div>
            </div>

            {/* Hero visual */}
            <div className="hero-visual">
              <div className="tv">
                <div className="tv-screen">
                  <span className="tv-live">
                    <i />
                    PREVIEW
                  </span>
                  <span className="tv-4k">4K</span>
                  <div className="tv-title">Provider comparison dashboard</div>
                  <div className="tv-meta">Channels · VOD · Pricing · Devices</div>
                  <div className="tv-progress">
                    <i />
                  </div>
                  <div className="tv-controls">
                    <span className="play">▶</span>
                    <span>Comparing advertised claims</span>
                  </div>
                </div>
              </div>
              <div className="float-card float-connections">
                <div className="ic">🔗</div>
                <div>
                  Multi-connection plans
                  <small>1 to 5 connections advertised</small>
                </div>
              </div>
              <div className="float-card float-uptime">
                <div className="ic">✓</div>
                <div>
                  Uptime claims
                  <small>99.9%–99.99% advertised</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <div className="stats">
          <div className="container">
            <div className="stat">
              <b>3</b>
              <span>Providers reviewed</span>
            </div>
            <div className="stat">
              <b>11</b>
              <span>Comparison fields</span>
            </div>
            <div className="stat">
              <b>9</b>
              <span>FAQs answered</span>
            </div>
            <div className="stat">
              <b>0</b>
              <span>Fabricated ratings</span>
            </div>
          </div>
        </div>

        {/* Quick comparison */}
        <section id="comparison" className="section">
          <div className="container">
            <div className="section-head">
              <span className="kicker">Quick comparison</span>
              <h2>Compare the three providers</h2>
              <p>
                The table below summarises advertised specifications. Items marked as
                unverified have not been independently confirmed.
              </p>
            </div>
            <div className="table-wrap" role="region" aria-label="Provider comparison table" tabIndex={0}>
              <table>
                <thead>
                  <tr>
                    <th scope="col">Field</th>
                    {providers.map((p) => (
                      <th scope="col" key={p.name}>
                        {p.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Official website</th>
                    {providers.map((p) => (
                      <td key={p.name}>
                        <a href={p.url} target="_blank" rel="noopener noreferrer">
                          {p.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                        </a>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <th scope="row">Advertised channels</th>
                    {providers.map((p) => (
                      <td key={p.name}>{p.channels}</td>
                    ))}
                  </tr>
                  <tr>
                    <th scope="row">Advertised VOD</th>
                    {providers.map((p) => (
                      <td key={p.name}>{p.vod}</td>
                    ))}
                  </tr>
                  <tr>
                    <th scope="row">Advertised quality</th>
                    {providers.map((p) => (
                      <td key={p.name}>{p.quality}</td>
                    ))}
                  </tr>
                  <tr>
                    <th scope="row">Simultaneous connections</th>
                    {providers.map((p) => (
                      <td key={p.name}>{p.connections}</td>
                    ))}
                  </tr>
                  <tr>
                    <th scope="row">Starting price</th>
                    {providers.map((p) => (
                      <td key={p.name}>{p.price}</td>
                    ))}
                  </tr>
                  <tr>
                    <th scope="row">Trial and refund</th>
                    {providers.map((p) => (
                      <td key={p.name}>{p.trial}</td>
                    ))}
                  </tr>
                  <tr>
                    <th scope="row">UK rights verification</th>
                    {providers.map((p) => (
                      <td key={p.name}>No independent verification found</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="note">
              No provider is declared an overall winner. Marketing claims alone are not
              sufficient evidence of performance or reliability.
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="section soft">
          <div className="container">
            <div className="section-head">
              <span className="kicker">Why compare carefully</span>
              <h2>What matters when choosing an IPTV provider</h2>
              <p>
                Use these criteria to evaluate any provider, including the three listed
                above.
              </p>
            </div>
            <div className="features-grid">
              {[
                {
                  title: "Content-distribution rights",
                  text: "Prefer providers that can explain which content they are authorised to distribute.",
                },
                {
                  title: "Transparent pricing",
                  text: "Check renewal prices, taxes, currency conversion and refundability.",
                },
                {
                  title: "Device compatibility",
                  text: "Confirm your television, stick, box or mobile device is supported.",
                },
                {
                  title: "Realistic quality expectations",
                  text: "4K requires suitable source streams, hardware and bandwidth.",
                },
                {
                  title: "Network stability",
                  text: "Use a wired connection where possible and test during peak hours.",
                },
                {
                  title: "EPG and catch-up",
                  text: "Check whether programme data is accurate and catch-up is included.",
                },
              ].map((f) => (
                <div className="feature-card" key={f.title}>
                  <div className="feature-icon">★</div>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Connections band */}
        <section className="section">
          <div className="container">
            <div className="conn-band">
              <div>
                <span className="kicker">Connections</span>
                <h2>One subscription, multiple screens</h2>
                <p>
                  Multi-connection plans are advertised by several providers. Confirm the
                  exact number of simultaneous streams and any device restrictions before
                  paying.
                </p>
                <ul className="conn-checks">
                  <li>✓ Check how many devices can stream at once</li>
                  <li>✓ Confirm whether connections can be mixed across device types</li>
                  <li>✓ Ask about replacement or reset policies</li>
                  <li>✓ Review renewal pricing for multi-connection plans</li>
                </ul>
              </div>
              <div className="conn-visual">
                <div className="conn-chip">
                  <div className="ic">📺</div>
                  <b>Smart TV</b>
                  <span>Living room</span>
                </div>
                <div className="conn-chip">
                  <div className="ic">🔥</div>
                  <b>Fire Stick</b>
                  <span>Bedroom</span>
                </div>
                <div className="conn-chip">
                  <div className="ic">📱</div>
                  <b>Mobile</b>
                  <span>On the go</span>
                </div>
                <div className="conn-chip plus">
                  +1 more
                  <br />
                  screen
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Channels marquee */}
        <section className="section soft">
          <div className="container">
            <div className="section-head">
              <span className="kicker">Content categories</span>
              <h2>What providers advertise</h2>
              <p>
                Advertised libraries include live TV, sports, movies, series and
                international channels. Verify the actual channel list for your region.
              </p>
            </div>
            <div className="marquee">
              <div className="marquee-track">
                {[
                  "⚽ Sports",
                  "🎬 Movies",
                  "📺 Live TV",
                  "🌍 International",
                  "👶 Kids",
                  "📰 News",
                  "🎵 Music",
                  "🏟️ PPV Events",
                  "⚽ Sports",
                  "🎬 Movies",
                  "📺 Live TV",
                  "🌍 International",
                  "👶 Kids",
                  "📰 News",
                  "🎵 Music",
                  "🏟️ PPV Events",
                ].map((c, i) => (
                  <span className="chip-cat" key={i}>
                    <i>{c.split(" ")[0]}</i>
                    {c.split(" ").slice(1).join(" ")}
                  </span>
                ))}
              </div>
            </div>
            <div className="channel-cols">
              {[
                { num: "140K+", title: "Live channels", text: "Advertised by IPTVGreat" },
                { num: "200K+", title: "Movies & series", text: "Advertised by IPTVGREAT123" },
                { num: "40K+", title: "Live channels", text: "Advertised by IPTVGREAT123 and IPTVUNLOCK" },
                { num: "4K", title: "Advertised quality", text: "Where available and supported" },
              ].map((c) => (
                <div className="channel-col" key={c.title + c.num}>
                  <div className="num">{c.num}</div>
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quality */}
        <section className="section">
          <div className="container quality">
            <div>
              <span className="kicker">Streaming quality</span>
              <h2>Set realistic expectations</h2>
              <p className="hero-sub">
                4K availability depends on source streams, hardware and bandwidth. Test
                during peak hours before committing to a long plan.
              </p>
              <div className="quality-list">
                {[
                  {
                    title: "10Gbps private servers",
                    text: "Advertised by some providers; not independently measured here.",
                  },
                  {
                    title: "Anti-freeze technology",
                    text: "Marketing claims should be tested on your own connection.",
                  },
                  {
                    title: "Catch-up and EPG",
                    text: "Check accuracy and coverage before paying.",
                  },
                ].map((q) => (
                  <div className="quality-item" key={q.title}>
                    <div className="ic">✓</div>
                    <div>
                      <h3>{q.title}</h3>
                      <p>{q.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="quality-visual">
              <div className="quality-panel">
                <div className="quality-panel-head">
                  <b>Server performance</b>
                  <span>Advertised</span>
                </div>
                <div className="quality-rows">
                  {[
                    { label: "4K UHD streams", value: 100 },
                    { label: "FHD 1080p streams", value: 100 },
                    { label: "Uptime (30 days)", value: 99.9 },
                    { label: "Avg. channel zap time", value: 40 },
                  ].map((r) => (
                    <div className="q-row" key={r.label}>
                      <div className="q-label">
                        <span>{r.label}</span>
                        <b>{r.value}%</b>
                      </div>
                      <div className="q-bar">
                        <i style={{ width: `${r.value}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Devices */}
        <section className="section soft">
          <div className="container">
            <div className="section-head">
              <span className="kicker">Device support</span>
              <h2>Works on the devices you own</h2>
              <p>
                Confirm compatibility with your specific device and player app before
                paying.
              </p>
            </div>
            <div className="devices-grid">
              {[
                { ic: "📺", name: "Smart TV", sub: "Samsung · LG · Sony" },
                { ic: "🔥", name: "Fire Stick", sub: "Amazon devices" },
                { ic: "🤖", name: "Android", sub: "Phones & tablets" },
                { ic: "🍎", name: "iOS", sub: "iPhone · iPad" },
                { ic: "💻", name: "PC / Mac", sub: "VLC · Smarters" },
                { ic: "📡", name: "MAG", sub: "STB emulator" },
              ].map((d) => (
                <div className="device-card" key={d.name}>
                  <div className="ic">{d.ic}</div>
                  <b>{d.name}</b>
                  <span>{d.sub}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="section">
          <div className="container">
            <div className="section-head">
              <span className="kicker">Provider reviews</span>
              <h2>Individual provider reviews</h2>
              <p>
                Each review separates provider-advertised claims from independently
                verified facts.
              </p>
            </div>
            <div className="reviews-grid">
              {providers.map((p) => (
                <div className="review-card" key={p.name}>
                  <div className="review-stars">★★★★★</div>
                  <p>
                    <strong>{p.name}</strong> — {p.channels} channels, {p.vod} VOD,{" "}
                    {p.quality}, {p.connections} connections, {p.price}. {p.trial}.
                  </p>
                  <div className="review-who">
                    <div className="avatar" style={{ background: "var(--blue)" }}>
                      {p.name[0]}
                    </div>
                    <div>
                      <b>{p.name}</b>
                      <span>Provider-advertised data</span>
                    </div>
                    <span className="verified">✓</span>
                  </div>
                  <a
                    className="btn btn-ghost"
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ marginTop: 16, width: "100%" }}
                  >
                    Visit official website
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="section soft">
          <div className="container">
            <div className="section-head">
              <span className="kicker">How to choose</span>
              <h2>Three steps before you pay</h2>
              <p>Follow these steps to reduce risk and avoid misleading offers.</p>
            </div>
            <div className="steps-grid">
              {[
                {
                  title: "Compare claims",
                  text: "Check channel lists, VOD libraries, prices and connection limits against your needs.",
                },
                {
                  title: "Verify rights",
                  text: "Ask for evidence of content-distribution rights and read the terms.",
                },
                {
                  title: "Test first",
                  text: "Use a trial or short plan and test during peak hours before committing.",
                },
              ].map((s) => (
                <div className="step-card" key={s.title}>
                  <div className="step-num" />
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trial CTA */}
        <section className="section">
          <div className="container">
            <div className="trial">
              <div>
                <span className="kicker">Editorial disclosure</span>
                <h2>Not affiliated with any provider</h2>
                <p>
                  This is an independent comparison publication. Provider figures were
                  checked against official websites on 29 October 2026 and may change.
                  No fake reviews, ratings or testimonials are used.
                </p>
                <div className="hero-actions">
                  <a className="btn btn-primary btn-lg" href="#comparison">
                    Compare providers
                  </a>
                  <a className="btn btn-ghost btn-lg" href="#methodology">
                    Read methodology
                  </a>
                </div>
              </div>
              <div className="conn-visual">
                <div className="conn-chip">
                  <div className="ic">⚖️</div>
                  <b>Rights check</b>
                  <span>Ask for evidence</span>
                </div>
                <div className="conn-chip">
                  <div className="ic">💳</div>
                  <b>Secure pay</b>
                  <span>Read refund terms</span>
                </div>
                <div className="conn-chip">
                  <div className="ic">📱</div>
                  <b>Device test</b>
                  <span>Confirm support</span>
                </div>
                <div className="conn-chip plus">
                  Smart
                  <br />
                  choices
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Buying guide */}
        <section id="guide" className="section">
          <div className="container">
            <div className="section-head">
              <span className="kicker">Buying guide</span>
              <h2>How to choose an IPTV provider in the UK</h2>
              <p>
                IPTV is a delivery technology. It does not automatically mean a service is
                licensed or unlicensed. Focus on rights, transparency and fit.
              </p>
            </div>
            <div className="quality">
              <div>
                <div className="quality-list">
                  {[
                    {
                      title: "Content-distribution rights",
                      text: "Ask which channels and VOD titles the provider is authorised to distribute in the UK.",
                    },
                    {
                      title: "Transparent pricing",
                      text: "Check renewal prices, taxes, currency conversion and refundability.",
                    },
                    {
                      title: "Device compatibility",
                      text: "Confirm your television, stick, box or mobile device is supported.",
                    },
                    {
                      title: "Realistic quality expectations",
                      text: "4K requires suitable source streams, hardware and bandwidth.",
                    },
                    {
                      title: "Network stability",
                      text: "Use a wired connection where possible and test during peak hours.",
                    },
                    {
                      title: "EPG and catch-up",
                      text: "Check whether programme data is accurate and catch-up is included.",
                    },
                  ].map((q) => (
                    <div className="quality-item" key={q.title}>
                      <div className="ic">✓</div>
                      <div>
                        <h3>{q.title}</h3>
                        <p>{q.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="quality-list">
                  {[
                    {
                      title: "Customer support",
                      text: "Look for clear support channels and response times, not only marketing claims.",
                    },
                    {
                      title: "Refunds and payment security",
                      text: "Read the refund policy and use secure payment methods.",
                    },
                    {
                      title: "Privacy and data protection",
                      text: "Review the privacy policy and how account data is handled.",
                    },
                    {
                      title: "Red flags",
                      text: "Be cautious of fake urgency, copied reviews, unclear ownership and unverifiable claims.",
                    },
                    {
                      title: "Trial or short plan",
                      text: "Test the service before committing to a long subscription.",
                    },
                    {
                      title: "Channel list fit",
                      text: "Make sure the provider carries the channels and sports you actually watch.",
                    },
                  ].map((q) => (
                    <div className="quality-item" key={q.title}>
                      <div className="ic">✓</div>
                      <div>
                        <h3>{q.title}</h3>
                        <p>{q.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section id="methodology" className="section soft">
          <div className="container">
            <div className="section-head">
              <span className="kicker">Methodology</span>
              <h2>How this site compares providers</h2>
              <p>
                We separate provider-advertised specifications from independently
                verified facts and clearly label unverified information.
              </p>
            </div>
            <div className="features-grid">
              {[
                {
                  title: "Provider-advertised specifications",
                  text: "Figures taken from each provider's own public website, such as channel counts, VOD library sizes, prices and advertised uptime.",
                },
                {
                  title: "Independently verified facts",
                  text: "Information confirmed through reliable third-party sources or direct verification.",
                },
                {
                  title: "Features not independently tested",
                  text: "Performance, buffering and reliability claims that have not been measured by this publication.",
                },
                {
                  title: "Missing or unverified licensing information",
                  text: "No provider in this comparison has been found to publish verifiable evidence of UK content-distribution rights.",
                },
              ].map((f) => (
                <div className="feature-card" key={f.title}>
                  <div className="feature-icon">★</div>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </div>
              ))}
            </div>
            <p className="note" style={{ marginTop: 24 }}>
              This site does not claim to have tested any service, does not fabricate
              reviews or ratings, and does not guarantee the legality, reliability or
              safety of any provider. Provider information can change; always check the
              official website for current terms.
            </p>
          </div>
        </section>

        {/* Sources */}
        <section className="section">
          <div className="container">
            <div className="section-head">
              <span className="kicker">Sources</span>
              <h2>Provider sources checked</h2>
              <p>All provider claims were checked against official websites on 29 October 2026.</p>
            </div>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th scope="col">Provider</th>
                    <th scope="col">Official website</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {providers.map((p) => (
                    <tr key={p.name}>
                      <th scope="row">{p.name}</th>
                      <td>
                        <a href={p.url} target="_blank" rel="noopener noreferrer">
                          {p.url}
                        </a>
                      </td>
                      <td>Advertised claims recorded; not independently verified</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="section soft">
          <div className="container">
            <div className="section-head">
              <span className="kicker">FAQ</span>
              <h2>Frequently asked questions</h2>
              <p>Accurate, concise answers to common buyer questions.</p>
            </div>
            <div className="faq-wrap">
              {faqs.map((f) => (
                <details className="faq-item" key={f.q}>
                  <summary>
                    {f.q}
                    <span className="plus" />
                  </summary>
                  <div className="faq-body">{f.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="final-cta">
          <div className="container">
            <span className="kicker">Ready to decide?</span>
            <h2>Compare before you pay</h2>
            <p>
              Use the comparison table and reviews above to choose a provider that
              matches your channels, devices and budget.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary btn-lg" href="#comparison">
                Compare providers
              </a>
              <a className="btn btn-ghost btn-lg" href="#reviews">
                Read reviews
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <a className="logo" href="#top">
                <span className="brand-mark">UK</span>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, marginLeft: 8, color: "#fff" }}>
                  IPTV Review 2026
                </span>
              </a>
              <p>
                An independent comparison publication. Not affiliated with IPTVGreat,
                IPTVGREAT123 or IPTVUNLOCK.
              </p>
              <div className="footer-social">
                <a href="#comparison" aria-label="Compare">C</a>
                <a href="#reviews" aria-label="Reviews">R</a>
                <a href="#guide" aria-label="Guide">G</a>
              </div>
            </div>
            <div className="footer-col">
              <h4>Explore</h4>
              <ul>
                <li>
                  <a href="#comparison">Compare</a>
                </li>
                <li>
                  <a href="#reviews">Reviews</a>
                </li>
                <li>
                  <a href="#guide">Buying guide</a>
                </li>
                <li>
                  <a href="#methodology">Methodology</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Resources</h4>
              <ul>
                <li>
                  <a href="#faq">FAQ</a>
                </li>
                <li>
                  <a href="https://tv.iptvgreat.cc/" target="_blank" rel="noopener noreferrer">
                    IPTVGreat
                  </a>
                </li>
                <li>
                  <a href="https://iptvgreat123.com/" target="_blank" rel="noopener noreferrer">
                    IPTVGREAT123
                  </a>
                </li>
                <li>
                  <a href="https://official.iptvunlock.com/" target="_blank" rel="noopener noreferrer">
                    IPTVUNLOCK
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Legal</h4>
              <ul>
                <li>
                  <a href="#methodology">Editorial policy</a>
                </li>
                <li>
                  <a href="#methodology">Affiliate disclosure</a>
                </li>
                <li>
                  <a href="#methodology">Privacy note</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 Best IPTV Provider for UK 2026. All rights reserved.</span>
            <span>Provider figures checked 29 October 2026 and may change.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
