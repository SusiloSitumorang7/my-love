// FIX: Replaced placeholder with a complete React component for the 'Love Notes' section.
import React, { useRef } from 'react';
import useOnScreen from '../hooks/useOnScreen';
import { LOVE_NOTES } from '../constants';

const LoveNotesSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref, '-200px');

  return (
    <section ref={ref} className="py-20 px-8 bg-black/20">
      <div className={`container mx-auto transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <h2 className="text-4xl md:text-5xl font-dancing-script text-center mb-12 text-glow">Love Notes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {LOVE_NOTES.map((note, index) => (
            <div
              key={index}
              className={`p-6 bg-white/5 border border-white/10 rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 hover:!rotate-0 ${
                ['rotate-1', '-rotate-2', 'rotate-2', '-rotate-1', 'rotate-3', '-rotate-1'][index % 6]
              }`}
              style={{ 
                transitionDelay: `${index * 150}ms`, 
                opacity: isVisible ? 1 : 0, 
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              }}
            >
              <p className="text-lg font-light italic text-center text-white/90">"{note}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoveNotesSection;
