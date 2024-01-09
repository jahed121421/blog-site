import Banner from "../../Components/Banner/Banner";
import AboutUs from "../AboutUs/AboutUs";
import Feature from "../Feature/Feature";
import ContactUs from "./../ContactUs/ContactUs";
import Faq from "./../Faq/Faq";
import Subscribe from "./../SubScribe/Subscribe";

const Display = () => {
  return (
    <>
      <Banner />
      <AboutUs />
      <Faq />
      <Subscribe />
      <Feature />
      <ContactUs />
    </>
  );
};

export default Display;
