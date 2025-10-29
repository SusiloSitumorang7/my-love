
import React, { useState } from 'react';

interface NamePromptProps {
  onSubmit: (name: string) => void;
}

const NamePrompt: React.FC<NamePromptProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(name);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md animate-fade-in">
      <div className="p-8 bg-white/10 border border-white/20 rounded-2xl shadow-2xl text-center">
        <form onSubmit={handleSubmit}>
          <h2 className="text-2xl md:text-3xl font-dancing-script mb-4 text-glow">What's your name, my love?</h2>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 mb-6 text-center bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-400"
            placeholder="Enter your name here"
            autoFocus
          />
          <button
            type="submit"
            className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full text-lg font-semibold text-white transition-transform transform hover:scale-105 button-glow"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default NamePrompt;
