import React from "react";
import CollectionOverview from '../../components/Collection-Overview/collection-overview.component'



const ShopPage  = ({collections}) =>  {

    return (
      <div className="shop-page">
        <CollectionOverview></CollectionOverview>
      </div>
    );

}

export default ShopPage

