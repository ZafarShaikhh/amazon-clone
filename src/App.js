import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import CheckOut from "./component/CheckOut";
import { auth } from "./component/firebase";
import Login from "./component/Login";
import Header from "./component/Header";
import Home from "./component/Home";
import { useStateValue } from "./component/SetupProvider";

const App = () => {
  const [{ user }, dispatch] = useStateValue();

  // Use Effect <<<<<<< Powerful pice of code runs based on a given condition.

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //the user is logged in...

        dispatch({ type: "SET_USER", user: authUser });
      } else {
        // the user is logged out...
      }
    });

    return () => {
      //any cleanup operation go in here
      unsubscribe();
      console.log(user);
    };
  }, []);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <CheckOut />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
