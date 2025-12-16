import styles from "./Hero.module.css";
import Button from "../ui/Button/Button";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <h4>Welcome Edunity Online Courses</h4>
        <h1>
          Achieving Your Dreams <br /> Through <span>Education</span>
        </h1>

        <p>
          We are experienced in educational platform abd skilled strategies<br/>
          for the success of our online learning
        </p>

        <div className={styles.actions}>
          <Button variant="primary">Discover more</Button>
        
        </div>
      </div>
    </section>
  );
};

export default Hero;
