// For ADD item to Cart
export const addCart = (product) => {
       
    return{
        type: "ADDITEM",
        payload: product
    }
}

// For DELETE item from Cart
export const delCart = (product) => {
       
    return{
        type: "DELITEM",
        payload: product
    }
}

