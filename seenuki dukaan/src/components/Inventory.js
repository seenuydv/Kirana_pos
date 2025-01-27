import React, { useEffect, useState } from "react";

const Inventory = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5001/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const result = await response.json();
        setProducts(Array.isArray(result) ? result : result.data || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Inventory</h1>
      <div className="overflow-x-auto">
        <table className="table-auto border-collapse w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">Product Name</th>
              <th className="border px-4 py-2">Barcode</th>
              <th className="border px-4 py-2">Category</th>
              <th className="border px-4 py-2">Weight</th>
              <th className="border px-4 py-2">Unit</th>
              <th className="border px-4 py-2">Quantity</th>
              <th className="border px-4 py-2">MRP</th>
              <th className="border px-4 py-2">Selling Price</th>
              <th className="border px-4 py-2">Supplier</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(products) && products.length > 0 ? (
              products.map((product) => (
                <tr key={product.ProductId} className="hover:bg-gray-100">
                  <td className="border px-4 py-2">{product.ProductName}</td>
                  <td className="border px-4 py-2">{product.Barcode || "-"}</td>
                  <td className="border px-4 py-2">{product.CategoryName || "-"}</td>
                  <td className="border px-4 py-2">{product.Weight || "-"}</td>
                  <td className="border px-4 py-2">{product.Unit || "-"}</td>
                  <td className="border px-4 py-2">{product.Quantity}</td>
                  <td className="border px-4 py-2">{product.MRP}</td>
                  <td className="border px-4 py-2">{product.SellingPrice}</td>
                  <td className="border px-4 py-2">{product.SupplierName || "-"}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9" className="border px-4 py-2 text-center">
                  No products found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Inventory;
