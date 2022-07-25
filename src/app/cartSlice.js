import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addProd, getProds, delProd } from "./cartAPI";

const initialState = {
  myCart: [],
  //   status: "idle",
};

export const addProdAsync = createAsyncThunk(
  "cart/addProd",
  async (newProd) => {
    const response = await addProd(newProd);
    return response.data;
  }
);

export const removeProdAsync = createAsyncThunk("cart/delProd", async (id) => {
  const response = await delProd(id);
  console.log(response.data);
  return id;
});

export const getCartAsync = createAsyncThunk("cart/getProds", async () => {
  const response = await getProds();
  return response.data;
});

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      state.myCart.push(action.payload);
    },
    remove: (state, action) => {
      state.myCart = state.myCart.filter((x) => x.desc !== action.payload);
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(addProdAsync.fulfilled, (state, action) => {
        state.myCart.push(action.payload);
      })
      .addCase(getCartAsync.fulfilled, (state, action) => {
        state.myCart = action.payload;
      })
      .addCase(removeProdAsync.fulfilled, (state, action) => {
        console.log(action.payload);
        state.myCart = state.myCart.filter((x) => x.id !== action.payload);
        // state.myCart = action.payload;
      });
  },
});

export const { add, remove } = cartSlice.actions;
export const selectCart = (state) => state.cart.myCart;
export const selectCartTotal = (state) => state.cart.myCart.length;
export default cartSlice.reducer;
