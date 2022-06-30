import React from "react";
import "./Products.css";
import { useStateValue } from "./SetupProvider";

function Product({ id, title, price, rating, image }) {
  const [{ basket }, dispatch] = useStateValue(0);

  const addToBasket = () => {
    //ADD item to basket
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="productInfo">
        <p>{title}</p>
        <p className="productPrice">
          <small>Rs.</small>
          <strong>{price}</strong>
        </p>
        <div className="productRating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="Product" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
