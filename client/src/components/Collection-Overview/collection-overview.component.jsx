import React from 'react'
import './collection-overview.styles.scss'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectCollectionForPreview} from '../../redux/shop/shop.selector'
import CollectionPreview from "../Preview/collection-preview.component";

const CollectionOverview = ( {collections} ) => {
    return (
        <div className= 'collections-overview'>
        {collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview
              key={id}
              {...otherCollectionProps}
            ></CollectionPreview>
          ))}
          </div>

    )
}

const mapStateToProps = createStructuredSelector({
    collections:selectCollectionForPreview
  })
  
export default connect(mapStateToProps)(CollectionOverview)
  