import { useAppSelector } from "../../store";
import { getChosenGeneralTopic, getChosenPackName, getQuestionAnswerPairs } from "../../store/selectors/topicSelectors";
import { useNavigate } from "react-router-dom";
import { PlayPageHeader } from "../../components/Header/PlayPageHeader";
import { useEffect } from "react";

export const PlayPage = () => {
    const topic = useAppSelector(getChosenGeneralTopic);
    const packname = useAppSelector(getChosenPackName);
    const questionAnswerPairs = useAppSelector(getQuestionAnswerPairs);
    const navigate = useNavigate();

    useEffect(() => {
        if (!packname || !topic) {
            navigate("/");
        }
    }, []);

    return (
        <>
            <PlayPageHeader />
            <div>
                <>
                    Du spiel {packname} aus dem Paket {topic}
                </>
                {questionAnswerPairs && questionAnswerPairs.pairs.map((pair) => <div>{pair.question}</div>)}
            </div>
        </>
    );
};
