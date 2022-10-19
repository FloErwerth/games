import {Question} from "../../../../../types";
import {Action} from "../../index";

export const SetQuestions = "questions/set";

export type SetQuestionsAction = Action<typeof SetQuestions, Array<Question>>;
type QuestionsState = { questions: Array<Question> };

const questionsReducer = (state: QuestionsState = {
   questions: [],
}, action: SetQuestionsAction) => {
   switch (action.type) {
      case SetQuestions: return {questions: action.payload ?? []};
      default: return state;
   }
}

export default questionsReducer;