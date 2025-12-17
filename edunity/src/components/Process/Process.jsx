// WorkProcess.jsx
import React from 'react';
import styles from './Process.module.css';
import ProcessCard from '../ui/ProcessCard/ProcessCard';
import card1 from '../../assets/card1.svg'
import card2 from '../../assets/card2.svg'
import card3 from '../../assets/card3.svg'

const WorkProcess = () => {
  const processes = [
    {
      id: 1,
      icon: card1,
      title: 'START COURSE',
      description: 'Duis aute irure dolor reprehenderit in voluptate velit esse cillum dolore fugiat nulla pariatur. Excepteur',
      variant: 'outline'
    },
    {
      id: 2,
      icon: card2, 
      title: 'MAKE DECISION',
      description: 'Duis aute irure dolor reprehenderit in voluptate velit esse cillum dolore fugiat nulla pariatur. Excepteur',
      variant: 'filled'
    },
    {
      id: 3,
      icon: card3,
      title: 'GET A CERTIFICATE',
      description: 'Duis aute irure dolor reprehenderit in voluptate velit esse cillum dolore fugiat nulla pariatur. Excepteur',
      variant: 'outline'
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.topLabel}>⚐ WORKING STRATEGY</p>
        <h2 className={styles.title}>Our Work Process</h2>
      </div>

      <div className={styles.cardsGrid}>
        {processes.map((process) => (
          <ProcessCard key={process.id} process={process} />
        ))}
      </div>
    </div>
  );
};

export default WorkProcess;