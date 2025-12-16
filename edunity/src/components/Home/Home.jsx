import Category from "../Category/Category";
import Hero from "../Hero/Hero";
import styles from "./Home.module.css"

const Home = () => {
  return (
    <>
      <div className = {styles.main}>
      <Hero/>
      <Category/>
      </div>
    </>
  );
};

export default Home;
