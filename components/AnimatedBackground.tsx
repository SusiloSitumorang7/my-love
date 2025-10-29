import React from 'react';

const AnimatedBackground: React.FC = () => {
  const elements = Array.from({ length: 15 });

  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
      {elements.map((_, i) => {
        const size = Math.random() * 80 + 20; // 20px to 100px
        const style = {
          left: `${Math.random() * 100}%`,
          animationDuration: `${Math.random() * 20 + 15}s`, // 15s to 35s
          animationDelay: `${Math.random() * 15}s`,
          width: `${size}px`,
          height: `${size}px`,
          filter: `blur(${Math.random() * 5 + 5}px)`,
          background: `rgba(255, 255, 255, ${Math.random() * 0.2 + 0.1})`,
        };
        
        return (
          <div
            key={i}
            className="absolute bottom-[-150px] rounded-full floating-particle"
            style={style}
          />
        );
      })}
    </div>
  );
};

export default AnimatedBackground;