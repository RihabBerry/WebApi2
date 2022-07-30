import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import DCandidateReducer from "../reducers/DCandidate";

export const store = configureStore({ reducer: DCandidateReducer });
