/*----DEFINE ACTIONS-----*/
import dcandiates from "./api";

export const ACTION_TYPES = {
  CREATE: "CREATE ",
  UPDATE: "UPDATE",
  FETCH_ALL: "FETCH_ALL",
  DELETE: "DELETE",
};

/*---DEFINE ACTIONS CREATORS ----*/
export const fetchAll = () => (dispatch) => {
  console.log(dcandiates.fetchAll());
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
