// CTACards.jsx
import React from 'react';
import styles from './CtaCards.module.css';

const CTACards = () => {
  return (
    <div className={styles.container}>
      {/* Purple Card */}
      <div className={`${styles.card} ${styles.cardPurple}`}>
        <div className={styles.content}>
          <p className={styles.label}>≣ POPULAR COURSES</p>
          <h3 className={styles.title}>
            Get The Best Courses &<br />
            Upgrade Your Skills
          </h3>
          <button className={styles.button}>JOIN WITH US</button>
        </div>
        <div className={styles.imagePlaceholder}>
          Student Image
        </div>
      </div>

      {/* Dark Card */}
      <div className={`${styles.card} ${styles.cardDark}`}>
        <div className={styles.content}>
          <p className={styles.label}>≣ POPULAR COURSES</p>
          <h3 className={styles.title}>
            Get The Best Courses &<br />
            Upgrade Your Skills
          </h3>
          <button className={styles.button}>JOIN WITH US</button>
        </div>
        <div className={styles.imagePlaceholder}>
          Student Image
        </div>
      </div>
    </div>
  );
};

export default CTACards;