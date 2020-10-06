import { takeLatest, call, put } from "redux-saga/effects";
import ShopActionTypes from "./shop.types";
import {
  firestore,
  convertCollectionSnapshotToMap,
} from "../../firebase/firebase.utils";
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from "./shop.action";

export function* fetchCollectionsStart() {
  
    yield takeLatest(
      ShopActionTypes.FETCH_COLLECTIONS_START,
      fetchCollectionAsync
    );
  

  // console.log(collectionRef)
  //    CollectionRef.onSnapshot(async(snapshot) =>{
  //     // console.log(snapshot)
  //       const collectionsMap =   convertCollectionSnapshotToMap(snapshot)
  //   },error => {
  //   })
}

export function* fetchCollectionAsync() {
  yield console.log("I am fired");
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionSnapshotToMap, snapshot);
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}
