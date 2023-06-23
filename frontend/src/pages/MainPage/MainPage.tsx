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
                <h2>Wähle eine Kategorie</h2>
            </div>
            <ChooseTopic />
        </>
    );
};
