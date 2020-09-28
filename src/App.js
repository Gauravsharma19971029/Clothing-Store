import React from "react";
import "./App.css";
import Header from "./components/Header/header.component.jsx";
import Home from "./pages/Home/Home.component.jsx";
import ShopPage from "./pages/Shop/shop.component.jsx";
import SignInAndSignUp from "./pages/SignIn-SignUp/signIn-signUp.component.jsx";
import { Route, Switch } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.action";
import { connect } from "react-redux";

class App extends React.Component {
  //we don't need contructor as we are not using state
  // constructor(props)
  // {
  //   super(props)
  //   this.state = {
  //     currentUser: null
  //   }
  // }
  
  unsubscribeFromAuth = null;



  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(async (snapshot) => {
          await setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
        setCurrentUser(userAuth)
      } else {
        // this.setState({ currentUser: null });
        setCurrentUser(null)
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    console.log(this.currentUser);
    return (
      <div>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/shop" component={ShopPage}></Route>
          <Route exact path="/signin" component={SignInAndSignUp}></Route>
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
