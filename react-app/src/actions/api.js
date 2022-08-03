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
  console.log("new object to verify", formData);
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
