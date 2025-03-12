import "../css/experience.css";
import briefcaseIcon from "../LexElite Assets/icons/expereince icons/Briefcase.svg";
import buildingIcon from "../LexElite Assets/icons/expereince icons/building.svg";
import { FaArrowDown } from "react-icons/fa";
const Experience = () => {
  return (
    <section className="experience">
      <h2>Experience</h2>
      <div className="experience-card-container">
        <div className="experience-card">
          <span className="experience-card-col1">
            <img src={buildingIcon} alt="" />
          </span>
          <div className="experience-card-col2">
            <h3>Junior Associate|DEF & Partners</h3>
            <p className="experience-date">2015 - 2017</p>
            <p className="experience-body">
              Assisting in litigation, case research, and client legal
              documentation.
            </p>
          </div>
        </div>
        <div className="experience-card">
          <span className="experience-card-col1">
            {" "}
            <img src={briefcaseIcon} alt="" />
          </span>
          <div className="experience-card-col2">
            <h3>Legal Consultant|ABC Legal Solutions</h3>
            <p className="experience-date">2017 - 2020</p>
            <p className="experience-body">
              Providing strategic legal counsel for business incorporations and
              regulatory matters.
            </p>
          </div>
        </div>
        <div className="experience-card">
          <span className="experience-card-col1">
            {" "}
            <img src={briefcaseIcon} alt="" />
          </span>
          <div className="experience-card-col2">
            <h3>Senior Associate | XYZ Law Firm</h3>
            <p className="experience-date">2020 - Present </p>
            <p className="experience-body">
              Leading high-profile corporate cases, contract negotiations, and
              legal compliance advisory.
            </p>
          </div>
        </div>
      </div>
      <div className="cta">
        <h3>Need Legal Advice?</h3>
        <p>Let's discuss your case</p>
        <a href="#" className="btn btn-primary">
          Contact Me <FaArrowDown />
        </a>
      </div>
    </section>
  );
};

export default Experience;
