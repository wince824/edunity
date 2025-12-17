import styles from './Testimonal.module.css';
import student from '../../assets/lady3.jpeg';
import avatar from '../../assets/avatar.svg';

const Testimonial = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>

        
        <div className={styles.imageWrapper}>
          <img src={student} alt="Student" />
        </div>

       
        <div className={styles.card}>
          <p className={styles.quote}>
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.”
          </p>

          <div className={styles.user}>
            <img src={avatar} alt="Gloria Burnett" />
            <div>
              <h4>Gloria Burnett</h4>
              <span>Software Developer</span>
            </div>
          </div>

          <div className={styles.dots}>
            <span className={styles.active}></span>
            <span></span>
            <span></span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonial;
