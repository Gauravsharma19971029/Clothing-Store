import React from "react";
import CollectionOverview from '../../components/Collection-Overview/collection-overview.component'
import Collection from '../Collection/collection.component'
import {Route} from 'react-router-dom'



const ShopPage  = ({match}) =>  {
  console.log(match)

    return (
      <div className="shop-page">
      <Route exact path = {`${match.path}`} component = {CollectionOverview}></Route>
      <Route  path = {`${match.path}/:collectionId`} component = {Collection}></Route>
      </div>
    );

}

export default ShopPage

