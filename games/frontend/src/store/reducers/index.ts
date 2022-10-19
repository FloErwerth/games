import questionsReducer from "./questions/questions";
import topicsReducer from "./topics/topics";
import {combineReducers} from "@reduxjs/toolkit";
export const reducers = combineReducers({questionModell: questionsReducer, topicModell: topicsReducer});