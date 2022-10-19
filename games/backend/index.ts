import {TopicInfo} from "../types";
import {Routes} from "./routes/routes";
import {Express, Request, Response} from "express";
const express = require('express');
const cors = require("cors");
const app: Express = express();
app.use(cors());
const fsPromises = require("fs/promises");


//healthcheck
app.get("/healthcheck", function(_, res) {
    res.sendStatus(200);
});

//get general topics
app.get(Routes.TOPICS, async function(_,res: Response) {
    try {
        const topics = await fsPromises.readFile("./questions/topics.json", "utf-8");
        if(topics) {
            console.log("Sending topics..");
            res.send(topics);
        }
    }catch(e) {
        res.send(500);
    }
});

//topics
app.get(Routes.TOPICS_INFO, async function(_,res: Response) {
    try {
        const topics = await fsPromises.readFile("./questions/topics.json", "utf-8");
        if(topics) {
            console.log("Sending topics..");
            res.send(topics);
        }
    }catch(e) {
        res.send(500);
    }
});


app.listen(3001, () => {
    console.log("Listening on port 3001");
});
