import {ChooseTopic} from "./ChooseTopic/ChooseTopic";


export const MainPage = () => {

    return (
        <>
            <div className={"main"}>
                <h2>Wähle eine Kategorie</h2>
            </div>
            <ChooseTopic />
        </>
    );
};
