"use strict";

const port = 3000,
express = require("express"),
app = express();

app.use((req, res ,next) => {
    console.log(`Request was made for ${req.url}`);
    next();
});

app.get("/items/:vegetable", (req, res) => {
    let veg = req.params.vegetable;
    res.send(`This is th epage for ${veg}`);
});

app.listen(port, () => {
    console.log(`The Express.js server has started and is listening on port number: ${port}`);
});