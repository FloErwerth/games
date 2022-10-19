import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {HashRouter, Routes, Route} from "react-router-dom";
import {MainPage} from "./pages/MainPage/MainPage";
import {Provider} from "react-redux";
import {store} from "./store";

const root = ReactDOM.createRoot(
   document.getElementById('root') as HTMLElement
);

root.render(
   <React.StrictMode>
      <Provider store={store}>
         <HashRouter>
            <Routes>
               <Route element={<MainPage/>} path={"/"}></Route>
            </Routes>
         </HashRouter>
      </Provider>
   </React.StrictMode>
);
