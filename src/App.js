import React,{useEffect} from "react";
import "./App.css";
import Header from "./components/Header/header.component.jsx";
import Home from "./pages/Home/Home.component.jsx";
import ShopPage from "./pages/Shop/shop.component.jsx";
import SignInAndSignUp from "./pages/SignIn-SignUp/signIn-signUp.component.jsx";
import CheckoutPage from "./pages/Checkout/checkout.component";
import { Route, Switch, Redirect } from "react-router-dom";
import { checkUserSession } from "./redux/user/user.action";
import { selectCollectionForPreview } from "./redux/shop/shop.selector";
import { selectCurrentUser } from "./redux/user/user.selector";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

const App = ({checkUserSession,currentUser}) => {
  useEffect(() => {
    checkUserSession();
  },[checkUserSession])
    
    return (
      <div>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/shop" component={ShopPage}></Route>
          <Route
            exact
            path="/signin"
            render={() =>
              currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
            }
          ></Route>
          <Route exact path="/checkout" component={CheckoutPage}></Route>
        </Switch>
      </div>
    );
  }


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionForPreview,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
