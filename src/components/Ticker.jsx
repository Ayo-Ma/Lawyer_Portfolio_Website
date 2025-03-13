import { motion } from "framer-motion";
import '../css/ticker.css'

const Ticker = () => {
  const legalUpdates = [
    "Supreme Court rules on landmark privacy case – Learn more.",
    "New tax regulations take effect next month – Are you prepared?",
    "Successfully defended a high-profile corporate fraud case!",
    "Won a $5 million settlement for a personal injury client.",
    "AI in law: How automation is changing legal practice.",
    "Did you know? A well-drafted contract can save you from lawsuits!",
  ];

  return (
    <div className="ticker-container">
      <motion.div
        className="ticker"
        animate={{ x: ["100%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
      >
        {legalUpdates.map((update, index) => (
          <span key={index} className="ticker-item">
            {update} &nbsp; | &nbsp;
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Ticker;
