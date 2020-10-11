import React, { useEffect,lazy } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCollectionsStart } from "../../redux/shop/shop.action";

const CollectionOverviewContainer = lazy(() => import("../../components/Collection-Overview/collection-overview.container"))
const CollectionContainer = lazy(() => import("../Collection/collection.container"))

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
