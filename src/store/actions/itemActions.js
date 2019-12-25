import * as actionTypes from "./actionTypes";

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