import { useState, useEffect } from "react";
import Footer from "./Footer/Footer";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const fn = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return visible ? (
    <button
      className="scroll-top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
    >
      &uarr;
    </button>
  ) : null;
}

export default function ServiceLayout({ children }) {
  return (
    <>
      {children}
      <Footer />
      <ScrollToTop />
    </>
  );
}
