import "../css/contact.css";
import { TextField } from "@mui/material";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="map-iframe-container">
        <iframe
          className="map-iframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.703122097148!2d3.3786141748046534!3d6.532814493441373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8cbb5a3d5b35%3A0xa0f3f4b9b1e949b1!2sYaba%2C%20Lagos!5e0!3m2!1sen!2sng!4v1712345678901"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <section className="contact">
        <form action="" className="contact-form">
          <p>Request for a Consultation</p>
          <TextField id="standard-basic" fullWidth  label="Name" variant="standard" />
          <TextField id="standard-basic" fullWidth label="E-mail" variant="standard" />
          <TextField id="standard-basic" fullWidth label="Phone" variant="standard" />
          <TextField id="standard-basic" fullWidth label="Message" variant="standard" />
        </form>
      </section>
    </footer>
  );
};

export default Footer;
