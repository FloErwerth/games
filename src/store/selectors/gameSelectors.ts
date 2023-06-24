import { createSelector } from "@reduxjs/toolkit";
import { getState } from "./baseSelectors";

const getGameState = createSelector([getState], (state) => state.gameModel);

export const getRoomID = createSelector([getGameState], (gameState) => gameState.roomId);
