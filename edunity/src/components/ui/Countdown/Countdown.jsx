// CountdownTimer.jsx
import React from 'react';
import styles from './Countdown.module.css';

const CountdownTimer = () => {
  return (
    <div className={styles.countdown}>
      <div className={styles.timeBlock}>
        <div className={styles.timeValue}>112</div>
        <div className={styles.timeLabel}>DAYS</div>
      </div>
      <div className={styles.timeBlock}>
        <div className={styles.timeValue}>21</div>
        <div className={styles.timeLabel}>HOURS</div>
      </div>
      <div className={styles.timeBlock}>
        <div className={styles.timeValue}>2</div>
        <div className={styles.timeLabel}>MINUTES</div>
      </div>
      <div className={styles.timeBlock}>
        <div className={styles.timeValue}>23</div>
        <div className={styles.timeLabel}>SECONDS</div>
      </div>
    </div>
  );
};

export default CountdownTimer;