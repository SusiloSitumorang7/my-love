// FIX: Replaced placeholder with a complete React component for an image lightbox modal.
import React, { useEffect } from 'react';

interface LightboxProps {
  src: string;
  onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ src, onClose }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative max-w-[90vw] max-h-[90vh] p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute -top-2 -right-2 z-10 w-10 h-10 bg-white/20 rounded-full text-white text-2xl flex items-center justify-center hover:bg-pink-500 transition-colors"
          aria-label="Close image"
        >
          &times;
        </button>
        <img src={src} alt="Enlarged view" className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-zoom-in"/>
      </div>
    </div>
  );
};

export default Lightbox;
