import React, { useEffect, lazy, Suspense } from "react";
import Header from "./components/Header/header.component.jsx";

import { Route, Switch, Redirect } from "react-router-dom";
import { checkUserSession } from "./redux/user/user.action";
import { selectCollectionForPreview } from "./redux/shop/shop.selector";
import { selectCurrentUser } from "./redux/user/user.selector";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { GlobalStyle } from "./global.styles";
import Spinner from "./components/Spinner/spinner.component";
import ErrorBoundary from './components/Error-Boundary/error-component.component.jsx';
import ProtectRoute from './utility/protected.route' 
const Home = lazy(() => import("./pages/Home/Home.component.jsx"));
const ShopPage = lazy(() => import("./pages/Shop/shop.component.jsx"));
const CheckoutPage = lazy(() => import("./pages/Checkout/checkout.component"));
const  ContactPage = lazy(() => import("./pages/Contact/contact.component.jsx"));
const SignInAndSignUp = lazy(() =>
  import("./pages/SignIn-SignUp/signIn-signUp.component.jsx")
);
const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <GlobalStyle />
      <Header></Header>
      <Switch>
        <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <Route exact path="/" component={Home}></Route>
          <Route path="/shop" component={ShopPage}></Route>
          <Route exact path="/contact" component={ContactPage}></Route>
          <Route
            exact
            path="/signin"
            render={() =>
              currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
            }
          ></Route>
          <ProtectRoute exact path="/checkout" component={CheckoutPage}></ProtectRoute>
        </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionForPreview,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
