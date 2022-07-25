import axios from "axios";

const URL_PRODS = "http://localhost:3002/orders/";

// cart methods
export function getProds() {
  return new Promise((resolve) =>
    axios(URL_PRODS).then((res) => resolve({ data: res.data }))
  );
}

export function addProd(newProd) {
  return new Promise((resolve) =>
    axios.post(URL_PRODS, newProd).then((res) => resolve({ data: res.data }))
  );
}

export function delProd(id) {
  return new Promise((resolve) =>
    axios.delete(URL_PRODS + id).then((res) => resolve({ data: res.data }))
  );
}



//   const res = await axios.put('/api/article/123', {
//     title: 'Making PUT Requests with Axios',
//     status: 'published'
// });

// createAsyncThunk -> updProd-> createAsyncThunk -> extra
