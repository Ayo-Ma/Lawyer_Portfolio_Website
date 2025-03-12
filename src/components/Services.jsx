import { useEffect, useState } from "react";
import ServicesCard from "../components/ServicesCard";
import "../css/Services.css";

const Services = () => {
  const [serviceData, setServiceData] = useState([]);
  /* get api url here  */
  /* But for noe json will be used to be populated from url later */
  const serviceDataUrl = "/servicedata.json";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(serviceDataUrl);
        const jsonData = await data.json();
        setServiceData(jsonData);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="services">
      <div className="services-text-supporting-text">
        <h5>Services</h5>
        <h2>Our Legal Practices</h2>
        <p>Legal Solutions Tailored to Your Needs</p>
      </div>
      <div className="services-card-container">
        <div className="row">
          {serviceData.slice(0, 3).map((data) => (
            <ServicesCard
              key={data.id}
              heading={data.heading}
              bodyText={data.bodyText}
              icon={data.iconPath}
            />
          ))}
        </div>
        <div className="row">
          {serviceData.slice(3, 6).map((data) => (
            <ServicesCard
              key={data.id}
              heading={data.heading}
              bodyText={data.bodyText}
              icon={data.iconPath}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
