import "../css/contact.css";
import { TextField } from "@mui/material";
import { FaArrowRight } from "react-icons/fa";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useState } from "react";

const inputStyles = {
  "& label": { color: "#fff" },
  "& label.Mui-focused": { color: "#b19d60" },
  "& .MuiInput-root": {
    "&:before": { borderBottom: "1px solid #fff" },
    "&:hover:before": { borderBottom: "1px solid #b19d60" },
    "&:after": { borderBottom: "1px solid #b19d60" },
  },
  input: { color: "#fff" },
};
const Footer = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    setMessage("");

    try {
      const response = await axios.post(
        "https://lawyer-portfolio-3j8n.onrender.com/api/contact-requests/ ",
        data
      );
      setMessage("Form submitted successfully!");
      reset();
    } catch (error) {
      setMessage("Error submitting form. Please try again.", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
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
        <div className="contact-hint">
          <h2>Contact Us</h2>
          <a
            className="google-map-cta"
            href="https://www.google.com/maps?q=Yaba,+Lagos"
            target="_blank"
          >
            Check Google map <FaArrowRight />{" "}
          </a>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
          <div className="form-inputs">
            <p>Request for a Consultation</p>

            <Controller
              name="name"
              control={control}
              defaultValue=""
              rules={{ required: "Name is required" }}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Name"
                  variant="standard"
                  error={!!errors.name}
                  helperText={errors.name?.message}
                  sx={{
                    "& label": { color: "#fff" },
                    "& label.Mui-focused": { color: "#b19d60" },
                    "& .MuiInput-root": {
                      "&:before": { borderBottom: "1px solid #fff" },
                      "&:hover:before": { borderBottom: "1px solid #b19d60" },
                      "&:after": { borderBottom: "1px solid #b19d60" },
                    },
                    input: { color: "#fff" },
                  }}
                />
              )}
            />
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email address",
                },
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="E-mail"
                  variant="standard"
                  sx={inputStyles}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />
              )}
            />
            <Controller
              name="phone"
              control={control}
              defaultValue=""
              rules={{
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10,15}$/,
                  message: "Invalid phone number",
                },
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Phone"
                  variant="standard"
                  sx={inputStyles}
                  error={!!errors.phone}
                  helperText={errors.phone?.message}
                />
              )}
            />
            <Controller
              name="message"
              control={control}
              defaultValue=""
              rules={{ required: "Message is required" }}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Message"
                  multiline
                  variant="standard"
                  sx={{
                    "& label": { color: "#fff" },
                    "& label.Mui-focused": { color: "#b19d60" },
                    "& .MuiInput-root": {
                      "&:before": { borderBottom: "1px solid #fff" },
                      "&:hover:before": { borderBottom: "1px solid #b19d60" },
                      "&:after": { borderBottom: "1px solid #b19d60" },
                    },
                    textarea: { color: "#fff" },
                  }}
                  error={!!errors.message}
                  helperText={errors.message?.message}
                />
              )}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary form-btn"
            disabled={loading}
          >
            {loading ? "Submitting..." : `Send Message`}
            {message && (
              <Typography
                sx={{
                  mt: 2,
                  color: message.includes("Error") ? "red" : "green",
                }}
              >
                {message}
              </Typography>
            )}
          </button>
        </form>
      </section>
      <section className="footer">
        <div className="contact-info">
          <div className="contacts-info-text-1">
            <h2>Our Address</h2>
            <p>Opposite TejuOsho market,</p>
            <p>Yaba,Lagos</p>
            <p></p>
          </div>
          <div className="contacts-info-text-2">
            <h2>Contacts</h2>
            <p>hello@Lexelite.com,</p>
            <p>+234 7033 5665 20</p>
          </div>

          <div className="socials">
            <a href="" className="social"></a>
            <a href="" className="social"></a>
            <a href="" className="social"></a>
            <a href="" className="social"></a>
          </div>
        </div>
        <p>All right reserved</p>
      </section>
    </section>
  );
};

export default Footer;
