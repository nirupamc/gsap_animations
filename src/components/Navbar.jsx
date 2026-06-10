import React from 'react';

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

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-900 bg-black/60 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="font-mono text-lg font-bold tracking-tight text-accent">
            gsap.effects
          </span>
        </div>

        {/* Action Items */}
        <div className="flex items-center space-x-4">
          <span className="inline-flex items-center rounded-full border border-accent/20 bg-accent/5 px-2.5 py-0.5 text-xs font-semibold text-accent font-mono">
            Built with GSAP
          </span>
          <a
            href="https://github.com/user/gsap-text-effects"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 transition-colors hover:text-white"
            aria-label="View on GitHub"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </header>
  );
}
