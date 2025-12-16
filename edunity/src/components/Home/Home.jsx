import Category from "../Category/Category";
import Hero from "../Hero/Hero";
import About from "../About/About"
import styles from "./Home.module.css"
import StatsSection from "../stats/stats";

const Home = () => {
  return (
    <>
      <div className = {styles.main}>
      <Hero/>
      <Category/>
      <About/>
      <StatsSection/>
      </div>
    </>
  );
};

export default Home;
