import { useState, useEffect } from 'react';

const useTypewriter = (text: string, speed: number = 50, start: boolean = true) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    if (!start) return;

    let i = 0;
    setDisplayText(''); // Reset on text change or restart
    
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayText(prevText => prevText + text.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [text, speed, start]);

  return displayText;
};

export default useTypewriter;
