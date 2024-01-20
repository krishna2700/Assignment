import React, { useState } from "react";
import styles from "./FormComponent.module.css";

const FormComponent = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    weekday: false,
    gender: "male",
    dob: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      name: "",
      email: "",
      contact: "",
      weekday: false,
      gender: "male",
      dob: "",
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Contact:
        <input
          type="number"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Weekday:
        <input
          type="checkbox"
          name="weekday"
          checked={formData.weekday}
          onChange={handleCheckboxChange}
        />
      </label>
      <label>
        Gender:
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </label>
      <label>
        Date of Birth:
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
