import {createServer} from "http";
import config from "./config";
import express from "./express";

// {
//   "version": 2,
//   "builds": [
//     {
//       "src": "index.html",
//       "use": "@vercel/node"
//     }
//   ],
//   "routes": [
//     {
//       "src": "/(.*)",
//       "dest": "/"
//     }
//   ]
// }
const server = createServer(express);
const main = async () => {
    try {

        server.listen(config.port, () => {
            console.log(`listening on *: ${config.port}`);
        });
    } catch (e) {
        console.log("Error on launch", e);
    }

};
main().then(() => {
});
