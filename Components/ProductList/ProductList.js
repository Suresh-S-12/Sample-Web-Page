import React, { useState } from 'react';
import './ProductList.css';
import Layout from '../Layout/Layout';
import { useNavigate } from 'react-router-dom';

function ProductList({ state, dispatch }) {
  const [product, setProduct] = useState('');
  const [brand, setBrand] = useState('');
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({ id: '', name: '', brand: '' });

  const handleAddProduct = () => {
    const payload = {
      id: new Date().getTime(),
      name: product,
      brand: brand,
    };
    dispatch({
      type: 'Add_product',
      payload: payload,
    });

    setBrand('');
    setProduct('');
  };

  const handleEditClick = (product) => {
    setSelectedProduct(product);
    setShowPopup(true);
  };

  const handleDeleteClick = (product) => {
    dispatch({
      type: 'Delete_product',
      payload: product,
    });
  };

  const handleSaveClick = () => {
    const editedProduct = {
      ...selectedProduct,
      name: document.getElementById('p_name').value,
      brand: document.getElementById('Bd_name').value,
    };
    dispatch({
      type: 'Update_product',
      payload: editedProduct,
    });

    setShowPopup(false);
  };

  return (
    <div className='product_container'>
      <Layout />
      <header className='products_page'>
        <h1>Here you are! Now you can add products🥳🥳</h1>
      </header>
      <div className='addProduct_container'>
        <label htmlFor='product_name' className='add_product'>
          Product Name:
        </label>
        <input type='text' id='product_name' value={product} onChange={(e) => setProduct(e.target.value)} />
        <br />
        <label htmlFor='Brand_name' className='add_product'>
          Brand Name :
        </label>
        <input type='text' id='Brand_name' value={brand} onChange={(e) => setBrand(e.target.value)} />
        <br />
        <div className='product_buttons'>
          <button className='add_products' onClick={handleAddProduct}>
            Add Product
          </button>
        </div>
        <button onClick={() => { dispatch({ type: 'logout' }); navigate('/Login'); }} className='logout_button'>
          Logout
        </button>
      </div>
      <div className='list_product'>
        <div>
          {state.productList.map((product, index) => (
            <div key={product.id} className='product_item'>
              <h2>Product-{product.name}: Brand-{product.brand}</h2>
              <button className='edit_button' onClick={() => handleEditClick(product)}>
                Edit
              </button>
              <button className='delete_button' onClick={() => handleDeleteClick(product)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>

      {showPopup ? (
        <div className='popups'>
          <div className='overlay' onClick={() => setShowPopup(!showPopup)}></div>
          <div className='popup'>
            <div>
              <label htmlFor='p_name'>Product</label>
              <input type='text' defaultValue={selectedProduct.name} id='p_name' />
              <br />
              <label htmlFor='Bd_name'>Brand</label>
              <input type='text' defaultValue={selectedProduct.brand} id='Bd_name' />

              <button onClick={handleSaveClick} className='save_item'>
                Save Product
              </button>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

export default ProductList;
