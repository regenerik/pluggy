import { GET_INFO_DOLLAR_BLUE } from "./actions";



const initialState = {
    quotes: [],
    average:{},
    slippage:[],
}

function reducer(state= initialState, {type,payload}){
    switch(type){
        case GET_INFO_DOLLAR_BLUE:
            return{
                ...state,
            }
        
        default:
            return state
    }
}

export default reducer;