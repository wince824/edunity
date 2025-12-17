import React from 'react';
import { BookOpen, Clock, Users, Star } from 'lucide-react';
import styles from './Card.module.css';


const CourseCard = ({ course }) => {
  return (
    <div className={styles.card}>
     
      <div className={styles.imageContainer}>
        <img
  src={course.image}
  alt={course.title}
  className={styles.courseImage}
/>

        
      </div>

      
      <div className={styles.content}>
        
        <div className={styles.topRow}>
          <div className={styles.rating}>
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                size={14}
                fill={"#FFA500" }
                color="#FFA500"
              />
            ))}
            <span className={styles.ratingText}>({course.rating})</span>
          </div>
          <div className={styles.price}>
            <span className={styles.currentPrice}>{course.price}</span>
            <span className={styles.originalPrice}>{course.originalPrice}</span>
          </div>
        </div>

        
        <h3 className={styles.courseTitle}>{course.title}</h3>

        
        <div className={styles.instructor}>
          <img
  src={course.avatar}
  alt={course.instructor}
  className={styles.avatar}
/>

          <span className={styles.instructorText}>
            By {course.instructor} in {course.instructorRole}
          </span>
        </div>

       
        <div className={styles.meta}>
          <div className={styles.metaItem}>
            <BookOpen size={16} />
            <span>{course.lessons}</span>
          </div>
          <div className={styles.metaItem}>
            <Clock size={16} />
            <span>{course.duration}</span>
          </div>
          <div className={styles.metaItem}>
            <Users size={16} />
            <span>{course.students}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;