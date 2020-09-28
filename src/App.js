import React from 'react';
import './App.css';
import Header from './components/Header/header.component.jsx'
import Home from './pages/Home/Home.component.jsx'
import ShopPage from './pages/Shop/shop.component.jsx'
import SignInAndSignUp from './pages/SignIn-SignUp/signIn-signUp.component.jsx'
import { Route, Switch } from 'react-router-dom'
import {auth} from './firebase/firebase.utils'




class App extends React.Component {

  constructor(props)
  {
    super(props)
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount()
  {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      console.log(user);
      this.setState({currentUser:user});
    })

    
  }

  componentWillUnmount()
  {
    this.unsubscribeFromAuth();
  }

  render()
  {
    console.log(this.currentUser)
    return (
      <div >
        <Header currentUser = {this.state.currentUser}></Header>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/shop" component={ShopPage}></Route>
          <Route exact path="/signin" component={SignInAndSignUp}></Route>
        </Switch>
  
  
      </div>
    );
  }

}

export default App;
