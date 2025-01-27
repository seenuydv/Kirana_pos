const express = require('express');
let router = express.Router();
let {Register, getProductById, addProduct, getAllProducts, updateProduct, deleteProduct, addCategories, getAllCategories, getAllSuppliers} = require ("../Controller/controller")


router.get('/',(req , res )=> {

    res.status(200).json({
        "data": "hello this is kirana Pos  file"
    })
})

// REGISTER ROUTES


router.post('/Register',Register);


// PRODUCT ROUTES


router.post('/products', addProduct); 
router.get('/products', getAllProducts);   
// router.get('/products/:id', getProductById);
router.put('/products/:id', updateProduct);  
router.delete('/products/:id', deleteProduct);


// CATEGORIES ROUTES


router.post('/categories',addCategories);
router.get('/categories',getAllCategories);


// CUSTOMERS ROUTES


// router.post('/customers', createRecord);
// router.get('/customers', getAllRecords);
// router.get('/customers/:id', getRecordById);
// router.put('/customers/:id', updateRecord);
// router.delete('/customers/:id', deleteRecord);


// SUPPLIERS ROUTES


router.get('/suppliers', getAllSuppliers)
// router.post('/suppliers', createRecord);
// router.get('/suppliers/:id', getRecordById);
// router.put('/suppliers/:id', updateRecord);
// router.delete('/suppliers/:id', deleteRecord);


// SALEITEM ROUTES


// router.post('/saleitems', createRecord);
// router.get('/saleitems', getAllRecords);
// router.get('/saleitems/:id', getRecordById);
// router.put('/saleitems/:id', updateRecord);
// router.delete('/saleitems/:id', deleteRecord);



// router.post('/login', (req ,res ) =>{
//    const mail ="1234@email.com" 
//    const word=12345

//     const { email , password }= req.body;

//     console.log(req.body,"<===reqs")

//     if (email === mail && password === word) {
//         return res.status(200).json({ message: "Login successful" });
//     } else {
//         return res.status(401).json({ error: "wrong" });
//     }
   
// })








module.exports=router