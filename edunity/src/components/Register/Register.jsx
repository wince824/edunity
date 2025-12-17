// RegisterSection.jsx

import styles from './Register.module.css';
import CountdownTimer from '../../components/ui/Countdown/Countdown';
import SignUpForm from '../../components/ui/Form/Form';

const RegisterSection = () => {
  return (
    <div className={styles.container}>
      
      
      
      <div className={styles.leftSection}>
        <p className={styles.topLabel}>≣ CONTACT WITH US</p>
        <h2 className={styles.title}>
          Register Now Get Premium<br />
          Online Admission
        </h2>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br />
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud<br />
          exercitation ullamco laboris nisi ut aliquip ex ea commodo
        </p>

        <CountdownTimer />
      </div>

      
      <div className={styles.rightSection}>
        <SignUpForm />
      </div>
    </div>
  );
};

export default RegisterSection;