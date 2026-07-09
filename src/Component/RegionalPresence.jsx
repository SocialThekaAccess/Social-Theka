import { useState } from "react";
import "./RegionalPresence.css";

const regions = [
  {
    id: "chandigarh",
    name: "CHANDIGARH",
    tagline: "3 target micro-precincts",
    badge: "CORE PRESENCE",
    heading: "Chandigarh",
    description:
      "The visionary master-planned capital corridor. Featuring premium managed workspaces at Nexus Elante Mall Office Suites and Sector 17, tailored for prestigious corporate headquarters and modern teams.",
    centers: ["Nexus Elante Offices", "Sector 17 Business Plaza", "Industrial Area Phase I"],
    highlights: [
      "Nexus Elante Mall premium proximity",
      "Prestige city center access",
      "Excellent city-wide civic amenities",
    ],
    transit: "Direct interface with G.T. Road arterial routes, premium retail hubs, and the international airport pathway.",
    config: "PRESETS-LOC-CHANDIGARH-V1.0",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&q=80",
  },
  {
  id: "delhi",
  name: "DELHI",
  tagline: "4 target micro-precincts",
  badge: "CAPITAL PRESENCE",
  heading: "Delhi",
  description:
    "India's capital and largest business hub. From Connaught Place to Aerocity, Delhi offers world-class managed workspaces for corporates, startups, and government-facing enterprises seeking maximum visibility.",
  centers: ["Connaught Place", "Aerocity Business District", "Nehru Place Tech Hub", "Okhla Industrial Area"],
  highlights: [
    "India's largest commercial real estate market",
    "Direct metro connectivity across all zones",
    "IGI Airport proximity via NH-48",
  ],
  transit: "Seamless connectivity via Delhi Metro's 14 lines, NH-48 to IGI Airport, and Ring Road arterial network linking all business districts.",
  config: "PRESETS-LOC-DELHI-V1.0",
  image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&q=80",
},
//   {
//     id: "panchkula",
//     name: "PANCHKULA",
//     tagline: "3 target micro-precincts",
//     badge: "GROWTH ZONE",
//     heading: "Panchkula",
//     description:
//       "Haryana's planned satellite city with excellent infrastructure and green surroundings. Ideal for businesses seeking a professional environment with competitive pricing and Shivalik foothills backdrop.",
//     centers: ["Sector 20 Business District", "Indl. Area Phase 1", "MDC Sector 5"],
//     highlights: [
//       "Premium green surroundings",
//       "Competitive pricing advantage",
//       "Well-planned sector infrastructure",
//     ],
//     transit: "Connected via NH-7 to Chandigarh and Delhi-Chandigarh highway, with easy Himachal Pradesh access.",
//     config: "PRESETS-LOC-PANCHKULA-V1.0",
//     image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&q=80",
//   },

//   {
//     id: "ambala",
//     name: "AMBALA",
//     tagline: "2 target micro-precincts",
//     badge: "TRANSIT HUB",
//     heading: "Ambala",
//     description:
//       "A critical transit node at the intersection of Delhi–Chandigarh and Delhi–Amritsar corridors. Strategic for logistics, distribution, and businesses needing cross-regional connectivity.",
//     centers: ["Ambala Cantonment Business Park", "NH-44 Commercial Strip"],
//     highlights: [
//       "Strategic highway intersection",
//       "Strong rail and road network",
//       "Gateway to north India markets",
//     ],
//     transit: "Prime position at NH-44 and NH-152 junction, with direct rail connections to Delhi, Chandigarh and Amritsar.",
//     config: "PRESETS-LOC-AMBALA-V1.0",
//     image: "https://images.unsplash.com/photo-1464082354059-27db6ce50048?w=600&q=80",
//   },
];

export default function RegionalPresence() {
  const [active, setActive] = useState(regions[0]);

  return (
    <section className="rp-section">
      <div className="rp-eyebrow">REGIONAL GRID EXPOSURE</div>
      <h2 className="rp-heading">
        Four districts unified excellence
      </h2>
      <p className="rp-subtext">
        We operate exclusively across the high-growth Chandigarh Tricity region and the central
        Ambala transit corridor. Discover your ideal structural fit.
      </p>

      <div className="rp-stats">
        <span>REGIONAL COVERAGE: 100% TRICITY</span>
        <span className="rp-divider">|</span>
        <span>TOTAL SITES ACTIVE: 14 CENTERS</span>
      </div>

      <div className="rp-body">
        {/* Left: Region List */}
        <div className="rp-list">
          {regions.map((r) => (
            <button
              key={r.id}
              className={`rp-list-item ${active.id === r.id ? "rp-list-item--active" : ""}`}
              onClick={() => setActive(r)}
            >
              <div className="rp-list-name">{r.name}</div>
              <div className="rp-list-tag">{r.tagline}</div>
              <span className="rp-list-arrow">›</span>
            </button>
          ))}
        </div>

        {/* Right: Detail Panel */}
        <div className="rp-detail">
          <div className="rp-detail-top">
            <div className="rp-detail-left">
              <div className="rp-badge">
                <span className="rp-badge-dot" />
                {active.badge}
              </div>
              <h3 className="rp-detail-heading">{active.heading}</h3>
              <p className="rp-detail-desc">{active.description}</p>

              <div className="rp-centers-label">PRIME CENTERS &amp; SECTORS:</div>
              <div className="rp-centers">
                {active.centers.map((c) => (
                  <span key={c} className="rp-center-tag">{c}</span>
                ))}
              </div>

              <div className="rp-highlights-label">DISTRICT STRUCTURAL HIGHLIGHTS:</div>
              <ul className="rp-highlights">
                {active.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>

            <div className="rp-detail-right">
              <div className="rp-image-wrap">
                <img src={active.image} alt={active.heading} className="rp-image" loading="lazy" decoding="async" />
              </div>
              <div className="rp-transit">
                <div className="rp-transit-label">
                  <span className="rp-transit-icon">⬡</span> TRANSIT CONNECTIVITY
                </div>
                <p className="rp-transit-text">{active.transit}</p>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
}
