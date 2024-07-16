import About from "./components/About";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import SectionVideos from "./components/SectionVideos";
import Welcome from "./components/Welcome";

const Inicio = () => {
  return (
    <div className="mainSection">
      <Banner />
      <Welcome/>
      <About/>
      <SectionVideos/>
      <Footer />
    </div>
  );
};

export default Inicio;