import React, { useState } from "react";
import styles from "./App.css";
import FormComponent from "./Form/FormComponent";
import TableComponent from "./Form/TableCompoent";
import EditModalComponent from "./Form/EditModalComponent";

const App = () => {
  const [formData, setFormData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editRowIndex, setEditRowIndex] = useState(null);

  const handleFormSubmit = (data) => {
    setFormData([...formData, data]);
  };

  const handleEdit = (index) => {
    setEditRowIndex(index);
    setShowModal(true);
  };

  const handleSaveEdit = (editedData) => {
    const updatedData = [...formData];
    updatedData[editRowIndex] = editedData;
    setFormData(updatedData);
  };

  const handleDelete = (index) => {
    const updatedData = formData.filter((_, i) => i !== index);
    setFormData(updatedData);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditRowIndex(null);
  };

  return (
    <div className={styles.container}>
      <h1>React Form and Table</h1>
      <FormComponent onSubmit={handleFormSubmit} />
      <TableComponent
        data={formData}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      {showModal && (
        <EditModalComponent
          rowData={formData[editRowIndex]}
          onSave={handleSaveEdit}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default App;
