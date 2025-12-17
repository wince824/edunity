
import React from 'react';
import styles from './ProcessCard.module.css';

const ProcessCard = ({ process }) => {
  const cardClass = process.variant === 'filled' 
    ? `${styles.card} ${styles.cardFilled}` 
    : `${styles.card} ${styles.cardOutline}`;

  return (
    <div className={cardClass}>
      <div className={styles.iconContainer}>
        
        <img src={process.icon} alt={process.title} className={styles.icon} />
       
      </div>
      
      <h3 className={styles.title}>{process.title}</h3>
      
      <p className={styles.description}>{process.description}</p>
    </div>
  );
};

export default ProcessCard;