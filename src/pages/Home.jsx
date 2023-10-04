import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import HowToTake from "../components/HowToTake/HowToTake";
import Navbar from "../components/Navbar/Navbar";
import Newsletter from "../components/Newsletter/Newsletter";
import OurServices from "../components/OurServices/OurServices";
import Reviews from "../components/Reviews/Reviews";
import SafeHands from "../components/SafeHands/SafeHands";
import SectionHelp from "../components/SectionHelp/SectionHelp";
import Stats from "../components/Stats/Stats";
import "./Home.scss";

const Home = () => {
  return (
    <div className="Home">
      <Navbar />
      <Hero title="Section 1" />
      <SectionHelp />
      <HowToTake />
      <OurServices title="Section 2" />
      <Stats title="Section 3" />
      <SafeHands />
      <Reviews title="Section 4" />
      <Newsletter />
      <Footer />

      <div>Home</div>
    </div>
  );
};

export default Home;
