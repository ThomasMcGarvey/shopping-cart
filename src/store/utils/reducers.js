import {
  ADD_ITEM,
  REMOVE_ITEM,
  SET_CART_DATA,
  UPDATE_QUANTITY,
} from "../utils/actions";

//==========( CART )

export const cart = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    //  add item to cart
    case ADD_ITEM: {
      const { product } = payload;
      const newItem = {
        product,
      };
      return state.concat(newItem);
    }

    //  remove item from cart
    case REMOVE_ITEM: {
      const productId = payload.product;

      let filteredItems = state.items.filter(
        (item) => item.productId !== productId
      );
      return { items: filteredItems };
    }

    //  update item quantity
    case UPDATE_QUANTITY: {
      let items = payload;
      let quantity = items.quant;
      let cart = { ...state };

      cart.items[items.id].productQuantity = quantity;
      return cart;
    }

    //  preload simulated cart data
    case SET_CART_DATA: {
      let items = payload;
      return { ...state, items };
    }

    default: {
      return state;
    }
  }
};
