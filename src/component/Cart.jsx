//import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { delCart,addCart } from "../redux/action";


const Cart =()=> {

    const state = useSelector(state=>state.handleCart)

    const dispatch = useDispatch();
    const handlePlus = (product)=>{
       dispatch(addCart(product))
    }

    const handleMinus = (product)=>{
        dispatch(delCart(product))
     }

    const handleClose = (product) => {
      dispatch(delCart(product))
    }

     return(
        <>
            {state.map(product=>(
                <div>
                    <div className="card-containers">
                    <div className="row">
                        <button onClick={()=>handleClose(product)} className="btn-close float-end" aria-label="Close"></button>
                    <div className="col-md-4 h-100">
                        <img src={product.image} alt={product.title} height="200px" 
                        width="180px"/>
                    </div>
                    <div className="col-md-4">
                        <h3>{product.title}</h3>
                        <p className="lead fw-bold">
                            {product.qty} X ${product.price} = $
                            {product.qty * product.price}
                        </p>
                        <button className="btn btn-outline-dark me-4" 
                        onClick={() => handleMinus(product)}>
                            <i className="fa fa-minus"></i>
                        </button>
                        <button className="btn btn-outline-dark" 
                        onClick={() => handlePlus(product)}>
                            <i className="fa fa-plus"></i>
                        </button>
                    </div>
                </div>
                    </div>
            </div>
            ))}
        </>
     )
}

export default Cart;