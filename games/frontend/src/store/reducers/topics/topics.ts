import {TopicInfo} from "../../../../../types";
import {Action} from "../../index";

export const SetTopics = "topics/set";

export type SetTopicAction = Action<typeof SetTopics, Array<TopicInfo>>;

type Actions = SetTopicAction;

export const setTopicInfo = (topicInfo: Array<TopicInfo>): SetTopicAction => { return { type: SetTopics, payload: topicInfo  }};

type TopicState = { topicInfo: Array<TopicInfo> };


const topicsReducer = (state: TopicState = {
   topicInfo: [],
}, action: Actions) => {
   switch (action.type) {
      case SetTopics: return {...state, topicInfo: action.payload ?? []};
      default: return state;
   }
}

export default topicsReducer;