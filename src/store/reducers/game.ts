import { createAction, createReducer } from "@reduxjs/toolkit";

export const setRoomID = createAction<string>("game/set_room_id");

export type GameState = { roomId: string };
const initialGameState: GameState = { roomId: "" };

const gameReducer = createReducer<GameState>(initialGameState, (builder) => {
    builder.addCase(setRoomID, (state, action) => {
        if (state) {
            state.roomId = action.payload;
        }
    });
});

export default gameReducer;
