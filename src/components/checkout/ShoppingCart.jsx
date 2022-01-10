import "./checkout.css";
import CartItem from "./CartItem";
import React, { useEffect, useState, useMemo } from "react";
import { connect } from "react-redux";
import { removeItem, updateQuantity } from "../../store/utils/actions";
import { setCartList } from "../../store/utils/thunks";
import { useNavigate } from "react-router-dom";
//import PaymentInterface from "./PaymentInterface";

const ShoppingCart = ({
  cart,
  setCartState,
  onRemovePressed,
  onQuantityChange,
}) => {
  //const { testvalue } = useParams();

  //==========( STATE HOOKS )

  const navigate = useNavigate();
  const [displayItemList, setDisplayItemList] = useState();
  const [cartTotal, setCartTotal] = useState();

  //==========( EFFECT HOOKS )

  useEffect(() => {
    if (cart.items) {
      let mappedItems = cart.items.map(mapCartItem);
      setDisplayItemList(mappedItems);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);

  //==========( MEMO )

  useMemo(() => {
    let sum = 0;
    if (cart.items) {
      let cartItems = cart.items;
      let length = cartItems.length;

      for (let i = 0; i < length; i++) {
        sum =
          sum +
          Number(cartItems[i].productQuantity) *
            Number(cartItems[i].productPrice);
      }
    }
    setCartTotal(sum);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);

  //==========( MAP CART ITEMS )

  const mapCartItem = (item, index) => {
    item.productId = index;
    return (
      <React.Fragment key={`item${index}`}>
        <CartItem
          onRemovePressed={onRemovePressed}
          item={item}
          onQuantityChange={onQuantityChange}
        />
      </React.Fragment>
    );
  };

  //==========( NAVIGATION )

  const handleNav = (e) => {
    switch (e.target.id) {
      case "checkout":
        navigate(`/payment/${cartTotal}`);
        break;
      case "continue":
        navigate("/shopping");
        break;
      case "update":
        navigate("/update");
        break;
      default:
        break;
    }
  };

  //==========( UPDATE CART )

  const addItemsToCart = () => {
    setCartState();
  };

  //==========( CONTENT )

  const content = (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-xs-8">
            <div className="panel panel-info">
              <div className="panel-heading">
                <div className="panel-title">
                  <div className="row">
                    <div className="col-xs-6">
                      <h5>
                        <span className="glyphicon glyphicon-shopping-cart"></span>{" "}
                        Shopping Cart
                      </h5>
                    </div>
                    <div className="col-xs-6">
                      <button
                        id="continue"
                        onClick={handleNav}
                        type="button"
                        className="btn btn-primary btn-sm btn-block"
                      >
                        <span className="glyphicon glyphicon-share-alt"></span>{" "}
                        Continue shopping
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="panel-body">
                {displayItemList}

                <div className="row">
                  <div className="text-center">
                    <div className="col-xs-9">
                      <h6 className="text-right">Added items?</h6>
                    </div>
                    <div className="col-xs-3">
                      <button
                        id="update"
                        onClick={addItemsToCart}
                        type="button"
                        className="btn btn-default btn-sm btn-block"
                      >
                        Update cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="panel-footer">
                <div className="row text-center">
                  <div className="col-xs-9">
                    <h4 className="text-right">
                      Total <strong>${cartTotal}</strong>
                    </h4>
                  </div>
                  <div className="col-xs-3">
                    <button
                      id="checkout"
                      onClick={handleNav}
                      type="button"
                      className="btn btn-success btn-block"
                    >
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h4>
          <strong>Press update cart to add simulated items to cart</strong>
        </h4>
      </div>
    </React.Fragment>
  );

  return content;
};

//==========( REDUX )

const mapStateToProps = (state) => ({
  cart: state.cart,
});

const mapDispatchToProps = (dispatch) => ({
  setCartState: (items) => dispatch(setCartList(items)),
  onRemovePressed: (item) => dispatch(removeItem(item)),
  onQuantityChange: (item) => dispatch(updateQuantity(item)),
});

export default React.memo(
  connect(mapStateToProps, mapDispatchToProps)(ShoppingCart)
);
