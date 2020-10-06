import React from "react";
import {HeaderContainer,LogoContainer,OptionDiv,OptionLink,OptionsContainer} from './header.styles'
import { ReactComponent as Logo } from "../../assests/LRq76vTID0.svg";
import CartIcon from "../Cart-Icon/cart-icon.component";
import CartDropDown from "../Cart-Dropdown/cart-dropdown.component";


import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";

import {createStructuredSelector} from 'reselect'
import {selectCurrentUser } from '../../redux/user/user.selector'
import {selectCartHidden} from '../../redux/cart/cart.selector'



const Header = ({ currentUser,hidden }) => {
  console.log(currentUser);
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo"></Logo>
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">
          SHOP
        </OptionLink>
        <OptionLink to="/">
          CONTACT
        </OptionLink>
        {currentUser ? (
          <OptionDiv onClick={() => auth.signOut()}>
            {" "}
            SIGN OUT{" "}
          </OptionDiv>
        ) : (
          <OptionLink to="/signin">
            SIGN IN
          </OptionLink>
        )}

        <CartIcon></CartIcon>
      </OptionsContainer>
     {hidden ?null: <CartDropDown></CartDropDown>}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector ({
  currentUser:selectCurrentUser,
  hidden : selectCartHidden,
});

export default connect(mapStateToProps)(Header);
