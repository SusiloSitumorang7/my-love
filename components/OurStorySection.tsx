// FIX: Replaced placeholder with a complete React component for the 'Our Story' section.
import React, { useRef } from 'react';
import useOnScreen from '../hooks/useOnScreen';
import { OUR_STORY_EVENTS } from '../constants';

const OurStorySection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref, '-200px');

  return (
    <section ref={ref} className="py-20 px-4 sm:px-8 relative">
      <div className={`container mx-auto transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <h2 className="text-4xl md:text-5xl font-dancing-script text-center mb-16 text-glow">Our Story</h2>
        <div className="relative wrap overflow-hidden p-4 sm:p-10 h-full">
          <div className="absolute border-opacity-20 border-white/50 h-full border-2" style={{left: '50%'}}></div>

          {OUR_STORY_EVENTS.map((event, index) => (
            <div key={index} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse left-timeline' : 'right-timeline'}`}>
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-pink-500 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">{index + 1}</h1>
              </div>
              <div className={`order-1 bg-white/10 border border-white/20 rounded-lg shadow-xl w-5/12 px-6 py-4 transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} style={{ transitionDelay: `${index * 200}ms` }}>
                <h3 className="mb-3 font-bold text-white text-xl">{event.title}</h3>
                <p className="text-sm leading-snug tracking-wide text-white/80">{event.description}</p>
                <p className="text-xs text-white/60 mt-2">{event.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;
