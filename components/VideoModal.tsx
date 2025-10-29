import React, { useEffect } from 'react';

interface VideoModalProps {
  src: string;
  onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ src, onClose }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute -top-2 -right-2 z-10 w-10 h-10 bg-white/20 rounded-full text-white text-2xl flex items-center justify-center hover:bg-pink-500 transition-colors"
          aria-label="Close video"
        >
          &times;
        </button>
        <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
          <video 
            src={src} 
            controls 
            autoPlay 
            className="w-full h-full"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
