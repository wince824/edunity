import { Play } from 'lucide-react';
import styles from './Offer.module.css';
import Button from "../ui/Button/Button"

const OfferBanner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.overlay}></div>
      
      
      <div className={styles.waveDecor}></div>
      <div className={styles.curveDecor}></div>

      <div className={styles.content}>
        
        <div className={styles.textContent}>
          <p className={styles.topLabel}>⚐ ARE YOU READY FOR THIS OFFER</p>
          <h2 className={styles.title}>40% offer for very first 100</h2>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br />
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis<br />
            nostrud exercitation ullamco laboris nisi.
          </p>
          <div className={styles.buttons}>
            <Button variant = "primary" >ADMISSION NOW</Button>
            <Button variant = "secondary" >OUR COURSES</Button>
          </div>
        </div>

        
        <div className={styles.videoSection}>
          <div className={styles.videoPlayer}>
            <button className={styles.playButton}>
              <Play size={32} fill="white" color="white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferBanner;