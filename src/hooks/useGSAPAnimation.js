import { useEffect, useRef } from 'react';
import gsap from 'gsap';

/**
 * Custom React hook for running GSAP text animations safely.
 * Handles:
 * 1. Animation scoping using gsap.context()
 * 2. Proper cleanup on unmount to prevent memory leaks
 * 3. Replay reset (killing active tweens and clearing styles)
 * 4. Accessibility fallback for prefers-reduced-motion
 */
export function useGSAPAnimation() {
  const containerRef = useRef(null);
  const contextRef = useRef(null);

  const runAnimation = (animateFn) => {
    if (!containerRef.current || !animateFn) return;

    // Revert existing context if there is one
    if (contextRef.current) {
      contextRef.current.revert();
    }

    // Check for prefers-reduced-motion (accessibility support)
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Kill any active GSAP tweens on descendants and root element
    const descendants = containerRef.current.querySelectorAll('*');
    gsap.killTweensOf(descendants);
    gsap.killTweensOf(containerRef.current);
    
    // Clear all inline CSS variables and properties set by GSAP
    gsap.set(descendants, { clearProps: 'all' });
    gsap.set(containerRef.current, { clearProps: 'all' });

    // Run within a GSAP context for automatic scoping and garbage collection
    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        // Motion sensitive fallback: Simple immediate opacity fade in
        gsap.fromTo(containerRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.3, ease: 'none' }
        );
      } else {
        // Execute the custom animation logic
        animateFn(containerRef.current);
      }
    }, containerRef); // Scoped to containerRef

    contextRef.current = ctx;
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (contextRef.current) {
        contextRef.current.revert();
      }
    };
  }, []);

  return { containerRef, runAnimation };
}
