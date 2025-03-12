
import '../css/service-card.css'
const ServicesCard = (props) => {
  return (
    <div className="services-card">
        <div className="services-card-icon">
            <img loading="lazy" src={props.icon} alt="icon" />
        </div>
        <div className="services-card-text">
            <h3>{props.heading}</h3>
            <p>
           {props.bodyText}
            </p>
        </div>
    </div>
  )
}

export default ServicesCard