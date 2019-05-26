let defaultState={
    hint:''
}

const mainReducer=(state=defaultState,action)=>{
    if(action.type==="FETCH_PASSWORD"){
        return{
            ...state,
            hint:action.hint
        }
    }
    else if(action.type==="VERIFY_PASSWORD"){
        return{
            ...state,
            response:action.response
        }
    } 
    else if(action.type==="VERIFYING_PASSWORD"){
        return{
            ...state,
            response:''
        }
    }
    else{
        return{
            ...state
        }
    }
}

export default mainReducer;