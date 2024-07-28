import React from 'react';
import {Route, Routes} from 'react-router-dom';
import NavigateToDefault from "./NavigationToDefault";
import MainPage from "../pages/Main";
import Wallet from "../pages/Wallet";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/wallet" element={<Wallet/>}/>
            <Route path="/*" element={<NavigateToDefault/>}/>
        </Routes>
    );
};

export default Router;
