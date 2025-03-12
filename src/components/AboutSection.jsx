import React from "react";
import "../css/AboutSection.css";
import MyImage from "../LexElite Assets/images/me.jpg";
const AboutSection = () => {
  return (
    <section className="about">
      <div className="col1">
        <div className="image">
          <img src={MyImage} alt="" />
        </div>
      </div>
      <div className="col2">
        <div className="name">
          <p className="name-supporting">
            Experienced Corporate and Business Lawyer
          </p>
          <h2 className="name-text">Lawson Chisom</h2>
        </div>
        <div className="about-content">
          <div className="about-content-text-and-supporting-text">
             <h2 className="about-content-head">
            Experienced Legal Counsel You Can Trust
          </h2>
          <p className="about-content-text">
            <span className="itl-text">W</span>ith 10 years+ of legal experience, I am committed to providing
            strategic legal solutions, ensuring justice, and protecting my
            clients' rights with integrity and professionalism.
          </p>
          </div>
         
          <p className="goal">
            “Helping Businesses & Individuals Navigate Legal Challenges with
            Confidence.”
          </p>
          </div>
          <div className="educational-background">
            <div className="educational-background-row1">
              <h2>Education:</h2>
              <p> LL.B, Harvard Law School</p>
            </div>
            <div className="educational-background-row1">
              <h2>Bar Membership:</h2>
              <p> Licensed Attorney, Nigerian Bar Association</p>
            </div>
            <div className="educational-background-row1">
              <h2>Certification:</h2>
              <p> International Business Law</p>
            </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
