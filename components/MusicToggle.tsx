// FIX: Replaced placeholder with a complete React component for a music toggle button.
import React from 'react';

interface MusicToggleProps {
  isPlaying: boolean;
  onToggle: () => void;
}

const MusicToggle: React.FC<MusicToggleProps> = ({ isPlaying, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-white/10 border border-white/20 rounded-full text-white text-xl flex items-center justify-center backdrop-blur-sm transition-transform transform hover:scale-110 button-glow"
      aria-label={isPlaying ? 'Pause music' : 'Play music'}
    >
      {isPlaying ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M10 4H6v16h4V4zm8 0h-4v16h4V4z"></path></svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"></path></svg>
      )}
    </button>
  );
};

export default MusicToggle;
