import {AppState} from "../index";
import {GeneralTopicName, topics} from "../../data";
import {createSelector} from "@reduxjs/toolkit";

const getState = createSelector([(state: AppState) => state], (state) => state);

export const getGeneralTopics = createSelector([getState], (state) => {
    return Object.keys(state.availableTopics).map((generalTopic) => generalTopic) as GeneralTopicName[];
});

export const getTopics = createSelector([getState], (state) => {
    return state.availableTopics ?? topics;
})

export const getChosenGeneralTopic = createSelector([getState], (state) => {
    return state.chosenGeneralTopic;
});

export const getTopicInfos = createSelector([getChosenGeneralTopic, getTopics], (generalTopic, topics) => {
    return generalTopic && topics[generalTopic];
});

export const getChosenPackName = createSelector([getState], (state) => state.chosenPackName);

export const getQuestionAnswerPairs = createSelector([getTopicInfos, getChosenPackName], (topicInfos, packname) => {
    return packname && topicInfos?.packs[packname];
})