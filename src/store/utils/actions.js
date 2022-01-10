/***********
    ACTIONS
************/

//==========( CART ACTIONS)

export const ADD_ITEM = "ADD_ITEM";
export const addItem = (product) => ({
  type: ADD_ITEM,
  payload: { product },
});

export const REMOVE_ITEM = "REMOVE_ITEM";
export const removeItem = (product) => ({
  type: REMOVE_ITEM,
  payload: { product },
});

export const UPDATE_QUANTITY = "UPDATE_QUANTITY";
export const updateQuantity = (id, quantity) => ({
  type: UPDATE_QUANTITY,
  payload: id,
  quantity,
});

/***********
    THUNKS 
************/

//==========( CART THUNKS )

export const SET_CART_DATA = "SET_CART_DATA";
export const setCartData = (cart) => {
  return {
    type: SET_CART_DATA,
    payload: cart,
  };
};
