import {useAppSelector} from "../../store";
import {getChosenGeneralTopic, getChosenPackName, getQuestionAnswerPairs} from "../../store/selectors/topicSelectors";
import {useCallback, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {RoomModal} from "../../components/RoomModals/RoomModal";

export const PlayPage = () => {
    const topic = useAppSelector(getChosenGeneralTopic);
    const packname = useAppSelector(getChosenPackName);
    const questionAnswerPairs = useAppSelector(getQuestionAnswerPairs);
    const navigate = useNavigate();
    const [openRoomModal, setOpenRoomModal] = useState(false);
    useEffect(() => {
        if(!packname || !topic) {
            navigate("/");
        } else {
            setOpenRoomModal(true);
        }
    }, [])

    const handleCloseRoomModal = useCallback(() => {
        navigate("/");
        setOpenRoomModal(false);
    }, [])

    return (
        <><div>
            <>
                Du spiel {packname} aus dem Paket {topic}
            </>
            {questionAnswerPairs && questionAnswerPairs.pairs.map((pair) => <div>{pair.question}</div>)}
        </div>
            <RoomModal open={openRoomModal} onClose={handleCloseRoomModal} />
        </>
    );
};
