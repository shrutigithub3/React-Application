export enum CartActionTypes {
  ADD_ITEM = "ADD_ITEM",
  REMOVE_FROM_CART = "REMOVE_FROM_CART",
  
}


export const addItem = (image: any) => ({
  type: CartActionTypes.ADD_ITEM,
  payload:image
})
export const removeFromCart = (image:any)=> ({
  type: CartActionTypes.REMOVE_FROM_CART,
  payload:image
})
