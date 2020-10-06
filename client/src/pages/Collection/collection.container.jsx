import {connect} from 'react-redux'
import {compose} from 'redux'
import WithSpinner from '../../components/With-Spinner/with-spinner.component'
import {selectIsCollectionLoaded} from '../../redux/shop/shop.selector'
import {createStructuredSelector} from 'reselect'
import Collection from './collection.component'


const mapStateToProps = createStructuredSelector({
    isLoading : state => !selectIsCollectionLoaded(state)
  })

// Here We use state because selectionCollectionLoaded we need inverse value from the state

export const CollectionContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(Collection)

export default CollectionContainer


/* We have to use isCollectionLoaded because initially when we don't have collection and components mount it will return null and componentdidmount get called after render
      rendering for one time .But in case of CollectionOverview we use isCollectionFetching only because when collections is npt loaded it will return an empty array*/
