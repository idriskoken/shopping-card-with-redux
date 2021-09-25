
import { ActionTypes } from "../constants/action-types"

const initialState= {
  products: [],
  product: {}
}
export const productReducer = (state = initialState, action) => {
  switch(action.type) {
    case ActionTypes.SET_PRODUCTS:
      return {...state.products, products: action.payload};
    default:
      return state;
  }
}

  export const selectedProductReducer = (state ={}, action) => {
    switch(action.type) {
      case ActionTypes.SELECTED_PRODUCTS:
        return {...state, ...action.payload};
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
          return {};
      default:
        return state;
    }
}
