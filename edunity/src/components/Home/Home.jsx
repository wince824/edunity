import Category from "../Category/Category";
import Hero from "../Hero/Hero";
import About from "../About/About"
import styles from "./Home.module.css"
import StatsSection from "../stats/stats";
import FeaturedCourses from "../Popular/Popular"
import OfferBanner from "../Offer/Offer";
import WorkProcess from "../Process/Process"
import CTACards from "../CtaCards/CtaCards";

const Home = () => {
  return (
    <>
      <div className = {styles.main}>
      <Hero/>
      <Category/>
      <About/>
      <StatsSection/>
      <FeaturedCourses/>
      <OfferBanner/>
      <WorkProcess/>
      <CTACards/>
      </div>
    </>
  );
};

export default Home;
