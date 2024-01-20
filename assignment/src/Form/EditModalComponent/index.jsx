import React, { useState, useEffect } from "react";
import styles from "./EditModalComponent.module.css";

const EditModalComponent = ({ rowData, onSave, onClose }) => {
  const [editedData, setEditedData] = useState(rowData);

  useEffect(() => {
    setEditedData(rowData);
  }, [rowData]);

  const handleChange = (e) => {
    setEditedData({ ...editedData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    onSave(editedData);
    onClose();
  };

  return (
    <div className={styles.modal}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={editedData.name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={editedData.email}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Contact:
        <input
          type="number"
          name="contact"
          value={editedData.contact}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Weekday:
        <input
          type="checkbox"
          name="weekday"
          checked={editedData.weekday}
          onChange={() =>
            setEditedData({ ...editedData, weekday: !editedData.weekday })
          }
        />
      </label>
      <label>
        Gender:
        <select
          name="gender"
          value={editedData.gender}
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
          value={editedData.dob}
          onChange={handleChange}
          required
        />
      </label>
      <div className={styles.btnContainer}>
        <button className={styles.saveBtn} onClick={handleSave}>
          Save
        </button>
        <button className={styles.cancelBtn} onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditModalComponent;
