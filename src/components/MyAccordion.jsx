import * as Accordion from "@radix-ui/react-accordion";
import { FaMinus, FaPlus } from "react-icons/fa";
import "../css/accordion.css";

const MyAccordion = ({ question, answer, value }) => {
  return (
    <Accordion.Item className="accordion-item" value={value}>
      <Accordion.Header>
        <Accordion.Trigger className="accordion-trigger">
          <h2>{question}</h2>
          <span className="accordion-icon">
            <FaPlus className="icon-closed" />
            <FaMinus className="icon-open" />
          </span>
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content className="accordion-content">
        <p>{answer}</p>
      </Accordion.Content>
    </Accordion.Item>
  );
};

export default MyAccordion;
