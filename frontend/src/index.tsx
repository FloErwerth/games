import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage/MainPage";
import { Provider } from "react-redux";
import { AppState, store, useAppDispatch } from "./store";
import { ChooseQuestionSet } from "./pages/ChooseQuestionSet/ChooseQuestionSet";
import { PlayPage } from "./pages/PlayPage/PlayPage";
import { About } from "./pages/About/About";
import { setUserName } from "./store/reducers/auth";
import { GeneralTopic } from "./pages/GeneralTopic/GeneralTopic";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

const getState = (): AppState | undefined => {
    const stateEntries = localStorage.getItem("state");
    if (stateEntries) {
        const parsedState = JSON.parse(stateEntries) as AppState;
        return {
            topicModel: parsedState.topicModel,
            authModel: parsedState.authModel,
            gameModel: parsedState.gameModel,
        };
    }
    return undefined;
};

const App = () => {
    const [initialized, setInitialized] = useState(false);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!initialized) {
            const state = getState();
            if (state) {
                dispatch(setUserName(state.authModel.userName));
            }
            console.log("App initialized");
            setInitialized(true);
        }
    }, []);

    return (
        <Routes>
            <Route element={<MainPage />} path={"/"}></Route>
            <Route element={<GeneralTopic />} path={"/generalTopic"} />
            <Route element={<ChooseQuestionSet />} path={"/questionSet"}></Route>
            <Route element={<PlayPage />} path={"/play"}></Route>
            <Route element={<About />} path={"/about"}></Route>
        </Routes>
    );
};

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <div className="body">
                    <App />
                </div>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
);
