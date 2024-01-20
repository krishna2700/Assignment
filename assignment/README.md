React Form and Table Application Documentation

Overview

This document provides an explanation of the structure, components, and functionality of a React application that includes a dynamic form and a table. The application allows users to input data through a form, display the entered data in a table, and provides options to edit or delete the rows in the table.

Project Structure

The project is organized into multiple components, each serving a specific purpose. The primary components are:

1. FormComponent.js: Manages the form for user input.
2. TableComponent.js: Displays the entered data in a tabular format.
3. EditModalComponent.js: Provides a modal for editing existing data.

In addition, there are CSS modules for styling each component to create a more polished and professional appearance.

Component Details

FormComponent.js

This component handles the user input form. It includes input fields for the user to enter their name, email, contact number, select weekdays, choose gender, and input their date of birth. The form also includes validation and a submit button.

State

- `formData`: Manages the form data, including name, email, contact, weekday, gender, and date of birth.

Functions

- `handleChange`: Updates the form data when input values change.
- `handleCheckboxChange`: Updates the checkbox state for weekdays.
- `handleSubmit`: Handles form submission, triggers the `onSubmit` prop function, and resets the form.

TableComponent.js

This component displays the entered data in a table format. It dynamically renders rows based on the data provided.

Props

- `data`: An array of objects containing the user-entered data.
- `onEdit`: Callback function to handle the edit action.
- `onDelete`: Callback function to handle the delete action.

EditModalComponent.js

This component provides a modal for editing existing data. It pre-fills the form with the selected row values and updates the table on form submission.

Props

- `rowData`: An object containing the data of the row being edited.
- `onSave`: Callback function to handle saving the edited data.
- `onClose`: Callback function to handle closing the modal.

State

- `editedData`: Manages the form data for editing.

Functions

- `handleChange`: Updates the form data when input values change.
- `handleSave`: Saves the edited data, triggers the `onSave` prop function, and closes the modal.

Styling

The styling of each component is done using CSS modules. This helps in keeping the styles scoped to the specific components, ensuring a clean and maintainable codebase.

1. FormComponent.module.css: Styles for the form component, including input fields and the submit button.

2. TableComponent.module.css: Styles for the table component, including table layout and action buttons.

3. EditModalComponent.module.css: Styles for the edit modal component, including input fields and action buttons.

4. App.module.css: Styles for the overall application, including font styles and margins.

Application Flow

1. User enters data in the form and submits it.
2. Form data is added to the table, and the form is reset.
3. The table dynamically renders rows based on the entered data.
4. Each row in the table has "Edit" and "Delete" buttons.
5. Clicking the "Edit" button opens a modal with the selected row values.
6. In the modal, users can edit the data and save the changes.
7. Clicking the "Delete" button removes the selected row from the table.

Conclusion

This React application provides a simple yet dynamic and professional interface for users to input, display, and manage data. It follows best practices by using functional components, hooks, and CSS modules for styling, ensuring a modular and maintainable codebase.

---

This documentation provides a comprehensive overview of the React application, covering its structure, components, styling, and functionality. It serves as a reference for developers working on the project or those seeking to understand its implementation.
