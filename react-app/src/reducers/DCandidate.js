import { ACTION_TYPES } from "../actions/DCandidate";

const initialState = { userList: [] };

const DCandidateReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_ALL:
      console.log("you are fetching all data in the reducer ");
      return {
        ...state,
        userList: action.payload,
      };
    case ACTION_TYPES.CREATE:
      console.log("you are creating data in the store ");
      return {
        ...state,
        userList: [...state.userList, action.payload],
      };
    case "Papayas":
      console.log("Mangoes and papayas are $2.79 a pound.");
      // expected output: "Mangoes and papayas are $2.79 a pound."
      break;
    default:
      return state;
  }
};
export default DCandidateReducer;
