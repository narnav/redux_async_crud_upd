import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCart,
  selectCartTotal,
  add,
  remove,
  addProdAsync,
  getCartAsync,removeProdAsync
} from "./app/cartSlice";
import prodSlice from "./app/prodSlice";
import { selectprod } from "./app/prodSlice";
const MyCartDis = () => {
  const cart = useSelector(selectCart);
  const length = useSelector(selectCartTotal);
  const products = useSelector(selectprod);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartAsync());
  }, []);

  return (
    <div>
      <h1>My Shop </h1>
      {products.length > 0 &&
        products.map((prod) => (
          <div>
            {prod.desc} {prod.price} {prod.id}{" "}
            <button
              onClick={() =>
                dispatch(
                  addProdAsync({
                    desc: prod.desc,
                    price: prod.price,
                    _id: prod.id,
                  })
                )
              }
            >
              Add
            </button>
          </div>
        ))}
      Items in cart: {length}
      <hr />
      {cart.length > 0 ? (
        cart.map((prod, i) => (
          <div key={i}>
            {prod.desc} {prod.price}
            <button onClick={() => dispatch(removeProdAsync(prod.id))}>Remove </button>
          </div>
        ))
      ) : (
        <h1>Empty cart - u cheep baster</h1>
      )}
    </div>
  );
};

export default MyCartDis;
