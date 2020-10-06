import React from "react";
import CollectionOverviewContainer from '../../components/Collection-Overview/collection-overview.container'
import CollectionContainer from '../Collection/collection.container'
import {Route} from 'react-router-dom'
import {createStructuredSelector} from 'reselect'
import {connect} from 'react-redux'
import WithSpinner from '../../components/With-Spinner/with-spinner.component'
import {selectIsCollectionFetching,selectIsCollectionLoaded} from '../../redux/shop/shop.selector'
import { fetchCollectionsStart} from "../../redux/shop/shop.action";






class ShopPage  extends React.Component  {

  
  componentDidMount()
  {
    const {fetchCollectionsStart} = this.props;
    fetchCollectionsStart()
   
 
}

  render(){
    const {match,isCollectionLoaded} = this.props;
    return (
      <div className="shop-page">
            {/* We have to use isCollectionLoaded because initially when we don't have collection and components mount it will return null and componentdidmount get called after render
      rendering for one time .But in case of CollectionOverview we use isCollectionFetching only because when collections is npt loaded it will return an empty array*/}
   
      <Route exact path = {`${match.path}`} component = {CollectionOverviewContainer}></Route>
      <Route  path = {`${match.path}/:collectionId`} component = {CollectionContainer}></Route>
      </div>
    );

  }


}
const mapStateToProps = createStructuredSelector({
  isCollectionFetching : selectIsCollectionFetching,
  isCollectionLoaded : selectIsCollectionLoaded
})

const mapDispathToProps = dispatch => (
  {
    fetchCollectionsStart : () => dispatch(fetchCollectionsStart())
  }
)

export default connect(mapStateToProps,mapDispathToProps)(ShopPage);

