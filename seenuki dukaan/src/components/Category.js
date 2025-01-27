import React, { useState } from 'react';
import { Form, Button, Modal, Container } from 'react-bootstrap';
import { useFormik } from 'formik';
import axios from 'axios';
import './Category.css'; // If you want to add any custom styles
import { Description } from '@mui/icons-material';

function Category() {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalColor, setModalColor] = useState("success");

  const initialValues = {
    Name: "",
    Description: ""
  };

  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    onSubmit: async (values) => {
      await addCategory(values);
    }
  });
  const addCategory = async (values) => {
    try {
      const response = await axios.post('http://localhost:5001/categories', {
        Category_name: values.Name,
        Description: values.description
      });
      console.log(response.data);  // Log the response data from backend
      setModalMessage("Category added successfully!");
      setModalColor("success");
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
      }, 3000);
    } catch (error) {
      console.log('Error:', error);  // Log the entire error for better understanding
      if (error.response) {
        console.log('Response error:', error.response);
        if (error.response.status === 409) {
          setModalMessage("Category already exists.");
        } else {
          setModalMessage("Failed to add category.");
        }
      } else {
        setModalMessage("An unknown error occurred.");
      }
      setModalColor("danger");
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
      }, 3000);
    }
  };
  
  return (
    <Container className='py-2 px-3 my-3'>
      <h1 className='d-flex justify-content-center'>Add Category</h1>
      
      <Form onSubmit={handleSubmit}>
        {/* Category Name Field */}
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            name="Name"
            value={values.Name}
            onChange={handleChange}
            placeholder="Enter category name"
          />
          {touched.Name && errors.Name ? (
            <p className="form-error">{errors.Name}</p>
          ) : null}
        </Form.Group>

        {/* Description Field */}
        <Form.Group className="mb-3">
          <Form.Control
            as="textarea"
            rows={3}
            name="description"
            value={values.description}
            onChange={handleChange}
            placeholder="Enter category description"
          />
          {touched.description && errors.description ? (
            <p className="form-error">{errors.description}</p>
          ) : null}
        </Form.Group>

        {/* Submit Button */}
        <Button variant="outline-primary" type="submit">
          Submit
        </Button>
      </Form>

      {/* Modal for Success/Error Message */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton style={{ backgroundColor: modalColor === 'success' ? '#d4edda' : '#f8d7da' }}>
          <Modal.Title style={{ color: modalColor === 'success' ? '#155724' : '#721c24' }}>
            {modalColor === 'success' ? "Success" : "Error"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ color: modalColor === 'success' ? '#155724' : '#721c24' }}>
          {modalMessage}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Category;

