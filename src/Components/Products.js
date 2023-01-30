import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, STATUSES } from "../Store/productSlice";
import { add } from "../Store/cartSlice";


const Products = () => {
  const dispatch = useDispatch();

  const { data: products, status } = useSelector(state => state.product);
  // const [products, setProducts] = useState([]);

  useEffect(() => {
    dispatch(fetchProducts());
    // const fetchProducts = async () => {
    //   const res = await fetch(ProductsApi);
    //   const data = await res.json();
    //   console.log(data);
    //   setProducts(data);
    // };

    // fetchProducts();
  }, []);

  const handleAdd = product => {
    dispatch(add(product));
  };

  if (status === STATUSES.LOADING) {
    return <h2>Loading...</h2>;
  }

  if (status === STATUSES.ERROR) {
    return <h2>Something Wrong</h2>;
  }
  return (
    <div className="productsWrapper">
      {products.map(product => (
        <div className="card" key={product.id}>
          <img src={product.image} alt="" />
          <h5>{product.title}</h5>
          <h3>${product.price}</h3>
          <button className="btn" onClick={() => handleAdd(product)}>
            Add To Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
