import React from "react";
import styles from "./TableComponent.module.css";

const TableComponent = ({ data, onEdit, onDelete }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>S.No</th>
          <th>Name</th>
          <th>Email</th>
          <th>Contact</th>
          <th>Weekday</th>
          <th>Gender</th>
          <th>DOB</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{row.name}</td>
            <td>{row.email}</td>
            <td>{row.contact}</td>
            <td>{row.weekday ? "Yes" : "No"}</td>
            <td>{row.gender}</td>
            <td>{row.dob}</td>
            <td>
              <button className={styles.editBtn} onClick={() => onEdit(index)}>
                Edit
              </button>
              <button
                className={styles.deleteBtn}
                onClick={() => onDelete(index)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
