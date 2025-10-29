// FIX: Replaced placeholder with a complete React component for the intro section.
import React, { useRef } from 'react';
import useOnScreen from '../hooks/useOnScreen';
import useTypewriter from '../hooks/useTypewriter';

interface IntroSectionProps {
  name: string;
}

const IntroSection: React.FC<IntroSectionProps> = ({ name }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref, '-100px');
  // Add a non-breaking space to prevent the name from wrapping alone on a new line
  const titleText = `To my dearest ${name.replace(/ /g, "\u00a0")},`;
  const typedTitle = useTypewriter(titleText, 100, isVisible);
  
  return (
    <section 
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center text-center p-8 relative overflow-hidden"
    >
      <div className={`z-10 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <h1 className="text-4xl md:text-6xl font-dancing-script mb-4 text-glow min-h-[80px] md:min-h-[110px]">
          {typedTitle}
        </h1>
        <p className={`text-xl md:text-2xl font-light max-w-2xl mx-auto transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          I made this little world just for you, to remind you of all the beautiful moments we've shared.
        </p>
      </div>
      <div className={`absolute bottom-10 text-white animate-bounce transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14m0 0l-7-7m7 7l7-7"></path></svg>
      </div>
    </section>
  );
};

export default IntroSection;
