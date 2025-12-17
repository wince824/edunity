import styles from './Popular.module.css';
import CourseCard from '../ui/Card/Card';
import Button from "../ui/Button/Button"
import course1 from '../../assets/course1.jpeg';
import course2 from '../../assets/course2.jpeg';
import course3 from '../../assets/course3.jpeg';
import course4 from '../../assets/course4.jpeg';
import avatar from "../../assets/angela.svg"

const FeaturedCourses = () => {
  const courses = [
    {
      id: 1,
      image: course1 ,
      rating: 4.7,
      price: '$60',
      originalPrice: '$120',
      title: 'Statistics Data Science And Business..',
      instructor: 'Angela',
      instructorRole: 'Development',
      lessons: '02 Lessons',
      duration: '4h 50m',
      students: 'Students',
      avatar: avatar,
    },
    {
      id: 2,
      image: course2,
      rating: 4.7,
      price: '$60',
       avatar: avatar,
      originalPrice: '$120',
      title: 'Statistics Data Science And Business..',
      instructor: 'Angela',
      instructorRole: 'Development',
      lessons: '02 Lessons',
      duration: '4h 50m',
      students: 'Students'
    },
    {
      id: 3,
      image: course3,
      rating: 4.7,
       avatar: avatar,
      price: '$60',
      originalPrice: '$120',
      title: 'Statistics Data Science And Business..',
      instructor: 'Angela',
      instructorRole: 'Development',
      lessons: '02 Lessons',
      duration: '4h 50m',
      students: 'Students'
    },
    {
      id: 4,
      image: course4,
      rating: 4.7,
       avatar: avatar,
      price: '$60',
      originalPrice: '$120',
      title: 'Statistics Data Science And Business..',
      instructor: 'Angela',
      instructorRole: 'Development',
      lessons: '02 Lessons',
      duration: '4h 50m',
      students: 'Students'
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <p className={styles.topLabel}>≣ TOP POPULAR COURSE</p>
          <h2 className={styles.title}>Explore Featured Courses</h2>
        </div>
        <Button variant = "primary">
          BROWSE EDUNITY COURSES
        </Button>
      </div>

      <div className={styles.coursesGrid}>
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedCourses;