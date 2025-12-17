import Category from "../Category/Category";
import Hero from "../Hero/Hero";
import About from "../About/About"
import styles from "./Home.module.css"
import StatsSection from "../stats/stats";
import FeaturedCourses from "../Popular/Popular"
import OfferBanner from "../Offer/Offer";
import WorkProcess from "../Process/Process"
import CTACards from "../CtaCards/CtaCards";
import Testimonial from "../Testimonal/Testimonal";
import RegisterSection from "../Register/Register";
import YearlyEventsSection from "../Yearly/Yearly"
import BlogSection from "../Blogs/Blogs"
import Footer from "../ui/Footer/Footer";

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
      <Testimonial/>
      <RegisterSection/>
      <YearlyEventsSection/>
      <BlogSection/>
      <Footer/>
      </div>
    </>
  );
};

export default Home;
