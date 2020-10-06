import {all,call} from 'redux-saga/effects'

import {fetchCollectionsStart} from './shop/shop.sagas'
import {userSagas} from './user/user.sagas'
import {clearCartOnSignOut} from './cart/cart.sagas'

export default function* rootSaga() {
    yield all([call(fetchCollectionsStart),call(userSagas),call(clearCartOnSignOut)])
}