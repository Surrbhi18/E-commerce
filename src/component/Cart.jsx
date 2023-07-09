import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { delCart, addCart } from "../redux/action";

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const handlePlus = (product) => {
    dispatch(addCart(product));
  };

  const handleMinus = (product) => {
    dispatch(delCart(product));
  };

  const handleClose = (product) => {
    dispatch(delCart(product));
  };

  // Calculate total amount
  const calculateTotal = () => {
    let total = 0;
    state.forEach((product) => {
      total += product.qty * product.price;
    });
    return total;
  };

  return (
    <>
      {state.map((product) => (
        <div className="crads" key={product.id}>
          <div className="card-containers">
            <div className="row">
              <button
                onClick={() => handleClose(product)}
                className="btn-close float-end"
                aria-label="Close"
              ></button>
              {product.qty > 0 && ( // Only render if quantity is greater than 0
                <>
                  <div className="col-md-4 h-100">
                    <img
                      src={`${process.env.PUBLIC_URL}/${product.img}`}
                      alt={product.title}
                      height="200px"
                      width="180px"
                    />
                  </div>
                  <div className="col-md-4">
                    <h3>{product.title}</h3>
                    <p className="lead fw-bold">
                      {product.qty} X ${product.price} = ${product.qty * product.price}
                    </p>
                    <button
                      className="btn btn-outline-dark me-4"
                      onClick={() => handleMinus(product)}
                    >
                      <i className="fa fa-minus"></i>
                    </button>
                    <button
                      className="btn btn-outline-dark"
                      onClick={() => handlePlus(product)}
                    >
                      <i className="fa fa-plus"></i>
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      ))}

      {/* Total section */}
      <hr className="half" />
     
      <div className="crads">
        <div className="card-containers">
          <div className="row">
            <div className="col-md-6 h-100 center">
              <h4>Total Amount: ${calculateTotal()}</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
