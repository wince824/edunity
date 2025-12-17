
import { User, Calendar } from 'lucide-react';
import styles from './BlogCard.module.css';
import Button from "../Button/Button"

const BlogCard = ({ blog }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <div className={styles.imageContainer}>
  <img 
    src={blog.image} 
    alt={blog.title} 
    className={styles.image}
  />
</div>
      </div>

      <div className={styles.content}>
        <div className={styles.meta}>
          <div className={styles.metaItem}>
            <User size={16} color="#7B68EE" />
            <span>{blog.author}</span>
          </div>
          <div className={styles.metaItem}>
            <Calendar size={16} color="#7B68EE" />
            <span>{blog.date}</span>
          </div>
        </div>

        <h3 className={styles.title}>{blog.title}</h3>

        <Button variant = "secondary">READ MORE</Button>
      </div>
    </div>
  );
};

export default BlogCard;