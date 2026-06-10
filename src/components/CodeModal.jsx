import React from 'react';
import { X, Copy, Check } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { toast } from 'sonner';

export default function CodeModal({ effect, isOpen, onClose }) {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen || !effect) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(effect.code);
    setCopied(true);
    toast.success("Copied to clipboard!", {
      style: {
        background: '#111111',
        border: '1px solid #1e1e1e',
        color: '#00FF66',
      }
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative flex flex-col w-full max-w-3xl max-h-[85vh] rounded-xl border border-neutral-800 bg-neutral-950 overflow-hidden shadow-2xl transition-all">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-neutral-900 px-6 py-4">
          <div>
            <h2 className="text-lg font-bold text-white font-mono">
              {effect.name} Code Snippet
            </h2>
            <p className="text-xs text-neutral-400 mt-1">
              Category: <span className="text-accent">{effect.category}</span>
            </p>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-neutral-400 hover:bg-neutral-900 hover:text-white transition-colors cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {/* Quick Copy Block */}
          <div className="relative rounded-lg overflow-hidden border border-neutral-900 bg-black">
            <div className="flex items-center justify-between bg-neutral-950 px-4 py-2 border-b border-neutral-900">
              <span className="text-xs font-mono text-neutral-400">self-contained-template.html</span>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 rounded bg-accent/10 px-3 py-1 text-xs font-semibold text-accent border border-accent/20 transition-all hover:bg-accent/20 cursor-pointer"
              >
                {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                {copied ? "Copied!" : "Copy Code"}
              </button>
            </div>
            
            {/* Syntax Highlighter */}
            <div className="text-sm font-mono overflow-x-auto max-h-[400px]">
              <SyntaxHighlighter
                language="html"
                style={atomDark}
                customStyle={{
                  margin: 0,
                  padding: '1.25rem',
                  background: 'transparent',
                  fontFamily: '"Fira Code", monospace',
                }}
              >
                {effect.code}
              </SyntaxHighlighter>
            </div>
          </div>

          {/* Setup Instructions */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white font-mono">
              How to Use:
            </h3>
            <ol className="list-decimal pl-5 text-sm text-neutral-400 space-y-2">
              <li>Copy the complete code block above.</li>
              <li>Paste it into any static HTML file (e.g., <code className="text-xs font-mono text-accent bg-neutral-900 px-1.5 py-0.5 rounded">index.html</code>).</li>
              <li>Ensure the browser has internet access to load GSAP from the Cloudflare CDN link.</li>
              <li>Open the file in a browser to see the animation live!</li>
            </ol>
          </div>

        </div>
      </div>
    </div>
  );
}
