import {takeLatest,all,put,call} from 'redux-saga/effects'
import {UserActionTypes} from './user.types'
import  {auth,googleProvider,createUserProfileDocument,getCurrentUser}from '../../firebase/firebase.utils'
import {googleSigninSuccess,googleSigninFailure,emailSigninSuccess,emailSigninFailure,signOutSuccess,signOutFailure} from './user.action'

export function* signInWithGoogle()
{
    try{
        const {user} = yield auth.signInWithPopup(googleProvider);
        const userRef = yield call(createUserProfileDocument,user);
        //user = userauth in App.js
        const userSnapshot = yield userRef.get();
        yield put(googleSigninSuccess({id:userSnapshot.id,...userSnapshot.data()}))
    }
    catch(error){
        yield put(googleSigninFailure(error))
    }

}

export function* signInWithEmail({payload:{email,password}})
{
    try{
        const {user} = yield auth.signInWithEmailAndPassword(email, password);
        const userRef = yield call(createUserProfileDocument,user);
        //user = userauth in App.js
        const userSnapshot = yield userRef.get();
        yield put(emailSigninSuccess({id:userSnapshot.id,...userSnapshot.data()}))
    }
    catch(error){
        yield put(emailSigninFailure(error))
    }

}

export function* isUserAuthenticated() {
    try{
        const userAuth = yield getCurrentUser();
        if(!userAuth) return;
        const userRef = yield call(createUserProfileDocument,userAuth);
        //user = userauth in App.js
        const userSnapshot = yield userRef.get();
        yield put(emailSigninSuccess({id:userSnapshot.id,...userSnapshot.data()}))
        
    }
    catch(error)
    {
        yield put(emailSigninFailure(error))
    }
}

export function* signOut() {
    try{
        yield auth.signOut()
        yield (put(signOutSuccess()))
    }
    catch (error){
        yield put(signOutSuccess(error))
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOGGLE_SIGN_IN_START,signInWithGoogle)
}

export function* onEmailSignInStart() {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START,signInWithEmail)
}

export function* onCheckUserSession(){
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION,isUserAuthenticated)
}
export function* onCheckUserSignOutStart(){
    yield takeLatest(UserActionTypes.SIGN_OUT_START,signOut)
}


export function* userSagas() {
    yield all([call(onGoogleSignInStart),call(onEmailSignInStart),call(onCheckUserSession),call(onCheckUserSignOutStart)])
}