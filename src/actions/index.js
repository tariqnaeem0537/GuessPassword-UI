import axios from "axios";

export function loadPassword(){
    return(dispatch)=> {
        dispatch(verifyingPassword());
        return axios.get("http://localhost:3001/new-password").then((response)=>{
            dispatch(loadPasswordResponse(response.data));
        })
    }
}

export function verifyPassword(body){
    return(dispatch)=> {
        return axios.post("http://localhost:3001/verify-password", body).then((response)=>{
            dispatch(verifyPasswordResponse(response.data));
        })
    }
}

export function loadPasswordResponse(data){
    return{
        type:"FETCH_PASSWORD",
        hint:data.hint
    }
}

export function verifyingPassword(){
    return{
        type:"VERIFYING_PASSWORD",
        response:''
    }
}

export function verifyPasswordResponse(data){
    return{
        type:"VERIFY_PASSWORD",
        response:data
    }
}