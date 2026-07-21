import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

import heroVideo from "../assets/SocialThekaHerovid.mp4";
import "./hero.css";

/* ── ICON COMPONENTS ───────────────────────────── */

const GoogleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />

    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />

    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
      fill="#FBBC05"
    />

    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      fill="#EA4335"
    />
  </svg>
);

const MetaIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path
      d="M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.186-.325.358-.633.53-.94l.369-.65.396-.7c.206-.364.406-.72.601-1.069l.277-.486-.615-.582c-.96-.906-1.996-1.304-3.269-1.304m0 1.36c1.024 0 1.877.327 2.694 1.04l-.282.497c-.2.354-.4.71-.608 1.079l-.403.714-.369.651a62.14 62.14 0 0 0-.514.925l-.167.306c-1.129 2.085-1.682 3.016-2.392 3.981-.897 1.234-1.632 1.748-2.62 1.748-1.084 0-1.81-.477-2.248-1.217a4.25 4.25 0 0 1-.292-.607 5.206 5.206 0 0 1-.207-1.55c0-2.33.64-4.744 1.832-6.415.944-1.347 2.138-2.147 3.376-2.147M17.415 4.03c-1.149 0-2.243.481-3.211 1.367l-.602.571.277.487c.192.339.39.686.591 1.042l.396.7.369.651.53.94.185.325.688 1.22c1.682 2.986 2.076 3.616 2.725 4.461 1.283 1.686 2.355 2.324 3.827 2.324 1.791 0 2.918-.768 3.618-1.93a5.3 5.3 0 0 0 .371-.76c.116-.291.202-.575.265-.861.141-.604.21-1.267.21-1.973 0-2.565-.703-5.239-2.044-7.305-1.188-1.832-2.903-3.113-4.871-3.113m0 1.36c1.237 0 2.432.8 3.376 2.148 1.191 1.67 1.831 4.086 1.831 6.414 0 .572-.066 1.105-.207 1.55a4.178 4.178 0 0 1-.292.608c-.437.739-1.163 1.216-2.248 1.216-.996 0-1.73-.514-2.62-1.748-.713-.97-1.267-1.902-2.394-3.982l-.367-.675a62.1 62.1 0 0 0-.514-.924l-.368-.651-.403-.714a47.54 47.54 0 0 0-.608-1.079l-.28-.496c.816-.712 1.669-1.039 2.694-1.039"
      fill="#0081FB"
    />
  </svg>
);

const ISOIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
  >
    <path
      d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
      stroke="#22c55e"
      fill="rgba(34, 197, 94, 0.15)"
    />

    <path
      d="M9 12l2 2 4-4"
      stroke="#22c55e"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/*
  "socialtheka_hero_intro_played" sessionStorage mein hai —
  isliye sirf isi TAB SESSION mein animation ek baar chalegi.
  Agar user Home pe wapas aaye (route change/scroll) toh
  yeh dobara full-screen nahi chalegi.

  Agar bilkul hamesha ke liye — naye tab/naye visit mein bhi —
  sirf ek hi baar (poori website life mein sirf pehli dafa)
  chalani ho, toh neeche "sessionStorage" ko "localStorage"
  se replace kar dena.
*/
const HERO_ANIM_KEY = "socialtheka_hero_intro_played";
const STORAGE = window.sessionStorage; // <-- badalke window.localStorage karo agar chahiye

