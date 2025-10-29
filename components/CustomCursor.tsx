// FIX: Replaced placeholder with a complete React component for a custom cursor.
import React, { useState, useEffect } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).getPropertyValue('cursor') === 'pointer'
      );
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', onMouseMove);
    document.body.addEventListener('mouseleave', onMouseLeave);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.body.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [isVisible]);

  const cursorClasses = `fixed top-0 left-0 pointer-events-none z-[9999] transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`;

  return (
    <>
      <div
        className={`${cursorClasses} transition-transform duration-200 ease-out`}
        style={{
          transform: `translate(${position.x}px, ${position.y}px) scale(${isPointer ? 1.5 : 1})`,
        }}
      >
        <div className="w-8 h-8 rounded-full border-2 border-pink-400 -translate-x-1/2 -translate-y-1/2" />
      </div>
      <div
        className={`${cursorClasses} transition-transform duration-100 ease-out`}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      >
        <div className="w-2 h-2 bg-pink-400 rounded-full -translate-x-1/2 -translate-y-1/2" />
      </div>
    </>
  );
};

export default CustomCursor;
