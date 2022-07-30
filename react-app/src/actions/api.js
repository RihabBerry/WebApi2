import axios from "axios";
const baseUrl = "https://localhost:44334/DCandidate";

const fetchAll = () => {
  return axios.get(baseUrl);
};
const create = (newobject) => {
  return axios.post(baseUrl, newobject);
};
const fetchById = (id) => {
  return axios.get(baseUrl + id);
};
const update = (updateRecord, id) => {
  return axios.put(baseUrl + id, updateRecord);
};
const Delete = (id) => {
  return axios.delete(baseUrl + id);
};
const dcandiates = {
  fetchAll,
  create,
  fetchById,
  update,
  Delete,
};
export default dcandiates;
