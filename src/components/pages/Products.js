import React from "react";
import UploadForm from "../UploadForm";
import ImageGrid from "../ImageGrid";

const Products = () => {
  return (
    <div className="products">
      <h1 className="product-heading">PRODUCTS</h1>
      <UploadForm />
      <ImageGrid />
    </div>
  );
};

export default Products;
