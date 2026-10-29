import { useEffect, useRef, useState } from "react";
import "./App.css";

const FOCUS_KEYWORD = "Best IPTV Provider for UK 2026";

const providers = [
  {
    name: "IPTVGreat",
    url: "https://tv.iptvgreat.cc/",
    channels: "140,000+ live channels (advertised)",
    vod: "100,000+ movies and series (advertised)",
    quality: "HD, FHD and 4K (advertised)",
    devices: "Smart TV, Android, iOS, Fire TV Stick, MAG, Formuler, Enigma2, Kodi, PC and Mac (advertised)",
    connections: "1, 2, 3 or 5 simultaneous connections (advertised)",
    price: "From $14.99/month; lifetime option advertised at $249.99 (advertised, checked 2026-10-29)",
    trial: "7-day refund policy advertised; no free trial advertised",
    epg: "5-day EPG advertised",
    support: "24/7 live support advertised",
    verification: "No independent verification of UK content-distribution rights found on the provider's public pages.",
  },
  {
    name: "IPTVGREAT123",
    url: "https://iptvgreat123.com/",
    channels: "40,000+ live channels (advertised)",
    vod: "200,000+ movies and series (advertised)",
    quality: "4K UHD and FHD (advertised)",
    devices: "Smart TV, Fire Stick, Android, iOS, Windows, Mac, MAG and Enigma2 (advertised)",
    connections: "5 simultaneous connections on every plan (advertised)",
    price: "From $12.99/month; 6-month and 12-month plans advertised (advertised, checked 2026-10-29)",
    trial: "Free 24-hour trial advertised; 7-day money-back guarantee advertised",
    epg: "Full EPG and 7-day catch-up advertised",
    support: "24/7 live chat and WhatsApp advertised",
    verification: "No independent verification of UK content-distribution rights found on the provider's public pages.",
  },
  {
    name: "IPTVUNLOCK",
    url: "https://official.iptvunlock.com/",
    channels: "40,000+ live channels (advertised)",
    vod: "100,000+ movies and series (advertised)",
    quality: "4K streams and 99.99% uptime advertised",
    devices: "Smart TV, mobile, tablet, Fire Stick and other devices (advertised)",
    connections: "Not clearly stated on the public homepage; check official site",
    price: "Plans from $20 for one month to $90 for twelve months (advertised, checked 2026-10-29)",
    trial: "Free trial advertised on the site",
    epg: "EPG advertised",
    support: "24/7 support advertised",
    verification: "No independent verification of UK content-distribution rights found on the provider's public pages.",
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

function useReveal() {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useReveal();
  return (
    <section ref={ref as React.RefObject<HTMLElement>} className={`reveal ${className}`}>
      {children}
    </section>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="site">
      <a className="skip-link" href="#main">
        Skip to main content
      </a>

      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#top" aria-label="Best IPTV Provider for UK 2026 home">
            <span className="brand-mark">UK</span>
            <span className="brand-text">IPTV Review 2026</span>
          </a>
          <button
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="primary-nav"
            onClick={() => setMenuOpen((v) => !v)}
          >
            Menu
          </button>
          <nav id="primary-nav" className={`primary-nav ${menuOpen ? "open" : ""}`}>
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
        </div>
      </header>

      <main id="main">
        <section id="top" className="hero">
          <div className="hero-bg" aria-hidden="true" />
          <div className="container hero-inner">
            <p className="eyebrow">Independent UK comparison publication</p>
            <h1>{FOCUS_KEYWORD}</h1>
            <p className="hero-lead">
              A calm, evidence-led comparison of three IPTV services that UK viewers
              frequently research in 2026. We separate provider-advertised claims from
              independently verified facts, explain what to check before paying, and
              avoid unsupported “number one” claims.
            </p>
            <p className="hero-sub">
              This site is not affiliated with IPTVGreat, IPTVGREAT123 or IPTVUNLOCK. All
              external links open the providers’ official websites.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#comparison">
                Explore the providers
              </a>
              <a className="btn btn-secondary" href="#methodology">
                How we compare
              </a>
            </div>
            <div className="provider-cards">
              {providers.map((p) => (
                <article className="provider-card" key={p.name}>
                  <h3>{p.name}</h3>
                  <p>{p.channels}</p>
                  <p>{p.price}</p>
                  <a
                    className="card-link"
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit official website
                  </a>
                </article>
              ))}
            </div>
            <p className="disclosure">
              Editorial disclosure: some links may be affiliate links. Provider figures
              were checked against official websites on 29 October 2026 and may change.
            </p>
          </div>
        </section>

        <Reveal className="section comparison-section" >
          <div className="container" id="comparison">
            <h2>Quick provider comparison</h2>
            <p>
              The table below summarises advertised specifications. Items marked as
              unverified have not been independently confirmed.
            </p>
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
                    <th scope="row">Device compatibility</th>
                    {providers.map((p) => (
                      <td key={p.name}>{p.devices}</td>
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
                    <th scope="row">EPG</th>
                    {providers.map((p) => (
                      <td key={p.name}>{p.epg}</td>
                    ))}
                  </tr>
                  <tr>
                    <th scope="row">Support</th>
                    {providers.map((p) => (
                      <td key={p.name}>{p.support}</td>
                    ))}
                  </tr>
                  <tr>
                    <th scope="row">UK rights verification</th>
                    {providers.map((p) => (
                      <td key={p.name}>{p.verification}</td>
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
        </Reveal>

        <Reveal className="section reviews-section">
          <div className="container" id="reviews">
            <h2>Individual provider reviews</h2>
            {providers.map((p) => (
              <article className="review-card" key={p.name}>
                <h3>{p.name}</h3>
                <p>
                  <strong>Official website:</strong>{" "}
                  <a href={p.url} target="_blank" rel="noopener noreferrer">
                    {p.url}
                  </a>
                </p>
                <p>
                  <strong>Provider overview.</strong> The information below is taken from
                  the provider’s own public website and is presented as an advertised
                  claim, not as an independently verified fact.
                </p>
                <ul>
                  <li>
                    <strong>Advertised features:</strong> {p.channels}; {p.vod};{" "}
                    {p.quality}.
                  </li>
                  <li>
                    <strong>Supported devices:</strong> {p.devices}.
                  </li>
                  <li>
                    <strong>Plans and pricing:</strong> {p.price}.
                  </li>
                  <li>
                    <strong>Trial and refund:</strong> {p.trial}.
                  </li>
                  <li>
                    <strong>Customer support:</strong> {p.support}.
                  </li>
                  <li>
                    <strong>EPG:</strong> {p.epg}.
                  </li>
                </ul>
                <h4>Advantages and limitations</h4>
                <p>
                  Advertised strengths include a large channel or VOD library and
                  multi-device support. Limitations include the absence of independently
                  verified performance data and the lack of publicly verifiable evidence
                  of UK content-distribution rights.
                </p>
                <h4>Questions to ask before purchasing</h4>
                <ul>
                  <li>Which UK channels are included in my region?</li>
                  <li>Can the provider show evidence of distribution rights?</li>
                  <li>What is the renewal price after the first term?</li>
                  <li>How are refunds handled and within what timeframe?</li>
                  <li>What happens if a channel or VOD title is removed?</li>
                </ul>
                <h4>Verification status</h4>
                <p>{p.verification}</p>
                <a className="btn btn-primary" href={p.url} target="_blank" rel="noopener noreferrer">
                  Open {p.name} official website
                </a>
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal className="section guide-section">
          <div className="container" id="guide">
            <h2>How to choose an IPTV provider in the UK</h2>
            <p>
              IPTV describes a delivery technology: television content delivered over
              internet protocol. It does not automatically mean a service is licensed or
              unlicensed. The important question is whether the provider has the rights
              to distribute the content it offers in the United Kingdom.
            </p>
            <ul className="guide-list">
              <li>
                <strong>Content-distribution rights.</strong> Prefer providers that can
                explain which content they are authorised to distribute.
              </li>
              <li>
                <strong>Transparent pricing.</strong> Check renewal prices, taxes,
                currency conversion and whether long-term plans are refundable.
              </li>
              <li>
                <strong>Device compatibility.</strong> Confirm that your television,
                stick, box or mobile device is supported before paying.
              </li>
              <li>
                <strong>Realistic quality expectations.</strong> 4K requires suitable
                source streams, hardware and bandwidth.
              </li>
              <li>
                <strong>Network stability.</strong> Use a wired connection where
                possible and test during peak viewing hours.
              </li>
              <li>
                <strong>EPG and catch-up.</strong> Check whether programme data is
                accurate and whether catch-up is included.
              </li>
              <li>
                <strong>Customer support.</strong> Look for clear support channels and
                response times, not only marketing claims.
              </li>
              <li>
                <strong>Refunds and payment security.</strong> Read the refund policy
                and use secure payment methods.
              </li>
              <li>
                <strong>Privacy and data protection.</strong> Review the privacy policy
                and how account data is handled.
              </li>
              <li>
                <strong>Red flags.</strong> Be cautious of fake urgency, copied
                reviews, unclear ownership, missing policies and claims that cannot be
                verified.
              </li>
            </ul>
          </div>
        </Reveal>

        <Reveal className="section methodology-section">
          <div className="container" id="methodology">
            <h2>Methodology and editorial policy</h2>
            <p>
              This publication compares providers using four clearly separated
              categories:
            </p>
            <ol className="method-list">
              <li>
                <strong>Provider-advertised specifications.</strong> Figures taken from
                each provider’s own public website, such as channel counts, VOD
                library sizes, prices and advertised uptime.
              </li>
              <li>
                <strong>Independently verified facts.</strong> Information confirmed
                through reliable third-party sources or direct verification.
              </li>
              <li>
                <strong>Features not independently tested.</strong> Performance,
                buffering and reliability claims that have not been measured by this
                publication.
              </li>
              <li>
                <strong>Missing or unverified licensing information.</strong> No
                provider in this comparison has been found to publish verifiable
                evidence of UK content-distribution rights.
              </li>
            </ol>
            <p>
              This site does not claim to have tested any service, does not fabricate
              reviews or ratings, and does not guarantee the legality, reliability or
              safety of any provider. If affiliate links are used, that relationship is
              disclosed. Provider information can change; always check the official
              website for current terms.
            </p>
          </div>
        </Reveal>

        <Reveal className="section faq-section">
          <div className="container" id="faq">
            <h2>Frequently asked questions</h2>
            <div className="faq-list">
              {faqs.map((f) => (
                <details key={f.q} className="faq-item">
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </Reveal>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>
            <strong>Best IPTV Provider for UK 2026</strong> — an independent comparison
            publication. Not affiliated with IPTVGreat, IPTVGREAT123 or IPTVUNLOCK.
          </p>
          <nav aria-label="Footer">
            <a href="#comparison">Compare</a>
            <a href="#reviews">Reviews</a>
            <a href="#guide">Buying guide</a>
            <a href="#methodology">Methodology</a>
            <a href="#faq">FAQ</a>
          </nav>
          <p className="small">
            Content checked against provider websites on 29 October 2026. Provider
            figures and terms may change.
          </p>
        </div>
      </footer>
    </div>
  );
}
