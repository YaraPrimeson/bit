import React from 'react';
import {Route, Routes} from 'react-router-dom';
import NavigateToDefault from "./NavigationToDefault";
import MainPage from "../main";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/*" element={<NavigateToDefault/>}/>
        </Routes>
    );
};

export default Router;
