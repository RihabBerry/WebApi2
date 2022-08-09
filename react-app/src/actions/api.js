import axios from "axios";
const baseUrl = "https://localhost:44334/DCandidate";

const fetchAll = () => {
  return axios.get(baseUrl);
};

const create = (newobject) => {
  var formData = new FormData();
  Object.entries(newobject).forEach(([key, value]) => {
    formData.append(key, value);
  });
  return axios({
    method: "post",
    url: baseUrl + "/Create",
    data: formData,
    headers: { "Content-Type": "multipart/form-data" },
  });
};
const fetchById = (id) => {
  return axios.get(baseUrl + id);
};
const update = (id, updateRecord) => {
  var formData = new FormData();
  Object.entries(updateRecord).forEach(([key, value]) => {
    formData.append(key, value);
  });
  return axios({
    method: "put",
    url: baseUrl + "/Edit/" + id,
    data: formData,
    headers: { "content-Type": "multipart/form-data" },
  });
};
const Delete = (id) => {
  console.log("you come to delete url ");
  return axios.delete(baseUrl + "/Delete/" + id);
};
const dcandiates = {
  fetchAll,
  create,
  fetchById,
  update,
  Delete,
};
export default dcandiates;
