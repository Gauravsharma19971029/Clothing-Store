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