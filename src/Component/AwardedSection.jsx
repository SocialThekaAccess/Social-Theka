import "./AwardedSection.css";
import wb1  from "../assets/WorkingBrand1.png";
import wb2  from "../assets/WorkingBrand2.avif";
import wb3  from "../assets/WorkingBrand3.png";
import wb4  from "../assets/WorkingBrand4.png";
import wb5  from "../assets/WorkingBrand5.png";
import wb6  from "../assets/WorkingBrand6.png";
import wb7  from "../assets/WorkingBrand7.png";
import wb8  from "../assets/WorkingBrand8.png";
import wb11 from "../assets/WorkingBrand11.png";
import wb12 from "../assets/WorkingBrand12.png";
import wb13 from "../assets/WorkingBrand13.png";
import wb14 from "../assets/WorkingBrand14.png";
import wb15 from "../assets/WorkingBrand15.png";
import wb17 from "../assets/WorkingBrand17.png";
import wb18 from "../assets/WorkingBrand18.png";
import wb19 from "../assets/WorkingBrand19.png";
import wb20 from "../assets/WorkingBrand20.png";
import wb21 from "../assets/WorkingBrand21.png";

const LOGOS = [
  wb1, wb2, wb3, wb4, wb5, wb6, wb7, wb8,
  wb11, wb12, wb13, wb14, wb15, wb17, wb18, wb19, wb20, wb21,
];

export default function AwardedSection() {
  return (
    <section className="as-section">
      <div className="as-inner">
        <p className="as-label">Brands That Trust Us</p>
        <h2 className="as-heading">Results delivered for businesses</h2>
        <div className="as-grid">
          {LOGOS.map((src, i) => (
            <div key={i} className="as-card">
              <img src={src} alt={`Brand ${i + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
