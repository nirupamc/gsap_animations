import React, { useEffect, useRef, useState } from 'react';
import { useGSAPAnimation } from '../hooks/useGSAPAnimation';
import { Play, Copy, ExternalLink } from 'lucide-react';
import { toast } from 'sonner';

export default function EffectCard({ effect, onOpenModal, replayTrigger }) {
  const { containerRef, runAnimation } = useGSAPAnimation();
  const [hasEntered, setHasEntered] = useState(false);
  const [resetKey, setResetKey] = useState(0);

  // Listen for parent 'Replay All' triggers
  useEffect(() => {
    if (replayTrigger > 0 && hasEntered) {
      setResetKey((prev) => prev + 1);
    }
  }, [replayTrigger]);

  // Split text helper
  const renderSplitText = () => {
    const { splitType, previewText } = effect;

    if (splitType === 'chars') {
      return (
        <span className="text-white block text-center font-sans font-bold leading-tight tracking-tight select-none">
          {previewText.split("").map((char, index) => (
            <span key={index} className="char inline-block">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </span>
      );
    }

    if (splitType === 'words') {
      return (
        <span className="text-white block text-center font-sans font-bold leading-tight tracking-tight select-none">
          {previewText.split(" ").map((word, index) => (
            <span key={index} className="word inline-block">
              {word}
            </span>
          ))}
        </span>
      );
    }

    if (splitType === 'lines') {
      return (
        <span className="text-white block text-center font-sans font-bold leading-relaxed tracking-tight select-none">
          {previewText.split("\n").map((line, index) => (
            <span key={index} className="line block overflow-hidden">
              <span className="inline-block text">{line}</span>
            </span>
          ))}
        </span>
      );
    }

    // Default: 'none'
    return <span className="text text-white font-sans font-bold leading-tight tracking-tight select-none">{previewText}</span>;
  };

  // Run the animation when the card enters the viewport or resetKey increments
  useEffect(() => {
    if (hasEntered) {
      runAnimation(effect.animate);
    }
  }, [resetKey, hasEntered, effect]);

  // Set up the IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleReplay = (e) => {
    e.stopPropagation();
    // Incrementing resetKey forces a clean DOM state re-mount of the preview area
    // which then triggers the animation useEffect
    setResetKey((prev) => prev + 1);
  };

  const handleCopy = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(effect.code);
    toast.success(`Copied "${effect.name}" code to clipboard!`, {
      style: {
        background: '#111111',
        border: '1px solid #1e1e1e',
        color: '#00FF66',
      }
    });
  };

  return (
    <div 
      ref={containerRef}
      className="glow-on-hover flex flex-col h-72 rounded-xl border border-neutral-900 bg-neutral-950 overflow-hidden cursor-pointer group"
      onClick={() => onOpenModal(effect)}
    >
      {/* Preview Area (60%) */}
      <div 
        key={resetKey}
        className="preview-container relative flex h-[60%] items-center justify-center bg-black/40 px-6 overflow-hidden text-center"
        style={{ fontSize: 'clamp(1.2rem, 3.5vw, 1.8rem)' }}
      >
        {renderSplitText()}
        
        {/* Subtle inspect indicator */}
        <div className="absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-neutral-500 hover:text-accent">
          <ExternalLink className="h-4 w-4" />
        </div>
      </div>

      {/* Footer Area (40%) */}
      <div className="flex flex-col justify-between p-4 h-[40%] bg-neutral-950 border-t border-neutral-900/50">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-white truncate max-w-[155px]">
            {effect.name}
          </h3>
          <span className="rounded-full border border-neutral-800 px-2 py-0.5 text-[10px] font-medium text-neutral-400 font-mono">
            {effect.category}
          </span>
        </div>

        <div className="flex gap-2 mt-3">
          <button
            onClick={handleReplay}
            className="flex-1 flex items-center justify-center gap-1.5 rounded-md border border-neutral-800 bg-neutral-950 py-1.5 text-xs font-medium text-neutral-300 transition-colors hover:text-white hover:bg-neutral-900 cursor-pointer"
          >
            <Play className="h-3 w-3 fill-current" />
            Replay
          </button>
          <button
            onClick={handleCopy}
            className="flex-1 flex items-center justify-center gap-1.5 rounded-md bg-accent py-1.5 text-xs font-bold text-black transition-transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <Copy className="h-3 w-3" />
            Copy Code
          </button>
        </div>
      </div>
    </div>
  );
}
