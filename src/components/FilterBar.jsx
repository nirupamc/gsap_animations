import React from 'react';
import { Search } from 'lucide-react';

const CATEGORIES = [
  'All',
  'Entrance',
  'Per-Character',
  'Kinetic',
  'Glitch & Digital',
  'Creative',
  'Paragraph',
  'Scroll'
];

export default function FilterBar({ selectedCategory, setSelectedCategory, searchQuery, setSearchQuery }) {
  return (
    <div className="sticky top-16 z-40 w-full border-b border-neutral-900 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        
        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
          {CATEGORIES.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-accent text-black font-semibold'
                    : 'border border-neutral-800 bg-transparent text-neutral-400 hover:text-white hover:border-neutral-700'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Search Field */}
        <div className="relative w-full max-w-xs">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-neutral-500">
            <Search className="h-4 w-4" />
          </span>
          <input
            type="text"
            placeholder="Search effects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-lg border border-neutral-800 bg-neutral-950/50 py-2 pl-9 pr-4 text-sm text-white placeholder-neutral-500 outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
          />
        </div>

      </div>
    </div>
  );
}
