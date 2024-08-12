import { FC } from 'react'
import './movingQuote.style.css'

export const Quote: FC = () => {
    return (
      <div className="quote-container">
        <p className="quote-text">
        "Code is like humor. When you have to explain it, it’s bad." — Cory House
        </p>
      </div>
    );
  };