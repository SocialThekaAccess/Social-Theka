import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

import heroVideo from "../assets/SocialThekaHerovid.mp4";
import "./hero.css";

/*
  OPTIONAL poster: src/assets/SocialThekaPoster.jpg rakh do (video ka
  pehla frame). File na ho tab bhi error nahi aayega.
*/
const posterModules = import.meta.glob("../assets/SocialThekaPoster.{jpg,jpeg,webp,png}", {
  eager: true,
  import: "default",
});
const heroPoster = Object.values(posterModules)[0];

/* Video ko module load hote hi preload kar do (Hero mount hone se pehle) */
if (typeof document !== "undefined" && !document.getElementById("hero-video-preload")) {
  const l = document.createElement("link");
  l.id = "hero-video-preload";
  l.rel = "preload";
  l.as = "video";
  l.href = heroVideo;
  document.head.appendChild(l);
}

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

const HERO_ANIM_KEY = "socialtheka_hero_intro_played";
const STORAGE = window.sessionStorage;

/* Is width ya usse chhoti screen = mobile/tablet layout */
const MOBILE_BP = 960;

const FULL_CLASS = "hero2__img-frame--intro-full";

export default function Hero() {
  const [startFull] = useState(
    () => typeof window !== "undefined" && window.innerWidth > MOBILE_BP
  );

  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const frameRef = useRef(null);
  const leftRef = useRef(null);
  const badgeRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const frame = frameRef.current;
    const leftContent = leftRef.current;
    const badge = badgeRef.current;
    const video = videoRef.current;

    if (!section || !frame || !leftContent || !badge) return undefined;

    const items = Array.from(leftContent.children);

    /*
      matchMedia: breakpoint cross hone par (resize / DevTools toggle)
      purani animation + inline styles apne aap revert hoti hain
      aur sahi wala layout dobara setup hota hai.
    */
    const mm = gsap.matchMedia();

    /* ═══════════ MOBILE / TABLET (≤960px) ═══════════
       Video apni position pe STATIC rehti hai (koi animation nahi),
       bas chalti rehti hai. Badge + text halka sa animate hote hain. */
    mm.add(`(max-width: ${MOBILE_BP}px)`, () => {
      document.body.classList.remove("hero-intro-active");
      frame.classList.remove(FULL_CLASS);

      /* Video decode na hui ho to force-load + play retry */
      if (video) {
        video.muted = true;
        if (video.readyState === 0) video.load();
        video.play().catch(() => {});
      }

      /* Video frame ko bilkul touch nahi karte — hamesha visible */
      gsap.set(frame, { clearProps: "all" });
      gsap.set(leftContent, { opacity: 1, x: 0, y: 0 });

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        onComplete: () => {
          gsap.set([badge, ...items], {
            clearProps: "transform,opacity,scale,rotate,y",
          });
        },
      });

      tl.fromTo(
        badge,
        { scale: 0, rotate: -90, opacity: 0 },
        {
          scale: 1,
          rotate: 0,
          opacity: 1,
          duration: 0.6,
          ease: "back.out(1.8)",
        },
        0.1
      ).fromTo(
        items,
        { y: 28, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 },
        0.15
      );

      return () => {
        tl.kill();
        gsap.set([badge, leftContent, ...items], {
          clearProps: "transform,opacity,scale,rotate,x,y",
        });
      };
    });

    /* ═══════════ DESKTOP (>960px) ═══════════ */
    mm.add(`(min-width: ${MOBILE_BP + 1}px)`, () => {
      let timeline;
      let rafId;

      frame.style.aspectRatio = "";
      document.body.classList.add("hero-intro-active");
      frame.classList.add(FULL_CLASS);
      gsap.set(leftContent, { opacity: 0, x: -50 });
      gsap.set(badge, { opacity: 0, scale: 0.8 });

      const showFinalLayout = () => {
        frame.classList.remove(FULL_CLASS);

        gsap.set(frame, {
          clearProps:
            "position,top,left,width,height,zIndex,borderRadius,x,y,transform,scale",
          opacity: 1,
        });
        gsap.set(leftContent, {
          clearProps: "transform",
          opacity: 1,
          x: 0,
          y: 0,
        });
        gsap.set(badge, { clearProps: "transform", opacity: 1, scale: 1 });

        document.body.classList.remove("hero-intro-active");
      };

      rafId = window.requestAnimationFrame(() => {
        frame.classList.remove(FULL_CLASS);

        const sectionRect = section.getBoundingClientRect();
        const frameRect = frame.getBoundingClientRect();

        frame.classList.add(FULL_CLASS);

        const finalLeft = frameRect.left - sectionRect.left;
        const finalTop = frameRect.top - sectionRect.top;
        const finalWidth = frameRect.width;
        const finalHeight = frameRect.height;

        STORAGE.setItem(HERO_ANIM_KEY, "true");

        video?.play().catch(() => {});

        timeline = gsap.timeline({ paused: true, onComplete: showFinalLayout });

        timeline
          .to(frame, { duration: 2.5 })
          .call(() => {
            frame.classList.remove(FULL_CLASS);

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
          .to(
            leftContent,
            { duration: 0.8, opacity: 1, x: 0, ease: "power2.out" },
            "-=0.65"
          )
          .to(
            badge,
            { duration: 0.45, opacity: 1, scale: 1, ease: "back.out(1.7)" },
            "-=0.2"
          );

        timeline.play();
      });

      return () => {
        window.cancelAnimationFrame(rafId);
        timeline?.kill();

        document.body.classList.remove("hero-intro-active");
        frame.classList.remove(FULL_CLASS);

        gsap.set([frame, leftContent, badge], { clearProps: "all" });
      };
    });

    return () => {
      mm.revert();
      document.body.classList.remove("hero-intro-active");
    };
  }, []);

  /* Video ko continuously play karne ke liye */
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
    { label: "Google Partner", icon: <GoogleIcon /> },
    { label: "Meta Business", icon: <MetaIcon /> },
    { label: "ISO Certified", icon: <ISOIcon /> },
  ];

  return (
    <section id="home" className="hero2" ref={sectionRef}>
      <div className="hero2__blob hero2__blob--1" />
      <div className="hero2__blob hero2__blob--2" />

      <div className="hero2__inner">
        <div
          className="hero2__left"
          ref={leftRef}
          style={startFull ? { opacity: 0 } : undefined}
        >
          <h1 className="hero2__h1">
            <span className="hero2__h1-accent">Building Brands</span>{" "}
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
            <Link to="/contact" className="hero2__btn-ghost">
              Book Free Audit
            </Link>
          </div>

          <p className="hero2__recog-label">
            Recognized for Core Digital Marketing Services
          </p>

          <div className="hero2__logos">
            {certBadges.map((item) => (
              <div key={item.label} className="hero2__logo-card">
                <span className="hero2__logo-icon">{item.icon}</span>
                <span className="hero2__logo-label">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero2__right">
          <div
            className={`hero2__img-frame${startFull ? " " + FULL_CLASS : ""}`}
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
              poster={heroPoster}
              onLoadedData={(e) => e.target.play().catch(() => {})}
              onStalled={(e) => e.target.load()}
              onSuspend={(e) => e.target.play().catch(() => {})}
              onCanPlay={(e) => e.target.play().catch(() => {})}
            >
              <source src={heroVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <div
              className="hero2__corner-badge"
              ref={badgeRef}
              style={startFull ? { opacity: 0 } : undefined}
            >
              <span className="hero2__corner-num">10</span>
              <span className="hero2__corner-text">Years</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}