export default function Hero() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const frameRef = useRef(null);
  const leftRef = useRef(null);
  const badgeRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const frame = frameRef.current;
    const leftContent = leftRef.current;
    const badge = badgeRef.current;
    const video = videoRef.current;

    if (!section || !frame || !leftContent || !badge) return undefined;

    let timeline;
    let animationFrameId;
    let resizeHandler;

    const showFinalLayout = () => {
      /*
        Intro-full class hatao — frame apni normal CSS position
        (right column ke andar, chhota) mein wapas aa jayega.
      */
      frame.classList.remove("hero2__img-frame--intro-full");

      gsap.set(frame, {
        clearProps:
          "position,top,left,width,height,zIndex,borderRadius,x,y,transform",
        opacity: 1,
      });

      gsap.set(leftContent, {
        clearProps: "transform",
        opacity: 1,
        x: 0,
      });

      gsap.set(badge, {
        clearProps: "transform",
        opacity: 1,
        scale: 1,
      });

      document.body.classList.remove("hero-intro-active");
    };

    const alreadyPlayed = false; // Always play animation
    const shouldSkipAnimation = window.innerWidth <= 960; // Skip only on mobile

    if (shouldSkipAnimation) {
      showFinalLayout();
      video?.play().catch(() => {});

      return () => {
        document.body.classList.remove("hero-intro-active");
      };
    }

    /*
      requestAnimationFrame React StrictMode ke blank-screen
      issue ko prevent karta hai.
    */
    animationFrameId = window.requestAnimationFrame(() => {
      const sectionRect = section.getBoundingClientRect();
      const frameRect = frame.getBoundingClientRect();

      /*
        Yeh sirf SHRINK animation ke liye target values hain —
        yeh element ki actual rendered position se aati hain,
        isliye hamesha section ke andar hi hongi.
      */
      const finalLeft = frameRect.left - sectionRect.left;
      const finalTop = frameRect.top - sectionRect.top;
      const finalWidth = frameRect.width;
      const finalHeight = frameRect.height;

      /*
        Effect ko turant played mark kar rahe hain.
        User doosre page par jaakar wapas aaye to repeat nahi hoga.
      */
      STORAGE.setItem(HERO_ANIM_KEY, "true");

      document.body.classList.add("hero-intro-active");

      gsap.set(leftContent, {
        opacity: 0,
        x: -50,
      });

      gsap.set(badge, {
        opacity: 0,
        scale: 0.8,
      });

      /*
        FULL-SECTION STATE — ab yeh CSS class se aata hai
        (position:absolute; inset:0;), koi pixel width/height
        JS se set nahi hoti. Isliye video kabhi bhi section ke
        box se bahar nahi ja sakti, navbar overlap nahi hoga.
      */
      frame.classList.add("hero2__img-frame--intro-full");

      video?.play().catch(() => {});

      timeline = gsap.timeline({
        onComplete: showFinalLayout,
      });

      timeline
        /*
          Video 3 seconds tak full Hero section mein rahegi
          (koi tween nahi — bas className se hold hai).
        */
        .to(frame, { duration: 3 })

        /*
          Video right-side frame mein shrink hogi.
          Yahan className hata ke position:absolute + explicit
          top/left/width/height pe switch karte hain taaki
          smoothly animate ho sake, phir target tak tween karte hain.
        */
        .call(() => {
          frame.classList.remove("hero2__img-frame--intro-full");

          gsap.set(frame, {
            position: "absolute",
            top: 0,
            left: 0,
            x: 0,
            y: 0,
            width: sectionRect.width,
            height: sectionRect.height,
            borderRadius: 0,
            zIndex: 5,
          });
        })
        .to(frame, {
          duration: 1.2,
          x: finalLeft,
          y: finalTop,
          width: finalWidth,
          height: finalHeight,
          borderRadius: 24,
          ease: "power3.inOut",
        })

        /*
          Left-side content show hoga.
        */
        .to(
          leftContent,
          {
            duration: 0.8,
            opacity: 1,
            x: 0,
            ease: "power2.out",
          },
          "-=0.65"
        )

        /*
          10 Years badge show hoga.
        */
        .to(
          badge,
          {
            duration: 0.45,
            opacity: 1,
            scale: 1,
            ease: "back.out(1.7)",
          },
          "-=0.2"
        );

      resizeHandler = () => {
        timeline?.kill();
        showFinalLayout();
      };

      window.addEventListener("resize", resizeHandler);
    });

    return () => {
      window.cancelAnimationFrame(animationFrameId);

      if (resizeHandler) {
        window.removeEventListener("resize", resizeHandler);
      }

      timeline?.kill();

      document.body.classList.remove("hero-intro-active");
      frame.classList.remove("hero2__img-frame--intro-full");

      /*
        Route change ya StrictMode cleanup ke time
        inline GSAP styles remove honge.
      */
      gsap.set(frame, {
        clearProps: "all",
      });

      gsap.set(leftContent, {
        clearProps: "all",
      });

      gsap.set(badge, {
        clearProps: "all",
      });
    };
  }, []);

  /*
    Video ko continuously play karne ke liye.
  */
  useEffect(() => {
    const video = videoRef.current;

    if (!video) return undefined;

    const handlePause = () => {
      video.play().catch(() => {});
    };

    const handleEnded = () => {
      video.currentTime = 0;
      video.play().catch(() => {});
    };

    video.addEventListener("pause", handlePause);
    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  const certBadges = [
    {
      label: "Google Partner",
      icon: <GoogleIcon />,
    },
    {
      label: "Meta Business",
      icon: <MetaIcon />,
    },
    {
      label: "ISO Certified",
      icon: <ISOIcon />,
    },
  ];

  return (
    <section
      id="home"
      className="hero2"
      ref={sectionRef}
    >
      <div className="hero2__blob hero2__blob--1" />
      <div className="hero2__blob hero2__blob--2" />

      <div className="hero2__inner">
        <div
          className="hero2__left"
          ref={leftRef}
        >
          <h1 className="hero2__h1">
            <span className="hero2__h1-accent">
              Building Brands
            </span>{" "}
            That Stand Out in the Digital World
          </h1>

          <p className="hero2__p">
            Social Theka is a digital marketing agency located in Chandigarh,
            India dedicated to providing effective and straightforward
            solutions to assist businesses in establishing themselves online.
            At our agency, our main objective is to help your target audience
            discover your business&apos;s services and products.
          </p>

          <div className="hero2__actions">
            <Link
              to="/contact"
              className="hero2__btn-ghost"
            >
              Book Free Audit
            </Link>
          </div>

          <p className="hero2__recog-label">
            Recognized for Core Digital Marketing Services
          </p>

          <div className="hero2__logos">
            {certBadges.map((item) => (
              <div
                key={item.label}
                className="hero2__logo-card"
              >
                <span className="hero2__logo-icon">
                  {item.icon}
                </span>

                <span className="hero2__logo-label">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero2__right">
          <div
            className="hero2__img-frame"
            ref={frameRef}
          >
            <video
              ref={videoRef}
              className="hero2__img"
              aria-label="Social Theka digital marketing showcase"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              onLoadedData={(e) => e.target.play().catch(() => {})}
              onCanPlay={(e) => e.target.play().catch(() => {})}
            >
              <source src={heroVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <div
              className="hero2__corner-badge"
              ref={badgeRef}
            >
              <span className="hero2__corner-num">
                10
              </span>

              <span className="hero2__corner-text">
                Years
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}