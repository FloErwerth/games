import {ChooseTopic} from "./ChooseTopic/ChooseTopic";
import {useEffect} from "react";
import {useAppDispatch} from "../../store";
import {resetSelections} from "../../store/reducers/topics/topics";

export const MainPage = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(resetSelections());
    }, []);

    return (
        <>
            <div className={"main"}>
                <h1 className={"main-title"}>Pietsmiet 50 Fragen</h1>
                <h2>Wähle einer 50 Fragen Kategorien, um zu starten</h2>
            </div>
            <ChooseTopic />
        </>
    );
};
