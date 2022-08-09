import { configureStore } from "@reduxjs/toolkit";
import DCandidateReducer from "../reducers/DCandidate";

export const store = configureStore({ reducer: DCandidateReducer });
