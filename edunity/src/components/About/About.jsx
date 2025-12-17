
import { Share2, Users } from 'lucide-react';
import styles from './About.module.css';
import  Button from "../ui/Button/Button"

const About = () => {
  return (
    <div className={styles.main}>
     
      <div className={styles.left}>
        
        <div className={styles.mainImage}>
          <div className={styles.imagePlaceholder}>
            Student with headphones
          </div>
        </div>

        
        <div className={styles.rightColumn}>
          
          <div className={styles.decorativeElement}></div>

         
          <div className={styles.secondImage}>
            <div className={styles.imagePlaceholder}>
              Students studying
            </div>
          </div>
        </div>
      </div>

     
      <div className={styles.right}>
        <p className={styles.about}>◆ ABOUT US</p>

        <h2 className={styles.heading}>
          We Are Always Ensure Best<br />
          Course For Your Learning
        </h2>

        <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br />
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim<br />
          veniam, quis nostrud exercitation ullamco laboris nisi.
        </p>

       
        <div className={styles.features}>
          <div className={styles.featureItem}>
            <div className={styles.iconBox}>
              <Share2 size={24} color="white" />
            </div>
            <div className={styles.featureContent}>
              <h3 className={styles.featureTitle}>Sharing A Screen</h3>
              <p className={styles.featureText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br />
                tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          <div className={styles.featureItem}>
            <div className={styles.iconBox}>
              <Users size={24} color="white" />
            </div>
            <div className={styles.featureContent}>
              <h3 className={styles.featureTitle}>Presenter Control</h3>
              <p className={styles.featureText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br />
                tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>

        
        < Button variant = "primary">
          ADMISSION NOW
        </Button>
      </div>
      
    </div>
  );
};

export default About;