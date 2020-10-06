import UserActionTypes from './user.types'

export const setCurrentUser = user => ({
    type:UserActionTypes.SET_CURRENT_USER,
    payload:user
})

export const googleSigninStart = () => ({
    type:UserActionTypes.GOGGLE_SIGN_IN_START
    
})
export const googleSigninSuccess = (user) => ({
    type:UserActionTypes.GOGGLE_SIGN_IN_SUCCESS,
    payload:user
    
})
export const googleSigninFailure = (error) => ({
    type:UserActionTypes.GOGGLE_SIGN_IN_FAILURE,
    payload:error
    
})

export const emailSigninStart = emailAndPassword => ({
    type:UserActionTypes.EMAIL_SIGN_IN_START,
    payload:emailAndPassword
    
})
export const emailSigninSuccess = (user) => ({
    type:UserActionTypes.EMAIL_SIGN_IN_SUCCESS,
    payload:user
    
})
export const emailSigninFailure = (error) => ({
    type:UserActionTypes.EMAIL_SIGN_IN_FAILURE,
    payload:error
    
})

export const signOutStart = () => ({
    type : UserActionTypes.SIGN_OUT_START
})
export const signOutSuccess = () => ({
    type : UserActionTypes.SIGN_OUT_SUCCESS
})
export const signOutFailure = (error) => ({
    type : UserActionTypes.SIGN_OUT_FAILURE,
    payload:error
})

export const checkUserSession = () => ({
    type:UserActionTypes.CHECK_USER_SESSION,
    
    
})



