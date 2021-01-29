import { createStore } from "redux";

const reducer = (state, action) =>{
    switch(action.type){
        case "INCREMENT":
            return {...state  , count : state.count + 1}
            case "DECREMENT" :
            return {...state  , count : state.count - 1}
            case "RESET" :
            return {...state  , count : 0}



    }
}

const defaultState = {
    count : 0,
    name : "amir"
}
const store = createStore(reducer , defaultState);
export default store;
