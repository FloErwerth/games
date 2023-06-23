import {createSelector} from "@reduxjs/toolkit";
import {getState} from "./baseSelectors";

const getAuthModel = createSelector([getState], (state) => state.authModel);
export const getIsLoggedIn = createSelector([getAuthModel], (authModel) => {
    return authModel.isLoggedIn;
})

export const getUserId = createSelector([getAuthModel], (authModel) => {
    return authModel.userId;
})