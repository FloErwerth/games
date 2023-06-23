import {createAction, createReducer} from "@reduxjs/toolkit";

export const setUserId = createAction<string>("topic/set_user_id");
export const setUserName = createAction<string>("topic/set_user_name");
export const setIsLoggedIn = createAction<boolean>("topic/set_logged_in");

export type AuthState = { userName: string, userId: string; isLoggedIn: boolean };
const initalAuthState: AuthState = { userName: "", userId: "", isLoggedIn: false }

const authReducer = createReducer<AuthState>(initalAuthState, (builder) => {
    builder
        .addCase(setUserId, (state, action) => {
            if(state) {
                state.userId = action.payload;
            }
        }).addCase(setUserName, (state, action) => {
            if(state) {
                state.userName = action.payload;
            }
        })
        .addCase(setIsLoggedIn, (state, action) => {
            if(state) {
                state.isLoggedIn = action.payload;
            }
        })
});

export default authReducer;
