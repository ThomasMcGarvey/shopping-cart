import React, { useEffect } from "react";
import { useFormik } from "formik";

function CartItem({ item, onRemovePressed, onQuantityChange }) {
  //==========( FORMIK HOOK )

  const { values, handleChange } = useFormik({
    initialValues: {
      quantity: item.productQuantity,
    },
  });

  useEffect(() => {
    let payload = { id: item.productId, quant: values.quantity };
    onQuantityChange(payload);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values.quantity]);
  //==========( CONTENT )

  return (
    <React.Fragment>
      <div className="row">
        <div className="col-xs-2">
          <img
            className="img-responsive"
            src="http://placehold.it/100x70"
            alt=""
          />
        </div>
        <div className="col-xs-4">
          <h4 className="product-name">
            <strong>{item.productName}</strong>
          </h4>
          <h4>
            <small>{item.productDiscription}</small>
          </h4>
        </div>

        <div className="col-xs-6">
          <div className="col-xs-6 text-right">
            <h6>
              <strong>
                {item.productPrice}
                <span className="text-muted">x</span>
              </strong>
            </h6>
          </div>
          <div className="col-xs-4">
            <input
              onChange={handleChange}
              type="text"
              id="quantity"
              className="form-control input-sm"
              value={values.quantity}
            />
          </div>
          <div className="col-xs-2">
            <button
              onClick={() => onRemovePressed(item.productId)}
              type="button"
              className="btn btn-link btn-xs"
            >
              <span className="glyphicon glyphicon-trash" />
            </button>
          </div>
        </div>
      </div>
      <hr />
    </React.Fragment>
  );
}

export default React.memo(CartItem);
