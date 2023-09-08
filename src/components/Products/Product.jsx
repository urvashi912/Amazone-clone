// eslint-disable-next-line no-unused-vars
import React, { useReducer } from "react";
import "./products.css";
import { useStateValue } from "../Datalayer/StateProvider";
import reducer, { initialState } from "../Datalayer/Reducer";

// eslint-disable-next-line react/prop-types
const Product = ({id, title, image, price, rating }) => {

  // const [{basket}, dispatch] = useStateValue();
  // console.log('This is the beasket>>>', basket)

  const [{basket}, dispatch] = useStateValue();
  console.log('This is the basket>>>', basket)

  const addToBasket = ()=>{
    //dispatch the item into data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item:{
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating

      }
    })

  }
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <smal>$</smal>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              // eslint-disable-next-line react/jsx-key
              <p>⭐️</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />

      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
};

export default Product;
