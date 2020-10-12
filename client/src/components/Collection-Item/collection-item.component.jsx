import React from "react";
import "./collection-item.styles.scss";
import CustomButton from "../CustomButton/custom-button.component";
import {connect} from 'react-redux'
import {addItem} from '../../redux/cart/cart.action'
import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "../../redux/user/user.selector";

const CollectionItem = ({ item,addItem,currentUser }) =>{ 

    const {id, name, price, imageUrl} = item
    return(
  <div className="collection-item">
    <div
      className="image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>
    {currentUser ? <CustomButton className="custom-button" onClick = {() => addItem(item)} inverted> Add to Cart</CustomButton>:null}
  </div>
);
    }

    const mapStateToProps = createStructuredSelector({
      currentUser: selectCurrentUser
    });
    

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})


export default connect(mapStateToProps,mapDispatchToProps)(CollectionItem);
