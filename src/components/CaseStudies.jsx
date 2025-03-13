import { useEffect, useState } from "react";
import "../css/CaseStudies.css";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
/* import placeholder from "../LexElite Assets/images/me.webp" */

const CaseStudies = () => {
  const caseStudiesDataUrl = "https://lawyer-portfolio-3j8n.onrender.com/api/case-studies/";
  const [caseStudyData, setCaseStudyData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [categories, setCategories] = useState(["All"]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(caseStudiesDataUrl);
        const jsonData = await response.json();
        setCaseStudyData(jsonData);
        setFilteredData(jsonData.slice(0, 6));

        const uniqueCategories = [
          "All",
          ...new Set(jsonData.map((item) => item.service)),
        ];
        setCategories(uniqueCategories);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);

  const handleFilter = (service) => {
    setActiveCategory(service);
    setShowAll(false);

    if (service === "All") {
      setFilteredData(caseStudyData.slice(0, 6));
    } else {
      setFilteredData(
        caseStudyData.filter((item) => item.service === service)
      );
    }
  };

  return (
    <section className="case_study" id="case">
      <div className="filters_heading">
        <div className="case_study_text_and_supporting_text">
          <h5>Case Studies</h5>
          <h2>Proven Legal Success Stories</h2>
          <p>
            Real-world examples of how we have successfully represented our
            clients and provided expert legal solutions.
          </p>
        </div>

        <div className="filter-section">
          {categories.map((cat, index) => (
            <button
              key={index}
              className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
              onClick={() => handleFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="case_study_grid">
        {filteredData.length > 0 ? (
          filteredData.map((caseStudy) => (
            <div key={caseStudy.id} className="case_study_card">
              
              <div className="case_study_info">
                <div className="case_study_info_heading">
                  <h3>{caseStudy.title}</h3>
                  <span>{caseStudy.service}</span>
                </div>

                <p>{caseStudy.description}</p>
                <strong>{caseStudy.outcome}</strong>
              </div>
            </div>
          ))
        ) : (
          <span className="loading">No case studies available.</span>
        )}
      </div>

      {activeCategory === "All" && caseStudyData.length > 3 && (
        <div className="show-more-container">
          <button onClick={() => setShowAll(!showAll)}>
            {showAll ? <FaArrowUp /> : <FaArrowDown />}
          </button>
        </div>
      )}

      {showAll && activeCategory === "All" && (
        <div className="case_study_grid">
          {caseStudyData.slice(6).map((caseStudy) => (
            <div key={caseStudy.id} className="case_study_card">
              <div className="case_study_info">
                <h3>{caseStudy.title}</h3>
                <span>{caseStudy.service}</span>
                <p>{caseStudy.description}</p>
                <strong>{caseStudy.outcome}</strong>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default CaseStudies;
