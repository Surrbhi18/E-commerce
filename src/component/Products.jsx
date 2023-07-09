
import React, {useState, useEffect, useRef} from 'react';
import { NavLink } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import Data from './data.json';

const Products = () => {
    const[data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const componentMounted = useRef(true);

useEffect(() => {
    const getProducts = async () => {
        setLoading(true);
        if(componentMounted.current){
            setData(Data);
            setLoading(false);

        }
        return () => {
            componentMounted.current = false;
        }
    }
  getProducts();
}, []);

  const Loading = () => {
      return (
          <div>
              <div className="col-md-3">
                  <Skeleton height={350}/>
              </div>
              <div className="col-md-3">
                  <Skeleton height={350}/>
              </div>
              <div className="col-md-3">
                  <Skeleton height={350}/>
              </div>
              <div className="col-md-3">
                  <Skeleton height={350}/>
              </div>
              <div className="col-md-3">
                  <Skeleton height={350}/>
              </div>
          </div> 
      );
  }

  const ShowProducts= () => {
      return(
          <div>
        <div className='cardContainer'>
        {data && data.map((product)=>{
        
        return(
             <div key={product.id}> 
                  <div className="col-md-8 mb-4">              
                      <div className="card h-100 text-centre p-4" key={product.id}>
                      <img src={product.img} className="card-img-top" 
                          alt={product.title} height="250px"/>
                      <div className="card-body">
                      <h5 className="card-title mb-0">{product.title.substring(0,12)}...</h5>
                      <p className="card-text lead fw-bold">
                          ${product.price}
                          </p>
                      <NavLink to={`/product/${product.id}`} className="btn btn-outline-dark">
                          Buy Now
                          </NavLink>
                      </div>
                      </div> 
                  </div>
             </div>
          );

         })}
        </div>

    </div>
      );
  }

    return(
     <div>
         <div className="container my-4 py-2">
             <div className="row justify-content-centre">
                 {loading ? <Loading/>:<ShowProducts/>}
             </div>
         </div>
     </div>
    );
}

export default Products;