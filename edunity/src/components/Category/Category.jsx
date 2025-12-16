import Button from "../ui/Button/Button";
import styles from "./Category.module.css";

 import webDesignIcon from "../../assets/web-design.png";
 import graphicsDesignIcon from "../../assets/graphics-design.png";
 import videoEditorIcon from "../../assets/video-editor.png";
 import contentWritingIcon from "../../assets/content-writing.png";
 import marketingIcon from "../../assets/marketing.png";
const CategoryItem = ({ icon, title, courseCount }) => {
  return (
    <div className={styles.categoryItem}>
      <div className={styles.iconContainer}>
        <img src={icon} alt={title} className={styles.icon} />
      </div>
      <h3 className={styles.categoryTitle}>{title}</h3>
      <p className={styles.courseCount}>{courseCount} COURSES</p>
    </div>
  );
};
const Category = () => {
   const categories = [
  { icon: webDesignIcon, title: "WEB DESIGN", courseCount: "08" },
  { icon: graphicsDesignIcon, title: "GRAPHICS DESIGN", courseCount: "15" },
  { icon: videoEditorIcon, title: "VIDEO EDITOR", courseCount: "10" },
  { icon: contentWritingIcon, title: "CONTENT WRITING", courseCount: "07" },
  { icon: marketingIcon, title: "MARKETING", courseCount: "15" }
];
  return (
    <div className={styles.main}>
      <div className={styles.upper}>
        <div className={styles.left}>
          <p>📂 CATEGORY</p>
          <h2>Favorite Topics To Learn</h2>
        </div>
        <div className={styles.right}>
          <div className={styles.chevrons}>
            {[...Array(8)].map((_, i) => (
              <svg key={i} width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7 4L13 10L7 16" stroke="#E0E0E0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ))}
          </div>
          <Button variant="secondary">BROWSE EDUNITY COURSES</Button>
        </div>
      </div>
      
      <div className={styles.lower}>
        {categories.map((category, index) => (
          <CategoryItem
            key={index}
            icon={category.icon}
            title={category.title}
            courseCount={category.courseCount}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;