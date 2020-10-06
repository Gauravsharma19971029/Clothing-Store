import React, { useEffect } from "react";
import CollectionOverviewContainer from "../../components/Collection-Overview/collection-overview.container";
import CollectionContainer from "../Collection/collection.container";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCollectionsStart } from "../../redux/shop/shop.action";

const ShopPage = ({ fetchCollectionsStart, match }) => {
  useEffect (() => {
    fetchCollectionsStart();
  },[fetchCollectionsStart])

  

  return (
    <div className="shop-page">
      
      <Route
        exact
        path={`${match.path}`}
        component={CollectionOverviewContainer}
      ></Route>
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionContainer}
      ></Route>
    </div>
  );
};



const mapDispathToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispathToProps)(ShopPage);
