
import './productDesp.css'
import React from "react";
import { useParams } from "react-router-dom";

const ProductDescription = ({ product , addToCart }) => {
  const { id } = useParams();

  const selectedProduct = product.find((item) => item.id === parseInt(id));

  if (!selectedProduct) {
    return <div>Product not found</div>;
  }
  const handleAddToCart = (selectedProduct) => {
    addToCart(selectedProduct);
    selectedProduct.disabled = true;
  };

  return (
    <div className='main-box'>
      <h2 className='prod_h2'>{selectedProduct.title}</h2>
      <div className='box1'>
      <img className='prod_img' src={selectedProduct.image} alt={selectedProduct.title} />
      <div className='box2'>
      <p className='prod_p'>{selectedProduct.description}</p>
      <p className='prod_color'>Color : {selectedProduct.color}</p>
      <p className='prod_price'>Price : {selectedProduct.price}</p>
      <button className='prod_btn'  onClick={() => handleAddToCart(selectedProduct)} disabled={selectedProduct.disabled}>
      {selectedProduct.disabled ? 'Added to Cart' : 'Add to Cart'}
      </button>
      </div>
      </div>
    </div>
  );
};

export default ProductDescription;
