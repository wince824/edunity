// ProcessCard.jsx
import React from 'react';
import styles from './ProcessCard.module.css';

const ProcessCard = ({ process }) => {
  const cardClass = process.variant === 'filled' 
    ? `${styles.card} ${styles.cardFilled}` 
    : `${styles.card} ${styles.cardOutline}`;

  return (
    <div className={cardClass}>
      <div className={styles.iconContainer}>
        {/* Replace the img src with your actual SVG path */}
        <img src={process.icon} alt={process.title} className={styles.icon} />
        {/* 
          Alternative: If you want to use inline SVG, you can do:
          <svg className={styles.icon} viewBox="0 0 24 24">
            <path d="your-svg-path-here" />
          </svg>
        */}
      </div>
      
      <h3 className={styles.title}>{process.title}</h3>
      
      <p className={styles.description}>{process.description}</p>
    </div>
  );
};

export default ProcessCard;