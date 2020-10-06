import React from "react";
import CollectionOverview from '../../components/Collection-Overview/collection-overview.component'
import Collection from '../Collection/collection.component'
import {Route} from 'react-router-dom'
import {createStructuredSelector} from 'reselect'
import {connect} from 'react-redux'
import WithSpinner from '../../components/With-Spinner/with-spinner.component'
import {selectIsCollectionFetching,selectIsCollectionLoaded} from '../../redux/shop/shop.selector'
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.action";

const CollectionWithSpinner = WithSpinner(Collection);
const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview)


class ShopPage  extends React.Component  {

  
  componentDidMount()
  {
    const {fetchCollectionsStartAsync} = this.props;
    fetchCollectionsStartAsync()
   
 
}

  render(){
    const {match,isCollectionFetching,isCollectionLoaded} = this.props;
    return (
      <div className="shop-page">
            {/* We have to use isCollectionLoaded because initially when we don't have collection and components mount it will return null and componentdidmount get called after render
      rendering for one time .But in case of CollectionOverview we use isCollectionFetching only because when collections is npt loaded it will return an empty array*/}
   
      <Route exact path = {`${match.path}`} render = {(props) => <CollectionOverviewWithSpinner isLoading={isCollectionFetching} {...props}/>}></Route>
      <Route  path = {`${match.path}/:collectionId`} render = {(props) => 
      {
     
      return <CollectionWithSpinner isLoading={!isCollectionLoaded} {...props}/>}
      }></Route>
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
  fetchCollectionsStartAsync : () => dispatch(fetchCollectionsStartAsync())
  }
)

export default connect(mapStateToProps,mapDispathToProps)(ShopPage);

