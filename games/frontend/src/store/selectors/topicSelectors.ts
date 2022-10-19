import {AppState} from "../index";

export const getPictures = (index: number) => (state: AppState) => state.topicModell.topicInfo[index].picture;
export const getTopics = (state: AppState) => state.topicModell.topicInfo;