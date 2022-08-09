import { ACTION_TYPES } from "../actions/DCandidate";

const initialState = { userList: [], currentId: 0 };

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
    case ACTION_TYPES.UPDATE:
      return {
        ...state,
        userList: state.userList.map((x) =>
          x.id === action.payload.id ? action.payload : x
        ),
      };

    case ACTION_TYPES.DELETE:
      console.log("you come to reducer of delete ");
      return {
        ...state,
        userList: state.userList.filter((x) => x.id !== action.payload),
      };
    case ACTION_TYPES.UPDATE_CURRENT_ID:
      console.log("you come to reducer with id ", state.currentId);
      return {
        ...state,
        currentId: action.payload,
      };
    default:
      return state;
  }
};
export default DCandidateReducer;
