import React, {useEffect, useState} from 'react';
import api from "../api";
import MainWallet from "../wallet/mainWallet";

const Wallet = () => {
    const [tickerData, setTickerData] = useState();

    const getPrices = () => {
        api.prices.getAllPrices()
            .then((prices) => setTickerData(prices))
            .catch((e) => console.log(e));
    };

    useEffect(() => {
        getPrices();
        const intervalId = setInterval(getPrices, 20000);

        return () => clearInterval(intervalId);
    }, []);


    return (
        <MainWallet tickerData={tickerData}/>
    );
};

export default Wallet;
