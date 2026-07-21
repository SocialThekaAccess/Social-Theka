import { useState, useEffect } from "react";
import Footer from "./Footer/Footer";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const fn = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <button
      className={`scroll-top ${visible ? "visible" : ""}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
    >
      ↑
    </button>
  );
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
