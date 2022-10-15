import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {HashRouter, Routes, Route} from "react-router-dom";
import {MainPage} from "./pages/MainPage";

const root = ReactDOM.createRoot(
   document.getElementById('root') as HTMLElement
);
root.render(
   <React.StrictMode>
      <HashRouter>
         <Routes>
            <Route element={<MainPage/>} path={"/"}></Route>
         </Routes>
      </HashRouter>
   </React.StrictMode>
);
