import { Search, ShoppingBasket } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import { auth } from "./firebase";
import "./Header.css";
import { useStateValue } from "./SetupProvider";

function Header() {
  const [{ basket, user }] = useStateValue();
  console.log(basket);

  const login = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://pngshare.com/wp-content/uploads/2021/06/Amazon-Logo-Black-Background-11.png"
          alt="amazon_logo"
        />
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <Search className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && "/login"} className="header__link">
          <div onClick={login} className="headerOption">
            <span className="headerOptionL1">Hello {user?.email}</span>
            <span className="headerOptionL2">
              {user ? "Sign Out" : "Sign in"}
            </span>
          </div>
        </Link>

        <Link to="/" className="header__link">
          <div className="headerOption">
            <span className="headerOptionL1">Return</span>
            <span className="headerOptionL2">& Order</span>
          </div>
        </Link>

        <Link to="/" className="header__link">
          <div className="headerOption">
            <span className="headerOptionL1">Your</span>
            <span className="headerOptionL2">Prime</span>
          </div>
        </Link>

        <Link to="/checkout" className="header__link">
          <div className="headerOption_basket">
            <ShoppingBasket />
            <span className="headerOption2 headerBasketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
