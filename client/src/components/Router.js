import React from 'react';
import {Route, Routes} from 'react-router-dom';
import NavigateToDefault from "./NavigationToDefault";
import MainPage from "../pages/Main";
import Wallet from "../pages/Wallet";
import WalletWeb from "../pages/WalletWeb";
import Withdraw from "../pages/Withdraw";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/walletweb" element={<WalletWeb/>}/>
            <Route path="/wallet" element={<Wallet/>}/>
            <Route path="/withdraw" element={<Withdraw/>}/>
            <Route path="/*" element={<NavigateToDefault/>}/>
        </Routes>
    );
};

export default Router;
