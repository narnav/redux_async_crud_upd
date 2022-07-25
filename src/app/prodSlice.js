import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProds, addProd, updProd } from "./prodAPI";
const initialState = {
  myProds: [],
  //   status: "idle",
};

export const updProductAsync = createAsyncThunk(
  "prod/updProd",
  async (updData) => {
    console.log(updData);
    const response = await updProd(updData);
    return response.data;
  }
);

export const getProductAsync = createAsyncThunk("prod/getProds", async () => {
  console.log("test");
  const response = await getProds();
  return response.data;
});

export const addProductAsync = createAsyncThunk(
  "prod/addProds",
  async (newProd) => {
    console.log("test");
    const response = await addProd(newProd);
    return response.data;
  }
);

export const prodSlice = createSlice({
  name: "prod",
  initialState,
  reducers: {
    // add: (state, action) => {
    //   state.myProds.push(action.payload);
    // },
    // remove: (state, action) => {
    //   state.myProds = state.myProds.filter((x) => x.desc !== action.payload);
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProductAsync.fulfilled, (state, action) => {
        state.myProds = action.payload;
      })
      .addCase(addProductAsync.fulfilled, (state, action) => {
        state.myProds.push(action.payload);
      })
      .addCase(updProductAsync.fulfilled, (state, action) => {
        // console.log(action.payload);
        let myUpdProd = action.payload;
        let oldProd = state.myProds.find((x) => x.id === myUpdProd.id);
        oldProd.desc = myUpdProd.desc;
        oldProd.price = myUpdProd.price;
      });
  },
});

export const { add, remove } = prodSlice.actions;
export const selectprod = (state) => state.prod.myProds;
export default prodSlice.reducer;
