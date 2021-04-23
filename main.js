"use strict";

const port = 3000,
express = require("express"),
app = express(),
homeController = require("./controllers/homeController");

app.use(
    express.urlencoded({
        extended: false
    })
);

app.use(express.json());
app.use((req, res, next) => {
    console.log(`Requst was made for ${req.url}`);
    next();
})

app.get("/", homeController.sendHomeView);

app.post("/", homeController.showIncomingData);

app.get("/items/:vegetables", homeController.sendReqParameters);


app.listen(port, () => {
    console.log(`The Express.js server has started and is listening on port number: ${port}`);
});