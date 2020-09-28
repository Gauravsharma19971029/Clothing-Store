import React from "react";
import "./collection-item.styles.scss";
import CustomButton from "../CustomButton/custom-button.component";
import {connect} from 'react-redux'
import {addItem} from '../../redux/cart/cart.action'

const CollectionItem = ({ item,addItem }) =>{ 

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
    <CustomButton className="custom-button" onClick = {() => addItem(item)} inverted> Add to Cart</CustomButton>
  </div>
);
    }

const matchDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})


export default connect(null,matchDispatchToProps)(CollectionItem);
