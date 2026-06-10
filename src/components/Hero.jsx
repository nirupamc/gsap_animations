import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight } from 'lucide-react';

const GithubIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Hero() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtextRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    // Check for prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      // Just immediately make it visible if reduced motion is on
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Scramble the title text
      tl.fromTo(titleRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1.8,
          text: {
            value: "85 GSAP Text Effects. Copy. Paste. Ship.",
            scrambleText: {
              chars: "XO!#%&?10",
              speed: 0.5,
              revealDelay: 0.2
            }
          },
          ease: "power2.out"
        }
      );

      // Fade up subtext and buttons
      tl.fromTo([subtextRef.current, ctaRef.current],
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out" },
        "-=0.8"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleBrowseScroll = (e) => {
    e.preventDefault();
    const target = document.getElementById('effects-showcase');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={containerRef} 
      className="relative flex min-h-[50vh] flex-col items-center justify-center border-b border-neutral-900 px-4 py-20 text-center sm:px-6 lg:px-8"
    >
      {/* Background glow overlay */}
      <div className="absolute top-12 left-1/2 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/5 blur-3xl" />

      {/* Main Content */}
      <div className="max-w-3xl">
        <h1 
          ref={titleRef} 
          className="font-mono text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl min-h-[2.5em] sm:min-h-[2em] md:min-h-[1.8em]"
        >
          85 GSAP Text Effects. Copy. Paste. Ship.
        </h1>
        
        <p 
          ref={subtextRef} 
          className="mt-6 text-lg text-neutral-400 sm:text-xl md:max-w-2xl md:mx-auto"
        >
          A free, open-source collection of production-ready GSAP text animations. 
          Click any effect to copy the code.
        </p>

        <div 
          ref={ctaRef} 
          className="mt-10 flex flex-col justify-center gap-4 sm:flex-row"
        >
          <a
            href="#effects-showcase"
            onClick={handleBrowseScroll}
            className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3.5 text-base font-semibold text-black transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Browse Effects
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
          <a
            href="https://github.com/nirupamc/gsap_animations"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg border border-neutral-800 bg-neutral-950 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-neutral-900 hover:border-neutral-700"
          >
            <GithubIcon className="mr-2 h-5 w-5" />
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
