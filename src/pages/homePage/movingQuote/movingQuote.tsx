import { FC } from 'react'
import './movingQuote.styles.css'

export const Quote: FC = () => {
    return (
      <div className="quote-container">
        <p className="quote-text">
        "Success is not the result of spontaneous combustion. You must set yourself on fire." — Arnold H. Glasow
        </p>
      </div>
    );
  };