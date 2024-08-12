import { FC, useState, useEffect } from 'react';
import './typingText.styles.css'; 

export const TypingText: FC = () => {
  const [text, setText] = useState<string>(''); // Ensure the state is typed correctly
  const fullText = 'Engaging our creativity together.';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(prev => {
        const newText = fullText.substring(0, index + 1);
        index++;
        return newText;
      });
      if (index >= fullText.length) {
        clearInterval(timer);
      }
    }, 100); 
    return () => clearInterval(timer);
  }, []);

  return (
    <p className="typing-text">
      {text}
    </p>
  );
};