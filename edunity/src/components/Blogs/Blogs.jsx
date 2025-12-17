import styles from './Blogs.module.css';
import BlogCard from '../../components/ui/BlogCard/BlogCard';
import Button from "../../components/ui/Button/Button"
import blog1 from "../../assets/blog1.svg";
import blog2 from "../../assets/blog2.svg";

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      author: 'Sunita mazan',
      date: 'March 29, 2023',
      Image: blog1,
      title: 'Lorem ipsum dolor sit amet, consectetur Adipiscing elit, sed do.',
    },
    {
      id: 2,
      image: blog2,
      author: 'Sunita mazan',
      date: 'March 29, 2023',
      title: 'Lorem ipsum dolor sit amet, consectetur Adipiscing elit, sed do.',
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <p className={styles.topLabel}>≣ POPULAR COURSES</p>
          <h2 className={styles.title}>
            Our Latest News<br />
            & Upcoming Blog Posts
          </h2>
        </div>
        <Button variant = "primary">
          VIEW ALL RECENT POST
        </Button>
      </div>

      <div className={styles.blogsGrid}>
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogSection;