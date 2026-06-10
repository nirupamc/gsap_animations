import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full border-t border-neutral-900 bg-black py-10 mt-auto text-neutral-500 text-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <div>
          <span className="font-mono text-accent font-semibold">gsap.effects</span>
          <span className="mx-2">|</span>
          <span>© {new Date().getFullYear()} Antigravity. Open Source.</span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6">
          <a
            href="https://gsap.com/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GSAP Docs
          </a>
          <a
            href="https://github.com/nirupamc/gsap_animations"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub Repository
          </a>
          <span className="text-neutral-700 hidden md:inline">|</span>
          <span className="text-neutral-400">Built with GSAP + React</span>
        </div>
      </div>
    </footer>
  );
}
