"use strict";

const express = require("express"),
app = express(),
port = 3000,
errorController = require("./controllers/errorController"),
homeController = require("./controllers/homeController"),
userController = require("./controllers/userController"),
layouts = require("express-ejs-layouts");

app.set("view engine", "ejs");
app.use(layouts);

app.use(
    express.urlencoded({
        extended: false
    })
);

app.use(express.json());

app.use(express.static("public"));

app.get("/", homeController.sendHomeView);

app.post("/", homeController.showIncomingData);

app.get("/name/:myName", homeController.respondWithName);

//app.post("/sign_up", userController.userSignUpProcessor);

app.get("/items/:vegetables", homeController.sendReqParameters);

app.use(homeController.logRequests);
app.use(errorController.logErrors);
app.use(errorController.respondNoResource);
app.use(errorController.resondInternalError);

app.listen(port, () => {
    console.log(`The Express.js server has started and is listening on port number: ${port}`);
});