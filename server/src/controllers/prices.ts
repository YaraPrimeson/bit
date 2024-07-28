import {Request, Response} from "express";
import Binance from "binance-api-node";


const client = Binance()
// Authenticated client, can make signed calls
// const client2 = Binance({
//     apiKey: 'Etgw5XJ6MXDkY7eZg4oj6hCkVQIeg6EfaX1jKVdoVo7JVLYx8kBFwnRt4tJtcnct',
//     apiSecret: 'X1TMTP5BTxfBqGRUfgd0kElu9MIFxoz9IXbvy7djAP0nxawcwXNodE3WqL2Gi3Rr',
//     getTime: () => Date.now(),
// })

// client.allBookTickers().then(prices => console.log(prices))
// console.log(prices)
// client.time().then(time => console.log(time))
// client.bookTicker('BTCUSDT', (ticker) => {
//     console.log(ticker)
// })

export default {
    async getPrices(req: Request, res: Response) {
        try {
            const BTC = await client.avgPrice({symbol: 'BTCUSDT'})
            const ETH = await client.avgPrice({symbol: 'ETHUSDT'})
            const SOL = await client.avgPrice({symbol: 'SOLUSDT'})
            return res.status(200).json({ETH, BTC, SOL});
        } catch (e) {
            return res.status(500).json({error: true});
        }
    },
};
