import axios from "axios";

const URL_PRODS = "http://localhost:3002/prods/";

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

export function updProd(updData) {
  //   console.log("id:", updData.id);
  return new Promise((resolve) =>
    axios
      .put(URL_PRODS + updData.id, updData)
      .then((res) => resolve({ data: res.data }))
  );
}
