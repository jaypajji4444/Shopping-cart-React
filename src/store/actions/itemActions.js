import * as actionTypes from "./actionTypes";
import axios from "axios"

export const addItem = (id) => {
    return {
        type: actionTypes.ADD_TO_CART,
        itemId: id
    }
}

export const deleteItem = (id) => {
    return  {    
            type: actionTypes.DELETE_FROM_CART,
            itemId: id
    }
}

export const subQty = () => {

}

export const addQty = () => {

}
export const setItem=(data)=>{
    return {
        type:actionTypes.SET_INGREDIENTS,
        items:data
    }
}


export const initItem=()=>{
    return dispatch=>{
        axios.get("http://localhost:8080/items")
        .then(res=>{
            dispatch(setItem(res.data))
    })
    .catch(err=>console.log(err))
    }
}