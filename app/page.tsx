// import Image from "next/image";
import Header from "./components/Header";
import CTASection from "./components/CTASection";
// import FAQ from "./components/FAQ";
// import Footer from "./components/Footer";
// import Hero from "./components/Navbar";
import Projects from "./components/Projects";
import Services from "./components/Services";
// import Testimonials from "./components/Testimonials";
// import TrustBadges from "./components/TrustBadges";
import WhyChooseUs from "./components/WhyChooseUs";
// import LeadForm from "./components/LeadForm";
import Process from "./components/Process";
import About from "./components/About";

export default function Home() {
  return (
    <div>
      <Header />
      {/* <Hero /> */}
      {/* <TrustBadges /> */}
      <About/>
      <Services />
      <Projects />
      <WhyChooseUs />
      <Process />
      {/* <Testimonials /> */}
      <CTASection />
      {/* <LeadForm/>
      <FAQ /> */}
      {/* <Footer /> */}
    </div>
  );
}
