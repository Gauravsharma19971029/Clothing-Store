import React from "react";
import CollectionOverview from '../../components/Collection-Overview/collection-overview.component'
import Collection from '../Collection/collection.component'
import {Route} from 'react-router-dom'
import {firestore ,convertCollectionSnapshotToMap} from '../../firebase/firebase.utils'
import {connect} from 'react-redux'
import {updateCollections} from '../../redux/shop/shop.action.js'
import WithSpinner from '../../components/With-Spinner/with-spinner.component'

const CollectionWithSpinner = WithSpinner(Collection);
const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview)


class ShopPage  extends React.Component  {

  state = {
    loading:true
  }

  unsubscribeFromSanpshot = null;

  componentDidMount()
  {
    const {updateCollections} = this.props
    const CollectionRef = firestore.collection('collections');
    console.log(CollectionRef)
   this.unsubscribeFromSanpshot =  CollectionRef.onSnapshot(async(snapshot) =>{ 
    // console.log(snapshot)
      const collectionsMap =   convertCollectionSnapshotToMap(snapshot)
     await updateCollections(collectionsMap);
     this.setState({loading:false});
  })
}

  render(){
    const {match} = this.props;
    const {loading} = this.state;
    return (
      <div className="shop-page">
      <Route exact path = {`${match.path}`} render = {(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props}/>}></Route>
      <Route  path = {`${match.path}/:collectionId`} render = {(props) => 
      {
        console.log(props,"props")
      return <CollectionWithSpinner isLoading={loading} {...props}/>}
      }></Route>
      </div>
    );

  }


}

const mapDispathToProps = dispatch => (
  {
    updateCollections:collectionsMap => dispatch(updateCollections(collectionsMap))
  }
)

export default connect(null,mapDispathToProps)(ShopPage);

