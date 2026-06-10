import React, { useState, useMemo } from 'react';
import Hero from '../components/Hero';
import FilterBar from '../components/FilterBar';
import EffectCard from '../components/EffectCard';
import CodeModal from '../components/CodeModal';
import { effects } from '../data/effects';
import { Play, RotateCcw } from 'lucide-react';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeEffect, setActiveEffect] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [replayTrigger, setReplayTrigger] = useState(0);

  // Filter effects based on search query and category
  const filteredEffects = useMemo(() => {
    return effects.filter((effect) => {
      const matchesCategory =
        selectedCategory === 'All' || effect.category === selectedCategory;
      const matchesSearch =
        effect.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        effect.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleOpenModal = (effect) => {
    setActiveEffect(effect);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setActiveEffect(null);
  };

  const handleReplayAll = () => {
    setReplayTrigger((prev) => prev + 1);
  };

  return (
    <div className="flex-1 bg-[#0a0a0a]">
      {/* Hero Section */}
      <Hero />

      {/* Main Showcase Area */}
      <div id="effects-showcase" className="scroll-mt-20">
        {/* Sticky Filter Bar */}
        <FilterBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        {/* Showcase Grid Controls & Info */}
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex items-center justify-between">
          <p className="text-sm text-neutral-400 font-mono">
            Showing <span className="text-accent font-semibold">{filteredEffects.length}</span> of <span className="text-white font-semibold">{effects.length}</span> effects
          </p>
          
          {filteredEffects.length > 0 && (
            <button
              onClick={handleReplayAll}
              className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-800 bg-neutral-950 px-4 py-2 text-xs font-semibold text-neutral-300 transition-colors hover:text-white hover:border-neutral-700 cursor-pointer"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              Replay All
            </button>
          )}
        </div>

        {/* Effects Grid */}
        <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          {filteredEffects.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {filteredEffects.map((effect) => (
                <EffectCard
                  key={effect.id}
                  effect={effect}
                  onOpenModal={handleOpenModal}
                  replayTrigger={replayTrigger}
                />
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="flex flex-col items-center justify-center border border-dashed border-neutral-800 rounded-2xl py-24 text-center">
              <p className="text-neutral-500 text-lg font-mono">No text effects match your search.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="mt-4 rounded-lg bg-accent/10 border border-accent/20 px-4 py-2 text-xs font-bold text-accent transition-colors hover:bg-accent/20 cursor-pointer"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Code Inspector Modal */}
      <CodeModal
        effect={activeEffect}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}
