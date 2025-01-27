
// ------------------ADD INVENTORY

// import React from 'react';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import { useFormik } from 'formik';
// import { AddInventorySchema } from '../schemas'; // Adjust the path as necessary
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import { Container } from 'react-bootstrap';
// import './AddInventory.css';
// import axios from 'axios';

// const initialValues = {
//     barcode: "",
//     product_name: "",
//     category_id: "",
//     weight: "",
//     quantity: "",
//     mrp: "",
//     cost_price: "",
//     selling_price: ""
// }

// function Demo() {
//     const { values, errors, touched, handleBlur, handleChange, handleSubmit, } = useFormik({
//         initialValues: initialValues,
//         validationSchema: AddInventorySchema,
//         onSubmit: (values, actions) => {
//             addProducts(values);  // Call the function with the form values
//             actions.resetForm();
//         }
//     });

//     const addProducts = (productData) => {
//         axios.post('http://localhost:9000/createproduct', productData)
//             .then(response => {
//                 console.log('Product added successfully:', response.data);
//                 // You can add more logic here to handle success, like showing a success message
//             })
//             .catch(error => {
//                 console.error('There was an error adding the product!', error);
//                 // Handle the error, show an error message, etc.
//             });
//     };

//     return (
//         <Container className='pb-3'>
//             <h1 className='d-flex justify-content-center'>Add Your Products</h1>
//             <Form onSubmit={handleSubmit}>
//                 <Row className="mb-3">

//                     <Form.Group as={Col} controlId="formGridBarcode">
//                         <Form.Label>Barcode</Form.Label>
//                         <Form.Control
//                             name='barcode'
//                             type="text"
//                             value={values.barcode}
//                             onChange={handleChange}
//                             onBlur={handleBlur}
//                             placeholder="Enter Barcode"
//                         />
//                         {touched.barcode && errors.barcode ? (
//                             <p className="form-error">{errors.barcode}</p>
//                         ) : null}
//                     </Form.Group>
//                 </Row>

//                 <Form.Group className="mb-3" controlId="formGridProductName">
//                     <Form.Label>Product Name</Form.Label>
//                     <Form.Control
//                         name='product_name'
//                         type="text"
//                         value={values.product_name}
//                         onChange={handleChange}
//                         onBlur={handleBlur}
//                         placeholder="Enter Product Name"
//                     />
//                     {touched.product_name && errors.product_name ? (
//                         <p className="form-error">{errors.product_name}</p>
//                     ) : null}
//                 </Form.Group>

//                 <Row className="mb-3">
//                     <Form.Group as={Col} >
//                         <Form.Label>Category</Form.Label>
//                         <Form.Select
//                             name="category_id"
//                             value={values.category_id}
//                             onChange={handleChange}
//                             onBlur={handleBlur}
//                         >
//                             <option value="">Select Category</option>
//                             <option value="1">Fruits</option>
//                             <option value="2">Vegetables</option>
//                             <option value="3">Dairy</option>
//                             <option value="4">Meat</option>
//                             <option value="5">Grains</option>
//                             <option value="6">Snacks</option>
//                         </Form.Select>
//                     </Form.Group>
//                     <Form.Group as={Col} controlId="formGridWeight">
//                         <Form.Label>Weight</Form.Label>
//                         <Form.Control
//                             name='weight'
//                             type="number"
//                             value={values.weight}
//                             onChange={handleChange}
//                             onBlur={handleBlur}
//                             placeholder="Enter Weight"
//                         />
//                         {touched.weight && errors.weight ? (
//                             <p className="form-error">{errors.weight}</p>
//                         ) : null}
//                     </Form.Group>
//                 </Row>

//                 <Row className="mb-3">
//                     <Form.Group as={Col} controlId="formGridQuantity">
//                         <Form.Label>Quantity</Form.Label>
//                         <Form.Control
//                             name='quantity'
//                             type="number"
//                             value={values.quantity}
//                             onChange={handleChange}
//                             onBlur={handleBlur}
//                             placeholder="Enter Quantity"
//                         />
//                         {touched.quantity && errors.quantity ? (
//                             <p className="form-error">{errors.quantity}</p>
//                         ) : null}
//                     </Form.Group>

//                     <Form.Group as={Col} controlId="formGridMRP">
//                         <Form.Label>MRP</Form.Label>
//                         <Form.Control
//                             name='mrp'
//                             type="number"
//                             value={values.mrp}
//                             onChange={handleChange}
//                             onBlur={handleBlur}
//                             placeholder="Enter MRP"
//                         />
//                         {touched.mrp && errors.mrp ? (
//                             <p className="form-error">{errors.mrp}</p>
//                         ) : null}
//                     </Form.Group>
//                 </Row>

//                 <Row className="mb-3">
//                     <Form.Group as={Col} controlId="formGridCostPrice">
//                         <Form.Label>Cost Price</Form.Label>
//                         <Form.Control
//                             name='cost_price'
//                             type="number"
//                             value={values.cost_price}
//                             onChange={handleChange}
//                             onBlur={handleBlur}
//                             placeholder="Enter Cost Price"
//                         />
//                         {touched.cost_price && errors.cost_price ? (
//                             <p className="form-error">{errors.cost_price}</p>
//                         ) : null}
//                     </Form.Group>

//                     <Form.Group as={Col} controlId="formGridSellingPrice">
//                         <Form.Label>Selling Price</Form.Label>
//                         <Form.Control
//                             name='selling_price'
//                             type="number"
//                             value={values.selling_price}
//                             onChange={handleChange}
//                             onBlur={handleBlur}
//                             placeholder="Enter Selling Price"
//                         />
//                         {touched.selling_price && errors.selling_price ? (
//                             <p className="form-error">{errors.selling_price}</p>
//                         ) : null}
//                     </Form.Group>
//                 </Row>

//                 <Row className="mb-3 d-flex justify-content-center">
//                     <Col xs="auto">
//                         <Button variant="outline-primary" type="submit">
//                             Submit
//                         </Button>
//                     </Col>
//                 </Row>
//             </Form>
//         </Container>
//     );
// }

// export default Demo;


