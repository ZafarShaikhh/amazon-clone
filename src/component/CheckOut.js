import React from "react";
import CheckOutProduct from "./CheckOutProduct";
import { useStateValue } from "./SetupProvider";
import "./Checkout.css";
import Subtotal from "./Subtotal";

function CheckOut() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkoutLeft">
        <img
          className="checkoutAd"
          src="https://gos3.ibcdn.com/top-1568020025.jpg"
          alt=""
        />
        {basket?.length === 0 ? (
          <div>
            <h2>Your Shopping Basket is Empty</h2>
            <p>
              Your Shopping Cart lives to serve. Give it purpose — fill it with
              groceries, clothing, household supplies, electronics, and more.
              Continue shopping on the Amazon.com homepage, learn about today's
              deals, or visit your Wish List.Your Shopping Cart lives to serve.
              Give it purpose — fill it with groceries, clothing, household
              supplies, electronics, and more. Continue shopping on the
              Amazon.com homepage, learn about today's deals, or visit your Wish
              List.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkoutTitle">Your Shopping Basket</h2>

            {basket?.map((item) => (
              <CheckOutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>

      {basket?.length > 0 && (
        <div className="checkoutRight">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default CheckOut;
