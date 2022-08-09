/*----DEFINE ACTIONS-----*/
import DCandidates from "../components/DCandidates";
import dcandiates from "./api";

export const ACTION_TYPES = {
  CREATE: "CREATE ",
  UPDATE: "UPDATE",
  FETCH_ALL: "FETCH_ALL",
  DELETE: "DELETE",
  UPDATE_CURRENT_ID: "UPDATE_CURRENT_ID",
};

/*---DEFINE ACTIONS CREATORS ----*/
export const fetchAll = () => (dispatch) => {
  dcandiates
    .fetchAll()
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.FETCH_ALL,
        payload: response.data,
      });
      console.log("this fetch data", response.data);
    })

    .catch((error) => console.log("error with fetching the data"));
};

export const Create = (newobject) => (dispatch) => {
  dcandiates.create(newobject).then((response) => {
    dispatch({
      type: ACTION_TYPES.CREATE,
      payload: response.data,
    });
    console.log("this fetch created data", response.data);
  });
};

export const Update = (id, newObject) => (dispatch) => {
  dcandiates.update(id, newObject).then((response) => {
    dispatch({
      type: ACTION_TYPES.UPDATE,
      payload: { id, ...newObject },
    });
  });
};

export const Delete = (id) => (dispatch) => {
  dcandiates.Delete(id).then((response) => {
    dispatch({
      type: ACTION_TYPES.DELETE,
      payload: id,
    });
  });
};
