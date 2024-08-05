import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../data/data1';
import Nav from "../comp/nav";

const OneProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await fetchProductById(id);
        setProduct(data);
        setMainImage(data.images[0]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  if (!product) return <p>No product found</p>;

  return (
    <div>
      <Nav />
      {product &&  <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={mainImage} alt={product.title} className="img-fluid" />
            <div className="d-flex flex-wrap gap-2 mt-2">
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Color ${index}`}
                  className="img-fluid"
                  style={{ width: 100, cursor: 'pointer' }}
                  onClick={() => setMainImage(image)}
                />
              ))}
            </div>
          </div>
          <div className="col-md-6">
            <h2 className='card-text'>{product.title}</h2>
            <p className='card-text'>{product.description}</p>
            <p className="fs-4 card-text">${product.price}</p>
            <p className="text-success">In stock</p>
            <div className="d-flex gap-2 mb-3">
              <span className="text-muted">Category</span>
              <span>{product.category.name}</span>
              <span className="text-muted">Brand</span>
              <span>{product.brand}</span>
            </div>
            <div className="d-flex gap-2 mb-3">
              <div className="input-group">
                <button 
                  className="btn btn-outline-secondary" 
                  onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                  disabled={quantity === 1}
                >
                  -
                </button>
                <input
                  type="number"
                  className="form-control text-center"
                  value={quantity}
                  readOnly
                />
                <button 
                  className="btn btn-outline-secondary" 
                  onClick={() => setQuantity(prev => prev + 1)}
                >
                  +
                </button>
              </div>
            </div>
            <button className="btn btn-primary w-100">Buy Now</button>
            <button className="btn btn-outline-secondary w-100">Add to Cart</button>
          </div>
        </div>
      </div>}
    </div>
  );
};

export default OneProduct;
