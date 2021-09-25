
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const ProductComponent = () => {

  const products = useSelector(state => state.allProducts.products);
   return (
    <div className='container' >
            {products.map((p) => (
              <Link to={`/product/${p.id}`} >
                <div  key={p.id} className='clothes'>{'Title: '}{p.title}<br/>
                  <img className='images' src={p.image} alt={p.title} /><br/>
                  {'Category: '}{p.category} <br/>
                  {'Preis: '}${p.price}<br/><br/>
                </div>
              </Link>
            ))}
        </div>
      )
}

export default ProductComponent ;