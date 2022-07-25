import { getDefaultMiddleware } from "@reduxjs/toolkit";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectprod,
  getProductAsync,
  addProductAsync,
  updProductAsync,
} from "./app/prodSlice";

const Admin = () => {
  const dispatch = useDispatch();
  const prods = useSelector(selectprod);
  const [firstCall, setfirstCall] = useState(true);
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const getPro = async () => {
      if (firstCall) {
        setfirstCall(false);
        await dispatch(getProductAsync());
        console.log("effect");
      }
    };
    getPro();
  }, []);

  return (
    <div style={{ backgroundColor: "gray" }}>
      Admin
      <button
        onClick={() =>
          dispatch(
            addProductAsync({
              desc: desc,
              price: price,
            })
          )
        }
      >
        Add
      </button>
      Desc
      <input onChange={(e) => setDesc(e.target.value)} />
      Price
      <input onChange={(e) => setPrice(e.target.value)} />
      {prods.length > 0 &&
        prods.map((prod) => (
          <div>
            {prod.desc} {prod.price}
            <button
              onClick={() =>
                dispatch(
                  updProductAsync({
                    desc: desc,
                    price: price,
                    id: prod.id,
                  })
                )
              }
            >
              Update
            </button>
          </div>
        ))}
    </div>
  );
};

export default Admin;
