import axios from "axios";
import React, {useEffect} from "react";
import {useDispatch } from "react-redux";
import ProductComponent from "./ProductComponent";
import {setProducts} from '../redux/actions/productAction';

const ProductListing = () => {

  const dispatch = useDispatch();
  const fetchProducts = async() => {
    const resp = await axios
      .get('https://fakestoreapi.com/products')
      .catch(error => {
      console.log('Error occured',error)
      });
      dispatch(setProducts(resp.data))      
   console.log(resp.data);
}
useEffect(() => {
  fetchProducts();
}, []);
  return (
    <div>
      <ProductComponent />
    </div>
  )
}

export default ProductListing;