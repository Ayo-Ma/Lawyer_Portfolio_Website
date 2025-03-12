import Nav from "./components/Nav";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import Experience from "./components/Experience";
import Services from "./components/Services";
import CaseStudies from "./components/CaseStudies";
import Testimonials from "./components/Testimonials";
import BlogList from "./components/BlogList";
import Faq from "./components/Faq";
import Footer from "./components/Contact";
/* import BlogDetail from "./components/BlogDetail";
import NotFound from "./components/NotFound"; */
/* import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; */
function App() {
  return (
    <>
      <Nav />
      <Hero />
      <AboutSection />
      <Experience />
      <Services />
      <CaseStudies />
      <Testimonials />
      <BlogList />
      <Faq />
      <Footer />
    </>
  );
}

export default App;
