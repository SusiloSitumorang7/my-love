// FIX: Replaced placeholder with a complete React component for the image gallery section.
import React, { useState, useRef } from 'react';
import { GALLERY_IMAGES } from '../constants';
import useOnScreen from '../hooks/useOnScreen';
import Lightbox from './Lightbox';

const GallerySection: React.FC = () => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref, '-200px');

  const openLightbox = (src: string) => {
    setLightboxImage(src);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };
  
  return (
    <>
      <section ref={ref} className="py-20 px-4 sm:px-8">
        <div className="container mx-auto">
          <h2 className={`text-4xl md:text-5xl font-dancing-script text-center mb-12 text-glow transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>Our Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {GALLERY_IMAGES.map((image, index) => (
              <div 
                key={index}
                className="overflow-hidden rounded-lg shadow-lg cursor-pointer group aspect-square"
                onClick={() => openLightbox(image.src)}
                style={{ 
                  transition: 'transform 0.5s, opacity 0.5s',
                  transitionDelay: `${index * 100}ms`, 
                  opacity: isVisible ? 1 : 0, 
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                }}
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      {lightboxImage && <Lightbox src={lightboxImage} onClose={closeLightbox} />}
    </>
  );
};

export default GallerySection;
