
import React, {useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import {addCart} from '../redux/action';
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Skeleton from 'react-loading-skeleton';
import Data from './data.json';

const Product = () => {

   const{id} = useParams();
   const[product, setProduct] = useState([]);
   const[loading, setLoading] = useState(false);

   const dispatch = useDispatch();
   const addProduct =  (product) => {
       dispatch(addCart(product));
   }

    useEffect(() => {
    const getProductById = () => {
      setLoading(true);
      const selectedProduct = Data.find((data) => data.id === parseInt(id));
      setProduct(selectedProduct);
      setLoading(false);
    };

    getProductById();
  }, [id]);

   const Loading = () => {
       return(
          <div>
                <div className="col-md-3">
                  <Skeleton height={400}/>
              </div>
              <div className="col-md-3 " style={{lineHeight:2}}>
                  <Skeleton height={50} width ={300}/>
                  <Skeleton height={75} />
                  <Skeleton height={25} width={150}/>
                  <Skeleton height={50} />
                  <Skeleton height={150} />
                  <Skeleton height={50} width={100}/>
                  <Skeleton height={50} width={100} style={{marginLeft:6}}/>
              </div>
          </div>
       );
   }

   const ShowProduct = () => {
       return(
           <div className="row">
              <div className="col-md-6">
              <img src={`${process.env.PUBLIC_URL}/${product.img}`} alt={product.title} height="350px" width="280px"/>
              </div>
              <div className="col-md-4">
                  <h1 className="display-5" height="50px" width="50px">
                     {product.title}
                  </h1>
                  <p className="lead fw-bolder">
                      Rating {product.rating}
                      <i className="fa fa-star"></i>
                  </p>
                  <h3 className="display fw-bold my-4">
                      $ {product.price}
                  </h3>
                  <p className="lead">{product.description}</p>
                  <button onClick={()=> addProduct(product)} className="btn btn-outline-dark px-4 py-2">
                      Add to Cart
                  </button>
                  <NavLink to="/cart" className="btn btn-outline-dark ms-2 px-3 py-2"
                  >
                      Go to Cart
                  </NavLink>
                  
              </div>
           </div>
       )
   }

    return(
        <div>
           <div className="container py-5">
               <div className="row py-4">
                   {loading? <Loading/>:<ShowProduct/>}
               </div>
           </div>
        </div>
    );
} 
export default Product;

