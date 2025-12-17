
import  { useState } from 'react';
import Button from "../../ui/Button/Button"
import styles from './Form.module.css';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
  };

  return (
    <div className={styles.formCard}>
      <p className={styles.formLabel}>≣ GET IN TOUCH</p>
      <h3 className={styles.formTitle}>Sign Up For Free Resources</h3>

      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className={styles.input}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className={styles.input}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className={styles.input}
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className={styles.textarea}
          rows="4"
        />
        <Button variant = "primary">
          SUBMIT NOW
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;