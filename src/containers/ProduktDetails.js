import {useEffect} from 'react';
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { selectedProduct, removeSelectedProduct} from "../redux/actions/productAction";

const ProductDetails = () => {

  const product = useSelector(state => state.product);
  const {productId} = useParams();
  console.log(productId);
  console.log(product);
  const dispatch = useDispatch();

  const fetchProductDetails = async() => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch(err => console.log('Error', err));
      console.log(response.data);
    dispatch(selectedProduct(response.data));
  }
  
  useEffect(() => {
    if(productId && productId !==''){
      fetchProductDetails();
    } 
    return () => {
      dispatch(removeSelectedProduct())
    }
  }, [productId]);

  return(
    <div>
      {Object.keys(product).length === 0 ? 
      (
      <div>...Loading</div>) : (
      <div className='clothes'>{'Title: '}{product.title}<br/>
          <img className='images' src={product.image} alt={product.title} /><br/>
          {'Category: '}{product.category} <br/>
          {'Preis: '}${product.price}<br/><br/>
          {'Description: '}${product.description}<br/><br/>
      </div>
      )
      }
    </div>
    
  );
}

export default ProductDetails;