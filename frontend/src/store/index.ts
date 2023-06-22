import {configureStore} from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import topicsReducer, {TopicState} from "./reducers/topics/topics";

export type Action<T, P> = { type: T, payload: P }


export const store = configureStore({reducer: topicsReducer});
export type AppState = TopicState;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

store.subscribe(() => {
    sessionStorage.setItem("state", JSON.stringify(store.getState()));
})
