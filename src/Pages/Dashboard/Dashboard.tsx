import FooterNav from "../../Components/FooterNav";
import Header from "../../Components/Header";
import IntroBox from "../../Components/IntroBox";
import AboutTechnology from "../../Components/AboutTechnology";
import Services from "../../Components/Services";
import NewsLatter from "../../Components/NewsLatter";
import ContactUs from "../../Components/ContactUs";

export default function Dashboard() {
  return (
    <>
      <Header />
      <IntroBox />
      <AboutTechnology />
      <Services />
      <NewsLatter />
      <ContactUs />
      <FooterNav />
    </>
  );
}
