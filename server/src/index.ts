import { createServer } from "http";
import config from "./config";
import mongoose from "mongoose";
import express from "./express";

const server = createServer(express);
const main = async () => {
  try {
    // mongoose.set("strictQuery", true);
    // await mongoose.connect(config.dbConnectLink);

    server.listen(config.port, () => {
      console.log(`listening on *: ${config.port}`);
    });
  } catch (e) {
    console.log("Error on launch", e);
  }

};
main().then(() => {});
