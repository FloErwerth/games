import {GeneralTopicName, topics, Topics} from "../../../data";
import {createAction, createReducer} from "@reduxjs/toolkit";
import {AppState} from "../../index";

export const setChosenGeneralTopic = createAction<GeneralTopicName>("topic/set_chosen_topic");
export const setChosenPackName = createAction<string>("topic/set_difficulty");
export const resetSelections = createAction("topic/reset_selections");

export type TopicState = { availableTopics: Topics; chosenGeneralTopic: GeneralTopicName | undefined; chosenPackName: string | undefined };

export const getState = () => {
    const state = localStorage.getItem("state");
    if (state) {
        return JSON.parse(state) as AppState;
    } else return { availableTopics: topics, chosenGeneralTopic: undefined, chosenPackName: undefined };
}

const topicsReducer = createReducer<TopicState>(getState(), (builder) => {
    builder
        .addCase(setChosenGeneralTopic, (state, action) => {
            state.chosenGeneralTopic = action.payload;
        })
        .addCase(setChosenPackName, (state, action) => {
            state.chosenPackName = action.payload;
        })
        .addCase(resetSelections, () => {
            return getState();
        });
});

export default topicsReducer;
