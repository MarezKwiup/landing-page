import Carousel from "@/components/carousel";
import FifthSection from "./fifth-section/page";
import FirstSection from "./first-section/page";
import Footer from "./footer/page";
import FourthSection from "./fourth-section/page";
import Navbar from "./navbar/page";
import Pricing from "./pricing/page";
import SecondSection from "./second-section/page";
import ThirdSection from "./third-section/page";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <FirstSection/>
      <Carousel/>
      <SecondSection/>
      <ThirdSection/>
      <FourthSection/>
      <Pricing/>
      <FifthSection/>
      <Footer/>
    </div>
  );
}
