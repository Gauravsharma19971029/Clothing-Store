import ShopActionTypes  from './shop.types'
const INTIAL_STATE = {
    collections:null,
    isFetching:false,
    errorMessage:undefined
}

const shopReducer = (state = INTIAL_STATE,action) =>
{
    switch(action.type)
    {
        case ShopActionTypes.FETCH_COLLECTIONS_START:
            {console.log(action.payload)
            return {
                ...state,
                isFetching:true,
                errorMessage:undefined

            }
        }
        case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
            {console.log(action.payload)
            return {
                ...state,
                collections:action.payload,
                isFetching:false,
                errorMessage:undefined

            }
        }
        case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
            {console.log(action.payload)
            return {
                ...state,
                collections:action.payload,
                isFetching:false,
                errorMessage:action.payload

            }
        }
        default:
            return state
    }
}

export default shopReducer