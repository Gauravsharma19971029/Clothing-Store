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
      {/* We have to use isCollectionLoaded because initially when we don't have collection and components mount it will return null and componentdidmount get called after render
      rendering for one time .But in case of CollectionOverview we use isCollectionFetching only because when collections is npt loaded it will return an empty array*/}

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
