
import Button from "../../components/ui/Button/Button"
import styles from './CtaCards.module.css';
import lady1 from "../../assets/lady1.svg"
import lady2 from "../../assets/lady2.svg"

const CTACards = () => {
  return (
    <div className={styles.container}>
      
      <div className={`${styles.card} ${styles.cardPurple}`}>
        <div className={styles.content}>
          <p className={styles.label}>≣ POPULAR COURSES</p>
          <h3 className={styles.title}>
            Get The Best Courses &<br />
            Upgrade Your Skills
          </h3>
          <Button variant = "primary">JOIN WITH US</Button>
        </div>
            <img
  src={lady1}
  alt="Student"
  className={styles.cardImage}
/>
      </div>

     
      <div className={`${styles.card} ${styles.cardDark}`}>
        <div className={styles.content}>
          <p className={styles.label}>≣ POPULAR COURSES</p>
          <h3 className={styles.title}>
            Get The Best Courses &<br />
            Upgrade Your Skills
          </h3>
          <Button variant = "secondary">JOIN WITH US</Button>
        </div>
        <img
  src={lady2}
  alt="Student"
  className={styles.cardImage}
/>
      </div>
    </div>
  );
};

export default CTACards;