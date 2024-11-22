import Navbar from "../component/layouts/Navbar";
import HomeSection from "../component/layouts/Home";
import Skill from "../component/layouts/Skill";
import Project from "../component/layouts/Project";
import Contact from "../component/layouts/Contact";
import Footer from "../component/layouts/Footer";
const HomePage = () => (
  <div>
    <Navbar />
    <HomeSection/>
    <Skill/>
    <Project/>
    <Contact/>
    <Footer/>
  </div>
);

export default HomePage;
