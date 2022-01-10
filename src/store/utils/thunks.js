import { setCartData } from "./actions";

//==========( ALERT )

export const displayAlert = (text) => () => {
  alert(text);
};

//==========( SET CART LIST )

export const setCartList = () => (dispatch) => {
  //  simulated cart items
  let initialCart = [
    {
      productName: "Product one",
      productDiscription: "Product discription",
      productPrice: "25.25",
      productQuantity: 1,
      productId: 0,
    },
    {
      productName: "Product two",
      productDiscription: "Product discription",
      productPrice: "50.25",
      productQuantity: 1,
      productId: 1,
    },
    {
      productName: "Product three",
      productDiscription: "Product discription",
      productPrice: "11.25",
      productQuantity: 1,
      productId: 2,
    },
  ];

  dispatch(setCartData(initialCart));
};
