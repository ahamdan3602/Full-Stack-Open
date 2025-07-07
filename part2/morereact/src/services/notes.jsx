import axios from "axios";
const baseURL = "http://localhost:3001/notes";

/* The module returns an object that has three functions
 * (getAll, create, adn update) as its properties that
 * deals with notes. The functions directly returns the
 * promises returned by the axios methods.
 */

const getAll = () => {
  return axios.get(baseURL);
};

const create = (newObject) => {
  return axios.post(baseURL, newObject);
};

const update = (id, newObject) => {
  return axios.put(`${baseURL}/${id}`, newObject);
};

export default {
  getAll: getAll,
  create: create,
  update: update,
};
