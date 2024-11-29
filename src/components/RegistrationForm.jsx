// components/RegistrationForm.js
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import styles from "./RegistrationForm.module.css";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    dob: "",
    email: "",
  });

  const [message, setMessage] = useState("");
  const recaptcha = useRef();
  const siteKey = import.meta.env.VITE_REACT_APP_SITE_KEY;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const captchaValue = recaptcha.current.getValue();
    if (!captchaValue) {
      alert("Please verify the reCAPTCHA!");
      return;
    }

    const registrationData = {
      ...formData,
      registrationDate: new Date().toLocaleString(),
    };

    const savedData = JSON.parse(localStorage.getItem("registrations")) || [];
    savedData.push(registrationData);
    localStorage.setItem("registrations", JSON.stringify(savedData));

    setMessage("Registration successful!");
    setFormData({
      name: "",
      surname: "",
      dob: "",
      email: "",
    });
  };

  return (
    <div>
      {message ? (
        <div className={styles.success}>
          <h2>Thank you for registering!</h2>
          <p>Your form has been successfully submitted.</p>
        </div>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.label}>
            Name:
            <input
              className={styles.input}
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label className={styles.label}>
            Surname:
            <input
              className={styles.input}
              type="text"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              required
            />
          </label>
          <label className={styles.label}>
            Date of Birth:
            <input
              className={styles.input}
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
            />
          </label>
          <label className={styles.label}>
            Email:
            <input
              className={styles.input}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <button className={styles.button} type="submit">
            Register
          </button>
          <ReCAPTCHA
            className={styles.recaptcha}
            ref={recaptcha}
            sitekey={siteKey}
          />
        </form>
      )}
    </div>
  );
};

export default RegistrationForm;
