import {connect} from 'react-redux'
import {compose} from 'redux'
import WithSpinner from '../With-Spinner/with-spinner.component'
import {selectIsCollectionFetching} from '../../redux/shop/shop.selector'
import {createStructuredSelector} from 'reselect'
import CollectionOverview from './collection-overview.component'


const mapStateToProps = createStructuredSelector({
    isLoading : selectIsCollectionFetching,
  })

export const CollectionOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionOverview)

export default CollectionOverviewContainer