import {createAction, createReducer} from "@reduxjs/toolkit";

export const setUserId = createAction<string>("topic/set_user_id");
export const setIsLoggedIn = createAction<boolean>("topic/set_logged_in");

export type AuthState = { userId: string; isLoggedIn: boolean };
const initalAuthState: AuthState = { userId: "", isLoggedIn: false }

const authReducer = createReducer<AuthState>(initalAuthState, (builder) => {
    builder
        .addCase(setUserId, (state, action) => {
            if(state) {
                state.userId = action.payload;
            }
        })
        .addCase(setIsLoggedIn, (state, action) => {
            if(state) {
                state.isLoggedIn = action.payload;
            }
        })
});

export default authReducer;
