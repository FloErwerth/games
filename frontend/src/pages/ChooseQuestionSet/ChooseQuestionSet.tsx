import {useAppDispatch, useAppSelector} from "../../store";
import {getChosenGeneralTopic, getTopicInfos} from "../../store/selectors/topicSelectors";
import {useCallback, useEffect, useMemo} from "react";
import {useNavigate} from "react-router-dom";
import {setChosenPackName} from "../../store/reducers/topics/topics";
import {CardWithPicture} from "../../components/CardWithPicture/CardWithPicture";
import "./styles.css";

export const ChooseQuestionSet = () => {
    const chosenTopic = useAppSelector(getChosenGeneralTopic);
    const infos = useAppSelector(getTopicInfos);
    const navigate = useNavigate();
    const extractedInfos = useMemo(() => Object.entries(infos?.packs ?? []).map(([packName, {id}]) => {
        return {packName, id}
    }), [infos]);
    const dispatch = useAppDispatch();
    const hasMultiplePacks = useMemo(() => (infos?.numberOfQuestionSets ?? 0) > 1, [infos]);

    useEffect(() => {
        if (!chosenTopic) {
            navigate("/");
        }
        if (!hasMultiplePacks) {
            navigate("/play");
        }
    }, []);

    const handleSelectQuestionPack = useCallback(
        (packName: string) => {
            dispatch(setChosenPackName(packName));
            navigate("/play");
        },
        [dispatch, setChosenPackName],
    );

    const getYoutubePictureSrc = useCallback((id: string) => {
        return `https://img.youtube.com/vi/${id}/0.jpg`
    }, [])

    return (
        <>
            {chosenTopic && <h2>Wähle ein Frageset zur Kategorie {chosenTopic}</h2>}
            {infos && hasMultiplePacks && (
                        <div className="pack-wrapper">
                            {extractedInfos.map(({packName, id}) => (
                                <CardWithPicture cardClasses="pack" cardImageClasses="pack-image" onClickCard={() => handleSelectQuestionPack(packName)} image={getYoutubePictureSrc(id)}>{packName}</CardWithPicture>
                            ))}
                        </div>
                    )}
        </>
    );
};
