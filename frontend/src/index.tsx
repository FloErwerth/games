import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {MainPage} from "./pages/MainPage/MainPage";
import {Provider} from "react-redux";
import {store} from "./store";
import {ChooseQuestionSet} from "./pages/ChooseQuestionSet/ChooseQuestionSet";
import {PlayPage} from "./pages/PlayPage/PlayPage";
import {Header} from "./components/Header/Header";
import {About} from "./pages/About/About";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

const App = () => {
    return (
        <Routes>
            <Route element={<MainPage />} path={"/"}></Route>
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
                <Header />
                <div className="body"><App /></div>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
);
