// FIX: Replaced placeholder with a complete React component for the final message section.
import React, { useRef } from 'react';
import useOnScreen from '../hooks/useOnScreen';

interface FinalMessageSectionProps {
  name: string;
}

const FinalMessageSection: React.FC<FinalMessageSectionProps> = ({ name }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref, '-200px');

  return (
    <section ref={ref} className="min-h-screen flex flex-col items-center justify-center text-center p-8 bg-black/20">
      <div className={`container mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-4xl md:text-6xl font-dancing-script mb-8 text-glow">Forever and Always</h2>
        <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto mb-8">
          {name}, my love, my everything. This is just a small token to show you how much you mean to me. Here's to countless more memories, adventures, and a lifetime of love with you.
        </p>
        <p className="text-2xl md:text-3xl font-dancing-script text-pink-400">
          I love you.
        </p>
      </div>
    </section>
  );
};

export default FinalMessageSection;
