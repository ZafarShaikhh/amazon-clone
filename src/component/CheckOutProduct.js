import React from "react";
import "./ChekoutProduct.css";
import { useStateValue } from "./SetupProvider";

function CheckOutProduct({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProducts">
      <img className="checkoutProductImage" src={image} alt="" />

      <div className="checkoutProductInfo">
        <p className="checkoutProductTitle">{title}</p>

        <p className="checkoutProductPrice">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="checkoutProductRating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove From Basket</button>
      </div>
    </div>
  );
}

export default CheckOutProduct;
