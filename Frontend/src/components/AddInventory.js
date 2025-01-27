import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useFormik } from 'formik';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import axios from 'axios';
import * as Yup from 'yup';
import './AddInventory.css';

// Validation schema
const AddInventorySchema = Yup.object().shape({
  product_name: Yup.string().required('Product Name is required'),
  barcode: Yup.string().required('Barcode is required'),
  category: Yup.string().required('Category is required'),
  weight: Yup.number().typeError('Weight must be a number').required('Weight is required'),
  unit_id: Yup.string().required('Unit is required'),
  quantity: Yup.number().typeError('Quantity must be a number').required('Quantity is required'),
  mrp: Yup.number().typeError('MRP must be a number').required('MRP is required'),
  selling_price: Yup.number().typeError('Selling Price must be a number').required('Selling Price is required'),
  supplier_name: Yup.string().required('Supplier Name is required'),
});

const initialValues = {
  product_name: '',
  barcode: '',
  category: '',
  weight: '',
  unit_id: '',
  quantity: '',
  mrp: '',
  selling_price: '',
  supplier_name: '',
};

const AddInventory = () => {
  const [categories, setCategories] = useState([]);
  const [suppliers, setSuppliers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [modalVariant, setModalVariant] = useState('success');

  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:5001/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    const fetchSuppliers = async () => {
      try {
        const response = await axios.get('http://localhost:5001/Suppliers');
        setSuppliers(response.data);
      } catch (error) {
        console.error('Error fetching suppliers:', error);
      }
    };

    fetchCategories();
    fetchSuppliers();
  }, []);

  const formik = useFormik({
    initialValues,
    validationSchema: AddInventorySchema,
    onSubmit: async (values, actions) => {
      try {
        const dataToPost = {
          ProductName: values.product_name,
          Barcode: values.barcode,
          Category_name: values.category,
          Weight: values.weight,
          Unit: values.unit_id,
          Quantity: values.quantity,
          MRP: values.mrp,
          SellingPrice: values.selling_price,
          SupplierName: values.supplier_name,
        };
        const response = await axios.post('http://localhost:5001/products', dataToPost);
        
        console.log('Product added successfully:', response.data);
        showModalMessage('Product added successfully!', 'success');
        actions.resetForm();
      } catch (error) {
        console.error('Error adding the product:', error);
        showModalMessage('There was an error adding the product!', 'error');
      }
    },
  });

  const showModalMessage = (message, variant) => {
    setModalMessage(message);
    setModalVariant(variant);
    setShowModal(true);
    setTimeout(() => setShowModal(false), 3000);
  };

  return (
    <>
      <Container className="py-3 px-3 my-3">
        <h2 className="text-center">Add Your Product</h2>
        <Form onSubmit={formik.handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                name="product_name"
                value={formik.values.product_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter Product Name"
              />
              {formik.touched.product_name && formik.errors.product_name && (
                <p className="form-error">{formik.errors.product_name}</p>
              )}
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Barcode</Form.Label>
              <Form.Control
                type="text"
                name="barcode"
                value={formik.values.barcode}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter Barcode"
              />
              {formik.touched.barcode && formik.errors.barcode && (
                <p className="form-error">{formik.errors.barcode}</p>
              )}
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Category</Form.Label>
              <Form.Select
                name="category"
                value={formik.values.category}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="">Select Category</option>
                {categories.map((category) => (
                  <option key={category.CategoryId} value={category.Category_name}>
                    {category.Category_name}
                  </option>
                ))}
              </Form.Select>
              {formik.touched.category && formik.errors.category && (
                <p className="form-error">{formik.errors.category}</p>
              )}
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Supplier</Form.Label>
              <Form.Select
                name="supplier_name"
                value={formik.values.supplier_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="">Select Supplier</option>
                {suppliers.map((supplier) => (
                  <option key={supplier.SupplierId} value={supplier.SupplierName}>
                    {supplier.SupplierName}
                  </option>
                ))}
              </Form.Select>
              {formik.touched.supplier_name && formik.errors.supplier_name && (
                <p className="form-error">{formik.errors.supplier_name}</p>
              )}
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Weight</Form.Label>
              <Form.Control
                type="number"
                name="weight"
                value={formik.values.weight}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter Weight"
              />
              {formik.touched.weight && formik.errors.weight && (
                <p className="form-error">{formik.errors.weight}</p>
              )}
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Unit</Form.Label>
              <Form.Select
                name="unit_id"
                value={formik.values.unit_id}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="">Select Unit</option>
                <option value="gram">Gram</option>
                <option value="kg">Kg</option>
                <option value="litre">Litre</option>
                <option value="pcs">Pcs</option>
              </Form.Select>
              {formik.touched.unit_id && formik.errors.unit_id && (
                <p className="form-error">{formik.errors.unit_id}</p>
              )}
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="number"
                name="quantity"
                value={formik.values.quantity}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter Quantity"
              />
              {formik.touched.quantity && formik.errors.quantity && (
                <p className="form-error">{formik.errors.quantity}</p>
              )}
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>MRP</Form.Label>
              <Form.Control
                type="number"
                name="mrp"
                value={formik.values.mrp}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter MRP"
              />
              {formik.touched.mrp && formik.errors.mrp && (
                <p className="form-error">{formik.errors.mrp}</p>
              )}
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Selling Price</Form.Label>
              <Form.Control
                type="number"
                name="selling_price"
                value={formik.values.selling_price}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter Selling Price"
              />
              {formik.touched.selling_price && formik.errors.selling_price && (
                <p className="form-error">{formik.errors.selling_price}</p>
              )}
            </Form.Group>
          </Row>

          <Row className="mb-3 d-flex justify-content-center">
            <Col xs="auto">
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{modalVariant === 'success' ? 'Success' : 'Error'}</Modal.Title>
        </Modal.Header>
        <Modal.Body className={modalVariant === 'success' ? 'text-success' : 'text-danger'}>
          {modalMessage}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddInventory;
