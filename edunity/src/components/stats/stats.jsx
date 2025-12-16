import styles from "./stats.module.css";

const StatCard = ({ number, label }) => {
  return (
    <div className={styles.statCard}>
      <div className={styles.statNumber}>{number}</div>
      <div className={styles.statLabel}>{label}</div>
    </div>
  );
};

const StatsSection = () => {
  const stats = [
    { number: "6,879+", label: "Learners & counting" },
    { number: "1,327+", label: "Courses & Video" },
    { number: "1,359+", label: "Certified Students" },
    { number: "1,557+", label: "Registered Enrolls" }
  ];

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        {stats.map((stat, index) => (
          <StatCard key={index} number={stat.number} label={stat.label} />
        ))}
      </div>
    </div>
  );
};

export default StatsSection;