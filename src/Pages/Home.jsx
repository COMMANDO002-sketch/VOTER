import Navbar from "../Component/Navbar/Navbar";
import Hero from "../Component/Hero/Hero";
import Partners from "../Component/Partners/Partners";
import About from "../Component/About/About";
import Features from "../Component/Features/Features";
import HowItWorks from "../Component/HowItWorks/HowItWorks";
import Statistics from "../Component/Statistics/Statistics";
import FeaturedElections from "../Component/FeaturedElections/FeaturedElections";
import Testimonials from "../Component/Testimonials/Testimonials";
import CallToAction from "../Component/CallToAction/CallToAction";
import Footer from "../Component/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Partners />
      <About />
      <Features />
      <HowItWorks />
      <Statistics />
      <FeaturedElections />
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  );
}

export default Home;