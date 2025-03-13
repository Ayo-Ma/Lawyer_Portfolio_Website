import "../css/accordion.css";
import '../css/faq.css';
import * as Accordion from "@radix-ui/react-accordion";
import CustomAccordion from "./MyAccordion";
import { useEffect, useState } from "react";
import image from '../LexElite Assets/images/scale of justice.webp'
const Faq = () => {
  const [faqQuestions, setfaqQuestions] = useState([]);
  useEffect(() => {
    const fetchfaqQuestions = async () => {
      const response = await fetch("https://lawyer-portfolio-3j8n.onrender.com/api/FAQ/");
      const faqData = await response.json();
      console.log(faqData);
      setfaqQuestions(faqData);
    };

    fetchfaqQuestions();
  }, []);
  return (
    <section className="faq">
      <div className="faq-heading">
        <h2>Frequently Asked Questions</h2>
        <p>
          Find answers to common legal inquiries. If you need more details, feel
          free to contact us.
        </p>
      </div>
      <div className="faq-container">
           <Accordion.Root type="single" collapsible className="faq-list">
        {faqQuestions.map((item, index) => (
          <CustomAccordion key={index} value={`item-${index}`} question={item.question} answer={item.answer} />
        ))}
      </Accordion.Root>
      <div className="image">
        <img loading="lazy" src={image} alt="" />
      </div>
      </div>
   
    </section>
  );
};

export default Faq;
