import Nav from "./components/Nav";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import Experience from "./components/Experience";
import Services from "./components/Services";
import CaseStudies from "./components/CaseStudies";
import Testimonials from "./components/Testimonials";
import BlogList from "./components/BlogList";
import Faq from "./components/Faq";
import { motion } from "framer-motion";
import Footer from "./components/Contact";
import Ticker from "./components/Ticker";
/* import BlogDetail from "./components/BlogDetail";
import NotFound from "./components/NotFound"; */
/* import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; */
function App() {
  const pageVariants = {
    initial: { opacity: 0, scale: 0.95 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.5 } },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const AnimatedSection = ({ children }) => (
    <motion.div
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <Ticker />
      <Nav />
      <AnimatedSection>
        <Hero />
      </AnimatedSection>
      <AnimatedSection>
        <AboutSection />
      </AnimatedSection>
      <AnimatedSection>
        <Experience />
      </AnimatedSection>
      <AnimatedSection>
        <Services />
      </AnimatedSection>
      <AnimatedSection>
        <CaseStudies />
      </AnimatedSection>
      <AnimatedSection>
        <Testimonials />
      </AnimatedSection>
      <AnimatedSection>
        <BlogList />
      </AnimatedSection>
      <AnimatedSection>
        <Faq />
      </AnimatedSection>
      <Footer />
    </motion.div>
  );
}

export default App;
