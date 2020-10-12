import React from "react";
import {
  HeaderContainer,
  LogoContainer,
  OptionDiv,
  OptionLink,
  OptionsContainer,
} from "./header.styles";
import { ReactComponent as Logo } from "../../assests/LRq76vTID0.svg";
import CartIcon from "../Cart-Icon/cart-icon.component";
import CartDropDown from "../Cart-Dropdown/cart-dropdown.component";

import { connect } from "react-redux";
import { signOutStart } from "../../redux/user/user.action";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { selectCartHidden } from "../../redux/cart/cart.selector";

const Header = ({ currentUser, hidden, signOutStart }) => {
  // console.log(currentUser);

  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo"></Logo>
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/contact">CONTACT</OptionLink>
        {currentUser ? (
          <OptionDiv onClick={() => signOutStart()}>SIGN OUT </OptionDiv>
        ) : (
          <OptionLink to="/signin">SIGN IN</OptionLink>
        )}

        {currentUser ? <CartIcon></CartIcon> : null}
      </OptionsContainer>
      {hidden ? null : <CartDropDown></CartDropDown>}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
