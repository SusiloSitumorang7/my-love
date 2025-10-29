// FIX: Replaced placeholder with a complete React component for the main application structure. This resolves the module error in index.tsx.
import React, { useState, useEffect, useRef } from 'react';
import NamePrompt from './components/NamePrompt';
import AnimatedBackground from './components/AnimatedBackground';
import CustomCursor from './components/CustomCursor';
import MusicToggle from './components/MusicToggle';
import IntroSection from './components/IntroSection';
import OurStorySection from './components/OurStorySection';
import LoveNotesSection from './components/LoveNotesSection';
import GallerySection from './components/GallerySection';
import FinalMessageSection from './components/FinalMessageSection';

// Note: Ensure you have a music file at `/music.mp3` in your public folder.
const MUSIC_SRC = '/music.mp3'; 

function App() {
  const [name, setName] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialize audio element
    audioRef.current = new Audio(MUSIC_SRC);
    audioRef.current.loop = true;
  }, []);

  const handleNameSubmit = (submittedName: string) => {
    if (submittedName.trim()) {
      setName(submittedName.trim());
    }
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        // User interaction is required for autoplay to work in most browsers.
        // We can attempt to play and catch errors.
        audioRef.current.play().catch(error => console.error("Audio play failed. User interaction might be required.", error));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <CustomCursor />
      <AnimatedBackground />
      <MusicToggle isPlaying={isPlaying} onToggle={togglePlay} />
      
      {!name ? (
        <NamePrompt onSubmit={handleNameSubmit} />
      ) : (
        <main className="relative z-10 text-white font-sans overflow-x-hidden">
          <IntroSection name={name} />
          <OurStorySection />
          <LoveNotesSection />
          <GallerySection />
          <FinalMessageSection name={name} />
        </main>
      )}
    </>
  );
}

export default App;
