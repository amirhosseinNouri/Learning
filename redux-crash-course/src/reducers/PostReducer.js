import { act } from 'react-dom/test-utils'
import {FETCH_POSTS  , NEW_POST} from '../actions/types'

const initialState = {
    items : [],
    item : {}
}

const postReducer = (state = initialState , action) =>{
    switch(action.type){
        default : return state ;
    }
}

export default postReducer
