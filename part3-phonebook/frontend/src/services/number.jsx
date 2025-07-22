/* eslint-disable no-unused-vars */
import axios from "axios";
const baseURL = "http://localhost:3001/persons";

const create = (numberObject) => {
  const req = axios.post(baseURL, numberObject);
  return req.then((res) => res.data);
};

const remove = (id) => {
  axios
    .delete(`${baseURL}/${id}`)
    .then((res) => {
      console.log("successfully deleted", res.status);
    })
    .catch((error) => window.alert("Error deleting resource: ", error));
};

const getAll = () => {
  const req = axios.get(baseURL);
  return req.then((res) => res.data);
};

export default { create, getAll, remove };
