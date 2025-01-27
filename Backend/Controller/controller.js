let mysql = require("../Config/Database")


// REGISTER API


function Register(req, res) {
    const { Name, PhoneNumber, Email, Password, RepeatPassword } = req.body;

    if (!Name || !PhoneNumber || !Email || !Password || !RepeatPassword ) {
        return res.status(400).json({ msg: "All fields are required" });
        console.log(error)
    }

    
    const Register = "INSERT INTO register (name, phoneNumber, email, password, repeatPassword) VALUES (?, ?, ?, ?, ?)";

    mysql.query(Register, [Name, PhoneNumber, Email, Password, RepeatPassword], (err, result) => {
        if (err) {
            return res.status(400).json({ msg: "Problem with mysql", error: err });
        }

        return res.status(201).json({
            msg: "User registered successfully",
            userId: result.insertId, 
        });
    });
}


// PRODUCTS API


function getProductById (req, res) {
    const { id } = req.params; 
    if (!id) {
        return res.status(400).json({ msg: "Product  ID is required" });
    }
    const getProductById = "SELECT * FROM products WHERE ProductId = ?";

    mysql.query(getProductById, [id], (err, data) => {
        if (err) {
            return res.status(400).json({ msg: "Problem with mysql", error: err });
        }

        if (data.length === 0) {
            return res.status(404).json({ msg: "Product not found" });
        }       
        return res.status(200).json({
            msg: "Product details fetched successfully",
            data: data[0], 
        });
    });
}

function addProduct(req, res) {
    console.log("product data,<===**");
    const {
        ProductName,
        Barcode,
        Category_name,
        Weight,
        Unit,
        Quantity,
        MRP,
        SellingPrice,
        SupplierName
    } = req.body;

    // Validate required fields
    if (!ProductName || !Barcode || !Category_name || !Weight || !Unit || !Quantity || !MRP || !SellingPrice || !SupplierName) {
        return res.status(400).json({ msg: "All fields are required" });
    }

    // Query to fetch CategoryId
    const categoryQuery = `SELECT CategoryId FROM categories WHERE Category_name = ?`;
    mysql.query(categoryQuery, [Category_name], (err, categoryResult) => {
        if (err) {
            console.error('Error fetching category:', err);
            return res.status(500).json({ msg: "Error fetching category", error: err });
        }

        if (categoryResult.length === 0) {
            return res.status(404).json({ msg: "Category not found" });
        }

        const CategoryId = categoryResult[0].CategoryId;

        // Query to fetch SupplierId
        const suppliersQuery = `SELECT SupplierId FROM Suppliers WHERE SupplierName = ?`;
        mysql.query(suppliersQuery, [SupplierName], (err, suppliersResult) => {
            if (err) {
                console.error('Error fetching supplier:', err);
                return res.status(500).json({ msg: "Error fetching supplier", error: err });
            }

            if (suppliersResult.length === 0) {
                return res.status(404).json({ msg: "Supplier not found" });
            }

            const SupplierId = suppliersResult[0].SupplierId;

            // Query to insert product
            const productQuery = `
                INSERT INTO products (ProductName, Barcode, CategoryId, Weight, Unit, Quantity, MRP, SellingPrice, SupplierId)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
            `;
            mysql.query(productQuery, [ProductName, Barcode, CategoryId, Weight, Unit, Quantity, MRP, SellingPrice, SupplierId], (err, productResult) => {
                if (err) {
                    console.error('Error inserting product:', err);
                    return res.status(500).json({ msg: "Error inserting product", error: err });
                }

                return res.status(201).json({
                    msg: "Product added successfully",
                    productId: productResult.insertId,
                });
            });
        });
    });
}



function getAllProducts(req, res) {
    const getAllProductsQuery = `
        SELECT 
            p.ProductId,
            p.ProductName,
            p.Barcode,
            c.Category_name AS CategoryName,
            p.Weight,
            p.Unit,
            p.Quantity,
            p.MRP,
            p.SellingPrice,
            s.SupplierName
        FROM products p
        LEFT JOIN categories c ON p.CategoryId = c.CategoryId
        LEFT JOIN suppliers s ON p.SupplierId = s.SupplierId
    `;

    mysql.query(getAllProductsQuery, (err, data) => {
        if (err) {
            return res.status(400).json({ msg: "Problem with MySQL", error: err });
        }

        if (data.length === 0) {
            return res.status(404).json({ msg: "No products found" });
        }

        return res.status(200).json({
            msg: "Product details fetched successfully",
            data: data,
        });
    });
}



const updateProduct = (id, data, res) => {
    const updateProduct = `UPDATE products SET ? WHERE ProductId = ?`;
    mysql.query(updateProduct, [data, id], (err, result) => {
        if (err) {
            res.status(500).send({ msg: "Problem with mysql", error: err });
        } else {
            if (result.affectedRows === 0) {
                return res.status(404).send({ msg: "Product not found" });
            }
            res.status(200).send({ msg: "Product updated successfully", id, ...data });
        }
    });
};


const deleteProduct = (id, res) => {
    const deleteProduct = 'DELETE FROM products WHERE ProductId = ?';
    mysql.query(deleteProduct, [id], (err, result) => {
        if (err) {
            res.status(500).send({ msg: "Problem with mysql", error: err });
        } else {
            if (result.affectedRows === 0) {
                return res.status(404).send({ msg: "Product not found" });
            }
            res.status(200).send({ msg: "Product deleted successfully" });
        }
    });
};


// CATEGORIES API


const addCategories = (req, res) => {
    const { Category_name, Description } = req.body; 
    if (!Category_name || !Description) {
        return res.status(400).send({ msg: "Name and Description are required" });
    }
    const addCategories = `INSERT INTO categories (Category_name, Description) VALUES (?, ?);`
    mysql.query(addCategories, [Category_name, Description], (err, result) => {
        if (err) {
            res.status(500).send({ msg: "Problem with mysql", error: err });
        } else {
            res.status(200).send({ 
                msg: "Category added successfully", 
            });
        }
    });
};


const getAllCategories = (req, res) => {
    const getAllCategories = 'SELECT * FROM categories';
    mysql.query(getAllCategories, (err, results) => {
        if (err) {
            console.error('Error fetching categories:', err);
            res.status(500).send({ error: 'Failed to fetch categories' });
        } else {
            res.status(200).send(results);
        }
    });
};



// SUPPLIERS  API


const getAllSuppliers = (req , res ) => {
    const getAllSuppliers = 'SELECT * FROM Suppliers';
    mysql.query(getAllSuppliers , (err, results) => {
        if (err){
            console.error('Error fetching Suppliers:', err);
            res.status(500).send ({error: 'Failed to fetch Suppliers'});
        } else{
            res.status(200).send(results);
        }
    })
};
 



module.exports ={
    Register, getProductById, addProduct, getAllProducts, updateProduct, deleteProduct, addCategories, getAllCategories, getAllSuppliers
 }