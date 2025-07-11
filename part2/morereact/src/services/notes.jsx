import axios from "axios";
const baseURL = "http://localhost:3001/notes";

/* The module returns an object that has three functions
 * (getAll, create, adn update) as its properties that
 * deals with notes. The functions directly returns the
 * promises returned by the axios methods.
 */

const getAll = () => {
  const req = axios.get(baseURL);
  const nonExisting = {
    id: 10000,
    content: "This note is not saved to server",
    important: true,
  };
  return req.then((res) => res.data.concat(nonExisting));
};

const create = (newObject) => {
  const req = axios.post(baseURL, newObject);
  return req.then((res) => res.data);
  // return axios.post(baseURL, newObject);
};

const update = (id, newObject) => {
  const req = axios.put(`${baseURL}/${id}`, newObject);
  return req.then((res) => res.data);
  // return axios.put(`${baseURL}/${id}`, newObject);
};

export default { getAll, create, update };
